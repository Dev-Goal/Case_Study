function StudentList() {
  this.newStudentList = [];
  this.AddStudent = function (addStudent) {
    this.newStudentList.push(addStudent);
    // console.log(this.newStudentList);
  };

  this.RemoveStudent = function (removeStudent) {
    for (let i = 0; i < removeStudent.length; i++) {
      for (let j = 0; j < this.newStudentList.length; j++) {
        const student = this.newStudentList[j];
        if (removeStudent[i] == student.masv) {
          this.newStudentList.splice(j, 1);
        }
      }
    }
  };
  this.SearchStudent = function (searchStudent) {
    const listSearch = new StudentList();
    for (let i = 0; i < this.newStudentList.length; i++) {
      const student = this.newStudentList[i];
      if (student.masv.search(searchStudent) != -1) {
        listSearch.AddStudent(student);
      } else if (student.phone.search(searchStudent) != -1) {
        listSearch.AddStudent(student);
      } else if (student.room.search(searchStudent) != -1) {
        listSearch.AddStudent(student);
      } else if (student.cityzen.search(searchStudent) != -1) {
        listSearch.AddStudent(student);
      }
    }
    return listSearch;
  };
  this.SearchStudentOfMasv = function (masv, phone, room, cityzen) {
    for (let i = 0; i < this.newStudentList.length; i++) {
      const st = this.newStudentList[i];
      if (
        st.masv === masv ||
        st.phone === phone ||
        st.room === room ||
        st.cityzen === cityzen
      ) {
        return st;
      }
    }
    return null;
  };
  this.ChangeStudent = function (changestudent) {
    for (let i = 0; i < this.newStudentList.length; i++) {
      const stChange = this.newStudentList[i];
      if (changestudent.masv == stChange.masv) {
        stChange.fullname = changestudent.fullname;
        stChange.gender = changestudent.gender;
        stChange.birthday = changestudent.birthday;
        stChange.cityzen = changestudent.cityzen;
        stChange.school = changestudent.school;
        stChange.email = changestudent.email;
        stChange.phone = changestudent.phone;
        stChange.hometown = changestudent.hometown;
        stChange.room = changestudent.room;
        stChange.image = changestudent.image;
      }
    }
  };
}
