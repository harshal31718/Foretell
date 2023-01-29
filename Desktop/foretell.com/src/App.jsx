import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home';
import Market from './Pages/Market';
import Stock from './Pages/Stock';
import Contact from './Pages/Contact';

const App = () => {

  const theme = {
    colors: {
      heading: "rgb(0 0 0)",
      text: "rgb(0 0 0)",
      white: "#fff",
      black: "#000",
      helper: "#8490ff",
      header_bg: "#0a1435",
      body_bg: "rgb(50 50 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border:"",
      hr:"",
      gradient:"",
      shadow:"",
      shadow_support:""
    },
    media: {
      mobile: "768px",
      tab: "998px",
    }

  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market" element={<Market/>} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>

  )
}

export default App