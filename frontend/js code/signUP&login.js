


const container = document.getElementById('container');

// Toggle Forms
document.getElementById('signUp').addEventListener('click', () => {
  container.classList.add("right-panel-active");
});
document.getElementById('signIn').addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Signup Form Handler
document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const res = await fetch('http://localhost:3000/user/signUp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();
    alert(data.message || 'Signup successful!');

    if (res.ok) {
      // Redirect to home page after signup
      window.location.href = "signUP&login.html";  // Replace with actual path if different
    }
  } catch (err) {
    alert('Signup failed');
    console.error(err);
  }
});

// Login Form Handler
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;

  try {
    const res = await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    if (res.ok) {
      alert(`Welcome, ${data.user.username}!`);
      // Redirect to home page after login
      window.location.href = "home.html";  // Replace with actual path if different
    } else {
      alert(data.message || 'Invalid login');
    }
  } catch (err) {
    alert('Login error');
    console.error(err);
  }
});
