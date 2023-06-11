import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import cls from './PostCard.module.css'
import Card from 'react-bootstrap/Card';

const PostCard = ({post}) => {

    console.log(post);

    return (
        <Card className={cls.cardMargin}>
          <Card.Header as="h5">
            <Image src='https://avatars.mds.yandex.net/i?id=6d80c478a6348bfebb3fe8dc5fd25a324bd4be7a-5142631-images-thumbs&ref=rim&n=33&w=135&h=135' height={'50px'} rounded/>
            {post.userId} 
          </Card.Header>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
                 {post.body}
            </Card.Text>
            <Button variant="primary">Комментарии</Button>
          </Card.Body>
        </Card>
      );
}

export default PostCard