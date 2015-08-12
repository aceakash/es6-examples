// let [fname, lname] = 'Akash Kurdekar'.split(' ');
// console.log(fname, lname);

// [fname, lname] = [lname, fname];
// console.log(fname, lname);

// -----------------------

const currentUser = {
	id: 23,
	name: 'akash'
};


const { id: userId, name: userName } = currentUser;
console.log(userId, userName);

const {id, name} = currentUser;
console.log("id %d, name %s", id, name);

// ----------------------


