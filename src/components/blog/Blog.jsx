import Link from 'next/link'
import { useContext } from "react"
import { BlogContext } from "@/components/context/BlogContext";
const Blog = () => {
    const blogsData = useContext(BlogContext);
    
    const handleDelete = (e) =>{
        const id = e.target.id;
        const confirmDelete = confirm("yakin mau hapus ?");
        if (confirmDelete) {
            const newBlogs = blogsData.blogs.filter(b => b.id != id)
            blogsData.setBlogs(newBlogs)
        }
    }
    
    const handleEdit = (e) =>{
        const id = e.id;
        const result = blogsData.blogs.find(b => b.id == id)
        blogsData.setblogById(result)  
    }

    return (
        <div className="container mx-auto flex flex-wrap pb-8 mt-5">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 pt-5">
                Article {blogsData.blogs.length}
            </h2>
            <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            {blogsData.blogs.map((item, index) => (
                <div className="w-full md:w-1/3 p-6 flex flex-col" key={index}>
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
                            Title : {item.title}
                        </div>
                        <div className="w-full text-base text-gray-800 px-6">
                            Id : {item.id}
                        </div>
                        <p className="text-gray-800 text-base px-6">
                            {item.body}
                        </p>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-start gap-2">
                            <Link href={`/blogs/${item.id}`}>
                                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ">
                                    Detail
                                </button>
                            </Link>
                            <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={(e) => handleDelete(e)} id={item.id}>
                                Delete
                            </button>
                            <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={() => handleEdit({ id: item.id })}>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Blog