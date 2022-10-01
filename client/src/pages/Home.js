import React from 'react'
import { Stack, Container, Row, Col, Button } from 'react-bootstrap'
import styles from './Home.css'
import ReactTypingEffect from 'react-typing-effect';

function Home() {
    return ( 
        <Container>
            <div class="divider"/>
            <Row>
                <ReactTypingEffect 
                        class="centerTyped"
                        text={["Daily Practices.", "AI-Powered Lip-Tracking.", "Digital Enunciation Coach."]}
                        cursorRenderer={cursor => <h1>{cursor}</h1>}
                        eraseDelay={999999}
                        displayTextRenderer={(text) => {
                            return(
                                <h1>{text}</h1>
                            );
                        }}
                    />
            </Row>
            <div class="divider"/>
            <div class="divider"/>
            <Row>
                <h1>Hello.</h1>
            </Row>
            <Row>
                <h1>We're the modern, revolutionized app to tackle speech pathology.</h1>
            </Row>
            
            <Row>
            </Row>

            <div class="divider"/>
    
            <Stack direction="horizontal" off gap={3}>
              <Button variant="primary" size = "lg" form="loginButton" type="submit">
                Login
              </Button>
    
              <Button variant="primary" size = "lg"  form="registerButotn" type="submit">
                Register
              </Button>

           
          </Stack>
        </Container>
        
    );
};

export default Home;