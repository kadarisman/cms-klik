import { useState, useEffect, useContext } from "react"
import { BlogContext } from "@/components/context/BlogContext";
const initialValues = {
    title: "",
    body: "",
  };
const Form = () => {
    const blogsData = useContext(BlogContext);
    const [values, setValues] = useState(initialValues);
    const handleInputChange = (e) => {
            const { name, value } = e.target;
            setValues({...values, [name]: value, });             
    } 
    useEffect(() => {
        if(blogsData.blogById){
            setValues({title: blogsData.blogById.title, body : blogsData.blogById.body})
        }else{
            setValues(initialValues)
        }
      },[setValues, blogsData.blogById])
 
    const handleSubmit = (e) => {
        e.preventDefault();
        if(blogsData.blogById.id){
            const newData = [...blogsData.blogs]
            const NewBlogsByid = newData.findIndex((b => b.id == blogsData.blogById.id));
            newData[NewBlogsByid].title = values.title == "" ? blogsData.blogById.title : values.title
            newData[NewBlogsByid].body = values.body == "" ? blogsData.blogById.body : values.body
            blogsData.setBlogs(newData);
            setValues(initialValues)            
            blogsData.setblogById('')
        }  else{       
            const newData = [...blogsData.blogs, {userId:99, id:blogsData.blogs.length+1, title: values.title, body: values.body}];
            const sortDesc = [...newData];
            sortDesc.sort((a, b) => (a.id > b.id ? -1 : 1));
            blogsData.setBlogs(sortDesc); 
            setValues(initialValues)
        }
    }    

    return (
        <div className="container w-2/4 mx-auto mt-20">
            <form onSubmit={handleSubmit}>
                <div className="mb-1">
                    <label className="block text-2xl font-semibold p-1 text-gray-800" >
                        Titel
                    </label>
                    <input type="text" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title..." name="title"  value={ values.title } onChange={ handleInputChange}/>
                </div>
                <div className="mb-1">
                    <label className="block text-2xl p-1 font-semibold text-gray-800" >
                        Description
                    </label>
                    <textarea  rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description..." name="body" value={values.body  } onChange={handleInputChange}></textarea>
                </div>
                <div className="mt-6">
                    <div className="container w-2/4 mx-auto flex flex-row">
                        <button type="submit" className="w-full hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Form