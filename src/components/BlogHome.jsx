import Blogs from './blogs/Blogs';
import Filter from './sidebar/Filter';
import Sorting from './sidebar/Sorting';

const BlogHome = ({blogs})=>{
 
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
     {blogs.map(blog =>{
      return <Blogs key={blog.id} blog={blog}/>
     })}
        

    </main>
    {/* <!-- posts container ends --> */}
  </section>
    )
}
export default BlogHome;