import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationComp from "./Components/NavigationComp";
import EntryComp from "./Components/EntryComp";
import UserTable from "./Components/UserTable";

const App = () => {



  return (
    <Router>
      <div className="container-fluid p-0 text-center">
        <NavigationComp/>
        <Routes>
          <Route path="/CIPL_CRUD/*" element={<EntryComp/>}/>
          <Route path="/CIPL_CRUD/user" element={<UserTable/>}/>
        </Routes>
      </div>
    </Router>
  )
}
export default App