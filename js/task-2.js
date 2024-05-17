const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];
function imageTemplate(images) {
  let result = "";
  for (let i = 0; i < images.length; i++) {
    result += `<li class="img-item">
  <img src="${images[i].url}" alt"${images[i].alt}"  width="600px"/>
</li>\n`;
  }
  return result;
}

const markup = imageTemplate(images);
const ulElem = document.querySelector(".gallery");
ulElem.insertAdjacentHTML("afterbegin", markup);
// styles
ulElem.style.display = "flex";
ulElem.style.flexWrap = "wrap";
ulElem.style.listStyleType = "none";
ulElem.style.alignItems = "center";
ulElem.style.gap = "40px";
ulElem.style.justifyContent = "center";
