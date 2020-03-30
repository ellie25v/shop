import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Door from './catagories/door/Door'
import Wall from './catagories/wall/Wall'
import Roof from './catagories/roof/Roof'
import Window from './catagories/window/Window'

const HomePage = () => {
    return (
        <>
        <h2>Categories</h2>
        <Switch>
                <Route path="/categories/roof" component={Roof} />
                <Route path="/categories/wall" component={Wall} />
                <Route path="/categories/window" component={Window} />
                <Route path="/categories/door" component={Door} />
        </Switch>
        </>
    );
}

export default HomePage;