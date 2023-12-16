import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";

const RelatedBlogs =({id, tags})=>{
    const {relatedBlogs, isError, isLoading} = useSelector(state=> state.relatedBlogs)    
    const dispatch = useDispatch();
//fetching related blogs
    useEffect(()=>{
        dispatch(fetchRelatedBlogs({id, tags}))
    },[dispatch, id, tags])

    //decide to rendering the content
    let content = null;
    if(isLoading && !isError){
        content = <p>loading...</p>
    }
    if(!isLoading && !isError && relatedBlogs.length < 1){
        content = <p className="omar">No related blogs</p>
    }
    if(!isLoading && !isError && relatedBlogs.length > 0){
        content = relatedBlogs.map(rBlog=>{
            const {title, tags, createdAt, image} = rBlog
            return <div class="card">
            <a href="post.html">
                <img src={image} class="card-image" alt="" />
            </a>
            <div class="p-4">
                <a href="post.html" class="text-lg post-title lws-RelatedPostTitle">
                {title}
                </a>
                <div class="mb-0 tags">
                    {tags.map(tag => <span> #python</span>)}
                
                </div>
                <p>{createdAt}</p>
            </div>
        </div>
        })
    }
    return (
        <aside>
            <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <div class="space-y-4 related-post-container">
                {/* <!-- related post  --> */}
                {content}
                {/* <!-- related post ends --> */}
            </div>
    </aside>
    )
}
export default RelatedBlogs;