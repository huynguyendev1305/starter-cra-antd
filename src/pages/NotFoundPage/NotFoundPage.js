import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
      <Link to="/">Return HomePage</Link>
    </div>
  );
};

export default NotFoundPage;
