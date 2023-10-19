export interface HeaderArea {
  title: string;
  score: number;
}
export interface ResumeFormatting {
  language: string;
  bodyFont: string;
  titleFont: string;
  template: string;
}
export interface PersonalInfo {
  jobTitle: string;
  firstName: string;
  lastName: string;
  address: string;
  mobileNo: string;
  email: string;
  image: string;
}
export interface EmploymentHistoryList {
  jobTitle: string;
  companyName: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  isStillWorking: boolean;
}
export interface EducationHistory {
  schoolName: string;
  location: string;
  degree: string;
  startDate: string;
  endDate: string;
  isStillStudying: boolean;
}
export interface Website {
  label: string;
  link: string;
}

export interface Skill {
  name: string;
  // rating: number;
}
export interface Reference {
  name: string;
  company: string;
  email: string;
  phone: string;
}

export interface Data {
  header: HeaderArea;
  resumeFormatting: ResumeFormatting;
  personalInfo: PersonalInfo;
  professionalSummary: string;
  employmentHistory: EmploymentHistoryList[];
  educationHistory: EducationHistory[];
  websites: Website[];
  skills: Skill[];
  hobbies: string;
  referance: Reference;
}
export function formatDate(date: string) {
  return date.split("-").reverse().join("-");
}
