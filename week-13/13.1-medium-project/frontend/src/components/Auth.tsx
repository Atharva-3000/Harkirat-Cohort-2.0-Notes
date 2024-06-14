import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@atharva-3000/commons-medium";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import toast from "react-hot-toast";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
                postInputs
            );
            const jwt = response.data;
            localStorage.setItem("token", JSON.stringify(jwt));
            toast.success("Logged in successfully")
            navigate("/blogs");
        } catch (e) {
            // alert the user that request failed.
            toast.error("Something went wrong. Please try again.")
            console.error(e);
        }

    }

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10 flex flex-col items-center">

                        <div className="text-3xl font-bold">
                            {type === "signin" ? "Sing in to your Account" : "Create a new Account"}
                        </div>
                        <div className="text-slate-500">

                            {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                            &nbsp;
                            <Link className="text-blue-400 underline" to={type === "signin" ? "/signup" :
                                "/signin"}>
                                {type === "signin" ? "Sign up" : "Sign in"}
                            </Link>
                        </div>
                    </div>


                    <div className="pt-6">

                        {type === "signup" ?
                            <LabelledInput label="Username"
                                placeholder="Atharva 3000" onChange={(e) => {
                                    setPostInputs({
                                        ...postInputs,
                                        name: e.target.value
                                    })
                                }} /> :
                            null
                        }


                        <LabelledInput label="Email" placeholder="atharva@gmail.com"
                            type={"email"}
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    email: e.target.value
                                })
                            }} />
                        <LabelledInput label="Password" placeholder="dont use 1234"
                            type={"password"}
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    password: e.target.value
                                })
                            }} />
                        <button type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            onClick={sendRequest}
                        >{type === "signup" ? "Sign up" : "Sign in"}</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return (
        <div>
            <label className="font-semibold block mb-2 text-sm text-black pt-4">{label}</label>
            <input type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required onChange={onChange} />
        </div>
    )
}