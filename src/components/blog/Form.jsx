import { useEffect, useContext } from "react"
import { BlogContext } from "@/components/context/BlogContext";
const Form = () => {
    const blogsState = useContext(BlogContext);
    const handleInputChange = (e) => {
            const { name, value } = e.target;
            blogsState.setValues({...blogsState.values, [name]: value, });             
    } 
    useEffect(() => {
        if(blogsState.blogById){
            blogsState.setValues({title: blogsState.blogById.title, body : blogsState.blogById.body})
        }else{
            blogsState.setValues(blogsState.initialValues)
        }
      },[blogsState.setValues, blogsState.blogById])

    return (
        <div className="container w-2/4 mx-auto mt-20">
            <form onSubmit={blogsState.handleSubmit}>
                <div className="mb-1">
                    <label className="block text-2xl font-semibold p-1 text-gray-800" >
                        Titel
                    </label>
                    <input type="text" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title..." name="title"  value={ blogsState.values.title } onChange={ handleInputChange}/>
                </div>
                <div className="mb-1">
                    <label className="block text-2xl p-1 font-semibold text-gray-800" >
                        Description
                    </label>
                    <textarea  rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description..." name="body" value={blogsState.values.body  } onChange={handleInputChange}></textarea>
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