// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";

// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [serverError, setServerError] = useState("");

//   const onSubmit = async (data) => {
//     setLoading(true);
//     setServerError("");

//     try {
//       const res = await fetch("http://localhost:3002/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         setServerError(result.message || "Login failed");
//         setLoading(false);
//         return;
//       }

//       // demo: store token in localStorage (in real app, be careful)
//       localStorage.setItem("token", result.token || "demo-token");
//       setLoading(false);
//       // navigate to protected page — for now redirect to signup
//       navigate("/signup", { replace: true });
//     } catch (err) {
//       setLoading(false);
//       setServerError("Network error. Make sure backend is running.");
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div
//         className="card p-4 shadow-sm border-0"
//         style={{ maxWidth: "420px", width: "100%", borderRadius: "12px" }}
//       >
//         <div className="text-center mb-3">
//           <img
//             src="media/Images/logo.svg"
//             alt="App Logo"
//             style={{
//               width: "50%",
//               height: "80px",
//               objectFit: "contain",
//               marginBottom: "5px",
//             }}
//           />
//           <h4>Login</h4>
//           <p className="text-muted small">Sign in to your account</p>
//         </div>

//         {serverError && (
//           <div className="alert alert-danger p-2">{serverError}</div>
//         )}

//         <form onSubmit={handleSubmit(onSubmit)} noValidate>
//           <div className="mb-3">
//             <label className="form-label">Email</label>
//             <input
//               type="email"
//               className={`form-control ${errors.email ? "is-invalid" : ""}`}
//               placeholder="name@example.com"
//               {...register("email", { required: "Email is required" })}
//             />
//             <div className="invalid-feedback">{errors.email?.message}</div>
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className={`form-control ${errors.password ? "is-invalid" : ""}`}
//               placeholder="Your password"
//               {...register("password", { required: "Password is required" })}
//             />
//             <div className="invalid-feedback">{errors.password?.message}</div>
//           </div>

//           <button
//             type="submit"
//             className="btn btn-primary w-100 rounded-3"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <div className="text-center mt-3">
//           <small>
//             Don't have an account? <Link to="/signup">Sign up</Link>
//           </small>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const PORT = process.env.PORT || 3002;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await fetch(`http://localhost:${PORT}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setErrorMsg(result.message || "Login failed");
        setLoading(false);
        return;
      }

      setSuccessMsg("Login successful! Redirecting...");
      setLoading(false);

      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 1500);
    } catch (err) {
      setErrorMsg("Network error. Please check backend connection.");
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid bg-light d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg border-0 p-4"
        style={{ width: "420px", borderRadius: "16px", background: "#fff" }}
      >
        <div className="text-center mb-3">
          <img
            src="media/Images/logo.svg"
            alt="Logo"
            style={{ width: "50%", marginBottom: "10px" }}
          />
          <h4 className="fw-bold mb-1">Welcome Back!</h4>
          <p className="text-muted small">Login to your account</p>
        </div>

        {errorMsg && (
          <div className="alert alert-danger text-center py-2">{errorMsg}</div>
        )}
        {successMsg && (
          <div className="alert alert-success text-center py-2">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email",
                },
              })}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Your password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 fw-semibold"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Don’t have an account?{" "}
            <Link to="/signup" className="fw-semibold text-decoration-none">
              Sign up
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;
