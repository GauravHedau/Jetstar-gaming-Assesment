import React, { useState } from "react";
import "./clickCounter.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function ClickCounter() {
  const [count, setCount] = useState(0);
  const [isDark, setDark] = useState(false);

  function handleReset() {
    setCount(0);
  }
  function handleDarkMode() {
    setDark(!isDark);
    document.body.classList.toggle("dark-mode");
  }

  return (
    <div className="page-container">
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand mx-4 text-white fs-3 fw-bolder">
            Click On It
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="darkmode-icon" onClick={handleDarkMode}>
        {isDark ? (
          <WbSunnyIcon icon={WbSunnyIcon} />
        ) : (
          <DarkModeIcon icon={DarkModeIcon} />
        )}
      </div>

      <div className="container main ">
        <p>Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="btn btn-primary btnmain"
        >
          Click me
        </button>
        <button onClick={handleReset} className="btn btn-danger btnmain">
          Reset
        </button>
      </div>
      <footer className="bg-light">
        <div className="container">
          <p className="text-center">Copyright ©2022</p>
        </div>
      </footer>
    </div>
  );
}

export default ClickCounter;
