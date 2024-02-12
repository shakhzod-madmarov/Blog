import { body } from "express-validator";

export const registerValidation = [
  body("email", "Wrong Email Format").isEmail(),
  body("password", "Password should be more than 5 symbols").isLength({
    min: 5,
  }),
  body("fullName", "Enter Name").isLength({ min: 3 }),
  body("avatarUrl", "Wrong URL").optional().isURL(),
];
