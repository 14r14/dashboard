import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AuthContext from "../store/AuthContext";

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

    window.location = `${searchParams.get("durl").split("?")[0]}`;
  }, [searchParams, authCtx]);
  return <div>Logging you in...</div>;
}

export default SSOSuccess;
