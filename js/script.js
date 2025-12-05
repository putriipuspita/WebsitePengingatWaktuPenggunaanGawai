// Inisialisasi awal
lucide.createIcons();

// Fungsi Rubah Icon
function togglePassword(input, iconId) {
    const iconElement = document.getElementById(iconId); // Ambil elemen terbaru dari DOM
    
    if (!input || !iconElement) return;

    const isPassword = input.type === 'password';
    
    input.type = isPassword ? 'text' : 'password';

    // Ganti Icon
    const newIcon = document.createElement('i');
    newIcon.setAttribute('data-lucide', isPassword ? 'eye' : 'eye-off');
    newIcon.id = iconId;
    newIcon.className = iconElement.className;
    iconElement.parentNode.replaceChild(newIcon, iconElement);
    lucide.createIcons();
}

// --- Login Page ---
const loginPasswordInput = document.getElementById('login-password');
const loginEyeBtn = document.getElementById('login-eye-btn'); 

if (loginEyeBtn) {
    loginEyeBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        togglePassword(loginPasswordInput, 'login-eye-icon');
    });
}

// --- Register Page ---
const regPasswordInput = document.getElementById('reg-password-input');
const regEyeBtn = document.getElementById('reg-eye-btn'); 

if (regEyeBtn) {
    regEyeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        togglePassword(regPasswordInput, 'reg-eye-icon');
    });
}

// Fungsi pindah halaman (Tetap sama)
function showMain() { window.location.href = 'main.html'; }
function showLogin() { window.location.href = 'login.html'; }
function showRegister() { window.location.href = 'register.html'; }