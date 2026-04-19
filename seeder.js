const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Class = require('./models/Class');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const seedData = async () => {
    try {
        await User.deleteMany();
        await Class.deleteMany();

        // Passwords in clear text for seeder (model will hash them)
        const faculty1 = await User.create({
            name: 'Deepak Kaushik',
            email: 'faculty@college.edu',
            password: 'password123',
            role: 'faculty'
        });

        const student1 = await User.create({
            name: 'Subham Kumar Singh',
            email: 'subham@krmu.edu',
            password: 'password123',
            role: 'student',
            programme: 'B.Tech CSE Data Science'
        });

        await User.create({
            name: 'Admin User',
            email: 'admin@college.edu',
            password: 'password123',
            role: 'admin'
        });

        const programmeName = 'B.Tech CSE Data Science';
        const classes = [
            // Monday
            { course_name: 'Web Development', programme: programmeName, section: 'DS-1', day: 'Monday', schedule_time: '09:00 AM - 10:00 AM, 10:00 AM - 11:00 AM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            { course_name: 'DSA', programme: programmeName, section: 'DS-1', day: 'Monday', schedule_time: '10:00 AM - 11:00 AM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            { course_name: 'Minor Project', programme: programmeName, section: 'DS-1', day: 'Monday', schedule_time: '12:00 PM - 01:00 PM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            { course_name: 'Maths', programme: programmeName, section: 'DS-1', day: 'Monday', schedule_time: '02:00 PM - 03:00 PM, 03:00 PM - 04:00 PM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            
            // Tuesday
            { course_name: 'DSA Lab', programme: programmeName, section: 'DS-1', day: 'Tuesday', schedule_time: '09:00 AM - 10:00 AM, 10:00 AM - 11:00 AM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            { course_name: 'Web Development', programme: programmeName, section: 'DS-1', day: 'Tuesday', schedule_time: '12:00 PM - 01:00 PM, 01:00 PM - 02:00 PM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            { course_name: 'Physics', programme: programmeName, section: 'DS-1', day: 'Tuesday', schedule_time: '03:00 PM - 04:00 PM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            
            // Wednesday
            { course_name: 'Minor Project', programme: programmeName, section: 'DS-1', day: 'Wednesday', schedule_time: '09:00 AM - 10:00 AM, 10:00 AM - 11:00 AM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            { course_name: 'Makers Lab (Group-1)', programme: programmeName, section: 'DS-1', day: 'Wednesday', schedule_time: '12:00 PM - 01:00 PM, 01:00 PM - 02:00 PM, 02:00 PM - 03:00 PM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            { course_name: 'Physics Lab (Group-1)', programme: programmeName, section: 'DS-1', day: 'Wednesday', schedule_time: '12:00 PM - 01:00 PM, 01:00 PM - 02:00 PM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            
            // Thursday
            { course_name: 'Web Development Lab', programme: programmeName, section: 'DS-1', day: 'Thursday', schedule_time: '09:00 AM - 10:00 AM, 10:00 AM - 11:00 AM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            { course_name: 'Maths', programme: programmeName, section: 'DS-1', day: 'Thursday', schedule_time: '12:00 PM - 01:00 PM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            { course_name: 'Physics', programme: programmeName, section: 'DS-1', day: 'Thursday', schedule_time: '01:00 PM - 02:00 PM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            { course_name: 'Open Elective', programme: programmeName, section: 'DS-1', day: 'Thursday', schedule_time: '03:00 PM - 04:00 PM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            
            // Friday
            { course_name: 'Physics Lab (Group-2)', programme: programmeName, section: 'DS-1', day: 'Friday', schedule_time: '09:00 AM - 10:00 AM, 10:00 AM - 11:00 AM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            { course_name: 'Makers Lab (Group-2)', programme: programmeName, section: 'DS-1', day: 'Friday', schedule_time: '09:00 AM - 10:00 AM, 10:00 AM - 11:00 AM, 11:00 AM - 12:00 PM', faculty_name: faculty1.name, faculty_id: faculty1._id },
            { course_name: 'Open Elective', programme: programmeName, section: 'DS-1', day: 'Friday', schedule_time: '01:00 PM - 03:00 PM', faculty_name: faculty1.name, faculty_id: faculty1._id }
        ];

        const createdClasses = await Class.create(classes);

        // Seed some sample attendance for the student
        const Attendance = require('./models/Attendance');
        await Attendance.deleteMany();

        const student = await User.findOne({ email: 'subham@krmu.edu' });
        
        for (let i = 0; i < 15; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            
            // Randomly pick 3-4 classes per day to have marked
            const activeClasses = createdClasses.sort(() => 0.5 - Math.random()).slice(0, 4);

            for (const cls of activeClasses) {
                const d = new Date(date);
                d.setHours(0,0,0,0);
                try {
                    await Attendance.create({
                        student: student._id,
                        subject: cls.course_name,
                        date: d,
                        status: Math.random() > 0.2 ? 'present' : 'absent',
                        markedBy: faculty1._id
                    });
                } catch (e) {}
            }
        }

        console.log('Demo data seeded successfully (Users, Classes & Attendance)');
        process.exit();
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

seedData();
