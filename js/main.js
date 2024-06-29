const studentList = new StudentList();
const validate = new Validation();
function ElementID(id) {
  const element = document.getElementById(id);
  return element;
}

function ADDStudent() {
  fullname = ElementID("form__name").value;
  masv = ElementID("form__masv").value;
  gender = "";
  birthday = ElementID("form__birthday").value;
  cityzen = ElementID("form__cityzen").value;
  school = ElementID("form__school").value;
  email = ElementID("form__email").value;
  phone = ElementID("form__phone").value;
  hometown = ElementID("form__hometown").value;
  room = ElementID("form__room").value;

  //Kiểm tra fullname
  if (validate.CheckNull(fullname)) {
    document.getElementById("fullname__error").innerHTML =
      "Vui lòng điền Họ và tên";
  } else {
    document.getElementById("fullname__error").innerHTML = "";
  }
  //Kiểm tra mã sinh viên
  if (validate.CheckNull(masv)) {
    document.getElementById("masv__error").innerHTML =
      "Vui lòng điền Mã sinh viên";
  } else {
    document.getElementById("masv__error").innerHTML = "";
  }
  //   Kiểm tra cccd
  if (validate.CheckNull(cityzen)) {
    document.getElementById("cityzen__error").innerHTML = "Vui lòng điền CCCD";
  } else if (!validate.CheckNumber(cityzen)) {
    document.getElementById("cityzen__error").innerHTML =
      "CCCD được định là số và có 12 số";
  } else {
    document.getElementById("cityzen__error").innerHTML = "";
  }
  //Kiểm tra trường
  if (validate.CheckNull(school)) {
    document.getElementById("school__error").innerHTML =
      "Vui lòng điền Trường đang theo học";
  } else {
    document.getElementById("school__error").innerHTML = "";
  }
  //Kiểm tra email
  if (validate.CheckNull(email)) {
    document.getElementById("email__error").innerHTML = "Vui lòng điền Email";
  } else if (!validate.CheckEmail(email)) {
    document.getElementById("email__error").innerHTML =
      "Email không đúng định dạng";
  } else {
    document.getElementById("email__error").innerHTML = "";
  }
  //Kiểm tra số điện thoại
  if (validate.CheckNull(phone)) {
    document.getElementById("phone__error").innerHTML =
      "Vui lòng điền Số điện thoại";
  } else if (!validate.CheckNumber(phone)) {
    document.getElementById("phone__error").innerHTML =
      "Số điện thoại được định là số và có 10 số";
  } else {
    document.getElementById("phone__error").innerHTML = "";
  }
  //Kiểm tra quê quán
  if (validate.CheckNull(hometown)) {
    document.getElementById("hometown__error").innerHTML =
      "Vui lòng điền Quê quán";
  } else {
    document.getElementById("hometown__error").innerHTML = "";
  }
  //Kiểm tra phòng
  if (validate.CheckNull(room)) {
    document.getElementById("room__error").innerHTML =
      "Vui lòng bố trí phòng ở cho sinh viên";
  } else {
    document.getElementById("room__error").innerHTML = "";
  }

  //Kiểm tra giới tính
  if (ElementID("male").checked) {
    gender = ElementID("male").value;
    document.getElementById("gender__error").innerHTML = "";
  } else if (ElementID("female").checked) {
    gender = ElementID("female").value;
    document.getElementById("gender__error").innerHTML = "";
  } else if (ElementID("other").checked) {
    gender = ElementID("other").value;
    document.getElementById("gender__error").innerHTML = "";
  } else {
    document.getElementById("gender__error").innerHTML =
      "Bạn chưa chọn giới tính";
  }

  //Định dạng lại ngày tháng năm
  if (birthday) {
    const birthdayDate = new Date(birthday);
    const day = String(birthdayDate.getDate()).padStart(2, "0");
    const month = String(birthdayDate.getMonth() + 1).padStart(2, "0");
    const year = String(birthdayDate.getFullYear());
    const fomartDate = `${day}/${month}/${year}`;
  } else {
    document.getElementById("birthdayError").innerHTML =
      "Vui lòng chọn ngày sinh";
  }

  //Thêm Sinh Viên
  const student = new Student(
    fullname,
    masv,
    gender,
    birthday,
    cityzen,
    school,
    email,
    phone,
    hometown,
    room
  );
  studentList.AddStudent(student);
  UpdateStudent(studentList);
  console.log(studentList);
}

function UpdateStudent(StudentList) {
  const listTable = ElementID("tbodyStudent");
  listTable.innerHTML = "";
  for (let i = 0; i < StudentList.newStudentList.length; i++) {
    const st = studentList.newStudentList[i];
    const tr = document.createElement("tr");
    const tdCheckBox = document.createElement("td");
    const tdFullname = CreateTd("fullname", st.fullname);
    const tdMasv = CreateTd("masv", st.masv);
    const tdGender = CreateTd("gender", st.gender);
    const tdBirthday = CreateTd("birthday", st.birthday);
    const tdCityzen = CreateTd("cityzen", st.cityzen);
    const tdSchool = CreateTd("school", st.school);
    const tdEmail = CreateTd("email", st.email);
    const tdPhone = CreateTd("phone", st.phone);
    const tdHometown = CreateTd("hometown", st.hometown);
    const tdRoom = CreateTd("room", st.room);
    tr.appendChild(tdCheckBox);
    tr.appendChild(tdFullname);
    tr.appendChild(tdMasv);
    tr.appendChild(tdGender);
    tr.appendChild(tdBirthday);
    tr.appendChild(tdCityzen);
    tr.appendChild(tdSchool);
    tr.appendChild(tdEmail);
    tr.appendChild(tdPhone);
    tr.appendChild(tdHometown);
    tr.appendChild(tdRoom);
    listTable.appendChild(tr);
  }
}
function CreateTd(className, value) {
  const td = document.createElement("td");
  td.className = className;
  td.innerHTML = value;
  return td;
}
