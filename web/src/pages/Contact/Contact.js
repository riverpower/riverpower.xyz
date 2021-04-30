import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from '../../logo.png';


class Contact extends React.Component {
  render(){
    return(
      <div>
        <Container className='home-page'>
          <Row className='align-items-center' style={{textAlign: 'center', paddingTop: 24 }}>
            <Col xs='12' sm='12' md='12' lg='4'>
              <img src={logo} className="App-logo" alt="logo" />  
            </Col>
            <Col xs='12' sm='12' md='12' lg='8'>
              <h4>Mission</h4>
              <h6>Riverpower Podcast Mill is a collaborative coalescence of independent creators and entertainers. Our mission is to enable and support the development, production, and distribution of works and foster an environment of nurturing individual creativity and collective power.</h6>
            </Col>
          </Row>
          <Row style={{paddingTop: 24}}>
            <Col xs='12' sm='12' md='12' lg='4' style={{paddingTop: 24}}>
              <img src='' alt="" />
            </Col>
            <Col xs='12' sm='12' md='12' lg='4' style={{paddingTop: 24}}>
              <img src='' alt="" />
            </Col>
            <Col xs='12' sm='12' md='12' lg='4' style={{paddingTop: 24}}>
              <img src='' alt="" />
            </Col>
          </Row>
          <Row style={{paddingTop: 48}}>
            <Col xs='12' sm='12' md='12' lg='12'>
              <h3>WORDS</h3>
              <h4>Smaller Words, expanded</h4>
            </Col>
          </Row>
          <Row style={{paddingTop: 24}}>
            <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 1}} style={{paddingTop: 24}}>
              <img src='' alt="" />
            </Col>
            <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 1}} style={{paddingTop: 24}}>
              <img src='' alt="" />
            </Col>
          </Row>
          <Row style={{paddingTop: 48}}>
            <Col xs='12' sm='12' md='12' lg='12'>
              <h3>Some Bullshit</h3>
              <h4>Lorem ipsum</h4>
            </Col>
          </Row>
          <Row style={{paddingTop: 24}}>
            <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 1}} style={{paddingTop: 24}}>
              <img src='' alt="" />
            </Col>
            <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 1}} style={{paddingTop: 24}}>
              <img src='' alt="" />
            </Col>
          </Row>
        </Container>  
      </div>

    );
  }
}

export default Contact;
