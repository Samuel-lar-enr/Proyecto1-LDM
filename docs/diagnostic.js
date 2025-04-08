// Selección de elementos del DOM
const form = document.getElementById('diagnostic-form');
const sections = document.querySelectorAll('.form-section');
const progressBar = document.getElementById('progress');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');

// Variables de estado
let currentSection = 0;
const totalSections = sections.length;

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    setupConditionalFields();
});

// Actualizar barra de progreso
function updateProgress() {
    const progress = ((currentSection + 1) / totalSections) * 100;
    progressBar.style.width = `${progress}%`;
}

// Mostrar/ocultar secciones
function showSection(index) {
    sections.forEach((section, i) => {
        section.style.display = i === index ? 'block' : 'none';
    });
    
    // Actualizar botones
    prevBtn.style.display = index === 0 ? 'none' : 'inline-flex';
    nextBtn.style.display = index === totalSections - 1 ? 'none' : 'inline-flex';
    submitBtn.style.display = index === totalSections - 1 ? 'inline-flex' : 'none';
    
    // Actualizar progreso
    updateProgress();
}

// Configurar campos condicionales
function setupConditionalFields() {
    // Condiciones preexistentes
    const preExistingRadios = document.querySelectorAll('input[name="pre-existing"]');
    const conditionsDetails = document.getElementById('conditions-details');
    
    preExistingRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            conditionsDetails.style.display = radio.value === 'yes' ? 'block' : 'none';
        });
    });
    
    // Medicamentos
    const medicationRadios = document.querySelectorAll('input[name="medications"]');
    const medicationsDetails = document.getElementById('medications-details');
    
    medicationRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            medicationsDetails.style.display = radio.value === 'yes' ? 'block' : 'none';
        });
    });
}

// Validar sección actual
function validateSection(section) {
    const inputs = section.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Navegación
prevBtn.addEventListener('click', () => {
    if (currentSection > 0) {
        currentSection--;
        showSection(currentSection);
    }
});

nextBtn.addEventListener('click', () => {
    if (validateSection(sections[currentSection])) {
        currentSection++;
        showSection(currentSection);
    } else {
        showMessage('Por favor, completa todos los campos requeridos', 'error');
    }
});

// Envío del formulario
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!validateSection(sections[currentSection])) {
        showMessage('Por favor, completa todos los campos requeridos', 'error');
        return;
    }
    
    // Mostrar indicador de carga
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
    
    try {
        // Recopilar datos del formulario
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Enviar datos al backend
        const response = await fetch('/api/diagnostic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('Error al procesar el diagnóstico');
        }
        
        const result = await response.json();
        
        // Redirigir a la página de resultados
        window.location.href = `results.html?id=${result.id}`;
    } catch (error) {
        showMessage('Error al procesar el diagnóstico. Por favor, intenta nuevamente.', 'error');
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Obtener Diagnóstico';
    }
});

// Función para mostrar mensajes
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    const container = document.querySelector('.diagnostic-container');
    container.insertBefore(messageDiv, container.firstChild);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Animaciones de transición
function animateTransition(direction) {
    const currentSection = sections[currentSection];
    const nextSection = sections[currentSection + (direction === 'next' ? 1 : -1)];
    
    currentSection.style.transform = `translateX(${direction === 'next' ? '-100%' : '100%'})`;
    nextSection.style.transform = 'translateX(0)';
    
    setTimeout(() => {
        currentSection.style.transform = 'translateX(0)';
        nextSection.style.transform = 'translateX(0)';
    }, 300);
} 