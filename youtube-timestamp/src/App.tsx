import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Top } from "./components/page/Top";
import { Edit } from "./components/page/Edit";
import { NotFound } from "./components/page/NotFound";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Top />}/>
        <Route path="/edit" element={<Edit />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
};

export default App;