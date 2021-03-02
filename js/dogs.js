// set up the array
const dogs = [
  {
    id: 1,
    title: 'Golden Retriever',
    description: 'two cute golden retrievers standing on the grass',
    width: 640,
    height: 480,
    pathURL: './img/1.jpg',
    linkURL: 'https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/',
    credit: 'Photo by Chevanon Photography from Pexels',
    creditURL: 'https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/',
  },
  {
    id: 2,
    title: 'Border Collie',
    description: 'a border collie catching a ball',
    width: 640,
    height: 426,
    pathURL: './img/2.jpg',
    linkURL: 'https://www.pexels.com/photo/selective-focus-photo-of-dog-1562983/',
    credit: 'Photo by Aloïs Moubax from Pexels',
    creditURL: 'https://www.pexels.com/photo/selective-focus-photo-of-dog-1562983/',
  },
  {
    id: 3,
    title: 'Husky',
    description: 'a husky which is very HUSKY',
    width: 640,
    height: 960,
    pathURL: './img/3.jpg',
    linkURL: 'https://www.pexels.com/photo/white-and-black-siberian-husky-puppy-3663082/',
    credit: 'Photo by La Miko from Pexels',
    creditURL: 'https://www.pexels.com/photo/white-and-black-siberian-husky-puppy-3663082/',
  },
  {
    id: 4,
    title: 'Pomeranian',
    description: 'a cute pomeranian',
    width: 640,
    height: 939,
    pathURL: './img/4.jpg',
    linkURL: 'https://www.pexels.com/photo/brown-pomeranian-puppy-on-grey-concrete-floor-3687770/',
    credit: 'Photo by Tanika from Pexels',
    creditURL: 'https://www.pexels.com/photo/brown-pomeranian-puppy-on-grey-concrete-floor-3687770/',
  },
  {
    id: 5,
    title: 'French Bulldog',
    description: 'a cute french bulldog staring at you',
    width: 640,
    height: 960,
    pathURL: './img/5.jpg',
    linkURL: 'https://www.pexels.com/photo/close-up-photo-of-dog-3658120/',
    credit: 'Photo by Orlando Allo from Pexels',
    creditURL: 'https://www.pexels.com/photo/close-up-photo-of-dog-3658120/',
  },
  {
    id: 6,
    title: 'Canis lupus familiaris',
    description: 'a Canis lupus familiaris has his first birthday party',
    width: 640,
    height: 959,
    pathURL: './img/6.jpg',
    linkURL: 'https://www.pexels.com/photo/cute-puppy-wearing-a-party-hat-4588047/',
    credit: 'Photo by Anna Shvets from Pexels',
    creditURL: 'https://www.pexels.com/photo/cute-puppy-wearing-a-party-hat-4588047/',
  },
  {
    id: 7,
    title: 'Yorkshire Terrier',
    description: 'two Yorkshire Terrier',
    width: 640,
    height: 426,
    pathURL: './img/7.jpg',
    linkURL: 'https://www.pexels.com/photo/black-and-brown-miniature-schnauzer-lying-on-green-grass-field-3631659/',
    credit: 'Photo by Sebastian Coman Travel from Pexels',
    creditURL: 'https://www.pexels.com/photo/black-and-brown-miniature-schnauzer-lying-on-green-grass-field-3631659/',
  },
  {
    id: 8,
    title: 'Shiba Inu',
    description: 'a Shiba Inu has his first Christmas',
    width: 640,
    height: 958,
    pathURL: './img/8.jpg',
    linkURL: 'https://www.pexels.com/photo/woman-holding-dog-3171712/',
    credit: 'Photo by cottonbro from Pexels',
    creditURL: 'https://www.pexels.com/photo/woman-holding-dog-3171712/',
  },
  {
    id: 9,
    title: 'Canis lupus familiaris',
    description: 'a Canis lupus familiaris wearing a red cloth',
    width: 640,
    height: 960,
    pathURL: './img/9.jpg',
    linkURL: 'https://www.pexels.com/photo/black-and-brown-short-coated-dog-in-pink-sweater-4588435/',
    credit: 'Photo by Anna Shvets from Pexels',
    creditURL: 'https://www.pexels.com/photo/black-and-brown-short-coated-dog-in-pink-sweater-4588435/',
  }
];

dogs.forEach(function(dog){
  const gallery = document.querySelector(`#gallery`);

  // creat figure element
  let figure = document.createElement(`figure`);
  // creat figcaption element
  let figcaption = document.createElement(`figcaption`);
  // creat img element
  let img = document.createElement('img');
  // place the figure into gallery
  gallery.appendChild(figure);
  // place img and figcaption into figure
  figure.appendChild(img);
  figure.appendChild(figcaption);

  // give information to img
  img.src = `./img/${dog.id}.jpg`;
  img.alt= dog.title;
  img.height = `300`;
  // give information to figcaption
  figcaption.innerText = dog.credit;
});
