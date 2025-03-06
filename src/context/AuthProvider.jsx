/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://sajag-patel-server-six.vercel.app/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .catch(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        })
        .finally(() => {
          setLoading(false); // Stop loading after fetching user data
        });
    } else {
      setLoading(false); // No token, stop loading
    }
  }, []);

  const login = async (credentials) => {
    setLoading(true); // ✅ লোডিং শুরু

    try {
      const { data } = await axios.post(
        "https://sajag-patel-server-six.vercel.app/api/auth/login",
        credentials
      );
      localStorage.setItem("token", data.token);
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      return data;
    } catch (error) {
      console.error(error.response?.data?.message || "Login failed");
      throw error;
    } finally {
      setLoading(false); // ✅ লোডিং শেষ
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ loading, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
