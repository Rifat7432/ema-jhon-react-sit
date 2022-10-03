// use local storage to manage cart data
const addUser = (email,password)=>{
    let allUsers = {};

    //get the shopping cart from local storage
    const storedUsers = localStorage.getItem('users-data');
    if(storedUsers){
        allUsers = JSON.parse(storedUsers);
    }

    // add quantity
    const users = allUsers[email]
    if(users){
          allUsers[email] = users
    }
    else{
        allUsers[email] = password
    }
    localStorage.setItem('users-data', JSON.stringify(allUsers));
}
const activeUsers = () =>{
    let allUsers = {};

    //get the shopping cart from local storage
    const storedUsers = localStorage.getItem('users-data');
    if(storedUsers){
        allUsers = JSON.parse(storedUsers);
    }
    return allUsers;
}
const removeUser = email =>{
    const storedUsers = localStorage.getItem('users-data');
    if(storedUsers){
        const userData = JSON.parse(storedUsers);
        if(email in userData){
            delete userData[email];
            localStorage.setItem('users-data', JSON.stringify(userData));
        }
    }
}

const deleteUsers = () =>{
    localStorage.removeItem('users-data');
}

export {
    addUser, 
    removeUser,
    deleteUsers,
    activeUsers
}