import React, { useState, useEffect } from "react";
import { Switch } from "antd";
import useDarkMode from "use-dark-mode";
import styled from "styled-components";

const SwitchStyled = styled(Switch)`
  background-color: var(--body-background);
  box-shadow: ${(props) =>
    props.isdarkmode
      ? " 0 0 0 2px rgba(24, 144, 255, 0.2)"
      : "0 0 0 2px rgba(0,0,0,0.2)"};

  .ant-switch-handle::before {
    background: ${(props) =>
      props.isdarkmode
        ? "linear-gradient(40deg, #8983f7, #a3dafb 70%)"
        : "linear-gradient(40deg, #ff0080, #ff8c00 70%)"};
  }
  .ant-switch-inner {
    color: var(--text-color);
    font-size: 16px;
  }
`;

const DarkModeSwitcher = () => {
  const [isDarkMode, setDarkMode] = useState(null);
  const darkMode = useDarkMode(false);
  const handleChange = () => {
    darkMode.toggle();
    setDarkMode(!isDarkMode);
  };
  useEffect(() => {
    console.log(darkMode.value);
    setDarkMode(darkMode.value);
  }, [darkMode.value]);

  return (
    <div>
      <SwitchStyled
        checkedChildren="Dark"
        unCheckedChildren="Light"
        onChange={handleChange}
        checked={darkMode.value}
        isdarkmode={isDarkMode ? 1 : 0}
      />
    </div>
  );
};

export default DarkModeSwitcher;
