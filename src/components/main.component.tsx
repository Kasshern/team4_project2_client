import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBarComponent } from './navbar.component';
import { LoginComponent } from './Pages/login.component/login.component';
import { MyEventComponent } from './Pages/my-event.component';
import { EventComponent } from './Pages/event.component';
import { JoinEventComponent } from './Pages/join-event.component';
import { SearchEventComponent } from './Pages/search-event.component';
import { SignUpComponent } from './Pages/signup.component/signup.component';


export const MainComponent: React.FC = () => { 
    return( <div id="main-component">
        <BrowserRouter>
            <NavBarComponent></NavBarComponent>
            <main>
                <Switch>
                    <Route path="/login">
                        <LoginComponent />
                    </Route>
                    <Route path ="/signup">
                        <SignUpComponent />
                    </Route>
                    <Route  path="/myevent">
                        <MyEventComponent />
                    </Route>
                    <Route  path="/event">
                        <EventComponent />
                    </Route>
                    <Route  path="/joinevent">
                        <JoinEventComponent />
                    </Route>
                    <Route  path="/searchevent">
                        <SearchEventComponent />
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    </div>

    )};
