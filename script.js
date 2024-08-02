let menu = document.getElementsByClassName("menu")[0];
menu.innerHTML='&#9776;';
let header =document.getElementsByTagName('header')[0];
header.addEventListener("click", toggleMenu);
header.addEventListener("mouseenter", mouseEnterHeader);
header.addEventListener("mouseleave", mouseLeaveHeader);
let topnav = document.getElementById("topnav")
topnav.addEventListener("mouseenter", mouseLeaveHeader);
menu.addEventListener("click", toggleMenu);
let dropbtn = document.getElementsByClassName('dropbtn')[0];
dropbtn.addEventListener("click", toggleDropDown);
let dialog = document.getElementById('dialog');
let backdrop = document.getElementById('backdrop');
document.getElementById('item1').addEventListener('click', ()=>clickItem(1))
document.getElementById('item2').addEventListener('click', ()=>clickItem(2))
document.getElementById('item3').addEventListener('click', ()=>clickItem(3))
document.getElementById('close-dialog').addEventListener('click', closeDialog)
let shapes = document.getElementsByClassName('shape');
for(i = 0; i < shapes.length; i++) {
    shapes[i].style.position = 'absolute';
    shapes[i].style.left = String(i * 200) + 'px';
    shapes[i].style.top = String(i * 100) + 'px';
    shapes[i].style.zIndex = i
    shapes[i].style.backgroundColor = (i%2 === 0)? '#969696':'#ffffff'
}
function toggleMenu(e) {
  if(this === e.target) {
    let senderElementName = e.target.tagName.toLowerCase();
    if (topnav.className === "topnav") {
      topnav.className += " responsive";
      menu.innerHTML =  '&#x2715;'
    } else {
      if(senderElementName !== 'header') {
        topnav.className = "topnav";
        menu.innerHTML = '&#9776;'
      }
    }
  }
}
function mouseEnterHeader(e) {
  if(this === e.target) {
    e.target.style.backgroundColor = "#000000";
    e.target.style.color = "#ffffff";
  }
}
function mouseLeaveHeader(e) {
  header.style.backgroundColor = "#ffffff";
  header.style.color = "#000000";
}
function toggleDropDown(e) {
  let dropContent = document.getElementsByClassName('dropdown-content')[0] 
  dropContent.style.display = dropContent.style.display === 'block'? 'none': 'block'
}
function clickItem(item) {
  backdrop.style.display = 'block';
  dialog.style.display = 'block';
  document.getElementById('item-slot').innerHTML = `Item ${item}`
}
function closeDialog(e) {
  backdrop.style.display = 'none';
  dialog.style.display = 'none';
  document.getElementById('item-slot').innerHTML = ''
}