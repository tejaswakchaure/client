import React from 'react';
import UrlForm from './components/UrlForm';
import Analytics from './components/Analytics';

function App() {
  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <UrlForm />
      <Analytics />
    </div>
  );
}

export default App;

// import React from 'react';
// //  import { useState, useEffect } from 'react';
// // // import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// // import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Registration';
// import UrlForm from './components/UrlForm'; // Assuming this is your URL shortening form component

// function App() {
//   // Attempt to retrieve the token from localStorage upon app initialization
//   const [token, setToken] = useState(localStorage.getItem('token'));

//   useEffect(() => {
//     // Update localStorage whenever the token changes
//     if (token) {
//       localStorage.setItem('token', token);
//     } else {
//       localStorage.removeItem('token');
//     }
//   }, [token]);

//   const isAuthenticated = () => {
//     return !!token; // Convert token presence to a boolean value
//   };

//   return (
//     <Router>
//       <Switch>
//         <Route path="/login">
//           {isAuthenticated() ? <Redirect to="/urlform" /> : <Login setToken={setToken} />}
//         </Route>
//         <Route path="/register">
//           {isAuthenticated() ? <Redirect to="/urlform" /> : <Register />}
//         </Route>
//         <Route path="/urlform">
//           {isAuthenticated() ? <UrlForm /> : <Redirect to="/login" />}
//         </Route>
//         <Route exact path="/">
//           {isAuthenticated() ? <Redirect to="/urlform" /> : <Redirect to="/login" />}
//         </Route>
//         {/* You can add more routes here */}
//       </Switch>
//     </Router>
//   );
// }

// export default App;

