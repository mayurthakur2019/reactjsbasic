import logo from "./logo.svg";
import "./App.css";
import Counter from "./ClassComponentExample/Counter";
import ToggleBtn from "./ClassComponentExample/ToggleButton";
import ToggleBtn2 from "./ClassComponentExample/ToggleBtn2";
import Tab from "./ClassComponentExample/Tab";
import Modal from "./ClassComponentExample/Modal";
import Todolist from "./ClassComponentExample/Todolist";
import FromHandler from "./ClassComponentExample/FormHandling";
import FormHandler2 from "./ClassComponentExample/FromHandling2";
import MountingPhaseBasic from "./LifeCycleMethodsExample/MountingPhaseBasic";
import MountingPhaseCompleteExample from "./LifeCycleMethodsExample/MountingPhaseCompleteExample";
import MountingUpdatingExample from "./LifeCycleMethodsExample/MountingUpdatingExample";
import ParentComponet from "./passingMethodasProps/ParentComponet";
import InlineStyle from "./StyleInReact/InlineStyle";
import CssStyleExternal from "./StyleInReact/CssStyleExternal";
import UseStWithObj from "./FunctionalComponentExample/UseStWithObj";
import UseStWithAry from "./FunctionalComponentExample/UseStWithAry";
import AComponet from "./FunctionalComponentExample/AComponet";
import React, { createContext, useState, Suspense, lazy } from "react";
import ControlledComponentForm from "./ReactForms/ControlledComponentForm";
import ControlledComponentFormFun from "./ReactForms/ControlledComponentFormFun";
import MultipleInputClassComp from "./ReactForms/MultipleInputClassComp";
import MultipleInputfunctionComp from "./ReactForms/MultipleInputfunctionComp";
import RefsExple1 from "./ReactRefs/RefsExple1";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./ReactRouter/Home";
import About from "./ReactRouter/About";
import Contact from "./ReactRouter/Contact";
import Navbar from "./ReactRouter/Navbar";
import PageNotFound from "./ReactRouter/PageNotFound";
import Products from "./ReactRouter/Products";
import Shirts from "./ReactRouter/Shirts";
import Jeans from "./ReactRouter/Jeans";
import Tshirts from "./ReactRouter/Tshirts";
import Users from "./ReactRouter/Users";
import UsersDetails from "./ReactRouter/UsersDetails";
import Search from "./ReactRouter/Search";
//import FormikYupForm from "./FormValidation/FormikYupForm";
import Placeholder from "./LazyLoading/Placeholder";
import FetchApiDemo from "./FetchApi/FetchApiDemo";
import GetAxios from "./Axios/GetAxios";
import PostAxios from "./Axios/PostAxios";
import List from "./CRUDApp/List";
import Create from "./CRUDApp/Create";
import Edit from "./CRUDApp/Edit";
import Redusers from "./Redusers/Redusers";
// Lazy load the component
const LazyComponent = lazy(() => import("./FormValidation/FormikYupForm"));

export const NameContext = createContext();

function App() {
  const [name, setName] = useState("Raj");
  const navigate = useNavigate();
  // const NavigatetoAbout = () => {
  //   navigate("/about");
  // };
  // const Navigateto = (url) => {
  //   navigate(url);
  // };
  const NavigatetoWhere = () => {
    const name = "Max";
    {
      name === "Max1" ? navigate("/about") : navigate("/contact");
    }
  };
  return (
    <div>
      {/* <Routes>
          <Route path="/" element={<List />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
    </Routes> */}

      {/* React router code */}
      <>
        {/* <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Products />}>
            <Route index element={<Shirts />}></Route>

            <Route path="shirts" element={<Shirts />}>
              <Route path="tshirts" element={<Tshirts />} />
            </Route>

            <Route path="jeans" element={<Jeans />} />
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UsersDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes> */}
        {/* <button onClick={NavigatetoAbout}>About</button>
        <button onClick={() => navigate("/contact")}>Contact</button> */}
        {/* <button onClick={() => Navigateto("/about")}>About</button>
        <button onClick={() => Navigateto("/contact")}>Contact</button> */}

        {/* <button onClick={() => navigate(-1)}>go Back</button> */}
      </>

      {/* <h4>
        Use of state in class component
        <br />
        1.Managing Form Data: or form FormHandling inputs
        <br />
        2.Toggling UI Elements:
        <br />
        3.conditional rendering-Conditional Styling,Rendering Lists
        Conditionally,Displaying Different Components Based on State:
        <br />
      </h4>
      <hr />
      <Counter />
      <hr />
      <ToggleBtn />
      <hr />
      <ToggleBtn2 />

      <hr />
      <Tab />

      <hr />
      <Modal />

      <hr />
      <Todolist />
      <hr />
      <FromHandler />
      <hr />

      <FormHandler2 /> */}
      {/* <MountingPhaseBasic  city="indore"/> */}
      {/* <MountingPhaseCompleteExample /> */}
      {/* <MountingUpdatingExample /> */}
      {/* <ParentComponet /> */}
      {/* <InlineStyle/> */}
      {/* <CssStyleExternal/> */}
      {/* <UseStWithAry /> */}
      {/* <NameContext.Provider value={name}>
        <AComponet />
      </NameContext.Provider> */}
      {/* <ControlledComponentForm/> */}
      {/* <ControlledComponentFormFun/> */}
      {/* <MultipleInputClassComp/>
      <MultipleInputfunctionComp/> */}
      {/* <RefsExple1/> */}

      {/* <FormikYupForm/> */}
      {/* <Suspense fallback={<Placeholder/>}>
        <LazyComponent />
      </Suspense> */}

      {/* <FetchApiDemo /> */}
      {/* <GetAxios/> */}
      {/* <PostAxios/> */}
      {/* <List/> */}
      <Redusers />
    </div>
  );
}

export default App;
