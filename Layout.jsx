import React from "react";
import "./app.css"

export default ({children}) => {
  return (
    <>
      <img style={{position: "fixed", top: 50, left: 50}} height="50" src="https://app.polly.ai/msteams/content/tab/static/media/polly-tab-logo-lockup.7683a09e.svg" alt=""/>
      {children && children}
      </>
  );
}