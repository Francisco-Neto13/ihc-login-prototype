# Protótipo de Sistema de Login Seguro e UX

Este projeto é um protótipo de interface de autenticação focado em IHC (Interação Humano-Computador), explorando conceitos de feedback visual, segurança e usabilidade avançada.

Link para visualização online: https://francisco-neto13.github.io/ihc-login-prototype/

---

## Descrição do Projeto

O projeto consiste em uma interface de login moderna que simula processos reais de um sistema robusto, incluindo autenticação híbrida (usuário ou e-mail), um fluxo de recuperação de senha integrado e mecanismos de segurança visual que aumentam a confiança do usuário através de feedbacks dinâmicos.

## Análise das Metas de Usabilidade

Para este protótipo, focamos em três metas principais:

1. **Eficácia**: O usuário consegue realizar o login ou recuperar a senha sem erros de sistema. O fluxo de recuperação guia o usuário passo a passo através de modais claros.
2. **Segurança (Safety)**: Implementamos um limite de 3 tentativas de acesso. Após exceder o limite, o sistema bloqueia a interface, prevenindo ataques de força bruta e protegendo a integridade da conta simulada.
3. **Facilidade de Aprendizado**: O design segue padrões mentais universais, como ícones de visibilidade de senha, botão de fechar no canto superior direito e cores semânticas (vermelho para erro e verde para sucesso).

## Análise das Metas de Experiência do Usuário

Selecionamos 5 metas fundamentais para o desenvolvimento da interface:

* **Esteticamente apreciável**: O layout utiliza uma paleta de cores moderna, tipografia limpa, sombras suaves e um footer com alinhamento matemático via CSS Grid.
* **Satisfatório**: A transição do estado de "Verificando..." para o sucesso gera uma sensação de conclusão positiva e recompensa o esforço do usuário.
* **Emocionalmente adequado**: O sistema lida com situações críticas de forma séria, mas mantém um tom de suporte no fluxo de recuperação, adaptando a interface ao contexto.
* **Agradável**: Feedbacks visuais como o efeito de shake em erros e o atraso artificial para simular processamento tornam a interação menos robótica.
* **Proveitoso**: O fluxo de recuperação que permite "Tentar novamente" sem perder o contexto demonstra eficiência, minimizando o esforço e o tempo gasto pelo utilizador.

## Tecnologias Utilizadas

* **HTML5**: Estrutura semântica dos elementos.
* **CSS3**: Estilização avançada e responsividade.
* **JavaScript**: Lógica de autenticação e manipulação de DOM.
* **GitHub Pages**: Hospedagem e deploy.

## Credenciais de Acesso (Protótipo)

Para testar as funcionalidades de login e recuperação, utilize os dados abaixo:

* **Usuário**: admin
* **E-mail**: admin@dev.com
* **Senha**: 123

## Instruções de Execução

O projeto pode ser executado de duas formas, não sendo obrigatória a conexão com a internet para a execução local:

### 1. Execução Online
Acesse o link hospedado no GitHub Pages: https://francisco-neto13.github.io/ihc-login-prototype/

### 2. Execução Local (Offline)
* Clone o repositório: `git clone https://github.com/Francisco-Neto13/ihc-login-prototype.git`
* Navegue até a pasta do projeto.
* Abra o arquivo `index.html` diretamente em seu navegador.
