
        let currentSlide = 0;
        const track = document.getElementById('productTrack');
        const slides = document.querySelectorAll('.product-card');
        const totalSlides = slides.length;

        function moveSlide(direction) {
            currentSlide += direction;
            if (currentSlide >= totalSlides) currentSlide = 0;
            if (currentSlide < 0) currentSlide = totalSlides - 1;
            
            const offset = -currentSlide * 100;
            track.style.transform = `translateX(${offset}%)`;
        }

        // Fitur Swipe tetap aktif untuk pengalaman HP yang maksimal
        let touchStartX = 0;
        track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, {passive: true});
        track.addEventListener('touchend', e => {
            let touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) moveSlide(1);
            if (touchEndX - touchStartX > 50) moveSlide(-1);
        }, {passive: true});
    