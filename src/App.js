import logo from "./logo.svg";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { createBrowserHistory } from "history";
import { UserTemplate } from "./template/UserTemplate/UserTemplate";
import Login from "./pages/Login/Login";
import ListCourse from "./pages/ListCourse/ListCourse";
import ListTutor from "./pages/ListTutor/ListTutor";
import Cource from "./pages/Cource/Cource";
import Tutor from "./pages/Tutor/Tutor";
import AdminCategory from "./pages/AdminCategory/AdminCategory";
import { AdminTemplate } from "./template/AdminTemplate/AdminTemplate";
import AdminSchool from "./pages/AdminSchool/AdminSchool";
import AdminCourse from "./pages/AdminCourse/AdminCourse";
import AdminTutor from "./pages/AdminTutor/AdminTutor";
import Register from "./pages/Register/Register";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/listcource" exact component={ListCourse} />
        <Route path="/listtutor" exact component={ListTutor} />
        <Route path="/cource/:id" exact component={Cource} />
        <Route path="/tutor" exact component={Tutor} />
        <AdminTemplate path="/admincategory" exact Component={AdminCategory} />
        <AdminTemplate path="/adminshool" exact Component={AdminSchool} />
        <AdminTemplate path="/adminsourse" exact Component={AdminCourse} />
        <AdminTemplate path="/admintutor" exact Component={AdminTutor} />
        <UserTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
