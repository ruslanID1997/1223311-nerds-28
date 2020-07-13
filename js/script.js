var button = document.querySelector('.button-write-window');
var modal = document.querySelector('#request-form');
var closebutton = modal.querySelector('.button-close');

var form = modal.querySelector('.request-text');
var nameInput = form.querySelector('#request-text-name');
var emailInput = form.querySelector('#request-text-email');
var messageInput = form.querySelector('#request-text-message');

var isStorageSupport = true;
var nameStorage = '';
var emailStorage = '';
var messageStorage = '';

try {
	nameStorage = localStorage.getItem('name');
	emailStorage = localStorage.getItem('email');
	messageStorage = localStorage.getItem('text');
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

form.addEventListener('submit', function(evt) {
	if (!nameInput.value) {
        evt.preventDefault();
		nameInput.classList.add('invalid');
	}
	else {
		nameInput.classList.remove('invalid');
	}

	if (!emailInput.value) {
		evt.preventDefault();
		emailInput.classList.add('invalid');
	}
	else {
		emailInput.classList.remove('invalid');
	}

	if (!messageInput.value) {
		evt.preventDefault();
		messageInput.classList.add('invalid');
	}
	else {
		messageInput.classList.remove('invalid');
	}
});

function closeModal() {
    modal.classList.remove('modal-show');
	nameInput.classList.remove('invalid');
	emailInput.classList.remove('invalid');
	messageInput.classList.remove('invalid');

	if (isStorageSupport) {
		localStorage.setItem('name', nameInput.value);
		localStorage.setItem('email', emailInput.value);
		localStorage.setItem('text', messageInput.value);
	}
};

closebutton.addEventListener('click', function(evt) {
	evt.preventDefault();
	closeModal();
});

window.addEventListener('keydown', function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			closeModal();
		}
});