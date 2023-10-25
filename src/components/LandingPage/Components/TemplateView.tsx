import { useRouter } from "next/router";

export default function TemplateView() {
  const router = useRouter();
  return (
    <section className="landing-section">
      <div className="container">
        <div className="landing-section-content">
          <div className="landing-section-detail">
            <div className="row">
              <div className="col col-12 col-md-6 col-lg-6 col-xl-8 ms-auto">
                <div className="landing-section-heading">
                  <h1 className="landing-section-title">
                    CREATE YOUR RESUME INSTANTLY !
                  </h1>
                  <p className="landing-section-description">
                    Choose a template below to get started
                  </p>
                </div>
              </div>
              <div className="col col-12 col-md-3 col-lg-3 col-xl-2">
                <div className="time-detail">
                  <li className="time-detail-item">
                    <span>
                      <img
                        src="assets/image/icon1.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </span>
                    <p className="time-detail-description">24x7 Free</p>
                  </li>
                  <li className="time-detail-item">
                    <span>
                      <img
                        src="assets/image/icon2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </span>
                    <p className="time-detail-description">No subscriptions.</p>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-content">
            <div className="resume-item">
              <div className="resume-item-img">
                <img src="assets/image/img1.png" alt="" className="img-fluid" />
                <a className="resume-item-link" style={{ opacity: 0.5 }}>
                  Will Be Live Soon
                </a>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-item-img">
                <img
                  src="assets/image/img2.png"
                  alt=""
                  className="img-fluid"
                  style={{
                    height: "532px",
                    width: "373px",
                  }}
                />
                <a
                  className="resume-item-link"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    router.push({
                      pathname: "/resume-builder",
                      query: { template: "Template0" }, // the data
                    })
                  }
                >
                  CHOOSE TEMPLATE
                </a>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-item-img">
                <img src="assets/image/img3.png" alt="" className="img-fluid" />
                <a className="resume-item-link" style={{ opacity: 0.5 }}>
                  Will Be Live Soon
                </a>
              </div>
            </div>
          </div>
          {/* <div className="landing-section-button">
            <a className="btn btn-outline-dark">More On The Way!</a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
