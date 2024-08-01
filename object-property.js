const students = [
    {id: 21, name: 'Omar'},
    {id: 31, name: 'Munim'},
    {id: 41, name: 'Dipak'},
    {id: 51, name: 'Elias'}
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id>40);
console.log(biggerOne);