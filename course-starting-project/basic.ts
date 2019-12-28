const person: {
    name: string;
    age: number;
} = {
    name: 'Maximilian',
    age: 30,
};

enum Role { ADMIN = "Aaron", READ_ONLY = "TEST", AUTHOR = "YIN"}

const product: {
    id: string;
    price: number;
    tags: string[],
    details:{
        title: string;
        description: string;
    },
    role:[number,string];
    test: {};
}= {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer','hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    },
    role:[2,'test string'],
    test : Role.ADMIN
};

// const testperson = {
//     role:[2,'author']
// }
// testperson.role.push('admin')
// testperson.role.push(1000)

for (const t of product.tags){
    console.log({" t ": t.toUpperCase()})
}

// console.log({"tags ": product.tags})
// console.log({"testperson role ": testperson})

for (const np of testperson.role){
    console.log({" np ===> ": np })
}

if (product.test === Role.ADMIN){
    console.log("is Read Only")
}

