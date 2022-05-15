import { GlobalStyle } from "./globalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero"; 

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero /> 
      <Footer />
    </>
  );
}

export default App;