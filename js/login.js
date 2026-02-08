const passwordInput = document.getElementById('password');
const toggleBtn = document.querySelector('.toggle-password');
const toggleIcon = toggleBtn.querySelector('img');

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';

        passwordInput.type = isPassword ? 'text' : 'password';

        toggleIcon.src = isPassword
            ? 'assets/images/view.png'
            : 'assets/images/hide.png';

        toggleBtn.classList.toggle('active', isPassword);

        toggleBtn.setAttribute(
            'aria-label',
            isPassword ? 'Ocultar senha' : 'Mostrar senha'
        );
    });
}
