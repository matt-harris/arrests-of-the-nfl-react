import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Footer.scss'

const Footer = () => (
  <footer className="footer">
    <Grid className="Container">
      <Row>
        <Col xs>
          <p>Data from <a href="https://nflarrest.com/api/" target="_blank" rel="noopener noreferrer">NFLArrest.com API</a></p>

          <p>NFL and the NFL shield design are registered trademarks of the National Football League. The team names, logos and uniform designs are registered trademarks of the teams indicated. All other NFL-related trademarks are trademarks of the National Football League.</p>
        </Col>
      </Row>

    </Grid>
  </footer>
);

export default Footer;