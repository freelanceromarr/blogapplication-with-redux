
import { useDispatch, useSelector } from 'react-redux';
import BlogHome from '../components/BlogHome';
import { useEffect } from 'react';
import { fetchBlogs } from '../features/blogs/blogsSlice';
const Home = () => {
    const dispatch = useDispatch();
    const {blogs, isLoading, isError, error} = useSelector(state=>state.blogs)
    const {filter, sorting} = useSelector(state=>state.filters)
   

    //loading blogs from database
    useEffect(()=>{
        dispatch(fetchBlogs({filter, sorting}))
    },[dispatch, filter, sorting])
    return (
       
       <>
        <BlogHome blogs = {blogs} isLoading={isLoading} isError ={isError} eroor={error} />       
       </>

    )
}
export default Home;