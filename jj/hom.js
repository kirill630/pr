let practica = require('fs');
let Arr = [];
let ArrDate = [];

practica.readFile(
    "dmm.csv",
    {encoding: "utf-8"},

    (err,data) => {
        if (err) {
            throw new Error(err);
        }else {
            class Person {
                constructor(name, username, fullname, bd, gender, documentname) {
                    this.name = name;
                    this.username = username;
                    this.fullname = fullname;
                    this.bd = bd;
                    this.gender = gender;
                    this.documentname = documentname;
                }
            }
        const g1 = /\n+/g;
        const g2 = /\n+/g;
        let arr = data.replace(g1, ``).replace(g2, ``).split(";;;;");
        arr.pop();

        for (i = 0; i < arr.length; i++) {
            let newArr = arr[i].split(";");
            let person = new Person(newArr[0],newArr[1],newArr[0] + " " + newArr[1], newArr[3], newArr[2],newArr[0].split('')[1] + "." +newArr[1]);
            Arr.push(person);
            }   
            ArrDate = Arr.sort(function(a,b) {
                return new Date(b.bd) - new Date(a.bd);
            });
        console.log(Arr);
        console.log(ArrDate); 
       }
    }
);