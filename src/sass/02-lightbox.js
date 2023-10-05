import { galleryItems } from './gallery-items.js';
// Change code below this line
const imgsContainer = document.querySelector('.gallery');
const imgsMarkup = greateImgsMarkup(galleryItems);
imgsContainer.insertAdjacentHTML('beforeend', imgsMarkup);

function greateImgsMarkup(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
    })
    .join('');
}
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
