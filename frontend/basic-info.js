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
    
    // Obtener los síntomas seleccionados del localStorage
    const selectedSymptoms = JSON.parse(localStorage.getItem('selectedSymptoms') || '[]');
    
    // Crear el objeto con toda la información
    const diagnosticData = {
        symptoms: selectedSymptoms,
        age: age,
        gender: gender
    };
    
    // Aquí puedes enviar los datos al backend
    console.log('Datos del diagnóstico:', diagnosticData);
    
    // Limpiar el localStorage
    localStorage.removeItem('selectedSymptoms');
    
    // Redirigir a la página de resultados (a implementar)
    // window.location.href = 'results.html';
}); 