const USUARIO_VALIDO = {
    username: "admin",
    email: "admin@dev.com",
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
const closeXBtn = document.getElementById('closeX');
const recoveryContainer = document.getElementById('recoveryContainer');
const recoveryEmailInput = document.getElementById('recoveryEmail');
const confirmRecoveryBtn = document.getElementById('confirmRecovery');

function abrirModal(titulo, mensagem, conteudoVisual, mostrarBotao = false, modoRecuperacao = false, textoBotao = "Entendido", mostrarX = true) {
    welcomeTitle.textContent = titulo;
    successStatus.textContent = mensagem;
    statusVisual.innerHTML = conteudoVisual;

    if (modoRecuperacao) {
        successStatus.classList.add('hidden');
        recoveryContainer.classList.remove('hidden');
    } else {
        successStatus.classList.remove('hidden');
        recoveryContainer.classList.add('hidden');
    }

    successOverlay.classList.remove('hidden');
    
    closeXBtn.classList.toggle('hidden', !mostrarX);

    if (mostrarBotao) {
        closeOverlayBtn.classList.remove('hidden');
        closeOverlayBtn.textContent = textoBotao;
    } else {
        closeOverlayBtn.classList.add('hidden');
    }
}

[closeOverlayBtn, closeXBtn].forEach(btn => {
    btn?.addEventListener('click', () => {
        if (closeOverlayBtn.textContent === "Tente novamente" && btn === closeOverlayBtn) {
            forgotPasswordBtn.click();
        } else {
            successOverlay.classList.add('hidden');
        }
    });
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
    const loginValue = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const submitBtn = loginForm.querySelector('.btn-primary');

    limparFeedback();

    if (!loginValue || !password) {
        mostrarFeedback("Por favor, preencha as credenciais.", "error");
        return;
    }

    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Verificando...";

    setTimeout(() => {
        const usuarioExiste = (loginValue === USUARIO_VALIDO.username || loginValue === USUARIO_VALIDO.email);

        if (!usuarioExiste) {
            mostrarFeedback("Identificação não encontrada.", "error");
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            return;
        }

        if (password === USUARIO_VALIDO.password) {
            abrirModal("Usuário encontrado!", "Validando suas credenciais...", `<div class="check-icon"></div>`, false, false, "Entendido", false);

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
                abrirModal("Acesso bloqueado", "Sua conta foi bloqueada temporariamente.", `<img src="assets/images/lock-error.png" style="width:80px;height:80px;border-radius:50%;object-fit:cover;">`, true, false, "Entendido", false);
                loginForm.querySelectorAll('input, button').forEach(el => el.disabled = true);
                submitBtn.style.opacity = "0.5";
                submitBtn.textContent = "Bloqueado";
            }
        }
    }, 1500);
});

if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener('click', () => {
        recoveryEmailInput.value = '';
        recoveryEmailInput.style.borderColor = "#ddd";
        confirmRecoveryBtn.disabled = false;
        confirmRecoveryBtn.textContent = "Enviar Link";
        abrirModal("Recuperação de Senha", "", `<img src="assets/images/support.png" style="width:80px;height:80px;border-radius:50%;object-fit:cover;">`, false, true);
    });
}

confirmRecoveryBtn?.addEventListener('click', () => {
    const emailDigitado = recoveryEmailInput.value.trim();

    if (emailDigitado === "") {
        recoveryEmailInput.style.borderColor = "red";
        recoveryEmailInput.focus();
        return;
    }

    confirmRecoveryBtn.disabled = true;
    confirmRecoveryBtn.textContent = "Verificando...";

    setTimeout(() => {
        if (emailDigitado.toLowerCase() === USUARIO_VALIDO.email.toLowerCase()) {
            abrirModal("E-mail identificado!", `Instruções enviadas para:\n${USUARIO_VALIDO.email}`, `<div class="check-icon"></div>`, true, false, "Entendido", true);
        } else {
            abrirModal("E-mail não encontrado", "O e-mail informado não consta em nossa base de dados.", `<img src="assets/images/lock-error.png" style="width:80px;height:80px;border-radius:50%;object-fit:cover;">`, true, false, "Tente novamente", true);
        }
    }, 1500);
});

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