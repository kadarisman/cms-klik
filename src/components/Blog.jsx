
import Link from 'next/link'
const Blog = ({ post, deletePost }) => {

    const handleDelete = (e) =>{
        const id = e.target.id;
        deletePost(id)
    }

    return (
        <>
            <div className="w-full md:w-1/3 p-6 flex flex-col" key={post.id}>
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                    <div className="w-full font-bold text-xl text-gray-800 px-6">
                        {post.title}
                    </div>
                    <p className="text-gray-800 text-base px-6">
                        {post.body}
                    </p>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                    <div className="flex items-center justify-start gap-2">
                        <Link href={`/blogs/${post.id}`}>
                            <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ">
                                Detail
                            </button>
                        </Link>
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={(e)=>handleDelete(e)} id={post.id}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog