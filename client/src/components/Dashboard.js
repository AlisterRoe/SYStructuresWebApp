import React, { useRef, useState, useEffect } from 'react'
import { Alert, Navbar, Container, Nav, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

export default function Dashboard() {
  const baseURL = "http://localhost:5000";

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

  const inputFile = useRef(null)
  const [file, setFile] = useState(null)
  const [filename, setFilename] = useState('')
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (file !== null) {
      onFileSubmit();
    }
  });

  const [queriedFolder, setQueriedFolder] = useState(null);

  function getID(name) {
    axios
      .post(baseURL+'/getFolder', {
        q: "mimeType='application/vnd.google-apps.folder' and name='" + name + "'", 
        // q: "mimeType='application/vnd.google-apps.folder' and name='" + String + "' and '1zv2Ct9Hg68rkmmI--mflkLQGGoRshove' in parents", 
        fields: 'files(name,id)'
      })
      .then((response) => {
        console.log(response);
        const myQueriedFolder = response.data;
        setQueriedFolder(myQueriedFolder);
      });
  }

  function createFolder() {
    axios
      .post(baseURL+'/uploadAFolder', {
        name: 'Test Node',
        parents: ['0B3sWiBPjF4DfNWJJaFU0a1I3amc'],
        mimeType: 'application/vnd.google-apps.folder'
      })
  }
  
  const jobNumberRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    
    getID(jobNumberRef.current.value)
  }

  async function onFileSubmit() {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post(baseURL + '/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    
      setFile(null);
      setMessage('Successfully uploaded ' + filename);
      setFilename('');
      setShow(true);

    } catch (err) {
      if (err.response.status === 500) {
        // setMessage('There was a problem with the server');
      } else {
        // setMessage(err.response.data.msg);
      }
    }
  };

  function onChange(e) {
    if (e.target.files[0] != null) {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
    }
    e.target.value = null; // reset onChange
  };

  const onButtonClick = () => {
   inputFile.current.click();
  };

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

      <Alert show={show} variant="success" className="d-flex align-items-center justify-content-between flex-row">
        {message}
        <Button onClick={() => setShow(false)} variant="outline-success">
          Close
        </Button>
      </Alert>

      <Container fluid>
        <Row style={{  height: "25vh" }}>
          <Col xs={4} className="align-middle">
            <Card className="m-2">
              <Container className="mt-2">
                <h4>SELECT JOB</h4>
              </Container>
              <Card.Body>
                <Form className="d-flex align-items-center justify-content-center flex-row" onSubmit={handleSubmit}>
                  <Container>
                    <Form.Group className="mb-2" id="job-number">
                        <Form.Label className="mb-0">JOB NUMBER</Form.Label>
                        <Form.Control type="text" placeholder="Enter Job #" ref={jobNumberRef} required />
                    </Form.Group>
                    <Form.Group id="job-name">
                        <Form.Label className="mb-0">JOB NAME</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                  </Container>
                  <Container className="text-center">
                    <div>CURRENT JOB</div> {queriedFolder === null || queriedFolder.length === 0 ? 'No Job Selected' : queriedFolder[0].name}
                    <Button className="w-100 mt-5" variant="outline-dark" type="submit">SELECT</Button>
                  </Container>
                </Form>
              </Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
            </Card>
          </Col>
          <Col className="d-flex align-items-center flex-column justify-content-evenly">

            <input type='file'onChange={onChange} ref={inputFile} style={{display: 'none'}}/>
            <Button className="w-50" variant="outline-dark" onClick={onButtonClick}>SAVED RECEIVED DOCUMENTS</Button>
            
            <Button className="w-50" variant="outline-dark" type="submit" onClick={createFolder}>ISSUE SY DOCUMENT</Button>
          </Col>
          <Col xs={3} className="d-flex align-items-center justify-content-center">
            <Card className="w-75 h-75">
              <Container className="mt-3 text-center">
                <h5>CREATE NEW JOB</h5>
              </Container>
              <Card.Body className="d-flex align-items-center justify-content-center">
                <Button className="w-50" variant="outline-dark" type="submit">CREATE</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ height: "34vh" }}>
          <Col>
            <Container className="text-center" style={{ height: "10%"}}>
              <h5>ADMIN DOCUMENTS</h5>
            </Container>
            <Container className="d-flex align-items-center flex-column justify-content-evenly"  style={{ height: "80% " }}>
              <Button className="w-100" variant="outline-dark" type="submit">FEE PROPOSAL</Button>
              <Button className="w-100" variant="outline-dark" type="submit">FEE VARIATION</Button>
              <Button className="w-100" variant="outline-dark" type="submit">LETTER</Button>
              <Button className="w-100" variant="outline-dark" type="submit">REPORT</Button>
            </Container>
          </Col>
          <Col>
            <Container className="text-center" style={{ height: "10%" }}>
                <h5>CONCEPT</h5>
              </Container>
              <Container className="d-flex align-items-center flex-column justify-content-evenly"  style={{ height: "80% " }}>
                <Button className="w-100" variant="outline-dark" type="submit">DESIGN BREIF</Button>
                <Button className="w-100" variant="outline-dark" type="submit">GEOTECH FEE REQUEST</Button>
                <Button className="w-100" variant="outline-dark" type="submit">CONCEPT DESIGN CHECKLIST</Button>
              </Container>
          </Col>
          <Col>
            <Container className="text-center" style={{ height: "10%" }}>
              <h5>DESIGN & DOCUMENTATION</h5>
            </Container>
            <Container className="d-flex align-items-center flex-column justify-content-evenly"  style={{ height: "80% " }}>
              <Button className="w-100" variant="outline-dark" type="submit">SAFETY IN DESIGN REPORT</Button>
              <Button className="w-100" variant="outline-dark" type="submit">STRUCTURAL SPECIFICATIONS</Button>
              <Button className="w-100" variant="outline-dark" type="submit">CALCULATION DOCUMENT</Button>
            </Container>
          </Col>
          <Col>
            <Container className="text-center" style={{ height: "10%" }}>
              <h5>CONSTRUCTION</h5>
            </Container>
            <Container className="d-flex align-items-center flex-column justify-content-evenly"  style={{ height: "80% " }}>
              <Button className="w-100" variant="outline-dark" type="submit">SITE INSPECTION REPORT</Button>
              <Button className="w-100" variant="outline-dark" type="submit">LETTER OF COMPLIANCE</Button>
              <Button className="w-100" variant="outline-dark" type="submit">SHOP DRAWING REVIEW</Button>
              <Button className="w-100" variant="outline-dark" type="submit">CERTIFICATION LETTER</Button>
            </Container>
          </Col>
        </Row>
        <Row style={{ height: "34vh" }}>
          <Col>
            <Container className="text-center" style={{ height: "10%" }}>
              <h5>QA</h5>
            </Container>
            <Container className="d-flex align-items-center flex-column justify-content-evenly"  style={{ height: "80% " }}>
              <Button className="w-100" variant="outline-dark" type="submit">VERIFY ENGINEERING CHECKLIST</Button>
              <Button className="w-100" variant="outline-dark" type="submit">VERIFY BIM CHECKLIST</Button>
              <Button className="w-100" variant="outline-dark" type="submit">VERIFY DRAWING REVIEW</Button>
              <Button className="w-100" variant="outline-dark" type="submit">VERIFY SAFETY IN DESIGN</Button>
            </Container>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
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