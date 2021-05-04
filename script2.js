const numDiv = document.getElementById("num1");
const stringDiv = document.getElementById("string1");

function numToString1() {
  const noStr = "1";
  const no = +noStr;
  const typeVar1 = typeof noStr;
  console.log(typeVar1);
  const typeVar2 = typeof no;
  console.log(typeVar2);
  return [noStr, no, typeVar1, typeVar2];
}

const numToString2 = () => {
  const noStr = "1";
  const no = Number(noStr);
  const typeVar1 = typeof noStr;
  console.log(typeVar1);
  const typeVar2 = typeof no;
  console.log(typeVar2);
  return [noStr, no, typeVar1, typeVar2];
};

const codeBlock1 = `
 const noStr = "1";<br>
  const no = +noStr;<br>
  const typeVar1 = typeof noSTr;<br>
  const typeVar2 = typeof no;  <br>
  return [noStr, no, typeVar1, typeVar2];
`;

const codeBlock2 = `
const noStr = "1";<br>
  const no = Number(noStr);<br>
  const typeVar1 = typeof noSTr;<br>
  const typeVar2 = typeof no;  <br>
  return [noStr, no, typeVar1, typeVar2];
`;

const displayOutput = (code, var1, var2, var3, var4, divs) => {
  let html = `
  <h3>Converting Strings to Numbers</h3>  
  <div class="code"> ${code} </div> 
  <h4>Output:</h4>
  <div class="result">
  <p>noStr: <mark>${var1}</mark></p>
  <p>Type of noStr: <mark>${var3}</mark></p>
  <p>no: <mark>${var2}</mark></p>
  <p>Type of no: <mark>${var4}</mark></p>
  </div>
  `;
  divs.innerHTML = html;
};

const [vars1, vars2, vars3, vars4] = numToString1();
displayOutput(codeBlock1, vars1, vars2, vars3, vars4, numDiv);

const [para1, para2, para3, para4] = numToString2();
displayOutput(codeBlock2, para1, para2, para3, para4, stringDiv);
