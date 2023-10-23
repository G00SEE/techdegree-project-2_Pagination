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
    if (i >= startIndex && i < endIndex) {
      const html = `
       <li class="student-item cf">
       <div class="student-details">
         <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
         <h3>${list[i].name.first} ${list[i].name.last}</h3>
         <span class="email">${list[i].email}</span>
       </div>
       <div class="joined-details">
         <span class="date">${list[i].registered.date}</span>
       </div>
     </li>
       `;
      //console.log(html);

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
  const pageList = document.querySelector(".link-list");
  pageList.innerHTML = "";

  for (let i = 1; i <= numberOfButtons; i++) {
    const html = `
     <li>
     <button type="button">${i}</button>
     </li>  
     `;
    pageList.insertAdjacentHTML("beforeend", html);
  }
  pageList.querySelector("button").classList.add("active");

  //setup event listener for clickig on the page buttons
  pageList.addEventListener("click", (e) => {
    const activeButton = pageList.querySelector(".active");
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

//Search bar
const header = document.querySelector(".header");
const searchBarHTML =
  '<label for="search" class="student-search"><span>Search by name</span><input id="search" placeholder="Search by name..."><button type="button"><img src="img/icn-search.svg" alt="Search icon"></button></label>';
header.insertAdjacentHTML("beforeend", searchBarHTML);
const SearchBar = document.getElementById("search");

//search functionali
SearchBar.addEventListener("keypress", (e) => {
  const filteredStudents = [];
  userInput = SearchBar.value.toLowerCase();
  for (let i = 0; i < data.length; i++) {
    const searchStudent = `${data[i].name.first.toLowerCase()} ${data[i].name.last.toLowerCase()}`;
   
    if (searchStudent.includes(userInput)) {
      filteredStudents.push(data[i]);
      //console.log(data[i]);
      //console.log(searchStudent);
    }
    if (filteredStudents.length > 0) {
      addPagination(filteredStudents);
      showPage(filteredStudents, 1);
      //console.log(filteredStudents);
    } else {
      const studentList = document.querySelector(".student-list");
      studentList.innerHTML = `<h3>"No results found :("</h3>`;
      const pageList = document.querySelector(".link-list");
      pageList.innerHTML = "";
    }
  }
});

// Call functions
addPagination(data);
showPage(data, 1);
