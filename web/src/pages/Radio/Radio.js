import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class Radio extends React.Component {
  render(){
    return(
      <div>
      <Container className='radio-page'>
        <Row className='align-items-center' style={{textAlign: 'center', paddingTop: 24 }}>
          <Col xs='12' sm='12' md='12' lg='12'>
            <iframe src="https://radio.uprootx.com/public/riverpower_radio/embed?theme=light" title="radio" frameborder="0" allowtransparency="true" styles="width: 100%; min-height: 150px; border: 0;"></iframe>            
          </Col>                    
        </Row>
      </Container>  
    </div>      
    );
  }
}

export default Radio;
