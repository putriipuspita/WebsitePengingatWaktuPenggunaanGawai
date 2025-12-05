// Inisialisasi Icon Lucide
lucide.createIcons();

// Fungsi Toggle Password
function togglePassword(input, icon) {
    if (!input || !icon) return;
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    icon.setAttribute('data-lucide', isPassword ? 'eye' : 'eye-off');
    lucide.createIcons();
}


// Login Page
const loginPasswordInput = document.getElementById('login-password');
const loginEyeIcon = document.getElementById('login-eye-icon');
const loginEyeBtn = document.getElementById('login-eye-btn'); 

if (loginEyeBtn) {
    loginEyeBtn.addEventListener('click', () => {   
        togglePassword(loginPasswordInput, loginEyeIcon);
    });
}

// Register Page
const regPasswordInput = document.getElementById('reg-password-input');
const regEyeIcon = document.getElementById('reg-eye-icon');
const regEyeBtn = document.getElementById('reg-eye-btn'); 

if (regEyeBtn) {
    regEyeBtn.addEventListener('click', () => {
        togglePassword(regPasswordInput, regEyeIcon);
    });
}

// fungsi pindah halaman
function showMain() {
    window.location.href = 'main.html';
}

function showLogin() {
    window.location.href = 'login.html';
}

function showRegister() {
    window.location.href = 'register.html';
}

