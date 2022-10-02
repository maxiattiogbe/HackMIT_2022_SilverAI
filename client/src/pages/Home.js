import React from 'react'
import { Stack, Container, Row, Col, Button } from 'react-bootstrap'
import styles from './Home.css'
import ReactTypingEffect from 'react-typing-effect';

function Home() {
    return ( 
        <Container>
            <div class="divider"/>
            <div class="divider"/>
            
            <Row>
                <ReactTypingEffect 
                        class="centerTyped"
                        text={["Daily Practices.", "AI-Powered Lip-Tracking.", "Digital Enunciation Coach."]}
                        cursorRenderer={cursor => <div class="centerTypedFont">{cursor}</div>}
                        eraseDelay={500}
                        displayTextRenderer={(text) => {
                            return(
                                <div class="centerTypedFont">
                                    <p>{text}</p>
                                </div>
                                
                            );
                        }}
                    />
            </Row>
            
            <div class="divider"/>
            <div class="divider"/>
            <div class="divider"/>
            <Row>
                <div class="centerTypedFont">
                    <p>&#128075; Hello.</p>
                </div>
            </Row>
            <Row>
                <Col>
                    <div>
                        <h1 class="subTextFont">We're the modern, revolutionized app <br/> 
                        to tackling speech pathology.</h1>
                    </div>
                    
                </Col>
                
            </Row>
            
            <Row>
            </Row>

            <div class="divider"/>
    
            <Stack direction="horizontal" off gap={3}>
             {/* add onclick field here */}
              <Button variant="primary" size = "lg" form="loginButton" type="submit">   
                Login
              </Button>
                            
              {/* // add onclick field here */}
              <Button variant="primary" size = "lg"  form="registerButotn" type="submit">   
                Register
              </Button>

           
            </Stack>  
            <div class="divider"/>
            <div class="divider"/>
            <div class="divider"/>
            <div class="divider"/>
            <div class="divider"/>
        </Container>
        
    );
};

export default Home;