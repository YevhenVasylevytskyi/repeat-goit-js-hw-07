import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainer = document.querySelector('.gallery')

const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener('click', onImageClick)

function createGalleryItems(gallery) {

    return gallery
        .map(({ preview, original, description }) => {       
            return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>
            `;        
        })
    .join('');
}

function onImageClick(evt) {
    evt.preventDefault();
    const originalImg = evt.target.dataset.source

    if (evt.target.nodeName !== 'IMG') {        
    return;
    }

    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${originalImg}">
	`);

    instance.show();

    galleryContainer.addEventListener('keydown', (evt) => {
        if (evt.code === "Escape") {
            instance.close()
        }
    })
}