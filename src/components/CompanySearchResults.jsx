import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import Favourites from "./Favourites";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await fetch(baseEndpoint + params.company);
        if (response.ok) {
          const { data } = await response.json();
          setJobs(data);
        } else {
          alert("Error fetching results");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getJobs();
  }, [params.company, baseEndpoint]);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
      <Favourites />
    </Container>
  );
};

export default CompanySearchResults;
