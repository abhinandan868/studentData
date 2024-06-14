const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://bookstore:abhinandan@cluster0.hr6vghw.mongodb.net/?bookStore");
    console.log("Database is connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

const studentSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
      required: true,
    },
    enrollmentNumber: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    marks: {
      type: {
        math: Number,
        science: Number,
        english: Number,
        history: Number,
        geography: Number,
      },
      required: true,
    },
    caste: {
      type: String,
      required: true,
    },
  },
  { collection: "store" }
);

const Student = mongoose.model("Student", studentSchema);

const getStudentData = async () => {
  await connectDb();
  const students = await Student.find({});
  return students;
};

const data = getStudentData().then((data) => {
  return data;
}).catch((error) => {
  console.error(error);
  return [];
});

module.exports = data;