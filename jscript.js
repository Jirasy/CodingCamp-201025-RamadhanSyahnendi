// Tangani event submit form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // cegah reload halaman

  // Ambil nilai input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Tampilkan respon sederhana
  alert(Terima_kasih, "name");

  // Reset form setelah submit
  this.reset();
});