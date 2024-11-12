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
    .string({ required_error: "At least 1 skill must be selected" })
    .array()
    .nonempty({ message: "Required skill must be filled, at least 1 skill" }),
  jobDescription: z
    .string({ required_error: "Job description is required" })
    .min(10, { message: "Job description must be at least 10 character" }),
  responsibility: z
    .string({ required_error: "Job responsibility is required" })
    .min(10, { message: "Job Responsibility must be at least 10 character" }),
  whoYouAre: z
    .string({ required_error: "Who You Are section is required" })
    .min(10, { message: "Who You Are section must be at least 10 character" }),
  niceToHave: z
    .string({ required_error: "Nice To Have section is required" })
    .min(10, { message: "Nice to Have section must be at least 10 character" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits field must be at least 1 benefit" }),
});
