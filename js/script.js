/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   //setup bounds for the page
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;

  //select HTML element for list, and clear the list
  const studentList = document.querySelector(".student-list");
  studentList.innerHTML = "";

  //loop through list to create html
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i <= endIndex) {
      const html = `
       <li class="student-item cf">
       <div class="student-details">
         <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
         <h3>${list[i].name.first}</h3>
         <span class="email">ethel.dean@example.com</span>
       </div>
       <div class="joined-details">
         <span class="date">Joined 12-15-2005</span>
       </div>
     </li>
       `;
      //console.log(list[i].name.first);

      //add new html 
      studentList.insertAdjacentHTML("beforeend", html);
    }
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {

   //setup number of buttons needed and clear current buttons
  const numberOfButtons = Math.ceil(list.length / 9);
  const linkList = document.querySelector(".link-list");
  linkList.innerHTML = "";

  for (let i = 1; i <= numberOfButtons; i++) {
    const html = `
     <li>
     <button type="button">${i}</button>
     </li>  
     `;
    linkList.insertAdjacentHTML("beforeend", html);
  }
  linkList.querySelector("button").classList.add("active");

  //setup event listener for clickig on the page buttons
  linkList.addEventListener("click", (e) => {
    const activeButton = linkList.querySelector(".active");
    const buttonClicked = e.target.closest("button");

    if (activeButton && buttonClicked) {
      activeButton.classList.remove("active");
    }

    if (buttonClicked) {
      buttonClicked.classList.add("active");
      showPage(list, buttonClicked.innerHTML);
    }
  });
}
// Call functions

//Search bar

const searchBarHTML = '<label for="search" class="student-search"><span>Search by name</span><input id="search" placeholder="Search by name..."><button type="button"><img src="img/icn-search.svg" alt="Search icon"></button></label>';
addPagination(data);
showPage(data, 1);
