const table = document.getElementById("the-table")
const workersNumber = document.getElementById("workers-number")
const urlParams = new URLSearchParams(window.location.search)

const days = ["sa", "su", "mo", "tu", "we", "th", "fr"]
const IN = "✔️"
const OUT = "❌"

let workers = 0;

days.forEach(day => {
    const need = urlParams.get(day) || 0
    document.getElementById(`${day}-need`).innerHTML = need;
    document.getElementById(`${day}-extra`).innerHTML = -need;
    document.getElementById(`${day}-extra`).style.color = -need !== 0 ? "red" : "green";
});

function addWorker() {
    workers++;
    const newRow = table.insertRow(-1);
    const newWorker = newRow.insertCell(-1)
    newWorker.innerHTML = `کارگر ${workers}`;
    newWorker.id = `worker-${workers}`
    newWorker.style.color = "red";
    days.forEach(day => {
        newRow.insertCell(-1).innerHTML = `<button id="worker-${workers}-${day}" onclick="setShift(${workers}, '${day}')">${OUT}</button>`
    });
    workersNumber.innerHTML = workers;
}

function setShift(workerNumber, day) {
    const button = document.getElementById(`worker-${workerNumber}-${day}`)
    const change = document.getElementById(`${day}-extra`)
    const current = document.getElementById(`${day}-workers`)
    if (button.innerHTML === OUT) {
        button.innerHTML = IN;
        change.innerHTML = parseInt(change.innerHTML) + 1;
        current.innerHTML = parseInt(current.innerHTML) + 1;
    } else {
        button.innerHTML = OUT;
        change.innerHTML = parseInt(change.innerHTML) - 1;
        current.innerHTML = parseInt(current.innerHTML) - 1;
    }
    change.style.color = parseInt(change.innerHTML) !== 0 ? "red" : "green";
    document.getElementById(`worker-${workerNumber}`).style.color = checkBond(workerNumber) ? "green" : "red";
}

function checkBond(workerNumber) {
    let foundDual = 0;
    let foundSingle = 0
    for (let i = 0; i < days.length; i++) {
        const button = document.getElementById(`worker-${workerNumber}-${days[i]}`)
        const nextButton = document.getElementById(`worker-${workerNumber}-${days[(i + 1) % days.length]}`)
        if (button.innerHTML === OUT) {
            foundSingle++;
            if (nextButton.innerHTML === OUT) {
                foundDual++;
            }
        }
    }
    return foundDual === 1 && foundSingle === 2;
}