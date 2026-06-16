import React, { useState } from 'react';
import './index.css'; // Importando seus arquivos CSS
import './mobile.css';

const LoginPage = () => {
  // Estados para armazenar os dados do formulário
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    
    // Aqui você faria a chamada para a sua API de autenticação
    console.log('Tentativa de login com:', { email, senha });
  };

  return (
    <div className="container">
      <aside>
        <p>
          Educação não é aprendizado de fatos, mas o treinamento da mente para pensar.
          <span>Albert Einstein</span>
        </p>
      </aside>

      <main>
        <div className="cadastro">
          <h1>Bem-vindo de volta</h1>
          <p>Por favor, insira suas credenciais para acessar seu painel acadêmico</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Endereço de e-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="user@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="senha">
              Senha
              {/* Em um SPA real, os <a> seriam substituídos pelo componente <Link> do react-router-dom */}
              <a href="/recuperar-senha">Esqueceu?</a>
            </label>
            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="Sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <button type="submit">Entrar</button>
          </form>

          <p className="registro">
            Não tem conta? <a href="/cadastro-usuario">Registre-se agora</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;