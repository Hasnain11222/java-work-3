let data = ["ali","hasnain","bablu","arham","azbar"]



let arraydata = () => {
let text = document.getElementById("text").value;

data.push(text);
for (let arr of data) {
console.log(arr);
}
}