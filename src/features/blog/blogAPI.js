import axios from '../../utility/axios'

export const getBlog = async (id) =>{
    const response = await axios.get(`/blogs/${id}`);
    return response.data;
}

//save
export const updateBookmark = async (currentBlog) =>{
    const response = await axios.put(`/blogs/${currentBlog?.id}`, {...currentBlog, isSaved: !currentBlog.isSaved});
    return response.data;
}
 //likes
export const updateLikes = async (currentBlog) =>{
    const response = await axios.put(`/blogs/${currentBlog?.id}`, {...currentBlog, likes: currentBlog.likes + 1});
    return response.data;
}