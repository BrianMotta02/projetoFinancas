const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const usuario = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    fetch('/login/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: usuario, password: senha })
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Problema aqui! Deveria ser response.json()
        } else {
            throw new Error('Falha na autenticação');
        }
    })
    .then(data => {
        if (data.redirectUrl) {
            window.location.href = data.redirectUrl;
        } else {
            alert("Login bem-sucedido, mas sem URL de redirecionamento.");
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro durante o login');
    });
});