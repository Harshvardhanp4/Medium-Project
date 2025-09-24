import axios from "axios"
import { Appbar } from "../components/Appbar"
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8787";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handlePublish = async () => {
        // Basic validation
        if (!title.trim() || !content.trim()) {
            alert("Please fill in both title and content");
            return;
        }

        setLoading(true);
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title: title.trim(),
                content: content.trim()
            }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            console.log("Blog published:", res.data);  // Debug log
            navigate(`/blog/${res.data.id}`);
        } catch (error: any) {
            console.error("Publishing error:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Failed to publish blog. Please try again.");
            setLoading(false);
        }
    };

    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="max-w-screen-lg w-full pt-8">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Title"
                />
                <TextEditor
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                />
                <button
                    onClick={handlePublish}
                    disabled={loading || !title.trim() || !content.trim()}
                    type="submit"
                    className="mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 disabled:bg-gray-400"
                >
                    {loading ? "Publishing..." : "Publish"}
                </button>
            </div>
        </div>
    </div>
}

interface TextEditorProps {
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
}

function TextEditor({ onChange, value }: TextEditorProps) {
    return <div className="pt-2">
        <textarea
            onChange={onChange}
            value={value}
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your thoughts here..."
        />
    </div>
}