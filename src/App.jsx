import React, { useContext } from "react"
import { RoutesMain as Routes} from "./routes";
import { ToastContainer } from 'react-toastify';

import GlobalStyles from "./styles/globalStyles";
import 'react-toastify/dist/ReactToastify.min.css';


function App() {

  return (
    <>
      <GlobalStyles/>
      <Routes/>
      <ToastContainer/>
    </>
  )
}

export default App
