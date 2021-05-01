import React from 'react';
import { SocialIcon } from 'react-social-icons';
import logo from '../../logo.png';
import { Container, Row, Col } from 'reactstrap';

class Home extends React.Component {
  render(){
    return(
      <div>
        <Container className='home-page'>
          <Row className='align-items-center' style={{textAlign: 'center', paddingTop: 24 }}>
            <Col xs='12' sm='12' md='12' lg='12'>
              <img src={logo} className="App-logo" alt="logo" />  
            </Col>
            <Col xs='12' sm='12' md='12' lg='12'>
              <h3>Mission</h3>
              <h6>Riverpower Podcast Mill is a collaborative coalescence of independent creators and entertainers. Our mission is to enable and support the development, production, and distribution of works and foster an environment of nurturing individual creativity and collective power.</h6>
            </Col>
          </Row>
          <Row style={{paddingTop: 48}}>
            <Col xs='12' sm='12' md='12' lg='3' style={{paddingTop: 24}}>
              <SocialIcon url="https://twitter.com/PodcastMill" />
            </Col>
            <Col xs='12' sm='12' md='12' lg='3' style={{paddingTop: 24}}>
              <SocialIcon url="https://www.facebook.com/Riverpower-Podcast-Mill-105001174533195/" />
            </Col>
            <Col xs='12' sm='12' md='12' lg='3' style={{paddingTop: 24}}>
              <SocialIcon url="https://instagram.com/" />
            </Col>
            <Col xs='12' sm='12' md='12' lg='3' style={{paddingTop: 24}}>
              <SocialIcon url="mailto:pulpfrombeyond@gmail.com" />
            </Col>                    
          </Row>
        </Container>  
      </div>
    );
  }
}
export default Home;
