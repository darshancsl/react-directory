import React from "react";
import { projectList } from "../../Utils/projectList";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProjectsComponent.css";

const ProjectsComponent = () => {
  return (
    <Container className='p-3'>
      <Row>
        {projectList?.map(({ id, name, path }) => {
          return (
            <Col className='proj' key={id} xs={12} sm={6} md={4} lg={3} xl={3}>
              <Link to={`projects/${path}`}>{name}</Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProjectsComponent;
