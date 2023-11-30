import React from "react";
import "../assets/css/spinner.css";

export default function Loader() {
  return (
    <div className="flex justify-center mt-4 -mb-6 spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
  );
}