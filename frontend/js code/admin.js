
  const loginForm = document.getElementById('loginForm');
  const errorMsg = document.getElementById('errorMsg');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Hide previous error
    errorMsg.style.display = 'none';
    errorMsg.textContent = '';

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/Admin/adminRoutes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok) {
        // Login successful
        alert(`Welcome, ${data.Admin.username}!`);
        window.location.href = "admin.html";
        
      } else {
        // Show error message under form
        alert(data.message || 'Invalid signin');
        
      }
    } catch (err) {
      console.error('Login error:', err);
       alert(data.message || 'signin error');
    }
  });
