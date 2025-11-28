function orderNow() {
    const phone = "6289677742715"; // ← isi dengan nomor kamu (format internasional tanpa +)
    
    const message = 
`Halo, saya mau order Suplemen Daun Kelor Premium.
Apakah masih tersedia?`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
