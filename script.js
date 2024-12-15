document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Jika card sudah memiliki kelas 'active', hapus kelas tersebut
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                // Jika tidak, tambahkan kelas 'active'
                this.classList.add('active');
            }
        });
    });
});
