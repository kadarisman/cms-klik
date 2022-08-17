import { useState, useEffect } from "react"
import Link from 'next/link'
import Layout from "@/layouts/Layout"
import Blog from "@/components/Blog"
const Blogs = ({ data }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        (async () => {
            // const get = await fetch('https://jsonplaceholder.typicode.com/posts')
            // const data = await get.json();
            setBlogs(data)
        })()

    }, [])
    const deletePost = (id) => {
        const confirmDelete = confirm("yakin mau hapus ?");
        if (confirmDelete) {
            const newBlogs = blogs.filter(b => b.id != id)
            setBlogs(newBlogs)
        }
    }
    const jumlahPost = blogs.length
    return (
        <>
            <Layout>
                <section className="bg-white border-b py-8">
                    <div className="container mx-auto flex flex-wrap pt-4 pb-8">
                        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 pt-12">
                            Article {jumlahPost}
                        </h2>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                        {blogs.map((item, index) => (
                            <Blog post={item} index={index} deletePost={deletePost} />
                        ))}

                    </div>
                </section>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    const get = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await get.json();
    //console.log(data)
    return { props: { data } }
}

export default Blogs