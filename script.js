// tombol up
    // Ambil tombol
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Saat pengguna menggulir ke bawah 100px dari atas dokumen, tampilkan tombol
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Ketika tombol diklik, kembali ke atas halaman dengan animasi smooth
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        let sections = document.querySelectorAll("section");
        let navLinks = document.querySelectorAll(".nav-link");

        window.addEventListener("scroll", function () {
            let current = "";

            sections.forEach((section) => {
                let sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href").includes(current)) {
                    link.classList.add("active");
                }
            });
        });
    });
// tombol up tutup

// full image
  function showImage(src) {
    const modalImg = document.getElementById('modalImage');
    modalImg.src = src;
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  }
