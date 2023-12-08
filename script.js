document.addEventListener('DOMContentLoaded', function () {
    // Отримання форми та елементів для виведення результатів
    const form = document.getElementById('solidForm');
    const sideInput = document.getElementById('side');
    const radiusInput = document.getElementById('radius');
    const heightInput = document.getElementById('height');
    const resultContainer = document.getElementById('resultContainer');

    // Обробка події відправки форми
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Отримання значень з полів форми
        const side = parseFloat(sideInput.value);
        const radius = parseFloat(radiusInput.value);
        const height = parseFloat(heightInput.value);

        // Перевірка на правильність введених даних
        if (isNaN(side) || isNaN(radius) || isNaN(height) || side <= 0 || radius <= 0 || height <= 0) {
            alert('Будь ласка, введіть коректні додатні числові значення.');
            return;
        }

        // Створення об'єктів
        const cube = new Cube(side);
        const cylinder = new Cylinder(radius, height);

        // Розрахунок об'єму та площі поверхні
        cube.calculateVolume();
        cube.calculateSurfaceArea();
        cylinder.calculateVolume();
        cylinder.calculateSurfaceArea();

        // Створення елементів для виведення результатів
        const resultHeader = document.createElement('h3');
        resultHeader.textContent = 'Результати розрахунків:';

        const resultTable = document.createElement('table');
        resultTable.innerHTML = `
            <tr>
                <th>Тіло</th>
                <th>Об'єм</th>
                <th>Площа поверхні</th>
            </tr>
            <tr>
                <td>Куб</td>
                <td>${cube.volume.toFixed(2)}</td>
                <td>${cube.surfaceArea.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Циліндр</td>
                <td>${cylinder.volume.toFixed(2)}</td>
                <td>${cylinder.surfaceArea.toFixed(2)}</td>
            </tr>
        `;

        // Очищення результатів від попередніх даних
        resultContainer.innerHTML = '';

        // Додавання результатів до контейнера
        resultContainer.appendChild(resultHeader);
        resultContainer.appendChild(resultTable);
    });
});
