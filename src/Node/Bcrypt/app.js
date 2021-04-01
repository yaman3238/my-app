const bcrypt = require('bcrypt');

let User = {
    name: 'yaman',
    password:'123456'
}

let hash = bcrypt.hashSync(User.password, 10);
console.log(hash);

let newValue = bcrypt.hash(User.password, 10, (data,err) =>
{
    console.log(err)
    
})