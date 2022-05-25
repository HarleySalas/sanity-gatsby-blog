const useDate = (ISODate) => {
  let date = new Date(ISODate);
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  date = dd + "/" + mm + "/" + yyyy;

  return date;
};

export default useDate;
