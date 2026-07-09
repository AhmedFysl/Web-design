let handleError = (ele, msg = "") => {
    ele.nextElementSibling.innerText = msg
}

let nameValidation = (input) => {
    let inputValue = input.value.trim()
    if (inputValue.length === 0) {
        handleError(input, "The field is required.")
        return false
    }
    else if (inputValue.length < 3) {
        handleError(input, "at least 3 character")
        return false
    }
    else {
        handleError(input)
        return true
    }
}

let emailValidation = (input) => {
    let inputValue = input.value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputValue.length === 0) {
        handleError(input, "The field is required.")
        return false
    }
    else if (!emailRegex.test(inputValue)) {
        handleError(input, "please enter a valid email")
        return false
    }
    else {
        handleError(input)
        return true
    }
}

let subjectValidation = (input) => {
    let inputValue = input.value.trim()
    if (inputValue.length === 0) {
        handleError(input, "The field is required.")
        return false
    }
    else {
        handleError(input)
        return true
    }
}

let contactForm = document.getElementById('contactForm')

if (contactForm) {
    let nameInput = document.getElementById('contactName')
    let emailInput = document.getElementById('contactEmail')
    let subjectInput = document.getElementById('contactSubject')
    let formAlert = document.getElementById('formAlert')

    contactForm.addEventListener('input', (e) => {
        if (e.target.id === 'contactName') nameValidation(e.target)
        else if (e.target.id === 'contactEmail') emailValidation(e.target)
        else if (e.target.id === 'contactSubject') subjectValidation(e.target)
    })

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault()

        let isNameValid = nameValidation(nameInput)
        let isEmailValid = emailValidation(emailInput)
        let isSubjectValid = subjectValidation(subjectInput)

        if (isNameValid && isEmailValid && isSubjectValid) {
            formAlert.classList.remove('show')
            contactForm.reset()
        }
        else {
            formAlert.classList.add('show')
        }
    })
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