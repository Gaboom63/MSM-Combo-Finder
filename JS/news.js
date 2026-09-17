function createNewsBoard() {
    // 1. Main container
    const newsBoard = document.createElement('div');
    newsBoard.id = 'news_board';

    // 2. Back button
    const backButton = document.createElement('button');
    backButton.id = 'backArrow';
    const backIcon = document.createElement('i');
    backIcon.className = 'fas fa-arrow-left';
    backIcon.textContent = ' Back';
    backButton.appendChild(backIcon);
    newsBoard.appendChild(backButton);

    // 3. Sidebar container
    const newsSidebar = document.createElement('div');
    newsSidebar.id = 'news_sidebar';

    // App Updates section
    const appUpdates = document.createElement('div');
    appUpdates.id = 'app_updates';
    const btnFirst = document.createElement('button');
    btnFirst.type = 'button';
    btnFirst.className = 'collapsible_first';
    btnFirst.textContent = 'MSM Combo Finder Updates ↓';
    const contentDiv1 = document.createElement('div');
    contentDiv1.id = 'contentDiv';
    contentDiv1.className = 'content';
    appUpdates.appendChild(btnFirst);
    appUpdates.appendChild(contentDiv1);
    newsSidebar.appendChild(appUpdates);

    // Weekly Updates section
    const weeklyUpdates = document.createElement('div');
    weeklyUpdates.id = 'weekly_updates';
    const btnSecond = document.createElement('button');
    btnSecond.type = 'button';
    btnSecond.className = 'collapsible_second';
    btnSecond.textContent = 'Current In Game Mailbox ↓';
    const contentDiv2 = document.createElement('div');
    contentDiv2.id = 'contentDiv2';
    contentDiv2.className = 'content';
    weeklyUpdates.appendChild(btnSecond);
    weeklyUpdates.appendChild(contentDiv2);
    newsSidebar.appendChild(weeklyUpdates);

    newsBoard.appendChild(newsSidebar);

    // 4. Vertical line divider
    const vl = document.createElement('div');
    vl.className = 'vl';
    newsBoard.appendChild(vl);

    // 5. Main article container
    const mainArticle = document.createElement('div');
    mainArticle.id = 'mainArticle';

    // Article Title
    const titleContainer = document.createElement('div');
    titleContainer.id = 'articleTitleContainer';
    const articleTitle = document.createElement('h1');
    articleTitle.id = 'articleTitle';
    titleContainer.appendChild(articleTitle);
    mainArticle.appendChild(titleContainer);

    // Article Date
    const dateContainer = document.createElement('div');
    dateContainer.id = 'articleDateContainer';
    const articleDate = document.createElement('p');
    articleDate.id = 'articleDate';
    const dateItalic = document.createElement('i');
    articleDate.appendChild(dateItalic);
    dateContainer.appendChild(articleDate);
    mainArticle.appendChild(dateContainer);

    // Article Main Content
    const mainContainer = document.createElement('div');
    mainContainer.id = 'articleMainContainer';
    const articleMain = document.createElement('p');
    articleMain.id = 'articleMain';
    mainContainer.appendChild(articleMain);
    mainArticle.appendChild(mainContainer);

    // Article Image Container 
    const imgContainer = document.createElement('img'); 
    imgContainer.id = 'imgContainer'; 
    mainArticle.appendChild(imgContainer);

    newsBoard.appendChild(mainArticle);

    return newsBoard;
}

const myBoard = createNewsBoard();
document.body.appendChild(myBoard);

const news = [
	{
		name: "The Addition Of News!",
		date: "Sep 15/26",
		mainText: "Welcome to the newest addition of the MSM Combo finder! :) This was made because I wanted to share more about the development of this tool, and other things related to MSM! Over time, there will be more articles made! <br><br> <b>Fun fact:</b> <br> This tool was created mid 2024, and has been being developed ever since! Originally, I stored all images directly in the project resulting in a large <b>800MB+</b> project size! To combat that, the <a href='https://github.com/Gaboom63/MSM-API' target='on_blank'>MSM API</a> was brought to life! This brought this tool all the way down to around <b>10MB</b>! :)"
	},
  {
    name: "WEEKLY MAIL!",
    date: "Sep 16/26",
    mainText: `This is a huge addition for me. I've always wanted a way to directly funnel the weekly mail from in game to this tool! The problem was, I didn't want to manually download them every single week/sometimes day! So I came up with a solution. Why not make an extension that checks for updates in the official MSM Discord, then automatically upload it to my API, then call the <code>fetchNewsImages()</code> method from my API to then funnel all the images into here! I am very proud of this, and I hope you find uses for this :)`
  }
]

let newsImages = [];


const newsBoard = document.getElementById('news_board');
const mailBox = document.getElementById('mailBox');

const backArrow = document.getElementById('backArrow');

let contentDiv = document.getElementById('contentDiv');
let contentDiv2 = document.getElementById('contentDiv2');


let articleTitle = document.getElementById('articleTitle');
let articleDate = document.getElementById('articleDate');
let articleMain = document.getElementById('articleMain');
let articleMainContainer = document.getElementById('articleMainContainer');
let imgContainer = document.getElementById('imgContainer');

let coll = document.getElementsByClassName("collapsible_first");
let coll2 = document.getElementsByClassName("collapsible_second");
let i;
let j;

let clicked = 0; 
let clicked2 = 0;

let firstColl = document.querySelector('.collapsible_first');
let secondColl = document.querySelector('.collapsible_second');
let spinner = document.querySelector('.spinner');

newsBoard.style.display = 'none'; 

mailBox.addEventListener('click',() => {
	newsBoard.style.display = 'revert';
	sideMenuButton.style.display = 'none'; 
	blur("OFF");
})

backArrow.addEventListener('click',() => {
	reset();
})

firstColl.addEventListener('click', () => {

	if(clicked === 0) {
		firstColl.innerHTML = `${firstColl.textContent.slice(0, firstColl.textContent.length - 1)} &uarr;`;
		clicked = 1;
	} else if (clicked === 1) {
		firstColl.innerHTML = `${firstColl.textContent.slice(0, firstColl.textContent.length - 1)} ↓`;
		clicked = 0;
	}

});

secondColl.addEventListener('click', () => {

  if(clicked2 === 0) {
    secondColl.innerHTML = `${secondColl.textContent.slice(0, secondColl.textContent.length - 1)} &uarr;`;
    clicked2 = 1;
  } else if (clicked2 === 1) {
    secondColl.innerHTML = `${secondColl.textContent.slice(0, secondColl.textContent.length - 1)} ↓`;
    clicked2 = 0;
  }

});

function getWednesdayString(d = new Date()) {
  const date = new Date(d);
  const day = date.getDay();
  const diff = 3 - day;
  
  date.setDate(date.getDate() + diff);
  
  // toDateString() returns "Wed Sep 16 2026", slice(0, 10) gives "Wed Sep 16"
  return date.toDateString().slice(0, 10);
}


function hideSpinner() {
  spinner.style.display = 'none';
}

async function loadNewsImages() {
  newsImages = await MSM.fetchNewsImages();

  newsImages.forEach((IMAGE) => {
    const articleDiv = document.createElement('div');   
    const docDate = document.createElement('p');  
    const docTitle = document.createElement('h2');

    articleDiv.className = "article"; 

    docTitle.innerHTML = `Weekly Mail ${newsImages.indexOf(IMAGE) + 1}`;

    articleDiv.addEventListener('click', () => {
      articleDate.innerHTML = getWednesdayString();
      articleMain.textContent = '';
      imgContainer.src = '';

      spinner.style.display = 'block';
      spinner.style.position = 'fixed';
      spinner.style.left = '65%';

      imgContainer.src = IMAGE;

      if (imgContainer.complete && imgContainer.naturalWidth > 0) {
        hideSpinner(); 
      } else {
        imgContainer.addEventListener('load', hideSpinner, { once: true });
        imgContainer.addEventListener('error', hideSpinner, { once: true }); 
      }

      articleTitle.textContent = docTitle.innerHTML.toUpperCase();
      imgContainer.style.border = "2px solid white";
      imgContainer.style.opacity = '100%';
      imgContainer.style.width = '568px';
      imgContainer.style.height = '320px';
      articleMainContainer.style.border = `#444444 2px solid`;
    });

    articleDiv.appendChild(docTitle);   

    contentDiv2.appendChild(articleDiv); 
  });
}

news.forEach((ARTICLE) => { 	
    const articleDiv = document.createElement('div');  	
    const docDate = document.createElement('p'); 	
    const docTitle = document.createElement('h2'); 	

    articleDiv.className = "article";  	
    docDate.className = "top-text"; 	
    docTitle.className = "name-of-doc"; 	

    docTitle.textContent = ARTICLE.name; 	
    docDate.textContent = ARTICLE.date; 

   	articleDiv.addEventListener('click', () => {
   		articleTitle.textContent = ARTICLE.name;
   		articleDate.innerHTML = `<i>${ARTICLE.date}</i>`;
   		articleMain.innerHTML = ARTICLE.mainText;
      imgContainer.src = '';
      imgContainer.style.border = 'none'; 
      imgContainer.style.opacity = '0%';
   		articleMainContainer.style.border = `#444444 2px solid`;
    });

    articleDiv.appendChild(docDate); 	
    articleDiv.appendChild(docTitle); 	

    contentDiv.appendChild(articleDiv);  
});



for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 

for (j = 0; j < coll2.length; j++) {
  coll2[j].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 

articleMain.style.fontFamily = "Verdana, sans-serif"

firstColl.click();
secondColl.click();
