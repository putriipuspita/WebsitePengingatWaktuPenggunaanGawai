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
function showLogin() { window.location.href = 'main.html' }
function showRegister() { window.location.href = 'register.html'; }
function goToDashboard() { window.location.href = 'dashboard.html'; }
function showProfile() { window.location.href = 'profil.html'; }

// dashboard
function setupDashboardTabs() {
    const dashboardMain = document.querySelector('.main-content-dashboard');
    if (!dashboardMain) return;

    const tabButtons = dashboardMain.querySelectorAll('.tab-button');
    const views = dashboardMain.querySelectorAll('.dashboard-view');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            views.forEach(view => view.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(targetTab + '-view').classList.add('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;

    if (currentPath.includes('dashboard.html')) {
        setupDashboardTabs();

        const logoutLink = document.getElementById('logout-link');
        if (logoutLink) {
            logoutLink.addEventListener('click', e => {
                e.preventDefault();
                showMain();   
            });
        }
    }

document.addEventListener("DOMContentLoaded", () => {

    // TAB DASHBOARD
    if (window.location.pathname.includes("dashboard.html")) {

        const tabButtons = document.querySelectorAll(".tab-button");
        const views = document.querySelectorAll(".dashboard-view");

        tabButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                tabButtons.forEach(b => b.classList.remove("active"));
                views.forEach(v => v.classList.remove("active"));

                btn.classList.add("active");

                document.getElementById(btn.dataset.tab + "-view")
                    .classList.add("active");
            });
        });

        // LOGOUT
        document.getElementById("logout-link").addEventListener("click", e => {
            e.preventDefault();
            window.location.href = "main.html"; // FIXED
        });
    }
});


    // Profil logic
    if (currentPath.includes('profil.html')) {

        const logoutItem = document.querySelector('.sidebar li:last-child a');
        if (logoutItem) {
            logoutItem.addEventListener('click', e => {
                e.preventDefault();
                showMain();
            });
        }

        const editIcon = document.querySelector('.edit-icon');
        if (editIcon) {
            editIcon.addEventListener('click', () => {
                alert('Fitur Edit Profil akan ditambahkan.');
            });
        }

        const dashboardLink = document.querySelector('.sidebar li a[href*="dashboard"]');
        if (dashboardLink) {
            dashboardLink.addEventListener('click', e => {
                e.preventDefault();
                goToDashboard();
            });
        }
    }
});