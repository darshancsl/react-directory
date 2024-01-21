import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import { projectList } from "../Utils/projectList";
import { createElement, lazy, Suspense } from "react";

const importComponent = (path) =>
  lazy(() => import(`../Projects/TickTacToe/${path}`));

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
          {projectList?.map(({ id, path, component }) => {
            return (
              <Route
                key={id}
                path={`projects/${path}`}
                element={
                  <Suspense fallback={<h1>Loading...</h1>}>
                    {createElement(importComponent(component))}
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
