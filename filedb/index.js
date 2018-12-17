const UserService = require('./services/user');

const users = [
  {name: 'John', age: 30},
  {name: 'Bob', age: 23},
  {name: 'Emily', age: 40},
  {name: 'Michelle', age: 24},
  {name: 'Chris', age: 25}
];

// UserService.save(users,'users.txt',(err,res)=>{
//     console.log('saved..?',err,res);
//     UserService.load('users.txt',(userArr)=>{
//         console.log(userArr)
//     })
    
// });


// UserService.add('Tarek',25,'users.txt',(err,res)=>{
//     console.log(err,res);
    
// })

const read = () =>{
    UserService.load('users.txt',userArr =>{
        console.log('#####################');
        console.log('Name | Age');
        userArr.forEach(user => {
            console.log(`${user.name} | ${user.age}`);
            
        });

        console.log('#####################');
        
    })
}

const add = (name,age) =>{
    UserService.add(name,age,'users.txt',(err,res)=>{
        read()
    })
}

const clear = () =>{
    UserService.save([],'users.txt',(err,res)=>{
        read()
    })
}

const args = process.argv.slice(2);

if(args[0] === 'read') read()
else if(args[0]  === 'add') add(args[1],args[2])
else if(args[0] === 'clear') clear()
else 'node index.js [CMD] [ARG1] [ARG2] ... [ARGN]'
