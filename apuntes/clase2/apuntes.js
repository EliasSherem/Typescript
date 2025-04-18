"use strict";
function sumarNumeros(num1, num2, ...rest) {
    let suma = num1 + num2;
    for (let i = 0; i < rest.length; i++) {
        suma += rest[i];
    }
    return suma;
}
//eventos
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    console.log("click en el botón");
});
//tuplas
const requestStatus = [200, "OK"];
const websiteStatus = [404, "Not Found"];
//objetos
const person = {
    name: "Elias",
    city: "Mexico",
    age: 27
};
function printPerson(person) {
    console.log(person.age);
}
const persona2 = {
    name: "Juan",
    age: 35
};
printPerson(person);
const employee = {
    role: "Software developer"
};
const jefe = {
    role: "jefe",
    isAdmin: true
};
//enums
var ORDER_STATUS;
(function (ORDER_STATUS) {
    ORDER_STATUS["PENDING"] = "En preparacion";
    ORDER_STATUS["SHIPPED"] = "Enviado";
    ORDER_STATUS["DELIVERY"] = "En reparto";
    ORDER_STATUS["DELIVERED"] = "Entregado";
})(ORDER_STATUS || (ORDER_STATUS = {}));
function showOrderStatus() {
    return ORDER_STATUS.PENDING;
}
showOrderStatus();
function checkOrderStatus(shipmentCode, statuses) {
    if (shipmentCode) {
        console.log(statuses.PENDING);
    }
}
checkOrderStatus(1, ORDER_STATUS);
var DEVELOPER_LEVELS;
(function (DEVELOPER_LEVELS) {
    DEVELOPER_LEVELS["JUNIOR"] = "JUNIOR";
    DEVELOPER_LEVELS["MID"] = "MID";
    DEVELOPER_LEVELS["SENIOR"] = "SENIOR";
})(DEVELOPER_LEVELS || (DEVELOPER_LEVELS = {}));
const employee1 = {
    name: "Elias",
    age: 35,
    level: DEVELOPER_LEVELS.SENIOR,
    salary: 50000
};
function calculateEmployeeBonus(empleado) {
    if (empleado.level == DEVELOPER_LEVELS.SENIOR) {
        return empleado.salary * 2;
    }
}
calculateEmployeeBonus(employee1);
const HTTP_STATUS = {
    200: "OK",
    404: "NOT FOUNF",
    500: "SERVER ERROR"
};
