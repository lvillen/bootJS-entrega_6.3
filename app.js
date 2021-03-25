// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
var myTeam = [{
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

// Parte 1: Generación de aleatoriedad
var isAvailable = () => (Math.random() < 0.5 ? "Sí" : "No");

var definingSchedule = (team) => {
    for (var teamMember of team) {
        for (var i = 0; i < teamMember.availability.length; i++) {
            teamMember.availability[i] = isAvailable();
        }
    }  
}

var showingSchedule = (team) => {
    for (var teamMember of team) {
        console.log("Disponibilidad de " + teamMember.name);
        for (var i in WORK_HOURS) {
            console.log(WORK_HOURS[i] + ": " + teamMember.availability[i]);
        }
    }
}

definingSchedule(myTeam);
showingSchedule(myTeam);

// Parte 2: Buscar el hueco libre

// Para buscar el primer hueco libre 
// habrá que comprobar la primera franja horaria en la que 
// todos los miembros del equipo están disponibles.

var meeting = (team) => {
    for (i in WORK_HOURS) {
        var n = 0;
        var teamMember = team[n];

        while (n < team.length && teamMember.availability[i] === "Sí") {
            n++;
            teamMember = team[n];
            if (n === team.length) {
                console.log("Hueco encontrado en el horario " + WORK_HOURS[i]);
            }
        }


    }

    // Comprobar por hora: 
        // 0: No
        // 1: Sí, Sí, No
        // 2: Sí, No
        // 3: Sí, Sí, Sí, No
        // 4: Sí, No
        // 5: Sí, No
        // 6: No
        // 7: No

    // Print "Lo siento, no hay hueco en el equipo"

}

meeting(myTeam);