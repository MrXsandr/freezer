import React, { useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import OneCardProduct from './OneCardProduct';

export default function AllProducts({
  currUser, deleteProdHandler, allProds, setAllProds, allCats,
}) {
  const [inputProd, setInputProd] = useState({ title: '', img: '', cat_id: '' });
  const [show, setShow] = useState(false);

  const addHandler = () => {
    setShow((prev) => !prev);
  };

  const changeProdHandler = (e) => {
    setInputProd((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addProdHandler = (e) => {
    e.preventDefault();
    fetch('api/prods/newprod', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputProd),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllProds((prev) => [data, ...prev]);
      });
    setShow(false);
  };
  return (
    <>
      {currUser?.id
          && (<Button onClick={addHandler} variant="primary">Add Product</Button>)}
      {' '}
      {show
            && (
            <form onSubmit={(e) => addProdHandler(e)}>
              <input
                name="title"
                value={inputProd.title}
                onChange={changeProdHandler}
                placeholder="title"

              />
              <input
                name="img"
                value={inputProd.img}
                onChange={changeProdHandler}
                placeholder="img URL"
              />
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Choose Category
                </Dropdown.Toggle>

                <Dropdown.Menu name="cat_id" onChange={changeProdHandler} value={inputProd.cat_id}>
                  {allCats?.map((cat) => (
                    <Dropdown.Item
                      value={cat.id}
                      onClick={() => setInputProd((prev) => ({ ...prev, cat_id: cat.id }))}

                    >
                      {cat.title}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Button type="submit">
                Add
              </Button>

            </form>
            )}

      <ul className="list-group">
        {allProds?.map((prod) => (
          <OneCardProduct
            prod={prod}
            key={prod.id}
            deleteHandler={deleteProdHandler}
            setAllProds={setAllProds}
            currUser={currUser}
            allCats={allCats}
          />
        ))}
      </ul>
    </>
  );
}
