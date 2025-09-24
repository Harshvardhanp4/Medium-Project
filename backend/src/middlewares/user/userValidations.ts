import { signupInput } from "@harshvardhanp4/medium-common";
import { NextFunction, type Request, type Response } from "express";
import { issue } from "zod/v4/core/util.cjs";

export const handleUserSignUpInputValidation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   try {
      const result = signupInput.safeParse(req.body);
      console.log('passed');
      console.log(result)
      if (result.success) return void next()
      console.log('passed');
      return void res.status(403).json({ success: false, message: result.error?.issues.map(issue => { return { message: issue.message, path: issue.path, status: issue.code } }) });
   } catch (error) {
      return void res.status(403).json({ message: "Invalid Inputs" })
   }
};