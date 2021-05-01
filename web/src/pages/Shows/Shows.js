import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import tmhlogo from '../../tmh.jpg';

class Shows extends React.Component {
  render(){
    return(
      <Container className='shows-page'>
        <Row style={{paddingTop: 24}}> 
          <Col xs='12' sm='12' md='12' lg='3'>
            <a href="https://www.pulpfrombeyond.com/" target="_blank" rel="noopener noreferrer">
            <img src='https://assets.fireside.fm/file/fireside-images/podcasts/images/9/9d1ee77a-7533-4007-be71-3b48223e9264/cover_small.jpg?v=1' alt="" />
            </a>
          </Col>
          <Col xs='12' sm='12' md='12' lg='9' style={{paddingLeft: 36}}>
            <h3>Pulp! From Beyond the Vale</h3>
            <p>The mission here at Pulp! is to provide original, quality content for your express entertainment purposes. What's more, we pledge to always be in contact with our listeners, accepting submissions and suggestions on how best to promote the program and help it grow.</p>
            <p>This podcast serves as an homage, a relic of a memory, to those rough pulp sci-fi and horror magazines of yesteryear, and thus we strive to bring you unique--and sometimes unexpected--content.</p>
            <p></p>
          </Col>
        </Row>
        <Row style={{paddingTop: 24}}> 
          <Col xs='12' sm='12' md='12' lg='3'>
            <a href="https://toomanyhats.podbean.com/" target="_blank" rel="noopener noreferrer">
            <img src={tmhlogo} alt="" width="300" height="300" />
            </a>
          </Col>
          <Col xs='12' sm='12' md='12' lg='9' style={{paddingLeft: 36}}>
            <h3>Too Many Hats</h3>
            <p>An improv and sketch comedy podcast that dabbles in sports, politics, and social commentary. Weekly on Fridays with bonus content dropping regularly! </p>
          </Col>
        </Row>          
        <Row style={{paddingTop: 24}}> 
          <Col xs='12' sm='12' md='12' lg='3'>
            <a href="https://sciencenight.fireside.fm/" target="_blank" rel="noopener noreferrer">
            <img src='https://assets.fireside.fm/file/fireside-images/podcasts/images/f/fa03f20c-adef-45d4-9ae5-5898ccfc2f21/cover_small.jpg?v=1' alt="" />
            </a>
          </Col>
          <Col xs='12' sm='12' md='12' lg='9' style={{paddingLeft: 36}}>
            <h3>Science Night</h3>
            <p>Science is everywhere, and scientists can inspire a lifetime of curiosity and wonder. They can also make their work seem complicated and unattainable. The Science Night Podcast is a way to make scientists seem more approachable, which I hope will make the work more approachable.</p>
          </Col>
        </Row>
        <Row style={{paddingTop: 24}}> 
          <Col xs='12' sm='12' md='12' lg='3'>
            <a href="https://pleaseenjoytheview.fireside.fm/" target="_blank" rel="noopener noreferrer">
            <img src='https://assets.fireside.fm/file/fireside-images/podcasts/images/3/3124f4a5-d1af-4df9-890a-51a02d514235/cover_small.jpg?v=2' alt="" />
            </a>
          </Col>
          <Col xs='12' sm='12' md='12' lg='9' style={{paddingLeft: 36}}>
            <h3>Please Enjoy the View</h3>
            <p>Every other week, Host Jacob Garnjost talks with musicians, filmmakers, designers, and artists of all shapes and sizes about their work and their lives. This podcast examines the creative process and how art fits into all of our lives.</p>
          </Col>
        </Row>
        <Row style={{paddingTop: 24}}> 
          <Col xs='12' sm='12' md='12' lg='3'>
            <a href="https://stonesoup.fireside.fm/" target="_blank" rel="noopener noreferrer">
            <img src='https://assets.fireside.fm/file/fireside-images/podcasts/images/c/c25f62db-9b98-4d0a-8fa7-8bfdb68931f4/cover_small.jpg?v=1' alt="" />
            </a>
          </Col>
          <Col xs='12' sm='12' md='12' lg='9' style={{paddingLeft: 36}}>
            <h3>Stone Soup Podcast</h3>
            <p></p>
          </Col>
        </Row>   
        <Row style={{paddingTop: 24}}> 
          <Col xs='12' sm='12' md='12' lg='3'>
            <a href="http://www.shinypodcast.com" target="_blank" rel="noopener noreferrer">
            <img src='https://assets.fireside.fm/file/fireside-images/podcasts/images/e/ef1da295-a0e6-4846-95ec-495fa785f6a0/cover_small.jpg?v=1' alt="" />
            </a>
          </Col>
          <Col xs='12' sm='12' md='12' lg='9' style={{paddingLeft: 36}}>
            <h3>Shiny Podcast</h3>
            <p>Shiny Podcast: following the light and throwing a little shade on the newest and brightest in today’s gaming and technology...</p>
          </Col>
        </Row>                             
      </Container>  

    );
  }
}

export default Shows;
