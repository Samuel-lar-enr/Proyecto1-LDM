// Selección de elementos del DOM
const nextBtn = document.getElementById('next-btn');
const symptomTags = document.querySelectorAll('.symptom-tag input[type="checkbox"]');

// Habilitar/deshabilitar el botón de continuar
function updateNextButton() {
    const selectedSymptoms = document.querySelectorAll('.symptom-tag input[type="checkbox"]:checked');
    nextBtn.disabled = selectedSymptoms.length === 0;
}

// Manejar la selección de síntomas
symptomTags.forEach(tag => {
    tag.addEventListener('change', updateNextButton);
});

// Manejar el clic en el botón de continuar
nextBtn.addEventListener('click', () => {
    const selectedSymptoms = Array.from(document.querySelectorAll('.symptom-tag input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    
    // Guardar los síntomas seleccionados en el localStorage
    localStorage.setItem('selectedSymptoms', JSON.stringify(selectedSymptoms));
    
    // Redirigir a la página de información básica
    window.location.href = 'basic-info.html';
}); 