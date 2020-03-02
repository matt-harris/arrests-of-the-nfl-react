import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from '../Header/Header';
import Main from './../Main/Main';
import TeamDetail from './../../components/TeamDetail/TeamDetail';
import Footer from '../Footer/Footer';

import './App.scss';

const App = () => (
  <div className="App">
    <Grid fluid className="Container">
      <Row>
        <Col xs>
          <Header />
        </Col>
      </Row>

      <Row>
        <Col xs>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/teams/:team" component={TeamDetail} />
            {/* TODO {Page Not found 404 component} */}
          </Switch>
        </Col>
      </Row>
    </Grid>
    
    <Footer/>
  </div>
);

export default App;
