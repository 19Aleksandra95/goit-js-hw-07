import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const galleryList = document.querySelector('.gallery');

const markupList = galleryItems
.map(img => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${img.original}">
      <img
        class="gallery__image"
        src= "${img.preview}"
        data-source="${img.original}"
        alt="${img.description}"
      />
    </a>
  </div>`;
})
.join('');
galleryList.innerHTML = markupList;
galleryList.addEventListener('click', openModal);

function openModal(event){
    event.preventDefault();
        if(!event.target.classList.contains('gallery__image')){
            return;
        }

        const instance = basicLightbox.create(
            `<img src="${event.target.dataset.source}" width="800" height="600">`,
            {
              onShow: instance => {
                window.addEventListener('keydown', closeModal);
              },
              onClose: instance => {
                window.removeEventListener('keydown', closeModal);
              },
            }
          );
          function closeModal(event) {
            if (event.code === 'Escape') {
                instance.close();
            }
          }
          instance.show();
        }
   



