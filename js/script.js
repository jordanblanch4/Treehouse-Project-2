
//Declaring Global Variables for the rest of the code
const listItem = document.getElementsByClassName('student-item');
const showItems = 10;
const page = document.querySelector('.page');
let currentPage = 1;

//a show page function that sets what students to display 
function showPage (list, page) {
   const startIndex = (page * showItems)-showItems;
   const endIndex = (page * showItems) - 1;
   for (let i=0; i<list.length; i++) {
      if(i >= startIndex && i <= endIndex) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
   }
   }
}

//append Links function created the links dynamically
function appendLinks(list) {
  //finds the number of pages we need added is math.ciel so that we get a whole number
   const amount = Math.ceil(list.length/showItems);
   //here we start adding div elemends and creating UI elements
   let div = document.createElement('div');
   page.appendChild(div);
   div.className = 'pagination';
   
   const ul = document.createElement('ul');
   div.appendChild(ul);
   //loop through the amount of pages creating li elements with their attributes
   for (let i =0; i < amount; i++) {
      const anch = document.createElement('a');
      const li = document.createElement('li');
      
      li.appendChild(anch);
      ul.appendChild(li);
      
      let pageLinks = document.getElementsByTagName('a');
      anch.setAttribute = ("href", "#");
      
      if(i === 0) {
         anch.className = 'active';
      }
   
   anch.textContent = i+1;
   //create event listener to add funcianlity to the links
   div.addEventListener('click', (event) => {
      
      showPage(listItem, parseInt(event.target.textContent));

      for(j=0; j<pageLinks.length; j++) {
         pageLinks[j].className = '';
      }
   
   event.target.className = 'active';
   
   });
};
};

showPage(listItem, 1);
appendLinks(listItem);

