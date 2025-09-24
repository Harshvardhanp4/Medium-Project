import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b border-slate-200 flex justify-between px-10 py-4">
        <Link to={'/blogs'}>
            <div className="flex flex-col justify-center cursor-pointer text-2xl font-bold px-4 py-2 ">
                Medium
            </div>
        </Link>
        <div>
            <Link to={`/publish`}>
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-4">New Blog</button>
            </Link>
            <Avatar size={"big"} name="harsh"></Avatar>
        </div>
    </div>

}