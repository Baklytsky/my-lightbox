'use strict';
let images = document.querySelectorAll('.image-item');
let lightBoxGallery = document.querySelector('.lightbox-gallery');
let imgSrc = document.querySelector('.lightbox-item');
let imgName = document.querySelector('.img-name');
let imgNumber = document.querySelector('.img-number');
let close = document.querySelector('.close');
let alt;
let itemImage;
let src;
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

for (let i=0; i < images.length; i++) {
images[i].addEventListener('click', function () {
    itemImage = i;
    changeList ();
    showLightBox ();
})
}

function showLightBox () {
    lightBoxGallery.style.display ='block';
}

function changeList() {
    src = images[itemImage].querySelector('img').getAttribute('src');
    imgSrc.src = src;
    alt = images[itemImage].querySelector('img').getAttribute('alt');
    imgName.innerHTML = alt;
    imgNumber.innerHTML = (itemImage + 1) + ' ' + 'of 6';
}

next.addEventListener('click', function () {
   if (itemImage === images.length-1) {
       itemImage = 0
   }
   else {
       itemImage++;
   }
    changeList();
});

prev.addEventListener('click', function () {
    if (itemImage === 0) {
        itemImage = images.length-1;
    }
    else {
        itemImage--;
    }
    changeList();
});

close.addEventListener('click', function () {
    lightBoxGallery.style.display ='none';
});