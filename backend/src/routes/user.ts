import { Router, Request, Response } from "express";
import prisma from "../prismaClient";
import jwt from "jsonwebtoken";
import { signinInput, SignupInput } from "@harshvardhanp4/medium-common";
import { ZodError } from "zod";
import bcrypt from "bcrypt";
import { handleUserSignUpInputValidation } from "../middlewares/user/userValidations";

const userRouter = Router();
const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string);
};


interface IUnifiedResponse {
  success: boolean;
  message?: string;
  data?: Object | string;
}


userRouter.post("/signup", handleUserSignUpInputValidation, async (req: Request<any, any, SignupInput>, res: Response<IUnifiedResponse>): Promise<void> => {
  try {
    const { username: email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // In production, hash the password before storing

    // Create user

    const user = await prisma.user.create({ data: { name: name ?? null, email, password: hashedPassword, }, }); { }

    // Create JWT
    const token = generateToken(user.id);
    res.json({ success: true, data: { user, token: `Bearer ${token}` } });
  } catch (error) {
    if (error instanceof ZodError) return void res.status(400).json({ success: false, message: "Validation failed" });
    if (error instanceof Error && error.message.includes("Unique constraint failed")) return void res.status(400).json({ success: false, message: "Email already exists" });
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});



//Signin


userRouter.post("/signin", async (req: Request, res: Response) => {
  try {
    const parsed = signinInput.parse(req.body);
    const { username: email, password } = parsed;
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken(user.id);
    res.json({ user, token: `Bearer ${token}` });
  }
  catch (error) {
    console.error("Signin", error);
    res.status(500).json({ message: "Internal server error" });
  }
})


export default userRouter;