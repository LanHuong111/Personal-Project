import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [inputs, setInputs] = useState({
    email:"",
    password:""
  })
  const handleChangeInput = (e) =>{
    const {name, value} = e.target
    console.log(name)
    console.log(value)
    setInputs((prev) => ({...prev, [name]:value}))

  }
  console.log(inputs)

  return (
    <>
      <section id="form">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 register">
              <div className="signup-form">
                <h2>Login to your account</h2>
                <form action="#" className="form-register">
                  <input name="email" type="text" placeholder="Email Address" onChange={handleChangeInput}/>
                  <p>&nbsp;</p>
                  <input name="password" type="password" placeholder="Password" onChange={handleChangeInput} />
                  <p>&nbsp;</p>
                  <span>
                    <Link to="/register">
                      Do you have an account yet? Register ?
                    </Link>
                  </span>
                  <br />
                  <br />
                  <button type="submit" className="btn btn-default">
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
