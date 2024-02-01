const formConosco = document.querySelector('.form-fale-conosco');
const mascaraForm = document.querySelector('.mascara-formulario');

function handleClick() {
  formConosco.style.left = '25%';
  formConosco.style.transform = 'translateX(-48%);';
  mascaraForm.style.visibility = 'visible';
}

function esconderForm() {
  formConosco.style.left = '-236px';
  formConosco.style.transform = 'translateX(0);';
  mascaraForm.style.visibility = 'hidden';
}
