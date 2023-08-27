import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  role: "",
  fullName: "",
  createdAt: "",
  reputationPoints: "",
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");
  // const storedAccountType = localStorage.getItem("accountType");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.clear();
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

const retrieveStoredUsername = () => {
  const storedUsername = localStorage.getItem("fullName");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.clear();
    return null;
  }

  return storedUsername;
};

const retrieveStoredLoggedIn = () => {
  const storedLoggedIn = localStorage.getItem("loggedIn");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.clear();
    return false;
  }
  return storedLoggedIn;
};

const retrieveStoredReputationPoints = () => {
  const storedRepPts = localStorage.getItem("repPoints");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.clear();
    return false;
  }
  return storedRepPts;
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  const usernameData = retrieveStoredUsername();
  const loggedInData = retrieveStoredLoggedIn();
  const repPtsData = retrieveStoredReputationPoints();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  let initialUsername;
  let loggedIn;
  if (usernameData) {
    initialUsername = usernameData;
  }

  if (loggedInData) {
    loggedIn = loggedInData;
  }

  let initialRepPts;
  if (repPtsData) {
    initialRepPts = repPtsData;
  }

  const [username, setUsername] = useState(initialUsername);
  const [isLoggedIn, setLoggedIn] = useState(loggedIn);
  const [reputationPoints, setReputationPoints] = useState(initialRepPts);

  const logoutHandler = useCallback(() => {
    setToken(null);
    setLoggedIn(false);
    setUsername(null);
    setReputationPoints(null);
    localStorage.clear();

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (
    token,
    expirationTime,
    role,
    usernameParam,
    createdAt,
    repPoints
  ) => {
    setToken(token);
    setLoggedIn(true);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("role", role);
    localStorage.setItem("fullName", usernameParam);
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("createdAt", createdAt);
    localStorage.setItem("repPoints", repPoints);
    setUsername(usernameParam);
    setReputationPoints(repPoints);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  const updateUsername = (usernameParam) => {
    setUsername(usernameParam);
    localStorage.setItem("fullName", usernameParam);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    updateUsername: updateUsername,
    login: loginHandler,
    logout: logoutHandler,
    role: localStorage.getItem("role"),
    username: username,
    reputationPoints: reputationPoints,
    createdAt: localStorage.getItem("createdAt"),
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
