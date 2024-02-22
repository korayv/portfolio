
document.addEventListener("DOMContentLoaded", function () {
    // Function to dynamically change the content of the xp-container
    function degistir(message) {
        const xpContainer = document.getElementById('bunu-deistir');
        xpContainer.innerHTML = `<p>Yeni içerik buraya gelecek. Mesaj: ${message}</p>`;
    }

    // XP Medicurism'a tıklanınca
    document.getElementById('xp-medicurism').addEventListener('click', function () {
        degistir("XP Medicurism'a tıklandı.");
    });

    // XP Netsim'e tıklanınca
    document.getElementById('xp-netsim').addEventListener('click', function () {
        degistir("XP Netsim'e tıklandı.");
    });

    // XP Raspberrify'e tıklanınca
    document.getElementById('xp-rasp').addEventListener('click', function () {
        degistir("XP Raspberrify'e tıklandı.");
    });
});
