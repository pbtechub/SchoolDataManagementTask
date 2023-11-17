import Student from "../model/studentsModel.js";

export const getUser = async (req, res) => {
  try {
    const students = await Student.find();

    if (students) {
      res.send(students);
    } else {
      return res.status(404).json({ error: "Students not found!" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;

  try {
    const newStudent = await Student.create(user);
   
    if (newStudent) {
       
      res.status(201).json(newStudent);
    } else {
      res.status(400);
      throw new Error("Invalid student data");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }


};

export const foundUser = async (req, res) => {
  const id = req.params;
  try {
    const student = await Student.findById(id);
    if (student) {
      res.status(201).json(student);
    } else {
      res.status(400);
      throw new Error("Student not found!");
    }
  } catch (error) {
    res.status(500).json({ error: err.message });
  }


};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  console.log('====================================');
  console.log('uyiuyyiy');
  console.log('====================================');
  try {
    const deletedStudent = await Student.findByIdAndDelete(id);
   
    if (deletedStudent) {
      res
        .status(201)
        .json(`The student ${deletedStudent} deleted successfully`);
    } else {
      res.status(400);
      throw new Error("Student not found!");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

   
};

export const updateUser = async (req, res) => {
  const id = req.params.id;

  let updateObj = {};
  const { studentId, name, teacherName, subject, marks } = req.body;

  if (studentId) updateObj.studentId = studentId;
  if (name) updateObj.name = name;
  if (teacherName) updateObj.teacherName = teacherName;
  if (subject) updateObj.subject = subject;
  if (marks) updateObj.marks = marks;

  Student.findByIdAndUpdate(id, updateObj, { new: true })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send({ message: "error on update" });
    });
};
