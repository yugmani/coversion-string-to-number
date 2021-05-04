const numDiv1 = document.getElementById("num1");
const stringDiv1 = document.getElementById("string1");

function numToString1() {
  const x = "" + 1;
  console.log("x: ", x);
  const typeVar = typeof x;
  console.log("TypeOf: ", typeVar);
  return [x, typeVar];
}

const numToString2 = () => {
  const x = String(1);
  console.log("x: ", x);
  const typeVar = typeof x;
  console.log("TypeOf: ", typeVar);
  return [x, typeVar];
};

const codeBlock1 = `
const x = "" + 1;<br>
console.log("x: ", x);<br>
console.log("TypeOf x: ", typeof x);
`;

const codeBlock2 = `
const x = String(1);<br>
console.log("x: ", x);<br>
console.log("TypeOf x: ", typeof x);
`;

const displayOutput = (code, var1, var2, divs) => {
  let html = `
  <h3>Converting Numbers to Strings</h3>  
  <div class="code"> ${code} </div> 
  <h4>Output:</h4>
  <div class="result">
  <p>x: ${vars1}</p>
  <p>Type of x: ${vars2}</p>
  </div>
  `;
  divs.innerHTML = html;
};

const [vars1, vars2] = numToString1();
displayOutput(codeBlock1, vars1, vars2, numDiv1);

const [para1, para2] = numToString2();
displayOutput(codeBlock2, para1, para2, stringDiv1);
