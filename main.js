'use strict'
// training subject: Array Methods==> map, filter, reduce ,

// map --> original list will remain unchanged
const list1 = ['ali', 'mmd', 'mohsen', 'jj']
let mapList = list1.map((item) => {return item.toUpperCase()})
console.log('originList:',list1);
console.log('mapList:',mapList);


console.log('---');


//  filter --> original list will remain unchanged
const list2 = [5,4,9,15,18] 
let filterList = list2.filter((item) =>{return item % 2 == 0})
console.log('originList:',list2);
console.log('filterList:',filterList,` only even numbers allowed `);



console.log('---');


// reduce --> itreating over them to compute a single value
let list3 = [1,5,8,9,12]
console.log('(reduce is a loop with a memory)');


// example1
console.log("first example::(_+_)");
let reduceFunc = list3.reduce((total, value) => {
    console.log("total:",total, "value:",value);
    return total + value
  })
  console.log(reduceFunc);

 
// example2
  console.log("second example::(_-_)");
  let reduceFunc2 = list3.reduce((total, value) => {
    console.log("total:",total, "value:",value);
    return total - value
  })
  console.log(reduceFunc2);






 
// SECRECT(additional) DO NOT READ!!!
let video = document.querySelector('.video')
let mainV = document.querySelector('#mainV')
mainV.play()
  setTimeout(() => {
    video.style.display = 'none'
    mainV.pause()
  }, 8000);