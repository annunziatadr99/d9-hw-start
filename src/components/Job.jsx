import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavourite } from "../redux/actions/favouriteActions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col xs={3}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={6}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
        <Col xs={3}>
          <button onClick={() => dispatch(addFavourite(data.company_name))}>
            Aggiungi ai Preferiti
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Job;
