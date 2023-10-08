import { galleryItems } from "./gallery-items.js";
const imgContainer = document.querySelector(".gallery");
const imgMarkup = createMarkup(galleryItems);
imgContainer.insertAdjacentHTML("beforeend", imgMarkup);
imgContainer.addEventListener("click", OpenModal);

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<div class="gallery">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`;
    })
    .join("");
}

const instance = basicLightbox.create(`<img src="" />`, {
  onShow: () => {
    document.addEventListener("keydown", escImgCard);
  },
  onClose: () => {
    document.removeEventListener("keydown", escImgCard);
  },
});

function escImgCard(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
}

function OpenModal(evt) {
  evt.preventDefault();
  instance.element().querySelector("img").src = evt.target.dataset.source;
  instance.show();
}
// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
