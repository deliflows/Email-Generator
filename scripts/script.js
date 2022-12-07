const theCurrentCategory = document.getElementById('category');
const theCurrentName = document.getElementById('name');
let theDisplayExcuse = document.querySelector('.displayexcuse');
let mainCard = document.querySelector('.card');
let theDisplayName = document.querySelector('.theirname');
let send = document.getElementById('send');
let newbtn = document.getElementById('new');
let theDisplayNewBtn = document.querySelector('.newnewbtn');
let newPhotoBtn = document.getElementById('newphoto');
let theDisplayNewPhotoBtn = document.querySelector('.newphoto');
let photo = document.querySelector('.photo');
let theMiniCard = document.querySelector('.minicard');
let theCard = document.querySelector('.card');
let theGreeting = document.querySelector('.salutations');
let theClosing = document.querySelector('.closing');
let theCopyBtn = document.querySelector('.copy');
let theURL = `https://excuser.herokuapp.com/v1/excuse/office`;
let thePicURL = `https://imsea.herokuapp.com/api/1?q=unbelievable`;

theMiniCard.style.display = "none";
theCard.style.display = "flex";
theDisplayNewBtn.style.display = "none";
theDisplayNewPhotoBtn.style.display = "none";
theCopyBtn.style.display = "none";

async function GetRandom(){
    let theRandom = await fetch(theURL);
    theRandom = await theRandom.json();
    theDisplayExcuse.innerText = (theRandom[0].excuse);
    theDisplayName.innerText = theCurrentName.value;
    console.log(theRandom);

    if(theCurrentCategory.value == "family"){
        theGreeting.innerText = "Hey,";
        theClosing.innerText = "Peace,";
    }
    if(theCurrentCategory.value == "office"){
        theGreeting.innerText = "To Whom It May Concern,";
        theClosing.innerText = "Sincerely,";
    }
    if(theCurrentCategory.value == "children"){
        theGreeting.innerText = "Dude!";
        theClosing.innerText = "Buh-bye,";
    }
    if(theCurrentCategory.value == "college"){
        theGreeting.innerText = "Bro,";
        theClosing.innerText = "Later,";
    }
    if(theCurrentCategory.value == "party"){
        theGreeting.innerText = "OMG";
        theClosing.innerText = "So, so, sorry,";
    }
    if(theCurrentCategory.value == "funny"){
        theGreeting.innerText = "Well,";
        theClosing.innerText = "Later-gator,";
    }
    if(theCurrentCategory.value == "unbelievable"){
        theGreeting.innerText = "Ok. So...";
        theClosing.innerText = "True story,";
    }
    if(theCurrentCategory.value == "developers"){
        theGreeting.innerText = "Fellow Colleauge,";
        theClosing.innerText = "Stay classy,";
    }
    if(theCurrentCategory.value == "gaming"){
        theGreeting.innerText = "Sup Boss,";
        theClosing.innerText = "See you in the metaverse,";
    }
}

async function GetPic(){
    let thePic = await fetch(thePicURL);
    thePic = await thePic.json();
    let rng = Math.floor(Math.random() * (thePic.results.length));
    photo.src = thePic.results[rng];
}

async function GetDifferentPic(){
    let excuseArray = theDisplayExcuse.innerText.split(" ");
    let rng = Math.floor(Math.random() * (excuseArray.length));
    let myWord = excuseArray[rng];
    thePicURL = `https://imsea.herokuapp.com/api/1?q=${myWord}`;
    let theDifferentPic = await fetch(thePicURL);
    theDifferentPic = await theDifferentPic.json();
    let blah = Math.floor(Math.random() * (theDifferentPic.results.length));
    photo.src = theDifferentPic.results[blah];
    console.log(myWord);
}


const copyContent = async function() {
    let text = theMiniCard.innerText;
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

send.addEventListener('click', function(event){
    event.preventDefault();
    let category = theCurrentCategory.value;
    theURL = `https://excuser.herokuapp.com/v1/excuse/${category}`;
    thePicURL = `https://imsea.herokuapp.com/api/1?q=${category}`;

    GetRandom();
    GetPic();
    theMiniCard.style.display = "flex";
    theCard.style.display = "none";
    theDisplayNewBtn.style.display = "flex";
    theDisplayNewPhotoBtn.style.display = "flex";
    theCopyBtn.style.display = "flex";
})

newPhotoBtn.addEventListener('click', function(event){
    event.preventDefault();
    GetDifferentPic();
})

newbtn.addEventListener('click', function(event){
    event.preventDefault();
    theMiniCard.style.display = "none";
    theCard.style.display = "flex";
    theDisplayNewBtn.style.display = "none";
    theDisplayNewPhotoBtn.style.display = "none";
    theCopyBtn.style.display = "none";
})
