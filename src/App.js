import React from "react";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

const App = () => {

  return (
    <>
      <section>
        <Modal />
        <Home />
        <Sidebar/>
      </section>
    </>
  );
};

export default App;
