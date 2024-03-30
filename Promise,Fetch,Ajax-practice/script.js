"use strict";


let tbody = document.querySelector("tbody");
let tr = document.querySelector("tr");


function getAllCarries(){
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json =>{
        let str = "";
        json.forEach(data => {
            str += `<tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.email}</td>
            </tr>`
        });

        tbody.innerHTML = str;
      })
}




