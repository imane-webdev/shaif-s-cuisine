const menuList = document.getElementsByClassName('menu__nav')[0];
const toggleBtn = document.getElementsByClassName('menu__toggle')[0];


toggleBtn.addEventListener('click', () =>{
    menuList.classList.toggle('active');
});

///////////////INTERSECTION OBSERVER/////////////

const sliders = document.querySelectorAll(".slide-in");

const observeScroll= new IntersectionObserver(function(entries, observeScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
           return;
        } else {
            entry.target.classList.add("appear");
            observeScroll.unobserve(entry.target);
        }
    });
   
},{rootMargin:"-200px"});


sliders.forEach(slider => {
    observeScroll.observe(slider);
});


//FORM inputs ////////////////////
const contactForm = document.getElementById('contact__form');
const bookingForm = document.getElementById("booking__form");
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const tableType = document.getElementById('table-type');
const guestNumber = document.getElementById('guest-number');
const placement = document.getElementById('placement');
const reserveDate = document.getElementById('date');
const reserveTime = document.getElementById('time');



//booking inputs






contactForm.addEventListener('submit',(e)=> {
    if(contactForm.classList.contains("contact")){
    e.stopPropagation();
    e.preventDefault();
    checkInput();
    checkContactInput() 
    }
    else if(contactForm.classList.contains("booking")){
        e.stopPropagation();
        e.preventDefault();
        checkInput();
        checkbookingInput();
    }
});



function checkInput() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if(firstNameValue === ''){
        setErrorFor(firstName, 'First Name cannot be blank');
    } else {
        setSuccessFor(firstName);
    }
    if(lastNameValue === ''){
        setErrorFor(lastName, 'Last Name cannot be blank');
    } else {
        setSuccessFor(lastName)
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)){
        setErrorFor(email,'Email is not valid');
    }else {
        setSuccessFor(email);
    }

    if(messageValue === ''){
        setErrorFor(message, 'Message cannot be blank');
    } else {
        setSuccessFor(message);
    }
    

}
function checkContactInput() {

    const subjectValue = subject.value.trim();

    if(subjectValue === ''){
        setErrorFor(subject, 'Subject cannot be blank');
    } else {
        setSuccessFor(subject);
    }
}

function checkbookingInput() {
    const tableTypeValue = tableType.value.trim();
    const guestNumberValue = guestNumber.value.trim();
    const placementValue = placement.value.trim();
    const reserveDateValue = reserveDate.value.trim();
    const reserveTimeValue = reserveTime.value.trim();



    if(tableTypeValue === ''){
        setErrorFor(tableType, 'Table Type cannot be blank');
    } else {
        setSuccessFor(tableType);
    }

    if(guestNumberValue === ''){
        setErrorFor(guestNumber, 'Guest Number cannot be blank');
    } else {
        setSuccessFor(guestNumber);
    }

    if(placementValue === ''){
        setErrorFor(placement, 'Placement cannot be blank');
    } else {
        setSuccessFor(placement);
    }

    if(reserveDateValue === ''){
        setErrorFor(reserveDate, 'Reservation Date cannot be blank');
    } else {
        setSuccessFor(reserveDate);
    }

    
    if(reserveTimeValue === ''){
        setErrorFor(reserveTime, 'Reservation Time cannot be blank');
    } else {
        setSuccessFor(reserveTime);
    }
}

function setErrorFor(input, message) {
    const contactElement= input.parentElement;
    const small = contactElement.querySelector('small');

    small.innerText = message;
    contactElement.classList.add('error');
}

function setSuccessFor(input){
    const contactElement= input.parentElement;
    contactElement.classList.remove('error')
    contactElement.classList.add('success');
}

function isEmail(email) { 
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
}

