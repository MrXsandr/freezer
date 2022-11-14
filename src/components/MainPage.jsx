import React, { useState } from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';
import AllCats from './AllCats';
import AllProducts from './AllProducts';

export default function MainPage({ cats, prods, currUser }) {
  const [allCats, setAllCats] = useState(cats || []);
  const [allProds, setAllProds] = useState(prods || []);


  const deleteCatHandler = async (id) => {
    const res = await fetch(`/api/cats/delete/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setAllCats((prev) => prev.filter((el) => el.id !== id));
    }
  };

  const deleteProdHandler = async (id) => {
    const res = await fetch(`/api/prods/delete/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setAllProds((prev) => prev.filter((el) => el.id !== id));
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <AllCats
            deleteCatHandler={deleteCatHandler}
            allCats={allCats}
            setAllCats={setAllCats}
            currUser={currUser}
            setAllProds={setAllProds}

          />
        </Col>
        <Col>
          <AllProducts
            deleteProdHandler={deleteProdHandler}
            allProds={allProds}
            allCats={allCats}
            setAllProds={setAllProds}
            currUser={currUser}
          />
        </Col>
      </Row>
    </Container>

  );
}
