const USER_URL = 'http://localhost:3000/users';


const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');    const loginForm = document.getElementById('login-form');    const signupForm = document.getElementById('signup-form');
const login = document.getElementById('login-btn');
const signup = document.getElementById('signup-btn');
const loginTitle = document.querySelector('.section-title:not(.hidden)');
const signupTitle = document.querySelector('.section-title.hidden');
signupLink.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
  loginTitle.classList.add('hidden');
  signupTitle.classList.remove('hidden');
});
loginLink.addEventListener('click', () => {
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
  signupTitle.classList.add('hidden');
  loginTitle.classList.remove('hidden');
});

login.addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  fetch(USER_URL)
    .then(response => response.json())
    .then(users => {
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        alert(`Welcome, ${user.username}!`);
        window.location.href = 'index.html';
      } else {
        alert('Invalid username or password.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });

  loginForm.reset();

});

signup.addEventListener('click', () => {
  const username = document.getElementById('new-username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('new-password').value;
  fetch(USER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  signupForm.reset();

})