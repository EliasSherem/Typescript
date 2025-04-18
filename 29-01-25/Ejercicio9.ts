enum Medallas {
    First = "oro",
    Second = "plata",
    Third = "bronce",
}

function getMedalla(medalla: Medallas): string {
    switch (medalla) {
        case Medallas.First:
            return "Has ganado una medalla de oro!";
        case Medallas.Second:
            return "Has ganado una medalla de plata!";
        case Medallas.Third:
            return "Has ganado una medalla de bronce!";
        default:
            return "No has ganado ninguna medalla!";
    }
}

console.log(getMedalla(Medallas.First)); // Has ganado una medalla de oro!
console.log(getMedalla(Medallas.Second)); // Has ganado una medalla de plata!