let subject="javascript";
console.log("Hello "+ subject);

let chooseColor = document.getElementById("chooseColor");
let colorBtn = document.getElementById("colorBtn");
let age=document.getElementById("age");
let testAge=document.getElementById("testAge");
let content=document.getElementById("content");

colorBtn.addEventListener("click", (e) => {
    console.log("klick på knapp")

    let choosenColor= chooseColor.value;
 console.log (choosenColor);
document.body.style.backgroundColor=choosenColor;

})

testAge.addEventListener("click", (e) => {

    let getAge=age.value;
    console.log("age" + getAge);

    let yearsleft=18- getAge;

    if (getAge < 18){
        console.log("Mindre än 18");
        content.innerText="sorry kom tillbaks om några år!"+ yearsleft + "år!";

    } else {
        console.log("Större än 18");
        content.innerText= "vassegod ta en öl!";

    }

})
