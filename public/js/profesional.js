/* menu */
const toggle = document.querySelector(".toggle");
const menuDashboard = document.querySelector(".menu_dashboard");
const iconoMenu = toggle.querySelector("i");
const enlacesMenu = document.querySelectorAll(".enlace");

toggle.addEventListener("click", () => {
    menuDashboard.classList.toggle("open");

    if (iconoMenu.textContent === "menu") {
        iconoMenu.textContent = "close";
    } else {
        iconoMenu.textContent = "menu";
    }
});

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menuDashboard.classList.remove("open");
        iconoMenu.textContent = "menu";
    });
});

/*grafico*/
const nombresPacientes = ['Juan', 'Ana', 'Carlos', 'Lucía', 'Pedro'];
const avancesTto = [7, 4, 9];
const avancesDx = [3, 6];

const avancesTtoFull = [...avancesTto, 0, 0];
const avancecsDxFull = [0, 0, 0, 3, 6];

const ctx = document.getElementById('avancePacienteChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico, puede ser 'bar', 'line', etc.
    data: {
        labels: nombresPacientes, // Las etiquetas del gráfico (nombres de los pacientes)
        datasets: [{
            label: 'Avance del Tratamiento (sesiones)', // El nombre del dataset
            data: avancecsDxFull,
            backgroundColor: 'rgb(255, 205, 86)', // Color de fondo de las barras
            borderColor: 'rgba(194, 191, 42, 0.73)', // Color del borde de las barras
            borderWidth: 1
        },
        {
            label: 'Avances del Diagnostico (sesiones)',
            data: avancesTtoFull,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(42, 164, 194, 0.73)',
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                max: 10 // Limita el máximo al 100%
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    display: false,
                },
                max: 100 // Limita el máximo al 100%
            }
        }
    }
});

/*panel de editar perfil*/
document.addEventListener('DOMContentLoaded', function() {
    const panelProfesional = document.querySelector(".panel_profesional");
    const panelEditar = document.querySelector(".panel_editar");
    const btnEditar = document.querySelector("#btnEditar");
    const btnVolver = document.querySelector("#btnVolver");

    panelProfesional.classList.add("visible");
    panelEditar.classList.add("hidden");

    btnEditar.addEventListener("click", function () {
        panelProfesional.classList.remove("visible");
        panelProfesional.classList.add("hidden");

        panelEditar.classList.remove("hidden");
        panelEditar.classList.add("visible");
    });


    btnVolver.addEventListener("click", function () {
        panelEditar.classList.remove("visible");
        panelEditar.classList.add("hidden");

        panelProfesional.classList.remove("hidden");
        panelProfesional.classList.add("visible");
    });

    const addTimeBtn = document.querySelector('.add-time');

    addTimeBtn.addEventListener('click', function() {
        const horariosDiv = document.getElementById('horarios');
        const newHorarioGroup = document.createElement('div');
        const newInput = document.createElement('input');
        newInput.type = 'time';
        newInput.name = 'horarios[]';
        newInput.classList.add('hora');
        newHorarioGroup.appendChild(newInput);
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.textContent = 'Eliminar hora';
        deleteBtn.classList.add('delete-time');
        
        deleteBtn.addEventListener('click', function() {
            horariosDiv.removeChild(newHorarioGroup);
        });
        newHorarioGroup.appendChild(deleteBtn);
        horariosDiv.appendChild(newHorarioGroup);
    });
});
