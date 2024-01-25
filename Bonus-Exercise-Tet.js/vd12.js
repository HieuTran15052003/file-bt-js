const employees = [
{ name: 'Emp A', age: 25 },
{ name: 'Emp B', age: 28 },
{ name: 'Emp C', age: 35 }
]
function findEmp (name) {
for(let i = 0; i<employees.length; ++i) {
if(employees[i].name === name) {
return employees[i];
}
}
}
const name ='Emp A'
emp = findEmp (name)
const name = 'Emp A'
emp = employees.find(item => item.name === name)