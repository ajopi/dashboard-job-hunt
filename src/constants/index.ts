import { EnumValues } from "zod";
export type optionType = {
  id: string;
  label: string;
};

export const JOBTYPES: EnumValues = [
  "Full Time",
  "Part Time",
  "Remote",
  "Internship",
];

export const JOB_LISTING_COLUMNS: string[] = [
  "Roles",
  "Status",
  "Date Posted",
  "Job Type",
  "Applicants",
  "Needs",
];

export const JOB_APPLICANT_COLUMNS: string[] = ["Name", "Applied Dates"];

export const JOB_APPLICANT_DATA = [
  {
    name: "Ajopi",
    appliedDate: "15 Aug 2023",
  },
];

export const JOB_LISTING_DATA = [
  {
    roles: "Software Engineer",
    status: "Live",
    datePosted: "12 Aug 2023",
    dueDate: "12 Sep 2023",
    jobType: "Full-Time",
    applicants: 1,
    needs: 10,
  },
];

export const LOCATION_OPTIONS: optionType[] = [
  {
    id: "Indonesia",
    label: "Indonesia",
  },
  {
    id: "Malaysia",
    label: "Malaysia",
  },
  {
    id: "Singapore",
    label: "Singapore",
  },
  {
    id: "Thailand",
    label: "Thailand",
  },
];
