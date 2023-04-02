import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const renderIt = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
<a href="${item.original}" 
class="gallery__link">
<img class="gallery__image" 
src="${item.preview}" 
data-source="${item.original}"
alt="${item.description}">
<figcaption style="display: none">${item.description}</figcaption>
</a>
</div>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", renderIt);

let lightbox = new SimpleLightbox('.gallery a', {
	spinner: true,
	enableKeyboard: true,
	captionsData: "alt",
	captionDelay: 250,
});

lightbox.on((e)=>	e.preventDefault());