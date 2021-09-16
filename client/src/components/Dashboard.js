import React, { useRef, useState, useEffect } from 'react'
import { Alert, Navbar, Container, Nav, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

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
  const [fileArray, setFileArray] = useState(null)
  // const [file, setFile] = useState(null)
  const [showFileUploadSuccess, setShowFileUploadSuccess] = useState(false)
  const [message, setMessage] = useState('')
  const [receivedSubFolder, setReceivedSubFolder] = useState('')

  useEffect(() => {
    if (fileArray !== null && receivedSubFolder !== '') {
      saveReceivedDoc(receivedSubFolder);
      setFileArray(null);
      setReceivedSubFolder('');
    }
  },[fileArray, receivedSubFolder]);

  const [queriedJobFolder, setQueriedJobFolder] = useState(null);

  function getJobID(name) {
    axios
      .post(baseURL+'/getFolder', {
        q: "mimeType='application/vnd.google-apps.folder' and name='" + name + "'", 
        // q: "mimeType='application/vnd.google-apps.folder' and name='" + String + "' and '1zv2Ct9Hg68rkmmI--mflkLQGGoRshove' in parents", 
        fields: 'files(name,id)'
      })
      .then((response) => {
        const myQueriedJobFolder = response.data;
        setQueriedJobFolder(myQueriedJobFolder);
      });
  }

  const [queriedSubFolder, setQueriedSubFolder] = useState(null);

  async function getSubFolderID(name) {
    if (queriedJobFolder === null || queriedJobFolder.length === 0) {
      setFileUploadError("No job selected. Please select a job before attempting to upload files.");
      setShowFileUploadError(true);
      setFileArray(null);
      // setFile(null);
      return;
    } else {
      await axios
        .post(baseURL+'/getFolder', {
          q: "mimeType='application/vnd.google-apps.folder' and name='" + name + "' and '" + queriedJobFolder[0].id + "' in parents", 
          // q: "mimeType='application/vnd.google-apps.folder' and name='" + String + "' and '1zv2Ct9Hg68rkmmI--mflkLQGGoRshove' in parents", 
          fields: 'files(name,id)'
        })
        .then((response) => {
          setQueriedSubFolder(response.data);
        });
        // console.log('End getSubFolderID ' + queriedSubFolder)
    }
  }
  
  const [createdUploadFolder, setCreatedUploadFolder] = useState(null);

  async function createFolder() {
    if (queriedSubFolder === null || queriedSubFolder.length === 0) {
      setFileUploadError("No subfolder selected. Please select a job before attempting to upload files.");
      setShowFileUploadError(true);
      setFileArray(null);
      // setFile(null);
      return;
    } else {
      var date = moment().format("DD MMMM YYYY").toLocaleString();
      var latestFile = queriedChildrenList.files[0].name.toString();
      var fileNumber = Number(latestFile.substring(0, 2));
      fileNumber++;
      if (fileNumber.toString().length === 1) {
        fileNumber = '0' + fileNumber;
      }
      var name = fileNumber + ' - ' + date;
      await axios
        .post(baseURL+'/uploadAFolder', {
          name: name,
          parents: [queriedSubFolder[0].id],
          mimeType: 'application/vnd.google-apps.folder'
        })
        .then((response) => {
          setCreatedUploadFolder(response.data.id);
          // console.log('End createFolder ' + createdUploadFolder)
        });
    }
  }
  
  const jobNumberRef = useRef()
  const [fileUploadError, setFileUploadError] = useState("")
  const [showFileUploadError, setShowFileUploadError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    
    getJobID(jobNumberRef.current.value)
  }

  async function onFileSubmit() {
    if (queriedJobFolder === null || queriedJobFolder.length === 0) {
      setFileUploadError("No job selected. Please select a job before attempting to upload a file.");
      setShowFileUploadError(true);
      setFileArray(null);
      // setFile(null);
      return;
    } else {
      for (var i = 0; i < fileArray.length; i++) {
        const formData = new FormData();
        formData.append('file', fileArray[i]);
        formData.append('id', createdUploadFolder);
  
        try {
          axios.post(baseURL + '/uploadMultipleFiles', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
        } catch (err) {
          if (err.response.status === 500) {
            // setMessage('There was a problem with the server');
          } else {
            // setMessage(err.response.data.msg);
          }
        }
      }
      setShowFileUploadError(false);
      setMessage('Successfully uploaded ' + fileArray.length + ' files');
      // setFile(null);
      setFileArray(null);
      setShowFileUploadSuccess(true);
      
    }
  };
  
  const [queriedChildrenList, setQueriedChildrenList] = useState(null);

  async function getSubFolderChildrenList() {
    if (queriedSubFolder === null || queriedSubFolder.length === 0) {
      setFileUploadError("No subfolder selected. Please select a job before attempting to upload files.");
      setShowFileUploadError(true);
      setFileArray(null);
      // setFile(null);
      return;
    } else {
      var pageToken = null;
    
      await axios
        .post(baseURL+'/listChildrenFolders', {
          q: "mimeType='application/vnd.google-apps.folder' and '" + queriedSubFolder[0].id + "' in parents",
          fields: 'nextPageToken, files(id, name)',
          spaces: 'drive',
          pageToken: pageToken
        })
        .then((response) => {
          const myQueriedChildrenList = response.data;
          setQueriedChildrenList(myQueriedChildrenList);
          // console.log('End getSubFolderChildrenList ' + queriedChildrenList)
        });
    }
  }

  async function saveReceivedDoc(subFolder) {
    if (queriedJobFolder === null || queriedJobFolder.length === 0) {
      setFileUploadError("No job selected. Please select a job before attempting to upload a file.");
      setShowFileUploadError(true);
      setFileArray(null);
      // setFile(null);
      return;
    } else {
      var createdUploadFolderFunc = null;
      var queriedChildrenListFunc = null;
      var queriedSubFolderFunc = null;
      var pageToken = null;
      
      await axios
        .post(baseURL+'/getFolder', {
          q: "mimeType='application/vnd.google-apps.folder' and name='" + subFolder + "' and '" + queriedJobFolder[0].id + "' in parents", 
          // q: "mimeType='application/vnd.google-apps.folder' and name='" + String + "' and '1zv2Ct9Hg68rkmmI--mflkLQGGoRshove' in parents", 
          fields: 'files(name,id)'
        })
        .then((response) => {
          queriedSubFolderFunc = response.data;
          console.log('End getSubFolderID ' + queriedSubFolderFunc[0].id)
        });

      await axios
        .post(baseURL+'/listChildrenFolders', {
          q: "mimeType='application/vnd.google-apps.folder' and '" + queriedSubFolderFunc[0].id + "' in parents",
          fields: 'nextPageToken, files(id, name)',
          spaces: 'drive',
          pageToken: pageToken
        })
        .then((response) => {
          queriedChildrenListFunc = response.data;
          console.log('End getSubFolderChildrenList ' + queriedChildrenListFunc.files[0].name)
        });
      
      var date = await moment().format("DD MMMM YYYY").toLocaleString();
      var latestFile = await queriedChildrenListFunc.files[0].name.toString();
      var fileNumber = await Number(latestFile.substring(0, 2));
      await fileNumber++;
      if (fileNumber.toString().length === 1) {
        fileNumber = await '0' + fileNumber;
      }
      var name = await fileNumber + ' - ' + date;
      await axios
        .post(baseURL+'/uploadAFolder', {
          name: name,
          parents: [queriedSubFolderFunc[0].id],
          mimeType: 'application/vnd.google-apps.folder'
        })
        .then((response) => {
          createdUploadFolderFunc = response.data.id;
          console.log('End createFolder ' + createdUploadFolderFunc)
        });

      console.log(fileArray);

      for (var i = 0; i < fileArray.length; i++) {
        const formData = new FormData();
        formData.append('file', fileArray[i]);
        formData.append('id', createdUploadFolderFunc);
  
        try {
          axios.post(baseURL + '/uploadMultipleFiles', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
        } catch (err) {
          if (err.response.status === 500) {
            // setMessage('There was a problem with the server');
          } else {
            // setMessage(err.response.data.msg);
          }
        }
      }
      setShowFileUploadError(false);
      setMessage('Successfully uploaded ' + fileArray.length + ' files');
      // setFile(null);
      setFileArray(null);
      setShowFileUploadSuccess(true);
      createdUploadFolderFunc = null;
      queriedChildrenListFunc = null;
      queriedSubFolderFunc = null;
      
    }

  }

  async function onChange(e) {
    if (e.target.files[0] != null) {
      await setFileArray(e.target.files);
      console.log('File array ' + fileArray);
    }
    // e.target.value = null; // reset onChange
  };

  function onButtonClick() {
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

      <Alert show={showFileUploadSuccess} variant="success" className="d-flex align-items-center justify-content-between flex-row">
        {message}
        <Button onClick={() => setShowFileUploadSuccess(false)} variant="outline-success">
          Close
        </Button>
      </Alert>
      <Alert show={showFileUploadError} variant="danger" className="d-flex align-items-center justify-content-between flex-row">
        {fileUploadError}
        <Button onClick={() => setShowFileUploadError(false)} variant="outline-danger">
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
                    <div>CURRENT JOB</div> {queriedJobFolder === null || queriedJobFolder.length === 0 ? 'No Job Selected' : queriedJobFolder[0].id}
                    <Button className="w-100 mt-5" variant="outline-dark" type="submit">SELECT</Button>
                  </Container>
                </Form>
              </Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
            </Card>
          </Col>
          <Col className="d-flex align-items-center flex-column justify-content-evenly">

            <input type='file' onChange={onChange} ref={inputFile} style={{display: 'none'}} multiple/>
            <Button className="w-50" variant="outline-dark" onClick={() => {setReceivedSubFolder('Shop Drawings'); onButtonClick()}}>SAVED RECEIVED DOCUMENTS</Button>
            
            <Button className="w-50" variant="outline-dark" type="submit" onClick={() => {createFolder()}}>ISSUE SY DOCUMENT</Button>
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
            <Container className="text-center" style={{ height: "10%" }}>
              <h5>SAVE RECEIVED DOCUMENTS</h5>
            </Container>
            <Container className="d-flex align-items-center flex-column justify-content-evenly"  style={{ height: "80% " }}>
              <Button className="w-100" variant="outline-dark" type="submit">DRAWINGS/DOCUMENTS (CAD)</Button>
              <Button className="w-100" variant="outline-dark" type="submit">PHOTOS (PHOTOS)</Button>
              <Button className="w-100" variant="outline-dark" type="submit">SHOP DRAWINGS (SHOP DRAWINGS)</Button>
            </Container>
          </Col>
          <Col>
            <Container className="text-center" style={{ height: "10%"}}>
              <h5>ADMIN DOCUMENTS</h5>
            </Container>
            <Container className="d-flex align-items-center flex-column justify-content-evenly"  style={{ height: "80% " }}>
              <Button className="w-100" variant="outline-dark" type="submit" onClick={() => {getSubFolderID('Photos')}}>FEE PROPOSAL</Button>
              {queriedSubFolder === null || queriedSubFolder.length === 0 ? 'No Queried Sub Folder Folder' : queriedSubFolder[0].id}
              <Button className="w-100" variant="outline-dark" type="submit" onClick={() => {getSubFolderChildrenList()}}>FEE VARIATION</Button>
              {queriedChildrenList === null || queriedChildrenList.length === 0 ? 'No Queried Children List' : queriedChildrenList.files[0].name}
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
        </Row>
        <Row style={{ height: "34vh" }}>
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