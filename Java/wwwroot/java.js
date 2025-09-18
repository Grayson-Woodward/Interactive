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

const list = document.getElementById("toggleList");
const addlist = document.getElementById("addList");

list.addEventListener("click", () => {
    addlist.createElement();
    for(let i = 0; i < itemk.Length; i++)
    {
        text += "item" + i + "<br>";
    }
});