import { useState, useEffect } from "react"
import styles from './Blogs.module.css'
import Link from 'next/link'
const Blogs = ({data}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        (async () => {
            // const get = await fetch('https://jsonplaceholder.typicode.com/posts')
            // const data = await get.json();
            setBlogs(data)
        })()

    }, [])
    const deletePost = (e)=>{
        const confirmDelete = confirm("yakin mau hapus ?");
        if (confirmDelete) {
            const newBlogs = blogs.filter(b => b.id != e.target.id)
            setBlogs(newBlogs)
        }    
    }
    const jumlahPost = blogs.length
    return (
        <>
            <div className={styles.App}>
                <div className={styles.article}>
                    <h1 className={styles.judul}>Wlcome my blog</h1>
                    <h3 className={styles.jumlah}>Jumlah Post : {jumlahPost}</h3>
                    <div className={styles.post}>
                        {blogs.map((b, index) => (
                            <article className={styles.box} key={b.id}>
                                <h1>{b.title}</h1>
                                <h1>No : {index + 1}</h1>
                                <p>{b.body}</p>
                                <Link href={`blogs/${b.id}`}>
                                    <button className={styles.btn}>Detail</button>
                                </Link>
                                <button className={styles.btn} onClick={(e)=>deletePost(e)} id={b.id}>Hapus</button>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
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