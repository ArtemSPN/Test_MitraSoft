import { Button, CloseButton } from 'react-bootstrap';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import cls from './SearchPanel.module.css';
import { useDispatch } from 'react-redux';
import { getPosts, searchPost } from '../../features/post/postSlice'

const SearchPanel = () => {
    const [str, setStr] = useState();
    const dispatch = useDispatch();
    const search = () => dispatch(searchPost(str));
    const cancelSearch = () => {
      dispatch(getPosts());
      setStr('')
    }

    return (
      <div>
          <Form.Group className="mb-3">
              <Form.Label className={cls.title}>Поиск записей</Form.Label>
              <div className={cls.search}>
                  <Form.Control type="text" value={str} onChange={(e) => setStr(e.target.value)}/>
                  <CloseButton onClick={cancelSearch} className={cls.closeBtn}/>
              </div>
              
              <Button variant="info" onClick={search} className={cls.searchBtn}>Искать</Button>

          </Form.Group>
      </div>
    )
}

export default SearchPanel