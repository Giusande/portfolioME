const users = [
    { username: 'giugiu0013', password: 'giugiug@' },
    { username: 'andresa', password: 'linguagens' },
    { username: 'tulio', password: 'matematica' },
    { username: 'carla', password: 'humanas' },
    { username: 'maura', password: 'natureza' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usernameForm = document.getElementById('user').value;
    const passwordForm = document.getElementById('senha').value;
    
    if (usernameForm === 'giugiu0013' && passwordForm === 'giugiug@') {
        window.location.href = "../giu"
    } else if (usernameForm === 'andresa' && passwordForm === 'linguagens') {
        window.location.href = "../professores"
        localStorage.setItem('materia', 'linguagem');
    } else if (usernameForm === 'tulio' && passwordForm === 'matematica') {
        window.location.href = "../professores"
        localStorage.setItem('materia', 'matematica');
    } else if (usernameForm === 'carla' && passwordForm === 'humanas') {
        window.location.href = "../professores"
        localStorage.setItem('materia', 'humanas');
    } else if (usernameForm === 'maura' && passwordForm === 'natureza') {
        window.location.href = "../professores"
        localStorage.setItem('materia', 'natureza');
    }
});
