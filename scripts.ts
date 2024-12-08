document.addEventListener('DOMContentLoaded', () => {
    // Navigate to the next step
    document.getElementById('nextStep')?.addEventListener('click', () => {
        const step1 = document.getElementById('step1');
        const step2 = document.getElementById('step2');
        if (step1 && step2) {
            step1.style.display = 'none';
            step2.style.display = 'block';
        }
    });

    // Generate people and their items
    document.getElementById('generatePeople')?.addEventListener('click', () => {
        const numPeople = parseInt((document.getElementById('numPeople') as HTMLInputElement)?.value || '0');
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
                    const createCheckboxes = (type: string, label: string, count: number) => {
                        for (let j = 0; j < count; j++) {
                            personDiv.innerHTML += `<label>
                                                        <input type="checkbox" data-index="${index}" data-type="${type}">
                                                        ${label} ${j + 1}
                                                    </label><br>`;
                        }
                    };

                    const bottleCount = parseInt((promo.querySelector('.bottle') as HTMLInputElement)?.value || '0');
                    createCheckboxes('bottle', 'เบียร์ขวดที่', bottleCount);

                    const proCount = parseInt((promo.querySelector('.pro') as HTMLInputElement)?.value || '0');
                    createCheckboxes('pro', 'เบียร์โปรที่', proCount);

                    const brundyCount = parseInt((promo.querySelector('.brundy') as HTMLInputElement)?.value || '0');
                    createCheckboxes('brundy', 'เหล้าขวดที่', brundyCount);

                    const brundy2Count = parseInt((promo.querySelector('.brundy2') as HTMLInputElement)?.value || '0');
                    createCheckboxes('brundy2', 'เหล้าโปรที่', brundy2Count);

                    const mixerCount = parseInt((promo.querySelector('.mixer') as HTMLInputElement)?.value || '0');
                    createCheckboxes('mixer', 'มิกเซอร์', mixerCount);

                    const iceCount = parseInt((promo.querySelector('.ice') as HTMLInputElement)?.value || '0');
                    createCheckboxes('ice', 'น้ำแข็ง', iceCount);

                    const waterCount = parseInt((promo.querySelector('.water') as HTMLInputElement)?.value || '0');
                    createCheckboxes('water', 'น้ำเปล่า', waterCount);

                    const snacksCount = parseInt((promo.querySelector('.snacks') as HTMLInputElement)?.value || '0');
                    createCheckboxes('snacks', 'ของทานเล่น', snacksCount);

                    const others = (promo.querySelector('.others') as HTMLInputElement)?.value;
                    const othersQuantity = parseInt((promo.querySelector('.others-quantity') as HTMLInputElement)?.value || '0');
                    if (others && othersQuantity > 0) {
                        createCheckboxes('others', others, othersQuantity);
                    }
                });
                peopleList.appendChild(personDiv);
            }
            document.getElementById('step2')!.style.display = 'none';
            document.getElementById('step3')!.style.display = 'block';
        }
    });

    // Calculate costs
    document.getElementById('calculate')?.addEventListener('click', () => {
        const personCosts: { [key: string]: number } = {};
        const peopleList = document.getElementById('peopleList');
        if (peopleList) {
            peopleList.querySelectorAll('.person').forEach(person => {
                const personName = (person.querySelector('.person-name') as HTMLInputElement)?.value || 'Unknown';
                personCosts[personName] = 0;

                person.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
                    const promoIndex = parseInt((checkbox as HTMLInputElement)?.getAttribute('data-index') || '0');
                    const type = (checkbox as HTMLInputElement)?.getAttribute('data-type');
                    const promotion = document.querySelectorAll('.promotion')[promoIndex];
                    let price = 0;

                    if (type && promotion) {
                        const calculatePrice = (priceFieldSelector: string, quantitySelector: string) => {
                            const priceField = parseFloat((promotion.querySelector(priceFieldSelector) as HTMLInputElement)?.value || '0');
                            const quantity = parseFloat((promotion.querySelector(quantitySelector) as HTMLInputElement)?.value || '1');
                            return quantity > 0 ? priceField / quantity : 0;
                        };

                        switch (type) {
                            case 'bottle':
                                price = calculatePrice('.bottle-price', '.bottle');
                                break;
                            case 'pro':
                                price = calculatePrice('.pro-price', '.pro');
                                break;
                            case 'brundy':
                                price = calculatePrice('.brundy-price', '.brundy');
                                break;
                            case 'brundy2':
                                price = calculatePrice('.brundy2-price', '.brundy2');
                                break;
                            case 'mixer':
                                price = calculatePrice('.mixer-price', '.mixer');
                                break;
                            case 'ice':
                                price = calculatePrice('.ice-price', '.ice');
                                break;
                            case 'water':
                                price = calculatePrice('.water-price', '.water');
                                break;
                            case 'snacks':
                                price = calculatePrice('.snacks-price', '.snacks');
                                break;
                            case 'others':
                                price = calculatePrice('.others-price', '.others-quantity');
                                break;
                            default:
                                console.warn('Unknown type:', type);
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