import React, { useEffect, useState } from 'react'
import PostCard from '../../../Components/PostCard/PostCard'
import { Col, Row } from 'react-bootstrap'
import cls from './MainPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../features/post/postSlice';
import PagBar from '../../../Components/PaginationBar/PagBar';

const MainPage = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts.data);
    const page = useSelector((state) => state.posts.page);


    useEffect(() => {
        dispatch(getPosts())
        console.log(posts)
    }, [dispatch, page]);


  return (
    <Row>
        <Col md='9'>
            {posts.length > 0 && posts.map((post) => {
                return <PostCard post={post} key={post.id} className={cls.cardMargin}/>
            })}
            <PagBar/>
        </Col>
        <Col md='3'>
            ыжвдлаыжд
        </Col>
    </Row>
  )
}

export default MainPage