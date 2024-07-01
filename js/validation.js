function Validation() {
  this.CheckNull = function (value) {
    if (value.trim() === "") {
      return true;
    } else {
      return false;
    }
  };
  this.CheckEmail = function (email) {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
  };
  this.CheckNumber = function (value) {
    return !isNaN(Number(value));
  };
}
