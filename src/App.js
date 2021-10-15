import './App.css';
import {Route, Switch} from 'react-router-dom'
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import Layout from "./components/layout/Layout";


function App() {
    return <div>
        <Layout>
            {/* Switch is used to allow different components to overload the other i.e.
        switch switches between components. Else the router will append all components*/}
            <Switch>
                {/* Exact param is added since the '/' url will be matched against all
            routers. Therefore exact tells react to load slash as exactly '/'*/}
                <Route path='/' exact={true}>
                    <AllMeetupsPage></AllMeetupsPage>
                </Route>
                <Route path='/new-meetup'>
                    <NewMeetupPage></NewMeetupPage>
                </Route>
                <Route path='/favourites'>
                    <Favourites></Favourites>
                </Route>
            </Switch>
        </Layout>
    </div>
}

export default App;
