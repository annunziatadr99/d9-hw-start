import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavourite } from "../redux/actions/favouriteActions";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.list);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Preferiti</h1>
          {favourites.length === 0 ? (
            <p>Non ci sono preferiti.</p>
          ) : (
            <ul>
              {favourites.map((company, index) => (
                <li key={index}>
                  <Link to={`/${company}`}>{company}</Link>
                  <button onClick={() => dispatch(removeFavourite(company))}>
                    Rimuovi dai Preferiti
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
