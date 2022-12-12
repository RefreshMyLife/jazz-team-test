import React, { useState } from 'react';
import style from './Login.module.css';
const Login = () => {
  const [isValid, setIsValid] = React.useState(false);
  const [userName, setUserName] = React.useState('Admin');
  const [userPassword, setUserPassword] = React.useState('12345678');
  const [messageError, setMessageError] = React.useState('');

  const handleButton = document.addEventListener('click', () => {
    console.log(isValid);
    if (userName === 'Admin' && userPassword === '12345678') {
      localStorage.setItem('userName', userName);
      return setIsValid(true);
    }
    return setIsValid(false);
  });
  return (
    <div className={style.login}>
      <div className={style.heading}>
        <h2>Авторизация</h2>
        <form onSubmit={() => handleButton()} action="/profile">
          <div className={style.input_group}>
            <input
              type="text"
              className={style.form_control}
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className={style.input_group}>
            <input
              type="password"
              className={style.form_control}
              placeholder="Password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          <button type="submit" className={style.float} disabled={!isValid}>
            Login
          </button>
          {isValid ? '' : <>{'Неправильный пароль или логин'}</>}
        </form>
      </div>
    </div>
  );
};

export default Login;
