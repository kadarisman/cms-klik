import { useState, useEffect } from "react"
const initialValues = {
    title: "",
    body: "",
  };
const Form = ({blogs, setBlogs, blogById, setblogById}) => {
    const [values, setValues] = useState(initialValues);
    const handleInputChange = (e) => {
            const { name, value } = e.target;
            setValues({...values, [name]: value, });             
    } 
    useEffect(() => {
        if(blogById){
            setValues({title: blogById.title, body : blogById.body})
        }else{
            setValues(initialValues)
        }
      },[setValues, blogById])
 
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

   

    return (
        <div className="container w-2/4 mx-auto mt-20">
            <form onSubmit={handleSubmit}>
                <div className="mb-1">
                    {/* <input type="text" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title..."  value={ id == '' ? blogById.id : id } onChange={(e) => setTd(e.target.value)}/> */}
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