import axios from "axios";

export const getPostsApi = () => {
     const page = localStorage.getItem('page') || 1;
     const order = localStorage.getItem('order') || 'asc';
     return axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5&_sort=title&_order=${order}`)
}