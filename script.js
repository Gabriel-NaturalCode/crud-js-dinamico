function updateTime() {
    const hora = new Date();

    const opcoesHora = { 
        hour: 'numeric', 
        minute: 'numeric'
    };

    const formatoHora = new Intl.DateTimeFormat('pt-BR', opcoesHora);
    const horaFormatada = formatoHora.format(hora);

    document.getElementById("now").innerText = `${horaFormatada}`
}

setInterval(updateTime, 60000)

updateTime();

const diaDoMes = new Date();

const opcoes = { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
};

const formatoData = new Intl.DateTimeFormat('pt-BR', opcoes);
const dataFormatada = formatoData.format(diaDoMes);

document.getElementById("calendar").innerText = `${dataFormatada}`

const btnSaveTask = document.getElementById("saveTask")

saveTask.addEventListener('click', () => {
    const titleTask = document.getElementById("title").value;
    const taskCategory = document.getElementById("category").value;
    const taskTime = document.getElementById("time").value;

    const task = {
        "titulo": titleTask,
        "categoria": taskCategory,
        "hora": taskTime
    }

    const cardTask = document.getElementById("cardTask");
    document.getElementById("alert").classList.add("d-none");
    cardTask.innerHTML += `
    <div class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">${titleTask}</h5>
            <p class="card-text">${taskCategory}, ${taskTime}</p>
            <button type="button" class="btn btn-dark btn-sm bi bi-pencil-fill"></button>
            <button type="button" class="btn btn-dark btn-sm bi bi-trash-fill"></button>
            <div>
                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="check task">
            </div>
        </div>
    </div>
    `
})

