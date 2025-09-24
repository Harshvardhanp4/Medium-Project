import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { type SignupInput } from "@harshvardhanp4/medium-common";
import axios from "axios";
import { WebsiteName } from "./WebsiteName";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8787";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            // Handle different response structures for signup and signin
            const jwt = type === "signup"
                ? response.data.data.token    // signup response: {success, data: {user, token}}
                : response.data.token;        // signin response: {user, token}

            if (!jwt) {
                throw new Error("No token received from server");
            }

            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch (err) {
            console.error("Authentication error:", err);
            alert(type === "signup" ? "Error while signing up" : "Error while signing in");
        }
    }





    return <div className="h-screen flex justify-center flex-col">
        <WebsiteName />
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-bold" >
                        Create an account
                    </div>
                    <div className="text-slate-500">
                        {type === "signup" ? "Already have an account?" : "Don't have an account?"}
                        <Link className="pl-2 underline" to={type === "signup" ? "/signin" : "/signup"}>
                            {type === "signup" ? "Sign In" : "Sign Up"}
                        </Link>
                    </div>
                </div>
                <div className="pt-4">
                    {type === "signup" ? <LabelInput label="Name" placeholder="Harshvardhan...." onChange={(e) => {
                        setPostInputs(postInputs => ({
                            ...postInputs,
                            name: e.target.value
                        }))
                    }}></LabelInput> : null}

                    <LabelInput label="Username" placeholder="harsh@gmail.com" onChange={(e) => {
                        setPostInputs(postInputs => ({
                            ...postInputs,
                            username: e.target.value
                        }))
                    }}></LabelInput>

                    <LabelInput label="Password" type={"password"} placeholder="harsh@xyz" onChange={(e) => {
                        setPostInputs(postInputs => ({
                            ...postInputs,
                            password: e.target.value
                        }))
                    }}></LabelInput>
                    <div className="pt-8">
                        <button onClick={sendRequest} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
}
interface LabelInputProps {
    label: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}
function LabelInput({ label, placeholder, onChange, type }: LabelInputProps) {
    return <div>
        <label className="block mb-2 text-sm  text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}