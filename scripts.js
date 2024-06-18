document.getElementById('nextStep').addEventListener('click', () => {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
});

document.getElementById('generatePeople').addEventListener('click', () => {
    const numPeople = parseInt(document.getElementById('numPeople').value);
    const peopleList = document.getElementById('peopleList');
    peopleList.innerHTML = '';
    for (let i = 0; i < numPeople; i++) {
        const personDiv = document.createElement('div');
        personDiv.className = 'person';
        personDiv.innerHTML = `<h3>
                                  <input type="text" value="Person ${i + 1}" class="person-name">
                               </h3>`;
        document.querySelectorAll('.promotion').forEach((promo, index) => {
            const bottleCount = parseInt(promo.querySelector('.bottle').value) || 0;
            for (let j = 0; j < bottleCount; j++) {
                personDiv.innerHTML += `<label>
                                          <input type="checkbox" data-index="${index}" data-type="bottle">
                                          Bottle ${j + 1}
                                        </label><br>`;
            }
            const mixerCount = parseInt(promo.querySelector('.mixer').value) || 0;
            for (let j = 0; j < mixerCount; j++) {
                personDiv.innerHTML += `<label>
                                          <input type="checkbox" data-index="${index}" data-type="mixer">
                                          Mixer ${j + 1}
                                        </label><br>`;
            }
            const iceCount = parseInt(promo.querySelector('.ice').value) || 0;
            for (let j = 0; j < iceCount; j++) {
                personDiv.innerHTML += `<label>
                                          <input type="checkbox" data-index="${index}" data-type="ice">
                                          Ice ${j + 1}
                                        </label><br>`;
            }
            const waterCount = parseInt(promo.querySelector('.water').value) || 0;
            for (let j = 0; j < waterCount; j++) {
                personDiv.innerHTML += `<label>
                                          <input type="checkbox" data-index="${index}" data-type="water">
                                          Water ${j + 1}
                                        </label><br>`;
            }
            const snacksCount = parseInt(promo.querySelector('.snacks').value) || 0;
            for (let j = 0; j < snacksCount; j++) {
                personDiv.innerHTML += `<label>
                                          <input type="checkbox" data-index="${index}" data-type="snacks">
                                          Snacks ${j + 1}
                                        </label><br>`;
            }
        });
        peopleList.appendChild(personDiv);
    }
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
});

document.getElementById('calculate').addEventListener('click', () => {
    const personCosts = {};
    const peopleList = document.getElementById('peopleList');
    peopleList.querySelectorAll('.person').forEach(person => {
        const personName = person.querySelector('.person-name').value;
        personCosts[personName] = 0;
        person.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            const promoIndex = parseInt(checkbox.getAttribute('data-index'));
            const type = checkbox.getAttribute('data-type');
            const promotion = document.querySelectorAll('.promotion')[promoIndex];
            let price = 0;
            switch (type) {
                case 'bottle':
                    price = parseFloat(promotion.querySelector('.bottle-price').value) / parseFloat(promotion.querySelector('.bottle').value) || 0;
                    break;
                case 'mixer':
                    price = parseFloat(promotion.querySelector('.mixer-price').value) / parseFloat(promotion.querySelector('.mixer').value) || 0;
                    break;
                case 'ice':
                    price = parseFloat(promotion.querySelector('.ice-price').value) / parseFloat(promotion.querySelector('.ice').value) || 0;
                    break;
                case 'water':
                    price = parseFloat(promotion.querySelector('.water-price').value) / parseFloat(promotion.querySelector('.water').value) || 0;
                    break;
                case 'snacks':
                    price = parseFloat(promotion.querySelector('.snacks-price').value) / parseFloat(promotion.querySelector('.snacks').value) || 0;
                    break;
            }
            personCosts[personName] += price;
        });
    });

    const personCostsDiv = document.getElementById('personCosts');
    personCostsDiv.innerHTML = '';
    for (const [person, cost] of Object.entries(personCosts)) {
        const personCostDiv = document.createElement('div');
        personCostDiv.innerHTML = `${person}: ${cost.toFixed(2)} ฿`;
        personCostsDiv.appendChild(personCostDiv);
    }
    
    document.getElementById('step3').style.display = 'none';
    document.getElementById('result').style.display = 'block';
});
