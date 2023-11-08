import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Footer from "./components/footer/footer";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
        border: "0",
        overflow: "hidden",
        height: "100%",
        width: "100%",
        margin: "0",
        padding: "0"
      }}
    >
      <Navbar/>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
