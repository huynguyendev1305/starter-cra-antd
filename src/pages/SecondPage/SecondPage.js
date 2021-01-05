import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggeredList } from "../../animations/itemAnimated";

const SecondPage = () => {
  const [items, setItem] = useState(new Array(5).fill(""));
  return (
    <div className="container">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <button onClick={() => setItem([" ", ...items])}> Add Item </button>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggeredList.container}
      >
        {items.map((_, index) => {
          return (
            <motion.div key={index} variants={staggeredList.item}>
              Hello World!
            </motion.div>
          );
        })}
      </motion.div>

      <hr></hr>
      <Link to="/">Go back to the homepage</Link>
      <br></br>
      <Link to="/123123123">random page</Link>
    </div>
  );
};

export default SecondPage;
