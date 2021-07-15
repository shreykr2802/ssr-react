import React from 'react';
import { NavLink as Link, Switch, Route } from 'react-router-dom';

import Search from '../Search/Search';
import MovieDetail from '../MovieDetail/MovieDetail';
import MovieList from '../MovieList/MovieList';

const Links = () => {
    return (
        <div>
            <Switch>
                <Route
                    path='/:name'
                    exact={true}
                    component={MovieList}
                />

                <Route
                    path='/details/:id'
                    exact={true}
                    component={MovieDetail}
                />
            </Switch>
        </div>
    );
}

export default Links;