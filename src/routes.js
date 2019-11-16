import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not.found.component';

//Komponent IndexRoute jest dobrą praktyką przy każdym kolejnym poziomie zagnieżdżania route'ów; nie przyjmuje on propsa path
//route z parametrem path=* zawsze jako ostatni, jest to wyrażenie regularne, tu - dowolny adres
export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path='contact' component={Contact} />
        <Route path='*' component={NotFound} />
    </Route>
);