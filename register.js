const form = document.querySelector('form');
const avatarInput = document.getElementById('avatar');
const inputNom = document.querySelector('.js-name');
const inputPrenom = document.querySelector('.js-prenom');

const inputEmail = document.querySelector('.js-email');

const inputTel = document.querySelector('.js-numero');

const inputPassword = document.querySelector('.js-mdp');

const confirmPassword = document.querySelector('.js-pwd-cf');

// fuction pour prendre l'image de profile

const profileTitle = document.querySelector('.js-image-title');
function getProfilUser() {

	avatarInput.addEventListener('change', (event) => {
		const file = event.target.files[0];
		const img = document.querySelector('.js-image-upload');
		img.src = URL.createObjectURL(file);
		profileTitle.textContent = 'Votre profile';
		profileTitle.style.color = '#2EB872';
	});
}
getProfilUser();

const allInputs = document.querySelectorAll('.fields-input input');
allInputs.forEach((input) => {
	input.addEventListener('focus', () => {
		if (input) {
			input.style.border = '2px solid #2EB872';
		} else {
			input.style.border = '2px solid #362FD9';
		}
	});
});

const eyePasseWord = document.querySelector('.js-eye-icon');

inputPassword.type = 'password';
eyePasseWord.addEventListener('click', () => {
	inputPassword.type = inputPassword.type === 'password' ? 'text' : 'password';
});

const allIconSvg = document.querySelectorAll('.fields-input svg');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const erroNom = document.querySelector('.js-nom-error');
	if (inputNom.value.trim() == '') {
		erroNom.style.color = '#B31312';
		erroNom.textContent = "Veillez entrer votre nom s'il vous plait 🙏🏻";
		inputNom.style.border = '2px solid #B31312';
		allIconSvg[0].style.color = '#B31312';
	} else {
		erroNom.style.display = 'none';
		inputNom.style.border = '2px solid #2EB872';
		allIconSvg[0].style.color = '#2EB872';
	}
	const errorPrenom = document.querySelector('.js-error-prenom');
	if (inputPrenom.value.trim() == '') {
		errorPrenom.style.color = '#B31312';
		errorPrenom.textContent = "Veillez entrer votre prenom s'il vous plait 🙏🏻";
		inputPrenom.style.border = '2px solid #B31312';
		allIconSvg[1].style.color = '#B31312';
	} else {
		errorPrenom.style.display = 'none';
		inputPrenom.style.border = '2px solid #2EB872';
		allIconSvg[1].style.color = '#2eb872';
	}
	const regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$');
	const errorEmail = document.querySelector('.js-error-email');

	if (!regex.test(inputEmail.value)) {
		errorEmail.style.color = '#b31312';
		errorEmail.textContent = 'Veillez entrer une address e-mail valide !';
		inputEmail.style.border = '2px solid #b31312';
		allIconSvg[2].style.color = '#B31312';
	} else {
		errorEmail.style.display = 'none';
		inputEmail.style.border = '2px solid #2EB872';
		allIconSvg[2].style.color = '#2eb872';
	}

	const errorTel = document.querySelector('.js-error-tel');

	if (inputTel.value == '' && inputTel.value !== Number()) {
		errorTel.style.color = '#b31312';
		errorTel.textContent = 'Veillez entrer un numero de telephone !';
		inputTel.style.border = '2px solid #b31312';
		allIconSvg[3].style.color = '#B31312';
	} else {
		errorTel.style.display = 'none';
		inputTel.style.border = '2px solid #2EB872';
		allIconSvg[3].style.color = '#2eb872';
	}

  const errpwd = document.querySelector('.js-error-pwd');

  if(inputPassword.value =='' && inputPassword.value.length < 6) {
    errpwd.style.color = '#b31312';
		errpwd.textContent = 'Veillez entrer un mot de passe !';
		inputPassword.style.border = '2px solid #b31312';
		allIconSvg[4].style.color = '#B31312';
  }else{
    errpwd.style.display = 'none';
		inputPassword.style.border = '2px solid #2EB872';
		allIconSvg[4].style.color = '#2eb872';
  }

  const errPwdConfirm = document.querySelector('.js-pwd-confirm');
  if (confirmPassword.value !== inputPassword.value) {
    errPwdConfirm.textContent='Vous avez saisir un mot de passe diff...'
    errPwdConfirm.style.color= '#b31312';
    confirmPassword.style.border = '2px solid #b31312';
  }else if(confirmPassword.value === ''){
    errPwdConfirm.style.display ='none'
    errPwdConfirm.style.color= '#b31312';
    confirmPassword.style.border = '2px solid #b31312';
  }else{
    errPwdConfirm.style.color= '#b31312';
    confirmPassword.style.border = '2px solid #2EB872';
  }

  if(avatarInput.files.length > 0){
    
  }else{
		profileTitle.style.color = '#b31312';
    profileTitle.textContent = 'Oups profile';
  }
});
