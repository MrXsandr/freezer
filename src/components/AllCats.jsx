import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import OneCard from './OneCard';

export default function AllCats({
  currUser, deleteCatHandler, allCats, setAllCats, setAllProds,
}) {
  const [inputCat, setInputCat] = useState({ title: '', img: '' });
  const [show, setShow] = useState(false);

  const addHandler = () => {
    setShow((prev) => !prev);
  };

  const changeCatHandler = (e) => {
    setInputCat((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addCatHandler = (e) => {
    e.preventDefault();
    fetch('api/cats/newcat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputCat),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllCats((prev) => [data, ...prev]);
      });
    setShow(false);
  };

  return (
    <>
      {currUser?.id
        && (<Button onClick={addHandler} variant="primary">Add Category</Button>)}
      {' '}
      {show
          && (
          <form onSubmit={(e) => addCatHandler(e, inputCat)}>
            <input
              name="title"
              value={inputCat.title}
              onChange={changeCatHandler}
              placeholder="title"
            />
            <input
              name="img"
              value={inputCat.img}
              onChange={changeCatHandler}
              placeholder="img url"
            />
            <Button type="submit">
              Add
            </Button>
          </form>
          )}

      <ul className="list-group">
        {allCats?.map((cat) => (
          <OneCard
            cat={cat}
            key={cat.id}
            deleteHandler={deleteCatHandler}
            setAllCats={setAllCats}
            currUser={currUser}
            setAllProds={setAllProds}

          />
        ))}
      </ul>
    </>
  );
}
