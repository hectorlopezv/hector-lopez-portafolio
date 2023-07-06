import { z } from "zod";

export const emailValidator = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});

export type emailValidatorType = z.infer<typeof emailValidator>;
