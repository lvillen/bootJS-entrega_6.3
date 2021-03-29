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

var meeting = (team) => {
    var thereIsMeeting = false;

    for (i in WORK_HOURS) {
        var n = 0;
        var teamMember = team[n];

        while (n < team.length && teamMember.availability[i] === "Sí") {
            n++;
            teamMember = team[n];
            if (n === team.length) {
                console.log("Hueco encontrado en el horario " + WORK_HOURS[i]);
                thereIsMeeting = true;
            }
        }
    }

    if (thereIsMeeting === false) {
        console.log("Lo siento, no hemos encontrado hueco disponible");
    }
}

meeting(myTeam);