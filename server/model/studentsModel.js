import mongoose from "mongoose"

const StudentsSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        
    },
    name: {
        type: String,
        required: true
    },
    teacherName: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true,
        

    },
    marks: {
        type: String,
        required: true
    },

})

 const Student = mongoose.model('Student', StudentsSchema)

export default Student;