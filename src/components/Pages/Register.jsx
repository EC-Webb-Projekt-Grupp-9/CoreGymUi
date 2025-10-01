import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { ADDRESS } from "../../assets/js/config";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();



  const validate = () => {
    if (!firstName.trim()) return "Ange förnamn.";
    if (!lastName.trim()) return "Ange efternamn.";
    if (!email.trim()) return "Ange en e-postadress.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Ogiltig e-postadress.";
    if (password.length < 8) return "Lösenordet måste vara minst 8 tecken.";
    if (password !== confirm) return "Lösenorden matchar inte.";
    return null;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage({ type: "", text: "" });

  const error = validate();
  if (error) {
    setMessage({ type: "danger", text: error });
    return;
  }

  setLoading(true);
  try {
    const res = await fetch(`${ADDRESS}/api/account`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        confirmPassword: confirm, 
      }),
    });

    if (!res.ok){
      console.log("Registration failed");
    }
    
    setMessage({ type: "success", text: "Konto skapat! Du kan nu logga in." });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirm("");
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
    <i className="bi bi-person-fill"></i>
  </span>
  <input
    type="text"
    className="form-control"
    placeholder="Förnamn"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
  />
</div>

<div className="mb-4 d-flex align-items-center gap-2">
  <span className="input-icon">
    <i className="bi bi-person-fill"></i>
  </span>
  <input
    type="text"
    className="form-control"
    placeholder="Efternamn"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
  />
</div>

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

<div className="mb-3 d-flex align-items-center gap-2">
  <span className="input-icon">
    <i className="bi bi-lock-fill"></i>
  </span>
  <input
    type="password"
    className="form-control"
    placeholder="Bekräfta lösenord"
    value={confirm}
    onChange={(e) => setConfirm(e.target.value)}
  />
</div>
{message.text && (
    <div className={`alert alert-${message.type} mt-2`} role="alert">
      {message.text}
    </div>
  )}


        <p className="text-center mt-3">
         Redan har ett konto?{" "}
            <a href="/login" className="text-decoration-none" style={{ color: "#0C3F3F" }}>
          Logga in
           </a>
        </p>


    <div className="d-flex flex-column align-items-center gap-2 mt-3">
  <button
    type="submit"
    className="btn-continue"
    disabled={loading}
  >
    {loading ? "Skapar konto..." : "Fortsätt"}
  </button>

  <button
    type="button"
    className="btn-cancel"
    onClick={() => navigate("/")}
  >
    Avbryt
  </button>
</div>

      </form>
    </div>
  );
}
