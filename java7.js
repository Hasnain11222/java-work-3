let data = ["ali","hasnain","bablu","arham","azbar"]


let arraydata = () => {
                                                                                                    let text = document.getElementById("text").value;
                                                                                                    let ul = document.getElementById("ul");
                                                                                                    let li = document.createElement("li");
                                                                                                    let textNode = document.createTextNode("text");
                                                                                                    li.appendChild(textNode);
                                                                                                    ul.appendChild(li)
}