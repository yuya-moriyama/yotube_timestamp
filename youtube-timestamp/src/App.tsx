import React from "react";
import {Routes, Route} from "react-router-dom";

import { Top } from "./components/page/Top";
import { Edit } from "./components/page/Edit";
import { NotFound } from "./components/page/NotFound";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Top />}/>
        <Route path="/edit" element={<Edit youtube_url="hoge"/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
};

export default App;