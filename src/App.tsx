import { RecoilRoot } from "recoil";
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Top } from "./components/page/Top";
import { Edit } from "./components/page/Edit";
import { NotFound } from "./components/page/NotFound";

const App = () => {
  return (
    <div className="App">
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Top />}/>
          <Route path="/edit" element={<Edit />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </RecoilRoot>
    </div>
  );
};

export default App;