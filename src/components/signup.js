import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import './signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    username: '',
    password: '',
    terms: false
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid =
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.username &&
      formData.password &&
      formData.terms;

    setValidated(true);

    if (isValid) {
      console.log('Form submitted:', formData);
      alert('Signup successful!');
    }
  };

  return (
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a href="#" className="logo d-flex align-items-center w-auto text-decoration-none">
                  <img src="logo.png" alt="" />
                  <span id='niceAdmin' className="d-none d-lg-block">NiceAdmin</span>
                </a>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                    <p className="text-center small">Enter your personal details to create account</p>
                  </div>

                  <form className="row g-3" onSubmit={handleSubmit} noValidate>
                    <div className="col-12">
                      <label htmlFor="yourName" className="form-label">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className={`form-control ${validated && !formData.name ? 'is-invalid' : ''}`}
                        id="yourName"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">Please, enter your name!</div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="yourEmail" className="form-label">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${validated && !formData.email ? 'is-invalid' : ''}`}
                        id="yourEmail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">Please enter a valid Email address!</div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="yourPhone" className="form-label">Phone Number</label>
                      <input
                       type="tel"
                       name="phone"
                       className={`form-control ${validated && !formData.phone ? 'is-invalid' : ''}`}
                       id="yourPhone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">Please enter your phone number!</div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">Username</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text">@</span>
                        <input
                          type="text"
                          name="username"
                          className={`form-control ${validated && !formData.username ? 'is-invalid' : ''}`}
                          id="yourUsername"
                          value={formData.username}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">Please choose a username.</div>
                      </div>
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
                          className={`form-check-input ${validated && !formData.terms ? 'is-invalid' : ''}`}
                          name="terms"
                          type="checkbox"
                          id="acceptTerms"
                          checked={formData.terms}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-check-label" htmlFor="acceptTerms">
                          I agree and accept the <a href="#">terms and conditions</a>
                        </label>
                        <div className="invalid-feedback">You must agree before submitting.</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">Create Account</button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">Already have an account? <a href="/login">Log in</a></p>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
