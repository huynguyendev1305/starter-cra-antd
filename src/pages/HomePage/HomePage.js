import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <Link to="/second-page">go to 2nd-page</Link>
      <br></br>
      <Link to="/123123123">random page</Link>
      <h1>h1: Hello world</h1>
      <h2>h2: Hello world</h2>
      <h3>h3: Hello world</h3>
      <h4>h4: Hello world</h4>
      <h5>h5: Hello world</h5>
      <h6>h6: Hello world</h6>
      <p>p: Hello world</p>
      <blockquote>blockquote: Hello world</blockquote>
      <div className="caption_ts">caption_ts: Hello world</div>
      <div className="endnote_ts">endnote_ts: Hello world</div>
      <div className="footnote_ts">footnote_ts: Hello world</div>
      <div>div: Hello world</div>
      <code>code: Hello world</code>
      <hr></hr>
    </div>
  );
};

export default HomePage;
