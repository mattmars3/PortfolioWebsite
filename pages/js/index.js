function rerout(pageName) {
  window.location.href = 'http://127.0.0.1:5500/pages/html/' + pageName + '.html';
}

function setBoxAspectRatio() {
  // get width of box
  const box = document.getElementById('coding');
  const width = box.clientWidth;

  let height = width * .7

  // set the height of the box
  const itemArr = document.getElementsByClassName('linkbox');
  for (let i = 0; i < itemArr.length; i++) {
    itemArr[i].style.height = height + 'px';
  }
}


// NEXT TO DO: make sure that the aspect ratio for each box
// is always the same to keep pictures perfect!

setBoxAspectRatio()

window.addEventListener('resize', setBoxAspectRatio())