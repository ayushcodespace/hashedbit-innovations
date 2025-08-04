function createDiv(width, height, text) {
const newDiv = document.createElement('div');
newDiv.className='box';
  newDiv.style.width = width + 'px';
  newDiv.style.height = height + 'px';
  newDiv.textContent = text;

  const container = document.getElementById('container');
  container.appendChild(newDiv);
    
}