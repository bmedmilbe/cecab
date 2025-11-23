export const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const getDay = (date: string) => {
  let newDate: Date = new Date(date);
  return newDate.getDate();
};
export const getMonth = (date: string) => {
  let newDate: Date = new Date(date);

  return monthNames[newDate.getMonth()];
};
export const getYear = (date: string) => {
  let newDate: Date = new Date(date);
  return newDate.getFullYear();
};
