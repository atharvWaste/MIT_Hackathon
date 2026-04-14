import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignBox = () => {
  const [mode, setMode] = useState("signin");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (mode === "signup" && !formData.name.trim())
      newErrors.name = "Full name is required";

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";

    if (formData.password.length < 6)
      newErrors.password = "Minimum 6 characters";

    if (mode === "signup" && formData.password !== formData.confirm)
      newErrors.confirm = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);

    try {
      const endpoint =
        mode === "signin"
          ? "http://localhost:8000/api/auth/login"
          : "http://localhost:8000/api/auth/signin";

      // ✅ JSON Payload with all 4 values
      const payload = {
        name: formData.name || "",
        email: formData.email,
        password: formData.password,
        accessToken: localStorage.getItem("accessToken") || "",
      };

      const res = await axios.post(endpoint, payload, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      localStorage.setItem("accessToken", res.data.accessToken);
      navigate("/");
    } catch (err) {
      if (err.response) {
        setErrors({
          server: err.response.data?.message || "Something went wrong",
        });
      } else {
        setErrors({ server: "Cannot reach server. Please try again." });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setErrors({});
    setFormData({ name: "", email: "", password: "", confirm: "" });
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0f;
        }

        .auth-root {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 20% 20%, rgba(255,0,80,0.15), transparent),
                      radial-gradient(circle at 80% 80%, rgba(120,0,255,0.15), transparent);
        }

        .auth-card {
          width: 100%;
          max-width: 420px;
          padding: 40px;
          border-radius: 20px;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
        }

        .brand {
          font-size: 26px;
          font-weight: 800;
          color: white;
          margin-bottom: 6px;
        }

        .brand span {
          color: #ff2e63;
        }

        .sub {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 25px;
        }

        .tabs {
          display: flex;
          margin-bottom: 20px;
          gap: 10px;
        }

        .tab {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          background: rgba(255,255,255,0.05);
          color: white;
        }

        .tab.active {
          background: linear-gradient(135deg, #ff2e63, #ff6ec7);
        }

        .field {
          margin-bottom: 15px;
        }

        .input {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          color: white;
        }

        .input:focus {
          outline: none;
          border-color: #ff2e63;
          box-shadow: 0 0 10px rgba(255,46,99,0.4);
        }

        .password-box {
          position: relative;
        }

        .eye {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }

        .error {
          color: #ff6b6b;
          font-size: 12px;
        }

        .btn {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #ff2e63, #ff6ec7);
          color: white;
          font-weight: bold;
          cursor: pointer;
          margin-top: 10px;
        }

        .btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 25px rgba(255,46,99,0.5);
        }

        .footer {
          text-align: center;
          margin-top: 15px;
          font-size: 12px;
        }

        .footer a {
          color: #ff6ec7;
          cursor: pointer;
        }
      `}</style>

      <div className="auth-root">
        <div className="auth-card">
          <div className="brand">Game<span>Flix</span></div>
          <div className="sub">
            {mode === "signin"
              ? "Welcome back"
              : "Create your account"}
          </div>

          <div className="tabs">
            <button
              className={`tab ${mode === "signin" ? "active" : ""}`}
              onClick={() => switchMode("signin")}
            >
              Sign In
            </button>
            <button
              className={`tab ${mode === "signup" ? "active" : ""}`}
              onClick={() => switchMode("signup")}
            >
              Sign Up
            </button>
          </div>

          {mode === "signup" && (
            <div className="field">
              <input
                className="input"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
          )}

          <div className="field">
            <input
              className="input"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="field password-box">
            <input
              className="input"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <span className="eye" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁"}
            </span>
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          {mode === "signup" && (
            <div className="field">
              <input
                className="input"
                type="password"
                name="confirm"
                placeholder="Confirm Password"
                value={formData.confirm}
                onChange={handleChange}
              />
              {errors.confirm && <div className="error">{errors.confirm}</div>}
            </div>
          )}

          {errors.server && <div className="error">{errors.server}</div>}

          <button className="btn" onClick={handleSubmit} disabled={loading}>
            {loading ? "Loading..." : mode === "signin" ? "Sign In" : "Sign Up"}
          </button>

          <div className="footer">
            {mode === "signin" ? (
              <>
                Don’t have an account?{" "}
                <a onClick={() => switchMode("signup")}>Sign up</a>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <a onClick={() => switchMode("signin")}>Sign in</a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignBox;
