import React, { useEffect, useState } from 'react'
import PostCard from '../../../Components/PostCard/PostCard'
import { Col, Row } from 'react-bootstrap'
import cls from './MainPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../features/post/postSlice';
import PagBar from '../../../Components/PaginationBar/PagBar';
import SearchPanel from '../../../Components/SearchPanel/SearchPanel';
import SortPanel from '../../../Components/SortPanel/SortPanel';
import Loader from '../../../Components/Loader/Loader';

const MainPage = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts.data);
    const page = useSelector((state) => state.posts.page);
    const order = useSelector((state) => state.posts.order);
    const isLoading = useSelector((state) => state.posts.isLoading);




    useEffect(() => {
        dispatch(getPosts())
        console.log(posts)
    }, [page, order]);


  return (
    <div>
        <Row className={cls.content}>
        <Col md='9'>
            {isLoading && <Loader/>}
            {posts.length > 0 && posts.map((post) => {
                return <PostCard post={post} key={post.id} className={cls.cardMargin}/>
            })}   
        </Col>
        <Col md='3'>
            <SearchPanel/>
            <SortPanel/>
        </Col>
        </Row>
        <Row>
            <PagBar/>
        </Row>
    </div>
    
  )
}

export default MainPage