
class Student {
    constructor(name, health, address, id, name1, job, phonenumber) {
        this.name = name;
        this.health = health;
        this.address = address;
        this.id = id;
        this.name1 = name1;
        this.job = job;
        this.phonenumber = phonenumber;
    }
}
class Teacher {
    constructor(name, pinfor, cinfor, idT) {
        this.name = name;
        this.pinfor = pinfor;
        this.cinfor = cinfor;
        this.idT = idT;
    }
}
let studentList = [];
let teacherList = [];
function addStudent() {
    let name = prompt("Nhập tên học sinh:");
    let health = prompt("Nhập thông tin sức khỏe học sinh:");
    let id = parseInt(prompt("Nhập mã học sinh:"));
    let address = prompt("Nhập địa chỉ học sinh:");
    let name1 = prompt("Nhập tên phụ huynh học sinh:");
    let job = prompt("Nhập nghề nghiệp của phụ huynh:");
    let phonenumber = prompt("Nhập số điện thoại phụ huynh:");
    let newStudent = new Student(name, health, address, id, name1, job, phonenumber);
    studentList.push(newStudent);
}

function displayStudents() {
    let output = document.getElementById("student-output");
    output.innerHTML = "<h2>Danh sách học sinh</h2>";
    studentList.forEach(student => {
        const studentInfo = `
            <div class="student">
                <p><strong>ID:</strong> ${student.id}</p>
                <p><strong>Tên:</strong> ${student.name}</p>
                <p><strong>Sức khỏe:</strong> ${student.health}</p>
                <p><strong>Địa chỉ:</strong> ${student.address}</p>
                <p><strong>Tên phụ huynh:</strong> ${student.name1}</p>
                <p><strong>Nghề nghiệp phụ huynh:</strong> ${student.job}</p>
                <p><strong>Số điện thoại phụ huynh:</strong> ${student.phonenumber}</p>
            </div>
        `;
        output.insertAdjacentHTML('beforeend', studentInfo);
    });
}


function addTeacher() {
    let name = prompt("Nhập tên giáo viên:");
    let pinfor = prompt("Nhập thông tin giáo viên:");
    let cinfor = prompt("Nhập số điện thoại giáo viên:");
    let idT = parseInt(prompt("Nhập mã số giáo viên:"));
    let newTeacher = new Teacher(name, pinfor, cinfor, idT);
    teacherList.push(newTeacher);
}

function displayTeachers() {
    let output = document.getElementById("teacher-output");
    output.innerHTML = "<h2>Danh sách giáo viên</h2>";
    teacherList.forEach(teacher => {
        const teacherInfo = `
            <div class="teacher">
                <p><strong>Mã số:</strong> ${teacher.idT}</p>
                <p><strong>Tên:</strong> ${teacher.name}</p>
                <p><strong>Thông tin:</strong> ${teacher.pinfor}</p>
                <p><strong>Số điện thoại:</strong> ${teacher.cinfor}</p>
            </div>
        `;
        output.insertAdjacentHTML('beforeend', teacherInfo);
    });
}