import db from "../models";
import nodemailer from "nodemailer";
import { Request, Response } from "express";
import {
  UserAuthInfoRequest,
  tokenForUser,
} from "../validations/auth.validation";
import moment from "moment";
import bcrypt from "bcrypt-nodejs";

const SUCCESS = true;
const User = db.user;

const signup = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(403).json({ message: "User already exists" });
    } else {
      let token = _generateToken();
      const newUser = new User({
        email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
        verified: { token },
      });
      await newUser.save();
      await _sendVerification(email, token);
      res.json({
        verified: newUser.verified?.state,
        token: tokenForUser(newUser),
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Something Went wrong", error });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("password");

    if (!user?.password) {
      res.status(403).json({ message: "User Does Not Exists." });
    } else {
      if (!bcrypt.compareSync(password, user?.password))
        res.status(403).json({ message: "Wrong Email Or Password" });
      else
        res.json({ verified: user.verified?.state, token: tokenForUser(user) });
    }
  } catch (error) {
    res.status(400).json({ message: "Something Went wrong", error });
  }
};

const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(403).json({ message: "User Does Not Exists" });
    } else {
      let token: string = _generateToken();
      const expiresAt = moment().add(24, "hours");
      user.token = {
        value: token,
        expiresAt: String(expiresAt),
        isUsed: false,
      };
      await _sendForgotPasswordMail(email, token);
      user.save();
      res.json({ message: "Check Your Mailbox" });
    }
  } catch (error) {
    res.status(400).json({ message: "Something Went wrong", error });
  }
};
function _generateToken() {
  var length = Math.floor(Math.random() * 5) + 18;
  var characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var result = "";
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const verifyLink = async (req: Request, res: Response) => {
  try {
    const { token } = req.query;
    const user = await User.findOne({
      "token.value": token,
      "token.isUsed": false,
    });
    const currentTime = moment();
    if (!user) {
      res.status(403).json({ message: "Link Expired." });
    } else {
      if (currentTime.isAfter(user.token?.expiresAt)) {
        res.status(403).json({ message: "Link Expired." });
      } else {
        res.json({ SUCCESS });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Something Went wrong", error });
  }
};

const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token, password } = req.body;
    const user = await User.findOne({
      "token.value": token,
      "token.isUsed": false,
    });

    const currentTime = moment();
    if (!user) {
      res.status(403).json({ message: "Link Expired." });
    } else {
      if (currentTime.isAfter(user.token?.expiresAt)) {
        res.status(403).json({ message: "Link Expired." });
      } else {
        user.password = password;
        user.token = { value: "", isUsed: false, expiresAt: "" };
        user.save();
        res.json({ SUCCESS });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Something Went wrong", error });
  }
};

const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { token } = req.query;
    const user = await User.findOne({
      "verified.token": token,
      "verified.state": false,
    });
    if (!user) {
      res.status(403).json({ message: "Link Expired." });
    } else {
      user.verified = { token: token?.toString(), state: true };
      user.save();
      res.json({ SUCCESS });
    }
  } catch (error) {
    res.status(400).json({ message: "Something Went wrong", error });
  }
};

const me = async (req: UserAuthInfoRequest, res: Response) => {
  if (!req.user) {
    res.status(403).json({ message: "User Does Not Exists" });
  } else {
    res.json({ user: req.user });
  }
};

const updateProfile = async (req: Request & { _user: any }, res: Response) => {
  const user = req._user,
    email = req.body.email;
  if (!user) {
    res.status(403).json({ message: "User Does Not Exists" });
  } else {
    user.email = email;
    user.save();
    res.json({ SUCCESS });
  }
};
const sendAgainVerification = async (
  req: Request & { _user: any },
  res: Response
) => {
  const user = req._user;
  if (user.verified.state)
    res.status(403).json({ message: "User Already Verified." });
  if (!user) {
    res.status(403).json({ message: "User Does Not Exists" });
  } else {
    let token = _generateToken();
    user.verified = { token, state: false };
    user.save();
    _sendVerification(user.email, token);
    res.json({ SUCCESS });
  }
};
export {
  signup,
  login,
  forgotPassword,
  resetPassword,
  verifyEmail,
  verifyLink,
  me,
  updateProfile,
  sendAgainVerification,
};

async function _sendForgotPasswordMail(email: string, token: string) {
  // Mail Send

  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    //secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let html = `<!DOCTYPE html>
  <html lang="en-US"><head><meta content="text/html; charset=utf-8" http-equiv="Content-Type" >
  <meta name="description" content="TES Invitation.">
   
 
 <body style="margin: 0; padding: 0" dir="ltr" bgcolor="#ffffff">
   <table
     border="0"
     cellspacing="0"
     cellpadding="0"
     align="center"
     id="m_-7626415423304311386email_table"
     style="border-collapse: collapse"
   >
     <tbody>
       <tr>
         <td
           id="m_-7626415423304311386email_content"
           style="
             font-family: Helvetica Neue, Helvetica, Lucida Grande, tahoma,
               verdana, arial, sans-serif;
             background: #ffffff;
           "
         >
           <table
             border="0"
             width="100%"
             cellspacing="0"
             cellpadding="0"
             style="border-collapse: collapse"
           >
             <tbody>
               <tr>
                 <td height="20" style="line-height: 20px" colspan="3">
                   &nbsp;
                 </td>
               </tr>
               <tr>
                 <td height="1" colspan="3" style="line-height: 1px"></td>
               </tr>
               <tr>
                 <td>
                   <table
                     border="0"
                     width="100%"
                     cellspacing="0"
                     cellpadding="0"
                     style="
                       border-collapse: collapse;
                       text-align: center;
                       width: 100%;
                     "
                   >
                     <tbody>
                       <tr>
                         <td width="15px" style="width: 15px"></td>
                         <td
                           style="
                             line-height: 0px;
                             max-width: 600px;
                             padding: 0 0 15px 0;
                           "
                         >
                           <table
                             border="0"
                             width="100%"
                             cellspacing="0"
                             cellpadding="0"
                             style="border-collapse: collapse"
                           >
                             <tbody>
                               <tr>
                                 <td
                                   style="
                                     width: 100%;
                                     text-align: left;
                                     height: 33px;
                                     display:flex;
                                     align-item:center;
                                   "
                                 >
                                   <img height="33" src="${
                                     process.env.MAIN_URL + "uploads/logo.svg"
                                   }" style="border:0"
                                   class="CToWUd" data-bit="iit"> Free Resume
                                   Builder
                                 </td>
                               </tr>
                             </tbody>
                           </table>
                         </td>
                         <td width="15px" style="width: 15px"></td>
                       </tr>
                     </tbody>
                   </table>
                 </td>
               </tr>
               <tr>
                 <td>
                   <table
                     border="0"
                     width="430"
                     cellspacing="0"
                     cellpadding="0"
                     style="border-collapse: collapse; margin: 0 auto 0 auto"
                   >
                     <tbody>
                       <tr>
                         <td>
                           <table
                             border="0"
                             width="430px"
                             cellspacing="0"
                             cellpadding="0"
                             style="
                               border-collapse: collapse;
                               margin: 0 auto 0 auto;
                               width: 430px;
                             "
                           >
                             <tbody>
                               <tr>
                                 <td
                                   width="15"
                                   style="display: block; width: 15px"
                                 >
                                   &nbsp;&nbsp;&nbsp;
                                 </td>
                               </tr>
                               <tr>
                                 <td>
                                   <table
                                     border="0"
                                     width="100%"
                                     cellspacing="0"
                                     cellpadding="0"
                                     style="border-collapse: collapse"
                                   >
                                     <tbody>
                                       <tr>
                                         <td>
                                           <table
                                             border="0"
                                             cellspacing="0"
                                             cellpadding="0"
                                             style="border-collapse: collapse"
                                           >
                                             <tbody>
                                               <tr>
                                                 <td
                                                   width="20"
                                                   style="
                                                     display: block;
                                                     width: 20px;
                                                   "
                                                 >
                                                   &nbsp;&nbsp;&nbsp;
                                                 </td>
                                                 <td>
                                                   <table
                                                     border="0"
                                                     cellspacing="0"
                                                     cellpadding="0"
                                                     style="
                                                       border-collapse: collapse;
                                                     "
                                                   >
                                                     <tbody>
                                                       <tr>
                                                         <td>
                                                           <p
                                                             style="
                                                               margin: 10px 0
                                                                 10px 0;
                                                               color: #565a5c;
                                                               font-size: 18px;
                                                             "
                                                           >
                                                             Hello,
                                                           </p>
 
                                                           <p
                                                             style="
                                                               margin: 10px 0
                                                                 10px 0;
                                                               color: #565a5c;
                                                               font-size: 18px;
                                                             "
                                                           >
                                                             Thank you for
                                                             reaching out, We
                                                             have recived reset
                                                             password request for
                                                             ${email}.
                                                           </p>
                                                         </td>
                                                       </tr>
                                                       <tr>
                                                         <td
                                                           height="20"
                                                           style="
                                                             line-height: 20px;
                                                           "
                                                         >
                                                           &nbsp;
                                                         </td>
                                                       </tr>
                                                       <tr>
                                                         <td>
                                                           <a
                                                             style="
                                                               color: #1b74e4;
                                                               text-decoration: none;
                                                               display: block;
                                                               width: 370px;
                                                             "
                                                             target="_blank"
                                                           >
                                                             <table
                                                               border="0"
                                                               width="390"
                                                               cellspacing="0"
                                                               cellpadding="0"
                                                               style="
                                                                 border-collapse: collapse;
                                                               "
                                                             >
                                                               <tbody>
                                                                 <tr>
                                                                   <td
                                                                     style="
                                                                       border-collapse: collapse;
                                                                       border-radius: 3px;
                                                                       text-align: center;
                                                                       display: block;
                                                                       border: solid
                                                                         1px
                                                                         #009fdf;
                                                                       padding: 10px
                                                                         16px
                                                                         14px
                                                                         16px;
                                                                       margin: 0
                                                                         2px 0
                                                                         auto;
                                                                       min-width: 80px;
                                                                       background-color: #47a2ea;
                                                                     "
                                                                   >
                                                                     <a
                                                                       href="${
                                                                         process
                                                                           .env
                                                                           .APP_URL
                                                                       }reset-password/${token}"
                                                                       style="
                                                                         color: #1b74e4;
                                                                         text-decoration: none;
                                                                         display: block;
                                                                       "
                                                                       target="_blank"
                                                                     >
                                                                       <center>
                                                                         <font
                                                                           size="3"
                                                                           ><span
                                                                             style="
                                                                               font-family: Helvetica
                                                                                   Neue,
                                                                                 Helvetica,
                                                                                 Roboto,
                                                                                 Arial,
                                                                                 sans-serif;
                                                                               white-space: nowrap;
                                                                               font-weight: bold;
                                                                               vertical-align: middle;
                                                                               color: #fdfdfd;
                                                                               font-size: 16px;
                                                                               line-height: 16px;
                                                                             "
                                                                             ><span
                                                                               class="il"
                                                                               >Reset</span
                                                                             >&nbsp;<span
                                                                               class="il"
                                                                               >Password</span
                                                                             ></span
                                                                           ></font
                                                                         >
                                                                       </center>
                                                                     </a>
                                                                   </td>
                                                                 </tr>
                                                               </tbody>
                                                             </table>
                                                           </a>
                                                         </td>
                                                       </tr>
                                                       <tr>
                                                         <td
                                                           height="20"
                                                           style="
                                                             line-height: 20px;
                                                           "
                                                         >
                                                           &nbsp;
                                                         </td>
                                                       </tr>
                                                     </tbody>
                                                   </table>
                                                 </td>
                                               </tr>
                                             </tbody>
                                           </table>
                                         </td>
                                       </tr>
                                     </tbody>
                                   </table>
                                 </td>
                               </tr>
                               <tr>
                                 <td
                                   height="10"
                                   style="line-height: 10px"
                                   colspan="1"
                                 >
                                   &nbsp;
                                 </td>
                               </tr>
                             </tbody>
                           </table>
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 </td>
               </tr>
               <tr>
                 <td>
                   <table
                     border="0"
                     cellspacing="0"
                     cellpadding="0"
                     style="
                       border-collapse: collapse;
                       margin: 0 auto 0 auto;
                       width: 100%;
                       max-width: 600px;
                     "
                   >
                     <tbody>
                       <tr>
                         <td height="4" style="line-height: 4px" colspan="3">
                           &nbsp;
                         </td>
                       </tr>
                       <tr>
                         <td width="15px" style="width: 15px"></td>
                         <td width="20" style="display: block; width: 20px">
                           &nbsp;&nbsp;&nbsp;
                         </td>
                         <td style="text-align: center">
                           <div
                             style="
                               color: #abadae;
                               font-size: 14px;
                               margin: 0 auto 5px auto;
                             "
                           >
                             Best of Luck for Job Hunt from Free Resume
                             Builder.👍
                           </div>
                         </td>
                       </tr>
 
                       <tr>
                         <td
                           height="32"
                           style="line-height: 32px"
                           colspan="3"
                         ></td>
                       </tr>
                     </tbody>
                   </table>
                 </td>
               </tr>
               <tr>
                 <td height="20" style="line-height: 20px" colspan="3">
                   &nbsp;
                 </td>
               </tr>
             </tbody>
           </table>
         </td>
       </tr>
     </tbody>
   </table>
 </body>
  
  </html>`;
  // send mail with defined transport object
  await transporter.sendMail({
    from: process.env.EMAIL_USERNAME, // sender address
    to: email, // list of receivers
    subject: "Free Resume Builder Password Reset", // Subject line
    text: "Free Resume Builder Password Reset", // plain text body
    html: html, // html body
  });
  // =========
}
async function _sendVerification(email: string, token: string) {
  // Mail Send

  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    //secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let html = `<!DOCTYPE html>
  <html lang="en-US"><head><meta content="text/html; charset=utf-8" http-equiv="Content-Type" >
  <meta name="description" content="TES Invitation.">
   
 
 <body style="margin: 0; padding: 0" dir="ltr" bgcolor="#ffffff">
   <table
     border="0"
     cellspacing="0"
     cellpadding="0"
     align="center"
     id="m_-7626415423304311386email_table"
     style="border-collapse: collapse"
   >
     <tbody>
       <tr>
         <td
           id="m_-7626415423304311386email_content"
           style="
             font-family: Helvetica Neue, Helvetica, Lucida Grande, tahoma,
               verdana, arial, sans-serif;
             background: #ffffff;
           "
         >
           <table
             border="0"
             width="100%"
             cellspacing="0"
             cellpadding="0"
             style="border-collapse: collapse"
           >
             <tbody>
               <tr>
                 <td height="20" style="line-height: 20px" colspan="3">
                   &nbsp;
                 </td>
               </tr>
               <tr>
                 <td height="1" colspan="3" style="line-height: 1px"></td>
               </tr>
               <tr>
                 <td>
                   <table
                     border="0"
                     width="100%"
                     cellspacing="0"
                     cellpadding="0"
                     style="
                       border-collapse: collapse;
                       text-align: center;
                       width: 100%;
                     "
                   >
                     <tbody>
                       <tr>
                         <td width="15px" style="width: 15px"></td>
                         <td
                           style="
                             line-height: 0px;
                             max-width: 600px;
                             padding: 0 0 15px 0;
                           "
                         >
                           <table
                             border="0"
                             width="100%"
                             cellspacing="0"
                             cellpadding="0"
                             style="border-collapse: collapse"
                           >
                             <tbody>
                               <tr>
                                 <td
                                   style="
                                     width: 100%;
                                     text-align: left;
                                     height: 33px;
                                     display:flex;
                                     align-item:center;
                                   "
                                 >
                                   <img height="33" src="${
                                     process.env.MAIN_URL + "uploads/logo.svg"
                                   }" style="border:0"
                                   class="CToWUd" data-bit="iit"> Free Resume
                                   Builder
                                 </td>
                               </tr>
                             </tbody>
                           </table>
                         </td>
                         <td width="15px" style="width: 15px"></td>
                       </tr>
                     </tbody>
                   </table>
                 </td>
               </tr>
               <tr>
                 <td>
                   <table
                     border="0"
                     width="430"
                     cellspacing="0"
                     cellpadding="0"
                     style="border-collapse: collapse; margin: 0 auto 0 auto"
                   >
                     <tbody>
                       <tr>
                         <td>
                           <table
                             border="0"
                             width="430px"
                             cellspacing="0"
                             cellpadding="0"
                             style="
                               border-collapse: collapse;
                               margin: 0 auto 0 auto;
                               width: 430px;
                             "
                           >
                             <tbody>
                               <tr>
                                 <td
                                   width="15"
                                   style="display: block; width: 15px"
                                 >
                                   &nbsp;&nbsp;&nbsp;
                                 </td>
                               </tr>
                               <tr>
                                 <td>
                                   <table
                                     border="0"
                                     width="100%"
                                     cellspacing="0"
                                     cellpadding="0"
                                     style="border-collapse: collapse"
                                   >
                                     <tbody>
                                       <tr>
                                         <td>
                                           <table
                                             border="0"
                                             cellspacing="0"
                                             cellpadding="0"
                                             style="border-collapse: collapse"
                                           >
                                             <tbody>
                                               <tr>
                                                 <td
                                                   width="20"
                                                   style="
                                                     display: block;
                                                     width: 20px;
                                                   "
                                                 >
                                                   &nbsp;&nbsp;&nbsp;
                                                 </td>
                                                 <td>
                                                   <table
                                                     border="0"
                                                     cellspacing="0"
                                                     cellpadding="0"
                                                     style="
                                                       border-collapse: collapse;
                                                     "
                                                   >
                                                     <tbody>
                                                       <tr>
                                                         <td>
                                                           <p
                                                             style="
                                                               margin: 10px 0
                                                                 10px 0;
                                                               color: #565a5c;
                                                               font-size: 18px;
                                                             "
                                                           >
                                                             Welcome to Free Resume Builder,
                                                           </p>
 
                                                           <p
                                                             style="
                                                               margin: 10px 0
                                                                 10px 0;
                                                               color: #565a5c;
                                                               font-size: 18px;
                                                             "
                                                           >
                                                             
                                                              Let's Build Your Free Resumes by verifing ${email}.
                                                           </p>
                                                         </td>
                                                       </tr>
                                                       <tr>
                                                         <td
                                                           height="20"
                                                           style="
                                                             line-height: 20px;
                                                           "
                                                         >
                                                           &nbsp;
                                                         </td>
                                                       </tr>
                                                       <tr>
                                                         <td>
                                                           <a
                                                             style="
                                                               color: #1b74e4;
                                                               text-decoration: none;
                                                               display: block;
                                                               width: 370px;
                                                             "
                                                             target="_blank"
                                                           >
                                                             <table
                                                               border="0"
                                                               width="390"
                                                               cellspacing="0"
                                                               cellpadding="0"
                                                               style="
                                                                 border-collapse: collapse;
                                                               "
                                                             >
                                                               <tbody>
                                                                 <tr>
                                                                   <td
                                                                     style="
                                                                       border-collapse: collapse;
                                                                       border-radius: 3px;
                                                                       text-align: center;
                                                                       display: block;
                                                                       border: solid
                                                                         1px
                                                                         #009fdf;
                                                                       padding: 10px
                                                                         16px
                                                                         14px
                                                                         16px;
                                                                       margin: 0
                                                                         2px 0
                                                                         auto;
                                                                       min-width: 80px;
                                                                       background-color: #47a2ea;
                                                                     "
                                                                   >
                                                                     <a
                                                                       href="${
                                                                         process
                                                                           .env
                                                                           .APP_URL
                                                                       }email-verification/${token}"
                                                                       style="
                                                                         color: #1b74e4;
                                                                         text-decoration: none;
                                                                         display: block;
                                                                       "
                                                                       target="_blank"
                                                                     >
                                                                       <center>
                                                                         <font
                                                                           size="3"
                                                                           ><span
                                                                             style="
                                                                               font-family: Helvetica
                                                                                   Neue,
                                                                                 Helvetica,
                                                                                 Roboto,
                                                                                 Arial,
                                                                                 sans-serif;
                                                                               white-space: nowrap;
                                                                               font-weight: bold;
                                                                               vertical-align: middle;
                                                                               color: #fdfdfd;
                                                                               font-size: 16px;
                                                                               line-height: 16px;
                                                                             "
                                                                             ><span
                                                                               class="il"
                                                                               >Verify</span
                                                                             >&nbsp;<span
                                                                               class="il"
                                                                               >Email</span
                                                                             ></span
                                                                           ></font
                                                                         >
                                                                       </center>
                                                                     </a>
                                                                   </td>
                                                                 </tr>
                                                               </tbody>
                                                             </table>
                                                           </a>
                                                         </td>
                                                       </tr>
                                                       <tr>
                                                         <td
                                                           height="20"
                                                           style="
                                                             line-height: 20px;
                                                           "
                                                         >
                                                           &nbsp;
                                                         </td>
                                                       </tr>
                                                     </tbody>
                                                   </table>
                                                 </td>
                                               </tr>
                                             </tbody>
                                           </table>
                                         </td>
                                       </tr>
                                     </tbody>
                                   </table>
                                 </td>
                               </tr>
                               <tr>
                                 <td
                                   height="10"
                                   style="line-height: 10px"
                                   colspan="1"
                                 >
                                   &nbsp;
                                 </td>
                               </tr>
                             </tbody>
                           </table>
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 </td>
               </tr>
               <tr>
                 <td>
                   <table
                     border="0"
                     cellspacing="0"
                     cellpadding="0"
                     style="
                       border-collapse: collapse;
                       margin: 0 auto 0 auto;
                       width: 100%;
                       max-width: 600px;
                     "
                   >
                     <tbody>
                       <tr>
                         <td height="4" style="line-height: 4px" colspan="3">
                           &nbsp;
                         </td>
                       </tr>
                       <tr>
                         <td width="15px" style="width: 15px"></td>
                         <td width="20" style="display: block; width: 20px">
                           &nbsp;&nbsp;&nbsp;
                         </td>
                         <td style="text-align: center">
                           <div
                             style="
                               color: #abadae;
                               font-size: 14px;
                               margin: 0 auto 5px auto;
                             "
                           >
                             Best of Luck for Job Hunt from Free Resume
                             Builder.👍
                           </div>
                         </td>
                       </tr>
 
                       <tr>
                         <td
                           height="32"
                           style="line-height: 32px"
                           colspan="3"
                         ></td>
                       </tr>
                     </tbody>
                   </table>
                 </td>
               </tr>
               <tr>
                 <td height="20" style="line-height: 20px" colspan="3">
                   &nbsp;
                 </td>
               </tr>
             </tbody>
           </table>
         </td>
       </tr>
     </tbody>
   </table>
 </body>
  
  </html>`;
  // send mail with defined transport object
  await transporter.sendMail({
    from: process.env.EMAIL_USERNAME, // sender address
    to: email, // list of receivers
    subject: "Free Resume Builder Password Reset", // Subject line
    text: "Free Resume Builder Password Reset", // plain text body
    html: html, // html body
  });
  // =========
}
