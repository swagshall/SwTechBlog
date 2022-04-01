module.exports = {
  format_date: date => {
    //return the formatted date 
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
};
