import { Button, Card, Dropdown } from 'react-bootstrap';
import React, { useState } from 'react';

function OneCardProduct({
  prod,
  deleteHandler,
  setAllProds,
  currUser,
  allCats,

}) {
  const [newName, setNewName] = useState({ title: '', img: '', cat_id: '' });
  const [showInput, setShowInput] = useState(false);
  const chtoto = allCats.filter((el) => el.id == prod.cat_id);
  //   console.log(chtoto[0].title, prod.cat_id);

  const addHandler2 = () => { // показывает инпут для нового таска
    setShowInput((prev) => !prev);
  };

  const editHandler = (id) => {
    fetch(`/api/prods/edit/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newName),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllProds((prev) => prev.map((el) => (el.id === data.id ? data : el)));
      });
    addHandler2();
  };

  const changeProdInputHandler = (e) => { //
    setNewName((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <div>

          Category:
          {' '}
          {chtoto[0]?.title || 'choto'}
        </div>
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
              onChange={changeProdInputHandler}
              placeholder="title"
            />
            <input
              name="img"
              value={newName.img}
              onChange={changeProdInputHandler}
              placeholder="url"

            />
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Choose Category
              </Dropdown.Toggle>

              <Dropdown.Menu name="cat_id" onChange={changeProdInputHandler} value={newName.cat_id}>
                {allCats?.map((cat) => (
                  <Dropdown.Item
                    value={cat.id}
                    onClick={() => setNewName((prev) => ({ ...prev, cat_id: cat.id }))}
                  >
                    {cat.title}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button onClick={() => editHandler(prod.id)}>
              Edit
            </Button>
          </form>
          )}
          <Button onClick={() => deleteHandler(prod.id)} variant="danger">Delete</Button>
        </>
        )}
      </Card.Body>
    </Card>
  );
}

export default OneCardProduct;
