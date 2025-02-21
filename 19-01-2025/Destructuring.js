//class
const user = {
    id: 1,
    profile: {
      name: 'Anu',
      age: 25,
    },
  };
  
  const {
    profile: { name, age },
  } = user;
  console.log(name); 
  console.log(age);  
  
  //Array
const points = [1, [2, 3], 4];
const [a, [b, c], d] = points;
console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 
