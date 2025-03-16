import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./store/auth";


const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  // For navigation
  const navigate = useNavigate();

  // Function to store token in local storage
  const { storeTokenInLS } = useAuth();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("login form", response);

      if (response.ok) {
        const res_data = await response.json();
        // alert("login successful");
        // storeToken in local storage
        storeTokenInLS(res_data.token,);

        setUser({
          email: "",
          password: "",
        });
        navigate("/");
        window.location.reload();

      } else {
        alert("invalid credentials ");
        console.log("invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div >
      <div >
        <h2 >
          Log In
        </h2>
        <form onSubmit={handleSubmit} >
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
          >
            Log In
          </button>
        </form>
        <p >
          New here?
          <Link to='/Signup' >Create new Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;