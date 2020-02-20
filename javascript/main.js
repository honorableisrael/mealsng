
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

function addBoxShadowClassToSelectedElement(id,checkedId){
  var el = document.getElementById(id);
   var classToBeAdded = 'boxshadow'
   var checkbox = document.getElementById(checkedId).checked = document.getElementById(checkedId).checked?false:true
     if (!el.classList.contains(classToBeAdded) && document.getElementById(checkedId).checked){
         el.classList.add(classToBeAdded)
       return  console.log('true')
     }
     if (el.classList.contains(classToBeAdded) && !document.getElementById(checkedId).checked){   
         el.classList.remove(classToBeAdded)
        //  var checkbox = document.getElementById(checkedId).checked = false
        return console.log('false')
     }
 }