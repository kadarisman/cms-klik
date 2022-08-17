import Link from 'next/link'
import Layout from '@/layouts/Layout'

const BlogDetail = ({ data }) => {
    //console.log(data);
    return (
        <>
            <Layout>
                <section className="bg-white border-b py-8">
                    <div className="container mx-auto flex flex-wrap pt-4 pb-8">
                        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 pt-12">
                            {data.title}
                        </h2>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                        <div className="w-full p-6 flex flex-col">
                            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                                <p className="text-gray-800 text-base px-6">
                                    {data.body}
                                </p>
                            </div>
                            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                <div className="flex items-center justify-start gap-2">
                                    <Link href={`/blogs`}>
                                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ">
                                            Back
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    const get = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.query.id}`)
    const data = await get.json();
    //console.log(data)
    return { props: { data } }
}
export default BlogDetail