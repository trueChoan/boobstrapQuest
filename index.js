// from SO: http://stackoverflow.com/a/987376/1592915
function selectText(element) {
  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
  }
}

const toUpperCase = str => {
  let arr = []
  for (let word of str) {

    arr.push(word.charAt(0).toUpperCase() + word.slice(1))// capitalize first letter
  }
  return (arr.join(' '))
}

//take the phone number as a string and return it as a string with spaces every 2 digits
const spacePhoneNumber = digits => {
  let arr = []
  for (let i = 0; i < digits.length; i++) {
    if (i % 2 === 0 && i !== 0) {
      arr.push(' ')
    }
    arr.push(digits[i])
  }
  return arr.join('')
}



//add text to innerHTML from input
function addText(element) {
  let names = document.querySelectorAll('.name');
  let positions = document.querySelectorAll('.position');
  let phones = document.querySelectorAll('.phone');
  let str = element.value.split(' ');



  if (element.id === 'name') {
    names.forEach(e => e.innerHTML = toUpperCase(str));
  }
  if (element.id === 'position') {
    positions.forEach(e => e.innerHTML = element.value);
  }
  if (element.id === 'phone') {
    phones.forEach(e => e.innerHTML = spacePhoneNumber(element.value));
  }
}


const copyText = () => {
  let copyText = document.getElementById("htmlcode");
  let content = copyText.innerHTML;
  console.log(content);
  // Select the text field
  selectText(copyText);

  // Copy the text inside the text field
  document.execCommand("copy");
  // Alert the copied text
  alert("Copied the text: " + content);
};



function getFunction() {

  let e = document.getElementById("htmlcode");
  let content = e.innerHTML;
  prompt("Copiez le contenu: Cmd+C, Enter", content);

}

function getLogican() {

  let e = document.getElementById("htmlcode2");
  let content = e.innerHTML;
  prompt("Copiez le contenu: Cmd+C, Enter", content);

}

//get the modal
const modal = document.getElementById("myModal");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const modal4 = document.getElementById("myModal4");

// get the image and insert it inside the modal - use its "alt" text as a caption

const img = document.getElementById("myImg");
const img2 = document.getElementById("myImg2");
const img3 = document.getElementById("myImg3");
const img4 = document.getElementById("myImg4");
const modalImg = document.getElementById("img01");
const modalImg2 = document.getElementById("img02");
const modalImg3 = document.getElementById("img03");
const modalImg4 = document.getElementById("img04");
const captionText = document.getElementById("caption");
const captionText2 = document.getElementById("caption2");
const captionText3 = document.getElementById("caption3");
const captionText4 = document.getElementById("caption4");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
};

img3.onclick = function () {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
};

img4.onclick = function () {
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close")[1];
const span3 = document.getElementsByClassName("close")[2];
const span4 = document.getElementsByClassName("close")[3];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  if ((modal.style.display = "block")) {
    modal.style.display = "none";
  }
};
span2.onclick = function () {
  if ((modal2.style.display = "block")) {
    modal2.style.display = "none";
  }
};
span3.onclick = function () {
  if ((modal3.style.display = "block")) {
    modal3.style.display = "none";
  }
};
span4.onclick = function () {
  if ((modal4.style.display = "block")) {
    modal4.style.display = "none";
  }
};

//when the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
};
