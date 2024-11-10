import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "job title is required" })
    .min(80, { message: "Job title must be at least 3 characters" }),
  jobType: z.enum(JOBTYPES, { required_error: "Job type must be selected!" }),
  salaryFrom: z.string({ required_error: "Salary From is Required" }),
  salaryTo: z.string({ required_error: "Salary To is Required" }),
  categoryId: z.string({
    required_error: "Category field is must be selected!",
  }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Required skill must be filled, at least 1 skill" }),
  jobDescription: z
    .string({ required_error: "Job description is required" })
    .min(10, { message: "Job description must be at least 10 character" }),
  responsibility: z
    .string({ required_error: "Job description is required" })
    .min(10, { message: "Job description must be at least 10 character" }),
  whoYouAre: z
    .string({ required_error: "Job description is required" })
    .min(10, { message: "Job description must be at least 10 character" }),
  niceToHave: z
    .string({ required_error: "Job description is required" })
    .min(10, { message: "Job description must be at least 10 character" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits field must be at least 1 benefit" }),
});
