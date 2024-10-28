import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/forgotpassword', { email });
      alert('Email de recuperação enviado, verifique sua caixa de entrada.');
    } catch (error) {
      console.error('Erro ao enviar o email de recuperação', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Recuperar Senha</h2>
      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ForgotPasswordPage;
