import React from 'react'
import { useState, useEffect, setState } from 'react';
import props from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap'
import Webcam from "react-webcam";
import styles from './Demo.css'
import 'bootstrap/dist/css/bootstrap.min.css'



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
      <div>
        <Webcam audio={false} ref={webcamRef} className="webcam"/>
        {capturing ? (
          <Button type="button" class="btn btn-outline-primary" onClick={handleStopCaptureClick}>Stop Capture</Button>
        ) : (
          <Button type="button" class="btn btn-outline-primary" onClick={handleStartCaptureClick}>Start Capture</Button>
        )}
        {recordedChunks.length > 0 && (
          <Button type="button" class="btn btn-outline-primary" onClick={handleDownload}>Download</Button>
        )}
      </div>
    );
  };

  const Demo = () => {



    const [scores, setScores] = useState([]);

    useEffect(() => {

      const fetchData = async () => {
        const response = await fetch('/scores').then(
          response => response.json().then(
            data => {
              setScores(data);
              console.log(data)
            }
          )
        );
      };

      fetchData();
    }, []);

      return (
        <Container className="page">
            <Row>
                <Col className="columnComponent">
                    <Row>
                        <WebcamStreamCapture/>
                    </Row>
                    
                    <Row>
                        <img src={require('./image.png')} className="smallImage"/>
                    </Row>
                    
                </Col>
                <div className="wall"/>
                <Col>
                <Button variant="primary" size = "lg" form="powerballButton" type="submit" />
                    <Row>
                        <Col>
                            <div className="columnComponent">
                                <div className="stat"><p>{scores["speakScore"]}</p></div>
                                <div className="statSub"><p>SpeakScore</p></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="columnComponent">
                            <div className="stat"><p>{scores["accuracy"]}%</p></div>
                                <div className="statSub"><p>Accuracy</p></div>
                            </div>
                        </Col>
                    </Row>
                    <div className="hWall"/>
                    <Row>
                        <Col>
                            <div className="columnComponent">
                                <div className="stat"><p>{scores["lateral"]}</p></div>
                                <div className="statSub"><p>LateralScore</p></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="columnComponent">
                            <div className="stat"><p>{scores["vertical"]}</p></div>
                                <div className="statSub"><p>VerticalScore</p></div>
                            </div>
                        </Col>
                    </Row>
                    <div className="hWall"/>
                    <Row>
                        <Col>
                            <div className="columnComponent">
                                <div className="tipHeader"><p>Tips</p></div>
                                <div className="tipText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                                id est laborum.
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                </Col>
            </Row>
            <div class="divider"/>
            <div class="divider"/>
            <div class="divider"/>
        </Container>
      );

    
  }

export default Demo;