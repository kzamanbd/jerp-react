import React, { useEffect } from 'react';
import './login.css';
import Logo from '../../assets/images/JMI-ERP-Logo.svg';
import CompanyLogo from '../../assets/images/logo.svg';

export default function Login() {
    const handleLoginJerp = () => {
        console.log('Login Jerp');
    };
    useEffect(() => {
        document.title = 'Login';
    }, []);
    return (
        <div className="wrapper">
            <div className="container h-100 main-content">
                <div className="row h-100">
                    <div className="col-md-6 d-flex h-100 align-items-center">
                        <div className="left-column">
                            <img src={Logo} alt="erp-icon" />
                            <div className="possibilities">
                                <h2>The possibilities are limitless</h2>
                                <p>
                                    Business management is a daunting job. It is much more
                                    complicated if you don not use apps or if the work is dispersed
                                    through several platforms.To keep track of assignments,
                                    communicate effectively, and meet deadlines, use a single
                                    process.Because of the JERP-validated development method, we are
                                    passionate about what we do and dependable in our execution.
                                </p>
                                <ul className="status jmi-pl-0">
                                    <li>
                                        <span className="material-icons check_circle_outline jmi-mr-4">
                                            check_circle_outline
                                        </span>
                                        <p>
                                            Clear dynamic statements.Your reports, the way you like
                                            them.
                                        </p>
                                    </li>
                                    <li>
                                        <span className="material-icons check_circle_outline jmi-mr-4">
                                            check_circle_outline
                                        </span>
                                        <p>
                                            Streamlined expense management.Get expenses updated
                                            &amp; approved fast.
                                        </p>
                                    </li>
                                    <li>
                                        <span className="material-icons check_circle_outline jmi-mr-4">
                                            check_circle_outline
                                        </span>
                                        <p>
                                            Use cutting-edge automation &amp; advanced routes to
                                            manage any warehouse.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                        <div className="right-column">
                            <div className="container">
                                <div className="email-pass-input">
                                    <div className="card login-card">
                                        <div className="card-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="uname" className="">
                                                        {' '}
                                                        Username{' '}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="uname"
                                                        name="uname"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group pass-input-group">
                                                    <label htmlFor="pwd" className="">
                                                        {' '}
                                                        Password{' '}
                                                    </label>
                                                    <input
                                                        type="password"
                                                        id="pwd"
                                                        className="form-control"
                                                    />
                                                </div>
                                                {/* <button className="btn btn-primary text-light btn-block submit-btn" onClick={ handleLoginJerp }>Log In <i className="fas fa-circle-notch spin-animation d-none"></i></button>
                                                <div className="forgotten text-center"><a>Forgotten Password?</a></div> */}
                                            </form>
                                            <button
                                                type="button"
                                                className="btn btn-primary text-light btn-block submit-btn"
                                                onClick={handleLoginJerp}>
                                                Log In
                                                <i className="fas fa-circle-notch spin-animation d-none" />
                                            </button>
                                            <div className="forgotten text-center">
                                                <a href="/">Forgotten Password?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            Copyright © 2021{' '}
                            <a id="jerp" href="/">
                                JERP
                            </a>
                            . All rights reserved.
                        </div>
                        <div className="col-md-4" />
                        <div className="col-md-5">
                            <ul>
                                <li>
                                    <a href="/">
                                        <i className="fas fa-question-circle" /> Need Help?
                                    </a>
                                </li>
                                <li>
                                    <a href="/">Terms and Conditions</a>
                                </li>
                                <li>
                                    <div className="li-logo">
                                        <p>Powered by: </p>
                                        <div className="mono-logo">
                                            <img src={CompanyLogo} alt="" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
