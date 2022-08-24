import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { UserContext } from "../../context/userContext";
import { Input } from "../../components/Input";
import { loginWithGitHub } from "../../api/authAPI";
import { passwordRegExp } from "../../constants/regExp";
import { passwordError } from "../../constants/errors";
import { Button } from "../../components/Button";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setUserState } = useContext(UserContext);

  const [formState, setFormState] = useState({
    values: {
      login: "",
      password: "",
    },
    errors: {
      login: null,
      password: null,
    },
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    if (formState.errors[name]) {
      setFormState((prevState) => ({
        ...prevState,
        values: { ...prevState.values, [name]: value },
        errors: { ...prevState.errors, [name]: null },
      }));
    }

    setFormState((prevState) => ({
      ...prevState,
      values: { ...prevState.values, [name]: value },
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!passwordRegExp.test(formState.values.password)) {
      setFormState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          password: passwordError,
        },
      }));

      return;
    }

    loginWithGitHub(formState.values.login)
      .then((res) => {
        const data = res.json();

        if (res.ok) {
          return data;
        }

        return Promise.reject();
      })
      .then((result) => {
        const { avatar_url, login } = result;

        if (avatar_url && login) {
          setUserState({ login, avatar_url });
          navigate("/terminals");
        }
      })
      .catch(() => {
        setFormState((prevState) => ({
          ...prevState,
          errors: { ...prevState.errors, login: "User not found" },
        }));
      });
  };

  return (
    <div className="login-page">
      <div className="modal-login">
        <div className="titles-wrapper">
          <h1 className="login-title">Welcome to our site</h1>

          <h2 className="login-subtitle">Enter your login from GitHub</h2>
        </div>

        <div className="form-wrapper">
          <form onSubmit={handleFormSubmit} autoComplete="off">
            <Input
              value={formState.name}
              onChange={handleInputChange}
              name="login"
              error={formState.errors.login}
            />

            <Input
              value={formState.password}
              onChange={handleInputChange}
              name="password"
              error={formState.errors.password}
            />

            <div className="btn-wrapper">
              <Button className="width-button" type="submit" text="Log In" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
