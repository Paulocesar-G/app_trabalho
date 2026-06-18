import React, { useState } from 'react';
import './styles.css';

const NovaSenha = () => {
  // Estados para armazenar as duas senhas
  const [senha, setSenha] = useState('');
  const [repitaSenha, setRepitaSenha] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    // Validação simples: verifica se as senhas coincidem
    if (senha !== repitaSenha) {
      alert("As senhas não coincidem. Por favor, tente novamente.");
      return;
    }
    
    // Aqui você faria a chamada para a sua API salvar a nova senha
    console.log('Nova senha definida com sucesso!');
    // Exemplo de redirecionamento: navigate('/login');
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
          
          <h1>Nova Senha</h1>
          <p>Informe abaixo sua nova senha.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="Digite a nova senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <label htmlFor="repitasenha">Repita a Senha</label>
            <input
              id="repitasenha"
              name="repitasenha"
              type="password"
              placeholder="Confirme a nova senha"
              value={repitaSenha}
              onChange={(e) => setRepitaSenha(e.target.value)}
              required
            />

            <button type="submit">Salvar</button>
          </form>

        </div>
      </main>

    </div>
  );
};

export default NovaSenha;