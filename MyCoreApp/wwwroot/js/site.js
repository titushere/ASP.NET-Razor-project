// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username === 'admin' && password === 'password') {
        window.location.href = '/Index';
        
    } else {
        alert('Invalid username or password.')
    }
}