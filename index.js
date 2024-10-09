// import {boston} from "./boston.js";
// console.log(JSON.stringify(boston.data))
// document.getElementById("app").innerHTML=JSON.stringify(boston.data[0][8])
// -------------------------------------------
// let data=boston.data
// let topearners=[]
// for (let i=0;i<data.length;i++)
// {
//     if(data[i][11] < 2000000)
//     {
//         topearners.push({name:data[i][8],salary:data[i][11]})
//     }
// }
// topearners.sort(function(a,b){  b.salary-a.salary })
// topearners=topearners.slice(0,5);
// let Earners = '<h1>Top Earners:</h1>';
// for (let i = 0; i < topearners.length; i++) {
//     Earners += `<h2>Top Earner ${i + 1}: ${topearners[i].name} - Salary: ${topearners[i].salary}</h2>`;
// }
// document.getElementById("app").innerHTML = Earners;
// console.log(topearners);
// document.getElementById("app").innerHTML=`<h1>top Earner :${topearners[0].name}  salary: ${topearners[0].salary}</h1>`
// -------------------------------------------------
// let n=data.length;

// for(let i=0;i<n;i++)
// {
//     for(let j=i+1;j<n;j++)
//     {
//         if(topearners[i] < topearners[j])
//         {
//             let temp=topearners[i]
//             topearners[i]=topearners[j]
//             topearners[j]=temp
//         }
//     }
// }
// console.log(topearners)
// topearners=topearners.slice(0,5);
// let Earners = '<h1>Top Earners:</h1>';
// for (let i = 0; i < topearners.length; i++)
//      {
//     Earners += `<h2>Top Earner ${i + 1}: ${topearners[i].name} - Salary: ${topearners[i].salary}</h2>`;
// }
// document.getElementById("app1").innerHTML = Earners;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
import { boston } from "./boston.js";
let data = boston.data;
let topearners = [];
for (let i = 0; i < data.length; i++) {
 if (data[i][11] < 200000) {
    topearners.push({ name: data[i][8], salary: data[i][11] });
    }
}
topearners.sort(function(a, b) {
     return b.salary - a.salary;
});
topearners = topearners.slice(0, 5);
let Earners = '<h1><u>Top Earners:</u></h1>';
for (let i = 0; i < topearners.length; i++) {
    Earners += `<h2>Top Earner ${i + 1}: ${topearners[i].name} - Salary: ${topearners[i].salary}</h2>`;
}
document.getElementById("app").innerHTML = Earners;
Console.log(topearners);