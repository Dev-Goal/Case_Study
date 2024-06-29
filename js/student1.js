function checkEmail(email) {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    email
  );
}
function checkNumber(value) {
  return !isNaN(Number(value));
}
function add() {
  const fullname = document.getElementById("form__name").value;
  const masv = document.getElementById("form__masv").value;
  const cityzen = document.getElementById("form__cccd").value;
  const school = document.getElementById("form__school").value;
  const email = document.getElementById("form__email").value;
  const phone = document.getElementById("form__phone").value;
  const hometown = document.getElementById("form__hometown").value;
  const room = document.getElementById("form__room").value;
  const birthday = document.getElementById("form__birthday").value;
  const gender = "";

  //Kiểm tra fullname
  if (_.isEmpty(fullname)) {
    document.getElementById("fullname__error").innerHTML =
      "Vui lòng nhập Họ và tên";
  } else if (fullname.trim()) {
    document.getElementById("fullname__error").innerHTML =
      "Không được để khoảng trống quá nhiều";
  } else if (fullname.length < 2) {
    document.getElementById("fullname__error").innerHTML = "Tên không phù hợp";
  } else {
    document.getElementById("fullname__error").innerHTML = "";
  }
  console.log(fullname);

  //Kiểm tra mã sinh viên
  if (_.isEmpty(masv)) {
    document.getElementById("masv__error").innerHTML =
      "Vui lòng nhập Mã sinh viên";
  } else if (masv.trim()) {
    document.getElementById("masv__error").innerHTML =
      "Không được để khoảng trống quá nhiều";
  } else if (masv.length < 2) {
    document.getElementById("masv__error").innerHTML =
      "Mã sinh viên không phù hợp";
  } else {
    document.getElementById("masv__error").innerHTML = "";
  }

  //Kiểm tra cccd
  if (_.isEmpty(cityzen)) {
    document.getElementById("cccd__error").innerHTML = "Vui lòng nhập CCCD";
  } else if (!checkNumber(cityzen)) {
    document.getElementById("cccd__error").innerHTML =
      "Vui lòng nhập đúng định dạng là số";
  } else if (cityzen.length > 10) {
    document.getElementById("cccd__error").innerHTML = "Số CCCD chỉ có 12 số";
  } else if (cityzen.trim()) {
    document.getElementById("cccd__error").innerHTML =
      "Không được để khoảng trống quá nhiều";
  } else {
    document.getElementById("cccd__error").innerHTML = "";
  }

  //Kiểm tra trường
  if (_.isEmpty(school)) {
    document.getElementById("school__error").innerHTML =
      "Vui lòng nhập Trường đang học";
  } else if (school.trim()) {
    document.getElementById("school__error").innerHTML =
      "Không được để khoảng trống quá nhiều";
  } else if (school.length < 2) {
    document.getElementById("school__error").innerHTML = "Trường không phù hợp";
  } else {
    document.getElementById("school__error").innerHTML = "";
  }

  //Kiểm tra email
  if (_.isEmpty(email)) {
    document.getElementById("email__error").innerHTML = "Vui lòng nhập Email";
  } else if (!checkEmail(email)) {
    document.getElementById("email__error").innerHTML =
      "Email không đúng định dạng";
  } else {
    document.getElementById("email__error").innerHTML = "";
  }

  //Kiểm tra số điện thoại
  if (_.isEmpty(phone)) {
    document.getElementById("phone__error").innerHTML =
      "Vui lòng nhập Số điện thoại";
  } else if (!checkNumber(phone)) {
    document.getElementById("phone__error").innerHTML =
      "Vui lòng nhập đúng định dạng là số";
  } else if (phone.length > 10) {
    document.getElementById("phone__error").innerHTML =
      "Số điện thoại chỉ có 10 số";
  } else if (phone.trim()) {
    document.getElementById("phone__error").innerHTML =
      "Không được để khoảng trống quá nhiều";
  } else {
    document.getElementById("phone__error").innerHTML = "";
  }

  //Kiểm tra quê quán
  if (_.isEmpty(hometown)) {
    document.getElementById("hometown__error").innerHTML =
      "Vui lòng nhập Quê quán";
  } else if (hometown.trim()) {
    document.getElementById("hometown__error").innerHTML =
      "Không được để khoảng trống quá nhiều";
  } else if (hometown.length < 2) {
    document.getElementById("hometown__error").innerHTML =
      "Tỉnh thành này không có ở Việt Nam";
  } else {
    document.getElementById("hometown__error").innerHTML = "";
  }

  //Kiểm tra room
  if (_.isEmpty(room)) {
    document.getElementById("room__error").innerHTML =
      "Vui lòng bố trí phòng ở";
  } else {
    document.getElementById("room__error").innerHTML = "";
  }

  //Định dạng lại ngày tháng năm
  if (birthday) {
    const birthdayDate = new Date(birthday);
    const day = String(birthdayDate.getDate()).padStart(2, "0");
    const month = String(birthdayDate.getMonth() + 1).padStart(2, "0");
    const year = String(birthdayDate.getFullYear());
    const fomartDate = `${day}/${month}/${year}`;
    console.log(fomartDate);
  } else {
    document.getElementById("birthdayError").innerHTML =
      "Vui lòng chọn ngày sinh";
  }

  //Kiểm tra dữ liệu nhận radio
  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  } else if (document.getElementById("female").checked) {
    gender = document.getElementById("female").value;
  } else if (document.getElementById("other").checked) {
    gender = document.getElementById("other").value;
  } else {
    document.getElementById("gender__error").innerHTML =
      "Vui lòng chọn giới tính";
  }
}
