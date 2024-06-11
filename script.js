const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const icon = accordion.querySelector('.icon');
    const answer = accordion.querySelector('.answer');

    accordion.addEventListener('click', () => {
        accordions.forEach(a => {
            if (a !== accordion) {
                const otherIcon = a.querySelector('.icon');
                const otherAnswer = a.querySelector('.answer');
                otherIcon.classList.remove('active');
                otherAnswer.style.maxHeight = null;
                otherAnswer.classList.remove('open');
            }
        });

        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
            answer.classList.remove('open');
        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.classList.add('open');
        }
    });
});
