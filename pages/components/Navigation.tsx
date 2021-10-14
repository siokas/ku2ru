import React from "react";
import Theme from "./Theme";

export default function Navigation({ currentPage = "" }) {
  return (
    <nav id="header" className="w-full z-10 top-0">
      <div id="progress" className="h-1 z-20 top-0 bg-green-600"></div>
      {currentPage !== "home" ? (
        <a href="/" className="float-left ml-6 logo-font mt-2">
          <span className="flex flex-row items-center justify-center">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 62 62"
              height="12px"
              className="mr-2 fill-current"
            >
              <g>
                <path
                  d="M12.745,23.915c0.283-0.282,0.59-0.52,0.913-0.727L35.266,1.581c2.108-2.107,5.528-2.108,7.637,0.001
		c2.109,2.108,2.109,5.527,0,7.637L24.294,27.828l18.705,18.706c2.109,2.108,2.109,5.526,0,7.637
		c-1.055,1.056-2.438,1.582-3.818,1.582s-2.764-0.526-3.818-1.582L13.658,32.464c-0.323-0.207-0.632-0.445-0.913-0.727
		c-1.078-1.078-1.598-2.498-1.572-3.911C11.147,26.413,11.667,24.994,12.745,23.915z"
                />
              </g>
            </svg>
            BCK
          </span>
        </a>
      ) : (
        <></>
      )}
      <div className="float-right">
        <Theme />
      </div>
    </nav>
  );
}
