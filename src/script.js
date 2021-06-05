const currentDate = () => new Date();

const xmasDay = () => new Date(2021, 12, 25);

const newYear = () => new Date(2022, 01, 01);

const valentinesDay = () => new Date(2022, 02, 14);

const MILLISECONDSINDAY = () => 24 * 3600 * 1000;

const calcDaysUntilXmas = () => {
  return parseInt((xmasDay() - currentDate()) / MILLISECONDSINDAY());
};

const calcDaysUntilNewYear = () => {
  return parseInt((newYear() - currentDate()) / MILLISECONDSINDAY());
};

const calcDaysUntilValentinesDay = () => {
  return parseInt((valentinesDay() - currentDate()) / MILLISECONDSINDAY());
};

const printDaysUntilXmas = () => {
  return `<li> ${calcDaysUntilXmas().toString()} days until Christmas</li>`;
};

const printDaysUntilNewYear = () => {
  return `<li> ${calcDaysUntilNewYear().toString()} days until New Year</li>`;
};

const printDaysUntilValentines = () => {
  return `<li> ${calcDaysUntilValentinesDay().toString()} days until Valentines Day</li>`;
};

const printDaysUntilAllHolidays = () =>
  printDaysUntilXmas() + printDaysUntilNewYear() + printDaysUntilValentines();

$("#trigger").click(() => {
  $("#days-until").append($(printDaysUntilAllHolidays()));
});
