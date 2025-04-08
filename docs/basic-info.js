// Selección de elementos del DOM
const submitBtn = document.getElementById('submit-btn');
const ageInputs = document.querySelectorAll('input[name="age"]');
const genderInputs = document.querySelectorAll('input[name="gender"]');

// Habilitar/deshabilitar el botón de enviar
function updateSubmitButton() {
    const ageSelected = document.querySelector('input[name="age"]:checked');
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    
    submitBtn.disabled = !ageSelected || !genderSelected;
}

// Manejar la selección de edad y género
ageInputs.forEach(input => {
    input.addEventListener('change', updateSubmitButton);
});

genderInputs.forEach(input => {
    input.addEventListener('change', updateSubmitButton);
});

// Manejar el envío del formulario
submitBtn.addEventListener('click', () => {
    const age = document.querySelector('input[name="age"]:checked').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    // Guardar la información del usuario en localStorage
    localStorage.setItem('userAge', age);
    localStorage.setItem('userGender', gender);
    
    // Redirigir a la página de resultados
    window.location.href = 'results.html';
}); 