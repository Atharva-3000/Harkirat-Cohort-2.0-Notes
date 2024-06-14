import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {

    // store it in state
    // store it directy here
    const { loading, blogs } = useBlogs();

    if (loading) {
        return(
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            </div>
        </div>
        )
    }

    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div>
                    {blogs.map(blog =>
                        <BlogCard
                            authorName={
                                blog.author.name
                            }
                            title={blog.title}
                            content={
                                blog.content
                            }
                            publishedDate="2021-09-01"
                            id={blog.id}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}