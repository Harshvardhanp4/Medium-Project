import { Router, type Request, type Response } from "express";
import { authMiddleware, type AuthRequest } from "../middlewares/auth";
import prisma from "../prismaClient";
import { createBlogInput, updateBlogInput } from "@harshvardhanp4/medium-common";
import { ZodError } from "zod";

//-------------protected route------------------------//
const blogRouter = Router();

blogRouter.use(authMiddleware);

//--------------Create Blog----------------------//

blogRouter.post("/", async (req: AuthRequest, res: Response) => {
    try {
        const parsed = createBlogInput.parse(req.body);
        const { title, content } = parsed;

        const blog = await prisma.blog.create({
            data: {
                title,
                content,
                authorId: req.user!.id
            }

        });
        res.json({ message: "Blog Created! ", id: blog.id })

    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({ message: "Validation Failed" });
        }
        res.status(500).json({ message: "Internal Server Error" })
    }
});


//---------------- Update Blog----------------//

blogRouter.put("/", async (req: AuthRequest, res: Response) => {
    try {
        const parsed = updateBlogInput.parse(req.body); // validates only title/content
        const { title, content } = parsed;

        // Only include fields that are defined
        const dataToUpdate: { title?: string; content?: string } = {};
        if (title !== undefined) dataToUpdate.title = title;
        if (content !== undefined) dataToUpdate.content = content;

        const blog = await prisma.blog.update({
            where: { id: req.body.id }, // id comes from req.body
            data: dataToUpdate
        });

        res.json({ message: "Blog Updated!", id: blog.id });
    } catch (error) {
        if (error instanceof Error) {
            if (error.message.includes("Record to update not found.")) {
                return res.status(404).json({ message: "Blog Not Found" });
            }
        }
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Get all blogs //add pagination later


blogRouter.get("/bulk", async (req: Request, res: Response) => {
    try {
        const blogs = await prisma.blog.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });
        res.json({ blogs });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" })
    }


});

//---------------- Get blog by id----------------//

blogRouter.get("/:id", async (req: AuthRequest, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Blog id is required in params" });
        }
        const blog = await prisma.blog.findUnique({
            where: {
                id
            }, select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });
        if (!blog) {
            return res.status(404).json({ message: "Blog Not Found" });
        }
        res.json({ blog });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
});

export default blogRouter;



