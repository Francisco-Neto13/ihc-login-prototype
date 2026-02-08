const USUARIO_VALIDO = {
    username: "admin",
    password: "123"
};

const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const feedbackMessage = document.getElementById('feedbackMessage');
const toggleBtn = document.querySelector('.toggle-password');
const toggleIcon = toggleBtn?.querySelector('img');
const forgotPasswordBtn = document.getElementById('forgotPassword');

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';

        if (toggleIcon) {
            toggleIcon.src = isPassword
                ? 'assets/images/view.png' 
                : 'assets/images/hide.png';
        }

        toggleBtn.classList.toggle('active', isPassword);
        toggleBtn.setAttribute(
            'aria-label',
            isPassword ? 'Ocultar senha' : 'Mostrar senha'
        );
    });
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    limparFeedback();

    if (!username || !password) {
        mostrarFeedback("Por favor, preencha todos os campos.", "error");
        return;
    }

    if (username === USUARIO_VALIDO.username && password === USUARIO_VALIDO.password) {
        mostrarFeedback(`Acesso concedido! Bem-vindo, ${username}.`, "success");
        loginForm.querySelectorAll('input, button').forEach(el => el.disabled = true);
    } else {
        mostrarFeedback("Usuário ou senha incorretos.", "error");
        passwordInput.value = '';
        passwordInput.focus();
    }
});

if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener('click', () => {
        mostrarFeedback("Para este protótipo, use: admin / 123", "success");
    });
}

function mostrarFeedback(mensagem, tipo) {
    feedbackMessage.textContent = mensagem;
    feedbackMessage.classList.remove('hidden', 'error', 'success');
    feedbackMessage.classList.add(tipo);

    if (tipo === 'error') {
        feedbackMessage.classList.add('error-shake');
        setTimeout(() => {
            feedbackMessage.classList.remove('error-shake');
        }, 500);
    }
}

function limparFeedback() {
    feedbackMessage.classList.add('hidden');
    feedbackMessage.classList.remove('error', 'success');
    feedbackMessage.textContent = "";
}