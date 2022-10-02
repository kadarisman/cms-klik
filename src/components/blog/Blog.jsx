import Link from 'next/link'
import { useContext, useEffect } from "react"
import { BlogContext } from "@/components/context/BlogContext";
import { useDispatch, useSelector} from 'react-redux'
import {getCategory} from '@/redux/reducers/category' ;
const Blog = () => {
    const blogsState = useContext(BlogContext);
    const dispatch = useDispatch();
    const {category} = useSelector((state) => state.category);
    useEffect(() =>{
        dispatch(getCategory())
    },[]);
    
    return (
        <div className="container mx-auto flex flex-wrap pb-8 mt-5">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 pt-5">
                Article {blogsState.blogs.length}
            </h2>
            <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            {category.map((item, index) => (
                <div className="w-full md:w-1/3 p-6 flex flex-col" key={index}>
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
                            Title : {item.title}
                        </div>
                        <div className="w-full text-base text-gray-800 px-6">
                            Id : {item.slug}
                        </div>
                        
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
export default Blog