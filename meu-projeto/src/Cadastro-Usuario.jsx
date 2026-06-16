import React, { useState } from 'react';
import './index.css';

const CadastroPasso1 = () => {
  // Estado para armazenar o CPF digitado
  const [cpf, setCpf] = useState('');

  // Função para lidar com o avanço de etapa
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    
    // Aqui você salvaria o CPF (em um Contexto, Redux ou localStorage)
    // e usaria o React Router (ex: useNavigate) para mudar de rota.
    console.log('Avançando para o passo 2 com o CPF:', cpf);
    // Exemplo com react-router-dom: navigate('/cadastro-usuario-dados');
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
          
          <h1>Cadastre-se</h1>
          <p>Passo 1 de 2. Por favor, insira seu CPF para prosseguir.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="cpf">CPF</label>
            <input
              id="cpf"
              name="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
              // Dica: em um app real, você pode adicionar uma máscara aqui (ex: react-input-mask)
            />

            <button type="submit" className="btn-prosseguir">
              Prosseguir
            </button>
          </form>

        </div>
      </main>

    </div>
  );
};

export default CadastroPasso1;