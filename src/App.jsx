import Routers from "./router";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import TranslateProvider from "./react-intl";

function App() {
  return (
    <>
      <TranslateProvider>
        {/* <Header /> */}
        <Routers />
        <Footer />
      </TranslateProvider>
    </>
  );
}

export default App;
