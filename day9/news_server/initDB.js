




// const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;
// mongoose.connect('mongodb://localhost/school',  { useUnifiedTopology: true, useNewUrlParser: true });


// const StudentSchema = mongoose.Schema({
//     name: String,  // 学生姓名
//     age: Number,   // 学生年龄
//     score: Number, // 成绩
//     class_id: {    // 学生是属于某个班
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Class'
//     }
// });

// const ClassSchema = mongoose.Schema({
//     name: String   // 班级名称
// });

// const TeacherClassSchema = mongoose.Schema({
//     teacher_id: {       // 老师  外键
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Teacher'
//     },
//     class_id: {         // 班级 外键
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Class'
//     }
// });

// const TeacherSchema = mongoose.Schema({
//     name: String,    // 老师名字
//     age: Number,     // 年龄
// });

// const Student = mongoose.model('Student', StudentSchema);
// const Class = mongoose.model('Class', ClassSchema);
// const Teacher = mongoose.model('Teacher', TeacherSchema);
// const TeacherClass = mongoose.model('TeacherClass', TeacherClassSchema);


// async function initData() {
//     await TeacherClass.deleteMany().exec();  // 删除 老师 班级 关系 表
//     await Class.deleteMany().exec();         // 删除 学生表
//     await Teacher.deleteMany().exec();       // 删除 老师表
//     await Student.deleteMany().exec();       // 删除 学生表

//     let class_record_list = [];
//     for (let a_class of class_list) {
//         // 创建班级记录
//         const class_record = await Class.create({name: a_class.name});
//         class_record_list.push(class_record);

//         for (let student of a_class.students) {
//             // 创建 学生记录   class_id 外键 关联 新创建的 班级 id
//             const student_record = await Student.create({...student, class_id: class_record._id});
//         }
//     }

//     let teacher_record_list = [];
//     for (let teacher of teacher_list) {
//         // 创建 老师 数据
//         const teacher_record = await Teacher.create(teacher);
//         teacher_record_list.push(teacher_record);
//     }

//     for (let t_c of teacher_classes) {
//         // 创建 老师 班级 关联数据
//         await TeacherClass.create({
//             teacher_id: teacher_record_list[t_c.t]._id,
//             class_id: class_record_list[t_c.c]._id
//         });
//     }
//     mongoose.connection.close();
// }

// initData().then(function () {
//     console.log('数据初始化')
// });