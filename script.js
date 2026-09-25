// 1. Primera sección de fotografías
const mainPhotos = [
    {
        url: "img/miapolerika.webp",
        date: "06 / 03 / 2026",
        note: "Toma de la foto de generación.",
        hasTape: true
    },
    {
        url: "img/fraccesar.webp",
        date: "01 / 08 / 2026",
        note: "-------------------------------------------------",
        hasTape: false
    },
    {
        url: "img/beer21.webp",
        date: "15 / 08 / 2026",
        note: "Adrian, Pau y yo.",
        hasTape: true
    },
    {
        url: "img/adrianpedo.webp",
        date: "15 / 08 / 2026",
        note: "-------------------------------------------------",
        hasTape: false
    },
    {
        url: "img/byepol.webp",
        date: "21 / 08 / 2026",
        note:"Despedida de pol.",
        hasTape: true
    },
    {
        url: "img/backrooms.webp",
        date: "11 / 06 / 2026",
        note: "-------------------------------------------------",
        hasTape: true
    },
    {
        url: "img/hugokarime.webp",
        date: "08 / 03 / 2026",
        note: "-------------------------------------------------",
        hasTape: false
    },
    {
        url: "img/lia.webp",
        date: "28 / 04 / 2024",
        note: "Lia.",
        hasTape: true
    },
    {
        url: "img/flipoff.webp",
        date: "22 / 04 / 2026",
        note: "Karime, Sara y Pol.",
        hasTape: false
    },
    {
        url: "img/keyla.webp",
        date: "28 / 01 / 2024",
        note: "Keyla.",
        hasTape: true
    },
    {
        url: "img/ogs.webp",
        date: "01 / 01 / 2026",
        note: "Alexis, Pau, Sebas y yo.",
        hasTape: false
    },
    {
        url: "img/brogs.webp",
        date: "28 / 01 / 2024",
        note: "Ringo y King.",
        hasTape: true
    },
    {
        url: "img/sallepachuca1.webp",
        date: "21 / 04 / 2026",
        note: "-------------------------------------------------",
        hasTape: true
    },
    {
        url: "img/reloj.webp",
        date: "23 / 04 / 2026",
        note: "La salle Pachuca",
        hasTape: false
    },
    {
        url: "img/sallepachuca4.webp",
        date: "21 / 04 / 2026",
        note: "-------------------------------------------------",
        hasTape: true
    },
    {
        url: "img/pachucagallo.webp",
        date: "23 / 04 / 2026",
        note: "Equipo de ajedrez.",
        hasTape: true
    },
    {
        url: "img/sallepachuca.webp",
        date: "21 / 04 / 2026",
        note: "Interprepas Pachuca.",
        hasTape: false
    },
    {
        url: "img/pachucateam.webp",
        date: "24 / 04 / 2026",
        note: "-------------------------------------------------",
        hasTape: true
    },
    {
        url: "img/huastecacove.webp",
        date: "20 / 06 / 2026",
        note: "-------------------------------------------------",
        hasTape: false
    },
    {
        url: "img/huasteca.webp",
        date: "20 / 06 / 2026",
        note: "Viaje a Huasteca Potosina.",
        hasTape: false
    },
    {
        url: "img/huastecario.webp",
        date: "20 / 06 / 2026",
        note: "-------------------------------------------------",
        hasTape: true
    }
];

// 2. Segunda sección: "Fotos que encontré en mi galería"
const galleryFoundPhotos = [
    {
        url: "img/random1.webp",
        date: "-------------------------------------------------",
        hasTape: false
    },
    {
        url: "img/random2.webp",
         date: "-------------------------------------------------",
        hasTape: true
    },
    {
        url: "img/random3.webp",
        date: "-------------------------------------------------",
        hasTape: false
    },
    {
        url: "img/random4.webp",
        date: "-------------------------------------------------",
        hasTape: true
    },
    {
        url: "img/random5.webp",
        date: "-------------------------------------------------",
        hasTape: false
    },
    {
        url: "img/random6.webp",
        date: "-------------------------------------------------",
        hasTape: true
    },
    {
        url: "img/random7.webp",
        date: "-------------------------------------------------",
        hasTape: false
    },
    {
        url: "img/random8.webp",
        date: "-------------------------------------------------",
        hasTape: true
    },
    {
        url: "img/random9.webp",
        date: "-------------------------------------------------",
        hasTape: false
    },
    {
        url: "img/random10.webp",
        date: "-------------------------------------------------",
        hasTape: true
    },
    {
        url: "img/random11.webp",
        date: "-------------------------------------------------",
        hasTape: false
    },
    {
        url: "img/random12.webp",
        date: "-------------------------------------------------",
        hasTape: true
    }
    
];

// Combinamos todas las fotos en un solo arreglo para la navegación del Lightbox
const allPhotos = [...mainPhotos, ...galleryFoundPhotos];
let currentIndex = 0;

// Referencias del DOM
const mainGalleryContainer = document.getElementById('gallery-main');
const secondaryGalleryContainer = document.getElementById('gallery-secondary');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxDate = document.getElementById('lightbox-date');
const lightboxText = document.getElementById('lightbox-text');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

// Función para renderizar fotos en un contenedor específico
function renderSection(photoList, container, globalOffset = 0) {
    if (!container) return;
    container.innerHTML = '';
    
    photoList.forEach((item, localIndex) => {
        const globalIndex = globalOffset + localIndex;
        const randomRotation = (Math.random() * 8 - 4).toFixed(1);
        
        const card = document.createElement('article');
        card.className = `polaroid-card ${item.hasTape ? 'has-tape' : ''}`;
        card.style.setProperty('--rotation', `${randomRotation}deg`);
        card.style.setProperty('--index', localIndex);

        card.innerHTML = `
            <div class="polaroid-image-wrapper">
                <img src="${item.url}" alt="Fotografía ${globalIndex + 1}" loading="lazy">
            </div>
            <div class="polaroid-details">
                <span class="polaroid-date">${item.date || ''}</span>
                ${item.note ? `<p class="polaroid-note">${item.note}</p>` : ''}
            </div>
            <span class="polaroid-number">#${String(globalIndex + 1).padStart(2, '0')}</span>
        `;

        card.addEventListener('click', () => openLightbox(globalIndex));
        container.appendChild(card);
    });
}

// Inicializar ambas secciones
function initGalleries() {
    renderSection(mainPhotos, mainGalleryContainer, 0);
    renderSection(galleryFoundPhotos, secondaryGalleryContainer, mainPhotos.length);
}

// Lógica de Lightbox
function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function updateLightboxContent() {
    const photo = allPhotos[currentIndex];
    lightboxImg.src = photo.url;
    lightboxDate.textContent = photo.date || '';
    lightboxText.textContent = photo.note || '';
    lightboxCounter.textContent = `${currentIndex + 1} / ${allPhotos.length}`;
}

function showPrev() {
    currentIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
    updateLightboxContent();
}

function showNext() {
    currentIndex = (currentIndex + 1) % allPhotos.length;
    updateLightboxContent();
}

// Event Listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrev);
lightboxNext.addEventListener('click', showNext);

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
});

document.addEventListener('DOMContentLoaded', initGalleries);