const persona: Persona ={
    nombre: 'Juan',
    birthYear: 1990,
    ciudad: 'Madrid'
}

type Persona = {
    nombre: string;
    birthYear: number;
    ciudad?: string;
}

function calcularEdad(birthYear: number): number {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

console.log(`La edad de ${persona.nombre} es ${calcularEdad(persona.birthYear)} años.`);
