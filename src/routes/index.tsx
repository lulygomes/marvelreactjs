import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Characters from '../pages/Characters';
import Comics from '../pages/Comics';
import Creators from '../pages/Creators';
import EventsPg from '../pages/EventsPg';
import Series from '../pages/Series';
import Stories from '../pages/Stories';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Characters} />
    <Route path="/characters" component={Characters} />
    <Route path="/comics" component={Comics} />
    <Route path="/creators" component={Creators} />
    <Route path="/events" component={EventsPg} />
    <Route path="/series" component={Series} />
    <Route path="/stories" component={Stories} />
  </Switch>
);
export default Routes;
