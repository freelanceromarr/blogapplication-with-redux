
import { useDispatch, useSelector } from 'react-redux';
import BlogHome from '../components/BlogHome';
import { useEffect } from 'react';
import { fetchBlogs } from '../features/blogs/blogsSlice';
const Home = () => {
    const dispatch = useDispatch();
    const {blogs, isLoading, isError, error} = useSelector(state=>state.blogs)
   

    //loading blogs from database
    useEffect(()=>{
        dispatch(fetchBlogs())
    },[dispatch])
    return (
       
       <>
        <BlogHome blogs = {blogs} />       
       </>

    )
}
export default Home;