import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '@/assets/images/JMI-ERP-Logo.svg';
import CompanyLogo from '@/assets/images/logo.svg';
import login from '@/hooks/useLogin';
import './login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // validate username and password
        if (!username || !password) {
            console.log('Please enter username and password');
        } else {
            setIsLoading(true);
            // call login api
            login(username, password)
                .then((response) => {
                    setIsLoading(false);
                    // if success
                    console.log(response);
                    if (response.data.code === 200) {
                        localStorage.setItem('token', response.data.data.token.access_token);
                        navigate('/features/users/dashboard');
                    } else {
                        console.log(response.data.message);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
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
                                            <form onSubmit={handleLogin} action="#" method="POST">
                                                <div className="form-group">
                                                    <label htmlFor="username">Username</label>
                                                    <input
                                                        type="text"
                                                        id="username"
                                                        name="uname"
                                                        className="form-control"
                                                        placeholder="Enter username"
                                                        value={username}
                                                        onChange={(e) =>
                                                            setUsername(e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group pass-input-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        className="form-control"
                                                        placeholder="Enter password"
                                                        value={password}
                                                        onChange={(e) =>
                                                            setPassword(e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <button
                                                    type="submit"
                                                    disabled={isLoading}
                                                    className="btn btn-primary text-light btn-block submit-btn">
                                                    Log In
                                                    <i className="fas fa-circle-notch spin-animation d-none" />
                                                </button>
                                            </form>
                                            <div className="forgotten text-center">
                                                <a href="/forgot-password">Forgotten Password?</a>
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
                            Copyright © 2021
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

export default Login;
