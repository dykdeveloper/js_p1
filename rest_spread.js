let a1 = ["a", "b", "c", "d", "e", "f", "g"];
let a2 = ["z", "y", "x", "w", "v", "u", ...a1];

// spread
// console.log(a2);

// console.log(...a1, ...a2);

// rest
// let a3 = (...items) =>{
//     for(const item of items){
//         console.log(item);
//     }
// }

// a3(1, 2, 3);

// destructure
// let [f1, f2, f3, ...f4] = a1;
// console.log(f1);
// console.log(f2);

// async await
async function searchresult() {

  console.log("fetching data....");
  
  let p1 = new Promise((resolve, reject) => {
    setTimeout(async () => {
      let data = await fetch("https://jsonplaceholder.typicode.com/todos");
      let data1 = await data.json();
      console.log(data1);
      
      resolve("Fetch data successful");
      reject("some error occured");
    }, 3000);
  });

  let p3 = await p1;
  return p3;

}


searchresult().then((res)=>{console.log(res)});
