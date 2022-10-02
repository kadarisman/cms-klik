import Layout from "@/layouts/Layout"
import Blog from "@/components/blog/Blog"
import Form from "@/components/blog/Form"
import { BlogProvider } from "@/components/context/BlogContext"
const Blogs = () => {
    return (
        <BlogProvider>
            <Layout>
                <section className="bg-white border-b py-8">  
                    <Form/>                 
                    <Blog />
                    
                </section>              
            </Layout>
        </BlogProvider>
    )
}

// export async function getServerSideProps(context) {
//     // Fetch data from external API
//     const get = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const data = await get.json();
//     //console.log(data)
//     return { props: { data } }
// }

export default Blogs
