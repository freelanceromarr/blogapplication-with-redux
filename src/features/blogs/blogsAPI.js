
import axios from '../../utility/axios';

export const getBlogs = async (filter, sorting) =>{
   
    let queryString = '';
    if ( filter ==='saved') {
        queryString += `&isSaved=${true}`
    }
    if (sorting==='newest') {
        queryString += `&_sort=createdAt&_order=desc`
    }
    if (sorting==='liked') {
        queryString += `&_sort=likes&_order=desc`
    }
    const response = await axios.get(`/blogs/?${queryString}`);
    return response.data;
}
