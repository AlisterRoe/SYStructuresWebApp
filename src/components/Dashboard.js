import React, { useState } from 'react'
import { Alert, Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Navbar className="navbar-dark bg-dark" style={{ minHeight: "7vh" }}>
        <Container style={{ minWidth: "90vw" }}>
          <Navbar.Brand>SY STRUCTURES</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/update-profile">Update Profile</Nav.Link>
              <Nav.Link>Help</Nav.Link>
              <Link onClick={handleLogout} className="btn btn-primary pull-right">
                Log Out
              </Link>
            </Nav>
        </Container>
      </Navbar>
      <Container fluid>
        <Row style={{ backgroundColor: "#38DE6B", minHeight: "25vh" }}>
          <Col xs={4}>1 of 3</Col>
          <Col style={{ backgroundColor: "#1EC8ED" }}>2 of 3</Col>
          <Col xs={3}>3 of 3</Col>
        </Row>
        <Row style={{ backgroundColor: "#D369F9", minHeight: "34vh" }}>
          <Col>1 of 4</Col>
          <Col style={{ backgroundColor: "#E10029" }}>2 of 4</Col>
          <Col>3 of 4</Col>
          <Col style={{ backgroundColor: "#E10029" }}>4 of 4</Col>
        </Row>
        <Row style={{ backgroundColor: "#38DE6B", minHeight: "34vh" }}>
          <Col>1 of 4</Col>
          <Col style={{ backgroundColor: "#1EC8ED" }}>2 of 4</Col>
          <Col>3 of 4</Col>
          <Col style={{ backgroundColor: "#1EC8ED" }}>4 of 4</Col>
        </Row>
        {/* <div className="w100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email:</strong> {currentUser.email}
              <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                Update Profile
              </Link>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div> */}
      </Container>
    </>
  )
}