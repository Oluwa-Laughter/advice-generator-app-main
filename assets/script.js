"use-strict";

const diceButton = document.querySelector(".dice-button");
const adviceQuotes = document.querySelector(".advise-quotes");
const adviceQuotesId = document.querySelector(".advise-quotes-id");

const fetchAdviceApi = async function (data) {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const loadAdvice = async function () {
  const receivedData = await fetchAdviceApi();
  adviceQuotesId.textContent = receivedData.slip.id;
  adviceQuotes.textContent = receivedData.slip.advice;
};
diceButton.addEventListener("click", loadAdvice);
