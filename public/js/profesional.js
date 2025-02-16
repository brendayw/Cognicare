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
            data: avancesTtoFull,
            backgroundColor: 'rgb(255, 205, 86)', // Color de fondo de las barras
            borderColor: 'rgba(194, 191, 42, 0.73)', // Color del borde de las barras
            borderWidth: 1
        },
        {
            label: 'Avances del Diagnostico (sesiones)',
            data: avancecsDxFull,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(42, 164, 194, 0.73)',
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
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