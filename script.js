/*take all the hidden paragraphs*/
const firstParagraphToUnfold = document.getElementById("first-tounfold");
const secondParagraphToUnfold = document.getElementById("second-tounfold");
const thirdParagraphToUnfold = document.getElementById("third-tounfold");
const forthParagraphToUnfold = document.getElementById("forth-tounfold");
/*take all the buttons*/
const firstArrowD = document.getElementById("first-arrowD");
const firstArrowU = document.getElementById("first-arrowU");

const secondArrowD = document.getElementById("second-arrowD");
const secondArrowU = document.getElementById("second-arrowU");

const thirdArrowD = document.getElementById("third-arrowD");
const thirdArrowU = document.getElementById("third-arrowU");

const forthArrowD = document.getElementById("forth-arrowD");
const forthArrowU = document.getElementById("forth-arrowU");
/*defalt display rules*/
firstParagraphToUnfold.style.display = "none";
secondParagraphToUnfold.style.display = "none";
thirdParagraphToUnfold.style.display = "none";
forthParagraphToUnfold.style.display = "none";

firstArrowU.style.display = 'none';
secondArrowU.style.display = 'none';
thirdArrowU.style.display = 'none';
forthArrowU.style.display = 'none';
/*General Functions to show & to hide the hidden paragraph*/
function onClickForHiddenParagraph (paragraph, arrow1, arrow2) {
    paragraph.style.display = 'block';
    arrow1.style.display = 'none';
    arrow2.style.display = 'block';
}
function onClickForShownParagraph (paragraph,arrow1,arrow2) {
    paragraph.style.display = 'none';
    arrow1.style.display = 'block';
    arrow2.style.display = 'none';
}
/*Function to connect the event with each Hidden Paragraph*/
function showFirstHiddenParagraph (event) {
    onClickForHiddenParagraph(firstParagraphToUnfold, firstArrowD, firstArrowU);
}
function showSecondHiddenParagraph (event) {
    onClickForHiddenParagraph(secondParagraphToUnfold, secondArrowD, secondArrowU);
}
function showThirdHiddenParagraph (event) {
    onClickForHiddenParagraph(thirdParagraphToUnfold, thirdArrowD, thirdArrowU);
}
function showForthHiddenParagraph (event) {
    onClickForHiddenParagraph(forthParagraphToUnfold, forthArrowD, forthArrowU);
}

function hideFirstHiddenParagraph (event) {
    onClickForShownParagraph(firstParagraphToUnfold, firstArrowD, firstArrowU);
}
function hideSecondHiddenParagraph (event) {
    onClickForShownParagraph(secondParagraphToUnfold, secondArrowD, secondArrowU);
}
function hideThirdHiddenParagraph (event) {
    onClickForShownParagraph(thirdParagraphToUnfold, thirdArrowD, thirdArrowU);
}
function hideForthHiddenParagraph (event) {
    onClickForShownParagraph(forthParagraphToUnfold, forthArrowD, forthArrowU);
}

/*add finction to show the paragraph to each Down button*/
firstArrowD.addEventListener('click', showFirstHiddenParagraph);
secondArrowD.addEventListener('click', showSecondHiddenParagraph);
thirdArrowD.addEventListener('click', showThirdHiddenParagraph);
forthArrowD.addEventListener('click', showForthHiddenParagraph);

/*add function to hide the paragraph to each Up button */
firstArrowU.addEventListener('click', hideFirstHiddenParagraph);
secondArrowU.addEventListener('click', hideSecondHiddenParagraph);
thirdArrowU.addEventListener('click', hideThirdHiddenParagraph);
forthArrowU.addEventListener('click', hideForthHiddenParagraph);

/*FOR CONTACT */
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  