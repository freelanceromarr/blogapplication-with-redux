import axios from '../../utility/axios';

export const getRelatedBlogs = async (currentBlogId, tags)=>{

        const queryString = tags?.map(tag=>`tags_like=${tag}`).join('&')+`&id_ne=${currentBlogId}`;
        console.log(queryString);
        const response = await axios.get(`/blogs/?${queryString}`);
        return response.data;


}