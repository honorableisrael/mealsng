
function addActiveClassToSelectedElement(id){
 var el = document.getElementById(id);
  var classToBeAdded = 'activeSelection'
    if (!el.classList.contains(classToBeAdded)){
        el.classList.add(classToBeAdded)
      return  console.log('true')
    }
    if (el.classList.contains(classToBeAdded)){   
        el.classList.remove(classToBeAdded)
       return console.log('false')
    }
}