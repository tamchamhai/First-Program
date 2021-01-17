/**
 * B1: Hiển thị Danh sách kính
 * _Glasses
 * _GlassesList
 * B2: Xây dựng chức năng thử kính
 * B3: Xây dựng chức năng so sánh
 */
let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];
//Global ================================================================================//
let getEle = (id) => {
  return document.getElementById(id);
};
// Import class
import { Glasses } from "./glasses.js";
import { GlassesList } from "./glassesList.js";
let gList = new GlassesList();
//=======================================================================================//
// Show glasses list
const showGlassesList = () => {
  dataGlasses.map((item) => {
    let glasses = new Glasses(
      item.id,
      item.src,
      item.virtualImg,
      item.brand,
      item.name,
      item.color,
      item.price,
      item.description
    );
    gList.addGlassesList(glasses);
  });
  getEle("vglassesList").innerHTML = gList.renderGlassesList();
};
showGlassesList();
//=======================================================================================//
// Pick glass
const tryOnGlasses = (event) => {
  console.log(event);
  let getID = event.target.getAttribute("data-id");
  let getObject = {};
  for (let item of gList.glassesList) {
    if (item.id === getID) {
      getObject = item;
    }
  }
  console.log(getObject);
  // Show glass is picked
  showOff(getObject);
};
window.tryOnGlasses = tryOnGlasses;

const showOff = (getObject) => {
  getEle("avatar").innerHTML = `<img src=${getObject.virtualImg} />`;
  console.log(getObject);

  let status = "";
  if (getObject.status) {
    status = "Stocking";
  } else {
    status = "Sold Out";
  }

  getEle("glassesInfo").innerHTML = `
    <h4>${getObject.name} - ${getObject.brand} ${getObject.color}</h4>
    <p class="card-text"> 
      <span class="btn btn-danger btn-sm mr-2">$${getObject.price}</span>
      <span class="text-success">${status}</span>
    </p>
    <p class="card-text"> 
    ${getObject.description}
</p>
  `;
  getEle("glassesInfo").style.display = "block";
};
window.showOff = showOff;
//=======================================================================================//
// Compare After/Before
const removeGlasses = (isDisplay) => {
  if (isDisplay) {
    getEle("avatar").style.display = "none";
  } else {
    getEle("avatar").style.display = "block";
  }
};
window.removeGlasses = removeGlasses;
