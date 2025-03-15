import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./store/auth";

const Signup = () => {
  const [user, setUser] = useState({
    fullname:{
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
    confirmPassword: "",
  });

  // For navigation
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to store token in local storage
  const  { storeTokenInLS }  = useAuth();

  // State for error message
  const [error, setError] = useState("");

  // handling the form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstname" || name === "lastname") {
      setUser((prevState) => ({
        ...prevState,
        fullname: {
          ...prevState.fullname,
          [name]: value,
        },
      }));
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  // handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
   
    // Check if passwords match
    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match");
      setIsSubmitting(false); // Reset submitting state
      return;
    }
    
    try {
      const response = await fetch(`http://localhost:4000/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      // console.log("Response status:", response.status);
      // console.log("Response ok:", response.ok);

      if (response.ok) {
        const res_data = await response.json();
        // console.log("res from server", res_data);

        // storeToken in local storage
        storeTokenInLS(res_data.token);
        
        setUser({
          fullname:{
            firstname: "",
            lastname: "",
          },
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/");
        window.location.reload();
      } else {
        const errorData = await response.json().catch(err => {
          // console.error("Error parsing JSON:", err);
          setError("An error occurred during signup");
        });
        // console.log("Error response from server:", errorData);
        setError(errorData.message || "An error occurred during signup");
      }
    } catch (err) {
      // console.error("Fetch error:", err);
      setError("An error occurred during signup");
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div>
      <div>
        <h2>
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            name="firstname"
            placeholder="user first name"
            value={user.firstname}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="lastname"
            placeholder="user last name"
            value={user.lastname}
            onChange={handleChange}
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />

          {/* Password Input */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              onChange={handleChange}
              required
            />
            {error && (
              <p >{error}</p> // Display error message
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
          >
            Sign Up
          </button>
          <p >
            Already have an account?
            <Link to='/Login'>Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;