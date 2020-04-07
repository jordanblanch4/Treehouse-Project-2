

let listItem = document.getElementsByClassName('student-item');
let showItems = 10;
const pageDaddy = document.querySelector('.page');


function showPage (list, page) {
   const startIndex = (page * showItems)-showItems;
   const endIndex = (page * showItems) - 1;
   for (let i=0; i<list.length; i++) {
      if(i >= startIndex && i <= endIndex) {
         list[i].style.display = ' ';
      } else {
         list[i].style.display = 'none';
   }
   };
};


function appendLinks(list) {
  
   const amount = Math.ceil(list.length/showItems);
   let div = document.createElement('div');
   pageDaddy.appendChild(div);
   div.className = 'pagination';
   
   const ul = document.createElement('ul');
   div.appendChild(ul);
   
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

