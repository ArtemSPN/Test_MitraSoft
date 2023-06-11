import { Button } from 'react-bootstrap'
import React from 'react'
import { ButtonGroup } from 'react-bootstrap'
import cls from './SortPanel.module.css'
import { useDispatch } from 'react-redux'
import { changeOrder } from '../../features/post/postSlice'

const SortPanel = () => {
    const dispatch = useDispatch();

    const asc = () => {
        dispatch(changeOrder('asc'))
    }

    const desc = () => {
        dispatch(changeOrder('desc'))
    }

    return (
        <div className={cls.sortPanel}>
            <h6>Сортировка:</h6>
            <ButtonGroup aria-label="Basic example" className={cls.btns}>
                <Button variant="secondary" onClick={asc}>↑</Button>
                <Button variant="secondary" onClick={desc}>↓</Button>
            </ButtonGroup>
        </div>
    )
}

export default SortPanel