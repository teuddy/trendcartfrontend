import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from '../../actions/authActions'



const SignInForm = ()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    await dispatch(login(credentials));
    

  };

  return (

            <section className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div>
               {/* {error && <b>{error}</b>} */}
              </div>
              <button type="submit" className="button-primary">Login</button>
            </form>

          </section>  
  );
}

// function SignInForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     //try to get token from backend if not then return error
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });
//       if(response.ok){
//         // const token = await response.json();
//         const token = await response.json();
//         localStorage.setItem('token', token);
//         setIsLoggedIn(true)

//         //redirect to home page

//       }else{
//         const { error } = await response.json();
//         setError(error);
//         setEmail('');
//         setPassword('');
//       }


//     // console.log(`Email: ${email}, Password: ${password}`);
//     // You can replace the console.log with your authentication logic
//     // Your authentication logic goes here
//     // const token = 'your_token_value'; // replace with the actual token value
//     // localStorage.setItem('token', token);
// };
  

//   return (
//     <>
//       {isLoggedIn ? (
//         <Redirect to="/" />
//       ) : (
//             <section className="login">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Password:</label>
//                 <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//               </div>
//               <div>
//                {error && <b>{error}</b>}
//               </div>
//               <button type="submit" className="button-primary">Login</button>
//             </form>
          
//           </section>
//             // <form onSubmit={handleSubmit}>
//             //   <div>
//             //     <label htmlFor="email">Email:</label>
//             //     <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//             //   </div>
//             //   <div>
//             //     <label htmlFor="password">Password:</label>
//             //     <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//             //   </div>
//             //   <div>
//             //     {error && <b>{error}</b>}
//             //   </div>
//             //   <button type="submit">Sign In</button>
//             // </form>
//       )}
//     </>
   
//   );
// }

export default SignInForm;