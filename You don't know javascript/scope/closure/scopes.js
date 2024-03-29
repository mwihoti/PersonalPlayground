var employees = [
    {
        name: "Daniel Mwihoti",
        id: 2333,
        code: 212
    },
    {
        name: "Victor Muriithi",
        id: 112,
        code: 202
    },
    {
        name: "Faith Nyambura",
        id: 12,
        code: '101'
    }
]

function getEmployee(empId)
{
for (let emp of employees){
    if ( emp.id == empId ){
        return {name: emp.name, code: emp.code}
    }
}
}

var getEmp = getEmployee(112);
console.log(getEmp)