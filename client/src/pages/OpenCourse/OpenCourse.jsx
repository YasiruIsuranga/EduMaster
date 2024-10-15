import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "./OpenCourse.css"; // For custom styles
import NavBar from "../../components/navBar/Nav";
import Footer from "../../components/Footer/footer";
import StudentNavBar from "../../components/StudentNavBar/StudentNavBar";

const OpenCourse = () => {
  const course = {
    name: "Course name",
    weeks: [
      {
        week: 1,
        video: "https://www.example.com/lecture1",
        pdf: "https://www.example.com/lecture1.pdf",
        quiz: "https://www.example.com/quiz1",
        resources: ["https://www.example.com/resource1", "https://www.example.com/resource2"],
      },
      {
        week: 2,
        video: "https://www.example.com/lecture2",
        pdf: "https://www.example.com/lecture2.pdf",
        quiz: "https://www.example.com/quiz2",
        resources: ["https://www.example.com/resource3", "https://www.example.com/resource4"],
      },
    ],
  };

  return (
    <>
      <NavBar />
      <div className="d-flex">
        {/* Sidebar */}
        <StudentNavBar />

        {/* Main Content */}
        <Container className="open-course-container py-5 ms-auto">
          <Row>
            <Col className="text-center mb-4">
              <h1 className="course-title">{course.name}</h1>
            </Col>
          </Row>

          {course.weeks.map((weekData, index) => (
            <Row key={index} className="mb-4">
              <Col>
                <Card className="shadow-sm">
                  <Card.Header className="bg-primary text-white">
                    <h4>Week {index + 1}</h4>
                  </Card.Header>
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Lecture Video:</strong>
                        <a href={weekData.video} target="_blank" rel="noopener noreferrer" className="ms-2">
                          Watch Video
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Lecture PDF:</strong>
                        <a href={weekData.pdf} target="_blank" rel="noopener noreferrer" className="ms-2">
                          Download PDF
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Quiz:</strong>
                        <a href={weekData.quiz} target="_blank" rel="noopener noreferrer" className="ms-2">
                          Take Quiz
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Additional Resources:</strong>
                        <ul className="ms-4">
                          {weekData.resources.map((resource, idx) => (
                            <li key={idx}>
                              <a href={resource} target="_blank" rel="noopener noreferrer">
                                {`Resource ${idx + 1}`}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default OpenCourse;
