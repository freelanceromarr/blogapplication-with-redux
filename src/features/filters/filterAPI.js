import axios from '../../utility/axios';


export const fetchFilteredBlogs = async (filter, sorting) => {
    let queryString = filter;
    if (sorting == 'newest' || sorting == 'liked') {
        queryString += '&sorting';
    }
}

