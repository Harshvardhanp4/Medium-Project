import { useEffect } from "react";
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "../components/Skeleton";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/signin");
        }
    }, [navigate]);
    if (loading) {
        return <div>
            <Appbar></Appbar>
            <div className="flex justify-center">
                <div>
                    <Skeleton></Skeleton>
                    <Skeleton></Skeleton>
                    <Skeleton></Skeleton>
                    <Skeleton></Skeleton>
                    <Skeleton></Skeleton>
                </div>

            </div>
        </div>

    }
    return <div>
        <Appbar></Appbar>
        <div className="flex justify-center">
            <div>
                {blogs.map(blog => <BlogCard
                    id={(blog.id)}
                    authorname={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"25th Dec 2025"}
                ></BlogCard>)}

            </div>
        </div>
    </div>

}