import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 border-t border-gray-400">
      <div className="flex flex-row items-center justify-center w-full mb-4">
        <a href="/about" className="font-bold mr-4">
          About
        </a>
        <a href="/help" className="font-bold mr-4">
          Help
        </a>
        <a href="/terms" className="font-bold mr-4">
          Terms
        </a>
      </div>
      <div>
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-green-600 mr-2">Powered by</span>
          <span className="logo-font">
            KU<span>2</span>RU
          </span>
        </a>
      </div>
    </footer>
  );
}
