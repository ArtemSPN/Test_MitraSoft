import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import cls from './PostCard.module.css'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import ComentCard from '../ComentCard/ComentCard';
import { Link } from 'react-router-dom';

const PostCard = ({post}) => {
    const [show, setShow] = useState(true);
    const [coments, setComents] = useState(null);
    const [author, setAuthor] = useState('')

    const toggleComent = () => {
      if(show){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}?_embed=comments`)
        .then((res) => {
          setComents(res.data.comments)
        }).
        catch((e) => console.log(e))
      }
      else{
        setComents(null)
      }
      setShow(!show)
    }

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users/'+post.userId)
      .then(res => setAuthor(res.data.name))
      .catch(err => console.log(err))
    }, []);

    return (
            <Card className={cls.cardMargin}>
            <Card.Header as="h5">
              <Link to={'/user/'+post.userId} className={cls.img}>
                <Image src='https://avatars.mds.yandex.net/i?id=6d80c478a6348bfebb3fe8dc5fd25a324bd4be7a-5142631-images-thumbs&ref=rim&n=33&w=135&h=135' height={'50px'} rounded/>
              </Link>
              {author} 
            </Card.Header>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                  {post.body}
              </Card.Text>
              <Button variant="primary" onClick={toggleComent}>Комментарии</Button>
            </Card.Body>
            {coments != null &&
            coments.map((com) => {
              return <ComentCard coment={com}/>
            })
            }
            </Card>
      );
}

export default PostCard