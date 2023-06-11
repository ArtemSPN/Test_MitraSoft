import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostCard from '../../../Components/PostCard/PostCard';

const UserPage = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  let { id } = useParams();
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/'+id)
    .then(res => setUser(res.data))
    .catch(err => console.log(err))

    axios.get('https://jsonplaceholder.typicode.com/users/'+id+'?_embed=posts')
    .then(res => setPosts(res.data.posts))
    .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <h2>
        {user.name}
      </h2>
      <h3>
        {user.email}
      </h3>
      {posts.length != 0 &&
      posts.map((post) => {return <PostCard post={post} key={post.id}/>})}
    </div>
  )
}

export default UserPage