
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
  
  let children = list1.children;
  
  for(let i = 0, l = children.length; i < l; i++) {
    console.log("children " + i + " is " + children[i]);
    children[i].innerHTML = parseInt(children[i]) + n;
    }
      
  children = list2.children;
  
  for(let i = 0, l = children.length; i < l; i++) {
    children[i].innerHTML = parseInt(children[i]) + n;
    }
      

}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div');
}