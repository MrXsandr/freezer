import { Button, Card } from 'react-bootstrap';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function OneCard({
  cat,
  deleteHandler,
  setAllCats,
  currUser,
  setAllProds,
}) {
  const [newName, setNewName] = useState({ title: '', img: '' });
  const [showInput, setShowInput] = useState(false);

  const editHandler = (id) => {
    fetch(`/api/cats/edit/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newName),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllCats((prev) => prev.map((el) => (el.id === data.id ? data : el)));
      });
  };

  const betterChangeTaskHandler = (e) => {
    setNewName((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const addHandler2 = () => { // показывает инпут для нового таска
    setShowInput((prev) => !prev);
  };
  const viewHandler = (id) => {
    fetch(`/api/view/${id}`)
      .then((res) => res.json())
      .then((data) => setAllProds(data));
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cat.img} />
      <Card.Body>
        <Card.Title>{cat.title}</Card.Title>
        <Button onClick={() => viewHandler(cat.id)} variant="primary">View Products</Button>
        {currUser?.id
        && (
        <>
          <Button onClick={addHandler2} variant="warning">Edit</Button>
          {showInput
          && (
          <form>
            <input
              name="title"
              value={newName.title}
              onChange={betterChangeTaskHandler}
              placeholder="title"

            />
            <input
              name="img"
              value={newName.img}
              onChange={betterChangeTaskHandler}
              placeholder="img url"

            />
            <Button onClick={() => editHandler(cat.id)}>
              Edit
            </Button>
          </form>
          )}
          <Button onClick={() => deleteHandler(cat.id)} variant="danger">Delete</Button>
        </>
        )}
      </Card.Body>
    </Card>
  );
}

export default OneCard;
