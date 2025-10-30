// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";

// function Signup() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [serverError, setServerError] = useState("");

//   // Handle form submission
//   const onSubmit = async (data) => {
//     setLoading(true);
//     setServerError("");

//     try {
//       const res = await fetch("http://localhost:3002/api/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         setServerError(result.message || "Signup failed");
//         setLoading(false);
//         return;
//       }

//       setLoading(false);
//       navigate("/login", { replace: true });
//     } catch (err) {
//       setLoading(false);
//       setServerError("Network error. Make sure backend is running.");
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div
//         className="card p-4 shadow border-0"
//         style={{
//           maxWidth: "420px",
//           width: "100%",
//           borderRadius: "16px",
//           background: "#ffffff",
//         }}
//       >
//         {/* Logo and Heading */}
//         <div className="text-center mb-4">
//           <img
//             src="media/Images/logo.svg"
//             alt="App Logo"
//             style={{
//               width: "50%",
//               height: "80px",
//               objectFit: "contain",
//               marginBottom: "10px",
//             }}
//           />
//           <h4 className="fw-bold mb-1">Create your account</h4>
//           <p className="text-muted small mb-0">
//             Enter details to create your account
//           </p>
//         </div>

//         {/* Server Error */}
//         {serverError && (
//           <div className="alert alert-danger p-2 mb-3" role="alert">
//             {serverError}
//           </div>
//         )}

//         {/* Signup Form */}
//         <form onSubmit={handleSubmit(onSubmit)} noValidate>
//           {/* Full Name */}
//           <div className="mb-3">
//             <label className="form-label fw-semibold">Full name</label>
//             <input
//               type="text"
//               className={`form-control ${errors.name ? "is-invalid" : ""}`}
//               placeholder="Your full name"
//               {...register("name", {
//                 required: "Name is required",
//                 minLength: { value: 2, message: "Too short" },
//               })}
//             />
//             <div className="invalid-feedback">{errors.name?.message}</div>
//           </div>

//           {/* Email */}
//           <div className="mb-3">
//             <label className="form-label fw-semibold">Email</label>
//             <input
//               type="email"
//               className={`form-control ${errors.email ? "is-invalid" : ""}`}
//               placeholder="name@example.com"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                   message: "Invalid email",
//                 },
//               })}
//             />
//             <div className="invalid-feedback">{errors.email?.message}</div>
//           </div>

//           {/* Password */}
//           <div className="mb-3">
//             <label className="form-label fw-semibold">Password</label>
//             <input
//               type="password"
//               className={`form-control ${errors.password ? "is-invalid" : ""}`}
//               placeholder="At least 6 characters"
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: { value: 6, message: "Minimum 6 characters" },
//               })}
//             />
//             <div className="invalid-feedback">{errors.password?.message}</div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="btn btn-primary w-100 rounded-3 fw-semibold"
//             disabled={loading}
//           >
//             {loading ? "Signing up..." : "Sign Up"}
//           </button>
//         </form>

//         {/* Footer */}
//         <div className="text-center mt-3">
//           <small>
//             Already have an account?{" "}
//             <Link to="/login" className="text-decoration-none fw-semibold">
//               Login
//             </Link>
//           </small>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const PORT = process.env.PORT || 3002;

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError("");
    setSuccessMsg("");

    try {
      const res = await fetch(`http://localhost:${PORT}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setServerError(result.message || "Signup failed");
        setLoading(false);
        return;
      }

      setSuccessMsg("🎉 Account created successfully!");
      setLoading(false);

      // redirect after 1.5 seconds
      setTimeout(() => {
        navigate("/home", { replace: true }); // ✅ correct route-based navigation
      }, 1500);
    } catch (err) {
      setLoading(false);
      setServerError("⚠️ Network error. Please check backend connection.");
    }
  };

  return (
    <div className="container-fluid bg-light d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg border-0 p-4"
        style={{
          width: "420px",
          borderRadius: "16px",
          background: "#ffffff",
        }}
      >
        {/* Header */}
        <div className="text-center mb-3">
          <img
            src="media/Images/logo.svg"
            alt="Logo"
            style={{ width: "100px", marginBottom: "10px" }}
          />
          <h4 className="fw-bold mb-1">Create your account</h4>
          <p className="text-muted small">Enter details to register</p>
        </div>

        {/* Success / Error */}
        {successMsg && (
          <div className="alert alert-success text-center py-2">
            {successMsg}
          </div>
        )}
        {serverError && (
          <div className="alert alert-danger text-center py-2">
            {serverError}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Your name"
              {...register("name", { required: "Name is required" })}
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </div>

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
                  message: "Invalid email address",
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
              placeholder="At least 6 characters"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-primary w-100 fw-semibold"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Already have an account?{" "}
            <Link to="/login" className="fw-semibold text-decoration-none">
              Login
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Signup;
