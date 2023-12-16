
const Blogs = ({blog})=>{
  const {id, title, image, isSaved, createdAt, tags, likes} = blog;
    return (
        <div class="lws-card">
        <a href={`/blog/${id}`}>
          <img src={image} class="lws-card-image" alt="" />
        </a>
        <div class="p-4">
          <div class="lws-card-header">
            <p class="lws-publishedDate">{createdAt}</p>
            <p class="lws-likeCount"><i class="fa-regular fa-thumbs-up"></i>{likes}</p>
          </div>
          <a href={`/blog/${id}`} class="lws-postTitle"> {title} </a>
          <div class="lws-tags"> {tags.map(tag=><span>#{tag}</span> )} </div>
          {/* <!-- Show this element if post is saved --> */}
          <div class="flex gap-2 mt-4">
            {isSaved ?  <span class="lws-badge"> Saved </span> : null}
           
          </div>
          {/* <!-- Show this element if post is saved Ends --> */}
        </div>
      </div>
    )
}
export default Blogs;