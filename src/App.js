import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import UserList from './components/UserList';
import './styles.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleLogin = (credentials) => {
    const { username, password } = credentials;

    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      setLoggedIn(true);
    } else {
      alert('Geçersiz kullanıcı adı veya şifre!');
    }
  };

  const handleRegister = (credentials) => {
    const { username, password } = credentials;

    const newUser = {
      id: Date.now(),
      username,
      password
    };

    setUsers([...users, newUser]);
    setLoggedIn(true);
    setShowRegistration(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setShowRegistration(false);
  };

  return (
    <div className="container">
      {loggedIn ? (
        <>
          <UserList users={users} />
          <button onClick={handleLogout} className="logout-btn">Çıkış Yap</button>
        </>
      ) : (
        <>
          <LoginForm onLogin={handleLogin} />
          {!showRegistration && (
            <button onClick={() => setShowRegistration(true)} className="register-btn">Kaydol</button>
          )}
          {showRegistration && (
            <RegistrationForm onRegister={handleRegister} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
