import Blogs from './blogs/Blogs';
import Filter from './sidebar/Filter';
import Sorting from './sidebar/Sorting';

const BlogHome = ({blogs, isLoading, isError})=>{
 let content='';
 if (!isLoading && isError) {
  content = <p className="text-center">there is some problem</p>
}
  if (isLoading && !isError) {
    content = <p className="text-center">Loading ..</p>
  }
  if (!isLoading && !isError && blogs.length < 1) {
    content = <p className="text-center">No blogs found </p>
  }
  if (!isLoading && !isError && blogs.length>0) {
    content = blogs.map(blog =>{
      return <Blogs key={blog.id} blog={blog}/>
     })
  }

    return (
        <section class="wrapper">
    <aside>
      <div class="sidebar-items">
        <Sorting/>
        <Filter/>
      </div>
    </aside>
    {/* <!-- posts container  --> */}
    <main class="post-container" id="lws-postContainer">
      {/* <!-- single post --> */}
     {content}
        

    </main>
    {/* <!-- posts container ends --> */}
  </section>
    )
}
export default BlogHome;