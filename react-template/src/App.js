import { GlobalStyle } from "./globalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer/FooterStyles";
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