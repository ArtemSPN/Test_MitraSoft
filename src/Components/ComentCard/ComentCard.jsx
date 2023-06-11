import React from 'react';
import Card from 'react-bootstrap/Card';
import cls from './ComentCard.module.css'

const ComentCard = ({coment}) => {
  return (
    <Card className={cls.card}>
      <Card.Header>Комментарий</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            {coment.body}
            {' '}
          </p>
          <footer className="blockquote-footer">
            {coment.email}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default ComentCard