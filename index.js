
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list');
  const list1 = lists[0];
  const list2 = lists[1];
  
  let child = list1.children;
  
  for(let i = 0, l = child.length; i < l; i++) {
    child[i].innerHTML = parseInt(child[i]) + n;
    }
      
  child = list2.children;
  
  for(let i = 0, l = child.length; i < l; i++) {
    child[i].innerHTML = parseInt(child[i]) + n;
    }
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div');
}