import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import HomePage from "./pages/HomePage/HomePage";
import SecondPage from "./pages/SecondPage/SecondPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import DarkModeSwitcher from "./components/DarkModeSwitcher/DarkModeSwitcher";
import { pageVariants, pageTransition } from "./animations/pageAnimated";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <header className="Header">
        <Header></Header>
        <DarkModeSwitcher></DarkModeSwitcher>
      </header>
      <main className="Main">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <motion.div
                exit="exit"
                animate="animate"
                initial="initial"
                variants={pageVariants}
                transition={pageTransition}
              >
                <HomePage />
              </motion.div>
            </Route>
            <Route exact path="/second-page">
              <motion.div
                exit="exit"
                animate="animate"
                initial="initial"
                variants={pageVariants}
                transition={pageTransition}
              >
                <SecondPage />
              </motion.div>
            </Route>
            <Route>
              <motion.div
                exit="exit"
                animate="animate"
                initial="initial"
                variants={pageVariants}
                transition={pageTransition}
              >
                <NotFoundPage></NotFoundPage>
              </motion.div>
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
      <footer className="Footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
