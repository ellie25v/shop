import React, {lazy, Suspense} from 'react';
import Sidebar from './sidebar/Sidebar';
import css from './app.module.css';
import Header from './header/Header';
import Box from './box/Box';
import { Switch, Route, Redirect } from 'react-router-dom'
// import HomePage from './pages/HomePage';
// import CatalogPage from './pages/CatalogPage';

const HomePage = lazy(() => import ('./pages/HomePage'))
const CatalogPage = lazy(() => import ('./pages/CatalogPage'))

const App = (props) => {
    return (
        <div className={css.app}>

            <Sidebar />
            <div className={css.mainBlock}>
                <Header />
                <Box>
                    <Switch>
                      <Suspense fallback={<div>Loading...</div>}>
                        <Route path="/catagories" component={HomePage} />
                        <Route path="/catalog" component={CatalogPage} />
                        {/* <Redirect to="/" /> */}
                        </Suspense>
                    </Switch>
                </Box>
            </div>

        </div>
    );
}

export default App;
