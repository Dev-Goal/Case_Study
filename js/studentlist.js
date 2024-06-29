function StudentList() {
  this.newStudentList = [];
  this.AddStudent = function (addStudent) {
    this.newStudentList.push(addStudent);
  };
  this.EditStudent = function (editStudent) {};
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
      }
    }
    return listSearch;
  };
}
