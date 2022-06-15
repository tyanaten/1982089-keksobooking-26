const checkPositiveArray = (initialNumber, finalNumber) => (initialNumber < 0 || finalNumber < 0) ? 0 : 1;

const swapValues = (initialNumber, finalNumber) => {
  if (finalNumber < initialNumber) {
    finalNumber = [initialNumber, initialNumber = finalNumber][0];
  }

  return [initialNumber, finalNumber];
};

const getRandomPositiveInteger = (initialNumber, finalNumber) => {
  if (checkPositiveArray(initialNumber, finalNumber) === 0) {
    throw 'Negative array';
  }

  [initialNumber, finalNumber] = swapValues(initialNumber, finalNumber);

  initialNumber = Math.ceil(initialNumber);
  finalNumber = Math.floor(finalNumber);

  return Math.floor(Math.random() * (finalNumber - initialNumber + 1)) + initialNumber;
};

const getRandomPositiveFloat = (initialNumber, finalNumber, presicion = 5) => {
  if (checkPositiveArray(initialNumber, finalNumber) === 0) {
    throw 'Negative array';
  }

  [initialNumber, finalNumber] = swapValues(initialNumber, finalNumber);

  return (Math.random() * (finalNumber - initialNumber) + initialNumber).toFixed(presicion);
};

function createAvatarAdress(length) {
  const reservedArray = [];

  return function generateAvatarAdress() {
    const randomNumber = getRandomPositiveInteger(1, length);

    if (!(reservedArray.includes(randomNumber))) {
      reservedArray.push(randomNumber);

      return (randomNumber < 10) ?
        `img/avatars/user0${randomNumber}.png` :
        `img/avatars/user${randomNumber}.png`;
    }

    if (reservedArray.length === length) {
      return;
    }

    return generateAvatarAdress();
  };
}

const createElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createRandomArray = (elements) => {
  const lengthArray = getRandomPositiveInteger(1, elements.length);
  const newArray = [];
  do {
    const newElement = createElement(elements);
    if (!(newArray.includes(newElement))) {
      newArray.push(newElement);
    }
  } while (newArray.length < lengthArray);
  return newArray;
};

const checkElementTextContent = (offerElement, offerClasses) => {
  for (let i = 0; i < offerClasses.length; i++) {
    const contentElement = offerElement.querySelector(`.popup__${offerClasses[i]}`);
    if ((!contentElement.textContent) ||
    (contentElement.textContent === ' ₽/ночь') ||
    (contentElement.textContent === ' комнаты для  гостей') ||
    (contentElement.textContent === 'Заезд после , выезд до ')) {
      contentElement.classList.add('visually-hidden');
    }
  }
};

const hideTextContent = (firstString, secondString) => {
  if (firstString === '') {
    secondString = '';
  } else if (secondString === '') {
    firstString = '';
  }

  return [firstString, secondString];
};

const checkContentExistence = (offerElement, offerKeys) => {
  for (let i = 0; i < offerKeys.length; i++) {
    if ((offerElement[offerKeys[i]] === null) || (offerElement[offerKeys[i]] === undefined)) {
      offerElement[offerKeys[i]] = '';
    }
  }
};


export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  createAvatarAdress,
  createElement,
  createRandomArray,
  checkElementTextContent,
  hideTextContent,
  checkContentExistence,
};
