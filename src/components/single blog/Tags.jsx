const Tags =({tags})=>{
   
    return (
        <div class="tags" id="lws-singleTags">
            {tags?.map(tag => <span>#{tag} </span>)}
            
        </div>
    )
}
export default Tags;