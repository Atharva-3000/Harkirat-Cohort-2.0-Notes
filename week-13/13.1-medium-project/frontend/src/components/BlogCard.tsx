import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id:string;
}



export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
        <div className="border-b border-slate-200 pb-4 p-4 
        w-screen
        max-w-screen-md cursor-pointer">
            <div className="flex">
                <Avatar name=
                    {authorName}
                    size="small"
                />

                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle />
                </div>
                <div className="pl-2 font-thin text-slate-500 flex justify-center flex-col">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.length > 100 ? content.substring(0, 100) + "..." : content}
            </div>
            <div className=" text-slate-500 ext-sm
             font-thin pt-4">
                {
                    `${Math.ceil(content.length / 100)} min read`
                }
            </div>
        </div>
        </Link>
    )
}
export function Avatar({ name, size = "small" }: { name: string, size: "small" | "big" }) {
    return (
        <div className={`relative
        inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600
        ${size === "small" ? "w-6 h-6" : "w-8 h-8"}
        `}>
            <span className={`${
                size==="small" ? "text-xs" : "text-md"
            } text-gray-600 dark:text-gray-300 
                font-thin`
                }>
                {name.split(" ").map((n) => n[0]).join("")}
            </span>
        </div>
    )
}

export function Circle() {
    return (
        <div className="h-1 w-1 rounded-full bg-slate-500">

        </div>
    )
}