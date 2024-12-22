const cars = {
    bmw: {
        name: 'BMW',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 250,
    },
    audi: {
        name: 'Audi',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 220,
    },
    mercedes: {
        name: 'Mercedes',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 300,
    },
};

const getCar = (carName) => {
    return cars[carName] || 'Автомобиль не найдено.';
};

const listCarNames = () => {
    const carListElement = document.getElementById('carList');
    carListElement.innerHTML = '';

    for (const car in cars) {
        const li = document.createElement('li');
        li.textContent = cars[car].name;
        carListElement.appendChild(li);
    }
};

const createCar = (additionalProperties) => {
    const baseCar = {
        wheels: 4,
        doors: 4,
        isStarted: false,
    };
    return { ...baseCar, ...additionalProperties };
};

document.getElementById('searchButton').addEventListener('click', () => {
    const carName = document.getElementById('carNameInput').value.toLowerCase();
    const result = getCar(carName);
    document.getElementById('searchResult').textContent = 
        typeof result === 'string' ? result : JSON.stringify(result, null, 2);
});

document.getElementById('listButton').addEventListener('click', listCarNames);

document.getElementById('createCarButton').addEventListener('click', () => {
    const newCar = createCar({ name: 'Haval', hp: 198 });
    document.getElementById('newCarResult').textContent = JSON.stringify(newCar, null, 2);
});