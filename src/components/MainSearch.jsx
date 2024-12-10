import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form } from "react-bootstrap";
import { fetchJobs } from "../redux/actions/jobActions";
import Job from "./Job";
import Favourites from "./Favourites";
const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const loading = useSelector((state) => state.jobs.loading);
  const error = useSelector((state) => state.jobs.error);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchJobs(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
      <Favourites />
    </Container>
  );
};

export default MainSearch;
