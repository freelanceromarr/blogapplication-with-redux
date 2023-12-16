import { useDispatch, useSelector } from "react-redux";
import { bookmarkBlog, changeLikes } from "../../features/blog/blogSlice";

const Meta =({blog})=>{
 
  const dispatch = useDispatch()
  
  const bookMarkHandler = ()=>{
      dispatch(bookmarkBlog(blog))
  }
  const likesHandler = ()=>{
    dispatch(changeLikes(blog))
}
    return (
        <div class="btn-group">
          {/* <!-- handle like on button click --> */}
          <button onClick={likesHandler} class="like-btn" id="lws-singleLinks">
            <i class="fa-regular fa-thumbs-up"></i> {blog.likes}
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
          <button onClick={bookMarkHandler} class={blog.isSaved? `active save-btn` : `save-btn`} id="lws-singleSavedBtn">
            <i class="fa-regular fa-bookmark"></i> {blog.isSaved? "Saved" : "Save" }
          </button>
        </div>
    )
}
export default Meta;