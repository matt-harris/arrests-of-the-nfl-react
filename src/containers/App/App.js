import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from '../Header/Header';
import Main from './../Main/Main';
import TeamDetail from './../../components/TeamDetail/TeamDetail';
import Footer from '../Footer/Footer';

import './App.scss';

// React router 404 page.
const NoMatchPage = () => {
  return (
    <div className="PageNotFound">
      <h2>404 - Not page not found</h2>

      <Link to="/">Go to the Home page.</Link>
    </div>
  );
};

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
            <Route component={ NoMatchPage } />
          </Switch>
        </Col>
      </Row>
    </Grid>
    
    <Footer/>
  </div>
);

export default App;
