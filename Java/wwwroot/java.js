const button = document.getElementById('toggleButton');
const title = document.getElementById('toggleTitle');
const ptag = document.getElementById('toggleID');

button.addEventListener('click', () => {
  button.classList.toggle('active');
  button.classList.toggle('inactive');
 
  if (button.classList.contains('active')) 
    {
    title.textContent = 'Playful brit';
    ptag.textContent = "You silly wanker";
    button.textContent = "silly";
    } 
  else 
    {
    title.textContent = 'Angry brit';
    ptag.textContent = "bloody brit";
    button.textContent = "brit";
    }
});

const addButton = document.getElementById('add-item-button'); 
const list = document.getElementById('item-list'); 

addButton.addEventListener('click', function () {
    const newItem = document.createElement('li');
    const itemCount = list.children.length + 1;
    newItem.textContent = `Item ${itemCount}`;
    list.appendChild(newItem);
});
