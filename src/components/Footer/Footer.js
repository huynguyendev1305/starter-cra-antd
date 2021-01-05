import React from "react";
import * as dayjs from "dayjs";

const Footer = () => {
  return (
    <div>
      <div>This is Footer @{dayjs().year()}</div>
    </div>
  );
};

export default Footer;
