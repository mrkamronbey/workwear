import "./style-app";
import RouterComponent from "./router";
import { GlobalStyle } from "./style-app";
import Header from './components/header/index'
import Footer from "./components/footer/index.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RouterComponent />
      <Footer />
    </>
  );
}

export default App;
