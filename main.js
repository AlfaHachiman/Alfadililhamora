//let nama = prompt('Selamat datang! inputkan nama kamu ya.')
   // alert('nama kamu adalah ' + nama)

// Memastikan musik diputar saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.log("Autoplay diblokir oleh browser. Silakan interaksi dengan halaman untuk memutar musik.");
    });
});