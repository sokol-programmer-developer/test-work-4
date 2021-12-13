import React, { useState } from "react";
import "../../css/login.css";
import "../../css/login_mobile.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="login">
            <div className="login_form" >

                < div className="login_form_group" >
                    {/*<label>Email</label>*/}
                    <input
                        autoFocus
                        id="userLogin"
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="login_form_group">
                    {/*<label>Password</label>*/}
                    <input
                        id="userPassword"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={!validateForm()}
                    className="login_button"
                    onSubmit={handleSubmit}
                >
                    <h2  className="login_button_h2"> ENTER </h2>
                </button>
            </div>
        </div>
    );
}

export  default Login;