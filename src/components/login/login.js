import './login.css';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { AuthContext } from '../../AuthContext';

function Login() {

  // useState to set Sig in data 
  const [username, setSignInUsername] = useState('');
  const [password, setSignInPassword] = useState('');
  // useStates to set signUp data 
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [sucess, setSignupMessage] = useState('');
  const [wrongMessage, setSignInMessage] = useState('');

  const { login } = useContext(AuthContext);


  // use state for login  
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const serverURL = process.env.REACT_APP_serverURL + '/login';
      const result = await axios.post(serverURL, { username, password });
      if (result.data.username) {
        setSignInUsername(result.data.username);
        localStorage.setItem("username", username)
        login(username)
        navigate('/', {
          replace: true,
          state: { username: username }
        });
      } else {
        setSignInMessage('Invalid username or password');
        setSignInUsername('');
        setSignInPassword('');


      }
    } catch (error) {
      console.error(error);
    }
  };

  const signUpHandle = async (e) => {
    e.preventDefault();
    try {
      const servreURL = process.env.REACT_APP_serverURL + `/signup`
      const result = await axios.post(servreURL, {
        username: signUpUsername.split(" ").join(""),
        email: signUpEmail.split(" ").join(""),
        password: signUpPassword.split(" ").join("")
      })

      setSignupMessage(result.data);
      setSignUpUsername('')
      setSignUpEmail('')
      setSignUpPassword('')


    }
    catch (error) {
      setSignupMessage('Something went wrong!');
    }


  }

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container2 = document.getElementById('container2');

    signUpButton.addEventListener('click', () => {
      container2.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container2.classList.remove('right-panel-active');
    });

    return () => {
      // Clean up the event listeners when the component unmounts
      signUpButton.removeEventListener('click', () => {
        container2.classList.add('right-panel-active');
      });

      signInButton.removeEventListener('click', () => {
        container2.classList.remove('right-panel-active');
      });
    };
  }, []);



  return (<>
    <div className="login">
      <div className="container2" id="container2">
        <div className="form-container2 sign-in-container2">
          <form onSubmit={handleSignIn}>
            {/* action="./login/login.php"  method="post" */}
            <h1>Sign in </h1>
            <span className='account_info'>use your acconut</span>
            <input type="text" placeholder="Username" autoComplete="off" required autoFocus
              value={username} onChange={(e) => { setSignInUsername(e.target.value) }} />
            <input type="password" placeholder="Password" autoComplete="off" id="showpassword" required
              value={password} onChange={(e) => { setSignInPassword(e.target.value) }} />
            {wrongMessage && <p className="error">
              {wrongMessage}</p>}
            <button type='submit' name="signin">Submit</button>
          </form>

        </div>
        <div className="form-container2 sign-up-container2">

          <form onSubmit={signUpHandle}>
            {/* action="./login/register.php" method="post" */}
            <h1>Sign Up</h1>
            <span className='account_info'>create Your Account</span>
            <input type="text" name="username" placeholder="Username" autoComplete="off" required
              value={signUpUsername} onChange={(e) => { setSignUpUsername(e.target.value) }}
            />

            <input type="email" name="email" placeholder="Email" autoComplete="off" required
              value={signUpEmail} onChange={(e) => { setSignUpEmail(e.target.value) }}
            />

            <input type="password"
              name="password"
              placeholder="Password"
              id="showpassword2"
              autoComplete="off"
              required
              value={signUpPassword} onChange={(e) => { setSignUpPassword(e.target.value) }}
            />

            {sucess && <p className={sucess.includes('Successfully') ? 'sucess' : 'error'}>
              {sucess}</p>}


            <input type="submit"
              value="submit"
              name="submit"></input>


          </form>

        </div>
        <div className="overlay-container2">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p className='pargraph'>To Keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn">
                Sign In
              </button>

            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello Friend!</h1>
              <p className='pargraph'>Enter Your Personal Details and start your Enjoy! :)</p>
              <button className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  </>)
}
export default Login;