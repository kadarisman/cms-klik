import { useState, useEffect } from "react"
import Link from 'next/link'
import Layout from "@/layouts/Layout"
import Blog from "@/components/blog/Blog"
import Form from "@/components/blog/Form"
const Blogs = ({ data }) => {
    const [blogs, setBlogs] = useState([]);
    const [blogById, setblogById] = useState({});
    const [blogOfIndex, setblogOfIndex] = useState([]);
    useEffect(() => {
        (async () => {
            // const get = await fetch('https://jsonplaceholder.typicode.com/posts')
            // const data = await get.json();
            setBlogs(data)
            // editPost();
        })()

    }, [])
    const deletePost = (id) => {
        const confirmDelete = confirm("yakin mau hapus ?");
        if (confirmDelete) {
            const newBlogs = blogs.filter(b => b.id != id)
            setBlogs(newBlogs)
        }
    }
    const editPost = (id) => {       
        const result = blogs.find(b => b.id == id)
        //const resultOfIndex = blogs.findIndex(b => b.id == id)
        setblogById(result)        
        // console.log(blogById)
        //setblogOfIndex(resultOfIndex)
    }

    const resetblogById = () => {
        setblogById({})
    }

    // const savePost = () => {
    //     
    // }
    const jumlahPost = blogs.length
    return (
        <>
            <Layout>          
                <section className="bg-white border-b py-8">
                    <Form blogs={blogs} setBlogs={setBlogs} blogById={blogById} resetblogById={resetblogById} />
                    <div className="container mx-auto flex flex-wrap pb-8">
                        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 pt-5">
                            Article {jumlahPost}
                        </h2>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>                      
                        {blogs.map((item, index) => (
                            <Blog post={item} index={index} deletePost={deletePost} editPost={editPost} key={item.id}/>
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