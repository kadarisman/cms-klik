import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Blogs.module.css'

const BlogDetail = ({ data }) => {
    //console.log(data);
    return (
        <>
            <div className={styles.App}>
                <div className={styles.article}>
                    <h1>Detail post id : {data.id}</h1>
                    <article className={styles.box} key={data.id}>
                        <h1>{data.title}</h1>
                        <p>{data.body}</p>
                        <Link href={`/blogs`}>
                            <button>Back</button>
                        </Link>
                    </article>
                </div>
            </div>
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