document.addEventListener('DOMContentLoaded', function () {
    var _a, _b, _c;
    (_a = document.getElementById('nextStep')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var step1 = document.getElementById('step1');
        var step2 = document.getElementById('step2');
        if (step1 && step2) {
            step1.style.display = 'none';
            step2.style.display = 'block';
        }
    });
    (_b = document.getElementById('generatePeople')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        var numPeople = parseInt(document.getElementById('numPeople').value);
        var peopleList = document.getElementById('peopleList');
        if (peopleList) {
            peopleList.innerHTML = '';
            var _loop_1 = function (i) {
                var personDiv = document.createElement('div');
                personDiv.className = 'person';
                personDiv.innerHTML = "<h3>\n                                        <input type=\"text\" value=\"Person ".concat(i + 1, "\" class=\"person-name\">\n                                      </h3>");
                document.querySelectorAll('.promotion').forEach(function (promo, index) {
                    var bottleCount = parseInt(promo.querySelector('.bottle').value) || 0;
                    for (var j = 0; j < bottleCount; j++) {
                        personDiv.innerHTML += "<label>\n                                                    <input type=\"checkbox\" data-index=\"".concat(index, "\" data-type=\"\u0E40\u0E1A\u0E35\u0E22\u0E23\u0E4C\u0E02\u0E27\u0E14\u0E17\u0E35\u0E48\">\n                                                    \u0E40\u0E1A\u0E35\u0E22\u0E23\u0E4C\u0E02\u0E27\u0E14\u0E17\u0E35\u0E48 ").concat(j + 1, "\n                                                </label><br>");
                    }
                    var proCount = parseInt(promo.querySelector('.pro').value) || 0;
                    for (var j = 0; j < proCount; j++) {
                        personDiv.innerHTML += "<label>\n                                                <input type=\"checkbox\" data-index=\"".concat(index, "\" data-type=\"\u0E40\u0E1A\u0E35\u0E22\u0E23\u0E4C\u0E42\u0E1B\u0E23\u0E17\u0E35\u0E48\">\n                                                \u0E40\u0E1A\u0E35\u0E22\u0E23\u0E4C\u0E42\u0E1B\u0E23\u0E17\u0E35\u0E48 ").concat(j + 1, "\n                                              </label><br>");
                    }
                    var brundyCount = parseInt(promo.querySelector('.brundy').value) || 0;
                    for (var j = 0; j < brundyCount; j++) {
                        personDiv.innerHTML += "<label>\n                                                <input type=\"checkbox\" data-index=\"".concat(index, "\" data-type=\"\u0E40\u0E2B\u0E25\u0E49\u0E32\u0E02\u0E27\u0E14\u0E17\u0E35\u0E48\">\n                                                \u0E40\u0E2B\u0E25\u0E49\u0E32\u0E02\u0E27\u0E14\u0E17\u0E35\u0E48 ").concat(j + 1, "\n                                              </label><br>");
                    }
                    var brundy2Count = parseInt(promo.querySelector('.brundy2').value) || 0;
                    for (var j = 0; j < brundy2Count; j++) {
                        personDiv.innerHTML += "<label>\n                                                <input type=\"checkbox\" data-index=\"".concat(index, "\" data-type=\"\u0E40\u0E2B\u0E25\u0E49\u0E32\u0E42\u0E1B\u0E23\u0E17\u0E35\u0E48\">\n                                                \u0E40\u0E2B\u0E25\u0E49\u0E32\u0E42\u0E1B\u0E23\u0E17\u0E35\u0E48 ").concat(j + 1, "\n                                              </label><br>");
                    }
                    var mixerCount = parseInt(promo.querySelector('.mixer').value) || 0;
                    for (var j = 0; j < mixerCount; j++) {
                        personDiv.innerHTML += "<label>\n                                                <input type=\"checkbox\" data-index=\"".concat(index, "\" data-type=\"\u0E21\u0E34\u0E01\u0E40\u0E0B\u0E2D\u0E23\u0E4C\">\n                                                \u0E21\u0E34\u0E01\u0E40\u0E0B\u0E2D\u0E23\u0E4C ").concat(j + 1, "\n                                              </label><br>");
                    }
                    var iceCount = parseInt(promo.querySelector('.ice').value) || 0;
                    for (var j = 0; j < iceCount; j++) {
                        personDiv.innerHTML += "<label>\n                                                <input type=\"checkbox\" data-index=\"".concat(index, "\" data-type=\"\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07\">\n                                                \u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07 ").concat(j + 1, "\n                                              </label><br>");
                    }
                    var waterCount = parseInt(promo.querySelector('.water').value) || 0;
                    for (var j = 0; j < waterCount; j++) {
                        personDiv.innerHTML += "<label>\n                                                <input type=\"checkbox\" data-index=\"".concat(index, "\" data-type=\"\u0E19\u0E49\u0E33\u0E40\u0E1B\u0E25\u0E48\u0E32\">\n                                                \u0E19\u0E49\u0E33\u0E40\u0E1B\u0E25\u0E48\u0E32 ").concat(j + 1, "\n                                              </label><br>");
                    }
                    var snacksCount = parseInt(promo.querySelector('.snacks').value) || 0;
                    for (var j = 0; j < snacksCount; j++) {
                        personDiv.innerHTML += "<label>\n                                                <input type=\"checkbox\" data-index=\"".concat(index, "\" data-type=\"snacks\">\n                                                \u0E02\u0E2D\u0E07\u0E17\u0E32\u0E19\u0E40\u0E25\u0E48\u0E19 ").concat(j + 1, "\n                                              </label><br>");
                    }
                    var others = promo.querySelector('.others').value;
                    var othersQuantity = parseInt(promo.querySelector('.others-quantity').value) || 0;
                    if (others && othersQuantity > 0) {
                        for (var j = 0; j < othersQuantity; j++) {
                            personDiv.innerHTML += "<label>\n                                                    <input type=\"checkbox\" data-index=\"".concat(index, "\" data-type=\"\u0E2D\u0E37\u0E48\u0E19\u0E46\" data-item=\"").concat(others, "\">\n                                                    ").concat(others, " ").concat(j + 1, "\n                                                  </label><br>");
                        }
                    }
                });
                peopleList.appendChild(personDiv);
            };
            for (var i = 0; i < numPeople; i++) {
                _loop_1(i);
            }
            document.getElementById('step2').style.display = 'none';
            document.getElementById('step3').style.display = 'block';
        }
    });
    (_c = document.getElementById('calculate')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
        var personCosts = {};
        var peopleList = document.getElementById('peopleList');
        if (peopleList) {
            peopleList.querySelectorAll('.person').forEach(function (person) {
                var personName = person.querySelector('.person-name').value;
                personCosts[personName] = 0;
                person.querySelectorAll('input[type="checkbox"]:checked').forEach(function (checkbox) {
                    var promoIndex = parseInt(checkbox.getAttribute('data-index') || '0');
                    var type = checkbox.getAttribute('data-type');
                    var promotion = document.querySelectorAll('.promotion')[promoIndex];
                    var price = 0;
                    if (type && promotion) {
                        switch (type) {
                            case 'bottle':
                                price = parseFloat(promotion.querySelector('.bottle-price').value) / parseFloat(promotion.querySelector('.bottle').value) || 0;
                                break;
                            case 'pro':
                                price = parseFloat(promotion.querySelector('.pro-price').value) / parseFloat(promotion.querySelector('.pro').value) || 0;
                                break;
                            case 'brundy':
                                price = parseFloat(promotion.querySelector('.brundy-price').value) / parseFloat(promotion.querySelector('.brundy').value) || 0;
                                break;
                            case 'brundy2':
                                price = parseFloat(promotion.querySelector('.brundy2-price').value) / parseFloat(promotion.querySelector('.brundy2').value) || 0;
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
                            case 'อื่นๆ':
                                var othersPrice = parseFloat(promotion.querySelector('.others-price').value) || 0;
                                var othersQuantity = parseFloat(promotion.querySelector('.others-quantity').value) || 1;
                                price = othersPrice / othersQuantity;
                                break;
                        }
                    }
                    personCosts[personName] += price;
                });
            });
            var personCostsDiv = document.getElementById('personCosts');
            if (personCostsDiv) {
                personCostsDiv.innerHTML = '';
                for (var _i = 0, _a = Object.entries(personCosts); _i < _a.length; _i++) {
                    var _b = _a[_i], person = _b[0], cost = _b[1];
                    var personCostDiv = document.createElement('div');
                    personCostDiv.innerHTML = "".concat(person, ": ").concat(cost.toFixed(2), " \u0E3F");
                    personCostsDiv.appendChild(personCostDiv);
                }
                document.getElementById('step3').style.display = 'none';
                document.getElementById('result').style.display = 'block';
            }
        }
    });
});
