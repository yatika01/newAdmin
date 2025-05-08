import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import './signup.css';

function Login() {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    remember: false
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const isEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isPhone = (value) =>
    /^[0-9]{10}$/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { identifier, password } = formData;
    const isValid = identifier && password && (isEmail(identifier) || isPhone(identifier));

    setValidated(true);

    if (isValid) {
      const loginType = isEmail(identifier) ? 'email' : 'phone';
      console.log(`Logging in with ${loginType}:`, formData);
      alert(`Login successful using ${loginType}`);
    }
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                <div className="d-flex justify-content-center py-4">
                  <a href="index.html" className="logo d-flex align-items-center w-auto text-decoration-none">
                    <img src="logo.png" alt="Logo" />
                    <span className="d-none d-lg-block">NiceAdmin</span>
                  </a>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p className="text-center small">Use your email or phone with password</p>
                    </div>

                    <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                      <div className="col-12">
                        <label htmlFor="identifier" className="form-label">Email or Phone</label>
                        <input
                          type="text"
                          name="identifier"
                          className={`form-control ${validated && (!formData.identifier || (!isEmail(formData.identifier) && !isPhone(formData.identifier))) ? 'is-invalid' : ''}`}
                          id="identifier"
                          value={formData.identifier}
                          onChange={handleChange}
                        />
                        {validated && (!formData.identifier || (!isEmail(formData.identifier) && !isPhone(formData.identifier))) && (
                          <div className="invalid-feedback d-block">
                            Please enter a valid email or 10-digit phone number.
                          </div>
                        )}
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Password</label>
                        <input
                          type="password"
                          name="password"
                          className={`form-control ${validated && !formData.password ? 'is-invalid' : ''}`}
                          id="yourPassword"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">Please enter your password!</div>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            id="rememberMe"
                            checked={formData.remember}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Login</button>
                      </div>
                      <div className="col-12">
                      <p className="small mb-0 ">Don't have account? <a href="/signup">Create an account</a></p>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
