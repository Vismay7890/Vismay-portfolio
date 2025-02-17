import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import Particle from "../Particle";

import cert1 from "../../Assets/aws.png";
import cert2 from "../../Assets/google.png";
import cert3 from "../../Assets/ibm.png";
import cert4 from "../../Assets/coursera.png";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certifications I've earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={cert1}
              title="AWS Machine Learning Specialty (MLS-C01)"
              description="Demonstrates expertise in building, training, deploying, and tuning machine learning models on the AWS platform. (Verification Code: 0156d1f6a8d544829a242df10f2fc3bd)"
              certLink="https://aws.amazon.com/verification"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={cert1}
              title="AWS Partner: Accreditation (Technical)"
              description="Validates technical proficiency in AWS solutions and services, aligning with best practices for design and implementation."
              certLink="https://www.credly.com/badges/365bb1b4-f5b6-461c-b59a-b564f8b2aea5/public_url"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={cert2}
              title="Introduction to Generative AI"
              description="Covers the fundamentals of generative AI, including models, applications, and ethical considerations."
              certLink="https://www.cloudskillsboost.google/public_profiles/21e377f3-213e-4486-bd68-91e4d62ddc4c/badges/4076882"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={cert3}
              title="IBM Data Analysis"
              description="Focuses on the skills needed for data analysis, including data collection, cleaning, visualization, and interpretation."
              certLink="https://www.credly.com/badges/bed23345-b673-4e92-a272-9f15d6c3e44b/public_url"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={cert4}
              title="Data Analysis with Python"
              description="Demonstrates proficiency in using Python for data analysis tasks, including working with libraries like Pandas and NumPy."
              certLink="https://www.coursera.org/account/accomplishments/certificate/ZA9VLKZF583W"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
