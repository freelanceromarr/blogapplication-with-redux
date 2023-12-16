import Meta from "./Meta";
import Tags from "./Tags";

const Description =({blog})=>{
    const {id, title, description, image, isSaved, likes, tags} = blog;
    return (
    
        <main class="post">
        <img src={image} alt="githum" class="w-full rounded-md" id="lws-megaThumb" />
        <div>
            <h1 class="mt-6 text-2xl post-title" id="lws-singleTitle">
           {title}
            </h1>
                <Tags  tags={tags} />
                <Meta blog={blog} />
            <div class="mt-6">
            <p>
                {description}
            </p>
            </div>
        </div>
    </main>
    
    
    )
}
export default Description;