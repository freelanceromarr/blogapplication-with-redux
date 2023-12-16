import { useDispatch, useSelector } from "react-redux";
import Description from "../components/single blog/Description";
import Header from "../components/single blog/Header";
import RelatedBlogs from "../components/single blog/RelatedBlogs";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../features/blog/blogSlice";

const Blog = ()=>{
    const dispatch  = useDispatch();
    const {blog, isLoadding, isError, error}= useSelector(state=>state.blog);
    const {id, tags, isSaved, likes} = blog;
    const {blogId} = useParams();
    
    //loading single blog from server
    useEffect(()=>{
        dispatch(fetchBlog({id:blogId}));
    },[dispatch, blogId,])
    return (
        <>
        <Header/>
        <section class="post-page-container">
            
            <Description blog={blog} />
            <RelatedBlogs id= {id} tags={tags} />
        </section>
        </>
        
    )
};
export default Blog;