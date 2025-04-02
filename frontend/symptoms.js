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
function saveSymptoms() {
    const selectedSymptoms = Array.from(document.querySelectorAll('input[name="symptom"]:checked'))
        .map(checkbox => checkbox.value);

    if (selectedSymptoms.length === 0) {
        showMessage('Por favor, selecciona al menos un síntoma', 'error');
        return;
    }

    localStorage.setItem('selectedSymptoms', JSON.stringify(selectedSymptoms));
    window.location.href = 'basic-info.html';
}

nextBtn.addEventListener('click', saveSymptoms); 