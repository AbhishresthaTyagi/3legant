import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div id="registerPage">
        <div>
          <img src="./assets/chair.jpg" alt="img " id="chairImg" />
        </div>
        <div className="container my-3 py-3 " id="actualRegistrationpage">
          <h1 className="text-center">Sign in</h1>
          <hr />
          <div class="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
              <form>
                <div class="my-3">
                  <label for="display-4">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="my-3">
                  <label for="floatingPassword display-4">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                </div>
                <div className="my-3">
                  <p>
                    New Here?{" "}
                    <Link
                      to="/register"
                      className="text-decoration-underline text-info"
                    >
                      Register
                    </Link>{" "}
                  </p>
                </div>
                <div className="text-center">
                  <button
                    class=" mx-auto btn btn-dark w-100"
                    type="submit"
                    disabled
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
