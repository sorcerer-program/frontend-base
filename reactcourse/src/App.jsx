import "./App.css";
// import Todo from "./components/Todo.jsx"
// import TodoTitle from "./components/TodoTitle.jsx"
// import Add from "./components/Add.jsx";
// import {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Nav from "./components/Nav.jsx";
import Users from "./components/Users.jsx";


function App() {
  // const [isAdd, setAddOpen] = useState(false)
  // function toggleAddOpen() {
  //     setAddOpen(!isAdd);
  // }
  // function confirmAdd() {
  //     setAddOpen(false)
  // }
  // function cancelAdd() {
  //     setAddOpen(false)
  // }
  // useEffect(() => {}, [])
  // it's running as soon as our component first renders
  // a very common use case for this userEffect hook is to fetch some data as soon ase page first loads
  return (
    <>
      {/*<div className="bodyCenter">*/}
      {/*    <div className="header">*/}
      {/*        <TodoTitle />*/}
      {/*        <button onClick={toggleAddOpen}>Add</button>*/}
      {/*        {isAdd && <Add confirmFunc={confirmAdd} cancelFunc={cancelAdd}/>}*/}
      {/*    </div>*/}
      {/*    <Todo*/}
      {/*        text="Learn React"*/}
      {/*        description="understand and take notes"*/}
      {/*    />*/}
      {/*    <Todo*/}
      {/*        text="Finish FrontEnd Course"*/}
      {/*        description="how hao to write frontend"*/}
      {/*    />*/}
      {/*    <Todo*/}
      {/*        text="Write a Web By Myself"*/}
      {/*        description="aplly frontend in practice"*/}
      {/*    />*/}
      {/*    /!*<Popup notice="Are you sure?" />*!/*/}
      {/*</div>*/}
      <Router>
        {/*<Nav />*/}
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about/"} element={<About />} />
          <Route path={"/contact/"} element={<Contact />} />
          <Route path={"/users/:id"} element={<Users />} />
        </Routes>
        <div className={"navigation-bar"}></div>
      </Router>
    </>
  );
}

export default App;
