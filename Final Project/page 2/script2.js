let handleCategory = (type, btn) => {

    let category1 = document.querySelectorAll("[data-category='category1']");
    let category2 = document.querySelectorAll("[data-category='category2']");
    let catButtons = document.querySelectorAll("[data-cat-btn]");

    if (type === "category1") {

        for (let i = 0; i < category1.length; i++) {
            category1[i].classList.remove("d-none");
        }

        for (let i = 0; i < category2.length; i++) {
            category2[i].classList.add("d-none");
        }

    } else {

        for (let i = 0; i < category1.length; i++) {
            category1[i].classList.add("d-none");
        }

        for (let i = 0; i < category2.length; i++) {
            category2[i].classList.remove("d-none");
        }

    }

    catButtons.forEach(b => b.classList.remove("active"));
    if (btn) {
        btn.classList.add("active");
    }
}
const upBtn = document.getElementById('up');

if (upBtn) {
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 300) {
            upBtn.classList.remove('none');
        } else {
            upBtn.classList.add('none');
        }
    });

    upBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}