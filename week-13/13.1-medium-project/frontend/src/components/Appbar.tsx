import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return (
        <div className="border-b flex justify-between px-10 py-4">
            <Link to={'/blogs'} className="font-semibold text-md flex flex-col justify-center cursor-pointer text-xl">

                Better Medium

            </Link>
            <div>
                <Avatar
                    size={"big"} name="Atharva Deshmukh" />
            </div>
        </div>
    )
}