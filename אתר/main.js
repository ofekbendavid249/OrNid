
document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let reviewText = document.getElementById("review-text").value;
    let rating = document.getElementById("rating").value;
    
    if (reviewText.trim() !== "") {
        let reviewDiv = document.createElement("div");
        reviewDiv.classList.add("review");
        reviewDiv.innerHTML = `<p>"${reviewText}" ${'⭐'.repeat(rating)}</p>`;
        
        document.getElementById("reviews-list").appendChild(reviewDiv);
        
        document.getElementById("review-form").reset();
    }
});
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
    // Scroll-to-top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    // Gallery modal functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
        img.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                modal.style.display = 'block';
                modalImg.src = img.src;
            }
        });
    });
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    // Form validation
    const form = document.querySelector('.floating-form form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullname = document.getElementById('fullname');
        const phone = document.getElementById('phone');
        const email = document.getElementById('email');
        if (!fullname.value || !phone.value || !email.value) {
            alert('אנא מלא את כל השדות החיוניים.');
            return;
        }
        alert('הטופס נשלח בהצלחה!');
        form.reset();
    });
    // Accessibility: focus management for modal
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
    // Language toggle (Hebrew/English)
    const languageToggle = document.createElement('button');
    languageToggle.id = 'languageToggle';
    languageToggle.innerText = 'EN/HE';
    languageToggle.style.position = 'fixed';
    languageToggle.style.top = '130px';
    languageToggle.style.right = '20px';
    languageToggle.style.background = '#4a90e2';
    languageToggle.style.color = '#fff';
    languageToggle.style.padding = '10px 15px';
    languageToggle.style.border = 'none';
    languageToggle.style.borderRadius = '5px';
    languageToggle.style.cursor = 'pointer';
    languageToggle.addEventListener('click', () => {
        document.documentElement.lang = document.documentElement.lang === 'he' ? 'en' : 'he';
        alert('שפת האתר הוחלפה ל' + (document.documentElement.lang === 'he' ? 'עברית' : 'אנגלית'));
    });
    document.body.appendChild(languageToggle);
    // Hamburger menu functionality for mobile
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('nav ul');
    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });