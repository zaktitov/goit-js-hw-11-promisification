// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved"
// через ms миллисекунд.Значением исполнившегося промиса должно быть то кол -
//   во миллисекунд которое передали во время вызова функции delay.

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve();
      } else {
        reject(console.log("error"));
      }
    }, 2000);
  });
};
const logger = (time) => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger(2000)); // Resolved after 2000ms
delay(1000).then(logger(1000)); // Resolved after 1000ms
delay(1500).then(logger(1500)); // Resolved after 1500ms
