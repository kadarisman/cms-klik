import { createContext, useState, useEffect } from "react";
export const BlogContext = createContext();
const initialValues = {
    title: "",
    body: "",
  };
export const BlogProvider = (props) => {
    const [values, setValues] = useState(initialValues);
    const [blogs, setBlogs] = useState([]);    
    const [blogById, setblogById] = useState({});

    useEffect(() => {
        (async () => {
            const getData = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const data = await getData.json();
            setBlogs(data);
            }
        )()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(blogById.id){
            const newData = [...blogs]
            const NewBlogsByid = newData.findIndex((b => b.id == blogById.id));
            newData[NewBlogsByid].title = values.title == "" ? blogById.title : values.title
            newData[NewBlogsByid].body = values.body == "" ? blogById.body : values.body
            setBlogs(newData);
            setValues(initialValues)            
            setblogById('')
        }  else{       
            const newData = [...blogs, {userId:99, id:blogs.length+1, title: values.title, body: values.body}];
            const sortDesc = [...newData];
            sortDesc.sort((a, b) => (a.id > b.id ? -1 : 1));
            setBlogs(sortDesc); 
            setValues(initialValues)
        }
    }   
    
    const handleDelete = (e) =>{
        const id = e.target.id;
        const confirmDelete = confirm("yakin mau hapus ?");
        if (confirmDelete) {
            const newBlogs = blogs.filter(b => b.id != id)
            setBlogs(newBlogs)
        }
    }

    const handleEdit = (e) =>{
        const id = e.id;
        const result = blogs.find(b => b.id == id)
        setblogById(result)  
    }

    const blogsState = {
        blogs, 
        setBlogs, 
        blogById, 
        setblogById, 
        handleSubmit, 
        values, 
        setValues, 
        initialValues,
        handleDelete,
        handleEdit
    };

    return(
        <BlogContext.Provider value={blogsState}>
            {props.children}
        </BlogContext.Provider>
    )
}