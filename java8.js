let data = ["ali","hasnain","bablu","arham","azbar"]

let printdata = ()=>{
                                                                                                    let ul = document.getElementById("ul");
                                                                                                    for (const values of data){
                                                                                                                                                                                                        let li = document.createElement("li");
                                                                                                                                                                                                        let textNode = document.createTextNode(values);
                                                                                                                                                                                                        li.appendChild(textNode);
                                                                                                                                                                                                        ul.appendChild(li);
                                                                                                    }
}


let arraydata = () => {
                                                                                                    let text = document.getElementById("text").value;
                                                                                                    
                                                                                                    data.push(text);
printdata();
                                                                                                    }
