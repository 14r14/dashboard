import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import LoadingSpinner from "./LoadingSpinner";

function SSOSuccess() {
  const [searchParams] = useSearchParams();

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const expirationTime = new Date(new Date().setHours(23, 59, 59, 999));
    authCtx.login(
      searchParams.get("token"),
      expirationTime.toISOString(),
      searchParams.get("role"),
      searchParams.get("fullName"),
      searchParams.get("since"),
      searchParams.get("repPts")
    );

    // window.location = `${searchParams.get("durl").split("?")[0]}`;
  }, [searchParams, authCtx]);
  return (
    <div className="absolute z-50 flex w-full h-screen justify-center items-center bg-[#FFDB58]">
      <LoadingSpinner textSize="text-xl" textWeight="font-bold" />
    </div>
  );
}

export default SSOSuccess;
