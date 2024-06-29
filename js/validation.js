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
//   this.checkNumberPhone = function (phone) {
//     const re = /^\d+$/;
//     if (re.test(phone) && phone == 10) {
//       return true;
//     } else {
//       return false;
//     }
//   };
//   this.checkNumberCCCD = function (cityzen) {
//     const re = /^\d+$/;
//     if (re.test(cityzen) && cityzen == 12) {
//       return true;
//     } else {
//       return false;
//     }
//   };
}
