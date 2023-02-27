export const dateToStr = (publishedDate) => {
  let strSplitDate = String(publishedDate).split(' ');
  let date = new Date(strSplitDate[0]);
  // alert(date);
  let dd = publishedDate.getDate();
  let mm = publishedDate.getMonth() + 1; //January is 0!

  let yyyy = publishedDate.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  date = dd + "-" + mm + "-" + yyyy;
  return date.toString();
}
