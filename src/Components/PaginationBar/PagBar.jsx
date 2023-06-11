import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import cls from './PagBar.module.css'
import postSlice, { nextPostPage, prevPostPage } from '../../features/post/postSlice';

const PagBar = () => {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.posts.page);


    const prevPage = () => {
        if(page !== 1)
            dispatch(prevPostPage());
    }

    const nextPage = () => {
        if(page !== 20)
            dispatch(nextPostPage());
    }


    return (
        <div className={cls.pagBar}>
            <Button variant={page != 1?"primary":"secondary"} onClick={prevPage}>Назад</Button>
            <h3>{page}</h3>
            <Button variant={page != 20?"primary":"secondary"} onClick={nextPage}>Вперед</Button>
        </div>
    )
}

export default PagBar
