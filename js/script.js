var button = document.querySelector('.button-write-window');
var modal = document.querySelector('#request-form');
var form = modal.querySelector('.request-text');
var closebutton = modal.querySelector('.button-close');
var nameInput = form.querySelector('#request-text-name');
var emailInput = form.querySelector('#request-text-email');
var messageInput = form.querySelector('#request-text-message');

try {
	nameStorage = localStorage.getItem('name');
	emailStorage = localStorage.getItem('email');
} catch (err) {
	isStorageSupport = false;
}

button.addEventListener ('click', function(evt) {
	evt.preventDefault();
    modal.classList.add('modal-show');
    
    if (nameStorage) {
    	nameInput.value = nameStorage;
    }

    if (emailStorage) {
    	emailInput.value = emailStorage;
    }

    if (!nameInput.value) {
    	nameInput.focus();
    } else if (!emailInput.value) {
    	emailInput.focus();
    } else {
        messageInput.focus();
    }
});

form.addEventListener('submit', function(e) {
	if (!nameInput.value) {
        e.preventDefault();
        modal.classList.remove("modal-error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal-error");
		nameInput.classList.add('invalid');
	}
	else {
		nameInput.classList.remove('invalid');
	}

	if (!emailInput.value) {
		e.preventDefault();
		emailInput.classList.add('invalid');
	}
	else {
		emailInput.classList.remove('invalid');
	}
});

function closeModal() {
    modal.classList.remove('modal-show');
    modal.classList.remove("modal-error");
	nameInput.classList.remove('invalid');
	emailInput.classList.remove('invalid');

	if (isStorageSupport) {
		localStorage.setItem('name', nameInput.value);
		localStorage.setItem('email', emailInput.value);
	}
};

closebutton.addEventListener('click', function(evt) {
	evt.preventDefault();
	closeModal();
});

window.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            if (modal.classList.contains("modal-show")) {
                evt.preventDefault();
                modal.classList.remove("modal-show");
                modal.classList.remove("modal-error");
            evt.preventDefault();
        }
    }
});