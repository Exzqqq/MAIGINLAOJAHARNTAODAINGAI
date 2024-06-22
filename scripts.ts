document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nextStep')?.addEventListener('click', () => {
        const step1 = document.getElementById('step1');
        const step2 = document.getElementById('step2');
        if (step1 && step2) {
            step1.style.display = 'none';
            step2.style.display = 'block';
        }
    });

    document.getElementById('generatePeople')?.addEventListener('click', () => {
        const numPeople = parseInt((document.getElementById('numPeople') as HTMLInputElement).value);
        const peopleList = document.getElementById('peopleList');
        if (peopleList) {
            peopleList.innerHTML = '';
            for (let i = 0; i < numPeople; i++) {
                const personDiv = document.createElement('div');
                personDiv.className = 'person';
                personDiv.innerHTML = `<h3>
                                        <input type="text" value="Person ${i + 1}" class="person-name">
                                      </h3>`;
                document.querySelectorAll('.promotion').forEach((promo, index) => {
                    const bottleCount = parseInt((promo.querySelector('.bottle') as HTMLInputElement).value) || 0;
                    for (let j = 0; j < bottleCount; j++) {
                        personDiv.innerHTML += `<label>
                                                <input type="checkbox" data-index="${index}" data-type="bottle">
                                                Bottle ${j + 1}
                                              </label><br>`;
                    }
                    const proCount = parseInt((promo.querySelector('.pro') as HTMLInputElement).value) || 0;
                    for (let j = 0; j < proCount; j++) {
                        personDiv.innerHTML += `<label>
                                                <input type="checkbox" data-index="${index}" data-type="pro">
                                                Pro ${j + 1}
                                              </label><br>`;
                    }
                    const brundyCount = parseInt((promo.querySelector('.brundy') as HTMLInputElement).value) || 0;
                    for (let j = 0; j < brundyCount; j++) {
                        personDiv.innerHTML += `<label>
                                                <input type="checkbox" data-index="${index}" data-type="brundy">
                                                Brundy ${j + 1}
                                              </label><br>`;
                    }
                    const brundy2Count = parseInt((promo.querySelector('.brundy2') as HTMLInputElement).value) || 0;
                    for (let j = 0; j < brundy2Count; j++) {
                        personDiv.innerHTML += `<label>
                                                <input type="checkbox" data-index="${index}" data-type="brundy2">
                                                Brundy2 ${j + 1}
                                              </label><br>`;
                    }
                    const mixerCount = parseInt((promo.querySelector('.mixer') as HTMLInputElement).value) || 0;
                    for (let j = 0; j < mixerCount; j++) {
                        personDiv.innerHTML += `<label>
                                                <input type="checkbox" data-index="${index}" data-type="mixer">
                                                Mixer ${j + 1}
                                              </label><br>`;
                    }
                    const iceCount = parseInt((promo.querySelector('.ice') as HTMLInputElement).value) || 0;
                    for (let j = 0; j < iceCount; j++) {
                        personDiv.innerHTML += `<label>
                                                <input type="checkbox" data-index="${index}" data-type="ice">
                                                Ice ${j + 1}
                                              </label><br>`;
                    }
                    const waterCount = parseInt((promo.querySelector('.water') as HTMLInputElement).value) || 0;
                    for (let j = 0; j < waterCount; j++) {
                        personDiv.innerHTML += `<label>
                                                <input type="checkbox" data-index="${index}" data-type="water">
                                                Water ${j + 1}
                                              </label><br>`;
                    }
                    const snacksCount = parseInt((promo.querySelector('.snacks') as HTMLInputElement).value) || 0;
                    for (let j = 0; j < snacksCount; j++) {
                        personDiv.innerHTML += `<label>
                                                <input type="checkbox" data-index="${index}" data-type="snacks">
                                                Snacks ${j + 1}
                                              </label><br>`;
                    }
                });
                peopleList.appendChild(personDiv);
            }
            document.getElementById('step2')!.style.display = 'none';
            document.getElementById('step3')!.style.display = 'block';
        }
    });

    document.getElementById('calculate')?.addEventListener('click', () => {
        const personCosts: { [key: string]: number } = {};
        const peopleList = document.getElementById('peopleList');
        if (peopleList) {
            peopleList.querySelectorAll('.person').forEach(person => {
                const personName = (person.querySelector('.person-name') as HTMLInputElement).value;
                personCosts[personName] = 0;
                person.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
                    const promoIndex = parseInt((checkbox as HTMLInputElement).getAttribute('data-index') || '0');
                    const type = (checkbox as HTMLInputElement).getAttribute('data-type');
                    const promotion = document.querySelectorAll('.promotion')[promoIndex];
                    let price = 0;
                    if (type && promotion) {
                        switch (type) {
                            case 'bottle':
                                price = parseFloat((promotion.querySelector('.bottle-price') as HTMLInputElement).value) / parseFloat((promotion.querySelector('.bottle') as HTMLInputElement).value) || 0;
                                break;
                            case 'pro':
                                price = parseFloat((promotion.querySelector('.pro-price') as HTMLInputElement).value) / parseFloat((promotion.querySelector('.pro') as HTMLInputElement).value) || 0;
                                break;
                            case 'brundy':
                                price = parseFloat((promotion.querySelector('.brundy-price') as HTMLInputElement).value) / parseFloat((promotion.querySelector('.brundy') as HTMLInputElement).value) || 0;
                                break;
                            case 'brundy2':
                                price = parseFloat((promotion.querySelector('.brundy2-price') as HTMLInputElement).value) / parseFloat((promotion.querySelector('.brundy2') as HTMLInputElement).value) || 0;
                                break;
                            case 'mixer':
                                price = parseFloat((promotion.querySelector('.mixer-price') as HTMLInputElement).value) / parseFloat((promotion.querySelector('.mixer') as HTMLInputElement).value) || 0;
                                break;
                            case 'ice':
                                price = parseFloat((promotion.querySelector('.ice-price') as HTMLInputElement).value) / parseFloat((promotion.querySelector('.ice') as HTMLInputElement).value) || 0;
                                break;
                            case 'water':
                                price = parseFloat((promotion.querySelector('.water-price') as HTMLInputElement).value) / parseFloat((promotion.querySelector('.water') as HTMLInputElement).value) || 0;
                                break;
                            case 'snacks':
                                price = parseFloat((promotion.querySelector('.snacks-price') as HTMLInputElement).value) / parseFloat((promotion.querySelector('.snacks') as HTMLInputElement).value) || 0;
                                break;
                        }
                    }
                    personCosts[personName] += price;
                });
            });

            const personCostsDiv = document.getElementById('personCosts');
            if (personCostsDiv) {
                personCostsDiv.innerHTML = '';
                for (const [person, cost] of Object.entries(personCosts)) {
                    const personCostDiv = document.createElement('div');
                    personCostDiv.innerHTML = `${person}: ${cost.toFixed(2)} ฿`;
                    personCostsDiv.appendChild(personCostDiv);
                }
                document.getElementById('step3')!.style.display = 'none';
                document.getElementById('result')!.style.display = 'block';
            }
        }
    });
});
