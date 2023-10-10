import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

async function checkIfAuthenticated() {
  try {
    const response = await fetch("http://localhost:3001/createaccount/verify");
    return response.status === 200;
  } catch (e) {
    if (e.response.status === 401) {
      return false;
    }
    throw e;
  }
}

export default function useIsAuthenticated() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("authenticatedUser"));
  const user_id = user.user_id

  useEffect(() => {
    async function init() {
      const isAuthenticated = await checkIfAuthenticated();
      !isAuthenticated && navigate(`/root/${user_id}`);
    }
    init();
  }, [navigate]);

  return {};
}
