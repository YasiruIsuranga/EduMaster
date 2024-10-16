import React, { useState, useEffect } from 'react';
import { Card, Button, Modal, Form, Container } from 'react-bootstrap';
import './AdminCourse.css';
import LogedNavBar from '../../components/LogedNavBar/LogedNavBar';
import Footer from '../../components/Footer/footer';

const AdminCourse = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAddWeekModal, setShowAddWeekModal] = useState(false);
  const [showEditCourseModal, setShowEditCourseModal] = useState(false);
  const [showEditWeekModal, setShowEditWeekModal] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newCourseData, setNewCourseData] = useState({
    title: '',
    teacher: '',
    description: '',
    image: '',
    weeks: [],
  });
  const [newWeekData, setNewWeekData] = useState({
    video: '',
    pdf: '',
    quiz: '',
    resources: [],
  });
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(null);

  // Fetch courses from the backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/courses`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  const handleShowAddCourseModal = () => setShowModal(true);
  const handleCloseAddCourseModal = () => {
    setShowModal(false);
    setNewCourseData({ title: '', teacher: '', description: '', image: '', weeks: [] });
  };

  const handleShowEditCourseModal = (course) => {
    setSelectedCourse(course);
    setNewCourseData(course);
    setShowEditCourseModal(true);
  };

  const handleCloseEditCourseModal = () => {
    setShowEditCourseModal(false);
    setSelectedCourse(null);
  };

  const handleShowAddWeekModal = (course) => {
    setSelectedCourse(course);
    setShowAddWeekModal(true);
  };

  const handleCloseAddWeekModal = () => {
    setShowAddWeekModal(false);
    setNewWeekData({ video: '', pdf: '', quiz: '', resources: [] });
  };

  const handleShowEditWeekModal = (week, index) => {
    setSelectedWeekIndex(index);
    setNewWeekData(week);
    setShowEditWeekModal(true);
  };

  const handleCloseEditWeekModal = () => {
    setShowEditWeekModal(false);
    setSelectedWeekIndex(null);
  };

  const handleChangeWeek = (e) => {
    const { name, value } = e.target;
    if (name === "resources") {
      setNewWeekData({ ...newWeekData, [name]: value.split(',').map(res => res.trim()) });
    } else {
      setNewWeekData({ ...newWeekData, [name]: value });
    }
  };

  const handleAddNewCourse = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourseData),
      });
      if (response.ok) {
        const savedCourse = await response.json();
        setCourses([...courses, savedCourse]);
        handleCloseAddCourseModal();
      } else {
        console.error('Error adding course');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEditCourse = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/courses/${selectedCourse._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourseData),
      });

      if (response.ok) {
        const updatedCourse = await response.json();
        setCourses(courses.map(course => (course._id === updatedCourse._id ? updatedCourse : course)));
        handleCloseEditCourseModal();
      } else {
        console.error('Error updating course');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddNewWeek = async () => {
    if (selectedCourse) {
      try {
        const response = await fetch(`http://localhost:5000/api/courses/${selectedCourse._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...selectedCourse,
            weeks: [...selectedCourse.weeks, newWeekData],
          }),
        });

        if (response.ok) {
          const updatedCourse = await response.json();
          setCourses(courses.map(course => (course._id === updatedCourse._id ? updatedCourse : course)));
          handleCloseAddWeekModal();
        } else {
          console.error('Error updating course');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleEditWeek = async () => {
    if (selectedCourse !== null && selectedWeekIndex !== null) {
      const updatedWeeks = [...selectedCourse.weeks];
      updatedWeeks[selectedWeekIndex] = newWeekData;

      try {
        const response = await fetch(`http://localhost:5000/api/courses/${selectedCourse._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...selectedCourse,
            weeks: updatedWeeks,
          }),
        });

        if (response.ok) {
          const updatedCourse = await response.json();
          setCourses(courses.map(course => (course._id === updatedCourse._id ? updatedCourse : course)));
          handleCloseEditWeekModal();
        } else {
          console.error('Error updating week');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleRemoveCourse = async (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/courses/${courseId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setCourses(courses.filter(course => course._id !== courseId));
        } else {
          console.error('Error deleting course');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleRemoveWeek = async (weekIndex) => {
    if (selectedCourse) {
      const updatedWeeks = selectedCourse.weeks.filter((_, index) => index !== weekIndex);
      try {
        const response = await fetch(`http://localhost:5000/api/courses/${selectedCourse._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...selectedCourse,
            weeks: updatedWeeks,
          }),
        });

        if (response.ok) {
          const updatedCourse = await response.json();
          setCourses(courses.map(course => (course._id === updatedCourse._id ? updatedCourse : course)));
          setSelectedCourse(updatedCourse);
        } else {
          console.error('Error removing week');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <>
      <LogedNavBar />
      <Container fluid className="main-container">
        <h3 className="text-center text-dark mb-4">Admin Course Management</h3>
        <Button className="mb-4" onClick={handleShowAddCourseModal}>Add New Course</Button>
        <div className="row">
          {courses.map((course) => (
            <div key={course._id} className="col-md-6 col-lg-4 mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={course.image} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text><strong>Teacher:</strong> {course.teacher}</Card.Text>
                  <Card.Text>{course.description}</Card.Text>
                  <Button className="mt-auto btn btn-warning" onClick={() => handleShowEditCourseModal(course)}>
                    Edit Course
                  </Button>
                  <Button className="mt-auto btn btn-danger" onClick={() => handleRemoveCourse(course._id)}>
                    Remove Course
                  </Button>
                  <Button className="mt-auto btn btn-info" onClick={() => handleShowAddWeekModal(course)}>
                    Add Week
                  </Button>
                  <div>
                    <h5>Weeks</h5>
                    {course.weeks.map((week, index) => (
                      <div key={index} className="week-info">
                        <p>{`Week ${index + 1}: Video - ${week.video}, PDF - ${week.pdf}, Quiz - ${week.quiz}`}</p>
                        <Button variant="link" onClick={() => handleShowEditWeekModal(week, index)}>Edit Week</Button>
                        <Button variant="link" onClick={() => handleRemoveWeek(index)}>Remove Week</Button>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        {/* Add Course Modal */}
        <Modal show={showModal} onHide={handleCloseAddCourseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formCourseTitle">
                <Form.Label>Course Title</Form.Label>
                <Form.Control
                  type="text"
                  value={newCourseData.title}
                  onChange={(e) => setNewCourseData({ ...newCourseData, title: e.target.value })}
                  placeholder="Enter course title"
                />
              </Form.Group>
              <Form.Group controlId="formCourseTeacher">
                <Form.Label>Teacher</Form.Label>
                <Form.Control
                  type="text"
                  value={newCourseData.teacher}
                  onChange={(e) => setNewCourseData({ ...newCourseData, teacher: e.target.value })}
                  placeholder="Enter teacher's name"
                />
              </Form.Group>
              <Form.Group controlId="formCourseDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={newCourseData.description}
                  onChange={(e) => setNewCourseData({ ...newCourseData, description: e.target.value })}
                  placeholder="Enter course description"
                />
              </Form.Group>
              <Form.Group controlId="formCourseImage">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  value={newCourseData.image}
                  onChange={(e) => setNewCourseData({ ...newCourseData, image: e.target.value })}
                  placeholder="Enter image URL"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAddCourseModal}>Close</Button>
            <Button variant="primary" onClick={handleAddNewCourse}>Add Course</Button>
          </Modal.Footer>
        </Modal>

        {/* Edit Course Modal */}
        <Modal show={showEditCourseModal} onHide={handleCloseEditCourseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formEditCourseTitle">
                <Form.Label>Course Title</Form.Label>
                <Form.Control
                  type="text"
                  value={newCourseData.title}
                  onChange={(e) => setNewCourseData({ ...newCourseData, title: e.target.value })}
                  placeholder="Enter course title"
                />
              </Form.Group>
              <Form.Group controlId="formEditCourseTeacher">
                <Form.Label>Teacher</Form.Label>
                <Form.Control
                  type="text"
                  value={newCourseData.teacher}
                  onChange={(e) => setNewCourseData({ ...newCourseData, teacher: e.target.value })}
                  placeholder="Enter teacher's name"
                />
              </Form.Group>
              <Form.Group controlId="formEditCourseDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={newCourseData.description}
                  onChange={(e) => setNewCourseData({ ...newCourseData, description: e.target.value })}
                  placeholder="Enter course description"
                />
              </Form.Group>
              <Form.Group controlId="formEditCourseImage">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  value={newCourseData.image}
                  onChange={(e) => setNewCourseData({ ...newCourseData, image: e.target.value })}
                  placeholder="Enter image URL"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditCourseModal}>Close</Button>
            <Button variant="primary" onClick={handleEditCourse}>Update Course</Button>
          </Modal.Footer>
        </Modal>

        {/* Add Week Modal */}
        <Modal show={showAddWeekModal} onHide={handleCloseAddWeekModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Week</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formAddWeekVideo">
                <Form.Label>Video URL</Form.Label>
                <Form.Control
                  type="text"
                  name="video"
                  value={newWeekData.video}
                  onChange={handleChangeWeek}
                  placeholder="Enter video URL"
                />
              </Form.Group>
              <Form.Group controlId="formAddWeekPDF">
                <Form.Label>PDF URL</Form.Label>
                <Form.Control
                  type="text"
                  name="pdf"
                  value={newWeekData.pdf}
                  onChange={handleChangeWeek}
                  placeholder="Enter PDF URL"
                />
              </Form.Group>
              <Form.Group controlId="formAddWeekQuiz">
                <Form.Label>Quiz URL</Form.Label>
                <Form.Control
                  type="text"
                  name="quiz"
                  value={newWeekData.quiz}
                  onChange={handleChangeWeek}
                  placeholder="Enter quiz URL"
                />
              </Form.Group>
              <Form.Group controlId="formAddWeekResources">
                <Form.Label>Additional Resources (comma separated)</Form.Label>
                <Form.Control
                  type="text"
                  name="resources"
                  value={newWeekData.resources.join(', ')}
                  onChange={handleChangeWeek}
                  placeholder="Enter additional resources"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAddWeekModal}>Close</Button>
            <Button variant="primary" onClick={handleAddNewWeek}>Add Week</Button>
          </Modal.Footer>
        </Modal>

        {/* Edit Week Modal */}
        <Modal show={showEditWeekModal} onHide={handleCloseEditWeekModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Week</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formEditWeekVideo">
                <Form.Label>Video URL</Form.Label>
                <Form.Control
                  type="text"
                  name="video"
                  value={newWeekData.video}
                  onChange={handleChangeWeek}
                  placeholder="Enter video URL"
                />
              </Form.Group>
              <Form.Group controlId="formEditWeekPDF">
                <Form.Label>PDF URL</Form.Label>
                <Form.Control
                  type="text"
                  name="pdf"
                  value={newWeekData.pdf}
                  onChange={handleChangeWeek}
                  placeholder="Enter PDF URL"
                />
              </Form.Group>
              <Form.Group controlId="formEditWeekQuiz">
                <Form.Label>Quiz URL</Form.Label>
                <Form.Control
                  type="text"
                  name="quiz"
                  value={newWeekData.quiz}
                  onChange={handleChangeWeek}
                  placeholder="Enter quiz URL"
                />
              </Form.Group>
              <Form.Group controlId="formEditWeekResources">
                <Form.Label>Additional Resources (comma separated)</Form.Label>
                <Form.Control
                  type="text"
                  name="resources"
                  value={newWeekData.resources.join(', ')}
                  onChange={handleChangeWeek}
                  placeholder="Enter additional resources"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditWeekModal}>Close</Button>
            <Button variant="primary" onClick={handleEditWeek}>Update Week</Button>
          </Modal.Footer>
        </Modal>

        <Footer />
      </Container>
    </>
  );
};

export default AdminCourse;
