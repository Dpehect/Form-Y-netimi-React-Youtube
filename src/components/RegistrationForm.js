import React, { useState } from 'react';

const RegistrationForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Kullanıcı Adı"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit">Kaydol</button>
    </form>
  );
};

export default RegistrationForm;
