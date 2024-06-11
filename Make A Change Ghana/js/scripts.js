document.addEventListener('DOMContentLoaded', () => {
    // Modal Interactivity
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // FAQ Interactivity
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.style.maxHeight;
            
            faqQuestions.forEach(q => q.nextElementSibling.style.maxHeight = null); // Close all answers

            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + "px"; // Open the clicked answer
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Modal Interactivity
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const cards = document.querySelectorAll})


    document.addEventListener('DOMContentLoaded', () => {
        let slideIndex = 0;
        showSlides();
    
        function showSlides() {
            const testimonials = document.getElementsByClassName("testimonial");
            for (let i = 0; i < testimonials.length; i++) {
                testimonials[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > testimonials.length) {slideIndex = 1}    
            testimonials[slideIndex-1].style.display = "block";  
            setTimeout(showSlides, 5000); // Change image every 5 seconds
        }
    
        // Slideshow Controls
        document.querySelector('.prev').addEventListener('click', () => {
            slideIndex -= 2;
            showSlides();
        });
    
        document.querySelector('.next').addEventListener('click', () => {
            showSlides();
        });
    });
    
