const person = [
    {
        "_id": "640b3da0177ca8fb3273122d",
        "index": 0,
        "isActive": true,
        "age": 35,
        "eyeColor": "brown",
        "name": "Nanette Kirby",
        "gender": "female",
        "favoriteFruit": "strawberry"
      },
      {
        "_id": "640b3da057901dfe51194bbe",
        "index": 1,
        "isActive": true,
        "age": 29,
        "eyeColor": "blue",
        "name": "Melton Holder",
        "gender": "male",
        "favoriteFruit": "apple"
      },
      {
        "_id": "640b3da0f2c382a8558d2211",
        "index": 2,
        "isActive": false,
        "age": 36,
        "eyeColor": "brown",
        "name": "Sykes Austin",
        "gender": "male",
        "favoriteFruit": "apple"
      },
      {
        "_id": "640b3da0241fec6f1386ee55",
        "index": 3,
        "isActive": true,
        "age": 33,
        "eyeColor": "green",
        "name": "Luella Byrd",
        "gender": "female",
        "favoriteFruit": "banana"
      },
      {
        "_id": "640b3da0196d6677d41f472f",
        "index": 4,
        "isActive": false,
        "age": 34,
        "eyeColor": "green",
        "name": "Bailey Howard",
        "gender": "male",
        "favoriteFruit": "apple"
      },
      {
        "_id": "640b3da02245ff2749251295",
        "index": 5,
        "isActive": true,
        "age": 30,
        "eyeColor": "green",
        "name": "Harding Guy",
        "gender": "male",
        "favoriteFruit": "apple"
      }
]

// 1) print person yang suka buah apple dan warna mata nya biru
for(let i= 0; i < person.length; i++) {
    if (person[i].favoriteFruit == "apple" && person[i].eyeColor) {
        console.log(person[i])
    }
}

// 2) print berapa person yang age nya diatas 30
for(let i = 0; i < person.length; i++) {
    if(person[i].age > 30) {
        console.log(person[i])
    }
}

// 3) print person yang isActive true and  gender nya female
for(let i = 0; i < person.length; i++) {
    if(person[i].isActive === true && person[i].gender === "female")
    console.log(person[i])
}

//  4) print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue
for(let i = 0; i < person.length; i ++) {
    if (person[i].age > 30 || person[i].age < 25 && person[i].eyeColor === "blue") {
        console.table(person[i])
    }
}

//  5) print person yang mengandung huruf W di name nya
for(let i = 0; i < person.length; i++) {
    if(person[i].name.includes ("w")) {
        console.log(person[i])
    }
}

// 6) print person isActive false dan gender nya male dan age nya diatas 25
for(let i = 0; i < person.length; i++) {
    if(person[i].isActive === false && person[i].gender === "male" && person[i].age > 25 ) {
        console.table(person[i])
    }
}

// 7) print person age nya dibawah 30 atau eyeColor brown dan favoritfruit nya banana
for(let i = 0; i < person.length; i++) {
    if(person[i].age < 30 || person[i].eyeColor === "brown" && person[i].favoriteFruit === "banana") {
        console.table(person[i])
    }
}

// 8) print person gender male
for(let i = 0; i < person.length; i++) {
    if(person[i].gender === "male") {
        console.log(person[i])
    }
}

// 9) print person eyeColor Blue
for(let i = 0; i < person.length; i++) {
    if(person[i].eyeColor === "blue") {
        console.log(person[i])
    }
}

// 10) print person age diats 30 
for(let i = 0; i < person.length; i++) {
    if(person[i].age > 30) {
        console.table(person[i])
    }
}