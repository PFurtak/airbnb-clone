import React, { useState } from 'react';
import { render } from 'react-dom';
import { AppHeader } from './sections/AppHeader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import reportWebVitals from './reportWebVitals';
import { Affix, Layout } from 'antd';
import {
  Home,
  Host,
  Login,
  Listing,
  Listings,
  NotFound,
  User,
} from './sections';
import { Viewer } from './lib/types/types';
import './styles/index.css';

const client = new ApolloClient({
  uri: '/api',
});

const initialViewer: Viewer = {
  id: null,
  token: null,
  avatar: null,
  hasWallet: null,
  didRequest: false,
};

const App = () => {
  const [viewer, setViewer] = useState<Viewer>(initialViewer);
  console.log(viewer);
  return (
    <Router>
      <Layout id='app'>
        <Affix offsetTop={0} className='app__affix-header'>
          <AppHeader viewer={viewer} setViewer={setViewer} />
        </Affix>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/host' component={Host} />
          <Route
            exact
            path='/login'
            render={(props) => <Login {...props} setViewer={setViewer} />}
          />
          <Route exact path='/listing/:id' component={Listing} />
          <Route exact path='/listings/:location?' component={Listings} />
          <Route exact path='/user/:id' component={User} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
