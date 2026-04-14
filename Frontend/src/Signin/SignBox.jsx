import { useState } from "react";
import axios from "axios";

const SignBox = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (formData.password.length < 6) newErrors.password = "Min 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const submitForm = async () => {
  try {
    // Change this line to point to port 8000
    const res = await axios.post(
      "http://localhost:8000/api/auth/login", 
      formData,
      { withCredentials: true }
    );

    console.log("Success:", res.data);
    localStorage.setItem("accessToken", res.data.accessToken);
    setSuccess(true);

  } catch (err) {
    if (err.response) {
      // Now this will catch 401 (Unauthorized) or 500 from your ACTUAL backend
      setErrors({ server: err.response.data?.message || "Login failed" });
    } else {
      setErrors({ server: "Cannot reach backend on port 8000" });
    }
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      submitForm();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error when user starts typing again
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "2px solid #84b7ff",
    borderRadius: "30px",
    background: "#cae0ff",
    marginBottom: "6px",
    color: "#000"
  };

  return (
    <section style={{ width: "100vw", height: "100vh", background: "#111111", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
      <div>
        {success ? (
          <p style={{ color: "#84ffb7", fontSize: "20px" }}>✓ Logged in successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "#30313198", padding: "50px", borderRadius: "25px", minWidth: "300px" }}>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle} />
            {errors.email && <p style={{ color: "#ff8484", fontSize: "12px", marginBottom: "12px" }}>{errors.email}</p>}

            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} style={inputStyle} />
            {errors.password && <p style={{ color: "#ff8484", fontSize: "12px", marginBottom: "12px" }}>{errors.password}</p>}

            {errors.server && <p style={{ color: "#ff8484", fontSize: "14px", fontWeight: "bold", marginBottom: "12px" }}>{errors.server}</p>}

            <button type="submit" style={{ padding: "10px 30px", border: "none", background: "#55ff88", borderRadius: "30px", color: "#484848", cursor: "pointer", marginTop: "8px", fontWeight: "bold" }}>
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default SignBox;