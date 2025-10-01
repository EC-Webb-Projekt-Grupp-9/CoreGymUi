import React, { useState } from "react";
import "./Register.css"; 
import { useNavigate } from "react-router-dom";
import { ADDRESS } from "../../assets/js/config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (!email.trim() || !password.trim()) {
      setMessage({ type: "danger", text: "Fyll i både e-post och lösenord." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${ADDRESS}/api/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
          rememberMe: remember, 
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Okänt fel");

      setMessage({ type: "success", text: "Inloggad!" });
      navigate("/"); 
    } catch (err) {
      setMessage({ type: "danger", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleSubmit} className="register-form" style={{ width: "100%", maxWidth: "400px" }}>

        <div className="mb-4 d-flex align-items-center gap-2">
          <span className="input-icon">
            <i className="bi bi-envelope-fill"></i>
          </span>
          <input
            type="email"
            className="form-control"
            placeholder="E-post"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4 d-flex align-items-center gap-2">
          <span className="input-icon">
            <i className="bi bi-lock-fill"></i>
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

       <div className="d-flex justify-content-center mb-3">
        <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id="rememberMe"
      checked={remember}
      onChange={(e) => setRemember(e.target.checked)}
    />
    <label className="form-check-label" htmlFor="rememberMe">
      Kom ihåg mig
    </label>
  </div>
</div>

        {message.text && (
          <div className={`alert alert-${message.type} mt-2`} role="alert">
            {message.text}
          </div>
        )}

        <p className="text-center mt-3">
          Har du inget konto?{" "}
          <a href="/register" className="text-decoration-none" style={{ color: "#0C3F3F" }}>
            Skapa konto
          </a>
        </p>

        <div className="d-flex flex-column align-items-center gap-2 mt-3">
          <button type="submit" className="btn-continue" disabled={loading}>
            {loading ? "Loggar in..." : "Logga in"}
          </button>

          <button type="button" className="btn-cancel" onClick={() => navigate("/")}>
            Avbryt
          </button>
        </div>
      </form>
    </div>
  );
}
