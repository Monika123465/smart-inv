import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Login() {
 const [username, setUsername] = React.useState("");
 const [password, setPassword] = React.useState("");
 const [isLoading, setIsLoading] = React.useState(false);

 const handleLogin = async (e) => {
  e.preventDefault();

  setIsLoading(true);

  const body = {
   username,
   password,
  };

  try {
   const { data } = await axios.post("http://localhost:3002/login", body);
   alert("Login successful!.. Redirecting to dashboard");
   window.location.href = "http://localhost:3000/dashboard?token=" + data.token;
  } catch (error) {
   let message = error?.response?.data?.message || error?.response?.data?.error || error.message;
   message = "Login failed..." + message;
   alert(message);
  } finally {
   setIsLoading(false);
  }
 };
 return (
  <div className='container'>
   <div className='row d-flex'>
    <div className='col-6 my-5'>
     <img src='media/images/landing.png' style={{ width: "40rem" }} alt='err' />
    </div>
    <div className='col-6 text-center'>
     <div className='container mt-5'>
      <h1 className='mb-2'>Login</h1>
      <p className='text-muted'>Login to your account</p>
      <form onSubmit={handleLogin}>
      <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">User Name</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control" id="staticEmail" requiredvalue={username} onChange={(e) => setUsername(e.target.value)} />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input  type="password" class="form-control" id="inputPassword" required value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
  </div>
       <button type='submit' className='btn btn-primary' disabled={isLoading}>
        Login
       </button>

       <p className='mt-3'>
        Already have an account?{" "} <Link to='/signup'>Signup</Link>
       
       </p>
     </form>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Login;
