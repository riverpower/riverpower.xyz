import React from 'react';
import { Container, Row, Col } from 'reactstrap';



const Footer = () => (
  <div className="footer">
    <Container>
      <Row style={{paddingTop: 12}}>
        <Col xs='12' sm='12' md='12' lg='3'>
          <h6>Riverpower Podcast Mill LLC</h6>
        </Col>
        <Col xs='12' sm='12' md='12' lg='3'>
          <a href="mailto:" target="_top"><h6>EMAIL</h6></a>
        </Col>
        <Col xs='12' sm='12' md='12' lg='3'>
          <h6>Windsor, VT</h6>
        </Col>
        <Col xs='12' sm='12' md='12' lg='3'>
          <h6>©2021</h6>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;