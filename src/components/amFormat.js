export default (amount) => {
  amount = amount.toString();
  let amount_decimal = amount.substring(amount.length-2);
  let amount_end = amount.substring(amount.length-5, amount.length-2);
  let amount_rem = amount.substring(0, amount.length-5);
  if (amount_rem != '') {
    amount_end = ','+amount_end;
  }
  if (amount.length > 2 ) {
    amount_decimal = '.'+amount_decimal;
  }
  return amount_rem.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + amount_end + amount_decimal;
};
