//element zmieniajacy sie
let activeElement = 0;
TimeChamnge = 4000;
//Pobrane elementy na których pracujemy
const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');
//tablice z podmienianymi eementami
const colorImages = ["img/s1.png", "img/s2.png", "img/s3.png"];
const grayImages = ["img/s1a.png", "img/s2a.png", "img/s3a.png"];
const names = ['Anna Baugart', 'Marek Feliksiak', 'Arek Pawłowicz'];
const professions = ['Porogramistka JS', 'UX i UI Designer', 'Front-End Developer'];

function changeElement() {
    activeElement++;
    if (activeElement == 3) {
        activeElement = 0;
    }
    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1Html.src = names[activeElement];
    h2Html.src = professions[activeElement];
    //ta funkca wywołuje sie po okreslanym czasie raaz ale w petli bedzie dzilac w kołko ale trzeba ja najpierw wywolac 
    setTimeout(changeElement, TimeChamnge)
}
setInterval(changeElement, TimeChamnge)