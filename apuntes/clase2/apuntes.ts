function sumarNumeros(num1: number, num2: number, ...rest: number[]) {
    let suma = num1 + num2;
    for (let i = 0; i < rest.length; i++) {
        suma += rest[i];
    }
    return suma;
}

//eventos
const btn = document.querySelector("#btn") as HTMLButtonElement;
btn.addEventListener("click", () => {
    console.log("click en el botón");
    
})

//tuplas
const requestStatus: [number, string] = [200, "OK"];
type requestStatus = [number, string];
const websiteStatus: requestStatus = [404, "Not Found"];

//objetos
const person = {
    name: "Elias",
    city: "Mexico",
    age: 27
}
type Person = {
    name: string;
    city?: string;
    age: number;
}
function printPerson(person: Person) {
    console.log(person.age)
}
const persona2: Person = {
    name: "Juan",
    age: 35
}
printPerson(person)

type User = {
    role: string
}

type Admin = User & {
    isAdmin: boolean
}
const employee: User = {
    role: "Software developer"
}

const jefe: Admin = {
    role: "jefe",
    isAdmin: true
}

//enums
enum ORDER_STATUS {
    PENDING = "En preparacion",
    SHIPPED = "Enviado",
    DELIVERY = "En reparto",
    DELIVERED = "Entregado"
}

function showOrderStatus():string{
    return ORDER_STATUS.PENDING
}

showOrderStatus();
type Statuses = typeof ORDER_STATUS

function checkOrderStatus(shipmentCode: number, statuses: Statuses):void{
    if(shipmentCode){
        console.log(statuses.PENDING)
    }
}

checkOrderStatus(1, ORDER_STATUS)

enum DEVELOPER_LEVELS{
    JUNIOR = "JUNIOR",
    MID = "MID",
    SENIOR = "SENIOR"
}

type Employee = {
    name: string,
    age: number,
    level: DEVELOPER_LEVELS,
    salary: number
}

const employee1: Employee = {
    name: "Elias",
    age: 35,
    level: DEVELOPER_LEVELS.SENIOR,
    salary: 50000
}

function calculateEmployeeBonus(empleado: Employee){
    if(empleado.level == DEVELOPER_LEVELS.SENIOR){
        return empleado.salary*2;
    }
}

calculateEmployeeBonus(employee1)

const HTTP_STATUS = {
    200: "OK",
    404: "NOT FOUNF",
    500: "SERVER ERROR"
} as const;
