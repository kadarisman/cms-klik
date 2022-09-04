import { createContext, useState, useEffect } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
    const [blogs, setBlogs] = useState([]);    
    const [blogById, setblogById] = useState({});
    const blogsState = {blogs, setBlogs, blogById, setblogById};

    useEffect(() => {
        (async () => {
            const getData = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const data = await getData.json();
            setBlogs(data);
            }
        )()
    }, []);

    return(
        <BlogContext.Provider value={blogsState}>
            {props.children}
        </BlogContext.Provider>
    )
}