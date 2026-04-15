document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim(),
    };

    try {
      const response = await fetch('http://localhost:3000/ContactMessage/contactRoutes', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || "feedback submitted"); // You can replace with a modal/toast
        
      } else {
        alert(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Server error. Please try again later.");
    }
  });
});
