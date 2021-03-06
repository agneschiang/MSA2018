import * as React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Header } from './components/Header';
import News from './components/News';
import ThirdComponent from './components/ThirdComponent';
import './css/styles.css';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <BrowserRouter>
            <div>
                <Header />
                <main>
                    <Route exact={true} path="/" component={ThirdComponent} />
                    <Route path="/ThirdComponent" component={ThirdComponent} />
                    <Route path="/News" component = {News} />
                    <Redirect from='*' to='/' />
                </main>
            </div>
        </BrowserRouter>

    );
}