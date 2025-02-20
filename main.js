document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.log("Autoplay diblokir oleh browser. Silakan interaksi dengan halaman untuk memutar musik.");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".kolomcari button").addEventListener("click", searchFunction);

    function searchFunction() {
        let keyword = document.querySelector('.search-input').value.toLowerCase();
        let sections = {
            "home": "home-section",
            "produk": "produk-section",
            "kontak": "kontak-section",
            "tentang": "tentang-section"
        };

        if (sections[keyword]) {
            document.getElementById(sections[keyword]).scrollIntoView({ behavior: "smooth" });
        } else {
            alert("Fitur ini masih coming soon guys...");
        }
    }
});
