import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Sierra"
              description="Personal Chat Assistant with humanly voice , it understands your intent and talks as if you have your personal assiatant.It can talk to you about various topics as far as you can go."
              ghLink="https://github.com/VISMAY7890/Sierra"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Gmail Automation"
              description="An application made with leveraging cutting edge AI technologies , it categorizes your emails and generates perfectly tailored responses and automates the fetch , generate and reply process."
              ghLink="https://github.com/Vismay7890/chatbot-chrome-extension"
              demoLink=""
            />
          </Col>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
