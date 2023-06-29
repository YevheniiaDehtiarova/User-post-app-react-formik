import "./App.css";
import React from 'react'
import UserTable from "../user-table/UserTable";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <React.Fragment>
        <Routes>
          <Route
            exact
            path="/"
            element={<UserTable/>}  
          />
          {/* <Route exact path="/users/:userId" element={<SingleUserPage/>} />
          <Route exact path="/editUser/:userId" element={<EditUserForm/>} /> */}
        </Routes>
        </React.Fragment>
      </div>
    </Router>
  );
}

export default  App;
