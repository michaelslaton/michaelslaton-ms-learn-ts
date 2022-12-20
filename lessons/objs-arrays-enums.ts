// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
// } = {
//   name: 'Michael',
//   age: 38,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, 'author'],
// }

enum Role { ADMIN = 1, READ_ONLY, MOD, AUTHOR = 'AUTHOR'};

const person = {
  name: 'Michael',
  age: 38,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
}

// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'] // !!! ERROR !!!

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Movies'];

console.log(person.name)

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) console.log("is author");