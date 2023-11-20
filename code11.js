// 1.1

function setText(selector, text) {
    let elem = document.querySelector(selector);
    if (elem) {
        elem.textContent = text;
    } else {
        console.error("Элемент с селектором '" + selector + "' не найден.");
    }
}

// setText('#elem1', 'text1');
// setText('.exampleClass', 'text2');

// 1.2

// function setAttr(selector, attributeName, attributeValue) {
//     let elem = document.querySelector(selector);
//     if (elem) {
//         elem.setAttribute(attributeName, attributeValue);
//     } else {
//         console.error("Элемент с селектором '" + selector + "' не найден.");
//     }
// }

// 
// setAttr('#myImage', 'src', 'new_image.jpg');
// setAttr('#myImage', 'alt', 'New Image');

// 1.3----

// function appendText(selector, text) {
//     let elems = document.querySelectorAll(selector);
    
//     for (let elem of elems) {
//         elem.textContent += text;
//     }
// }
// appendText('.elem', ' appended text');

// 1.4----

// forEach('.elem', function(elem) {
//     elem.textContent += '!';
// });

// function forEach(selector, func) {
//     let elems = document.querySelectorAll(selector);
    
//     for (let elem of elems) {
//         func(elem);
//     }
// }

// 1.5----


// function appendTextToElement(element, text) {
//     element.textContent += text;
//   }

  
// let paragraphs = document.querySelectorAll('p');

// for (let paragraph of paragraphs) {
//   appendTextToElement(paragraph, '!');
// }

// function setValue(inputElement, text) {
//   inputElement.value = text;
// }

// 1.6----


// function appendTextToElements(elements, text) {
//   for (let element of elements) {
//     element.textContent += text;
//   }
// }

// function appendElem(ulElement, text) {
//   let liElement = document.createElement('li');
//   liElement.textContent = text;
//   ulElement.appendChild(liElement);
// }

// let array = ['Item 1', 'Item 2', 'Item 3'];
// let ulElement = document.getElementById('yourUlId'); 

//  for (let item of array) {
//    appendElem(ulElement, item);
// }

// 1.7----


// function appendTextToElements(elements, text) {
//   for (let element of elements) {
//     element.textContent += text;
//   }
// }


// function appendElem(ulElement, text) {
//   let liElement = document.createElement('li');
//   liElement.textContent = text;
//   ulElement.appendChild(liElement);
// }


// let array = ['Item 1', 'Item 2', 'Item 3'];
// let ulElement = document.getElementById('yourUlId'); 

// for (let item of array) {
//   appendElem(ulElement, item);
// }


// 1.8-----

// function createTable(rows, cols, parent) {
//     let table = document.createElement('table');
  
    
//     for (let i = 0; i < rows; i++) {
//       let row = table.insertRow();
//       for (let j = 0; j < cols; j++) {
//         let cell = row.insertCell();
//         cell.textContent = 'Cell ' + (i + 1) + '-' + (j + 1);
//       }
//     }
  
    
//     let cells = table.getElementsByTagName('td');
//     for (let i = 0; i < cells.length; i++) {
//       cells[i].style.width = '50px';
//       cells[i].style.height = '50px';
//       cells[i].style.border = '1px solid black';
//     }
  
//     /
//     parent.appendChild(table);
//   }
  
  
//   let div = document.querySelector('#elem');
//   createTable(3, 4, div);
  
//   let div1 = document.querySelector('#elem1');
//   createTable(3, 4, div1);
  
//   let div2 = document.querySelector('#elem2');
//   createTable(5, 6, div2);

// 1.9---

// function createTable(rows, cols) {
//     let table = document.createElement('table');
  
//     for (let i = 0; i < rows; i++) {
//       let row = table.insertRow();
//       for (let j = 0; j < cols; j++) {
//         let cell = row.insertCell();
//         cell.textContent = 'Cell ' + (i + 1) + '-' + (j + 1);
//       }
//     }
  
//     return table;

//     let div = document.querySelector('#elem');
//     div.appendChild(createTable(3, 4));

//   }

//   1.10---

// function createTableByArr(arr) {
//     let table = document.createElement('table');

//     for (let i = 0; i < arr.length; i++) {
//         let row = document.createElement('tr');

//         for (let j = 0; j < arr[i].length; j++) {
//             let cell = document.createElement('td');
//             cell.textContent = arr[i][j];
//             row.appendChild(cell);
//         }

//         table.appendChild(row);
//     }

//     return table;
// }

// let div = document.querySelector('#elem');
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let table = createTableByArr(arr);

// div.appendChild(table);



// _________________________________________________________________________________________



// 2.1--------------

// function setText(selector, text) {
//     let elem = document.querySelector(selector);
//     if (elem) {
//         elem.textContent = text;
//     } else {
//         console.error('Element not found for selector:', selector);
//     }
// }
// setText('#elem1', 'text1');
// setText('.class1', 'text2');
// setText('p', 'text3');



// 2.2--------



// let exportedModule = (function() {
//     let str1 = 'переменная модуля';
//     let str2 = 'переменная модуля';
//     let str3 = 'переменная модуля';
  
//     function func1() {
//       alert('функция модуля');
//     }
  
//     function func2() {
//       alert('функция модуля');
//     }
  
//     function func3() {
//       alert('функция модуля');
//     }
  
//     return {
//       str1: str1,
//       func1: func1,
//       func2: func2
//     };
//   })();
//   console.log(exportedModule.str1);
//     exportedModule.func1();
//     exportedModule.func2();


// 2.3-----------


// ;(function() {
//     let module = {};
    
//     let str1 = 'переменная модуля';
//     let str2 = 'переменная модуля';
//     let str3 = 'переменная модуля';
   
//     module.func1 = function() {
//      alert('функция модуля');
//     }
//     module.func2 = function() {
//      alert('функция модуля');
//     }
//     module.func3 = function() {
//      alert('функция модуля');
//     }
//     module.func4 = function() {
//      alert('функция модуля');
//     }
//     module.func5 = function() {
//      alert('функция модуля');
//     }
    
//     module.str1 = str1;
//     module.str2 = str2;
   
//     window.exportedModule = module;
//    })();