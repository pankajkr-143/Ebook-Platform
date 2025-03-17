import { createContext, useContext, useState, useEffect, useCallback } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  const storeTokenInLS = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
    console.log('Token stored:', newToken);
  };
  

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/users/logout", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setToken('');
        setUser(null);
        localStorage.removeItem("token");
        console.log('User logged out successfully');
      } else {
        console.error('Failed to log out');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // JWT AUTHENTICATION --> to get currently loggedIN user data

  const userAuthentication = useCallback(async () => {
    if (!token) return;
    try{
      const response = await fetch("http://localhost:4000/api/users/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if(response.ok){
        const data = await response.json();
        console.log('Raw API response:', data);
        console.log('user data', data.fullname.firstname);
        console.log('userID=', data._id);
        setUser(data);
      }
    }catch(error){
      console.log("Error fetching user data")
    }
  }, [token]);

  useEffect(() => {
    userAuthentication();
  }, [token, userAuthentication]);
  
  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);


  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logout, user }}>
      {console.log('AuthProvider is rendering')}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return authContextValue;
};