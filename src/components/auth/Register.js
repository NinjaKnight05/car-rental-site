import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { app, db } from "../../Firebase";
// import { doc, setDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  // const [userType] = useState(2);
  const [status] = useState(true); 
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    try{
      await createUserWithEmailAndPassword(getAuth, email, password);
      const user = getAuth.currentuser;
      console.log("user created");
    }catch(error) {
      console.log(error.message);
    }
  };

  // const signUpGoogle = async () => {
  //   const provider = new GoogleAuthProvider();
  //   const auth = getAuth(app);
  //   try {
  //     const userCredentials = await signInWithPopup(auth, provider);
  //     const user = userCredentials.user;
  //     await setDoc(doc(db, "users", user.uid), {
  //       username: user.displayName || "",
  //       email: user.email || "",
  //       contact: "",
  //       address: "",
  //       userType: 2,
  //       user_id: user.uid,
  //       status: status,
  //       createdAt: Timestamp.now(),
  //     });
  //     toast.success("User registered successfully with Google");
  //     navigate("/");
  //   } catch (err) {
  //     toast.error(err.message);
  //   }
  // };

  return (
    <div className="main1">
      <div className="register">
        <form onSubmit={handleForm} method="post" className="form">
          <h1 className="h_style">Register Here</h1>
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Contact</label>
          <input
            type="number"
            className="form-control"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <label>City</label>
          <input
            type="text"
            className="form-control"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label>Address</label>
          <textarea
            className="form-control"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          <button type="submit">Register</button>
          <p>Register with Google</p>
          {/* <button
            type="button"
            className="google-reg-btn"
            onClick={signUpGoogle}
          >
          </button> */}
          <p>
            Already have an account?{" "}
            <span>
              <Link className="color" to="/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
