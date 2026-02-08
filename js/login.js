const USUARIO_VALIDO = {
    username: "admin",
    password: "123"
};

let tentativasRestantes = 3;

const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const feedbackMessage = document.getElementById('feedbackMessage');
const toggleBtn = document.querySelector('.toggle-password');
const toggleIcon = toggleBtn?.querySelector('img');
const forgotPasswordBtn = document.getElementById('forgotPassword');
const successOverlay = document.getElementById('successOverlay');
const userAvatar = document.getElementById('userAvatar');
const welcomeTitle = document.getElementById('welcomeTitle');
const rememberCheckbox = document.getElementById('rememberMe');
const statusVisual = document.getElementById('statusVisual');

window.addEventListener('load', () => {
    const savedUser = localStorage.getItem('rememberedUser');
    if (savedUser) {
        usernameInput.value = savedUser;
        if (rememberCheckbox) rememberCheckbox.checked = true;
    }
});

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        if (toggleIcon) {
            toggleIcon.src = isPassword ? 'assets/images/view.png' : 'assets/images/hide.png';
        }
        toggleBtn.classList.toggle('active', isPassword);
    });
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const submitBtn = loginForm.querySelector('.btn-primary');

    limparFeedback();

    if (tentativasRestantes <= 0) {
        mostrarFeedback("Acesso bloqueado. Verifique seu e-mail para desbloqueio.", "error");
        return;
    }

    if (!username || !password) {
        mostrarFeedback("Por favor, preencha as credenciais de acesso.", "error");
        return;
    }

    if (username === USUARIO_VALIDO.username && password === USUARIO_VALIDO.password) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Verificando...";

        if (rememberCheckbox && rememberCheckbox.checked) {
            localStorage.setItem('rememberedUser', username);
        } else {
            localStorage.removeItem('rememberedUser');
        }

        setTimeout(() => {
            if (successOverlay) {
                successOverlay.classList.remove('hidden');
                const successStatus = document.getElementById('successStatus');
                setTimeout(() => {
                    if (statusVisual) {
                        statusVisual.innerHTML = `<img src="assets/images/avatar-logged.jpg" alt="User">`;
                    }
                    if (welcomeTitle) welcomeTitle.textContent = "Bem-vindo, Cat-Dev!";
                    if (successStatus) successStatus.textContent = "Redirecionando...";
                }, 1500);
            }
            loginForm.querySelectorAll('input, button').forEach(el => el.disabled = true);
        }, 1500);

    } else {
        tentativasRestantes--;

        if (tentativasRestantes > 0) {
            mostrarFeedback(`Identificação inválida. Restam ${tentativasRestantes} tentativa(s).`, "error");
            passwordInput.value = '';
            passwordInput.focus();
        } else {
            mostrarFeedback("Acesso bloqueado por segurança. Verifique seu e-mail. (Reinicie a página)", "error");
            loginForm.querySelectorAll('input, button').forEach(el => el.disabled = true);
            submitBtn.style.opacity = "0.5";
            submitBtn.textContent = "Conta Bloqueada";
        }
    }
});

if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener('click', () => {
        const mensagemAjuda = "Contate o suporte de TI\n(admin / 123)";
        const estaVisivel = !feedbackMessage.classList.contains('hidden');
        const mesmaMensagem = feedbackMessage.textContent === mensagemAjuda;

        if (estaVisivel && mesmaMensagem) {
            limparFeedback();
        } else {
            mostrarFeedback(mensagemAjuda, "success");
        }
    });
}

function mostrarFeedback(mensagem, tipo) {
    feedbackMessage.textContent = mensagem;
    feedbackMessage.classList.remove('hidden', 'error', 'success', 'error-shake');
    void feedbackMessage.offsetWidth;
    feedbackMessage.classList.add(tipo);
    if (tipo === 'error') feedbackMessage.classList.add('error-shake');
}

function limparFeedback() {
    feedbackMessage.classList.add('hidden');
    feedbackMessage.classList.remove('error', 'success', 'error-shake');
    feedbackMessage.textContent = "";
}