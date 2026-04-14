import React from "react";
import { HashLoader } from "react-spinners";

export default function loading() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <HashLoader />
      </div>
    </>
  );
}
