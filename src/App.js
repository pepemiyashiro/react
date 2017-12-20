import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Home = () => <div><h1>Home</h1></div>

const About = () => <div><h1>About</h1></div>

const Contact = ({ routes }) => (
  <div>
    <h1>Contact</h1>
    <ul>
      <li><Link to="/contact/email">Email</Link></li>
      <li><Link to="/contact/phone">Phone</Link></li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)

// Contact sub routes
const ContactEmail = () => <div><h2>me@gmail.com</h2></div>
const ContactPhone = () => <div><h2>555-555-5555</h2></div>

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  { path: '/about',
    component: About
  },
  { path: '/contact',
    component: Contact,
    routes: [
      { path: '/contact/email',
        component: ContactEmail
      },
      { path: '/contact/phone',
        component: ContactPhone
      }
    ]
  }
]

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
    
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}
        </div>
      </Router>
    )
  }
}

export default App;