import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
 const [username, setUsername] = React.useState("");
 const [password, setPassword] = React.useState("");
 const [email, setEmail] = React.useState("");
 const [isLoading, setIsLoading] = React.useState(false);
 const [confirmPassword, setConfirmPassword] = React.useState("");

 const navigate = useNavigate();

 const handleSignup = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  const body = {
   username,
   password,
   email,
   confirmPassword,
  };
  try {
   const { data } = await axios.post("http://localhost:3002/register", body);
   console.log(data.token);

   let id = setTimeout(() => {
    navigate("/login");
   }, 3000);

   alert("Signup successful!.. Redirecting to login page... in 3 seconds");

   clearTimeout(id);

   navigate("/login");
  } catch (error) {
   let message = error?.response?.data?.message || error?.response?.data?.error || error.message;
   message = "Signup failed..." + message;
   alert(message);
  } finally {
   setIsLoading(false);
  }
 };
 console.log(username, email, password, confirmPassword);

 return (
  <div className='container '>
   <div className='row d-flex'>
    <div className='col-6 my-5'>
     <img src='media/images/landing.png' style={{ width: "40rem" }} alt='landing img' />
    </div>
    <div className='col-6 text-center '>
     <div class='container mt-5 '>
      <h1 class='mb-2 '>Signup now</h1>
      <p className='text-muted'>signup to continue</p>
      <form onSubmit={handleSignup}>
    <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">User Name</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control" id="staticEmail" value={username} onChange={(e) => setUsername(e.target.value)} />
    </div>
  </div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control"  value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input  type="password" class="form-control" id="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="confirmPassword" class="col-sm-2 col-form-label">Confirm Password</label>
    <div class="col-sm-10">
      <input  type="password" class="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
    </div>
  </div>
       <button type='submit' class='btn btn-primary' disabled={isLoading}>
        Signup now
       </button>

       <p>
        Already have an account? <Link to='/login'>Login</Link>
       </p>
      </form>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Signup;
