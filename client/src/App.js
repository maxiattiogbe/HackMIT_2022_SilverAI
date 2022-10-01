import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import { Nav, Container, Navbar, NavLink } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Webcam from "react-webcam";


import Home from './pages/Home'
import Demo from './pages/Demo'
import Contact from './pages/Contact'

function NavigationBar() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Silver AI</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/demo">Demo</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </Nav>
          </Container>
        </Navbar>
        <br/>
      </>
    );
};

function App() {
  return (
    <>
      <NavigationBar />
      <Home />
      <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <WebcamStreamCapture></WebcamStreamCapture>
      </Container>
      <br />
    </>
  );
}

const WebcamStreamCapture = () => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <>
      <Webcam audio={false} ref={webcamRef} />
      {capturing ? (
        <button type="button" class="btn btn-outline-primary" onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button type="button" class="btn btn-outline-primary" onClick={handleStartCaptureClick}>Start Capture</button>
      )}
      {recordedChunks.length > 0 && (
        <button type="button" class="btn btn-outline-primary" onClick={handleDownload}>Download</button>
      )}
    </>
  );
};

export default App;
