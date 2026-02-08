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
const welcomeTitle = document.getElementById('welcomeTitle');
const successStatus = document.getElementById('successStatus');
const statusVisual = document.getElementById('statusVisual');
const closeOverlayBtn = document.getElementById('closeOverlay');

function abrirModal(titulo, mensagem, conteudoVisual, mostrarBotao = false) {
    welcomeTitle.textContent = titulo;
    successStatus.textContent = mensagem;
    statusVisual.innerHTML = conteudoVisual;
    successOverlay.classList.remove('hidden');
    if (mostrarBotao) {
        closeOverlayBtn.classList.remove('hidden');
    } else {
        closeOverlayBtn.classList.add('hidden');
    }
}

closeOverlayBtn?.addEventListener('click', () => {
    successOverlay.classList.add('hidden');
});

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        if (toggleIcon) {
            toggleIcon.src = isPassword ? 'assets/images/view.png' : 'assets/images/hide.png';
        }
        toggleBtn.classList.toggle('active');
    });
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const submitBtn = loginForm.querySelector('.btn-primary');

    limparFeedback();

    if (tentativasRestantes <= 0) {
        abrirModal("Acesso Bloqueado", "Sua conta permanece suspensa.\nVerifique seu e-mail para instruções.", `<img src="assets/images/lock-error.png" style="width:80px;height:80px;border-radius:50%;object-fit:cover;">`, true);
        return;
    }

    if (!username || !password) {
        mostrarFeedback("Por favor, preencha as credenciais.", "error");
        return;
    }

    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Verificando...";

    setTimeout(() => {
        if (username !== USUARIO_VALIDO.username) {
            mostrarFeedback("Usuário não encontrado.", "error");
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            return;
        }

        if (password === USUARIO_VALIDO.password) {
            abrirModal("Usuário encontrado!", "Validando suas credenciais...", `<div class="check-icon"></div>`, false);

            setTimeout(() => {
                welcomeTitle.textContent = "Login realizado!";
                successStatus.textContent = "Bem-vindo de volta, Cat-Dev!\nRedirecionando...";
                statusVisual.innerHTML = `<img src="assets/images/avatar-logged.jpg" alt="User" style="width:100px;height:100px;border-radius:50%;object-fit:cover;animation:fadeIn 0.5s ease;">`;
            }, 1500);

            loginForm.querySelectorAll('input, button').forEach(el => el.disabled = true);
        } else {
            tentativasRestantes--;
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;

            if (tentativasRestantes > 0) {
                mostrarFeedback(`Senha incorreta. Restam ${tentativasRestantes} tentativa(s).`, "error");
                passwordInput.value = '';
                passwordInput.focus();
            } else {
                abrirModal("Acesso temporariamente bloqueado", "Detectamos várias tentativas incorretas de acesso.\nPor segurança, sua conta foi bloqueada temporariamente.\nVerifique seu e-mail para mais informações ou entre em contato com o suporte.", `<img src="assets/images/lock-error.png" style="width:80px;height:80px;border-radius:50%;object-fit:cover;">`, true);
                loginForm.querySelectorAll('input, button').forEach(el => el.disabled = true);
                submitBtn.style.opacity = "0.5";
                submitBtn.textContent = "Bloqueado";
            }
        }
    }, 1500);
});

if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener('click', () => {
        const msgHelp = "Verifique o e-mail corporativo para instruções de recuperação.\n\nEm caso de dúvidas, entre em contato com o suporte:\nsuporte@dev.com";
        abrirModal("Precisa de ajuda?", msgHelp, `<img src="assets/images/support.png" style="width:80px;height:80px;border-radius:50%;object-fit:cover;">`, true);
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