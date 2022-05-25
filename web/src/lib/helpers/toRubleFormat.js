const toRubleFormat = (n) => {
  const currency = new Intl.NumberFormat("Ru-ru", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);

  return currency;
};
export default toRubleFormat;
