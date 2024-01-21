import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";

function App() {
  return (
    <main className='main'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
