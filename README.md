# Protótipo de Sistema de Login Seguro - DevCat Portal

Este projeto apresenta a interface de autenticação do **DevCat Portal**, uma plataforma fictícia de gerenciamento de recursos e ferramentas para desenvolvedores. O objetivo foi criar uma interface funcional aplicando conceitos de IHC (Interação Humano-Computador) para otimizar a usabilidade e a experiência do usuário técnico.

Link para visualização online: [https://francisco-neto13.github.io/ihc-login-prototype/](https://francisco-neto13.github.io/ihc-login-prototype/)

---

## Descrição do Projeto

O **DevCat Portal** simula um ambiente de acesso restrito onde o desenvolvedor pode realizar a autenticação utilizando seu nome de usuário ou e-mail corporativo. A interface foi desenhada para ser sóbria e altamente funcional, oferecendo suporte nativo ao **Modo Escuro (Dark Mode)** para garantir o conforto visual durante longas jornadas de trabalho e sessões de codificação noturnas.

O sistema inclui processos reais de um sistema robusto, como autenticação híbrida, fluxo de recuperação de senha integrado e mecanismos de segurança visual que aumentam a confiança do usuário através de feedbacks dinâmicos. Todo o funcionamento é processado localmente através de lógica em JavaScript, sem a necessidade de banco de dados real.

## Análise das Metas de Usabilidade

Para este protótipo, focamos em três metas principais:

1. **Eficácia**: O usuário consegue realizar o login ou recuperar a senha sem erros de sistema. O fluxo de recuperação guia o usuário passo a passo através de modais claros e centralizados.
2. **Segurança (Safety)**: Implementamos um limite de 3 tentativas de acesso. Após exceder o limite, o sistema bloqueia a interface temporariamente, prevenindo ataques de força bruta e simulando a proteção da integridade da conta.
3. **Facilidade de Aprendizado**: O design segue padrões mentais universais, como ícones de visibilidade de senha, botão de fechar no canto superior direito e cores semânticas (vermelho para erro e verde para sucesso).

## Análise das Metas de Experiência do Usuário (UX)

Selecionamos 5 metas fundamentais para o desenvolvimento da interface:

* **Esteticamente apreciável**: O layout utiliza uma paleta de cores moderna e transições suaves entre temas (Light/Dark), com alinhamento preciso via CSS Grid e Flexbox.
* **Satisfatório**: A transição do estado de "Verificando..." para o sucesso gera uma sensação de conclusão positiva através de microanimações de confirmação.
* **Emocionalmente adequado**: O sistema mantém um tom profissional e de suporte, especialmente no fluxo de recuperação de senha, reduzindo a frustração do usuário.
* **Agradável**: Feedbacks visuais como o efeito de *shake* em erros de digitação e o atraso artificial para simular processamento tornam a interação mais orgânica.
* **Adaptável**: A inclusão do Modo Escuro demonstra empatia com a rotina do desenvolvedor, permitindo que a interface se adapte a diferentes ambientes de iluminação.

## Tecnologias Utilizadas

* **HTML5**: Estrutura semântica dos elementos.
* **CSS3**: Estilização avançada com uso de Variáveis CSS (Custom Properties) para temas dinâmicos e responsividade.
* **JavaScript**: Lógica de autenticação, manipulação de DOM e persistência da preferência de tema via `localStorage`.
* **GitHub Pages**: Hospedagem e deploy.

## Credenciais de Acesso (Protótipo)

Para testar as funcionalidades de login e recuperação, utilize os dados abaixo:

* **Usuário**: `admin`
* **E-mail**: `admin@dev.com`
* **Senha**: `123`

## Instruções de Execução

O projeto pode ser executado de duas formas, não sendo obrigatória a conexão com a internet para a execução local:

### 1. Execução Online
Acesse o link hospedado no GitHub Pages: [https://francisco-neto13.github.io/ihc-login-prototype/](https://francisco-neto13.github.io/ihc-login-prototype/)

### 2. Execução Local (Offline)
* Clone o repositório: `git clone https://github.com/Francisco-Neto13/ihc-login-prototype.git`
* Navegue até a pasta do projeto.
* Abra o arquivo `index.html` diretamente em seu navegador.
