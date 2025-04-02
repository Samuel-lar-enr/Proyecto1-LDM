// Lista completa de síntomas
const symptoms = [
    // Síntomas generales
    "fiebre", "fatiga", "perdida_apetito", "perdida_peso", "sudoracion_nocturna",
    "escalofrios", "dolor_muscular", "dolor_articular", "inflamacion_ganglios",
    
    // Síntomas respiratorios
    "tos", "dificultad_respirar", "dolor_pecho", "flema", "sangre_flema",
    "congestion_nasal", "dolor_garganta", "ronquera", "estornudos",
    
    // Síntomas digestivos
    "nauseas", "vomitos", "diarrea", "dolor_abdominal", "hinchazon_abdominal",
    "acidez", "indigestion", "estreñimiento", "sangre_heces", "ictericia",
    
    // Síntomas neurológicos
    "dolor_cabeza", "mareos", "desmayos", "convulsiones", "confusion",
    "dificultad_concentracion", "problemas_memoria", "temblores", "debilidad_muscular",
    
    // Síntomas cardiovasculares
    "palpitaciones", "dolor_pecho", "presion_alta", "presion_baja", "edema",
    "varices", "dolor_piernas", "entumecimiento_extremidades",
    
    // Síntomas dermatológicos
    "erupcion_cutanea", "picazon", "urticaria", "ampollas", "descamacion",
    "cambios_color_piel", "ulceras", "moretones", "sangrado_facil",
    
    // Síntomas oculares
    "vision_borrosa", "dolor_ojos", "enrojecimiento_ojos", "sensibilidad_luz",
    "lagrimeo", "secrecion_ocular", "doble_vision",
    
    // Síntomas auditivos
    "dolor_oidos", "zumbido_oidos", "perdida_audicion", "secrecion_auditiva",
    
    // Síntomas bucales
    "dolor_dientes", "sangrado_encías", "ulceras_bucales", "boca_seca",
    "mal_aliento", "dificultad_tragar",
    
    // Síntomas urinarios
    "dolor_orinar", "frecuencia_orinar", "sangre_orina", "incontinencia",
    "retencion_urinaria", "dolor_lumbar"
];

// Base de datos de enfermedades
const diseases = [
    // Enfermedades respiratorias
    {
        name: "Gripe",
        scientific: "Influenza",
        symptoms: ["fiebre", "dolor_cabeza", "tos", "fatiga", "dolor_muscular", "dolor_garganta", "congestion_nasal"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18", "18_30", "31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "COVID-19",
        scientific: "SARS-CoV-2",
        symptoms: ["fiebre", "tos", "fatiga", "dolor_muscular", "dolor_garganta", "dificultad_respirar", "perdida_apetito"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18", "18_30", "31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Bronquitis",
        scientific: "Bronchitis",
        symptoms: ["tos", "dificultad_respirar", "fatiga", "dolor_pecho", "flema"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["18_30", "31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Neumonía",
        scientific: "Pneumonia",
        symptoms: ["fiebre", "tos", "dificultad_respirar", "dolor_pecho", "fatiga", "flema", "escalofrios"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18", "18_30", "31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Asma",
        scientific: "Asthma",
        symptoms: ["dificultad_respirar", "tos", "dolor_pecho", "sibilancias"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18", "18_30", "31_50", "51_70"]
        }
    },

    // Enfermedades digestivas
    {
        name: "Gastroenteritis",
        scientific: "Gastroenteritis viral",
        symptoms: ["nauseas", "vomitos", "diarrea", "dolor_abdominal", "perdida_apetito"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18", "18_30", "31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Úlcera Péptica",
        scientific: "Peptic ulcer",
        symptoms: ["dolor_abdominal", "acidez", "nauseas", "perdida_apetito", "vomitos"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["18_30", "31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Enfermedad de Crohn",
        scientific: "Crohn's disease",
        symptoms: ["dolor_abdominal", "diarrea", "perdida_peso", "fatiga", "sangre_heces"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["18_30", "31_50", "51_70"]
        }
    },
    {
        name: "Hepatitis",
        scientific: "Hepatitis",
        symptoms: ["ictericia", "fatiga", "nauseas", "perdida_apetito", "dolor_abdominal"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["18_30", "31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Síndrome del Intestino Irritable",
        scientific: "Irritable Bowel Syndrome",
        symptoms: ["dolor_abdominal", "diarrea", "estreñimiento", "hinchazon_abdominal"],
        demographics: {
            gender: ["femenino"],
            age: ["18_30", "31_50", "51_70"]
        }
    },

    // Enfermedades neurológicas
    {
        name: "Migraña",
        scientific: "Migraine",
        symptoms: ["dolor_cabeza", "nauseas", "sensibilidad_luz", "vision_borrosa"],
        demographics: {
            gender: ["femenino"],
            age: ["18_30", "31_50", "51_70"]
        }
    },
    {
        name: "Epilepsia",
        scientific: "Epilepsy",
        symptoms: ["convulsiones", "confusion", "perdida_conciencia", "temblores"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18", "18_30", "31_50", "51_70"]
        }
    },
    {
        name: "Esclerosis Múltiple",
        scientific: "Multiple Sclerosis",
        symptoms: ["debilidad_muscular", "entumecimiento_extremidades", "problemas_vision", "fatiga"],
        demographics: {
            gender: ["femenino"],
            age: ["18_30", "31_50", "51_70"]
        }
    },
    {
        name: "Alzhéimer",
        scientific: "Alzheimer's disease",
        symptoms: ["problemas_memoria", "confusion", "dificultad_concentracion", "cambios_personalidad"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["51_70", "mas_70"]
        }
    },
    {
        name: "Parkinson",
        scientific: "Parkinson's disease",
        symptoms: ["temblores", "rigidez_muscular", "problemas_equilibrio", "movimientos_lentos"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["51_70", "mas_70"]
        }
    },

    // Enfermedades cardiovasculares
    {
        name: "Hipertensión",
        scientific: "Hypertension",
        symptoms: ["presion_alta", "dolor_cabeza", "mareos", "palpitaciones"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Infarto de Miocardio",
        scientific: "Myocardial infarction",
        symptoms: ["dolor_pecho", "dificultad_respirar", "nauseas", "sudoracion", "dolor_brazo_izquierdo"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Insuficiencia Cardíaca",
        scientific: "Heart failure",
        symptoms: ["dificultad_respirar", "fatiga", "edema", "palpitaciones"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["51_70", "mas_70"]
        }
    },
    {
        name: "Arritmia",
        scientific: "Arrhythmia",
        symptoms: ["palpitaciones", "mareos", "dolor_pecho", "fatiga"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["18_30", "31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Enfermedad Arterial Periférica",
        scientific: "Peripheral artery disease",
        symptoms: ["dolor_piernas", "entumecimiento_extremidades", "calambres", "debilidad_muscular"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["51_70", "mas_70"]
        }
    },

    // Enfermedades dermatológicas
    {
        name: "Dermatitis Atópica",
        scientific: "Atopic dermatitis",
        symptoms: ["erupcion_cutanea", "picazon", "descamacion", "inflamacion_piel"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18", "18_30", "31_50"]
        }
    },
    {
        name: "Psoriasis",
        scientific: "Psoriasis",
        symptoms: ["erupcion_cutanea", "descamacion", "picazon", "inflamacion_piel"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["18_30", "31_50", "51_70"]
        }
    },
    {
        name: "Acné",
        scientific: "Acne",
        symptoms: ["erupcion_cutanea", "inflamacion_piel", "secrecion_piel"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18", "18_30"]
        }
    },
    {
        name: "Herpes Zóster",
        scientific: "Shingles",
        symptoms: ["erupcion_cutanea", "dolor", "picazon", "ampollas"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["51_70", "mas_70"]
        }
    },
    {
        name: "Lupus",
        scientific: "Systemic lupus erythematosus",
        symptoms: ["erupcion_cutanea", "dolor_articular", "fatiga", "fiebre"],
        demographics: {
            gender: ["femenino"],
            age: ["18_30", "31_50", "51_70"]
        }
    },

    // Enfermedades endocrinas
    {
        name: "Diabetes Tipo 1",
        scientific: "Type 1 diabetes",
        symptoms: ["sed_excesiva", "miccion_frecuente", "perdida_peso", "fatiga"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18", "18_30", "31_50"]
        }
    },
    {
        name: "Diabetes Tipo 2",
        scientific: "Type 2 diabetes",
        symptoms: ["sed_excesiva", "miccion_frecuente", "fatiga", "vision_borrosa"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Hipotiroidismo",
        scientific: "Hypothyroidism",
        symptoms: ["fatiga", "perdida_peso", "depresion", "sensibilidad_frio"],
        demographics: {
            gender: ["femenino"],
            age: ["18_30", "31_50", "51_70"]
        }
    },
    {
        name: "Hipertiroidismo",
        scientific: "Hyperthyroidism",
        symptoms: ["perdida_peso", "palpitaciones", "ansiedad", "sudoracion_excesiva"],
        demographics: {
            gender: ["femenino"],
            age: ["18_30", "31_50", "51_70"]
        }
    },
    {
        name: "Síndrome de Cushing",
        scientific: "Cushing's syndrome",
        symptoms: ["aumento_peso", "presion_alta", "debilidad_muscular", "cambios_piel"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["31_50", "51_70"]
        }
    },

    // Enfermedades reumáticas
    {
        name: "Artritis Reumatoide",
        scientific: "Rheumatoid arthritis",
        symptoms: ["dolor_articular", "inflamacion_articular", "rigidez_muscular", "fatiga"],
        demographics: {
            gender: ["femenino"],
            age: ["31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Osteoartritis",
        scientific: "Osteoarthritis",
        symptoms: ["dolor_articular", "rigidez_muscular", "inflamacion_articular"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["51_70", "mas_70"]
        }
    },
    {
        name: "Gota",
        scientific: "Gout",
        symptoms: ["dolor_articular", "inflamacion_articular", "enrojecimiento_articular"],
        demographics: {
            gender: ["masculino"],
            age: ["31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Fibromialgia",
        scientific: "Fibromyalgia",
        symptoms: ["dolor_muscular", "fatiga", "problemas_sueno", "sensibilidad_dolor"],
        demographics: {
            gender: ["femenino"],
            age: ["31_50", "51_70"]
        }
    },
    {
        name: "Espondilitis Anquilosante",
        scientific: "Ankylosing spondylitis",
        symptoms: ["dolor_espalda", "rigidez_muscular", "inflamacion_articular", "fatiga"],
        demographics: {
            gender: ["masculino"],
            age: ["18_30", "31_50"]
        }
    },

    // Enfermedades infecciosas
    {
        name: "Tuberculosis",
        scientific: "Tuberculosis",
        symptoms: ["tos", "perdida_peso", "sudoracion_nocturna", "fatiga", "flema"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["18_30", "31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Mononucleosis",
        scientific: "Mononucleosis",
        symptoms: ["fatiga", "dolor_garganta", "inflamacion_ganglios", "fiebre"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18", "18_30"]
        }
    },
    {
        name: "Herpes",
        scientific: "Herpes simplex",
        symptoms: ["ampollas", "dolor", "picazon", "inflamacion"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["18_30", "31_50"]
        }
    },
    {
        name: "Varicela",
        scientific: "Chickenpox",
        symptoms: ["erupcion_cutanea", "picazon", "fiebre", "fatiga"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18"]
        }
    },
    {
        name: "Sífilis",
        scientific: "Syphilis",
        symptoms: ["erupcion_cutanea", "ulceras", "inflamacion_ganglios", "fiebre"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["18_30", "31_50"]
        }
    },

    // Enfermedades oculares
    {
        name: "Glaucoma",
        scientific: "Glaucoma",
        symptoms: ["vision_borrosa", "dolor_ojos", "perdida_vision", "nauseas"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["51_70", "mas_70"]
        }
    },
    {
        name: "Cataratas",
        scientific: "Cataracts",
        symptoms: ["vision_borrosa", "sensibilidad_luz", "dificultad_vision_nocturna"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["51_70", "mas_70"]
        }
    },
    {
        name: "Conjuntivitis",
        scientific: "Conjunctivitis",
        symptoms: ["enrojecimiento_ojos", "picazon", "secrecion_ocular", "sensibilidad_luz"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18", "18_30", "31_50", "51_70"]
        }
    },
    {
        name: "Degeneración Macular",
        scientific: "Macular degeneration",
        symptoms: ["vision_borrosa", "perdida_vision_central", "dificultad_leer"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["51_70", "mas_70"]
        }
    },
    {
        name: "Retinopatía Diabética",
        scientific: "Diabetic retinopathy",
        symptoms: ["vision_borrosa", "perdida_vision", "moscas_volantes"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["31_50", "51_70", "mas_70"]
        }
    },

    // Enfermedades auditivas
    {
        name: "Otitis Media",
        scientific: "Otitis media",
        symptoms: ["dolor_oidos", "perdida_audicion", "fiebre", "secrecion_auditiva"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18"]
        }
    },
    {
        name: "Tinnitus",
        scientific: "Tinnitus",
        symptoms: ["zumbido_oidos", "perdida_audicion", "dolor_oidos"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Enfermedad de Menière",
        scientific: "Meniere's disease",
        symptoms: ["mareos", "zumbido_oidos", "perdida_audicion", "nauseas"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["31_50", "51_70"]
        }
    },
    {
        name: "Presbiacusia",
        scientific: "Presbycusis",
        symptoms: ["perdida_audicion", "dificultad_escuchar", "zumbido_oidos"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["51_70", "mas_70"]
        }
    },
    {
        name: "Otosclerosis",
        scientific: "Otosclerosis",
        symptoms: ["perdida_audicion", "zumbido_oidos", "mareos"],
        demographics: {
            gender: ["femenino"],
            age: ["18_30", "31_50"]
        }
    },

    // Enfermedades bucales
    {
        name: "Caries",
        scientific: "Dental caries",
        symptoms: ["dolor_dientes", "sensibilidad_dental", "mal_aliento"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18", "18_30", "31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Gingivitis",
        scientific: "Gingivitis",
        symptoms: ["sangrado_encías", "inflamacion_encías", "mal_aliento"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["18_30", "31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Aftas",
        scientific: "Aphthous ulcers",
        symptoms: ["ulceras_bucales", "dolor_boca", "dificultad_tragar"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18", "18_30", "31_50"]
        }
    },
    {
        name: "Xerostomía",
        scientific: "Xerostomia",
        symptoms: ["boca_seca", "dificultad_tragar", "mal_aliento"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["51_70", "mas_70"]
        }
    },
    {
        name: "Candidiasis Oral",
        scientific: "Oral thrush",
        symptoms: ["manchas_blancas_boca", "dolor_boca", "dificultad_tragar"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["menos_18", "51_70", "mas_70"]
        }
    },

    // Enfermedades urinarias
    {
        name: "Infección Urinaria",
        scientific: "Urinary tract infection",
        symptoms: ["dolor_orinar", "frecuencia_orinar", "sangre_orina", "dolor_abdominal"],
        demographics: {
            gender: ["femenino"],
            age: ["18_30", "31_50", "51_70", "mas_70"]
        }
    },
    {
        name: "Cálculos Renales",
        scientific: "Kidney stones",
        symptoms: ["dolor_abdominal", "dolor_orinar", "sangre_orina", "nauseas"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["18_30", "31_50", "51_70"]
        }
    },
    {
        name: "Incontinencia Urinaria",
        scientific: "Urinary incontinence",
        symptoms: ["incontinencia", "frecuencia_orinar", "urgencia_orinar"],
        demographics: {
            gender: ["femenino"],
            age: ["51_70", "mas_70"]
        }
    },
    {
        name: "Prostatitis",
        scientific: "Prostatitis",
        symptoms: ["dolor_orinar", "dificultad_orinar", "dolor_pelvis"],
        demographics: {
            gender: ["masculino"],
            age: ["31_50", "51_70"]
        }
    },
    {
        name: "Insuficiencia Renal",
        scientific: "Kidney failure",
        symptoms: ["fatiga", "nauseas", "hinchazon", "cambios_orina"],
        demographics: {
            gender: ["masculino", "femenino"],
            age: ["51_70", "mas_70"]
        }
    }
];

// Obtener datos del localStorage
const selectedSymptoms = JSON.parse(localStorage.getItem('selectedSymptoms') || '[]');
const userAge = localStorage.getItem('userAge');
const userGender = localStorage.getItem('userGender');

// Función para calcular la relevancia de una enfermedad
function calculateRelevance(disease) {
    let relevance = 0;
    
    // Contar síntomas coincidentes
    const matchingSymptoms = disease.symptoms.filter(symptom => 
        selectedSymptoms.includes(symptom)
    );
    relevance += matchingSymptoms.length * 2;
    
    // Verificar si la edad y género del usuario son compatibles
    if (disease.demographics.age.includes(userAge)) {
        relevance += 1;
    }
    if (disease.demographics.gender.includes(userGender)) {
        relevance += 1;
    }
    
    return relevance;
}

// Ordenar enfermedades por relevancia
const sortedDiseases = diseases
    .map(disease => ({
        ...disease,
        relevance: calculateRelevance(disease)
    }))
    .sort((a, b) => b.relevance - a.relevance);

// Función para crear una tarjeta de enfermedad
function createDiseaseCard(disease) {
    const matchingSymptoms = disease.symptoms.filter(symptom => 
        selectedSymptoms.includes(symptom)
    );
    
    const matchPercentage = Math.round((matchingSymptoms.length / selectedSymptoms.length) * 100);
    
    return `
        <div class="disease-card">
            <div class="disease-match">
                <i class="fas fa-percentage"></i>
                Coincidencia: ${matchPercentage}%
            </div>
            <div class="disease-title">
                <h2 class="disease-name">${disease.name}</h2>
                <p class="disease-scientific">${disease.scientific}</p>
            </div>
            
            <div class="disease-section">
                <h3><i class="fas fa-list"></i> Síntomas</h3>
                <div class="symptoms-list">
                    ${disease.symptoms.map(symptom => `
                        <span class="symptom-item ${matchingSymptoms.includes(symptom) ? 'matched' : ''}">
                            ${symptom.replace('_', ' ')}
                        </span>
                    `).join('')}
                </div>
            </div>
            
            <div class="disease-section">
                <h3><i class="fas fa-users"></i> Demografía</h3>
                <div class="demographics-list">
                    <span class="demographic-item">
                        <i class="fas fa-venus-mars"></i>
                        ${disease.demographics.gender.join(', ')}
                    </span>
                    <span class="demographic-item">
                        <i class="fas fa-birthday-cake"></i>
                        ${disease.demographics.age.map(age => {
                            switch(age) {
                                case 'menos_18': return 'Menos de 18';
                                case '18_30': return '18-30';
                                case '31_50': return '31-50';
                                case '51_70': return '51-70';
                                case 'mas_70': return 'Más de 70';
                                default: return age;
                            }
                        }).join(', ')}
                    </span>
                </div>
            </div>
        </div>
    `;
}

// Renderizar resultados
const resultsGrid = document.querySelector('.results-grid');
resultsGrid.innerHTML = sortedDiseases
    .map(disease => createDiseaseCard(disease))
    .join('');

// Manejar la impresión
const printButton = document.querySelector('.print-button');
printButton.addEventListener('click', () => {
    window.print();
}); 