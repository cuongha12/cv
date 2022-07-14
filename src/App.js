import {useLocation} from "react-router-dom";
import React, {useLayoutEffect} from "react";
import './App.css';
import Main from './Component/Main';
import Routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Main>
        <Wrapper>
            <Routes/>
        </Wrapper>
      </Main>
    </div>
  );
}
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}
export default App;
