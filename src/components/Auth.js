// temporary

import React from "react";

function Auth() {
  return (
    <div className="flex flex-col items-center text-xl w-full">
      <a
        href={`${
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://authenticator-frontend.vercel.app"
        }/?durl=${window.location.href}`}
      >
        Authenticate Me
      </a>
    </div>
  );
}

export default Auth;
