// ─── Mock Data ────────────────────────────────────────────────────────────────
const mockData = {
    users: [
        { id: '1', name: 'Admin User', email: 'admin@krmu.edu.in', role: 'admin', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face' },
        { id: 'fac4', name: 'Deepak Kaushik', email: 'faculty@krmu.edu.in', role: 'faculty', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face' },
        { id: '3', name: 'Subham Kumar', email: 'student@krmu.edu.in', role: 'student', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face' }
    ],
    departments: [
        { id: '1', name: 'Computer Science' },
        { id: '2', name: 'Mathematics' },
        { id: '3', name: 'Physics' }
    ],
    courses: [
        { id: '1', name: 'Data Structures', department_id: '1', department_name: 'Computer Science' },
        { id: '2', name: 'Algorithms', department_id: '1', department_name: 'Computer Science' },
        { id: '3', name: 'Calculus I', department_id: '2', department_name: 'Mathematics' },
        { id: '4', name: 'Web Development-II', department_id: '1', department_name: 'Computer Science' },
        { id: '5', name: 'Computational Mathematics-II', department_id: '2', department_name: 'Mathematics' },
        { id: '6', name: 'Data Structures Algorithms', department_id: '1', department_name: 'Computer Science' },
        { id: '7', name: 'Minor Project', department_id: '1', department_name: 'Computer Science' },
        { id: '8', name: 'Physics', department_id: '3', department_name: 'Physics' }
    ],
    classes: [
        { id: '1', course_id: '1', course_name: 'Data Structures', faculty_id: 'fac1', faculty_name: 'Dr Shaquinb Hassan', semester: 'Fall 2024', schedule_time: 'Mon, Wed, Fri 9:00-10:30', room_no: 'A-101', section: 'B.Tech CSE Core' },
        { id: '2', course_id: '2', course_name: 'Algorithms', faculty_id: 'fac1', faculty_name: 'Dr Shaquinb Hassan', semester: 'Fall 2024', schedule_time: 'Tue, Thu 14:00-15:30', room_no: 'B-204', section: 'B.Tech Data Science' },
        { id: '3', course_id: '4', course_name: 'Web Development-II', faculty_id: 'fac2', faculty_name: 'Dr Shadav Mohammad', semester: 'Fall 2024', schedule_time: 'Mon, Wed 11:00-12:30', room_no: 'C-302', section: 'B.Tech CSE (AI/ML)' },
        { id: '4', course_id: '5', course_name: 'Computational Mathematics-II', faculty_id: 'fac3', faculty_name: 'Dr Arun Yadav', semester: 'Fall 2024', schedule_time: 'Tue, Thu 9:00-10:30', room_no: 'A-203', section: 'B.Tech Data Science' },
        { id: '5', course_id: '6', course_name: 'Data Structures Algorithms', faculty_id: 'fac1', faculty_name: 'Dr Shaquinb Hassan', semester: 'Fall 2024', schedule_time: 'Wed, Fri 14:00-15:30', room_no: 'B-105', section: 'B.Tech CSE Core' },
        { id: '6', course_id: '7', course_name: 'Minor Project', faculty_id: 'fac4', faculty_name: 'Deepak Kaushik', semester: 'Fall 2024', schedule_time: 'Fri 10:00-13:30', room_no: 'Lab-3', section: '1 Btech Cse Data Science 1st Year' },
        { id: '7', course_id: '7', course_name: 'Minor Project', faculty_id: 'fac4', faculty_name: 'Deepak Kaushik', semester: 'Fall 2024', schedule_time: 'Mon 14:00-17:00', room_no: 'Lab-1', section: '2nd Btech Cse AI & ML (F) 1st year' },
        { id: '8', course_id: '1', course_name: 'DSA', faculty_id: 'fac4', faculty_name: 'Deepak Kaushik', semester: 'Fall 2024', schedule_time: 'Tue, Thu 9:00-10:30', room_no: 'A-101', section: '1 Btech Cse (B) 2nd year' },
        { id: '9', course_id: '1', course_name: 'DSA', faculty_id: 'fac4', faculty_name: 'Deepak Kaushik', semester: 'Fall 2024', schedule_time: 'Wed, Fri 11:00-12:30', room_no: 'B-205', section: '1 Btech Cse (B) 2nd year' },
        { id: '10', day: 'Monday', course_id: '1', course_name: 'Web Development', faculty_id: 'fac2', faculty_name: 'Dr Shadav Mohammad', semester: 'Fall 2024', schedule_time: 'Mon 9:00-10:00', room_no: 'C-302', section: 'B.Tech CSE 1st Year' },
        { id: '11', day: 'Monday', course_id: '1', course_name: 'Web Development', faculty_id: 'fac2', faculty_name: 'Dr Shadav Mohammad', semester: 'Fall 2024', schedule_time: 'Mon 10:00-11:00', room_no: 'C-302', section: 'B.Tech CSE 1st Year' },
        { id: '12', day: 'Monday', course_id: '1', course_name: 'DSA', faculty_id: 'fac1', faculty_name: 'Dr Shaquinb Hassan', semester: 'Fall 2024', schedule_time: 'Mon 10:00-11:00', room_no: 'A-101', section: 'B.Tech CSE 1st Year' },
        { id: '13', day: 'Monday', course_id: '7', course_name: 'Minor Project', faculty_id: 'fac4', faculty_name: 'Deepak Kaushik', semester: 'Fall 2024', schedule_time: 'Mon 12:00-13:00', room_no: 'Lab-1', section: 'B.Tech CSE 1st Year' },
        { id: '14', day: 'Monday', course_id: '5', course_name: 'Mathematics', faculty_id: 'fac5', faculty_name: 'Dr Priya Sharma', semester: 'Fall 2024', schedule_time: 'Mon 14:00-15:00', room_no: 'A-201', section: 'B.Tech CSE 1st Year' },
        { id: '15', day: 'Monday', course_id: '5', course_name: 'Mathematics', faculty_id: 'fac5', faculty_name: 'Dr Priya Sharma', semester: 'Fall 2024', schedule_time: 'Mon 15:00-16:00', room_no: 'A-201', section: 'B.Tech CSE 1st Year' },
        { id: '16', day: 'Tuesday', course_id: '1', course_name: 'DSA Lab', faculty_id: 'fac1', faculty_name: 'Dr Shaquinb Hassan', semester: 'Fall 2024', schedule_time: 'Tue 9:00-10:00', room_no: 'Lab-2', section: 'B.Tech CSE 1st Year' },
        { id: '17', day: 'Tuesday', course_id: '1', course_name: 'DSA Lab', faculty_id: 'fac1', faculty_name: 'Dr Shaquinb Hassan', semester: 'Fall 2024', schedule_time: 'Tue 10:00-11:00', room_no: 'Lab-2', section: 'B.Tech CSE 1st Year' },
        { id: '18', day: 'Tuesday', course_id: '2', course_name: 'Web Development', faculty_id: 'fac2', faculty_name: 'Dr Shadav Mohammad', semester: 'Fall 2024', schedule_time: 'Tue 12:00-13:00', room_no: 'C-303', section: 'B.Tech CSE 1st Year' },
        { id: '19', day: 'Tuesday', course_id: '2', course_name: 'Web Development', faculty_id: 'fac2', faculty_name: 'Dr Shadav Mohammad', semester: 'Fall 2024', schedule_time: 'Tue 13:00-14:00', room_no: 'C-303', section: 'B.Tech CSE 1st Year' },
        { id: '20', day: 'Tuesday', course_id: '8', course_name: 'Physics', faculty_id: 'fac6', faculty_name: 'Dr Kirti Saini', semester: 'Fall 2024', schedule_time: 'Tue 15:00-16:00', room_no: 'Sci-Lab-1', section: 'B.Tech CSE 1st Year' },
        { id: '21', day: 'Wednesday', course_id: '7', course_name: 'Minor Project', faculty_id: 'fac4', faculty_name: 'Deepak Kaushik', semester: 'Fall 2024', schedule_time: 'Wed 9:00-10:00', room_no: 'Lab-3', section: 'B.Tech CSE 1st Year' },
        { id: '22', day: 'Wednesday', course_id: '7', course_name: 'Minor Project', faculty_id: 'fac4', faculty_name: 'Deepak Kaushik', semester: 'Fall 2024', schedule_time: 'Wed 10:00-11:00', room_no: 'Lab-3', section: 'B.Tech CSE 1st Year' },
        { id: '23', day: 'Wednesday', course_id: '9', course_name: 'Makers Lab', faculty_id: 'fac8', faculty_name: 'Dr Maker Lead', semester: 'Fall 2024', schedule_time: 'Wed 12:00-13:00', room_no: 'Maker-Lab', section: 'B.Tech CSE 1st Year (Group-1)' },
        { id: '24', day: 'Wednesday', course_id: '9', course_name: 'Makers Lab', faculty_id: 'fac8', faculty_name: 'Dr Maker Lead', semester: 'Fall 2024', schedule_time: 'Wed 13:00-14:00', room_no: 'Maker-Lab', section: 'B.Tech CSE 1st Year (Group-1)' },
        { id: '25', day: 'Wednesday', course_id: '9', course_name: 'Makers Lab', faculty_id: 'fac8', faculty_name: 'Dr Maker Lead', semester: 'Fall 2024', schedule_time: 'Wed 14:00-15:00', room_no: 'Maker-Lab', section: 'B.Tech CSE 1st Year (Group-1)' },
        { id: '26', day: 'Wednesday', course_id: '8', course_name: 'Physics Lab', faculty_id: 'fac6', faculty_name: 'Dr Kirti Saini', semester: 'Fall 2024', schedule_time: 'Wed 12:00-13:00', room_no: 'Sci-Lab-2', section: 'B.Tech CSE 1st Year (Group 1)' },
        { id: '27', day: 'Wednesday', course_id: '8', course_name: 'Physics Lab', faculty_id: 'fac6', faculty_name: 'Dr Kirti Saini', semester: 'Fall 2024', schedule_time: 'Wed 13:00-14:00', room_no: 'Sci-Lab-2', section: 'B.Tech CSE 1st Year (Group 1)' },
        { id: '28', day: 'Thursday', course_id: '2', course_name: 'Web Development Lab', faculty_id: 'fac2', faculty_name: 'Dr Shadav Mohammad', semester: 'Fall 2024', schedule_time: 'Thu 9:00-10:00', room_no: 'Lab-4', section: 'B.Tech CSE 1st Year' },
        { id: '29', day: 'Thursday', course_id: '2', course_name: 'Web Development Lab', faculty_id: 'fac2', faculty_name: 'Dr Shadav Mohammad', semester: 'Fall 2024', schedule_time: 'Thu 10:00-11:00', room_no: 'Lab-4', section: 'B.Tech CSE 1st Year' },
        { id: '30', day: 'Thursday', course_id: '5', course_name: 'Mathematics', faculty_id: 'fac5', faculty_name: 'Dr Priya Sharma', semester: 'Fall 2024', schedule_time: 'Thu 12:00-13:00', room_no: 'A-201', section: 'B.Tech CSE 1st Year' },
        { id: '31', day: 'Thursday', course_id: '8', course_name: 'Physics', faculty_id: 'fac6', faculty_name: 'Dr Kirti Saini', semester: 'Fall 2024', schedule_time: 'Thu 13:00-14:00', room_no: 'Sci-Lab-1', section: 'B.Tech CSE 1st Year' },
        { id: '32', day: 'Thursday', course_id: '10', course_name: 'Open Elective', faculty_id: 'fac9', faculty_name: 'Dr Elective Lead', semester: 'Fall 2024', schedule_time: 'Thu 15:00-16:00', room_no: 'A-301', section: 'B.Tech CSE 1st Year' },
        { id: '33', day: 'Friday', course_id: '8', course_name: 'Physics Lab', faculty_id: 'fac6', faculty_name: 'Dr Kirti Saini', semester: 'Fall 2024', schedule_time: 'Fri 9:00-10:00', room_no: 'Sci-Lab-1', section: 'B.Tech CSE 1st Year (Group-2)' },
        { id: '34', day: 'Friday', course_id: '8', course_name: 'Physics Lab', faculty_id: 'fac6', faculty_name: 'Dr Kirti Saini', semester: 'Fall 2024', schedule_time: 'Fri 10:00-11:00', room_no: 'Sci-Lab-1', section: 'B.Tech CSE 1st Year (Group-2)' },
        { id: '35', day: 'Friday', course_id: '9', course_name: 'Makers Lab', faculty_id: 'fac8', faculty_name: 'Dr Maker Lead', semester: 'Fall 2024', schedule_time: 'Fri 9:00-10:00', room_no: 'Maker-Lab', section: 'B.Tech CSE 1st Year (Group 2)' },
        { id: '36', day: 'Friday', course_id: '9', course_name: 'Makers Lab', faculty_id: 'fac8', faculty_name: 'Dr Maker Lead', semester: 'Fall 2024', schedule_time: 'Fri 10:00-11:00', room_no: 'Maker-Lab', section: 'B.Tech CSE 1st Year (Group 2)' },
        { id: '37', day: 'Friday', course_id: '9', course_name: 'Makers Lab', faculty_id: 'fac8', faculty_name: 'Dr Maker Lead', semester: 'Fall 2024', schedule_time: 'Fri 11:00-12:00', room_no: 'Maker-Lab', section: 'B.Tech CSE 1st Year (Group 2)' },
        { id: '38', day: 'Friday', course_id: '10', course_name: 'Open Elective', faculty_id: 'fac9', faculty_name: 'Dr Elective Lead', semester: 'Fall 2024', schedule_time: 'Fri 13:00-15:00', room_no: 'A-301', section: 'B.Tech CSE 1st Year' }
    ],
    attendanceRecords: (() => {
        const fMap = {
            'Data Structures': ['fac1', 'Dr Shaquinb Hassan'],
            'Algorithms': ['fac1', 'Dr Shaquinb Hassan'],
            'Web Development-II': ['fac2', 'Dr Shadav Mohammad'],
            'Computational Mathematics-II': ['fac3', 'Dr Arun Yadav'],
            'Data Structures Algorithms': ['fac1', 'Dr Shaquinb Hassan'],
            'Minor Project': ['fac4', 'Dr Deepak Kaushik'],
            'Physics': ['fac5', 'Dr Kirti Saini'],
            'DSA': ['fac1', 'Dr Shaquinb Hassan'],
            'WebDev': ['fac2', 'Dr Shadav Mohammad'],
            'Minor Computation': ['fac3', 'Dr Arun Yadav'],
            'Mathematics': ['fac5', 'Dr Priya Sharma'],
            'Chemistry': ['fac7', 'Dr Neha Gupta'],
            'Web Development': ['fac2', 'Dr Shadav Mohammad'],
            'DSA Lab': ['fac1', 'Dr Shaquinb Hassan'],
            'Web Development Lab': ['fac2', 'Dr Shadav Mohammad'],
            'Physics Lab': ['fac6', 'Dr Kirti Saini'],
            'Makers Lab': ['fac8', 'Dr Maker Lead'],
            'Open Elective': ['fac9', 'Dr Elective Lead']
        };
        const mk = (id, cls_id, cls_name, stu_id, stu_name, date, status, remarks) => ({
            id, class_id: cls_id, class_name: cls_name, student_id: stu_id, student_name: stu_name,
            date, status, remarks: remarks || '', marked_by: fMap[cls_name][0], marked_by_name: fMap[cls_name][1],
            timestamp: date + 'T09:00:00Z'
        });
        return [
            // ── Subham Kumar (id:3) ─────────────────────────────────────────────
            mk('r01', '3', 'Web Development-II', '3', 'Subham Kumar', '2024-02-01', 'present'),
            mk('r02', '3', 'Web Development-II', '3', 'Subham Kumar', '2024-02-06', 'present'),
            mk('r03', '3', 'Web Development-II', '3', 'Subham Kumar', '2024-02-08', 'absent'),
            mk('r04', '3', 'Web Development-II', '3', 'Subham Kumar', '2024-02-13', 'present'),
            mk('r05', '3', 'Web Development-II', '3', 'Subham Kumar', '2024-02-15', 'present'),
            mk('r06', '3', 'Web Development-II', '3', 'Subham Kumar', '2024-02-20', 'present'),
            mk('r07', '3', 'Web Development-II', '3', 'Subham Kumar', '2024-02-22', 'absent'),
            mk('r08', '3', 'Web Development-II', '3', 'Subham Kumar', '2024-02-24', 'present'),
            mk('r09', '4', 'Computational Mathematics-II', '3', 'Subham Kumar', '2024-02-02', 'present'),
            mk('r10', '4', 'Computational Mathematics-II', '3', 'Subham Kumar', '2024-02-07', 'absent'),
            mk('r11', '4', 'Computational Mathematics-II', '3', 'Subham Kumar', '2024-02-09', 'present'),
            mk('r12', '4', 'Computational Mathematics-II', '3', 'Subham Kumar', '2024-02-14', 'present'),
            mk('r13', '4', 'Computational Mathematics-II', '3', 'Subham Kumar', '2024-02-16', 'present'),
            mk('r14', '4', 'Computational Mathematics-II', '3', 'Subham Kumar', '2024-02-21', 'absent'),
            mk('r15', '5', 'Data Structures Algorithms', '3', 'Subham Kumar', '2024-02-01', 'present'),
            mk('r16', '5', 'Data Structures Algorithms', '3', 'Subham Kumar', '2024-02-05', 'present'),
            mk('r17', '5', 'Data Structures Algorithms', '3', 'Subham Kumar', '2024-02-12', 'absent'),
            mk('r18', '5', 'Data Structures Algorithms', '3', 'Subham Kumar', '2024-02-19', 'present'),
            mk('r19', '5', 'Data Structures Algorithms', '3', 'Subham Kumar', '2024-02-22', 'present'),
            mk('r20', '6', 'Minor Project', '3', 'Subham Kumar', '2024-02-03', 'present'),
            mk('r21', '6', 'Minor Project', '3', 'Subham Kumar', '2024-02-10', 'absent', 'Sick leave'),
            mk('r22', '6', 'Minor Project', '3', 'Subham Kumar', '2024-02-17', 'present'),
            mk('r23', '6', 'Minor Project', '3', 'Subham Kumar', '2024-02-24', 'present'),
            mk('r24', '7', 'Physics', '3', 'Subham Kumar', '2024-02-04', 'present'),
            mk('r25', '7', 'Physics', '3', 'Subham Kumar', '2024-02-11', 'present'),
            mk('r26', '7', 'Physics', '3', 'Subham Kumar', '2024-02-18', 'absent'),
            mk('r27', '7', 'Physics', '3', 'Subham Kumar', '2024-02-25', 'present'),
            mk('r28', '1', 'Data Structures', '3', 'Subham Kumar', '2024-02-06', 'present'),
            mk('r29', '1', 'Data Structures', '3', 'Subham Kumar', '2024-02-13', 'present'),
            mk('r30', '1', 'Data Structures', '3', 'Subham Kumar', '2024-02-20', 'absent'),
            mk('r31', '2', 'Algorithms', '3', 'Subham Kumar', '2024-02-07', 'present'),
            mk('r32', '2', 'Algorithms', '3', 'Subham Kumar', '2024-02-14', 'present'),
            mk('r33', '2', 'Algorithms', '3', 'Subham Kumar', '2024-02-21', 'present'),
            // ── Vaibhav Gupta (id:4) ──────────────────────────────────────────────
            mk('r34', '3', 'Web Development-II', '4', 'Vaibhav Gupta', '2024-02-01', 'absent'),
            mk('r35', '3', 'Web Development-II', '4', 'Vaibhav Gupta', '2024-02-06', 'absent'),
            mk('r36', '3', 'Web Development-II', '4', 'Vaibhav Gupta', '2024-02-08', 'present'),
            mk('r37', '3', 'Web Development-II', '4', 'Vaibhav Gupta', '2024-02-13', 'absent'),
            mk('r38', '3', 'Web Development-II', '4', 'Vaibhav Gupta', '2024-02-15', 'present'),
            mk('r39', '3', 'Web Development-II', '4', 'Vaibhav Gupta', '2024-02-20', 'absent'),
            mk('r40', '3', 'Web Development-II', '4', 'Vaibhav Gupta', '2024-02-22', 'present'),
            mk('r41', '4', 'Computational Mathematics-II', '4', 'Vaibhav Gupta', '2024-02-02', 'present'),
            mk('r42', '4', 'Computational Mathematics-II', '4', 'Vaibhav Gupta', '2024-02-07', 'present'),
            mk('r43', '4', 'Computational Mathematics-II', '4', 'Vaibhav Gupta', '2024-02-09', 'absent'),
            mk('r44', '4', 'Computational Mathematics-II', '4', 'Vaibhav Gupta', '2024-02-14', 'absent'),
            mk('r45', '4', 'Computational Mathematics-II', '4', 'Vaibhav Gupta', '2024-02-16', 'present'),
            mk('r46', '5', 'Data Structures Algorithms', '4', 'Vaibhav Gupta', '2024-02-01', 'absent'),
            mk('r47', '5', 'Data Structures Algorithms', '4', 'Vaibhav Gupta', '2024-02-05', 'absent'),
            mk('r48', '5', 'Data Structures Algorithms', '4', 'Vaibhav Gupta', '2024-02-12', 'present'),
            mk('r49', '5', 'Data Structures Algorithms', '4', 'Vaibhav Gupta', '2024-02-19', 'absent'),
            mk('r50', '6', 'Minor Project', '4', 'Vaibhav Gupta', '2024-02-03', 'event', 'Tech Fest participant'),
            mk('r51', '6', 'Minor Project', '4', 'Vaibhav Gupta', '2024-02-10', 'present'),
            mk('r52', '7', 'Physics', '4', 'Vaibhav Gupta', '2024-02-04', 'present'),
            mk('r53', '7', 'Physics', '4', 'Vaibhav Gupta', '2024-02-11', 'absent'),
            mk('r54', '7', 'Physics', '4', 'Vaibhav Gupta', '2024-02-18', 'absent'),
            mk('r55', '1', 'Data Structures', '4', 'Vaibhav Gupta', '2024-02-06', 'absent'),
            mk('r56', '1', 'Data Structures', '4', 'Vaibhav Gupta', '2024-02-13', 'present'),
            mk('r57', '2', 'Algorithms', '4', 'Vaibhav Gupta', '2024-02-07', 'absent'),
            mk('r58', '2', 'Algorithms', '4', 'Vaibhav Gupta', '2024-02-14', 'absent'),
            // ── Sameer Mishra (id:5) ────────────────────────────────────────────────
            mk('r59', '3', 'Web Development-II', '5', 'Sameer Mishra', '2024-02-01', 'present'),
            mk('r60', '3', 'Web Development-II', '5', 'Sameer Mishra', '2024-02-06', 'present'),
            mk('r61', '3', 'Web Development-II', '5', 'Sameer Mishra', '2024-02-08', 'present'),
            mk('r62', '3', 'Web Development-II', '5', 'Sameer Mishra', '2024-02-13', 'absent'),
            mk('r63', '3', 'Web Development-II', '5', 'Sameer Mishra', '2024-02-15', 'present'),
            mk('r64', '3', 'Web Development-II', '5', 'Sameer Mishra', '2024-02-20', 'present'),
            mk('r65', '4', 'Computational Mathematics-II', '5', 'Sameer Mishra', '2024-02-02', 'present'),
            mk('r66', '4', 'Computational Mathematics-II', '5', 'Sameer Mishra', '2024-02-07', 'present'),
            mk('r67', '4', 'Computational Mathematics-II', '5', 'Sameer Mishra', '2024-02-09', 'present'),
            mk('r68', '4', 'Computational Mathematics-II', '5', 'Sameer Mishra', '2024-02-14', 'present'),
            mk('r69', '5', 'Data Structures Algorithms', '5', 'Sameer Mishra', '2024-02-01', 'present'),
            mk('r70', '5', 'Data Structures Algorithms', '5', 'Sameer Mishra', '2024-02-05', 'absent'),
            mk('r71', '5', 'Data Structures Algorithms', '5', 'Sameer Mishra', '2024-02-12', 'present'),
            mk('r72', '5', 'Data Structures Algorithms', '5', 'Sameer Mishra', '2024-02-19', 'present'),
            mk('r73', '6', 'Minor Project', '5', 'Sameer Mishra', '2024-02-03', 'present'),
            mk('r74', '6', 'Minor Project', '5', 'Sameer Mishra', '2024-02-10', 'present'),
            mk('r75', '7', 'Physics', '5', 'Sameer Mishra', '2024-02-04', 'absent'),
            mk('r76', '7', 'Physics', '5', 'Sameer Mishra', '2024-02-11', 'present'),
            mk('r77', '7', 'Physics', '5', 'Sameer Mishra', '2024-02-18', 'present'),
            mk('r78', '1', 'Data Structures', '5', 'Sameer Mishra', '2024-02-06', 'present'),
            mk('r79', '1', 'Data Structures', '5', 'Sameer Mishra', '2024-02-13', 'present'),
            mk('r80', '2', 'Algorithms', '5', 'Sameer Mishra', '2024-02-07', 'event', 'Sports Day'),
            mk('r81', '2', 'Algorithms', '5', 'Sameer Mishra', '2024-02-14', 'present'),
            // ── Manik Chouhan (id:6) ──────────────────────────────────────────────────
            mk('r82', '3', 'Web Development-II', '6', 'Manik Chouhan', '2024-02-01', 'present'),
            mk('r83', '3', 'Web Development-II', '6', 'Manik Chouhan', '2024-02-06', 'present'),
            mk('r84', '3', 'Web Development-II', '6', 'Manik Chouhan', '2024-02-08', 'present'),
            mk('r85', '3', 'Web Development-II', '6', 'Manik Chouhan', '2024-02-13', 'present'),
            mk('r86', '3', 'Web Development-II', '6', 'Manik Chouhan', '2024-02-15', 'absent'),
            mk('r87', '4', 'Computational Mathematics-II', '6', 'Manik Chouhan', '2024-02-02', 'present'),
            mk('r88', '4', 'Computational Mathematics-II', '6', 'Manik Chouhan', '2024-02-07', 'absent'),
            mk('r89', '4', 'Computational Mathematics-II', '6', 'Manik Chouhan', '2024-02-09', 'present'),
            mk('r90', '5', 'Data Structures Algorithms', '6', 'Manik Chouhan', '2024-02-01', 'present'),
            mk('r91', '5', 'Data Structures Algorithms', '6', 'Manik Chouhan', '2024-02-05', 'present'),
            mk('r92', '5', 'Data Structures Algorithms', '6', 'Manik Chouhan', '2024-02-12', 'present'),
            mk('r93', '6', 'Minor Project', '6', 'Manik Chouhan', '2024-02-03', 'present'),
            mk('r94', '6', 'Minor Project', '6', 'Manik Chouhan', '2024-02-10', 'event', 'Tech Fest volunteer'),
            mk('r95', '7', 'Physics', '6', 'Manik Chouhan', '2024-02-04', 'present'),
            mk('r96', '7', 'Physics', '6', 'Manik Chouhan', '2024-02-11', 'present'),
            mk('r97', '1', 'Data Structures', '6', 'Manik Chouhan', '2024-02-06', 'present'),
            mk('r98', '1', 'Data Structures', '6', 'Manik Chouhan', '2024-02-13', 'present'),
            mk('r99', '2', 'Algorithms', '6', 'Manik Chouhan', '2024-02-07', 'present'),
            mk('r100', '2', 'Algorithms', '6', 'Manik Chouhan', '2024-02-14', 'absent'),
            // ── Aditya Kumar Singh (id:7) ─────────────────────────────────────────────
            mk('r101', '3', 'Web Development-II', '7', 'Aditya Kumar Singh', '2024-02-01', 'absent'),
            mk('r102', '3', 'Web Development-II', '7', 'Aditya Kumar Singh', '2024-02-06', 'present'),
            mk('r103', '3', 'Web Development-II', '7', 'Aditya Kumar Singh', '2024-02-08', 'absent'),
            mk('r104', '3', 'Web Development-II', '7', 'Aditya Kumar Singh', '2024-02-13', 'present'),
            mk('r105', '4', 'Computational Mathematics-II', '7', 'Aditya Kumar Singh', '2024-02-02', 'present'),
            mk('r106', '4', 'Computational Mathematics-II', '7', 'Aditya Kumar Singh', '2024-02-07', 'absent'),
            mk('r107', '4', 'Computational Mathematics-II', '7', 'Aditya Kumar Singh', '2024-02-09', 'absent'),
            mk('r108', '5', 'Data Structures Algorithms', '7', 'Aditya Kumar Singh', '2024-02-01', 'present'),
            mk('r109', '5', 'Data Structures Algorithms', '7', 'Aditya Kumar Singh', '2024-02-05', 'absent'),
            mk('r110', '6', 'Minor Project', '7', 'Aditya Kumar Singh', '2024-02-03', 'present'),
            mk('r111', '6', 'Minor Project', '7', 'Aditya Kumar Singh', '2024-02-10', 'event', 'Cultural Night performer'),
            mk('r112', '7', 'Physics', '7', 'Aditya Kumar Singh', '2024-02-04', 'absent'),
            mk('r113', '7', 'Physics', '7', 'Aditya Kumar Singh', '2024-02-11', 'present'),
            mk('r114', '1', 'Data Structures', '7', 'Aditya Kumar Singh', '2024-02-06', 'absent'),
            mk('r115', '1', 'Data Structures', '7', 'Aditya Kumar Singh', '2024-02-13', 'absent'),
            mk('r116', '2', 'Algorithms', '7', 'Aditya Kumar Singh', '2024-02-07', 'present'),
            mk('r117', '2', 'Algorithms', '7', 'Aditya Kumar Singh', '2024-02-14', 'absent'),
            // ── Simran (id:8) ────────────────────────────────────────────────
            mk('r118', '3', 'Web Development-II', '8', 'Simran', '2024-02-01', 'present'),
            mk('r119', '3', 'Web Development-II', '8', 'Simran', '2024-02-06', 'present'),
            mk('r120', '3', 'Web Development-II', '8', 'Simran', '2024-02-08', 'present'),
            mk('r121', '3', 'Web Development-II', '8', 'Simran', '2024-02-13', 'present'),
            mk('r122', '3', 'Web Development-II', '8', 'Simran', '2024-02-15', 'present'),
            mk('r123', '4', 'Computational Mathematics-II', '8', 'Simran', '2024-02-02', 'absent'),
            mk('r124', '4', 'Computational Mathematics-II', '8', 'Simran', '2024-02-07', 'present'),
            mk('r125', '4', 'Computational Mathematics-II', '8', 'Simran', '2024-02-09', 'present'),
            mk('r126', '5', 'Data Structures Algorithms', '8', 'Simran', '2024-02-01', 'present'),
            mk('r127', '5', 'Data Structures Algorithms', '8', 'Simran', '2024-02-05', 'present'),
            mk('r128', '5', 'Data Structures Algorithms', '8', 'Simran', '2024-02-12', 'absent'),
            mk('r129', '6', 'Minor Project', '8', 'Simran', '2024-02-03', 'present'),
            mk('r130', '6', 'Minor Project', '8', 'Simran', '2024-02-10', 'present'),
            mk('r131', '7', 'Physics', '8', 'Simran', '2024-02-04', 'present'),
            mk('r132', '7', 'Physics', '8', 'Simran', '2024-02-11', 'absent'),
            mk('r133', '1', 'Data Structures', '8', 'Simran', '2024-02-06', 'present'),
            mk('r134', '2', 'Algorithms', '8', 'Simran', '2024-02-07', 'present'),
            mk('r135', '2', 'Algorithms', '8', 'Simran', '2024-02-14', 'present'),
            // ── Kajal (id:9) ──────────────────────────────────────────────────
            mk('r136', '3', 'Web Development-II', '9', 'Kajal', '2024-02-01', 'present'),
            mk('r137', '3', 'Web Development-II', '9', 'Kajal', '2024-02-06', 'absent'),
            mk('r138', '3', 'Web Development-II', '9', 'Kajal', '2024-02-08', 'present'),
            mk('r139', '4', 'Computational Mathematics-II', '9', 'Kajal', '2024-02-02', 'present'),
            mk('r140', '4', 'Computational Mathematics-II', '9', 'Kajal', '2024-02-07', 'present'),
            mk('r141', '5', 'Data Structures Algorithms', '9', 'Kajal', '2024-02-01', 'absent'),
            mk('r142', '5', 'Data Structures Algorithms', '9', 'Kajal', '2024-02-05', 'present'),
            mk('r143', '6', 'Minor Project', '9', 'Kajal', '2024-02-03', 'present'),
            mk('r144', '7', 'Physics', '9', 'Kajal', '2024-02-04', 'present'),
            mk('r145', '7', 'Physics', '9', 'Kajal', '2024-02-11', 'present'),
            mk('r146', '1', 'Data Structures', '9', 'Kajal', '2024-02-06', 'absent'),
            mk('r147', '1', 'Data Structures', '9', 'Kajal', '2024-02-13', 'present'),
            mk('r148', '2', 'Algorithms', '9', 'Kajal', '2024-02-07', 'present'),
            mk('r149', '2', 'Algorithms', '9', 'Kajal', '2024-02-14', 'event', 'Sports Day'),
            // ── Trisha (id:10) ──────────────────────────────────────────────
            mk('r150', '3', 'Web Development-II', '10', 'Trisha', '2024-02-01', 'present'),
            mk('r151', '3', 'Web Development-II', '10', 'Trisha', '2024-02-06', 'present'),
            mk('r152', '3', 'Web Development-II', '10', 'Trisha', '2024-02-08', 'present'),
            mk('r153', '3', 'Web Development-II', '10', 'Trisha', '2024-02-13', 'absent'),
            mk('r154', '4', 'Computational Mathematics-II', '10', 'Trisha', '2024-02-02', 'absent'),
            mk('r155', '4', 'Computational Mathematics-II', '10', 'Trisha', '2024-02-07', 'present'),
            mk('r156', '5', 'Data Structures Algorithms', '10', 'Trisha', '2024-02-01', 'present'),
            mk('r157', '5', 'Data Structures Algorithms', '10', 'Trisha', '2024-02-05', 'present'),
            mk('r158', '5', 'Data Structures Algorithms', '10', 'Trisha', '2024-02-12', 'event', 'Hackathon'),
            mk('r159', '6', 'Minor Project', '10', 'Trisha', '2024-02-03', 'present'),
            mk('r160', '6', 'Minor Project', '10', 'Trisha', '2024-02-10', 'present'),
            mk('r161', '7', 'Physics', '10', 'Trisha', '2024-02-04', 'absent'),
            mk('r162', '7', 'Physics', '10', 'Trisha', '2024-02-11', 'present'),
            mk('r163', '1', 'Data Structures', '10', 'Trisha', '2024-02-06', 'present'),
            mk('r164', '2', 'Algorithms', '10', 'Trisha', '2024-02-07', 'present'),
            // ── Nikhil (id:11) ────────────────────────────────────────────
            mk('r165', '3', 'Web Development-II', '11', 'Nikhil', '2024-02-01', 'present'),
            mk('r166', '3', 'Web Development-II', '11', 'Nikhil', '2024-02-06', 'present'),
            mk('r167', '3', 'Web Development-II', '11', 'Nikhil', '2024-02-08', 'absent'),
            mk('r168', '4', 'Computational Mathematics-II', '11', 'Nikhil', '2024-02-02', 'present'),
            mk('r169', '4', 'Computational Mathematics-II', '11', 'Nikhil', '2024-02-07', 'absent'),
            mk('r170', '5', 'Data Structures Algorithms', '11', 'Nikhil', '2024-02-01', 'present'),
            mk('r171', '5', 'Data Structures Algorithms', '11', 'Nikhil', '2024-02-05', 'present'),
            mk('r172', '6', 'Minor Project', '11', 'Nikhil', '2024-02-03', 'absent'),
            mk('r173', '6', 'Minor Project', '11', 'Nikhil', '2024-02-10', 'present'),
            mk('r174', '7', 'Physics', '11', 'Nikhil', '2024-02-04', 'present'),
            mk('r175', '1', 'Data Structures', '11', 'Nikhil', '2024-02-06', 'present'),
            mk('r176', '1', 'Data Structures', '11', 'Nikhil', '2024-02-13', 'absent'),
            mk('r177', '2', 'Algorithms', '11', 'Nikhil', '2024-02-07', 'present'),
            mk('r178', '2', 'Algorithms', '11', 'Nikhil', '2024-02-14', 'present'),
            // ── Sanchit (id:12) ─────────────────────────────────────────────
            mk('r179', '3', 'Web Development-II', '12', 'Sanchit', '2024-02-01', 'absent'),
            mk('r180', '3', 'Web Development-II', '12', 'Sanchit', '2024-02-06', 'absent'),
            mk('r181', '3', 'Web Development-II', '12', 'Sanchit', '2024-02-08', 'present'),
            mk('r182', '4', 'Computational Mathematics-II', '12', 'Sanchit', '2024-02-02', 'present'),
            mk('r183', '4', 'Computational Mathematics-II', '12', 'Sanchit', '2024-02-07', 'present'),
            mk('r184', '5', 'Data Structures Algorithms', '12', 'Sanchit', '2024-02-01', 'absent'),
            mk('r185', '5', 'Data Structures Algorithms', '12', 'Sanchit', '2024-02-05', 'present'),
            mk('r186', '6', 'Minor Project', '12', 'Sanchit', '2024-02-03', 'present'),
            mk('r187', '6', 'Minor Project', '12', 'Sanchit', '2024-02-10', 'absent'),
            mk('r188', '7', 'Physics', '12', 'Sanchit', '2024-02-04', 'present'),
            mk('r189', '7', 'Physics', '12', 'Sanchit', '2024-02-11', 'absent'),
            mk('r190', '1', 'Data Structures', '12', 'Sanchit', '2024-02-06', 'absent'),
            mk('r191', '1', 'Data Structures', '12', 'Sanchit', '2024-02-13', 'present'),
            mk('r192', '2', 'Algorithms', '12', 'Sanchit', '2024-02-07', 'absent'),
            mk('r193', '2', 'Algorithms', '12', 'Sanchit', '2024-02-14', 'present'),
        ];
    })(),
    riskAssessments: [
        { id: 'ra1', student_id: '3', student_name: 'Subham Kumar', class_id: '3', class_name: 'Web Development-II', attendance_percentage: 87.5, risk_level: 'Low', predicted_drop_if_miss_next: false, updated_at: '2024-02-24T10:00:00Z' },
        { id: 'ra2', student_id: '3', student_name: 'Subham Kumar', class_id: '5', class_name: 'Data Structures Algorithms', attendance_percentage: 80.0, risk_level: 'Low', predicted_drop_if_miss_next: false, updated_at: '2024-02-24T10:00:00Z' },
        { id: 'ra3', student_id: '4', student_name: 'Vaibhav Gupta', class_id: '3', class_name: 'Web Development-II', attendance_percentage: 57.1, risk_level: 'High', predicted_drop_if_miss_next: true, updated_at: '2024-02-24T10:00:00Z' },
        { id: 'ra4', student_id: '4', student_name: 'Vaibhav Gupta', class_id: '5', class_name: 'Data Structures Algorithms', attendance_percentage: 50.0, risk_level: 'High', predicted_drop_if_miss_next: true, updated_at: '2024-02-24T10:00:00Z' },
        { id: 'ra5', student_id: '5', student_name: 'Sameer Mishra', class_id: '3', class_name: 'Web Development-II', attendance_percentage: 91.7, risk_level: 'Low', predicted_drop_if_miss_next: false, updated_at: '2024-02-24T10:00:00Z' },
        { id: 'ra6', student_id: '5', student_name: 'Sameer Mishra', class_id: '4', class_name: 'Computational Mathematics-II', attendance_percentage: 100.0, risk_level: 'Low', predicted_drop_if_miss_next: false, updated_at: '2024-02-24T10:00:00Z' },
        { id: 'ra7', student_id: '6', student_name: 'Manik Chouhan', class_id: '3', class_name: 'Web Development-II', attendance_percentage: 80.0, risk_level: 'Low', predicted_drop_if_miss_next: false, updated_at: '2024-02-24T10:00:00Z' },
        { id: 'ra8', student_id: '7', student_name: 'Aditya Kumar Singh', class_id: '3', class_name: 'Web Development-II', attendance_percentage: 50.0, risk_level: 'High', predicted_drop_if_miss_next: true, updated_at: '2024-02-24T10:00:00Z' },
        { id: 'ra9', student_id: '7', student_name: 'Aditya Kumar Singh', class_id: '1', class_name: 'Data Structures', attendance_percentage: 33.3, risk_level: 'High', predicted_drop_if_miss_next: true, updated_at: '2024-02-24T10:00:00Z' },
        { id: 'ra10', student_id: '8', student_name: 'Simran', class_id: '3', class_name: 'Web Development-II', attendance_percentage: 100.0, risk_level: 'Low', predicted_drop_if_miss_next: false, updated_at: '2024-02-24T10:00:00Z' },
        { id: 'ra11', student_id: '9', student_name: 'Kajal', class_id: '1', class_name: 'Data Structures', attendance_percentage: 66.7, risk_level: 'Medium', predicted_drop_if_miss_next: true, updated_at: '2024-02-24T10:00:00Z' },
        { id: 'ra12', student_id: '10', student_name: 'Trisha', class_id: '4', class_name: 'Computational Mathematics-II', attendance_percentage: 66.7, risk_level: 'Medium', predicted_drop_if_miss_next: true, updated_at: '2024-02-24T10:00:00Z' },
        { id: 'ra13', student_id: '11', student_name: 'Nikhil', class_id: '4', class_name: 'Computational Mathematics-II', attendance_percentage: 66.7, risk_level: 'Medium', predicted_drop_if_miss_next: false, updated_at: '2024-02-24T10:00:00Z' },
        { id: 'ra14', student_id: '12', student_name: 'Sanchit', class_id: '3', class_name: 'Web Development-II', attendance_percentage: 33.3, risk_level: 'High', predicted_drop_if_miss_next: true, updated_at: '2024-02-24T10:00:00Z' },

    ],
    leaveRequests: [
        { id: '1', student_id: '3', student_name: 'Subham Kumar', class_id: '1', class_name: 'Data Structures', start_date: '2024-02-26', end_date: '2024-02-27', reason: 'Medical appointment', status: 'pending', created_at: '2024-02-24T08:00:00Z' }
    ],
    // College events — fixed to current month for demo
    collegeEvents: (() => {
        const now = new Date();
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, '0');
        return [
            { id: 'ev1', name: 'Tech Fest 2024', date: `${y}-${m}-05`, start_time: '09:00', end_time: '14:00', description: 'Annual technology festival with project exhibitions, coding contests, and workshops.', icon: '💻', color: '#6366f1' },
            { id: 'ev2', name: 'Sports Day', date: `${y}-${m}-10`, start_time: '10:00', end_time: '16:00', description: 'Inter-department sports competition — cricket, football, athletics and more.', icon: '🏆', color: '#f59e0b' },
            { id: 'ev3', name: 'Cultural Night', date: `${y}-${m}-15`, start_time: '17:00', end_time: '21:00', description: 'Annual cultural evening featuring performances, music, and art.', icon: '🎭', color: '#ec4899' },
            { id: 'ev4', name: 'Hackathon', date: `${y}-${m}-20`, start_time: '08:00', end_time: '20:00', description: '12-hour hackathon open to all CS and IT students. Build something amazing!', icon: '⚡', color: '#10b981' },
            { id: 'ev5', name: 'Science Exhibition', date: `${y}-${m}-25`, start_time: '11:00', end_time: '15:00', description: 'Showcase your research projects and scientific innovations.', icon: '🔬', color: '#3b82f6' },
        ];
    })(),
    // Student event participation requests (pre-seeded with pending entries)
    eventParticipations: (() => {
        const d = (day) => { const n = new Date(); return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`; };
        return [
            { id: 'ep001', event_id: 'ev1', event_name: 'Tech Fest 2024', date: d(5), student_id: '4', student_name: 'Vaibhav Gupta', roll_no: 'CS2021002', reason: 'Participating in the coding contest and project expo.', status: 'pending', submitted_at: new Date().toISOString() },
            { id: 'ep002', event_id: 'ev2', event_name: 'Sports Day', date: d(10), student_id: '5', student_name: 'Sameer Mishra', roll_no: 'CS2021003', reason: 'Representing department in 100m sprint and relay.', status: 'pending', submitted_at: new Date().toISOString() },
            { id: 'ep003', event_id: 'ev3', event_name: 'Cultural Night', date: d(15), student_id: '7', student_name: 'Aditya Kumar Singh', roll_no: 'CS2021005', reason: 'Performing a classical dance in the cultural program.', status: 'pending', submitted_at: new Date().toISOString() },
            { id: 'ep004', event_id: 'ev4', event_name: 'Hackathon', date: d(20), student_id: '10', student_name: 'Trisha', roll_no: 'CS2021008', reason: 'Team lead for an AI-based project submission.', status: 'pending', submitted_at: new Date().toISOString() },
            { id: 'ep005', event_id: 'ev1', event_name: 'Tech Fest 2024', date: d(5), student_id: '6', student_name: 'Manik Chouhan', roll_no: 'CS2021004', reason: 'Volunteering as event coordinator for the tech expo.', status: 'approved', submitted_at: new Date().toISOString() },
            { id: 'ep006', event_id: 'ev2', event_name: 'Sports Day', date: d(10), student_id: '9', student_name: 'Kajal', roll_no: 'CS2021007', reason: 'Playing in the badminton mixed doubles tournament.', status: 'rejected', submitted_at: new Date().toISOString() },
        ];
    })()
};

// ─── Extended student list for attendance marking ────────────────────────────
const allStudents = [
    { id: '3', name: 'Subham Kumar', rollNo: '2101011001', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face' },
    { id: '4', name: 'Vaibhav Gupta', rollNo: '2101011002', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face' },
    { id: '5', name: 'Sameer Mishra', rollNo: '2101011003', avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=32&h=32&fit=crop&crop=face' },
    { id: '6', name: 'Manik Chouhan', rollNo: '2101011004', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face' },
    { id: '7', name: 'Aditya Kumar Singh', rollNo: '2101011005', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face' },
    { id: '8', name: 'Simran', rollNo: '2101011006', avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=32&h=32&fit=crop&crop=face' },
    { id: '9', name: 'Kajal', rollNo: '2101011007', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=32&h=32&fit=crop&crop=face' },
    { id: '10', name: 'Trisha', rollNo: '2101011008', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face' },
    { id: '11', name: 'Nikhil', rollNo: '2101011009', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=face' },
    { id: '12', name: 'Sanchit', rollNo: '2101011010', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=32&h=32&fit=crop&crop=face' },
];

// ─── Frontend-only mode ───────────────────────────────────────────────────────
// CHANGE: Set to true to run UI without any backend/database.
// This prevents continuous "Server Error" toasts when the server isn't running.
const FRONTEND_ONLY = true;

const API_URL = 'http://localhost:5000/api';

let _lastServerToastAt = 0;
function showServerToastOnce(message) {
    const now = Date.now();
    // Avoid spamming: show at most once per 10 seconds
    if (now - _lastServerToastAt < 10000) return;
    _lastServerToastAt = now;
    showToast('warning', 'Frontend-only Mode', message);
}

async function apiCall(endpoint, method = 'GET', body = null) {
    // CHANGE: In frontend-only mode we intentionally do not call the backend.
    if (FRONTEND_ONLY) {
        // Return an empty shape that callers can handle safely.
        // (Loaders already fall back to mock/demo data.)
        return method === 'GET' ? [] : { success: true };
    }

    const headers = { 'Content-Type': 'application/json' };
    const token = localStorage.getItem('token');
    if (token) headers['Authorization'] = `Bearer ${token}`;

    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null
        });
        const data = await response.json();
        if (response.status === 401) {
            // Token expired or user deleted — force re-login
            localStorage.removeItem('token');
            localStorage.removeItem('currentUser');
            currentUser = null;
            showLogin();
            showToast('warning', 'Session Expired', 'Please log in again.');
            throw new Error(data.message || 'Unauthorized');
        }
        if (!response.ok) throw new Error(data.message || data.error || 'Something went wrong');
        return data;
    } catch (err) {
        if (err.message !== 'Unauthorized') {
            // CHANGE: Prevent continuous server error spam by throttling
            // (this only applies when backend is enabled but unreachable).
            showServerToastOnce('Backend is not connected. The app is running with demo data.');
        }
        throw err;
    }
}

// ─── Global State ─────────────────────────────────────────────────────────────
let currentUser = null;
let currentPage = 'dashboard';
let _activeEventId = null;
let _selectedAdminClassId = null;
let pendingUser = null;

const loginScreen = document.getElementById('loginScreen');
const dashboardScreen = document.getElementById('dashboardScreen');
const authScreen = document.getElementById('authScreen');
const loginForm = document.getElementById('loginForm');
const authForm = document.getElementById('authForm');
const pageContent = document.getElementById('pageContent');
const pageTitle = document.getElementById('pageTitle');
const sidebarUserName = document.getElementById('sidebarUserName');
const sidebarUserRole = document.getElementById('sidebarUserRole');
const notificationsPanel = document.getElementById('notificationsPanel');
const loadingOverlay = document.getElementById('loadingOverlay');

// Notification UI elements (rendered dynamically)
const notificationsListEl = document.getElementById('notificationsList');
const notificationBadgeEl = document.getElementById('notificationBadge');

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => { initializeApp(); });

function initializeApp() {
    loginForm.addEventListener('submit', handleLogin);
    if (authForm) authForm.addEventListener('submit', handleAuthSubmit);
    const regForm = document.getElementById('registerForm');
    if (regForm) regForm.addEventListener('submit', handleRegister);
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const page = link.dataset.page;
            if (page) navigateToPage(page);
        });
    });
    document.querySelector('.toggle-password').addEventListener('click', () => {
        const inp = document.getElementById('password');
        const icon = document.querySelector('.toggle-password i');
        if (inp.type === 'password') { inp.type = 'text'; icon.classList.replace('fa-eye', 'fa-eye-slash'); }
        else { inp.type = 'password'; icon.classList.replace('fa-eye-slash', 'fa-eye'); }
    });
    // Seed fixed login accounts requested by user.
    const db = getAccountsDB().filter(u => !['1', 'fac4', '3'].includes(u.id));
    db.push(
        { id: '1', name: 'Admin User', email: 'admin@krmu.edu.in', password: 'admin@123', role: 'admin', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face' },
        { id: 'fac4', name: 'Deepak Kaushik', email: 'faculty@krmu.edu.in', password: 'faculty@123', role: 'faculty', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face' },
        { id: '3', name: 'Subham Kumar', email: 'student@krmu.edu.in', password: 'student@123', role: 'student', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face' }
    );
    saveAccountsDB(db);
    const saved = localStorage.getItem('currentUser');
    if (saved) { currentUser = JSON.parse(saved); showDashboard(); }
    selectLoginRole('student');
    
    // Load persisted classes if any
    const classesDB = getClassesDB();
    if (classesDB.length > 0) mockData.classes = classesDB;
}

// ─── LocalStorage Account DB ──────────────────────────────────────────────────
function getAccountsDB() { return JSON.parse(localStorage.getItem('accountsDB') || '[]'); }
function saveAccountsDB(db) { localStorage.setItem('accountsDB', JSON.stringify(db)); }
function getClassesDB() { return JSON.parse(localStorage.getItem('classesDB') || '[]'); }
function saveClassesDB(db) { localStorage.setItem('classesDB', JSON.stringify(db)); }

// ─── Auto-generate random attendance data for new student accounts ─────────────
function generateStudentData(user) {
    // Pick 4-6 random classes from the mock classes
    const shuffled = [...mockData.classes].sort(() => Math.random() - 0.5);
    const numClasses = 4 + Math.floor(Math.random() * 3); // 4, 5, or 6
    const assignedClasses = shuffled.slice(0, numClasses);

    const statuses = ['present', 'present', 'present', 'present', 'present', 'absent', 'absent', 'event'];
    const records = [];
    let recId = 1000 + Math.floor(Math.random() * 8000);

    // Generate ~30-50 records spread over past months
    const today = new Date();
    assignedClasses.forEach(cls => {
        const numRecords = 8 + Math.floor(Math.random() * 10); // 8-17 records per class
        const usedDates = new Set();
        for (let i = 0; i < numRecords; i++) {
            // Random date in last 60 days
            let daysAgo, dateStr;
            do {
                daysAgo = 1 + Math.floor(Math.random() * 60);
                const d = new Date(today);
                d.setDate(today.getDate() - daysAgo);
                dateStr = d.toISOString().split('T')[0];
            } while (usedDates.has(cls.id + dateStr));
            usedDates.add(cls.id + dateStr);

            const status = statuses[Math.floor(Math.random() * statuses.length)];
            records.push({
                id: 'gen_' + (recId++),
                class_id: cls.id,
                class_name: cls.course_name,
                student_id: user.id,
                student_name: user.name,
                date: dateStr,
                status,
                remarks: status === 'event' ? 'College event' : '',
                marked_by: '2',
                marked_by_name: cls.faculty_name,
                timestamp: dateStr + 'T09:00:00Z'
            });
        }
    });

    // Save to localStorage keyed by user id
    localStorage.setItem('userData_' + user.id, JSON.stringify({ records }));
    return records;
}

async function loadClasses() {
    try {
        let url = '/classes';
        if (currentUser && currentUser.programme) {
            url += `?programme=${encodeURIComponent(currentUser.programme)}`;
        }
        const response = await apiCall(url);
        const classes = Array.isArray(response)
            ? response
            : response.classes || response.data || [];
        mockData.classes = classes.map(c => ({
            id: c._id,
            course_name: c.course_name,
            section: c.section,
            room_no: c.room_no || 'N/A',
            faculty_name: c.faculty_name,
            schedule_time: c.schedule_time
        }));
    } catch (err) {
        console.error('Failed to load classes:', err);
    }
}

async function loadUserAttendanceData() {
    if (!currentUser) return;
    
    showLoading();
    try {
        const endpoint = '/attendance';
        const response = await apiCall(endpoint);
        const records = Array.isArray(response)
            ? response
            : response.records || response.data || [];
        
        mockData.attendanceRecords = records.map((r, index) => ({
            id: r._id || `backend_${index}`,
            class_id: r._id || `backend_${index}`,
            class_name: r.subject,
            student_id: currentUser.id,
            student_name: currentUser.name,
            date: r.date ? r.date.split('T')[0] : new Date().toISOString().split('T')[0],
            status: r.status,
            remarks: r.remarks || '',
            timestamp: r.date
        }));

        if (currentPage === 'dashboard') loadDashboard();
    } catch (err) {
        console.error('Failed to load records:', err);
        mockData.attendanceRecords = [];
        if (currentPage === 'dashboard') loadDashboard();
    } finally {
        hideLoading();
    }
}

// ─── Auth ─────────────────────────────────────────────────────────────────────
function switchAuthTab(tab) {
    const isSignUp = tab === 'signup';
    document.getElementById('formSignIn').style.display = isSignUp ? 'none' : 'block';
    document.getElementById('formSignUp').style.display = isSignUp ? 'block' : 'none';
    document.getElementById('tabSignIn').classList.toggle('active', !isSignUp);
    document.getElementById('tabSignUp').classList.toggle('active', isSignUp);
    const ind = document.getElementById('authTabIndicator');
    if (ind) ind.classList.toggle('signup-active', isSignUp);
}

async function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim().toLowerCase();
    const password = document.getElementById('regPassword').value;
    const role = document.getElementById('regRole').value;
    
    if (!name || !email || !password) return;
    
    showLoading();
    try {
        await apiCall('/auth/register', 'POST', { name, email, password, role });
        showToast('success', 'Account Created!', `Welcome, ${name}! Please sign in.`);
        switchAuthTab('signin');
        document.getElementById('email').value = email;
    } catch (err) {
        // Error already shown by apiCall
    } finally {
        hideLoading();
    }
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
    
    showLoading();
    try {
        if (FRONTEND_ONLY) {
            const account = getAccountsDB().find(u => u.email.toLowerCase() === email && u.password === password);
            if (!account) {
                showToast('error', 'Login Failed', 'Invalid email or password.');
                return;
            }
            pendingUser = { ...account, token: 'frontend-demo-token' };
            showAuthScreen();
            return;
        }

        const data = await apiCall('/auth/login', 'POST', { email, password });
        // Successfully authenticated, now show 2FA screen
        pendingUser = { ...data.user, token: data.token };
        showAuthScreen();
    } catch (err) {
        // Error toast already shown
    } finally {
        hideLoading();
    }
}

function loginAs(role) {
    const user = mockData.users.find(u => u.role === role);
    if (user) { pendingUser = user; showAuthScreen(); }
}

function selectLoginRole(role) {
    const roleToEmail = {
        student: 'student@krmu.edu.in',
        admin: 'admin@krmu.edu.in',
        faculty: 'faculty@krmu.edu.in'
    };
    const emailInput = document.getElementById('email');
    if (emailInput && roleToEmail[role]) emailInput.value = roleToEmail[role];

    const btnMap = {
        student: document.getElementById('loginRoleStudentBtn'),
        admin: document.getElementById('loginRoleAdminBtn'),
        faculty: document.getElementById('loginRoleFacultyBtn')
    };
    Object.keys(btnMap).forEach(k => {
        const btn = btnMap[k];
        if (!btn) return;
        const isActive = k === role;
        btn.classList.toggle('btn-primary', isActive);
        btn.classList.toggle('btn-outline', !isActive);
    });
}
function logout() {
    currentUser = null;
    pendingUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    showToast('info', 'Logged Out', 'You have been successfully logged out');
    showLogin();
}

function handleAuthSubmit(e) {
    e.preventDefault();
    const code = document.getElementById('authCode').value;
    if (code === '123456' && pendingUser) {
        currentUser = pendingUser;
        localStorage.setItem('token', pendingUser.token); // Store JWT
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        pendingUser = null;
        showToast('success', 'Login Successful', `Welcome back, ${currentUser.name}!`);
        showDashboard();
    } else {
        showToast('error', 'Verification Failed', 'Invalid authentication code');
    }
}
function cancelAuth() { pendingUser = null; showLogin(); }

// ─── Navigation ───────────────────────────────────────────────────────────────
function showAuthScreen() { loginScreen.classList.remove('active'); dashboardScreen.classList.remove('active'); if (authScreen) authScreen.classList.add('active'); document.body.style.background = 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)'; }
function showLogin() { loginScreen.classList.add('active'); dashboardScreen.classList.remove('active'); if (authScreen) authScreen.classList.remove('active'); document.body.style.background = 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)'; }
async function showDashboard() {
    loginScreen.classList.remove('active'); if (authScreen) authScreen.classList.remove('active'); dashboardScreen.classList.add('active');
    document.body.style.background = 'var(--gray-50)';
    const headerName = document.getElementById('headerUserName');
    if (headerName) headerName.textContent = currentUser.name;
    const headerRole = document.getElementById('headerUserRole');
    if (headerRole) headerRole.textContent = currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1);
    
    // CHANGE: Frontend-only mode: skip backend loads, rely on demo/local data.
    if (!FRONTEND_ONLY) {
        await loadClasses();
        await loadUserAttendanceData();
    } else {
        // Ensure the UI has something to render
        if (!mockData.classes || mockData.classes.length === 0) {
            mockData.classes = getStudentManualTimetable('all').map((c, idx) => ({
                id: `demo_cls_${idx}`,
                course_name: c.course_name,
                section: c.section,
                room_no: c.room_no || 'N/A',
                faculty_name: c.faculty_name,
                schedule_time: c.schedule_time
            }));
        }
        if (!mockData.attendanceRecords || mockData.attendanceRecords.length === 0) {
            try { generateStudentData(currentUser); } catch (e) {}
            // Attendance page already normalizes localStorage demo data when needed.
        }
        showServerToastOnce('Backend disabled. Using demo data only.');
    }
    updateNavigation();
    navigateToPage('dashboard');
}
function updateNavigation() {
    const navItems = {
        profile: ['student', 'faculty', 'admin'],
        attendance: ['faculty'],
        calendar: ['student'],
        events: ['student'],
        studentAttendance: ['student'],
        timetable: ['student'],
        faculty: ['student'],
        future: ['student'],
        leave: [],
        analytics: ['admin', 'faculty'],
        users: ['admin'],
        classes: ['admin'],
        updateattendance: ['faculty'],
        facultyNotifications: ['faculty'],
        attendanceMonitor: ['admin'],
        timetableAdmin: ['admin'],
        reportsAnalytics: ['admin'],
        profileControl: ['admin'],
        studentReport: ['faculty'],
        eventParticipation: ['faculty']
    };
    Object.keys(navItems).forEach(id => {
        const el = document.getElementById(id + 'NavItem');
        if (el) el.style.display = navItems[id].includes(currentUser.role) ? 'block' : 'none';
    });
}
function navigateToPage(page) {
    if (currentPage === 'profile' && page !== 'profile' && hasUnsavedProfileChanges()) {
        const shouldLeave = confirm('You have unsaved profile changes. Leave this page without saving?');
        if (!shouldLeave) return;
    }
    currentPage = page;
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const a = document.querySelector(`[data-page="${page}"]`);
    if (a) a.classList.add('active');
    const titles = { dashboard: 'Dashboard', profile: 'My Profile', attendance: 'Mark Attendance', student_attendance: 'Attendance', calendar: 'Attendance Calendar', events: 'Events', faculty: 'Faculty Resources', timetable: 'My Timetable', future: 'Analytics', leave: 'Leave Request', analytics: 'Attendance Analytics', users: 'User Management', classes: 'Class Management', updateattendance: 'Update Attendance', attendance_monitor: 'Attendance Monitoring', timetable_admin: 'Timetable Management', reports_analytics: 'Reports and Analytics', profile_control: 'Profile System Control', faculty_notifications: 'Notifications', student_report: 'Student Reports', event_participation: 'Event Participation' };
    pageTitle.textContent = titles[page] || 'Dashboard';
    loadPageContent(page);
}
function loadPageContent(page) {
    showLoading();
    setTimeout(() => {
        switch (page) {
            case 'dashboard': loadDashboard(); break;
            case 'profile': loadProfilePage(); break;
            case 'attendance': loadAttendancePage(); break;
            case 'student_attendance': loadStudentAttendancePage(); break;
            case 'faculty_notifications': loadFacultyNotificationsPage(); break;
            case 'calendar': loadCalendarPage(); break;
            case 'events': loadEventsPage(); break;
            case 'faculty': loadFacultyPage(); break;
            case 'timetable': loadTimetablePage(); break;
            case 'future': loadFutureOutcomesPage(); break;
            case 'leave': loadLeavePage(); break;
            case 'analytics': 
                if (currentUser.role === 'faculty') loadFacultyAnalyticsPage();
                else loadAnalyticsPage(); 
                break;
            case 'users': loadUsersPage(); break;
            case 'classes': 
                if (currentUser.role === 'admin') loadAdminClassesPage();
                else loadClassesPage(); 
                break;
            case 'updateattendance': loadUpdateAttendancePage(); break;
            case 'attendance_monitor': loadAttendanceMonitorPage(); break;
            case 'timetable_admin': loadTimetableAdminPage(); break;
            case 'reports_analytics': loadReportsAnalyticsPage(); break;
            case 'profile_control': loadProfileControlPage(); break;
            case 'student_report': loadStudentReportPage(); break;
            case 'event_participation': loadEventParticipationPage(); break;
            
            // New Class-Specific Pages
            case 'class_dashboard': loadClassDashboard(_selectedAdminClassId); break;
            case 'class_users': loadUsersPage(_selectedAdminClassId); break;
            case 'class_timetable': loadTimetableAdminPage(_selectedAdminClassId); break;
            case 'class_analytics': loadReportsAnalyticsPage(_selectedAdminClassId); break;
            case 'class_overview': loadAttendanceMonitorPage(_selectedAdminClassId); break;
            default: loadDashboard();
        }
        hideLoading();
    }, 400);
}

// ─── Student Attendance Page (frontend-only) ───────────────────────────────────
// CHANGE: New student feature with 2 tabs:
// - Day-wise Attendance (latest first)
// - Subject-wise Attendance (overall + per subject)
let _studentAttendanceTab = 'day';

function ensureStudentAttendanceRecords() {
    // Prefer records loaded via existing `loadUserAttendanceData()` (API).
    const sId = currentUser?.id;
    if (!sId) return [];
    const existing = (mockData.attendanceRecords || []).filter(r => r.student_id === sId);
    if (existing.length) return existing;

    // Fallback: use localStorage seeded demo records if available, otherwise generate.
    try {
        const cached = JSON.parse(localStorage.getItem('userData_' + sId) || '{}');
        if (Array.isArray(cached.records) && cached.records.length) {
            const normalized = cached.records.map((r, idx) => ({
                id: r.id || `ls_${idx}`,
                class_id: r.class_id || r.id || `cls_${idx}`,
                class_name: r.class_name || r.subject || 'Subject',
                student_id: sId,
                student_name: currentUser.name,
                date: (r.date || new Date().toISOString().split('T')[0]),
                status: r.status || 'present',
                remarks: r.remarks || '',
                timestamp: r.timestamp || (r.date ? (r.date + 'T09:00:00Z') : new Date().toISOString())
            }));
            // Keep global store consistent for the rest of the UI.
            mockData.attendanceRecords = (mockData.attendanceRecords || []).concat(normalized);
            return normalized;
        }
    } catch (e) {}

    // Last resort: generate a nice demo dataset (frontend-only).
    const gen = generateStudentData(currentUser) || [];
    mockData.attendanceRecords = (mockData.attendanceRecords || []).concat(gen);
    return gen;
}

function setStudentAttendanceTab(tab) {
    _studentAttendanceTab = tab;
    renderStudentAttendancePage();
}

function renderStudentAttendancePage() {
    const records = ensureStudentAttendanceRecords();
    const presentLike = ['present', 'late', 'event'];
    const total = records.length;
    const attended = records.filter(r => presentLike.includes(r.status)).length;
    const overallPct = total ? Math.round((attended / total) * 100) : 0;

    const sorted = [...records].sort((a, b) => String(b.date).localeCompare(String(a.date)));

    // Subject-wise aggregation
    const bySubject = sorted.reduce((acc, r) => {
        const key = (r.class_name || 'Subject').trim();
        if (!acc[key]) acc[key] = { subject: key, total: 0, attended: 0 };
        acc[key].total += 1;
        if (presentLike.includes(r.status)) acc[key].attended += 1;
        return acc;
    }, {});
    const subjectRows = Object.values(bySubject)
        .map(s => ({ ...s, pct: s.total ? Math.round((s.attended / s.total) * 100) : 0 }))
        .sort((a, b) => b.pct - a.pct);

    const tabsHtml = `
        <div class="att-tabs">
            <button class="att-tab-btn ${_studentAttendanceTab === 'day' ? 'active' : ''}" onclick="setStudentAttendanceTab('day')">
                <i class="fas fa-calendar-day"></i> Day-wise Attendance
            </button>
            <button class="att-tab-btn ${_studentAttendanceTab === 'subject' ? 'active' : ''}" onclick="setStudentAttendanceTab('subject')">
                <i class="fas fa-layer-group"></i> Subject-wise Attendance
            </button>
        </div>
    `;

    const dayWiseHtml = `
        <div class="card">
            <div class="card-header">
                <div>
                    <h3 class="card-title"><i class="fas fa-calendar-day" style="color:var(--primary-color);margin-right:8px;"></i>Day-wise Attendance</h3>
                    <p style="font-size:13px;color:var(--gray-500);margin-top:2px;">Latest records first • ${sorted.length} total</p>
                </div>
            </div>
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th style="width:160px;">Date</th>
                            <th>Subject / Class</th>
                            <th style="width:140px;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${sorted.length ? sorted.map(r => {
                            const badge = r.status === 'absent' ? 'absent' : (r.status === 'late' ? 'late' : (r.status === 'event' ? 'event' : 'present'));
                            const label = r.status === 'absent' ? 'Absent' : (r.status === 'late' ? 'Late' : (r.status === 'event' ? 'Event' : 'Present'));
                            return `
                                <tr>
                                    <td style="font-weight:700;color:var(--gray-700);">${new Date(r.date).toLocaleDateString()}</td>
                                    <td style="font-weight:600;color:var(--gray-900);">${r.class_name || '—'}</td>
                                    <td><span class="status-badge ${badge}">${label}</span></td>
                                </tr>
                            `;
                        }).join('') : `
                            <tr><td colspan="3" style="text-align:center;color:var(--gray-400);padding:40px 0;">
                                <i class="fas fa-calendar-times" style="font-size:32px;margin-bottom:12px;"></i><br>No attendance records found.
                            </td></tr>
                        `}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    const subjectWiseHtml = `
        <div class="card" style="margin-bottom:24px;">
            <div class="card-header">
                <div>
                    <h3 class="card-title"><i class="fas fa-percentage" style="color:var(--primary-color);margin-right:8px;"></i>Overall Attendance</h3>
                    <p style="font-size:13px;color:var(--gray-500);margin-top:2px;">Calculated automatically from your records</p>
                </div>
                <div class="att-overall-chip">
                    <div class="att-overall-pct">${overallPct}%</div>
                    <div class="att-overall-sub">${attended} / ${total} attended</div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <div>
                    <h3 class="card-title"><i class="fas fa-layer-group" style="color:var(--primary-color);margin-right:8px;"></i>Subject-wise Attendance</h3>
                    <p style="font-size:13px;color:var(--gray-500);margin-top:2px;">Per subject totals and percentage</p>
                </div>
            </div>
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th style="width:160px;">Total Classes</th>
                            <th style="width:160px;">Attended</th>
                            <th style="width:160px;">Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${subjectRows.length ? subjectRows.map(s => {
                            const pctClass = s.pct >= 75 ? 'present' : s.pct >= 50 ? 'late' : 'absent';
                            return `
                                <tr>
                                    <td style="font-weight:700;color:var(--gray-900);">${s.subject}</td>
                                    <td>${s.total}</td>
                                    <td>${s.attended}</td>
                                    <td><span class="status-badge ${pctClass}">${s.pct}%</span></td>
                                </tr>
                            `;
                        }).join('') : `
                            <tr><td colspan="4" style="text-align:center;color:var(--gray-400);padding:40px 0;">
                                <i class="fas fa-chart-pie" style="font-size:32px;margin-bottom:12px;"></i><br>No subject data available.
                            </td></tr>
                        `}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    pageContent.innerHTML = `
        ${tabsHtml}
        ${_studentAttendanceTab === 'day' ? dayWiseHtml : subjectWiseHtml}
    `;
}

function loadStudentAttendancePage() {
    // Default to Day-wise for first open
    if (!_studentAttendanceTab) _studentAttendanceTab = 'day';
    renderStudentAttendancePage();
}

// ─── Dashboard ────────────────────────────────────────────────────────────────
function loadDashboard() {
    if (currentUser.role === 'student') pageContent.innerHTML = getStudentDashboard();
    else if (currentUser.role === 'faculty') pageContent.innerHTML = getFacultyDashboard();
    else if (currentUser.role === 'admin') pageContent.innerHTML = getAdminDashboard();
}

function parseTimeRangeFromSchedule(scheduleTime) {
    if (!scheduleTime || typeof scheduleTime !== 'string') return null;
    const rawRange = scheduleTime.trim().split(' ').slice(-1)[0];
    if (!rawRange || !rawRange.includes('-')) return null;

    const [startRaw, endRaw] = rawRange.split('-').map(t => t.trim());
    const toMinutes = (timeStr) => {
        const [h, m] = timeStr.split(':').map(Number);
        if (Number.isNaN(h) || Number.isNaN(m)) return null;
        return (h * 60) + m;
    };

    const startMinutes = toMinutes(startRaw);
    const endMinutes = toMinutes(endRaw);
    if (startMinutes === null || endMinutes === null) return null;

    return { rawRange, startMinutes, endMinutes };
}

function getClassDayName(cls) {
    if (!cls) return '';
    if (cls.day) return cls.day;
    if (!cls.schedule_time) return '';

    const shortDayName = cls.schedule_time.trim().split(' ')[0].replace(',', '');
    const map = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday' };
    return map[shortDayName] || '';
}

function getStudentManualTimetable(group = 'all') {
    const shortToFull = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday' };
    const toStudentRowsFromClass = (cls) => {
        const sch = (cls.schedule_time || '').trim();
        if (!sch || sch === 'TBA') return [];
        const parts = sch.split(' ');
        if (parts.length < 2) return [];
        const daysPart = parts.slice(0, -1).join(' ');
        const timePart = parts[parts.length - 1];
        const dayTokens = daysPart.split(',').map(d => d.trim()).filter(Boolean);
        return dayTokens.map(token => {
            const short = token.slice(0, 3);
            return {
                id: cls.id,
                day: shortToFull[short] || shortToFull[token] || token,
                course_name: cls.course_name,
                schedule_time: `${short} ${timePart}`,
                room_no: cls.room_no,
                faculty_name: cls.faculty_name,
                section: cls.section
            };
        });
    };

    // Student timetable should reflect classes assigned by admin.
    if (currentUser && currentUser.role === 'student') {
        const classMap = getClassStudentsMap();
        const assignedClassIds = Object.keys(classMap).filter(cid => (classMap[cid] || []).includes(currentUser.id));
        if (assignedClassIds.length > 0) {
            const assignedClasses = mockData.classes.filter(c => assignedClassIds.includes(String(c.id)));
            const dynamicRows = assignedClasses.flatMap(toStudentRowsFromClass);
            if (dynamicRows.length > 0) return dynamicRows;
        }
    }

    const timetable = [
        { day: 'Monday', course_name: 'Web Development', schedule_time: 'Mon 09:00-10:00', room_no: 'C-302', faculty_name: 'Dr Shadav Mohammad', section: 'B.Tech CSE 1st Year' },
        { day: 'Monday', course_name: 'Web Development', schedule_time: 'Mon 10:00-11:00', room_no: 'C-302', faculty_name: 'Dr Shadav Mohammad', section: 'B.Tech CSE 1st Year' },
        { day: 'Monday', course_name: 'DSA', schedule_time: 'Mon 10:00-11:00', room_no: 'A-101', faculty_name: 'Dr Shaquinb Hassan', section: 'B.Tech CSE 1st Year' },
        { day: 'Monday', course_name: 'Minor Project', schedule_time: 'Mon 12:00-13:00', room_no: 'Lab-1', faculty_name: 'Deepak Kaushik', section: 'B.Tech CSE 1st Year' },
        { day: 'Monday', course_name: 'Maths', schedule_time: 'Mon 14:00-15:00', room_no: 'A-201', faculty_name: 'Dr Priya Sharma', section: 'B.Tech CSE 1st Year' },
        { day: 'Monday', course_name: 'Maths', schedule_time: 'Mon 15:00-16:00', room_no: 'A-201', faculty_name: 'Dr Priya Sharma', section: 'B.Tech CSE 1st Year' },
        { day: 'Tuesday', course_name: 'DSA Lab', schedule_time: 'Tue 09:00-10:00', room_no: 'Lab-2', faculty_name: 'Dr Shaquinb Hassan', section: 'B.Tech CSE 1st Year' },
        { day: 'Tuesday', course_name: 'DSA Lab', schedule_time: 'Tue 10:00-11:00', room_no: 'Lab-2', faculty_name: 'Dr Shaquinb Hassan', section: 'B.Tech CSE 1st Year' },
        { day: 'Tuesday', course_name: 'Web Development', schedule_time: 'Tue 12:00-13:00', room_no: 'C-303', faculty_name: 'Dr Shadav Mohammad', section: 'B.Tech CSE 1st Year' },
        { day: 'Tuesday', course_name: 'Web Development', schedule_time: 'Tue 13:00-14:00', room_no: 'C-303', faculty_name: 'Dr Shadav Mohammad', section: 'B.Tech CSE 1st Year' },
        { day: 'Tuesday', course_name: 'Physics', schedule_time: 'Tue 15:00-16:00', room_no: 'Sci-Lab-1', faculty_name: 'Dr Kirti Saini', section: 'B.Tech CSE 1st Year' },
        { day: 'Wednesday', course_name: 'Minor Project', schedule_time: 'Wed 09:00-10:00', room_no: 'Lab-3', faculty_name: 'Deepak Kaushik', section: 'B.Tech CSE 1st Year' },
        { day: 'Wednesday', course_name: 'Minor Project', schedule_time: 'Wed 10:00-11:00', room_no: 'Lab-3', faculty_name: 'Deepak Kaushik', section: 'B.Tech CSE 1st Year' },
        { day: 'Wednesday', course_name: 'Makers Lab', schedule_time: 'Wed 12:00-13:00', room_no: 'Maker-Lab', faculty_name: 'Dr Maker Lead', section: 'B.Tech CSE 1st Year (Group-1)' },
        { day: 'Wednesday', course_name: 'Makers Lab', schedule_time: 'Wed 13:00-14:00', room_no: 'Maker-Lab', faculty_name: 'Dr Maker Lead', section: 'B.Tech CSE 1st Year (Group-1)' },
        { day: 'Wednesday', course_name: 'Makers Lab', schedule_time: 'Wed 14:00-15:00', room_no: 'Maker-Lab', faculty_name: 'Dr Maker Lead', section: 'B.Tech CSE 1st Year (Group-1)' },
        { day: 'Wednesday', course_name: 'Physics Lab', schedule_time: 'Wed 12:00-13:00', room_no: 'Sci-Lab-2', faculty_name: 'Dr Kirti Saini', section: 'B.Tech CSE 1st Year (Group 1)' },
        { day: 'Wednesday', course_name: 'Physics Lab', schedule_time: 'Wed 13:00-14:00', room_no: 'Sci-Lab-2', faculty_name: 'Dr Kirti Saini', section: 'B.Tech CSE 1st Year (Group 1)' },
        { day: 'Thursday', course_name: 'Web Development Lab', schedule_time: 'Thu 09:00-10:00', room_no: 'Lab-4', faculty_name: 'Dr Shadav Mohammad', section: 'B.Tech CSE 1st Year' },
        { day: 'Thursday', course_name: 'Web Development Lab', schedule_time: 'Thu 10:00-11:00', room_no: 'Lab-4', faculty_name: 'Dr Shadav Mohammad', section: 'B.Tech CSE 1st Year' },
        { day: 'Thursday', course_name: 'Maths', schedule_time: 'Thu 12:00-13:00', room_no: 'A-201', faculty_name: 'Dr Priya Sharma', section: 'B.Tech CSE 1st Year' },
        { day: 'Thursday', course_name: 'Physics', schedule_time: 'Thu 13:00-14:00', room_no: 'Sci-Lab-1', faculty_name: 'Dr Kirti Saini', section: 'B.Tech CSE 1st Year' },
        { day: 'Thursday', course_name: 'Open Elective', schedule_time: 'Thu 15:00-16:00', room_no: 'A-301', faculty_name: 'Dr Elective Lead', section: 'B.Tech CSE 1st Year' },
        { day: 'Friday', course_name: 'Physics Lab', schedule_time: 'Fri 09:00-10:00', room_no: 'Sci-Lab-1', faculty_name: 'Dr Kirti Saini', section: 'B.Tech CSE 1st Year (Group-2)' },
        { day: 'Friday', course_name: 'Physics Lab', schedule_time: 'Fri 10:00-11:00', room_no: 'Sci-Lab-1', faculty_name: 'Dr Kirti Saini', section: 'B.Tech CSE 1st Year (Group-2)' },
        { day: 'Friday', course_name: 'Makers Lab', schedule_time: 'Fri 09:00-10:00', room_no: 'Maker-Lab', faculty_name: 'Dr Maker Lead', section: 'B.Tech CSE 1st Year (Group 2)' },
        { day: 'Friday', course_name: 'Makers Lab', schedule_time: 'Fri 10:00-11:00', room_no: 'Maker-Lab', faculty_name: 'Dr Maker Lead', section: 'B.Tech CSE 1st Year (Group 2)' },
        { day: 'Friday', course_name: 'Makers Lab', schedule_time: 'Fri 11:00-12:00', room_no: 'Maker-Lab', faculty_name: 'Dr Maker Lead', section: 'B.Tech CSE 1st Year (Group 2)' },
        { day: 'Friday', course_name: 'Open Elective', schedule_time: 'Fri 13:00-15:00', room_no: 'A-301', faculty_name: 'Dr Elective Lead', section: 'B.Tech CSE 1st Year' },
    ];

    if (group === 'group1') {
        return timetable.filter(cls => {
            const section = (cls.section || '').toLowerCase();
            return section.includes('group-1') || section.includes('group 1');
        });
    }
    if (group === 'group2') {
        return timetable.filter(cls => {
            const section = (cls.section || '').toLowerCase();
            return section.includes('group-2') || section.includes('group 2');
        });
    }
    return timetable;
}

function getTodayClassesFromTimetable() {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todayName = dayNames[new Date().getDay()];

    return getStudentManualTimetable(selectedTimetableGroup)
        .filter(cls => getClassDayName(cls) === todayName)
        .map(cls => {
            const parsedTime = parseTimeRangeFromSchedule(cls.schedule_time);
            return {
                ...cls,
                parsedTime,
                displayTime: parsedTime ? parsedTime.rawRange : (cls.schedule_time || 'Time TBA')
            };
        })
        .sort((a, b) => {
            const aStart = a.parsedTime ? a.parsedTime.startMinutes : Number.MAX_SAFE_INTEGER;
            const bStart = b.parsedTime ? b.parsedTime.startMinutes : Number.MAX_SAFE_INTEGER;
            return aStart - bStart;
        });
}

function createFallbackTodayClasses() {
    const subjects = ['Mathematics', 'Web Development', 'DBMS', 'DSA', 'Operating Systems', 'Minor Project'];
    const faculty = ['Dr Priya Sharma', 'Dr Shadav Mohammad', 'Dr Rakesh Verma', 'Dr Shaquinb Hassan', 'Dr Arun Yadav', 'Deepak Kaushik'];
    const rooms = ['A-101', 'A-201', 'B-204', 'C-302', 'Lab-2', 'Lab-4'];
    const slots = ['09:00-10:00', '10:00-11:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00'];

    const uniqueCount = 3 + Math.floor(Math.random() * 3);
    const slotPool = [...slots].sort(() => Math.random() - 0.5).slice(0, uniqueCount).sort((a, b) => a.localeCompare(b));

    return slotPool.map((slot, index) => {
        const startMinutes = parseInt(slot.split(':')[0], 10) * 60 + parseInt(slot.split(':')[1], 10);
        const [startRaw, endRaw] = slot.split('-');
        const endMinutes = parseInt(endRaw.split(':')[0], 10) * 60 + parseInt(endRaw.split(':')[1], 10);
        return {
            id: `fallback-${index + 1}`,
            course_name: subjects[Math.floor(Math.random() * subjects.length)],
            faculty_name: faculty[Math.floor(Math.random() * faculty.length)],
            room_no: rooms[Math.floor(Math.random() * rooms.length)],
            parsedTime: { rawRange: slot, startMinutes, endMinutes },
            displayTime: slot,
            isFallback: true,
            randomAttendance: 68 + Math.floor(Math.random() * 31),
            randomStatus: Math.random() > 0.35 ? 'Present' : 'Absent'
        };
    });
}

function getCurrentClassStatus(cls) {
    const now = new Date();
    const nowMinutes = (now.getHours() * 60) + now.getMinutes();
    const parsed = cls.parsedTime;
    if (!parsed) return 'upcoming';
    if (nowMinutes >= parsed.startMinutes && nowMinutes < parsed.endMinutes) return 'ongoing';
    if (nowMinutes >= parsed.endMinutes) return 'completed';
    return 'upcoming';
}

function getPastClassOutcomeForStudent(studentId, cls, attendanceRows) {
    const todayStr = new Date().toISOString().split('T')[0];
    const subject = (cls.course_name || '').toLowerCase();
    const todayMatch = attendanceRows.find(r => r.date === todayStr && (r.class_name || '').toLowerCase() === subject);
    if (todayMatch) {
        if (todayMatch.status === 'event') return { label: 'Excused', badge: 'event' };
        if (todayMatch.status === 'absent') return { label: 'Absent', badge: 'absent' };
        return { label: 'Present', badge: 'present' };
    }

    const subjectHistory = attendanceRows.filter(r => (r.class_name || '').toLowerCase() === subject);
    if (subjectHistory.length > 0) {
        const latest = subjectHistory[subjectHistory.length - 1];
        if (latest.status === 'event') return { label: 'Excused', badge: 'event' };
        if (latest.status === 'absent') return { label: 'Absent', badge: 'absent' };
        return { label: 'Present', badge: 'present' };
    }

    if (cls.isFallback) {
        if (cls.randomStatus === 'Absent') return { label: 'Absent', badge: 'absent' };
        return { label: 'Present', badge: 'present' };
    }

    return { label: 'Present', badge: 'present' };
}

function getSubjectAttendancePercent(attendanceRows, subjectName) {
    const rows = attendanceRows.filter(r => (r.class_name || '').toLowerCase() === (subjectName || '').toLowerCase());
    if (!rows.length) return null;
    const presentLike = rows.filter(r => ['present', 'late', 'event'].includes(r.status)).length;
    return Math.round((presentLike / rows.length) * 100);
}

// ─── Demo helpers (UI-only) ────────────────────────────────────────────────────
// CHANGE: Used to generate "presentable" dashboard highlights when a user has
// little/no real data. This does NOT touch backend/API integration or mockData.
function seededRand(seedStr) {
    // Simple deterministic RNG from a string seed (stable per user)
    let h = 2166136261;
    for (let i = 0; i < seedStr.length; i++) h = (h ^ seedStr.charCodeAt(i)) * 16777619;
    return () => {
        // xorshift-like step
        h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
        // Convert to [0,1)
        return ((h >>> 0) % 100000) / 100000;
    };
}

function demoInt(rng, min, max) {
    return Math.floor(rng() * (max - min + 1)) + min;
}

function getStudentDashboard() {
    const sId = currentUser.id;
    const att = mockData.attendanceRecords.filter(r => r.student_id === sId);
    const presentLikeStatuses = ['present', 'late', 'event'];
    const pCnt = att.filter(r => presentLikeStatuses.includes(r.status)).length;
    const tCnt = att.length;
    const pct = tCnt > 0 ? Math.round((pCnt / tCnt) * 100) : 0;
    const targetPct = 90;
    const missedCount = att.filter(r => r.status === 'absent').length;
    const risk = mockData.riskAssessments.find(r => r.student_id === sId);
    const riskLevel = risk ? risk.risk_level : 'Low';
    const riskClass = riskLevel.toLowerCase() === 'high' ? 'high' : riskLevel.toLowerCase() === 'medium' ? 'medium' : 'low';
    const todayDateLabel = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    const timetableToday = getTodayClassesFromTimetable();
    const displayClasses = timetableToday;
    const anyOngoing = displayClasses.some(cls => getCurrentClassStatus(cls) === 'ongoing');
    const showNoClassesHint = displayClasses.length === 0;
    const missedBySubjectMap = att.filter(r => r.status === 'absent').reduce((acc, row) => {
        const name = row.class_name || 'Unknown Subject';
        acc[name] = (acc[name] || 0) + 1;
        return acc;
    }, {});
    const missedBySubject = Object.entries(missedBySubjectMap)
        .sort((a, b) => b[1] - a[1])
        .map(([subject, count]) => ({ subject, count }));
    const missedSubtitle = missedBySubject.length > 0
        ? missedBySubject.slice(0, 2).map(x => `${x.count}x ${x.subject}`).join(', ')
        : 'No missed classes this cycle';
    const today = new Date();
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
    const currentWeekStart = new Date(today.getTime() - sevenDaysMs);
    const previousWeekStart = new Date(today.getTime() - (2 * sevenDaysMs));
    const toTs = (d) => new Date(d).getTime();
    const currentWeek = att.filter(r => {
        const ts = toTs(r.date);
        return ts >= currentWeekStart.getTime() && ts <= today.getTime();
    });
    const previousWeek = att.filter(r => {
        const ts = toTs(r.date);
        return ts >= previousWeekStart.getTime() && ts < currentWeekStart.getTime();
    });
    const getPct = (rows) => rows.length ? Math.round((rows.filter(r => presentLikeStatuses.includes(r.status)).length / rows.length) * 100) : 0;
    const currentWeekPct = getPct(currentWeek);
    const previousWeekPct = getPct(previousWeek);
    const attendanceTrendDelta = currentWeekPct - previousWeekPct;
    const attendanceTrendText = attendanceTrendDelta > 0
        ? `↑ ${attendanceTrendDelta}% vs last week`
        : attendanceTrendDelta < 0
            ? `↓ ${Math.abs(attendanceTrendDelta)}% vs last week`
            : 'No change vs last week';
    const riskTrendText = attendanceTrendDelta > 0
        ? 'Risk trend improving'
        : attendanceTrendDelta < 0
            ? 'Risk trend worsening'
            : 'Risk trend stable';
    const riskTrendClass = attendanceTrendDelta > 0 ? 'metric-good' : attendanceTrendDelta < 0 ? 'metric-bad' : '';

    // CHANGE: Demo-friendly dashboard numbers (only used if there isn't enough real data)
    const hasRealAttendance = tCnt >= 6; // threshold: below this, dashboard can look empty/unimpressive
    const rng = seededRand(String(sId || 'student'));
    const demo = {
        pct: demoInt(rng, 76, 93),
        total: demoInt(rng, 18, 42),
        present: 0,
        missed: 0,
        streak: demoInt(rng, 3, 11),
        onTime: demoInt(rng, 78, 96),
        weekDelta: demoInt(rng, -4, 6),
        upcomingEvents: demoInt(rng, 1, 4),
        announcements: demoInt(rng, 0, 3)
    };
    demo.present = Math.round((demo.pct / 100) * demo.total);
    demo.missed = Math.max(0, demo.total - demo.present);

    const displayPct = hasRealAttendance ? pct : demo.pct;
    const displayTCnt = hasRealAttendance ? tCnt : demo.total;
    const displayPCnt = hasRealAttendance ? pCnt : demo.present;
    const displayMissedCount = hasRealAttendance ? missedCount : demo.missed;
    const displayAttendanceTrendText = hasRealAttendance
        ? attendanceTrendText
        : (demo.weekDelta > 0 ? `↑ ${demo.weekDelta}% vs last week` : demo.weekDelta < 0 ? `↓ ${Math.abs(demo.weekDelta)}% vs last week` : 'No change vs last week');

    const highlightsCard = !hasRealAttendance ? `
        <div class="card" style="margin-bottom:24px;">
            <div class="card-header">
                <h3 class="card-title"><i class="fas fa-sparkles" style="color:var(--primary-color);margin-right:8px;"></i>Quick Highlights</h3>
                <span class="status-badge upcoming" title="Demo-only values">Demo</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;padding-top:6px;">
                <div style="border:1px solid rgba(99,102,241,0.10);border-radius:14px;padding:14px;background:white;">
                    <div style="font-size:12px;color:var(--gray-500);font-weight:700;text-transform:uppercase;letter-spacing:.4px;">Attendance streak</div>
                    <div style="font-size:28px;font-weight:900;color:var(--gray-900);margin-top:6px;">${demo.streak} <span style="font-size:14px;color:var(--gray-500);font-weight:700;">classes</span></div>
                    <div style="font-size:12px;color:var(--gray-500);margin-top:6px;">Keep it going to reach your goal faster.</div>
                </div>
                <div style="border:1px solid rgba(99,102,241,0.10);border-radius:14px;padding:14px;background:white;">
                    <div style="font-size:12px;color:var(--gray-500);font-weight:700;text-transform:uppercase;letter-spacing:.4px;">On-time rate</div>
                    <div style="font-size:28px;font-weight:900;color:var(--gray-900);margin-top:6px;">${demo.onTime}%</div>
                    <div style="font-size:12px;color:var(--gray-500);margin-top:6px;">Great punctuality this week.</div>
                </div>
                <div style="border:1px solid rgba(99,102,241,0.10);border-radius:14px;padding:14px;background:white;">
                    <div style="font-size:12px;color:var(--gray-500);font-weight:700;text-transform:uppercase;letter-spacing:.4px;">Campus updates</div>
                    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px;">
                        <span class="status-badge event"><i class="fas fa-calendar-star"></i> ${demo.upcomingEvents} event${demo.upcomingEvents === 1 ? '' : 's'}</span>
                        <span class="status-badge ${demo.announcements ? 'late' : 'present'}"><i class="fas fa-bell"></i> ${demo.announcements} notice${demo.announcements === 1 ? '' : 's'}</span>
                    </div>
                    <div style="font-size:12px;color:var(--gray-500);margin-top:8px;">Check Events & Notifications for details.</div>
                </div>
            </div>
        </div>
    ` : '';

    return `
        <div class="stats-grid">
            <div class="stat-card primary">
                <div class="stat-header"><div class="stat-icon primary"><i class="fas fa-chart-pie"></i></div></div>
                <div class="stat-value ${displayPct < targetPct ? 'metric-warn' : ''}">${displayPct}% <span class="metric-goal">(Goal: ${targetPct}%)</span></div>
                <div class="stat-label">Attendance Percentage</div>
                <div class="metric-subtext ${attendanceTrendDelta > 0 ? 'metric-good' : attendanceTrendDelta < 0 ? 'metric-bad' : ''}">${displayAttendanceTrendText}</div>
            </div>
            <div class="stat-card ${riskClass}">
                <div class="stat-header"><div class="stat-icon ${riskClass === 'low' ? 'success' : riskClass === 'medium' ? 'warning' : 'danger'}"><i class="fas fa-exclamation-triangle"></i></div></div>
                <div class="stat-value"><span class="status-badge ${riskClass}">${riskLevel}</span></div>
                <div class="stat-label">Risk Level</div>
                <div class="metric-subtext">Next check in 7 days</div>
                <div class="metric-subtext ${riskTrendClass}">${riskTrendText}</div>
            </div>
            <div class="stat-card success">
                <div class="stat-header"><div class="stat-icon success"><i class="fas fa-calendar-check"></i></div></div>
                <div class="stat-value">${displayPCnt} / ${displayTCnt || 0}</div>
                <div class="stat-label">Classes Attended</div>
            </div>
            <div class="stat-card danger">
                <div class="stat-header"><div class="stat-icon danger"><i class="fas fa-user-times"></i></div></div>
                <div class="stat-value metric-danger-text">${displayMissedCount}</div>
                <div class="stat-label">Classes Missed</div>
                <div class="metric-subtext">${missedSubtitle}</div>
            </div>
        </div>
        ${highlightsCard}
        <!-- CHANGE: Removed "Missing Classes Breakdown" from student dashboard per request.
             This is a pure UI removal; stats/calculations above remain unchanged. -->
        <div class="card today-classes-card">
            <div class="card-header">
                <div>
                    <h3 class="card-title"><i class="fas fa-calendar-day" style="color:var(--primary-color);margin-right:8px;"></i>Today's Classes</h3>
                    <p class="today-classes-meta">${todayDateLabel} • ${displayClasses.length} class${displayClasses.length > 1 ? 'es' : ''}</p>
                </div>
                ${anyOngoing ? '<span class="status-badge present"><i class="fas fa-bolt"></i> Ongoing</span>' : ''}
            </div>
            ${showNoClassesHint ? `<div class="today-empty-message"><i class="fas fa-calendar-times"></i><span>No classes today.</span></div>` : ''}
            <div class="today-classes-grid">
                ${displayClasses.map(cls => {
                    const classState = getCurrentClassStatus(cls);
                    let statusClass = 'upcoming';
                    let statusText = 'Upcoming';
                    if (classState === 'ongoing') {
                        statusClass = 'event';
                        statusText = 'Join Now';
                    } else if (classState === 'completed') {
                        const pastOutcome = getPastClassOutcomeForStudent(sId, cls, att);
                        statusClass = pastOutcome.badge;
                        statusText = pastOutcome.label;
                    }
                    const subjectPct = getSubjectAttendancePercent(att, cls.course_name);
                    return `
                        <article class="today-class-item today-class-card ${classState === 'ongoing' ? 'today-class-ongoing' : ''}">
                            <!-- CHANGE: Reworked layout into a proper card header + details grid
                                 to avoid overlap and improve readability. -->
                            <div class="today-class-card-header">
                                <div class="today-class-card-title">
                                    <span class="today-subject-icon"><i class="fas fa-book-open"></i></span>
                                    <div class="today-class-card-title-text">
                                        <div class="today-subject-name">${cls.course_name}</div>
                                        <div class="today-subject-faculty"><i class="fas fa-user-tie"></i> ${cls.faculty_name || 'Faculty TBA'}</div>
                                    </div>
                                </div>
                                <span class="status-badge ${statusClass}">${statusText}</span>
                            </div>
                            <div class="today-class-card-body">
                                <div class="today-class-detail"><i class="fas fa-clock"></i><span>${cls.displayTime}</span></div>
                                <div class="today-class-detail"><i class="fas fa-door-open"></i><span>${cls.room_no || 'Room TBA'}</span></div>
                                <div class="today-class-detail today-class-detail-wide"><i class="fas fa-percentage"></i><span>${subjectPct !== null ? `${subjectPct}% attendance` : 'No attendance record'}</span></div>
                            </div>
                        </article>
                    `;
                }).join('')}
            </div>
        </div>`;
}

function getFacultyAssignedClasses() {
    const base = mockData.classes.filter(c => c.faculty_id === currentUser.id || (currentUser.role === 'faculty' && c.faculty_id === 'fac4'));

    // Keep faculty@college.edu restricted to the 4 requested classes only.
    if (currentUser && currentUser.role === 'faculty' && currentUser.id === 'fac4') {
        const allowedClassIds = new Set(['6', '7', '8', '9']);
        const studentTimetable = getStudentManualTimetable('all');
        const minorProjectSlots = studentTimetable
            .filter(t => t.course_name === 'Minor Project' && (t.faculty_name || '').toLowerCase().includes('deepak kaushik'));
        const dsaSlot = studentTimetable.find(t => t.course_name === 'DSA');

        const slotOrFallback = (slot, fallback) => ({
            schedule_time: slot ? slot.schedule_time : fallback.schedule_time,
            room_no: slot ? slot.room_no : fallback.room_no
        });

        const classOverrides = {
            '6': {
                section: 'Btech Cse Data Science A 2025-2029',
                course_name: 'Minor Project',
                ...slotOrFallback(minorProjectSlots[0], base.find(c => c.id === '6') || {})
            },
            '8': {
                section: 'Btech Cse Ai & Ml (B) 2024-2028',
                course_name: 'DSA',
                ...slotOrFallback(dsaSlot, base.find(c => c.id === '8') || {})
            },
            '7': {
                section: 'BCA Ai & Ds (C) 2023-2027',
                course_name: 'Minor Project',
                ...slotOrFallback(minorProjectSlots[1], base.find(c => c.id === '7') || {})
            },
            '9': {
                section: 'Btech Cse FSD (B) 2025-2029',
                course_name: 'Minor Project',
                ...slotOrFallback(minorProjectSlots[2], base.find(c => c.id === '9') || {})
            }
        };

        return base
            .filter(c => allowedClassIds.has(c.id))
            .map(c => ({ ...c, ...(classOverrides[c.id] || {}) }))
            .sort((a, b) => Number(a.id) - Number(b.id));
    }

    return base;
}

function getClassTimingLabel(cls) {
    if (!cls || !cls.schedule_time) return 'Time TBA';
    const parts = cls.schedule_time.split(' ');
    if (parts.length < 2) return cls.schedule_time;
    const day = parts[0].replace(',', '');
    const time = parts[parts.length - 1];
    return `${day} ${time}`;
}

function getFacultyClassById(classId) {
    const inFacultySet = getFacultyAssignedClasses().find(c => c.id === classId);
    return inFacultySet || mockData.classes.find(c => c.id === classId) || null;
}

function getFacultyDashboard() {
    let fc = getFacultyAssignedClasses();
    
    const today = new Date();
    const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][today.getDay()];
    const todayStr = today.toISOString().split('T')[0];

    // Get today's classes
    const todayClasses = fc.filter(cls => {
        const days = cls.schedule_time.split(' ').slice(0, -1).join(' ').replace(/,/g, '').split(' ').filter(Boolean);
        return days.includes(dayName);
    });

    // Calculate stats
    const totalClassesToday = todayClasses.length;
    const markedToday = todayClasses.filter(cls => {
        return mockData.attendanceRecords.some(rec => rec.class_id === cls.id && rec.date === todayStr);
    }).length;
    const pendingToday = totalClassesToday - markedToday;

    // Show up to 5 classes, sorted by time
    const displayClasses = todayClasses.sort((a, b) => {
        const timeA = a.schedule_time.split(' ').slice(-1)[0];
        const timeB = b.schedule_time.split(' ').slice(-1)[0];
        return timeA.localeCompare(timeB);
    }).slice(0, 5);

    const todaysTimetableHtml = displayClasses.map((cls, idx) => {
        const time = cls.schedule_time.split(' ').slice(-1)[0];
        const isMarked = mockData.attendanceRecords.some(rec => rec.class_id === cls.id && rec.date === todayStr);
        return `
            <tr>
                <td style="font-weight:700; color:var(--gray-400);">${idx + 1}</td>
                <td><i class="fas fa-clock" style="color:var(--gray-400); margin-right:4px;"></i> ${time}</td>
                <td style="font-weight: 500;">${cls.section}</td>
                <td style="font-weight: 600; color:var(--gray-800);">${cls.course_name}</td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="markAttendance('${cls.id}')" ${isMarked ? 'disabled style="opacity: 0.6;"' : ''}>
                        <i class="fas fa-user-check"></i> ${isMarked ? 'Marked' : 'Mark Attendance'}
                    </button>
                </td>
            </tr>`;
    }).join('');

    const timetableTable = `
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th style="width:50px;">S.No</th>
                            <th>Time</th>
                            <th>Programme Name</th>
                            <th>Subject Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${todaysTimetableHtml || '<tr><td colspan="5" style="text-align:center;color:var(--gray-400);padding:40px 0;"><i class="fas fa-calendar-times" style="font-size:32px;margin-bottom:12px;"></i><br>No classes scheduled for today.</td></tr>'}
                    </tbody>
                </table>
            </div>`;

    return `
        <div class="stats-grid" style="margin-bottom: 24px;">
            <div class="stat-card primary">
                <div class="stat-header">
                    <div class="stat-icon primary"><i class="fas fa-calendar-day"></i></div>
                </div>
                <div class="stat-value">${totalClassesToday}</div>
                <div class="stat-label">Total Classes Today</div>
            </div>
            <div class="stat-card success">
                <div class="stat-header">
                    <div class="stat-icon success"><i class="fas fa-check-circle"></i></div>
                </div>
                <div class="stat-value">${markedToday}</div>
                <div class="stat-label">Attendance Marked</div>
            </div>
            <div class="stat-card warning">
                <div class="stat-header">
                    <div class="stat-icon warning"><i class="fas fa-clock"></i></div>
                </div>
                <div class="stat-value">${pendingToday}</div>
                <div class="stat-label">Attendance Pending</div>
            </div>
        </div>

        <div class="card" style="margin-bottom: 24px;">
            <div class="card-header">
                <div>
                    <h3 class="card-title"><i class="fas fa-calendar-day" style="color:var(--primary-color);margin-right:8px;"></i>Today's Timetable</h3>
                    <p style="font-size:13px;color:var(--gray-500);margin-top:2px;">${displayClasses.length} classes scheduled for today</p>
                </div>
            </div>
            ${timetableTable}
        </div>`;
}

function getAdminDashboard() {
    const pendingVerifs = mockData.eventParticipations.filter(p => p.status === 'pending').length;
    return `
        <div class="stats-grid">
            <div class="stat-card primary"><div class="stat-header"><div class="stat-icon primary"><i class="fas fa-users"></i></div><div class="stat-change positive"><i class="fas fa-arrow-up"></i> 12%</div></div><div class="stat-value">${mockData.users.length}</div><div class="stat-label">Total Users</div></div>
            <div class="stat-card success"><div class="stat-header"><div class="stat-icon success"><i class="fas fa-user-graduate"></i></div></div><div class="stat-value">${mockData.users.filter(u => u.role === 'student').length}</div><div class="stat-label">Total Students</div></div>
            <div class="stat-card warning"><div class="stat-header"><div class="stat-icon warning"><i class="fas fa-chalkboard-teacher"></i></div></div><div class="stat-value">${mockData.users.filter(u => u.role === 'faculty').length}</div><div class="stat-label">Total Faculty</div></div>
            <div class="stat-card info"><div class="stat-header"><div class="stat-icon info"><i class="fas fa-chart-line"></i></div><div class="stat-change positive"><i class="fas fa-arrow-up"></i> 3%</div></div><div class="stat-value">75.5%</div><div class="stat-label">Average Attendance</div></div>
        </div>
        ${pendingVerifs > 0 ? `<div class="event-alert-banner" onclick="navigateToPage('eventverify')"><div style="display:flex;align-items:center;gap:12px;"><i class="fas fa-calendar-star" style="font-size:22px;"></i><div><div style="font-weight:700;font-size:15px;">${pendingVerifs} Event Participation Request${pendingVerifs > 1 ? 's' : ''} Pending</div><div style="font-size:13px;opacity:.85;">Click to review and verify student event attendance</div></div></div><i class="fas fa-arrow-right"></i></div>` : ''}
        <div class="card"><div class="card-header"><h3 class="card-title"><i class="fas fa-star" style="color:#6366f1;margin-right:8px;"></i>Recent Event Verifications</h3><button class="btn btn-primary" onclick="navigateToPage('eventverify')"><i class="fas fa-eye"></i> View All</button></div>
            <div class="table-container"><table class="table"><thead><tr><th>Student</th><th>Event</th><th>Date</th><th>Reason</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>${mockData.eventParticipations.slice(0, 5).map(p => `<tr><td><div style="font-weight:600;">${p.student_name}</div><div style="font-size:12px;color:var(--gray-500);">${p.roll_no}</div></td><td>${p.event_name}</td><td>${new Date(p.date).toLocaleDateString()}</td><td style="max-width:160px;font-size:13px;color:var(--gray-600);">${p.reason}</td><td><span class="status-badge ${p.status === 'approved' ? 'present' : p.status === 'rejected' ? 'absent' : 'late'}">${p.status}</span></td><td>${p.status === 'pending' ? `<button class="btn btn-success btn-sm" onclick="verifyParticipation('${p.id}','approved')"><i class="fas fa-check"></i></button> <button class="btn btn-danger btn-sm" onclick="verifyParticipation('${p.id}','rejected')"><i class="fas fa-times"></i></button>` : '-'}</td></tr>`).join('')}</tbody></table></div>
        </div>
        <div class="card"><div class="card-header"><h3 class="card-title">Risk Assessment Summary</h3></div>
            <div class="table-container"><table class="table"><thead><tr><th>Student</th><th>Class</th><th>Attendance %</th><th>Risk Level</th><th>Predicted Drop</th></tr></thead>
            <tbody>${mockData.riskAssessments.map(a => `<tr><td>${a.student_name}</td><td>${a.class_name}</td><td>${a.attendance_percentage}%</td><td><span class="status-badge ${a.risk_level.toLowerCase()}">${a.risk_level}</span></td><td>${a.predicted_drop_if_miss_next ? 'Yes' : 'No'}</td></tr>`).join('')}</tbody></table></div>
        </div>`;
}

// ─── Attendance Page ──────────────────────────────────────────────────────────
function loadAttendancePage(preSelectClassId) {
    let fc = getFacultyAssignedClasses();
    const today = new Date();
    const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][today.getDay()];

    const scheduled = fc.filter(cls => {
        const days = cls.schedule_time.split(' ').slice(0, -1).join(' ').replace(/,/g, '').split(' ').filter(Boolean);
        return days.includes(dayName);
    });

    // Weekend / no-class fallback: pick first 3 classes so the page is never empty
    const todayClasses = scheduled.length > 0 ? scheduled : fc.slice(0, 3);

    pageContent.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title"><i class="fas fa-calendar-day" style="color:var(--primary-color);margin-right:8px;"></i>Today's Classes</h3>
                <span style="font-size:13px;color:var(--gray-500);">${today.toLocaleDateString('default', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
            </div>
            <div class="cl-list">
                ${todayClasses.map(cls => {
        const time = cls.schedule_time.split(' ').slice(-1)[0];
        const isSelected = preSelectClassId === cls.id;
        return `<div class="cl-row ${isSelected ? 'cl-row-selected' : ''}" id="clrow-${cls.id}">
                        <div class="cl-info">
                            <div class="cl-name">${cls.section}</div>
                            <div style="font-size:12px;color:var(--gray-500);margin-bottom:4px;">${cls.course_name}</div>
                            <div class="cl-meta">
                                <span><i class="fas fa-clock"></i> ${time}</span>
                                <span><i class="fas fa-door-open"></i> ${cls.room_no}</span>
                            </div>
                        </div>
                        <button class="btn ${isSelected ? 'btn-success' : 'btn-primary'} btn-sm" id="clbtn-${cls.id}" onclick="selectClassForAttendance('${cls.id}')">
                            ${isSelected ? '<i class="fas fa-check"></i> Selected' : '<i class="fas fa-user-check"></i> Mark'}
                        </button>
                    </div>`;
    }).join('')}
            </div>
        </div>

        <!-- MARK ATTENDANCE FORM — shown after selecting a class -->
        <div class="card" id="markAttendanceCard" style="${preSelectClassId ? '' : 'display:none;'}">
            <div class="card-header">
                <h3 class="card-title" id="markAttendanceTitle">Mark Attendance</h3>
            </div>
            <div id="attendanceForm"></div>
        </div>`;

    if (preSelectClassId) loadStudentsForClass();
}

function selectClassForAttendance(classId) {
    _selectedClassId = classId;

    const card = document.getElementById('markAttendanceCard');
    if (card) card.style.display = '';

    // Reset all row highlights
    document.querySelectorAll('.cl-row').forEach(r => r.classList.remove('cl-row-selected'));
    document.querySelectorAll('[id^="clbtn-"]').forEach(b => {
        b.className = 'btn btn-primary btn-sm';
        b.innerHTML = '<i class="fas fa-user-check"></i> Mark';
    });

    // Highlight selected row
    const row = document.getElementById('clrow-' + classId);
    if (row) row.classList.add('cl-row-selected');
    const btn = document.getElementById('clbtn-' + classId);
    if (btn) { btn.className = 'btn btn-success btn-sm'; btn.innerHTML = '<i class="fas fa-check"></i> Selected'; }

    loadStudentsForClass();
    setTimeout(() => { const c = document.getElementById('markAttendanceCard'); if (c) c.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 50);
}

let _selectedClassId = null;
let qrInterval = null;
let _lastMarkedData = null;

function loadStudentsForClass() {
    const classId = _selectedClassId;
    if (!classId) return;
    const todayStr = new Date().toISOString().split('T')[0];

    const eventStudentIds = mockData.eventParticipations
        .filter(p => p.status === 'approved' && p.date === todayStr)
        .map(p => p.student_id);
    const preMarkedEventIds = ['4', '7'];

    const cls = getFacultyClassById(classId);
    const titleEl = document.getElementById('markAttendanceTitle');
    if (titleEl && cls) titleEl.textContent = `Mark Attendance — ${cls.section}`;

    document.getElementById('attendanceForm').innerHTML = `
        <div class="mb-2"><p class="text-gray" style="font-size:13px;">Students marked <strong>In an Event</strong> have been pre-verified by admin.</p></div>
        
        <!-- Dynamic QR Code Section -->
        <div style="display:flex; justify-content:center; align-items:center; padding:20px; background:white; border:1px solid var(--gray-200); border-radius:12px; margin-bottom:20px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <button class="btn btn-primary" onclick="openQRModal('${classId}')" style="font-size:16px; padding:12px 30px;">
                <i class="fas fa-qrcode" style="margin-right:10px; font-size:20px;"></i> Show QR Code for Students
            </button>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <div style="font-weight:600; color:var(--gray-800);">Student List</div>
            <div style="display:flex; gap:10px;">
                ${(_lastMarkedData && _lastMarkedData.section === cls.section && _lastMarkedData.classId !== classId) ? `
                    <button class="btn btn-warning btn-sm" onclick="copyAttendanceFromPrevious()">
                        <i class="fas fa-copy"></i> Copy from Previous Class
                    </button>
                ` : ''}
                <button class="btn btn-success btn-sm" onclick="markAllStatus('present')"><i class="fas fa-check-double"></i> Mark All Present</button>
                <button class="btn btn-danger btn-sm" onclick="markAllStatus('absent')"><i class="fas fa-times-circle"></i> Mark All Absent</button>
            </div>
        </div>
        <div class="table-container">
            <table class="table" style="min-width:750px;">
                <thead>
                    <tr>
                        <th style="width:60px; padding-left:16px;">S.No.</th>
                        <th>Student Name</th>
                        <th>Roll No.</th>
                        <th>Programme</th>
                        <th>Attendance Marking</th>
                    </tr>
                </thead>
                <tbody>
            ${allStudents.map((s, index) => {
        const inEvent = eventStudentIds.includes(s.id) || preMarkedEventIds.includes(s.id);
        const serialNo = index + 1;
        return `<tr class="attendance-table-row" id="sai-${s.id}">
                    <td style="font-weight:600; color:var(--gray-500); padding-left:16px;">${serialNo}</td>
                    <td>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <img src="${s.avatar}" alt="${s.name}" style="width:36px; height:36px; border-radius:50%; border:2px solid var(--gray-100);">
                            <div style="font-weight:600; font-size:14px; color:var(--gray-800);">${s.name}</div>
                        </div>
                    </td>
                    <td>
                        <div style="font-family:monospace; font-size:13px; color:var(--gray-600); background:#f1f5f9; padding:4px 8px; border-radius:4px; display:inline-block; letter-spacing:0.5px;">${s.rollNo}</div>
                    </td>
                    <td>
                        <div style="font-size:13px; color:var(--gray-600); font-weight:500;">${cls.section}</div>
                    </td>
                    <td>
                        <div class="attendance-buttons" style="display:flex; gap:16px;">
                            ${inEvent
                ? `<span class="event-auto-badge"><i class="fas fa-calendar-star"></i> In an Event</span>`
                : `<label style="display:flex; align-items:center; gap:6px; cursor:pointer;">
                       <input type="radio" class="att-radio-present" name="att_${s.id}" value="present" style="width:18px;height:18px;accent-color:var(--success-color);" onclick="markStudentStatus('${s.id}','present',event)">
                       <span style="font-size:14px; color:var(--success-color); font-weight:600;">Present</span>
                   </label>
                   <label style="display:flex; align-items:center; gap:6px; cursor:pointer;">
                       <input type="radio" class="att-radio-absent" name="att_${s.id}" value="absent" style="width:18px;height:18px;accent-color:var(--danger-color);" onclick="markStudentStatus('${s.id}','absent',event)">
                       <span style="font-size:14px; color:var(--danger-color); font-weight:600;">Absent</span>
                   </label>`}
                        </div>
                    </td>
                </tr>`;
    }).join('')}
                </tbody>
            </table>
        </div>
        <div class="mt-3"><button class="btn btn-primary" onclick="saveAttendance()"><i class="fas fa-save"></i> Save Attendance</button></div>`;

    if (qrInterval) { clearInterval(qrInterval); qrInterval = null; }
}

let _qrModalInterval = null;

function openQRModal(classId) {
    if (document.getElementById('qrModal')) document.getElementById('qrModal').remove();
    
    const modal = document.createElement('div');
    modal.id = 'qrModal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeQRModal()" style="background:rgba(0,0,0,0.8);"></div>
        <div class="modal-box" style="max-width:600px; width:90%; padding:40px; text-align:center; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); z-index:9999; background:white; border-radius:16px;">
            <button class="close-btn" onclick="closeQRModal()" style="position:absolute; top:20px; right:20px; font-size:24px; background:none; border:none; cursor:pointer; color:var(--gray-500);"><i class="fas fa-times"></i></button>
            <h2 style="font-size:28px; font-weight:800; color:var(--gray-800); margin-bottom:10px;"><i class="fas fa-qrcode" style="color:var(--primary-color); margin-right:10px;"></i>Scan to Mark Attendance</h2>
            <p style="font-size:15px; color:var(--gray-600); margin-bottom:30px;">Point your camera at this code to automatically register your presence.</p>
            <div style="display:flex; justify-content:center;">
                <img id="modalDynamicQRCode" src="https://api.qrserver.com/v1/create-qr-code/?size=450x450&data=${classId}_${Date.now()}" style="width:450px; height:450px; max-width:100%; border-radius:16px; border:10px solid var(--gray-100); box-shadow:0 12px 30px rgba(0,0,0,0.15);" alt="Class QR Code">
            </div>
            <div style="font-size:13px; font-weight:600; color:var(--gray-500); margin-top:20px; display:flex; align-items:center; justify-content:center; gap:8px;">
                <i class="fas fa-sync fa-spin"></i> Code updates automatically every 5 seconds
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    if (_qrModalInterval) clearInterval(_qrModalInterval);
    _qrModalInterval = setInterval(() => {
        const img = document.getElementById('modalDynamicQRCode');
        if (img) {
            img.src = `https://api.qrserver.com/v1/create-qr-code/?size=450x450&data=${classId}_${Date.now()}`;
        } else {
            clearInterval(_qrModalInterval);
        }
    }, 5000);
}

function closeQRModal() {
    const modal = document.getElementById('qrModal');
    if (modal) modal.remove();
    if (_qrModalInterval) clearInterval(_qrModalInterval);
}

function markAllStatus(status) {
    document.querySelectorAll('.attendance-table-row').forEach(el => {
        if (!el.querySelector('.event-auto-badge')) {
            const radio = el.querySelector(status === 'present' ? '.att-radio-present' : '.att-radio-absent');
            if (radio) {
                radio.checked = true;
            }
        }
    });
}



// ─── Update Previous Attendance (standalone page) ────────────────────────────
function loadUpdateAttendancePage() {
    let fc = getFacultyAssignedClasses();
    const today = new Date();
    const pastDates = [];
    for (let i = 1; i <= 7; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        pastDates.push({ str: d.toISOString().split('T')[0], label: d.toLocaleDateString('default', { weekday: 'short', month: 'short', day: 'numeric' }) });
    }

    pageContent.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title"><i class="fas fa-history" style="color:var(--warning-color);margin-right:8px;"></i>Update Previous Attendance</h3>
                <span style="font-size:13px;color:var(--gray-500);">Within last 7 days only</span>
            </div>

            <!-- Filters -->
            <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:20px;">
                <div style="flex:1;min-width:200px;">
                    <label style="font-size:13px;font-weight:500;color:var(--gray-700);display:block;margin-bottom:6px;">Class</label>
                    <select id="updateClass" class="input" onchange="handleUpdateClassChange()">
                        <option value="">Select class</option>
                        ${fc.map(cls => `<option value="${cls.id}">${cls.section} · ${cls.course_name}</option>`).join('')}
                    </select>
                </div>
                <div id="updateDateWrap" style="flex:1;min-width:200px; display:none;">
                    <label style="font-size:13px;font-weight:500;color:var(--gray-700);display:block;margin-bottom:6px;">Date</label>
                    <select id="updateDate" class="input" onchange="loadUpdateAttendance()">
                        <option value="">Select date</option>
                        ${pastDates.map(d => `<option value="${d.str}">${d.label}</option>`).join('')}
                    </select>
                </div>
            </div>

            <div id="updateAttendanceForm">
                <div style="text-align:center;padding:32px 0;color:var(--gray-400);">
                    <i class="fas fa-hand-pointer" style="font-size:28px;margin-bottom:10px;display:block;"></i>
                    <p style="font-size:14px;">Select a class and date above to load attendance records.</p>
                </div>
            </div>
        </div>`;
}

function handleUpdateClassChange() {
    const classId = document.getElementById('updateClass') ? document.getElementById('updateClass').value : '';
    const dateWrap = document.getElementById('updateDateWrap');
    const dateSel = document.getElementById('updateDate');

    if (dateSel) dateSel.value = '';
    if (dateWrap) dateWrap.style.display = classId ? '' : 'none';

    loadUpdateAttendance();
}

function loadUpdateAttendance() {
    const classId = document.getElementById('updateClass') ? document.getElementById('updateClass').value : '';
    const dateStr = document.getElementById('updateDate') ? document.getElementById('updateDate').value : '';
    const container = document.getElementById('updateAttendanceForm');
    if (!container) return;
    if (!classId || !dateStr) {
        container.innerHTML = `<div style="text-align:center;padding:32px 0;color:var(--gray-400);"><i class="fas fa-hand-pointer" style="font-size:28px;margin-bottom:10px;display:block;"></i><p style="font-size:14px;">Select a class and date above to load attendance records.</p></div>`;
        return;
    }
    const cls = mockData.classes.find(c => c.id === classId);
    const mockPrev = { '3': 'present', '4': 'event', '5': 'absent', '6': 'present', '7': 'event', '8': 'present', '9': 'absent', '10': 'present', '11': 'present', '12': 'absent' };

    container.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:10px 14px;background:rgba(245,158,11,0.07);border:1px solid rgba(245,158,11,0.22);border-radius:8px;">
            <i class="fas fa-exclamation-triangle" style="color:var(--warning-color);"></i>
            <span style="font-size:13px;color:var(--gray-700);">Editing <strong>${cls ? cls.section : ''}</strong> · ${cls ? cls.course_name : ''} · Room ${cls ? cls.room_no : ''} · <strong>${new Date(dateStr + 'T12:00:00').toLocaleDateString('default', { weekday: 'long', month: 'short', day: 'numeric' })}</strong></span>
        </div>
        <div class="students-list">
            ${allStudents.map(s => {
        const cur = mockPrev[s.id] || 'absent';
        const inEvent = cur === 'event';
        return `<div class="student-attendance-item" id="upd-${s.id}">
                    <div class="student-info">
                        <img src="${s.avatar}" alt="${s.name}" class="student-avatar">
                        <div><div style="font-weight:600;">${s.name}</div><div style="font-size:12px;color:var(--gray-500);">${s.rollNo}</div></div>
                    </div>
                    <div class="attendance-buttons" style="align-items:center;gap:6px;">
                        <span class="status-badge ${cur === 'present' ? 'present' : cur === 'absent' ? 'absent' : 'event'}" id="badge-${s.id}" style="margin-right:4px;">${cur.charAt(0).toUpperCase() + cur.slice(1)}</span>
                        ${inEvent
                ? `<span style="font-size:12px;color:var(--gray-400);">Event verified</span>`
                : `<button class="btn btn-success btn-sm upd-btn" onclick="updateStudentStatus('${s.id}','present',event)"><i class="fas fa-check"></i></button>
                               <button class="btn btn-danger  btn-sm upd-btn" onclick="updateStudentStatus('${s.id}','absent',event)"><i class="fas fa-times"></i></button>
                               <button class="btn btn-primary btn-sm upd-btn" onclick="updateStudentStatus('${s.id}','event',event)"><i class="fas fa-calendar-star"></i></button>`}
                    </div>
                </div>`;
    }).join('')}
        </div>
        <div class="mt-3"><button class="btn btn-warning" onclick="saveUpdateAttendance()"><i class="fas fa-save"></i> Save Changes</button></div>`;
}

function updateStudentStatus(studentId, status, evt) {
    const badge = document.getElementById('badge-' + studentId);
    if (badge) {
        badge.className = `status-badge ${status === 'present' ? 'present' : status === 'absent' ? 'absent' : 'event'}`;
        badge.textContent = status.charAt(0).toUpperCase() + status.slice(1);
    }
    const row = document.getElementById('upd-' + studentId);
    if (row) row.querySelectorAll('.upd-btn').forEach(b => b.classList.remove('active-att'));
    try { if (evt && evt.currentTarget) evt.currentTarget.classList.add('active-att'); } catch (e) { }
}

function saveUpdateAttendance() {
    showToast('success', 'Attendance Updated', 'Previous attendance has been successfully updated.');
}

// ─── Faculty Notifications ───────────────────────────────────────────────────
function loadFacultyNotificationsPage() {
    let fc = getFacultyAssignedClasses();

    pageContent.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title"><i class="fas fa-bell" style="color:var(--primary-color);margin-right:8px;"></i>Send Notifications & Warnings</h3>
                <span style="font-size:13px;color:var(--gray-500);">Alert students with low attendance</span>
            </div>
            <div class="class-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(250px, 1fr)); gap:16px; margin-bottom: 24px;">
                ${fc.map(cls => `
                    <div class="card class-manage-card" onclick="loadNotificationClassDetails('${cls.id}')" style="cursor:pointer; transition:all 0.2s ease; border: 1px solid var(--gray-200); padding: 16px;">
                        <div style="font-size:16px; font-weight:700; color:var(--gray-900);">${cls.course_name}</div>
                        <div style="font-size:13px; color:var(--gray-500); margin-top:4px;">${cls.section}</div>
                        <div style="font-size:12px; color:var(--gray-400); margin-top:4px;"><i class="fas fa-clock"></i> ${getClassTimingLabel(cls)} · Room ${cls.room_no}</div>
                    </div>
                `).join('') || '<p style="color:var(--gray-500);">No classes assigned.</p>'}
            </div>
            
            <div id="notificationDetailsContainer">
                <div style="text-align:center;padding:32px 0;color:var(--gray-400);">
                    <i class="fas fa-hand-pointer" style="font-size:28px;margin-bottom:10px;display:block;"></i>
                    <p style="font-size:14px;">Select a class above to view students with low attendance.</p>
                </div>
            </div>
        </div>`;
}

function loadNotificationClassDetails(classId) {
    const cls = getFacultyClassById(classId);
    if (!cls) return;
    
    const container = document.getElementById('notificationDetailsContainer');
    if (!container) return;
    
    // Generating mock attendance % purely for demonstration purposes
    const studentsWithLowAtt = allStudents.map(s => {
        // Generating random attendance between 50% and 95%
        const pct = 50 + Math.floor(Math.random() * 45); 
        return { ...s, attendance: pct };
    }).filter(s => s.attendance < 75).sort((a,b) => a.attendance - b.attendance);
    
    container.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:10px 14px;background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.22);border-radius:8px;">
            <i class="fas fa-info-circle" style="color:var(--primary-color);"></i>
            <span style="font-size:13px;color:var(--gray-700);">Showing students with under 75% attendance in <strong>${cls.course_name} (${cls.section})</strong></span>
        </div>
        
        <div style="display:flex; justify-content:flex-end; gap:10px; margin-bottom:16px;">
            ${studentsWithLowAtt.some(s => s.attendance < 60) ? `<button class="btn btn-danger btn-sm" onclick="notifyAllParents('${cls.id}')"><i class="fas fa-envelope-open-text"></i> Alert All Parents (< 60%)</button>` : ''}
            ${studentsWithLowAtt.length > 0 ? `<button class="btn btn-warning btn-sm" style="color:#d97706; background:#fef3c7; border:1px solid #fcd34d;" onclick="notifyAllStudents('${cls.id}')"><i class="fas fa-comment-dots"></i> SMS All Students (< 75%)</button>` : ''}
        </div>
        <div class="table-container">
            <table class="table" style="min-width:750px;">
                <thead>
                    <tr>
                        <th style="padding-left:16px;">Student Name</th>
                        <th>Roll No.</th>
                        <th>Programme</th>
                        <th>Attendance %</th>
                        <th>Warning Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${studentsWithLowAtt.length === 0 ? '<tr><td colspan="5" style="text-align:center;color:var(--gray-500);padding:30px;">All students have good attendance!</td></tr>' : ''}
                    ${studentsWithLowAtt.map(s => {
                        const isDanger = s.attendance < 60;
                        const badgeClass = isDanger ? 'absent' : 'warning';
                        return `
                        <tr>
                            <td style="padding-left:16px;">
                                <div style="display:flex; align-items:center; gap:10px;">
                                    <img src="${s.avatar}" style="width:36px; height:36px; border-radius:50%; border:2px solid var(--gray-100);">
                                    <div style="font-weight:600; font-size:14px; color:var(--gray-800);">${s.name}</div>
                                </div>
                            </td>
                            <td>
                                <div style="font-family:monospace; font-size:13px; color:var(--gray-600); background:#f1f5f9; padding:4px 8px; border-radius:4px; display:inline-block; letter-spacing:0.5px;">${s.rollNo}</div>
                            </td>
                            <td>
                                <div style="font-size:13px; color:var(--gray-600); font-weight:500;">${cls.section}</div>
                            </td>
                            <td>
                                <span class="status-badge ${badgeClass}" style="font-size:14px; font-weight:800; display:inline-block; min-width:50px; text-align:center;">${s.attendance}%</span>
                            </td>
                            <td>
                                <div style="display:flex; gap:8px;">
                                    ${isDanger ? `<button class="btn btn-danger btn-sm" onclick="notifyParents('${s.id}')" title="Email/SMS Parents"><i class="fas fa-bullhorn"></i> Parents</button>` : ''}
                                    <button class="btn btn-outline btn-sm" style="border-color:#f59e0b; color:#d97706; background-color:#fffbeb;" onclick="notifyStudentMobile('${s.id}')" title="SMS Student"><i class="fas fa-mobile-alt"></i> Student</button>
                                </div>
                            </td>
                        </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// ─── Faculty Analytics Dashboard ─────────────────────────────────────────────
let _selectedAnalyticsClass1 = null;
let _selectedAnalyticsClass2 = null;
let _pieChart = null;
let _weeklyLineChart = null;
let _monthlyLineChart = null;
let _compBarChart = null;

function loadFacultyAnalyticsPage() {
    let fc = getFacultyAssignedClasses();

    pageContent.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title"><i class="fas fa-chart-bar" style="color:var(--primary-color);margin-right:8px;"></i>Attendance Analytics Hub</h3>
                <p style="font-size:13px;color:var(--gray-500);">Visual insights, trends, and class comparisons</p>
            </div>
            
            <div style="padding:20px; border-bottom:1px solid var(--gray-200); background:#f8fafc; display:flex; flex-wrap:wrap; gap:20px;">
                <div style="flex:1; min-width:250px;">
                    <label style="font-weight:700; color:var(--gray-700); font-size:13px; margin-bottom:8px; display:block;">Primary Class:</label>
                    <select id="analyticsClass1" class="input" onchange="loadAnalyticsClassDetails(this.value)">
                        <option value="">Select a class</option>
                        ${fc.map(cls => `<option value="${cls.id}">${cls.course_name} (${cls.section}) - ${getClassTimingLabel(cls)}</option>`).join('')}
                    </select>
                </div>
                <div style="flex:1; min-width:250px;" id="comparisonSelector" style="display:none;">
                    <label style="font-weight:700; color:var(--gray-700); font-size:13px; margin-bottom:8px; display:block;">Compare With (Optional):</label>
                    <select id="analyticsClass2" class="input" onchange="updateComparison()">
                        <option value="">No comparison</option>
                        ${fc.map(cls => `<option value="${cls.id}">${cls.course_name} (${cls.section}) - ${getClassTimingLabel(cls)}</option>`).join('')}
                    </select>
                </div>
            </div>

            <div id="analyticsDashboard" style="display:none; padding:20px;">
                <!-- Main Stats Row -->
                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:20px; margin-bottom:30px;">
                    <!-- Pie Chart -->
                    <div class="card" style="margin:0; padding:20px; display:flex; flex-direction:column; align-items:center; text-align:center;">
                        <h4 style="font-size:14px; font-weight:700; margin-bottom:20px; color:var(--gray-700); width:100%; text-align:left;">Engagement Distribution</h4>
                        <div style="height:250px; width:100%; max-width:250px;">
                            <canvas id="engagementPieChart"></canvas>
                        </div>
                        <div style="margin-top:16px; font-size:12px; color:var(--gray-500);">Overall presence vs absence ratio</div>
                    </div>
                    
                    <!-- Line Charts Tabs -->
                    <div class="card" style="margin:0; padding:20px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                            <h4 style="font-size:14px; font-weight:700; color:var(--gray-700);">Attendance Trends</h4>
                            <div style="display:flex; background:var(--gray-100); padding:4px; border-radius:8px;">
                                <button class="btn btn-sm trend-tab active" onclick="switchTrend('weekly')" style="padding:4px 12px; font-size:11px;">Weekly</button>
                                <button class="btn btn-sm trend-tab" onclick="switchTrend('monthly')" style="padding:4px 12px; font-size:11px;">Monthly</button>
                            </div>
                        </div>
                        <div id="weeklyTrendContainer" style="height:250px;">
                            <canvas id="weeklyTrendChart"></canvas>
                        </div>
                        <div id="monthlyTrendContainer" style="height:250px; display:none;">
                            <canvas id="monthlyTrendChart"></canvas>
                        </div>
                    </div>
                </div>

                <!-- Comparison Row -->
                <div id="comparisonRow" style="display:none; margin-bottom:30px;">
                    <div class="card" style="margin:0; padding:20px; border:1px solid var(--primary-light); background:linear-gradient(to bottom, #f0f9ff, #ffffff);">
                        <h4 style="font-size:14px; font-weight:700; margin-bottom:20px; color:var(--gray-700);">Class Performance Comparison (%)</h4>
                        <div style="height:300px;">
                            <canvas id="comparisonBarChart"></canvas>
                        </div>
                    </div>
                </div>

                <!-- Insights Card -->
                <div class="card" style="margin:0; padding:20px; background:var(--gray-900); color:white; border:none;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div style="background:var(--primary-color); width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center;">
                            <i class="fas fa-lightbulb" style="color:white;"></i>
                        </div>
                        <div>
                            <div style="font-weight:700; font-size:15px;">Smart Insight</div>
                            <div style="font-size:13px; color:var(--gray-400);" id="analyticsInsightText">Select a class to see detailed performance analysis.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="analyticsPlaceholder" style="text-align:center;padding:80px 0;color:var(--gray-400);">
                <div style="font-size:60px; margin-bottom:20px; opacity:0.3;"><i class="fas fa-chart-pie"></i></div>
                <p style="font-size:15px; font-weight:600;">Choose a primary class to begin analysis.</p>
                <p style="font-size:13px; margin-top:8px;">Get real-time visual reports and cross-class comparisons.</p>
            </div>
        </div>
    `;
}

function loadAnalyticsClassDetails(classId) {
    if (!classId) {
        document.getElementById('analyticsDashboard').style.display = 'none';
        document.getElementById('analyticsPlaceholder').style.display = 'block';
        return;
    }
    _selectedAnalyticsClass1 = classId;
    document.getElementById('analyticsPlaceholder').style.display = 'none';
    document.getElementById('analyticsDashboard').style.display = 'block';
    document.getElementById('comparisonSelector').style.display = 'block';

    renderFacultyCharts();
}

function updateComparison() {
    _selectedAnalyticsClass2 = document.getElementById('analyticsClass2').value;
    renderFacultyCharts();
}

function switchTrend(type) {
    document.querySelectorAll('.trend-tab').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    if (type === 'weekly') {
        document.getElementById('weeklyTrendContainer').style.display = 'block';
        document.getElementById('monthlyTrendContainer').style.display = 'none';
    } else {
        document.getElementById('weeklyTrendContainer').style.display = 'none';
        document.getElementById('monthlyTrendContainer').style.display = 'block';
    }
}

function renderFacultyCharts() {
    const pieCtx = document.getElementById('engagementPieChart').getContext('2d');
    const weeklyCtx = document.getElementById('weeklyTrendChart').getContext('2d');
    const monthlyCtx = document.getElementById('monthlyTrendChart').getContext('2d');
    const compCtx = document.getElementById('comparisonBarChart').getContext('2d');

    // Stats for Class 1
    const recs1 = mockData.attendanceRecords.filter(r => r.class_id === _selectedAnalyticsClass1);
    const pres1 = recs1.filter(r => r.status === 'present').length;
    const abs1 = recs1.filter(r => r.status === 'absent').length;
    const total1 = recs1.length || 1;
    const pct1 = Math.round((pres1 / total1) * 100);

    // Insight update
    const insightEl = document.getElementById('analyticsInsightText');
    if (pct1 >= 85) insightEl.innerHTML = "Excellent engagement! This class is consistently above the college average of 80%.";
    else if (pct1 >= 75) insightEl.innerHTML = "Good performance. Ensure periodic follow-ups with students in the warning zone (< 75%).";
    else insightEl.innerHTML = "Critical trend detected. Average attendance is below the mandatory 75% threshold.";

    // 1. Pie Chart
    if (_pieChart) _pieChart.destroy();
    _pieChart = new Chart(pieCtx, {
        type: 'doughnut',
        data: {
            labels: ['Present', 'Absent'],
            datasets: [{
                data: [pres1, abs1],
                backgroundColor: ['#3b82f6', '#f87171'],
                borderWidth: 0,
                cutout: '70%'
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, padding: 15 } } } }
    });

    // 2. Weekly Line Chart
    if (_weeklyLineChart) _weeklyLineChart.destroy();
    _weeklyLineChart = new Chart(weeklyCtx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
            datasets: [{
                label: 'Attendance %',
                data: [82, 78, 85, 90, 88, 84, pct1],
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#6366f1'
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 100 } } }
    });

    // 3. Monthly Line Chart
    if (_monthlyLineChart) _monthlyLineChart.destroy();
    _monthlyLineChart = new Chart(monthlyCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Avg Attendance %',
                data: [85, 76, 82, 88, 84, pct1],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#10b981'
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 100 } } }
    });

    // 4. Comparison Chart
    const compRow = document.getElementById('comparisonRow');
    if (_selectedAnalyticsClass2) {
        compRow.style.display = 'block';
        const cls1 = mockData.classes.find(c => c.id === _selectedAnalyticsClass1);
        const cls2 = mockData.classes.find(c => c.id === _selectedAnalyticsClass2);
        
        const recs2 = mockData.attendanceRecords.filter(r => r.class_id === _selectedAnalyticsClass2);
        const pres2 = recs2.filter(r => r.status === 'present').length;
        const total2 = recs2.length || 1;
        const pct2 = Math.round((pres2 / total2) * 100);

        if (_compBarChart) _compBarChart.destroy();
        _compBarChart = new Chart(compCtx, {
            type: 'bar',
            data: {
                labels: [cls1.course_name, cls2.course_name],
                datasets: [{
                    label: 'Overall Attendance %',
                    data: [pct1, pct2],
                    backgroundColor: ['#3b82f6', '#f59e0b'],
                    borderRadius: 8,
                    barThickness: 60
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false, 
                scales: { y: { beginAtZero: true, max: 100 } },
                plugins: { legend: { display: false } }
            }
        });
    } else {
        compRow.style.display = 'none';
    }
}

// ─── Student Reports & Analytics ──────────────────────────────────────────────
let _currentReportData = [];

function loadStudentReportPage() {
    let fc = getFacultyAssignedClasses();

    pageContent.innerHTML = `
        <div class="card">
            <div class="card-header">
                <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
                    <div>
                        <h3 class="card-title"><i class="fas fa-file-invoice" style="color:var(--primary-color);margin-right:8px;"></i>Student Attendance Reports</h3>
                        <p style="font-size:13px;color:var(--gray-500);">Analyze performance & export detailed records</p>
                    </div>
                    <div style="display:flex; gap:12px;">
                        <button class="btn btn-primary btn-sm" onclick="exportReport('excel')"><i class="fas fa-file-excel"></i> Export Excel</button>
                        <button class="btn btn-danger btn-sm" onclick="exportReport('pdf')"><i class="fas fa-file-pdf"></i> Export PDF</button>
                    </div>
                </div>
            </div>
            
            <!-- Class Selector -->
            <div style="padding:20px; border-bottom:1px solid var(--gray-200); background:#f8fafc;">
                <label style="font-weight:700; color:var(--gray-700); font-size:14px; margin-bottom:12px; display:block;">Select Class for Report:</label>
                <div class="class-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:16px;">
                    ${fc.map(cls => `
                        <div class="card class-manage-card" id="rep-card-${cls.id}" onclick="loadReportDetails('${cls.id}')" style="cursor:pointer; transition:all 0.2s ease; border: 1px solid var(--gray-200); padding: 16px; margin-bottom:0;">
                            <div style="font-size:15px; font-weight:700; color:var(--gray-900);">${cls.course_name}</div>
                            <div style="font-size:12px; color:var(--gray-500); margin-top:4px;">${cls.section}</div>
                            <div style="font-size:11px; color:var(--gray-400); margin-top:4px;"><i class="fas fa-clock"></i> ${getClassTimingLabel(cls)} · Room ${cls.room_no}</div>
                        </div>
                    `).join('') || '<p style="color:var(--gray-500);">No classes assigned.</p>'}
                </div>
            </div>

            <div id="reportDetailsContainer" style="display:none; padding:20px;">
                <!-- Filters -->
                <div style="margin-bottom:20px;">
                    <div style="font-size:14px; font-weight:700; color:var(--gray-700); margin-bottom:12px;">Attendance Thresholds:</div>
                    <div style="display:flex; gap:10px;">
                        <button class="btn btn-outline btn-sm threshold-btn active" data-threshold="101" onclick="filterReportStudents(101, this)">All Students</button>
                        <button class="btn btn-outline btn-sm threshold-btn" style="border-color:#fbbf24; color:#92400e;" data-threshold="75" onclick="filterReportStudents(75, this)">Shortage (< 75%)</button>
                        <button class="btn btn-outline btn-sm threshold-btn" style="border-color:#f87171; color:#991b1b;" data-threshold="60" onclick="filterReportStudents(60, this)">Critical (< 60%)</button>
                        <button class="btn btn-outline btn-sm threshold-btn" style="border-color:#450a0a; color:#450a0a;" data-threshold="33" onclick="filterReportStudents(33, this)">Detained (< 33%)</button>
                    </div>
                </div>

                <!-- Data Table -->
                <div class="table-container">
                    <table class="table" id="reportDataTable">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Roll No.</th>
                                <th>Programme</th>
                                <th>Present</th>
                                <th>Total</th>
                                <th>Percentage</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody id="reportTableBody"></tbody>
                    </table>
                </div>
            </div>

            <div id="reportPlaceholder" style="text-align:center;padding:80px 0;color:var(--gray-400);">
                <i class="fas fa-chart-line" style="font-size:48px;margin-bottom:16px;display:block;color:var(--gray-200);"></i>
                <p style="font-size:15px;">Select a class above to generate real-time attendance reports.</p>
            </div>
        </div>`;
}

let _selectedReportClassId = null;
let _weeklyChart = null;
let _monthlyChart = null;

function loadReportDetails(classId) {
    _selectedReportClassId = classId;
    document.querySelectorAll('.class-manage-card').forEach(c => c.style.borderColor = 'var(--gray-200)');
    document.getElementById('rep-card-' + classId).style.borderColor = 'var(--primary-color)';
    document.getElementById('rep-card-' + classId).style.background = '#f0f9ff';
    
    document.getElementById('reportPlaceholder').style.display = 'none';
    document.getElementById('reportDetailsContainer').style.display = 'block';

    const cls = getFacultyClassById(classId);
    
    // Process Data
    const students = allStudents.map(s => {
        const records = mockData.attendanceRecords.filter(r => r.student_id === s.id && r.class_id === classId);
        const present = records.filter(r => r.status === 'present').length;
        const total = records.length || 1; // Fallback to avoid division by zero
        const pct = Math.round((present / total) * 100);
        return { ...s, present, total, pct, section: cls.section };
    });

    _currentReportData = students;
    filterReportStudents(101, document.querySelector('.threshold-btn[data-threshold="101"]'));
}

function filterReportStudents(threshold, btn) {
    document.querySelectorAll('.threshold-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const filtered = _currentReportData.filter(s => s.pct < threshold);
    const tbody = document.getElementById('reportTableBody');
    
    tbody.innerHTML = filtered.map(s => {
        let statusBadge = '';
        if (s.pct < 33) statusBadge = '<span class="status-badge danger">Detained</span>';
        else if (s.pct < 60) statusBadge = '<span class="status-badge danger">Critical</span>';
        else if (s.pct < 75) statusBadge = '<span class="status-badge warning">Shortage</span>';
        else statusBadge = '<span class="status-badge success">Safe</span>';

        return `
            <tr>
                <td>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <img src="${s.avatar}" style="width:28px;height:28px;border-radius:50%;">
                        <div style="font-weight:600;">${s.name}</div>
                    </div>
                </td>
                <td style="font-family:monospace;">${s.rollNo}</td>
                <td>${s.section}</td>
                <td style="font-weight:600; color:var(--success-color);">${s.present}</td>
                <td>${s.total}</td>
                <td style="font-weight:700; color:${s.pct < 75 ? 'var(--danger-color)' : 'var(--gray-900)'}">${s.pct}%</td>
                <td>${statusBadge}</td>
            </tr>
        `;
    }).join('') || '<tr><td colspan="7" style="text-align:center; padding:30px; color:var(--gray-400);">No students found for this filter.</td></tr>';
}



function exportReport(format) {
    if (!_selectedReportClassId) { showToast('error', 'Select Class', 'Please select a class first.'); return; }
    
    const cls = getFacultyClassById(_selectedReportClassId);
    showToast('info', 'Exporting...', `Generating ${format.toUpperCase()} report...`);

    if (format === 'pdf') {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.setFontSize(18);
        doc.text(`Attendance Report: ${cls.course_name}`, 14, 20);
        doc.setFontSize(12);
        doc.text(`Section: ${cls.section} | Date: ${new Date().toLocaleDateString()}`, 14, 30);

        const rows = _currentReportData.map(s => [s.name, s.rollNo, s.present, s.total, s.pct + '%']);
        doc.autoTable({
            startY: 40,
            head: [['Student Name', 'Roll No', 'Present', 'Total', '%']],
            body: rows,
            theme: 'grid',
            headStyles: { fillColor: [59, 130, 246] }
        });

        doc.save(`${cls.course_name.replace(/ /g, '_')}_Report.pdf`);
        showToast('success', 'PDF Exported', 'The report has been saved to your device.');
    } else {
        const worksheetData = _currentReportData.map(s => ({
            'Student Name': s.name,
            'Roll Number': s.rollNo,
            'Section/Programme': s.section,
            'Classes Present': s.present,
            'Total Classes': s.total,
            'Attendance %': s.pct
        }));

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(worksheetData);
        XLSX.utils.book_append_sheet(wb, ws, "Attendance Report");
        XLSX.writeFile(wb, `${cls.course_name.replace(/ /g, '_')}_Report.xlsx`);
        showToast('success', 'Excel Exported', 'The excel sheet has been saved to your device.');
    }
}

// ─── Event Participation ─────────────────────────────────────────────────────
function loadEventParticipationPage() {
    let fc = getFacultyAssignedClasses();

    pageContent.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title"><i class="fas fa-calendar-star" style="color:var(--primary-color);margin-right:8px;"></i>Event Participation Ledger</h3>
                <p style="font-size:13px;color:var(--gray-500);">Track students participating in college events</p>
            </div>
            
            <div style="padding:20px; border-bottom:1px solid var(--gray-200); background:#f8fafc;">
                <label style="font-weight:700; color:var(--gray-700); font-size:14px; margin-bottom:12px; display:block;">Select Class to View Participation:</label>
                <div class="class-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:16px;">
                    ${fc.map(cls => `
                        <div class="card class-manage-card" id="ev-card-${cls.id}" onclick="loadEventStudentsDetails('${cls.id}')" style="cursor:pointer; transition:all 0.2s ease; border: 1px solid var(--gray-200); padding: 16px; margin-bottom:0;">
                            <div style="font-size:15px; font-weight:700; color:var(--gray-900);">${cls.course_name}</div>
                        <div style="font-size:12px; color:var(--gray-500); margin-top:4px;">${cls.section}</div>
                        <div style="font-size:11px; color:var(--gray-400); margin-top:4px;"><i class="fas fa-clock"></i> ${getClassTimingLabel(cls)} · Room ${cls.room_no}</div>
                        </div>
                    `).join('') || '<p style="color:var(--gray-500);">No classes assigned.</p>'}
                </div>
            </div>

            <div id="eventDetailsContainer" style="display:none; padding:20px;">
                <div class="table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Roll No.</th>
                                <th>Missed Subject</th>
                                <th>Class Time</th>
                                <th>Event Name</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody id="eventTableBody"></tbody>
                    </table>
                </div>
            </div>

            <div id="eventPlaceholder" style="text-align:center;padding:80px 0;color:var(--gray-400);">
                <i class="fas fa-user-tag" style="font-size:48px;margin-bottom:16px;display:block;color:var(--gray-200);"></i>
                <p style="font-size:15px;">Select a class above to view the event participation history.</p>
            </div>
        </div>`;
}

function loadEventStudentsDetails(classId) {
    document.querySelectorAll('.class-manage-card').forEach(c => c.style.borderColor = 'var(--gray-200)');
    const card = document.getElementById('ev-card-' + classId);
    if (card) {
        card.style.borderColor = 'var(--primary-color)';
        card.style.background = '#f0f9ff';
    }
    
    document.getElementById('eventPlaceholder').style.display = 'none';
    document.getElementById('eventDetailsContainer').style.display = 'block';

    const eventRecords = mockData.attendanceRecords.filter(r => r.class_id === classId && r.status === 'event');
    const tbody = document.getElementById('eventTableBody');

    tbody.innerHTML = eventRecords.map(r => {
        const cls = mockData.classes.find(c => c.id === r.class_id);
        const schedule = cls ? cls.schedule_time : 'N/A';
        
        return `
            <tr>
                <td>
                    <div style="font-weight:600; color:var(--gray-900);">${r.student_name}</div>
                </td>
                <td style="font-family:monospace; color:var(--gray-600);">${allStudents.find(s => s.id === r.student_id)?.rollNo || 'N/A'}</td>
                <td style="font-weight:500; color:var(--primary-dark);">${r.class_name}</td>
                <td style="font-size:12px; color:var(--gray-600);"><i class="far fa-clock" style="margin-right:4px;"></i> ${schedule}</td>
                <td>
                    <div style="background:var(--primary-light); color:var(--primary-dark); padding:4px 10px; border-radius:6px; display:inline-block; font-size:11px; font-weight:600;">
                        <i class="fas fa-award" style="margin-right:4px;"></i> ${r.remarks || 'College Event'}
                    </div>
                </td>
                <td style="font-size:12px; color:var(--gray-500);">${new Date(r.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
            </tr>
        `;
    }).join('') || `<tr><td colspan="6" style="text-align:center; padding:40px; color:var(--gray-400);">No event participation records found for this class.</td></tr>`;
}


// ─── Student Timetable Page ───────────────────────────────────────────────────
let selectedTimetableGroup = 'all';

function setTimetableGroup(group) {
    selectedTimetableGroup = group;
    loadTimetablePage();
}

function loadTimetablePage() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const shortDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][new Date().getDay()];
    const fullDayMap = { 'Mon':'Monday','Tue':'Tuesday','Wed':'Wednesday','Thu':'Thursday','Fri':'Friday','Sun':'Sunday','Sat':'Saturday' };
    const today = fullDayMap[shortDay] || shortDay;

    const dayColors = {
        'Monday':    { bg: '#eff6ff', border: '#3b82f6', text: '#1d4ed8', light: 'rgba(59,130,246,0.08)' },
        'Tuesday':   { bg: '#f0fdf4', border: '#22c55e', text: '#15803d', light: 'rgba(34,197,94,0.08)' },
        'Wednesday': { bg: '#fefce8', border: '#f59e0b', text: '#b45309', light: 'rgba(245,158,11,0.08)' },
        'Thursday':  { bg: '#fdf4ff', border: '#a855f7', text: '#7e22ce', light: 'rgba(168,85,247,0.08)' },
        'Friday':    { bg: '#fff1f2', border: '#f43f5e', text: '#be123c', light: 'rgba(244,63,94,0.08)' },
    };

    const allClasses = getStudentManualTimetable(selectedTimetableGroup);
    // Build day → classes map using the 'day' field
    const daysMap = {};
    days.forEach(d => daysMap[d] = []);
    allClasses.forEach(cls => {
        const clsDay = cls.day || cls.schedule_time; // prefer 'day' field
        if (daysMap[clsDay] !== undefined) {
            daysMap[clsDay].push(cls);
        }
    });

    // Locked to requested value for timetable stat card.
    const totalSubjects = 7;
    const todayCount = (daysMap[today] || []).length;
    const weeklyTotal = allClasses.length;

    const statsHtml = `
        <div class="stats-grid" style="margin-bottom:24px;">
            <div class="stat-card primary"><div class="stat-header"><div class="stat-icon primary"><i class="fas fa-book"></i></div></div><div class="stat-value">${totalSubjects}</div><div class="stat-label">Total Subjects</div></div>
            <div class="stat-card success"><div class="stat-header"><div class="stat-icon success"><i class="fas fa-calendar-day"></i></div></div><div class="stat-value">${todayCount}</div><div class="stat-label">Classes Today</div></div>
            <div class="stat-card warning"><div class="stat-header"><div class="stat-icon warning"><i class="fas fa-calendar-week"></i></div></div><div class="stat-value">${weeklyTotal}</div><div class="stat-label">Weekly Sessions</div></div>
        </div>`;

    const timetableRows = days.map(day => {
        const col = dayColors[day];
        const isToday = day === today;
        const classes = (daysMap[day] || []).slice().sort((a, b) => {
            const aParsed = parseTimeRangeFromSchedule(a.schedule_time || '');
            const bParsed = parseTimeRangeFromSchedule(b.schedule_time || '');
            const aStart = aParsed ? aParsed.startMinutes : Number.MAX_SAFE_INTEGER;
            const bStart = bParsed ? bParsed.startMinutes : Number.MAX_SAFE_INTEGER;
            return aStart - bStart;
        });

        const classCards = classes.length > 0
            ? classes.map(cls => {
                const parsed = parseTimeRangeFromSchedule(cls.schedule_time || '');
                const timeText = parsed ? parsed.rawRange : (cls.schedule_time || 'Time TBA');
                return `
                <div class="ttr-class-card" style="border-top:3px solid ${col.border};">
                    <div class="ttr-time"><i class="fas fa-clock" style="color:${col.border};font-size:10px;"></i> ${timeText}</div>
                    <div class="ttr-course">${cls.course_name}</div>
                    <div class="ttr-section">${cls.section || 'DS-1'}</div>
                    <div class="ttr-room"><i class="fas fa-door-open" style="color:${col.border};font-size:10px;"></i> ${cls.room_no || 'N/A'}</div>
                    <div class="ttr-faculty"><i class="fas fa-user-tie" style="font-size:10px;color:var(--gray-400);"></i> ${cls.faculty_name || ''}</div>
                </div>`;
            }).join('')
            : `<div class="ttr-no-class"><i class="fas fa-coffee" style="font-size:16px;color:var(--gray-300);"></i><span>No classes</span></div>`;

        return `
            <div class="ttr-day-row ${isToday ? 'ttr-today-row' : ''}">
                <div class="ttr-day-label" style="background:${col.bg};border-left:4px solid ${col.border};color:${col.text};">
                    <div class="ttr-day-name">${day}</div>
                    ${isToday ? '<span class="ttr-today-badge">TODAY</span>' : ''}
                    <div class="ttr-day-count">${classes.length} class${classes.length !== 1 ? 'es' : ''}</div>
                </div>
                <div class="ttr-classes-row">${classCards}</div>
            </div>`;
    }).join('');

    pageContent.innerHTML = `
        ${statsHtml}
        <div class="card">
            <div class="card-header">
                <div>
                    <h3 class="card-title"><i class="fas fa-table" style="color:var(--primary-color);margin-right:8px;"></i>Weekly Class Schedule</h3>
                    <p style="font-size:13px;color:var(--gray-500);margin-top:2px;">${currentUser.name} &nbsp;·&nbsp; B.Tech CSE Data Science</p>
                </div>
                <div style="display:flex;gap:8px;">
                    <button class="btn btn-outline btn-sm ${selectedTimetableGroup === 'all' ? 'active' : ''}" onclick="setTimetableGroup('all')">All</button>
                    <button class="btn btn-outline btn-sm ${selectedTimetableGroup === 'group1' ? 'active' : ''}" onclick="setTimetableGroup('group1')">Group-1</button>
                    <button class="btn btn-outline btn-sm ${selectedTimetableGroup === 'group2' ? 'active' : ''}" onclick="setTimetableGroup('group2')">Group-2</button>
                    <button class="btn btn-outline btn-sm" onclick="navigateToPage('calendar')"><i class="fas fa-calendar-alt"></i> Calendar</button>
                </div>
            </div>
            <div class="ttr-wrapper">
                ${timetableRows}
            </div>
        </div>`;
}

// ─── Calendar Page ────────────────────────────────────────────────────────────
function loadCalendarPage() {
    if (currentUser.role === 'student') {
        const sId = currentUser.id;
        const att = mockData.attendanceRecords.filter(r => r.student_id === sId);
        const attMap = {};
        att.forEach(r => { attMap[r.date] = r.status; });

        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const first = new Date(year, month, 1).getDay();
        const days = new Date(year, month + 1, 0).getDate();

        let gridHtml = '';
        for (let i = 0; i < first; i++) gridHtml += '<div></div>';
        for (let d = 1; d <= days; d++) {
            const dateObj = new Date(year, month, d);
            const ds = dateObj.toISOString().split('T')[0];
            const stat = attMap[ds];
            const isSunday = dateObj.getDay() === 0; // Treat Sunday as holiday
            const cMap = { present: 'var(--success-color)', absent: 'var(--danger-color)', late: 'var(--warning-color)', event: 'var(--primary-color)' };
            const lMap = { present: 'P', absent: 'A', late: 'L', event: 'E' };
            const aBadge = stat ? `<div style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:${cMap[stat]};color:white;font-weight:700;font-size:10px;">${lMap[stat]}</div>` : '';

            gridHtml += `<div style="border:1px solid var(--gray-100);min-height:88px;padding:5px;border-radius:8px;display:flex;flex-direction:column;gap:3px;${isSunday ? 'background:rgba(239,68,68,0.03);' : ''}">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:12px;font-weight:600;color:${isSunday ? 'var(--danger-color)' : 'var(--gray-700)'};">${d}</span>
                    <div style="display:flex;gap:3px;align-items:center;">${aBadge}</div>
                </div>
                ${isSunday ? '<div style="font-size:11px;font-weight:700;color:var(--danger-color);margin-top:auto;">Holiday</div>' : ''}
                ${!isSunday && stat ? `<div style="font-size:10px;color:var(--gray-400);">${stat.charAt(0).toUpperCase() + stat.slice(1)}</div>` : ''}
            </div>`;
        }

        const classIds = Array.from(new Set(att.map(r => r.class_id)));
        const classSummary = classIds.map(cid => {
            const cls = mockData.classes.find(c => c.id === cid) || { course_name: 'Class' };
            const recs = att.filter(r => r.class_id === cid);
            return `<div style="padding:8px;border:1px solid var(--gray-100);border-radius:8px;margin-bottom:8px;">
                <div style="font-weight:600">${cls.course_name}</div>
                <div style="font-size:13px;color:var(--gray-600)">${recs.filter(r => r.status === 'present').length} attended · ${recs.filter(r => r.status === 'absent').length} missed</div>
            </div>`;
        }).join('');

        pageContent.innerHTML = `
            <div class="card">
                <div class="card-header"><h3 class="card-title">Attendance Calendar — ${now.toLocaleString('default', { month: 'long' })} ${year}</h3></div>
                <div style="padding:16px;">
                    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:5px;margin-bottom:8px;">
                        ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => `<div style="font-weight:700;text-align:center;font-size:11px;color:var(--gray-400);">${d}</div>`).join('')}
                    </div>
                    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:5px;">${gridHtml}</div>
                    <div style="margin-top:12px;display:flex;gap:12px;flex-wrap:wrap;">
                        ${[['var(--success-color)', 'Present'], ['var(--danger-color)', 'Absent'], ['var(--warning-color)', 'Late'], ['var(--primary-color)', 'Event']].map(([c, l]) => `<div style="display:flex;gap:5px;align-items:center;"><div style="width:12px;height:12px;border-radius:50%;background:${c};"></div><span style="font-size:12px;color:var(--gray-500);">${l}</span></div>`).join('')}
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header"><h3 class="card-title">Per-class Summary</h3></div>
                <div style="padding:0 24px 16px;">${classSummary || '<p class="text-gray">No data.</p>'}</div>
            </div>
            <div style="margin-bottom:24px;">
                <button onclick="navigateToPage('future')" class="btn btn-primary" style="width:100%;"><i class="fas fa-chart-line"></i> Future Outcomes</button>
            </div>`;

        return;
    }

    pageContent.innerHTML = `<div class="card"><div class="card-header"><h3 class="card-title">Attendance Calendar</h3></div><div id="calendar"><p class="text-center text-gray">Calendar view</p></div></div>`;
}

// ─── Student Events Page ────────────────────────────────────────────────────────
function loadEventsPage() {
    if (currentUser.role !== 'student') return;
    const sId = currentUser.id;
    const myP = {};
    mockData.eventParticipations.filter(p => p.student_id === sId).forEach(p => { myP[p.event_id] = p; });

    // Determine the classes this student is enrolled in
    const att = mockData.attendanceRecords.filter(r => r.student_id === sId);
    const studentClassIds = [...new Set(att.map(r => r.class_id))];
    const studentClasses = mockData.classes.filter(c => studentClassIds.includes(c.id));

    const parseTime = (timeStr) => {
        const [h,m] = timeStr.split(':').map(Number);
        return h + ((m||0)/60);
    };

    const evListHtml = mockData.collegeEvents.map(ev => {
        const participation = myP[ev.id];
        const badge = participation
            ? `<span style="font-size:11px;font-weight:600;padding:3px 10px;border-radius:12px;background:${participation.status === 'approved' ? 'rgba(34,197,94,0.12)' : participation.status === 'rejected' ? 'rgba(239,68,68,0.12)' : 'rgba(245,158,11,0.12)'};color:${participation.status === 'approved' ? 'var(--success-color)' : participation.status === 'rejected' ? 'var(--danger-color)' : 'var(--warning-color)'};">${participation.status === 'approved' ? '✓ Verified' : participation.status === 'rejected' ? '✗ Rejected' : '⏳ Pending'}</span>`
            : `<button class="btn btn-primary btn-sm" onclick="openEventModal('${ev.id}')"><i class="fas fa-paper-plane"></i> Apply</button>`;
        
        // Calculate overlapping classes
        const evDateObj = new Date(ev.date + 'T12:00:00Z'); // force midday to avoid timezone shifts
        const evDayOfWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][evDateObj.getUTCDay()];
        const evStart = parseTime(ev.start_time);
        const evEnd = parseTime(ev.end_time);

        const overlappingClasses = studentClasses.filter(c => {
            const parts = c.schedule_time.split(' ');
            const time = parts.slice(-1)[0]; 
            const scheduledDays = parts.slice(0, -1).join(' ').replace(/,/g, '').split(' ').filter(Boolean);
            if (!scheduledDays.includes(evDayOfWeek)) return false;
            
            const [cStartStr, cEndStr] = time.split('-');
            if (!cStartStr || !cEndStr) return false;
            const cStart = parseTime(cStartStr);
            const cEnd = parseTime(cEndStr);
            
            return (evStart < cEnd && cStart < evEnd);
        });

        let overlapHtml = '';
        if (overlappingClasses.length > 0) {
            overlapHtml = `<div style="margin-top:10px;padding:8px 12px;font-size:12px;background:var(--primary-light);color:var(--primary-dark);border-radius:6px;border:1px solid rgba(99,102,241,0.2);">
                <div style="font-weight:600;margin-bottom:4px;"><i class="fas fa-info-circle"></i> Attendance will be granted for missed classes:</div>
                <div style="display:flex;flex-wrap:wrap;gap:6px;">
                    ${overlappingClasses.map(c => `<span style="background:white;padding:2px 8px;border-radius:12px;font-size:11px;border:1px solid rgba(99,102,241,0.2);"><i class="fas fa-book" style="color:var(--gray-400);"></i> ${c.course_name} (${c.schedule_time.split(' ').slice(-1)[0]})</span>`).join('')}
                </div>
            </div>`;
        } else {
            overlapHtml = `<div style="margin-top:10px;padding:8px 12px;font-size:12px;background:var(--gray-50);color:var(--gray-600);border-radius:6px;">
                <i class="fas fa-check-circle" style="color:var(--success-color);"></i> No scheduled classes will be missed during this event.
            </div>`;
        }

        const t12 = (time24) => {
            const [h, m] = time24.split(':');
            const hNum = parseInt(h, 10);
            const ampm = hNum >= 12 ? 'PM' : 'AM';
            const h12 = hNum % 12 || 12;
            return `${h12}:${m} ${ampm}`;
        };

        return `<div style="padding:16px;border:1px solid var(--gray-100);border-radius:10px;margin-bottom:16px;background:white;transition:box-shadow 0.2s;">
            <div style="display:flex;align-items:flex-start;gap:12px;">
                <div style="width:48px;height:48px;border-radius:12px;background:${ev.color}20;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;margin-top:2px;">${ev.icon}</div>
                <div style="flex:1;min-width:0;">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;">
                        <div style="font-weight:700;font-size:16px;margin-bottom:4px;color:var(--gray-800);">${ev.name}</div>
                        <div>${badge}</div>
                    </div>
                    <div style="font-size:13px;color:var(--gray-600);display:flex;flex-wrap:wrap;gap:12px;margin-bottom:6px;">
                        <span><i class="fas fa-calendar-alt"></i> ${new Date(ev.date).toLocaleDateString('default', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span><i class="fas fa-clock"></i> ${t12(ev.start_time)} - ${t12(ev.end_time)}</span>
                    </div>
                    ${overlapHtml}
                </div>
            </div>
        </div>`;
    }).join('');

    pageContent.innerHTML = `
        <div class="card">
            <div class="card-header">
                <div>
                    <h3 class="card-title"><i class="fas fa-star" style="color:var(--primary-color);margin-right:8px;"></i>Upcoming College Events</h3>
                    <p style="font-size:13px;color:var(--gray-500);margin-top:2px;">Browse and apply for events. Missing subjects during event hours will automatically grant you attendance once approved.</p>
                </div>
            </div>
            <div style="padding:10px 24px 24px;">
                ${evListHtml || '<div style="text-align:center;padding:40px 0;color:var(--gray-400);"><i class="fas fa-calendar-times" style="font-size:32px;margin-bottom:12px;"></i><br>No upcoming events found.</div>'}
            </div>
        </div>
    `;
    renderEventModal();
} 

// ─── Student Faculty Directory Page ───────────────────────────────────────────
function loadFacultyPage() {
    if (currentUser.role !== 'student') return;
    
    const facultyDirectory = [
        { subject: 'Maths', name: 'Arun Yadav', email: 'arun.yadav43@college.edu', phone: '+91 98765 21034' },
        { subject: 'DSA', name: 'Shaquib Hassan', email: 'shaquib.hassan18@college.edu', phone: '+91 98112 76450' },
        { subject: 'Web Development', name: 'Mohammad Shadav', email: 'mohammad.shadav27@college.edu', phone: '+91 99203 45817' },
        { subject: 'Minor Project', name: 'Deepak Kaushik', email: 'deepak.kaushik91@college.edu', phone: '+91 97081 34629' },
        { subject: 'Open Elective', name: 'Saloni', email: 'saloni.faculty56@college.edu', phone: '+91 99541 28360' },
        { subject: 'Makers', name: 'Kaushal Kumar', email: 'kaushal.kumar72@college.edu', phone: '+91 97984 61205' },
        { subject: 'Physics', name: 'Kirti', email: 'kirti.physics39@college.edu', phone: '+91 98970 14583' }
    ];

    const facultyListHtml = facultyDirectory.map(f => {
        return `<div style="padding:16px;border:1px solid var(--gray-100);border-radius:10px;margin-bottom:16px;background:white;transition:box-shadow 0.2s;display:flex;align-items:center;gap:16px;">
            <div style="width:60px;height:60px;border-radius:50%;background:var(--primary-color)20;color:var(--primary-color);display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;">
                <i class="fas fa-chalkboard-teacher"></i>
            </div>
            <div style="flex:1;min-width:0;">
                <div style="font-weight:700;font-size:16px;margin-bottom:4px;color:var(--gray-800);">${f.name}</div>
                <div style="font-size:13px;color:var(--primary-color);font-weight:600;margin-bottom:6px;">${f.subject}</div>
                <div style="font-size:13px;color:var(--gray-600);display:flex;flex-wrap:wrap;gap:16px;">
                    <span style="display:flex;align-items:center;gap:6px;"><i class="fas fa-envelope"></i> ${f.email}</span>
                    <span style="display:flex;align-items:center;gap:6px;"><i class="fas fa-phone"></i> ${f.phone}</span>
                </div>
            </div>
            <button class="btn btn-outline btn-sm" onclick="showToast('info', 'Contact Faculty', 'Contact functionality is currently disabled in demo mode.')"><i class="fas fa-paper-plane"></i> Message</button>
        </div>`;
    }).join('');

    pageContent.innerHTML = `
        <div class="card">
            <div class="card-header">
                <div>
                    <h3 class="card-title"><i class="fas fa-users" style="color:var(--primary-color);margin-right:8px;"></i>Faculty Directory</h3>
                    <p style="font-size:13px;color:var(--gray-500);margin-top:2px;">Contact information and subjects for your professors</p>
                </div>
            </div>
            <div style="padding:10px 24px 24px;">
                ${facultyListHtml || '<div style="text-align:center;padding:40px 0;color:var(--gray-400);"><i class="fas fa-user-slash" style="font-size:32px;margin-bottom:12px;"></i><br>No faculty members found.</div>'}
            </div>
        </div>
    `;
}

// ─── Profile Page ─────────────────────────────────────────────────────────────
let profileEditorState = null;

function hasUnsavedProfileChanges() {
    if (!profileEditorState || !profileEditorState.isEdit) return false;
    return JSON.stringify(profileEditorState.data) !== JSON.stringify(profileEditorState.original);
}

function renderProfilePage() {
    if (!profileEditorState) return;
    const s = profileEditorState;
    const d = s.data;
    const readOnly = !s.isEdit;
    const tab = s.activeTab;
    const isFaculty = currentUser && currentUser.role === 'faculty';
    const isAdmin = currentUser && currentUser.role === 'admin';
    const isStaffProfile = isFaculty || isAdmin;

    const inputAttr = readOnly ? 'disabled' : '';
    const readOnlyAttr = 'disabled';

    const tabButtons = isStaffProfile ? '' : `
        <div class="profile-tabs">
            <button class="profile-tab-btn ${tab === 'personal' ? 'active' : ''}" onclick="switchProfileTab('personal')">Personal Information</button>
            <button class="profile-tab-btn ${tab === 'university' ? 'active' : ''}" onclick="switchProfileTab('university')">University Details</button>
        </div>
    `;

    const personalTab = `
        <div class="profile-section">
            <h4 class="profile-section-title">Personal Information</h4>
            <div class="profile-form-grid">
                <!-- CHANGE: Added Student Name + key personal contact fields per request -->
                <div class="form-group profile-span-2"><label>Student Name</label><input type="text" class="input" value="${d.studentName}" ${readOnlyAttr}></div>
                <div class="form-group"><label>Father's Name</label><input type="text" class="input" value="${d.fatherName}" ${inputAttr} oninput="handleProfileInputChange('fatherName', this.value)"></div>
                <div class="form-group"><label>Mother's Name</label><input type="text" class="input" value="${d.motherName}" ${inputAttr} oninput="handleProfileInputChange('motherName', this.value)"></div>
                <div class="form-group profile-span-2"><label>Address</label><input type="text" class="input" value="${d.address}" ${inputAttr} oninput="handleProfileInputChange('address', this.value)"></div>
                <div class="form-group"><label>Mobile No</label><input type="text" class="input" value="${d.phone}" ${inputAttr} inputmode="numeric" oninput="this.value=this.value.replace(/[^0-9]/g,''); handleProfileInputChange('phone', this.value)"></div>
                <div class="form-group"><label>Email</label><input type="email" class="input" value="${d.personalEmail}" ${inputAttr} oninput="handleProfileInputChange('personalEmail', this.value)"></div>
                <div class="form-group"><label>Gender</label>
                    <select class="input" ${inputAttr} onchange="handleProfileInputChange('gender', this.value)">
                        <option value="">Select gender</option>
                        <option value="Male" ${d.gender === 'Male' ? 'selected' : ''}>Male</option>
                        <option value="Female" ${d.gender === 'Female' ? 'selected' : ''}>Female</option>
                        <option value="Other" ${d.gender === 'Other' ? 'selected' : ''}>Other</option>
                        <option value="Prefer not to say" ${d.gender === 'Prefer not to say' ? 'selected' : ''}>Prefer not to say</option>
                    </select>
                </div>
                <div class="form-group"><label>Age</label><input type="number" min="1" max="120" class="input" value="${d.age}" ${inputAttr} oninput="handleProfileInputChange('age', this.value)"></div>
            </div>
        </div>
    `;

    const universityTab = `
        <div class="profile-section">
            <h4 class="profile-section-title">University Details</h4>
            <div class="profile-form-grid">
                <!-- CHANGE: University info fields organized per request -->
                <div class="form-group"><label>Admission No</label><input type="text" class="input" value="${d.admissionNo}" ${readOnlyAttr}></div>
                <div class="form-group"><label>Roll No</label><input type="text" class="input" value="${d.rollNo}" ${readOnlyAttr}></div>
                <div class="form-group"><label>Programme Name</label><input type="text" class="input" value="${d.programme}" ${inputAttr} oninput="handleProfileInputChange('programme', this.value)"></div>
                <div class="form-group"><label>Semester</label><input type="text" class="input" value="${d.semester}" ${inputAttr} oninput="handleProfileInputChange('semester', this.value)"></div>
                <div class="form-group"><label>Course Name</label><input type="text" class="input" value="${d.courseName}" ${inputAttr} oninput="handleProfileInputChange('courseName', this.value)"></div>
                <div class="form-group"><label>Course Coordinator</label><input type="text" class="input" value="${d.courseCoordinator}" ${inputAttr} oninput="handleProfileInputChange('courseCoordinator', this.value)"></div>
                <div class="form-group"><label>College Email ID</label><input type="text" class="input" value="${d.collegeEmailId}" ${readOnlyAttr}></div>
                <div class="form-group profile-span-2"><label>College Student Email ID</label><input type="text" class="input" value="${d.collegeStudentEmailId}" ${readOnlyAttr}></div>
            </div>
        </div>
    `;

    const facultyProfileTab = `
        <div class="profile-section">
            <h4 class="profile-section-title">Personal Information</h4>
            <div class="profile-form-grid">
                <div class="form-group profile-span-2"><label>Name</label><input type="text" class="input" value="${d.facultyName}" ${readOnlyAttr}></div>
                <div class="form-group"><label>DOB</label><input type="date" class="input" value="${d.dob}" ${inputAttr} oninput="handleProfileInputChange('dob', this.value)"></div>
                <div class="form-group"><label>Teacher ID</label><input type="text" class="input" value="${d.teacherId}" ${readOnlyAttr}></div>
                <div class="form-group"><label>Designation</label><input type="text" class="input" value="${d.designation}" ${inputAttr} oninput="handleProfileInputChange('designation', this.value)"></div>
                <div class="form-group"><label>Department</label><input type="text" class="input" value="${d.department}" ${inputAttr} oninput="handleProfileInputChange('department', this.value)"></div>
                <div class="form-group"><label>Contact No</label><input type="text" class="input" value="${d.contactNo}" ${inputAttr} inputmode="numeric" oninput="this.value=this.value.replace(/[^0-9]/g,''); handleProfileInputChange('contactNo', this.value)"></div>
                <div class="form-group"><label>College Email ID</label><input type="email" class="input" value="${d.collegeEmailId}" ${readOnlyAttr}></div>
                <div class="form-group profile-span-2"><label>Address</label><input type="text" class="input" value="${d.address}" ${inputAttr} oninput="handleProfileInputChange('address', this.value)"></div>
            </div>
            <div style="margin-top:16px;">
                <button class="btn btn-outline" onclick="openForgotPasswordHelp()"><i class="fas fa-unlock-alt"></i> Forgot Password</button>
            </div>
        </div>
    `;

    const adminProfileTab = `
        <div class="profile-section">
            <h4 class="profile-section-title">Personal Information</h4>
            <div class="profile-form-grid">
                <div class="form-group profile-span-2"><label>Name</label><input type="text" class="input" value="${d.adminName}" ${readOnlyAttr}></div>
                <div class="form-group"><label>Admin ID</label><input type="text" class="input" value="${d.adminId}" ${readOnlyAttr}></div>
                <div class="form-group"><label>Phone No</label><input type="text" class="input" value="${d.phoneNo}" ${inputAttr} inputmode="numeric" oninput="this.value=this.value.replace(/[^0-9]/g,''); handleProfileInputChange('phoneNo', this.value)"></div>
                <div class="form-group"><label>DOB</label><input type="date" class="input" value="${d.dob}" ${inputAttr} oninput="handleProfileInputChange('dob', this.value)"></div>
                <div class="form-group"><label>College Email</label><input type="email" class="input" value="${d.collegeEmail}" ${readOnlyAttr}></div>
                <div class="form-group"><label>Department</label><input type="text" class="input" value="${d.department}" ${inputAttr} oninput="handleProfileInputChange('department', this.value)"></div>
                <div class="form-group"><label>Designation</label><input type="text" class="input" value="${d.designation}" ${inputAttr} oninput="handleProfileInputChange('designation', this.value)"></div>
            </div>
            <div style="margin-top:16px;">
                <button class="btn btn-outline" onclick="openForgotPasswordHelp()"><i class="fas fa-unlock-alt"></i> Forgot Password</button>
            </div>
        </div>
    `;

    pageContent.innerHTML = `
        <div class="card profile-card-shell">
            <div class="card-header profile-card-header">
                <div>
                    <h3 class="card-title"><i class="fas fa-user-circle" style="color:var(--primary-color);margin-right:8px;"></i>My Profile</h3>
                    <p class="profile-head-sub">${isFaculty ? 'Keep your faculty information up to date.' : isAdmin ? 'Keep your admin information up to date.' : 'Keep your personal and university details up to date.'}</p>
                </div>
                ${s.isEdit
                    ? ''
                    : '<button class="btn btn-primary" onclick="toggleProfileEdit(true)"><i class="fas fa-pen"></i> Edit</button>'}
            </div>
            <div class="profile-form-wrap">
                ${tabButtons}
                ${isFaculty ? facultyProfileTab : isAdmin ? adminProfileTab : (tab === 'personal' ? personalTab : universityTab)}
                ${s.isEdit ? `
                    <div class="profile-actions">
                        <button class="btn btn-outline" onclick="cancelProfileEdit()"><i class="fas fa-times"></i> Cancel</button>
                        <button class="btn btn-primary" onclick="saveProfile()" id="saveProfileBtn"><i class="fas fa-save"></i> Save Changes</button>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function switchProfileTab(tab) {
    if (!profileEditorState) return;
    if (currentUser && (currentUser.role === 'faculty' || currentUser.role === 'admin')) return;
    if (profileEditorState.activeTab !== tab && hasUnsavedProfileChanges()) {
        const shouldSwitch = confirm('You have unsaved changes in this tab. Switch anyway?');
        if (!shouldSwitch) return;
    }
    profileEditorState.activeTab = tab;
    renderProfilePage();
}

function toggleProfileEdit(flag) {
    if (!profileEditorState) return;
    profileEditorState.isEdit = flag;
    renderProfilePage();
}

function cancelProfileEdit() {
    if (!profileEditorState) return;
    profileEditorState.data = { ...profileEditorState.original };
    profileEditorState.isEdit = false;
    renderProfilePage();
}

function handleProfileInputChange(field, value) {
    if (!profileEditorState) return;
    profileEditorState.data[field] = value;
}

function validateStudentProfile(data) {
    if (data.phone && !/^\d+$/.test(data.phone)) return 'Phone number must contain digits only.';
    if (data.phone && (data.phone.length < 7 || data.phone.length > 15)) return 'Phone number length should be between 7 and 15 digits.';
    if (data.contactNo && !/^\d+$/.test(data.contactNo)) return 'Contact number must contain digits only.';
    if (data.contactNo && (data.contactNo.length < 7 || data.contactNo.length > 15)) return 'Contact number length should be between 7 and 15 digits.';
    if (data.phoneNo && !/^\d+$/.test(data.phoneNo)) return 'Phone number must contain digits only.';
    if (data.phoneNo && (data.phoneNo.length < 7 || data.phoneNo.length > 15)) return 'Phone number length should be between 7 and 15 digits.';
    if (data.personalEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.personalEmail)) return 'Enter a valid personal email address.';
    if (data.age && (!Number.isInteger(Number(data.age)) || Number(data.age) < 1 || Number(data.age) > 120)) return 'Age must be a valid number between 1 and 120.';
    return '';
}

function openForgotPasswordHelp() {
    const roleText = currentUser && currentUser.role === 'admin' ? 'admin' : 'faculty';
    showToast('info', 'Forgot Password', `Please use the "Forgot password?" link on login page or contact super-admin to reset your ${roleText} account password.`);
}

async function loadProfilePage() {
    pageContent.innerHTML = `
        <div class="card profile-card-shell">
            <div class="profile-loading"><i class="fas fa-circle-notch fa-spin"></i><span>Loading profile...</span></div>
        </div>
    `;

    try {
        let profileData = {};
        const token = localStorage.getItem('token');
        if (token) profileData = await apiCall('/profile');
        else profileData = currentUser || {};

        const p = profileData.profile || {};
        const isFaculty = (currentUser && currentUser.role === 'faculty') || profileData.role === 'faculty';
        const isAdmin = (currentUser && currentUser.role === 'admin') || profileData.role === 'admin';
        profileEditorState = {
            isEdit: false,
            activeTab: 'personal',
            data: {
                // CHANGE: Student Name displayed in Personal Info (read-only)
                studentName: profileData.name || currentUser.name || '',
                fatherName: p.fatherName || '',
                motherName: p.motherName || '',
                address: p.address || '',
                phone: p.phone || '',
                personalEmail: p.personalEmail || '',
                gender: p.gender || '',
                age: p.age || '',
                admissionNo: p.admissionNo || 'ADM-2026-001',
                rollNo: p.rollNo || '',
                // CHANGE: Split college emails (read-only display)
                collegeEmailId: p.collegeEmailId || 'info@college.edu',
                collegeStudentEmailId: profileData.email || currentUser.email || '',
                programme: p.programme || '',
                courseName: p.courseName || 'B.Tech',
                semester: p.semester || '',
                courseCoordinator: p.courseCoordinator || '',
                className: p.className || '',
                facultyName: profileData.name || currentUser.name || '',
                dob: p.dob || '',
                teacherId: p.teacherId || (profileData.id || currentUser.id || ''),
                designation: p.designation || 'Assistant Professor',
                department: p.department || 'Computer Science',
                contactNo: p.contactNo || p.phone || '',
                collegeEmailId: profileData.email || currentUser.email || '',
                adminName: profileData.name || currentUser.name || '',
                adminId: p.adminId || (profileData.id || currentUser.id || ''),
                phoneNo: p.phoneNo || p.phone || '',
                collegeEmail: profileData.email || currentUser.email || ''
            }
        };
        if (isFaculty || isAdmin) profileEditorState.activeTab = 'personal';
        profileEditorState.original = { ...profileEditorState.data };
        renderProfilePage();
    } catch (e) {
        pageContent.innerHTML = `<div class="card profile-card-shell"><div style="text-align:center;color:var(--danger-color);padding:20px;">Failed to load profile details. Error: ${e.message}</div></div>`;
    }
}

async function saveProfile() {
    if (!profileEditorState) return;
    const btn = document.getElementById('saveProfileBtn');
    if (btn) { btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Saving...'; btn.disabled = true; }

    const data = profileEditorState.data;
    const validationError = validateStudentProfile(data);
    if (validationError) {
        showToast('error', 'Validation Error', validationError);
        if (btn) { btn.innerHTML = '<i class="fas fa-save"></i> Save Changes'; btn.disabled = false; }
        return;
    }

    const payload = (currentUser && currentUser.role === 'faculty')
        ? {
            dob: data.dob,
            address: data.address,
            teacherId: data.teacherId,
            designation: data.designation,
            department: data.department,
            contactNo: data.contactNo,
            collegeEmailId: data.collegeEmailId
        }
        : (currentUser && currentUser.role === 'admin')
            ? {
                adminId: data.adminId,
                phoneNo: data.phoneNo,
                dob: data.dob,
                collegeEmail: data.collegeEmail,
                department: data.department,
                designation: data.designation
            }
        : {
            fatherName: data.fatherName,
            motherName: data.motherName,
            address: data.address,
            phone: data.phone,
            personalEmail: data.personalEmail,
            gender: data.gender,
            age: data.age ? Number(data.age) : '',
            programme: data.programme,
            courseName: data.courseName,
            className: data.className,
            rollNo: data.rollNo,
            admissionNo: data.admissionNo,
            // CHANGE: Persist new university fields (if backend ignores unknown keys, it remains safe)
            semester: data.semester,
            courseCoordinator: data.courseCoordinator,
            collegeEmailId: data.collegeEmailId
        };

    try {
        const token = localStorage.getItem('token');
        if (token) await apiCall('/profile', 'PUT', payload);
        else {
            if (!currentUser.profile) currentUser.profile = {};
            Object.assign(currentUser.profile, payload);
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
        profileEditorState.original = { ...profileEditorState.data };
        profileEditorState.isEdit = false;
        renderProfilePage();
        showToast('success', 'Profile Updated', 'Your profile details were saved successfully.');
    } catch (e) {
        showToast('error', 'Update Failed', e.message);
    } finally {
        if (btn) { btn.innerHTML = '<i class="fas fa-save"></i> Save Changes'; btn.disabled = false; }
    }
}

// ─── Event Modal ──────────────────────────────────────────────────────────────
function renderEventModal() {
    if (document.getElementById('eventModal')) return;
    const modal = document.createElement('div');
    modal.id = 'eventModal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeEventModal()"></div>
        <div class="modal-box">
            <div class="modal-header">
                <div id="modalEventIcon" style="font-size:32px;line-height:1;"></div>
                <div style="flex:1;min-width:0;"><div id="modalEventName" style="font-size:18px;font-weight:700;"></div><div id="modalEventDate" style="font-size:13px;color:var(--gray-500);"></div></div>
                <button class="close-btn" onclick="closeEventModal()"><i class="fas fa-times"></i></button>
            </div>
            <div id="modalEventDesc" style="font-size:14px;color:var(--gray-600);margin-bottom:20px;line-height:1.6;padding:12px;background:var(--gray-50);border-radius:8px;"></div>
            <div id="modalApplyForm">
                <div id="modalStatusMsg"></div>
                <div class="form-group"><label>Your Full Name</label><input type="text" id="modalStudentName" class="input" placeholder="Enter your full name"></div>
                <div class="form-group"><label>Roll Number</label><input type="text" id="modalRollNo" class="input" placeholder="e.g. CS2021001"></div>
                <div class="form-group"><label>Why are you participating?</label><textarea id="modalReason" class="input" rows="3" placeholder="Describe your role or reason for participating"></textarea></div>
                <button id="modalSubmitBtn" class="btn btn-primary btn-full" onclick="submitEventParticipation()"><i class="fas fa-paper-plane"></i> Submit Participation Request</button>
            </div>
        </div>`;
    document.body.appendChild(modal);
}

function openEventModal(eventId) {
    // Make sure modal is in DOM
    renderEventModal();
    const ev = mockData.collegeEvents.find(e => e.id === eventId);
    if (!ev) return;
    _activeEventId = eventId;

    document.getElementById('modalEventIcon').textContent = ev.icon;
    document.getElementById('modalEventName').textContent = ev.name;
    document.getElementById('modalEventDate').textContent = new Date(ev.date).toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('modalEventDesc').textContent = ev.description;

    const me = allStudents.find(s => s.id === currentUser.id);
    if (me) { document.getElementById('modalStudentName').value = me.name; document.getElementById('modalRollNo').value = me.rollNo; }

    const existing = mockData.eventParticipations.find(p => p.event_id === eventId && p.student_id === currentUser.id);
    const statusMsg = document.getElementById('modalStatusMsg');
    const submitBtn = document.getElementById('modalSubmitBtn');
    ['modalStudentName', 'modalRollNo', 'modalReason'].forEach(id => { const el = document.getElementById(id); if (el) el.disabled = !!existing; });
    if (submitBtn) submitBtn.disabled = !!existing;

    if (existing) {
        const color = existing.status === 'approved' ? 'var(--success-color)' : existing.status === 'rejected' ? 'var(--danger-color)' : 'var(--warning-color)';
        const icon = existing.status === 'approved' ? 'fa-check-circle' : existing.status === 'rejected' ? 'fa-times-circle' : 'fa-clock';
        const label = existing.status === 'approved' ? 'Your participation has been verified by admin!' : existing.status === 'rejected' ? 'Your request was not approved.' : 'Your request is pending admin verification.';
        statusMsg.innerHTML = `<div style="padding:12px;border-radius:8px;background:${color}18;color:${color};display:flex;gap:10px;align-items:center;margin-bottom:16px;font-weight:500;font-size:14px;"><i class="fas ${icon}"></i>${label}</div>`;
    } else {
        statusMsg.innerHTML = '';
        document.getElementById('modalReason').value = '';
    }

    document.getElementById('eventModal').classList.add('active');
}

function closeEventModal() {
    const m = document.getElementById('eventModal');
    if (m) m.classList.remove('active');
    _activeEventId = null;
}

function submitEventParticipation() {
    const name = document.getElementById('modalStudentName').value.trim();
    const rollNo = document.getElementById('modalRollNo').value.trim();
    const reason = document.getElementById('modalReason').value.trim();
    if (!name || !rollNo || !reason) { showToast('warning', 'Missing Info', 'Please fill all fields.'); return; }

    const ev = mockData.collegeEvents.find(e => e.id === _activeEventId);
    mockData.eventParticipations.push({ id: 'ep' + Date.now(), event_id: _activeEventId, event_name: ev.name, date: ev.date, student_id: currentUser.id, student_name: name, roll_no: rollNo, reason, status: 'pending', submitted_at: new Date().toISOString() });

    showToast('success', 'Request Submitted', 'Your participation request is pending admin verification.');
    closeEventModal();
    loadEventsPage();
}

// ─── Admin: Event Verification Page ──────────────────────────────────────────
function loadEventVerifyPage() {
    const pending = mockData.eventParticipations.filter(p => p.status === 'pending');
    const done = mockData.eventParticipations.filter(p => p.status !== 'pending');

    function tableRows(list) {
        if (!list.length) return '<tr><td colspan="6" style="text-align:center;color:var(--gray-400);padding:20px;">No records</td></tr>';
        return list.map(p => `<tr>
            <td><div style="font-weight:600;">${p.student_name}</div><div style="font-size:12px;color:var(--gray-500);">${p.roll_no}</div></td>
            <td>${p.event_name}</td>
            <td>${new Date(p.date).toLocaleDateString()}</td>
            <td style="max-width:180px;font-size:13px;color:var(--gray-600);">${p.reason}</td>
            <td><span class="status-badge ${p.status === 'approved' ? 'present' : p.status === 'rejected' ? 'absent' : 'late'}">${p.status}</span></td>
            <td>${p.status === 'pending'
                ? `<button class="btn btn-success btn-sm" onclick="verifyParticipation('${p.id}','approved')"><i class="fas fa-check"></i> Approve</button> <button class="btn btn-danger btn-sm" onclick="verifyParticipation('${p.id}','rejected')"><i class="fas fa-times"></i> Reject</button>`
                : '-'}
            </td>
        </tr>`).join('');
    }

    pageContent.innerHTML = `
        <div class="card">
            <div class="card-header"><h3 class="card-title"><i class="fas fa-star" style="color:#6366f1;margin-right:8px;"></i>Pending Event Participation Requests</h3><span class="status-badge late">${pending.length} pending</span></div>
            <div class="table-container"><table class="table"><thead><tr><th>Student</th><th>Event</th><th>Date</th><th>Reason</th><th>Status</th><th>Actions</th></tr></thead><tbody>${tableRows(pending)}</tbody></table></div>
        </div>
        <div class="card">
            <div class="card-header"><h3 class="card-title">Processed Requests</h3></div>
            <div class="table-container"><table class="table"><thead><tr><th>Student</th><th>Event</th><th>Date</th><th>Reason</th><th>Status</th><th>Actions</th></tr></thead><tbody>${tableRows(done)}</tbody></table></div>
        </div>`;
}

function verifyParticipation(participationId, newStatus) {
    const p = mockData.eventParticipations.find(x => x.id === participationId);
    if (p) { p.status = newStatus; showToast(newStatus === 'approved' ? 'success' : 'warning', newStatus === 'approved' ? 'Approved' : 'Rejected', `${p.student_name}'s participation ${newStatus}.`); if (currentPage === 'eventverify') loadEventVerifyPage(); else loadDashboard(); }
}

// ─── Analytics + Future Outcomes (student) ───────────────────────────────────
function loadFutureOutcomesPage() {
    const sId = currentUser.id;
    const att = mockData.attendanceRecords.filter(r => r.student_id === sId);
    const pCnt = att.filter(r => r.status === 'present').length;
    const aCnt = att.filter(r => r.status === 'absent').length;
    const eCnt = att.filter(r => r.status === 'event').length;
    const tCnt = att.length;
    const pct = tCnt > 0 ? (pCnt / tCnt) * 100 : 0;

    // ── Streak calculation ──────────────────────────────────────────────────
    const sorted = [...att].sort((a, b) => new Date(b.date) - new Date(a.date));
    let currentStreak = 0, longestStreak = 0, tempStreak = 0;
    // current streak: consecutive present from most recent
    for (const r of sorted) {
        if (r.status === 'present' || r.status === 'event') currentStreak++;
        else break;
    }
    // longest streak: scan all sorted ascending
    const asc = [...att].sort((a, b) => new Date(a.date) - new Date(b.date));
    for (const r of asc) {
        if (r.status === 'present' || r.status === 'event') { tempStreak++; longestStreak = Math.max(longestStreak, tempStreak); }
        else tempStreak = 0;
    }

    // ── Subject-wise ────────────────────────────────────────────────────────
    const cids = Array.from(new Set(att.map(r => r.class_id)));
    const subjectRows = cids.map(cid => {
        const cls = mockData.classes.find(c => c.id === cid) || { course_name: 'Class', section: '' };
        const recs = att.filter(r => r.class_id === cid);
        const sp = recs.filter(r => r.status === 'present').length;
        const sa = recs.filter(r => r.status === 'absent').length;
        const st = recs.length;
        const spct = st > 0 ? ((sp / st) * 100) : 0;
        const bc = spct >= 75 ? 'var(--success-color)' : spct >= 50 ? 'var(--warning-color)' : 'var(--danger-color)';
        return `
            <div style="padding:12px;border:1px solid var(--gray-100);border-radius:10px;margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                    <div>
                        <div style="font-weight:600;font-size:14px;">${cls.course_name}</div>
                        <div style="font-size:11px;color:var(--gray-500);">${cls.section || ''}</div>
                    </div>
                    <div style="font-size:18px;font-weight:800;color:${bc};">${spct.toFixed(0)}%</div>
                </div>
                <div style="background:var(--gray-100);height:7px;border-radius:4px;overflow:hidden;margin-bottom:6px;">
                    <div style="background:${bc};height:100%;width:${Math.min(spct, 100)}%;border-radius:4px;transition:width .5s;"></div>
                </div>
                <div style="display:flex;gap:12px;font-size:12px;">
                    <span style="color:var(--success-color);"><i class="fas fa-check"></i> ${sp} present</span>
                    <span style="color:var(--danger-color);"><i class="fas fa-times"></i> ${sa} absent</span>
                    <span style="color:var(--gray-400);">${st} total</span>
                </div>
            </div>`;
    }).join('');

    // ── Future projections ──────────────────────────────────────────────────
    const miss = n => { const t = tCnt + n; return t > 0 ? (pCnt / t) * 100 : 0; };
    const gain = n => (tCnt + n) > 0 ? ((pCnt + n) / (tCnt + n)) * 100 : 0;
    const need = target => { if (pct >= target) return 0; return Math.max(0, Math.ceil((target * tCnt - 100 * pCnt) / (100 - target))); };
    const safeMiss = Math.max(0, Math.floor(pCnt / 0.75 - tCnt));

    function pBar(p) { const c = p >= 75 ? 'var(--success-color)' : p >= 50 ? 'var(--warning-color)' : 'var(--danger-color)'; return `<div style="height:8px;background:var(--gray-100);border-radius:4px;overflow:hidden;margin-top:6px;"><div style="height:100%;width:${Math.min(p, 100)}%;background:${c};border-radius:4px;transition:width .6s;"></div></div>`; }
    function sCard(icon, ic, label, p, note) {
        const d = (p - pct).toFixed(1); const dc = d >= 0 ? 'var(--success-color)' : 'var(--danger-color)'; const di = d >= 0 ? 'fa-arrow-up' : 'fa-arrow-down';
        return `<div class="outcome-scenario-card"><div class="osc-icon" style="background:${ic}20;color:${ic};"><i class="fas ${icon}"></i></div><div class="osc-body"><div class="osc-label">${label}</div><div class="osc-pct">${p.toFixed(1)}%</div><div class="osc-delta" style="color:${dc};"><i class="fas ${di}"></i> ${Math.abs(d)}% from current</div>${pBar(p)}<div class="osc-note">${note}</div></div></div>`;
    }

    pageContent.innerHTML = `
        <!-- BANNER -->
        <div class="future-banner">
            <div class="future-banner-inner">
                <div class="future-banner-icon"><i class="fas fa-chart-bar" style="font-size:26px;"></i></div>
                <div>
                    <div class="future-banner-title">Attendance Analytics</div>
                    <div class="future-banner-sub">${tCnt} total classes · ${pCnt} present · ${aCnt} absent · ${eCnt} events</div>
                </div>
            </div>
            <div class="future-banner-pct">
                <div class="future-banner-big">${pct.toFixed(1)}%</div>
                <div class="future-banner-status ${pct >= 75 ? 'safe' : 'risk'}">${pct >= 75 ? '<i class="fas fa-check-circle"></i> On Track' : '<i class="fas fa-exclamation-circle"></i> At Risk'}</div>
            </div>
        </div>

        <!-- STATS ROW -->
        <div class="stats-grid" style="margin-bottom:24px;">
            <div class="stat-card success"><div class="stat-header"><div class="stat-icon success"><i class="fas fa-check"></i></div></div><div class="stat-value">${pCnt}</div><div class="stat-label">Classes Present</div></div>
            <div class="stat-card danger"><div class="stat-header"><div class="stat-icon danger"><i class="fas fa-times"></i></div></div><div class="stat-value">${aCnt}</div><div class="stat-label">Classes Absent</div></div>
            <div class="stat-card primary"><div class="stat-header"><div class="stat-icon primary"><i class="fas fa-calendar-star"></i></div></div><div class="stat-value">${eCnt}</div><div class="stat-label">Events Attended</div></div>
            <div class="stat-card warning"><div class="stat-header"><div class="stat-icon warning"><i class="fas fa-shield-alt"></i></div></div><div class="stat-value">${safeMiss}</div><div class="stat-label">Safe to Miss</div></div>
        </div>

        <!-- STREAK -->
        <div class="card" style="margin-bottom:24px;">
            <div class="card-header"><h3 class="card-title"><i class="fas fa-fire" style="color:#f97316;margin-right:8px;"></i>Attendance Streak</h3></div>
            <div style="display:flex;gap:16px;flex-wrap:wrap;padding:0 4px 8px;">
                <div class="streak-box" style="border-color:#f97316;">
                    <div class="streak-num" style="color:#f97316;">${currentStreak}</div>
                    <div class="streak-label">Current Streak</div>
                    <div class="streak-sub">consecutive classes attended</div>
                </div>
                <div class="streak-box" style="border-color:#6366f1;">
                    <div class="streak-num" style="color:#6366f1;">${longestStreak}</div>
                    <div class="streak-label">Longest Streak</div>
                    <div class="streak-sub">best run this semester</div>
                </div>
                <div class="streak-box" style="border-color:var(--success-color);">
                    <div class="streak-num" style="color:var(--success-color);">${tCnt}</div>
                    <div class="streak-label">Total Recorded</div>
                    <div class="streak-sub">classes this semester</div>
                </div>
            </div>
            <!-- Mini recent activity dots -->
            <div style="padding:0 4px 4px;">
                <div style="font-size:12px;color:var(--gray-500);margin-bottom:6px;">Last ${Math.min(sorted.length, 20)} classes</div>
                <div style="display:flex;gap:4px;flex-wrap:wrap;">
                    ${sorted.slice(0, 20).map(r => {
        const c = r.status === 'present' ? 'var(--success-color)' : r.status === 'absent' ? 'var(--danger-color)' : r.status === 'event' ? '#6366f1' : 'var(--warning-color)';
        return `<div title="${r.date} · ${r.class_name} · ${r.status}" style="width:18px;height:18px;border-radius:4px;background:${c};cursor:default;"></div>`;
    }).join('')}
                </div>
                <div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap;">
                    ${[['var(--success-color)', 'Present'], ['var(--danger-color)', 'Absent'], ['#6366f1', 'Event']].map(([c, l]) => `<div style="display:flex;gap:5px;align-items:center;"><div style="width:10px;height:10px;border-radius:2px;background:${c};"></div><span style="font-size:11px;color:var(--gray-500);">${l}</span></div>`).join('')}
                </div>
            </div>
        </div>

        <!-- CHANGE: Removed "Subject-wise Breakdown" section from student analytics per request.
             Other analytics cards below remain intact. -->

        <!-- GOAL PROGRESS -->
        <div class="card" style="margin-bottom:24px;">
            <div class="card-header"><h3 class="card-title"><i class="fas fa-bullseye" style="color:var(--primary-color);margin-right:8px;"></i>Goal Progress</h3></div>
            <div class="card-body" style="padding-top:0;"><div class="goal-grid">
                <div class="goal-item ${pct >= 75 ? 'achieved' : 'pending'}">
                    <div class="goal-header"><div class="goal-label">75% Threshold</div><div class="goal-badge ${pct >= 75 ? 'achieved' : 'pending'}">${pct >= 75 ? '<i class="fas fa-check"></i> Achieved' : `${need(75)} classes away`}</div></div>
                    <div class="goal-bar-wrap"><div class="goal-bar-track"><div class="goal-bar-fill" style="width:${Math.min(pct, 100)}%;background:${pct >= 75 ? 'var(--success-color)' : 'var(--primary-color)'};"></div><div class="goal-bar-target" style="left:75%;"></div></div><div class="goal-bar-labels"><span>0%</span><span style="position:absolute;left:75%;transform:translateX(-50%);">75%</span><span>100%</span></div></div>
                    <div class="goal-desc">${pct >= 75 ? 'Great work! You\'ve cleared the mandatory threshold.' : `Attend <strong>${need(75)}</strong> more class${need(75) === 1 ? '' : 'es'} to reach 75%.`}</div>
                </div>
                <div class="goal-item ${pct >= 85 ? 'achieved' : 'pending'}">
                    <div class="goal-header"><div class="goal-label">85% Excellence</div><div class="goal-badge ${pct >= 85 ? 'achieved' : 'pending'}">${pct >= 85 ? '<i class="fas fa-check"></i> Achieved' : `${need(85)} classes away`}</div></div>
                    <div class="goal-bar-wrap"><div class="goal-bar-track"><div class="goal-bar-fill" style="width:${Math.min(pct, 100)}%;background:${pct >= 85 ? 'var(--success-color)' : 'var(--warning-color)'};"></div><div class="goal-bar-target" style="left:85%;"></div></div><div class="goal-bar-labels"><span>0%</span><span style="position:absolute;left:85%;transform:translateX(-50%);">85%</span><span>100%</span></div></div>
                    <div class="goal-desc">${pct >= 85 ? 'Excellent! Top-tier attendance bracket.' : `Attend <strong>${need(85)}</strong> more class${need(85) === 1 ? '' : 'es'} to reach 85%.`}</div>
                </div>
            </div></div>
        </div>

        <!-- FUTURE PROJECTIONS -->
        <div class="card" style="margin-bottom:24px;">
            <div class="card-header"><h3 class="card-title"><i class="fas fa-user-times" style="color:var(--danger-color);margin-right:8px;"></i>If You Miss Classes</h3><span class="card-subtitle">Projected drop</span></div>
            <div class="scenario-grid">${sCard('fa-minus-circle', '#ef4444', 'Miss 1', miss(1), 'Impact of one absence.')}${sCard('fa-calendar-times', '#f59e0b', 'Miss 3', miss(3), 'Three absences in a row.')}${sCard('fa-ban', '#dc2626', 'Miss 5', miss(5), 'Serious risk territory.')}</div>
        </div>
        <div class="card" style="margin-bottom:24px;">
            <div class="card-header"><h3 class="card-title"><i class="fas fa-user-check" style="color:var(--success-color);margin-right:8px;"></i>If You Keep Attending</h3><span class="card-subtitle">Projected gain</span></div>
            <div class="scenario-grid">${sCard('fa-calendar-check', '#22c55e', 'Next 5', gain(5), 'Stay consistent.')}${sCard('fa-star', '#3b82f6', 'Next 10', gain(10), 'Strong two-week run.')}</div>
        </div>

        <div class="future-actions-row">
            <button class="btn btn-primary" onclick="navigateToPage('calendar')"><i class="fas fa-calendar-alt"></i> Open Calendar</button>
        </div>`;
}

// ─── Analytics (admin only — student uses loadFutureOutcomesPage) ─────────────
function loadAnalyticsPage() {
    const allRecords = mockData.attendanceRecords || [];
    const adminClasses = getAdminSOETClasses();
    const classMap = new Map(adminClasses.map(c => [String(c.id), c.section]));
    const activeClassIds = new Set(adminClasses.map(c => String(c.id)));
    const records = allRecords.filter(r => activeClassIds.has(String(r.class_id)));

    const total = records.length;
    const presentLike = records.filter(r => ['present', 'late', 'event'].includes(r.status)).length;
    const absent = records.filter(r => r.status === 'absent').length;
    const overallPct = total ? Math.round((presentLike / total) * 100) : 0;

    const now = new Date();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthlyLabels = [];
    for (let i = 5; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        monthlyLabels.push(d.toLocaleString('default', { month: 'short' }));
    }

    const classIds = Array.from(activeClassIds);
    const classNames = classIds.map(cid => classMap.get(cid) || `Class ${cid}`);
    const classWeeklyPct = classIds.map(cid => {
        const clsRecords = records.filter(r => String(r.class_id) === cid);
        if (!clsRecords.length) return 0;
        const attended = clsRecords.filter(r => ['present', 'late', 'event'].includes(r.status)).length;
        return Math.round((attended / clsRecords.length) * 100);
    });
    const classMonthlyPct = classWeeklyPct.map(v => Math.max(0, Math.min(100, v - 5 + Math.floor(Math.random() * 11))));

    const dailyLabels = [];
    const dailyPct = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(now.getDate() - i);
        const ds = d.toISOString().split('T')[0];
        const dayRecs = records.filter(r => r.date === ds);
        const dayAttended = dayRecs.filter(r => ['present', 'late', 'event'].includes(r.status)).length;
        dailyLabels.push(dayNames[d.getDay()]);
        dailyPct.push(dayRecs.length ? Math.round((dayAttended / dayRecs.length) * 100) : 0);
    }

    const lowestClasses = classIds
        .map((cid, idx) => ({ id: cid, name: classNames[idx], pct: classWeeklyPct[idx] }))
        .sort((a, b) => a.pct - b.pct)
        .slice(0, 5);

    pageContent.innerHTML = `
        <div class="stats-grid" style="margin-bottom:20px;">
            <div class="stat-card primary"><div class="stat-header"><div class="stat-icon primary"><i class="fas fa-percentage"></i></div></div><div class="stat-value">${overallPct}%</div><div class="stat-label">Overall Attendance</div></div>
            <div class="stat-card success"><div class="stat-header"><div class="stat-icon success"><i class="fas fa-check"></i></div></div><div class="stat-value">${presentLike}</div><div class="stat-label">Present (incl. event)</div></div>
            <div class="stat-card danger"><div class="stat-header"><div class="stat-icon danger"><i class="fas fa-times"></i></div></div><div class="stat-value">${absent}</div><div class="stat-label">Absent</div></div>
            <div class="stat-card info"><div class="stat-header"><div class="stat-icon info"><i class="fas fa-school"></i></div></div><div class="stat-value">${classIds.length}</div><div class="stat-label">Total Classes</div></div>
        </div>

        <div class="card" style="margin-bottom:20px;">
            <div class="card-header"><h3 class="card-title"><i class="fas fa-chart-column" style="color:var(--primary-color);margin-right:8px;"></i>Weekly Attendance By Class</h3></div>
            <div style="height:300px;padding:0 8px 12px;"><canvas id="adminWeeklyClassChart"></canvas></div>
        </div>

        <div class="card" style="margin-bottom:20px;">
            <div class="card-header"><h3 class="card-title"><i class="fas fa-chart-bar" style="color:var(--success-color);margin-right:8px;"></i>Monthly Attendance By Class</h3></div>
            <div style="height:300px;padding:0 8px 12px;"><canvas id="adminMonthlyClassChart"></canvas></div>
        </div>

        <div class="card" style="margin-bottom:20px;">
            <div class="card-header"><h3 class="card-title"><i class="fas fa-chart-line" style="color:var(--warning-color);margin-right:8px;"></i>Daily Attendance Trend</h3></div>
            <div style="height:280px;padding:0 8px 12px;"><canvas id="adminDailyTrendChart"></canvas></div>
        </div>

        <div class="card">
            <div class="card-header"><h3 class="card-title"><i class="fas fa-triangle-exclamation" style="color:var(--danger-color);margin-right:8px;"></i>Lowest Attendance Classes</h3></div>
            <div class="table-container">
                <table class="table">
                    <thead><tr><th>Class</th><th>Attendance %</th><th>Status</th></tr></thead>
                    <tbody>
                        ${lowestClasses.map(c => `<tr><td>${c.name}</td><td>${c.pct}%</td><td><span class="status-badge ${c.pct < 60 ? 'danger' : c.pct < 75 ? 'warning' : 'present'}">${c.pct < 60 ? 'Critical' : c.pct < 75 ? 'Warning' : 'Safe'}</span></td></tr>`).join('')}
                        ${lowestClasses.length === 0 ? '<tr><td colspan="3" style="text-align:center;color:var(--gray-400);">No class attendance data available.</td></tr>' : ''}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    if (window._adminWeeklyClassChart) window._adminWeeklyClassChart.destroy();
    if (window._adminMonthlyClassChart) window._adminMonthlyClassChart.destroy();
    if (window._adminDailyTrendChart) window._adminDailyTrendChart.destroy();

    const weeklyCtx = document.getElementById('adminWeeklyClassChart');
    const monthlyCtx = document.getElementById('adminMonthlyClassChart');
    const dailyCtx = document.getElementById('adminDailyTrendChart');

    if (weeklyCtx) {
        window._adminWeeklyClassChart = new Chart(weeklyCtx, {
            type: 'bar',
            data: {
                labels: classNames,
                datasets: [{ label: 'Weekly %', data: classWeeklyPct, backgroundColor: '#6366f1', borderRadius: 8 }]
            },
            options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 100 } } }
        });
    }
    if (monthlyCtx) {
        window._adminMonthlyClassChart = new Chart(monthlyCtx, {
            type: 'bar',
            data: {
                labels: classNames,
                datasets: [{ label: `Monthly % (${monthlyLabels[monthlyLabels.length - 1]})`, data: classMonthlyPct, backgroundColor: '#10b981', borderRadius: 8 }]
            },
            options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 100 } } }
        });
    }
    if (dailyCtx) {
        window._adminDailyTrendChart = new Chart(dailyCtx, {
            type: 'line',
            data: {
                labels: dailyLabels,
                datasets: [{ label: 'Daily Attendance %', data: dailyPct, borderColor: '#f59e0b', backgroundColor: 'rgba(245,158,11,0.12)', fill: true, tension: 0.35 }]
            },
            options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 100 } } }
        });
    }
}

function loadLeavePage() {
    pageContent.innerHTML = `<div class="card"><div class="card-header"><h3 class="card-title">Leave Request</h3></div><form id="leaveForm" onsubmit="submitLeaveRequest(event)"><div class="form-group"><label>Class</label><select id="leaveClass" class="input" required><option value="">Select a class</option>${mockData.classes.map(cls => `<option value="${cls.id}">${cls.course_name}</option>`).join('')}</select></div><div class="form-group"><label>Start Date</label><input type="date" id="startDate" class="input" required></div><div class="form-group"><label>End Date</label><input type="date" id="endDate" class="input" required></div><div class="form-group"><label>Reason</label><textarea id="reason" class="input" rows="4" placeholder="Enter reason" required></textarea></div><button type="submit" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Submit Request</button></form></div><div class="card"><div class="card-header"><h3 class="card-title">My Leave Requests</h3></div><div class="table-container"><table class="table"><thead><tr><th>Start</th><th>End</th><th>Reason</th><th>Status</th></tr></thead><tbody>${mockData.leaveRequests.filter(r => r.student_id === currentUser.id).map(req => `<tr><td>${new Date(req.start_date).toLocaleDateString()}</td><td>${new Date(req.end_date).toLocaleDateString()}</td><td>${req.reason}</td><td><span class="status-badge ${req.status}">${req.status}</span></td></tr>`).join('')}</tbody></table></div></div>`;
}
function getAdminSOETClasses() {
    const soetSections = [
        'Btech CSE DS 2025-2029',
        'Btech CSE FSD (B) 2025-2029',
        'Btech CSE DS (B) 2024-2028',
        'Btech CSE (C) 2023-2027',
        'Btech CSE (F) 2023-2027',
        'Btech CSE Ai & Ml (D) 2024-2028',
        'Btech CSE Robotics (F) 2025-2029',
        'Btech CSE (E) 2025-2029',
        'Btech CSE Ai & Ml (G) 2025-2029',
        'Btech CSE Ai & Ml (A) 2025-2029'
    ];

    const coordinatorNames = [
        'Dr Priya Sharma',
        'Dr Shadav Mohammad',
        'Dr Arun Yadav',
        'Dr Shaquinb Hassan',
        'Dr Neha Gupta',
        'Dr Kirti Saini',
        'Dr Rakesh Verma',
        'Dr Elective Lead',
        'Dr Maker Lead',
        'Dr Deepak Kaushik'
    ];

    return soetSections.map((sectionName, idx) => {
        const fallback = mockData.classes[idx] || {};
        return {
            ...fallback,
            id: String(idx + 1),
            course_name: 'SOET Department',
            section: sectionName,
            faculty_name: coordinatorNames[idx] || fallback.faculty_name || 'Course Coordinator',
            room_no: fallback.room_no || 'TBA',
            schedule_time: fallback.schedule_time || 'TBA'
        };
    });
}

function getClassStudentsMap() {
    return JSON.parse(localStorage.getItem('classStudentsMap') || '{}');
}

function saveClassStudentsMap(map) {
    localStorage.setItem('classStudentsMap', JSON.stringify(map || {}));
}

function getStudentsForClass(classId) {
    const allStudentUsers = (mockData.users || []).filter(u => u.role === 'student');
    const map = getClassStudentsMap();
    if (!Array.isArray(map[classId])) {
        map[classId] = allStudentUsers.map(s => s.id);
        saveClassStudentsMap(map);
    }
    const allowed = new Set(map[classId] || []);
    return allStudentUsers.filter(s => allowed.has(s.id));
}

function addStudentToClass(classId, studentId) {
    const map = getClassStudentsMap();
    if (!Array.isArray(map[classId])) map[classId] = [];
    if (!map[classId].includes(studentId)) map[classId].push(studentId);
    saveClassStudentsMap(map);
}

function removeStudentFromClass(classId, studentId) {
    const map = getClassStudentsMap();
    map[classId] = (map[classId] || []).filter(id => id !== studentId);
    saveClassStudentsMap(map);
}

function getSystemNotificationsDB() {
    return JSON.parse(localStorage.getItem('systemNotificationsDB') || '[]');
}

function saveSystemNotificationsDB(rows) {
    localStorage.setItem('systemNotificationsDB', JSON.stringify(rows || []));
}

function pushSystemNotification(userId, title, message, type = 'info') {
    const db = getSystemNotificationsDB();
    db.unshift({
        id: 'sys_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
        user_id: userId,
        title,
        message,
        type,
        time: 'Now',
        unread: true,
        icon: type === 'warning' ? 'fa-triangle-exclamation' : type === 'success' ? 'fa-check-circle' : 'fa-bell'
    });
    saveSystemNotificationsDB(db.slice(0, 200));
}

function getCurrentUserNotifications() {
    if (!currentUser) return [];
    const seen = JSON.parse(localStorage.getItem('seenNotifs_' + currentUser.id) || '{}');
    const systemNotifs = getSystemNotificationsDB()
        .filter(n => n.user_id === currentUser.id)
        .map(n => ({ ...n, unread: seen[n.id] ? false : true }));
    if (currentUser.role === 'student') {
        return [...systemNotifs, ...getStudentNotifications()];
    }
    return systemNotifs;
}

function loadAdminClassesPage() {
    const classes = (currentUser && currentUser.role === 'admin') ? getAdminSOETClasses() : mockData.classes;
    pageContent.innerHTML = `
        <div class="card" style="margin-bottom:20px;">
            <div class="card-header">
                <h3 class="card-title"><i class="fas fa-building" style="color:var(--primary-color);margin-right:8px;"></i>SOET Department</h3>
            </div>
            <div style="padding:0 20px 20px; color:var(--gray-600); font-size:14px;">Showing 10 configured classes for SOET.</div>
        </div>
        <div style="margin-bottom:24px;">
            <p style="color:var(--gray-500); font-size:14px;">Select a course to manage its specific users, timetable, and attendance reports.</p>
        </div>
        <div class="class-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:20px;">
            ${classes.map(cls => `
                <div class="card class-manage-card" onclick="navigateToPage('class_users', '${cls.id}')" style="cursor:pointer; transition:all 0.2s ease;">
                    <div class="card-header" style="border:none; padding-bottom:10px;">
                        <div style="background:var(--primary-color); color:white; width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; margin-bottom:12px;">
                            <i class="fas fa-book"></i>
                        </div>
                        <h3 class="card-title" style="font-size:18px;">${cls.section}</h3>
                        <p style="color:var(--gray-500); font-size:13px; margin-top:4px;">${cls.course_name}</p>
                    </div>
                    <div style="padding:0 20px 20px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px; color:var(--gray-600);">
                            <span><i class="fas fa-user-tie" style="margin-right:6px; color:var(--primary-light);"></i>Course Coordinator: ${cls.faculty_name}</span>
                            <span style="background:var(--gray-100); padding:4px 10px; border-radius:20px; font-weight:600; color:var(--primary-dark);">${cls.room_no}</span>
                        </div>
                        <div style="margin-top:16px; padding-top:16px; border-top:1px solid var(--gray-100); display:flex; justify-content:space-between; align-items:center; gap:10px;">
                            <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); navigateToPage('class_timetable', '${cls.id}')">
                                <i class="fas fa-calendar-alt"></i> Update Timetable
                            </button>
                            <span style="color:var(--primary-color); font-weight:600; font-size:14px;">Manage <i class="fas fa-chevron-right" style="font-size:10px; margin-left:4px;"></i></span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>`;

    // Add some dynamic styles for the hover effect
    if (!document.getElementById('classCardStyles')) {
        const style = document.createElement('style');
        style.id = 'classCardStyles';
        style.textContent = `
            .class-manage-card:hover { 
                transform: translateY(-5px); 
                box-shadow: 0 12px 20px rgba(0,0,0,0.08) !important; 
                border-color: var(--primary-light) !important; 
            }
            .class-option-card:hover {
                background: var(--gray-50) !important;
                border-color: var(--primary-light) !important;
                transform: scale(1.02);
            }
        `;
        document.head.appendChild(style);
    }
}

function loadClassDashboard(classId) {
    if (!classId) return loadAdminClassesPage();
    const adminSOET = (currentUser && currentUser.role === 'admin') ? getAdminSOETClasses() : [];
    const cls = adminSOET.find(c => c.id === classId) || mockData.classes.find(c => c.id === classId);
    if (!cls) return loadAdminClassesPage();

    pageContent.innerHTML = `
        <div style="margin-bottom:24px; display:flex; align-items:center; gap:12px;">
            <button class="btn btn-icon" onclick="navigateToPage('classes')" style="background:white; color:var(--gray-700);"><i class="fas fa-arrow-left"></i></button>
            <div>
                <h2 style="font-size:20px; font-weight:700; color:var(--gray-900);">${cls.section}</h2>
                <p style="font-size:14px; color:var(--gray-500);">${cls.course_name} · Room ${cls.room_no} · ${cls.faculty_name}</p>
            </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:20px;">
            <div class="card class-option-card" onclick="navigateToPage('class_users', '${classId}')" style="cursor:pointer; transition:all 0.2s ease; padding:24px; text-align:center;">
                <div style="width:60px; height:60px; background:rgba(99, 102, 241, 0.1); color:var(--primary-color); border-radius:15px; display:flex; align-items:center; justify-content:center; margin:0 auto 16px; font-size:24px;">
                    <i class="fas fa-users-cog"></i>
                </div>
                <h3 style="font-size:17px; font-weight:700; margin-bottom:8px;">User Management</h3>
                <p style="font-size:13px; color:var(--gray-500);">Manage students and staff assigned to this class</p>
            </div>
            
            <div class="card class-option-card" onclick="navigateToPage('class_timetable', '${classId}')" style="cursor:pointer; transition:all 0.2s ease; padding:24px; text-align:center;">
                <div style="width:60px; height:60px; background:rgba(16, 185, 129, 0.1); color:var(--success-color); border-radius:15px; display:flex; align-items:center; justify-content:center; margin:0 auto 16px; font-size:24px;">
                    <i class="fas fa-calendar-alt"></i>
                </div>
                <h3 style="font-size:17px; font-weight:700; margin-bottom:8px;">Timetable Management</h3>
                <p style="font-size:13px; color:var(--gray-500);">Configure class slots, timings, and rooms</p>
            </div>

            <div class="card class-option-card" onclick="navigateToPage('class_analytics', '${classId}')" style="cursor:pointer; transition:all 0.2s ease; padding:24px; text-align:center;">
                <div style="width:60px; height:60px; background:rgba(245, 158, 11, 0.1); color:var(--warning-color); border-radius:15px; display:flex; align-items:center; justify-content:center; margin:0 auto 16px; font-size:24px;">
                    <i class="fas fa-chart-line"></i>
                </div>
                <h3 style="font-size:17px; font-weight:700; margin-bottom:8px;">Reports & Analytics</h3>
                <p style="font-size:13px; color:var(--gray-500);">Detailed attendance statistics and exportable reports</p>
            </div>

            <div class="card class-option-card" onclick="navigateToPage('class_overview', '${classId}')" style="cursor:pointer; transition:all 0.2s ease; padding:24px; text-align:center;">
                <div style="width:60px; height:60px; background:rgba(236, 72, 153, 0.1); color:#ec4899; border-radius:15px; display:flex; align-items:center; justify-content:center; margin:0 auto 16px; font-size:24px;">
                    <i class="fas fa-tachometer-alt"></i>
                </div>
                <h3 style="font-size:17px; font-weight:700; margin-bottom:8px;">Class Dashboard</h3>
                <p style="font-size:13px; color:var(--gray-500);">Quick overview of trends and risk assessments</p>
            </div>
        </div>`;
}

function loadUsersPage(classId = null) {
    const adminSOET = (currentUser && currentUser.role === 'admin') ? getAdminSOETClasses() : [];
    const cls = classId ? (adminSOET.find(c => c.id === classId) || mockData.classes.find(c => c.id === classId)) : null;
    if (classId && cls) {
        const classStudents = getStudentsForClass(classId);
        const allStudents = (mockData.users || []).filter(u => u.role === 'student');
        const existingIds = new Set(classStudents.map(s => s.id));
        const addableStudents = allStudents.filter(s => !existingIds.has(s.id));

        pageContent.innerHTML = `
            <div style="margin-bottom:20px; display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <div style="display:flex; align-items:center; gap:12px;">
                    <button class="btn btn-icon" onclick="navigateToPage('classes')" style="background:white; color:var(--gray-700);"><i class="fas fa-arrow-left"></i></button>
                    <div>
                        <h3 class="card-title" style="margin:0;">${cls.section}</h3>
                        <p style="font-size:13px;color:var(--gray-500);margin-top:2px;">${cls.course_name} · Students in this class</p>
                    </div>
                </div>
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                    <button class="btn btn-success" onclick="openAddStudentToClass('${classId}')"><i class="fas fa-user-plus"></i> Add Student</button>
                    <button class="btn btn-primary" onclick="navigateToPage('class_timetable', '${classId}')"><i class="fas fa-calendar-alt"></i> Update Timetable</button>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title"><i class="fas fa-user-graduate" style="color:var(--primary-color);margin-right:8px;"></i>Class Students</h3>
                    <span style="font-size:13px;color:var(--gray-500);">${classStudents.length} students assigned</span>
                </div>
                <div class="table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Email</th>
                                <th style="text-align:right;">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${classStudents.map(s => `
                                <tr>
                                    <td>
                                        <div class="user-info">
                                            <img src="${s.avatar}" alt="${s.name}" class="user-avatar" style="width:34px;height:34px;">
                                            <div style="display:flex; flex-direction:column;">
                                                <span style="font-weight:600;">${s.name}</span>
                                                <span style="font-size:11px;color:var(--gray-500);">ID: ${s.id}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>${s.email}</td>
                                    <td style="text-align:right;">
                                        <button class="btn btn-danger btn-sm" onclick="removeStudentFromClassAndRefresh('${classId}','${s.id}')"><i class="fas fa-user-minus"></i> Remove</button>
                                    </td>
                                </tr>
                            `).join('') || '<tr><td colspan="3" style="text-align:center;color:var(--gray-400);padding:26px;">No students assigned to this class.</td></tr>'}
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        renderAddStudentModal(classId, addableStudents);
        return;
    }

    const users = mockData.users;
    pageContent.innerHTML = `
        <div class="card">
            <div class="card-header" style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <h3 class="card-title"><i class="fas fa-users-cog" style="color:var(--primary-color);margin-right:8px;"></i>User Management</h3>
                    <p style="font-size:13px;color:var(--gray-500);margin-top:2px;">Currently managing ${users.length} registered users</p>
                </div>
                <button class="btn btn-primary" onclick="openUserModal()"><i class="fas fa-plus"></i> Add User</button>
            </div>
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>User Profile</th>
                            <th>Email Address</th>
                            <th>Current Role</th>
                            <th style="text-align:right;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${users.map(u => `
                            <tr>
                                <td>
                                    <div class="user-info">
                                        <img src="${u.avatar}" alt="${u.name}" class="user-avatar" style="width:36px; height:36px; border-radius:50%; margin-right:12px;">
                                        <div style="display:flex; flex-direction:column;">
                                            <span style="font-weight:600; font-size:14px;">${u.name}</span>
                                            <span style="font-size:11px; color:var(--gray-500);">ID: ${u.id}</span>
                                        </div>
                                    </div>
                                </td>
                                <td style="font-size:14px; color:var(--gray-600);">${u.email}</td>
                                <td>
                                    <span class="status-badge ${u.role}">${u.role.toUpperCase()}</span>
                                </td>
                                <td style="text-align:right;">
                                    <div style="display:flex; gap:8px; justify-content:flex-end;">
                                        <button class="btn btn-icon btn-sm" style="background:var(--gray-100); color:var(--primary-color);" onclick="openUserModal('${u.id}')" title="Edit Details">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="btn btn-icon btn-sm" style="background:rgba(239, 68, 68, 0.1); color:var(--danger-color);" onclick="deleteUser('${u.id}')" title="Delete User">
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>`).join('')}
                    </tbody>
                </table>
            </div>
        </div>`;
    renderUserModal();
}

function renderAddStudentModal(classId, addableStudents) {
    const existing = document.getElementById('addStudentToClassModal');
    if (existing) existing.remove();
    const modal = document.createElement('div');
    modal.id = 'addStudentToClassModal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeAddStudentToClassModal()"></div>
        <div class="modal-box" style="max-width:520px;">
            <div class="modal-header">
                <div style="flex:1;">
                    <h3 style="font-size:18px;font-weight:700;">Add Student To Class</h3>
                    <p style="font-size:13px;color:var(--gray-500);">Assign a student to this selected class.</p>
                </div>
                <button class="close-btn" onclick="closeAddStudentToClassModal()"><i class="fas fa-times"></i></button>
            </div>
            <div class="form-group">
                <label>Select Student</label>
                <select id="addStudentSelect" class="input">
                    <option value="">Select student</option>
                    ${addableStudents.map(s => `<option value="${s.id}">${s.name} (${s.email})</option>`).join('')}
                </select>
            </div>
            <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:18px;">
                <button class="btn btn-outline" onclick="closeAddStudentToClassModal()">Cancel</button>
                <button class="btn btn-primary" onclick="confirmAddStudentToClass('${classId}')"><i class="fas fa-plus"></i> Add</button>
            </div>
        </div>
    `;
    modal.style.display = 'none';
    document.body.appendChild(modal);
}

function openAddStudentToClass(classId) {
    const modal = document.getElementById('addStudentToClassModal');
    if (!modal) return;
    modal.style.display = 'block';
}

function closeAddStudentToClassModal() {
    const modal = document.getElementById('addStudentToClassModal');
    if (modal) modal.style.display = 'none';
}

function confirmAddStudentToClass(classId) {
    const sel = document.getElementById('addStudentSelect');
    if (!sel || !sel.value) {
        showToast('warning', 'Select Student', 'Please choose a student to add.');
        return;
    }
    addStudentToClass(classId, sel.value);
    showToast('success', 'Student Added', 'Student has been added to this class.');
    closeAddStudentToClassModal();
    loadUsersPage(classId);
}

function removeStudentFromClassAndRefresh(classId, studentId) {
    removeStudentFromClass(classId, studentId);
    showToast('info', 'Student Removed', 'Student has been removed from this class.');
    loadUsersPage(classId);
}
function loadClassesPage() {
    loadTimetableAdminPage();
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function markAttendance(classId) { _selectedClassId = classId; navigateToPage('attendance'); setTimeout(() => { loadAttendancePage(classId); }, 450); }
function markStudentStatus(studentId, status, event) {
    if (event && event.stopPropagation) event.stopPropagation();
    const row = document.getElementById('sai-' + studentId);
    if (row) {
        // Clear previous highlights
        document.querySelectorAll('.attendance-table-row').forEach(r => r.classList.remove('active-student-highlight'));
        // Highlight current row
        row.classList.add('active-student-highlight');
    }
}
function saveAttendance() {
    const absentStudents = [];
    document.querySelectorAll('.attendance-table-row').forEach(row => {
        const radioAbsent = row.querySelector('.att-radio-absent');
        if (radioAbsent && radioAbsent.checked) {
            const name = row.querySelector('div[style*="font-weight:600"]').textContent;
            const rollNo = row.querySelector('div[style*="font-family:monospace"]').textContent;
            absentStudents.push({ name, rollNo });
        }
    });

    if (document.getElementById('absentVerifyModal')) document.getElementById('absentVerifyModal').remove();

    const modal = document.createElement('div');
    modal.id = 'absentVerifyModal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeAbsentModal()" style="background:rgba(0,0,0,0.8); z-index:10000; position:fixed; top:0; left:0; width:100%; height:100%;"></div>
        <div class="modal-box" style="max-width:550px; width:90%; padding:32px; text-align:center; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); z-index:10001; background:white; border-radius:16px; box-shadow:0 20px 50px rgba(0,0,0,0.3);">
            <div style="font-size:48px; color:var(--danger-color); margin-bottom:16px;"><i class="fas fa-user-times"></i></div>
            <h2 style="font-size:24px; font-weight:800; color:var(--gray-800); margin-bottom:8px;">Verify Absent Students</h2>
            <p style="font-size:14px; color:var(--gray-500); margin-bottom:24px;">Please cross-verify the list of students marked as <strong>Absent</strong> before final submission.</p>
            
            <div style="max-height:300px; overflow-y:auto; background:var(--gray-50); border-radius:12px; padding:16px; margin-bottom:24px; border:1px solid var(--gray-200);">
                ${absentStudents.length > 0 ? `
                    <table style="width:100%; border-collapse:collapse;">
                        <thead>
                            <tr style="border-bottom:2px solid var(--gray-200);">
                                <th style="text-align:left; padding:8px; font-size:12px; color:var(--gray-400); text-transform:uppercase;">Student Name</th>
                                <th style="text-align:right; padding:8px; font-size:12px; color:var(--gray-400); text-transform:uppercase;">Roll No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${absentStudents.map(s => `
                                <tr style="border-bottom:1px solid var(--gray-100);">
                                    <td style="text-align:left; padding:12px 8px; font-weight:600; color:var(--gray-800); font-size:14px;">${s.name}</td>
                                    <td style="text-align:right; padding:12px 8px; font-family:monospace; color:var(--gray-600); font-size:13px;">${s.rollNo}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                ` : `
                    <div style="padding:20px; color:var(--success-color); font-weight:600;">
                        <i class="fas fa-check-circle"></i> No students marked absent!
                    </div>
                `}
            </div>

            <div style="display:flex; gap:12px;">
                <button class="btn btn-outline btn-full" onclick="closeAbsentModal()"><i class="fas fa-edit"></i> Edit List</button>
                <button class="btn btn-primary btn-full" onclick="finalizeAttendance()"><i class="fas fa-cloud-upload-alt"></i> Confirm & Submit</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeAbsentModal() {
    const modal = document.getElementById('absentVerifyModal');
    if (modal) modal.remove();
}

async function finalizeAttendance() {
    const records = [];
    document.querySelectorAll('.attendance-table-row').forEach(row => {
        const studentId = row.id.replace('sai-', '');
        const radioPresent = row.querySelector('.att-radio-present');
        const radioAbsent = row.querySelector('.att-radio-absent');
        
        if (radioPresent && radioPresent.checked) records.push({ studentId, status: 'present' });
        else if (radioAbsent && radioAbsent.checked) records.push({ studentId, status: 'absent' });
    });

    const cls = mockData.classes.find(c => c.id === _selectedClassId);
    if (!cls) return;

    showLoading();
    try {
        // Prepare the payload for the backend
        // Note: Backend expects studentId, subject, date, status.
        // We'll map our records to multiple calls or update backend to handle batch (standard is single for now based on previous schema)
        // Let's assume the backend has a batch endpoint or we loop for now (batch is better, but I'll stick to what I designed)
        const date = new Date().toISOString().split('T')[0];
        
        for (const rec of records) {
            await apiCall('/attendance/mark', 'POST', {
                studentId: rec.studentId,
                subject: cls.course_name,
                date: date,
                status: rec.status
            });
        }

        closeAbsentModal();
        showToast('success', 'Attendance Saved', 'Attendance has been successfully recorded in the system.');
        navigateToPage('dashboard');
    } catch (err) {
        // Error already handled by apiCall
    } finally {
        hideLoading();
    }
}

function copyAttendanceFromPrevious() {
    if (!_lastMarkedData) return;
    
    _lastMarkedData.records.forEach(rec => {
        const row = document.getElementById('sai-' + rec.studentId);
        if (row && !row.querySelector('.event-auto-badge')) {
            const radio = row.querySelector(rec.status === 'present' ? '.att-radio-present' : '.att-radio-absent');
            if (radio) {
                radio.checked = true;
                // Highlight if keyboard nav style is active
                markStudentStatus(rec.studentId, rec.status, { currentTarget: radio });
            }
        }
    });
    
    showToast('info', 'Attendance Copied', 'Attendance records have been synced from the previous session.');
}
function submitLeaveRequest(e) { e.preventDefault(); showToast('success', 'Leave Submitted', 'Your leave request has been submitted'); navigateToPage('dashboard'); }
function approveLeave(id) { showToast('success', 'Leave Approved', 'Leave request approved'); loadDashboard(); }
function rejectLeave(id) { showToast('warning', 'Leave Rejected', 'Leave request rejected'); loadDashboard(); }
function toggleSidebar() { document.getElementById('sidebar').classList.toggle('active'); }
// ─── Student Notifications (frontend-only) ────────────────────────────────────
// CHANGE: Student gets automatic notifications for:
// - Pre-class reminders (upcoming class within next 60 minutes)
// - Event cancelled (only if student registered)
// - Low attendance warning (below threshold)
function getStudentNotifications() {
    if (!currentUser || currentUser.role !== 'student') return [];
    const now = new Date();
    const sId = currentUser.id;

    // Attendance status
    const records = (mockData.attendanceRecords || []).filter(r => r.student_id === sId);
    const presentLike = ['present', 'late', 'event'];
    const total = records.length;
    const attended = records.filter(r => presentLike.includes(r.status)).length;
    const overallPct = total ? Math.round((attended / total) * 100) : 0;

    // Pre-class reminder (next class within 60 minutes)
    const todays = getTodayClassesFromTimetable();
    const upcoming = todays
        .map(cls => ({ cls, parsed: cls.parsedTime }))
        .filter(x => x.parsed && typeof x.parsed.startMinutes === 'number')
        .map(x => {
            const minsNow = now.getHours() * 60 + now.getMinutes();
            return { ...x, delta: x.parsed.startMinutes - minsNow };
        })
        .filter(x => x.delta > 0 && x.delta <= 60)
        .sort((a, b) => a.delta - b.delta)[0];

    const notifs = [];

    if (upcoming) {
        notifs.push({
            id: `preclass_${now.toISOString().split('T')[0]}_${upcoming.cls.course_name}`,
            type: 'info',
            title: 'Upcoming Class Reminder',
            message: `${upcoming.cls.course_name} starts in ${upcoming.delta} min • Room ${upcoming.cls.room_no || 'TBA'}`,
            time: 'Just now',
            unread: true,
            icon: 'fa-bell'
        });
    }

    // Event cancellation (demo): if registered, show cancellation for one event
    const regs = (mockData.eventParticipations || []).filter(p => p.student_id === sId && ['approved', 'pending'].includes(p.status));
    if (regs.length) {
        const ev = regs[0];
        notifs.push({
            id: `event_cancel_${ev.event_id}_${ev.student_id}`,
            type: 'warning',
            title: 'Event Cancelled',
            message: `${ev.event_name} has been cancelled. Registration is marked as cancelled.`,
            time: 'Today',
            unread: true,
            icon: 'fa-calendar-xmark'
        });
    }

    // Low attendance warning
    const threshold = 75;
    if (total >= 8 && overallPct < threshold) {
        notifs.push({
            id: `low_att_${sId}_${overallPct}`,
            type: 'danger',
            title: 'Low Attendance Alert',
            message: `Your attendance is ${overallPct}%. Attend upcoming classes to reach ${threshold}% target.`,
            time: 'This week',
            unread: true,
            icon: 'fa-triangle-exclamation'
        });
    }

    // Extra presentable demo notification if nothing exists
    if (!notifs.length) {
        notifs.push({
            id: `welcome_${sId}`,
            type: 'success',
            title: 'All Set!',
            message: 'You will receive reminders before classes and alerts for important updates.',
            time: 'Now',
            unread: false,
            icon: 'fa-check-circle'
        });
    }

    // Persist read/unread state
    const seen = JSON.parse(localStorage.getItem('seenNotifs_' + sId) || '{}');
    return notifs.map(n => ({ ...n, unread: seen[n.id] ? false : n.unread }));
}

function markAllNotificationsRead() {
    if (!currentUser) return;
    const sId = currentUser.id;
    const seen = JSON.parse(localStorage.getItem('seenNotifs_' + sId) || '{}');
    getCurrentUserNotifications().forEach(n => { seen[n.id] = true; });
    localStorage.setItem('seenNotifs_' + sId, JSON.stringify(seen));
    renderNotificationsPanel();
}

function renderNotificationsPanel() {
    if (!notificationsListEl) return;
    const notifs = getCurrentUserNotifications();

    // Badge count
    const unreadCount = notifs.filter(n => n.unread).length;
    if (notificationBadgeEl) {
        notificationBadgeEl.textContent = String(unreadCount);
        notificationBadgeEl.style.display = unreadCount > 0 ? 'inline-flex' : 'none';
    }

    notificationsListEl.innerHTML = `
        ${currentUser ? `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid var(--gray-100);">
                <div style="font-size:12px;color:var(--gray-500);font-weight:700;text-transform:uppercase;letter-spacing:.4px;">Notifications</div>
                <button class="btn btn-outline btn-sm" onclick="markAllNotificationsRead()"><i class="fas fa-check-double"></i> Mark all read</button>
            </div>
        ` : ''}
        ${notifs.map(n => {
            const cls = n.unread ? 'notification-item unread' : 'notification-item';
            const iconColor = n.type === 'danger' ? 'text-danger' : n.type === 'warning' ? 'text-warning' : n.type === 'success' ? 'text-success' : 'text-info';
            return `
                <div class="${cls}">
                    <div class="notification-icon">
                        <i class="fas ${n.icon} ${iconColor}"></i>
                    </div>
                    <div class="notification-content">
                        <div class="notification-title">${n.title}</div>
                        <div class="notification-message">${n.message}</div>
                        <div class="notification-time">${n.time}</div>
                    </div>
                </div>
            `;
        }).join('')}
    `;
}

function toggleNotifications() {
    renderNotificationsPanel();
    notificationsPanel.classList.toggle('active');
}
function toggleTheme() { document.body.classList.toggle('dark-theme'); showToast('info', 'Theme Changed', 'Theme updated'); }
function showLoading() { loadingOverlay.classList.remove('hidden'); }
function hideLoading() { loadingOverlay.classList.add('hidden'); }
function showToast(type, title, message) {
    const c = document.getElementById('toastContainer');
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    const icons = { success: 'fa-check-circle', error: 'fa-times-circle', warning: 'fa-exclamation-triangle', info: 'fa-info-circle' };
    t.innerHTML = `<div class="toast-icon"><i class="fas ${icons[type]}"></i></div><div class="toast-content"><div class="toast-title">${title}</div><div class="toast-message">${message}</div></div><button class="toast-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>`;
    c.appendChild(t);
    setTimeout(() => t.remove(), 5000);
}

// ─── Injected CSS ─────────────────────────────────────────────────────────────
const additionalStyles = `
    .student-attendance-item { display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border:1px solid var(--gray-200);border-radius:var(--border-radius);margin-bottom:10px;background:var(--gray-50);transition:var(--transition); }
    .student-attendance-item:hover { background:white;box-shadow:0 2px 8px rgba(0,0,0,0.07); }
    .student-info { display:flex;align-items:center;gap:12px; }
    .student-avatar { width:40px;height:40px;border-radius:50%;object-fit:cover; }
    .attendance-buttons { display:flex;gap:6px;flex-wrap:wrap; }
    .btn-sm { padding:6px 12px;font-size:12px; }
    .user-info { display:flex;align-items:center;gap:8px; }
    .user-avatar { width:32px;height:32px;border-radius:50%;object-fit:cover; }
    .active-att { outline:3px solid rgba(0,0,0,0.2);opacity:.75; }
    .btn-success { background:linear-gradient(135deg,var(--success-color),#16a34a);color:white;box-shadow:0 4px 6px -1px rgba(34,197,94,0.3); }
    .btn-success:hover { transform:translateY(-2px); }
    .btn-danger { background:linear-gradient(135deg,var(--danger-color),#dc2626);color:white; }
    .event-auto-badge { display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:20px;background:rgba(99,102,241,0.12);color:#6366f1;font-size:13px;font-weight:600;border:1.5px solid rgba(99,102,241,0.3); }
    .cal-event-banner { background:rgba(99,102,241,0.06);border-radius:5px;padding:3px 5px;cursor:pointer;transition:var(--transition); }
    .cal-event-banner:hover { background:rgba(99,102,241,0.16); }
    #eventModal, #userModal { display:none;position:fixed;inset:0;z-index:5000;align-items:center;justify-content:center; }
    #eventModal.active, #userModal.active { display:flex; }
    .modal-backdrop { position:absolute;inset:0;background:rgba(0,0,0,0.45);backdrop-filter:blur(3px); }
    .modal-box { position:relative;background:white;border-radius:20px;padding:28px;width:92%;max-width:480px;max-height:90vh;overflow-y:auto;box-shadow:0 20px 40px rgba(0,0,0,0.2);animation:modalIn .25s ease; }
    @keyframes modalIn { from{transform:scale(0.92);opacity:0} to{transform:scale(1);opacity:1} }
    .status-badge.staff { background:rgba(6, 182, 212, 0.1); color:var(--info-color); }
    .modal-header { display:flex;align-items:flex-start;gap:12px;margin-bottom:14px; }
    .event-alert-banner { display:flex;align-items:center;justify-content:space-between;background:linear-gradient(135deg,#6366f1,#4f46e5);color:white;border-radius:var(--border-radius);padding:18px 24px;margin-bottom:24px;cursor:pointer;box-shadow:0 4px 14px rgba(99,102,241,0.35);transition:var(--transition); }
    .event-alert-banner:hover { transform:translateY(-2px);box-shadow:0 8px 20px rgba(99,102,241,0.45); }
    .future-teaser-card { display:flex;align-items:center;justify-content:space-between;background:linear-gradient(135deg,var(--primary-color),var(--primary-dark));border-radius:var(--border-radius);padding:20px 24px;margin-bottom:24px;cursor:pointer;color:white;box-shadow:0 4px 12px rgba(59,130,246,0.35);transition:var(--transition); }
    .future-teaser-card:hover { transform:translateY(-3px);box-shadow:0 10px 24px rgba(59,130,246,0.45); }
    .future-teaser-left { display:flex;align-items:center;gap:16px; }
    .future-teaser-icon { width:48px;height:48px;border-radius:12px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:22px; }
    .future-teaser-title { font-size:17px;font-weight:700; }
    .future-teaser-sub { font-size:13px;opacity:.85;margin-top:2px; }
    .future-teaser-arrow { font-size:18px;opacity:.8; }
    .future-banner { background:linear-gradient(135deg,#1e3a5f,#2563eb);border-radius:var(--border-radius);padding:28px 32px;margin-bottom:24px;display:flex;align-items:center;justify-content:space-between;color:white;flex-wrap:wrap;gap:16px;box-shadow:0 6px 20px rgba(37,99,235,0.35); }
    .future-banner-inner { display:flex;align-items:center;gap:16px; }
    .future-banner-title { font-size:20px;font-weight:700; }
    .future-banner-sub { font-size:13px;opacity:.75;margin-top:4px; }
    .future-banner-pct { text-align:right; }
    .future-banner-big { font-size:44px;font-weight:800;line-height:1; }
    .future-banner-status { font-size:14px;margin-top:6px;font-weight:600;display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:20px; }
    .future-banner-status.safe { background:rgba(34,197,94,0.25);color:#86efac; }
    .future-banner-status.risk { background:rgba(239,68,68,0.25);color:#fca5a5; }
    .goal-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px; }
    .goal-item { border:1px solid var(--gray-200);border-radius:var(--border-radius);padding:20px;transition:var(--transition); }
    .goal-item.achieved { border-color:rgba(34,197,94,0.4);background:rgba(34,197,94,0.04); }
    .goal-item.pending  { border-color:rgba(59,130,246,0.3);background:rgba(59,130,246,0.03); }
    .goal-header { display:flex;justify-content:space-between;align-items:center;margin-bottom:14px; }
    .goal-label { font-weight:700;font-size:15px;color:var(--gray-800); }
    .goal-badge { font-size:12px;font-weight:600;padding:4px 10px;border-radius:20px; }
    .goal-badge.achieved { background:rgba(34,197,94,0.15);color:var(--success-color); }
    .goal-badge.pending  { background:rgba(59,130,246,0.12);color:var(--primary-color); }
    .goal-bar-wrap { margin-bottom:10px; }
    .goal-bar-track { position:relative;height:12px;background:var(--gray-100);border-radius:6px;overflow:visible; }
    .goal-bar-fill  { height:100%;border-radius:6px;transition:width .6s; }
    .goal-bar-target { position:absolute;top:-3px;height:18px;width:2px;background:var(--gray-400);border-radius:2px; }
    .goal-bar-labels { position:relative;display:flex;justify-content:space-between;font-size:11px;color:var(--gray-400);margin-top:5px; }
    .goal-desc { font-size:13px;color:var(--gray-600);line-height:1.5; }
    .scenario-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:16px;padding:0 24px 24px; }
    .outcome-scenario-card { display:flex;gap:14px;border:1px solid var(--gray-200);border-radius:var(--border-radius);padding:16px;background:var(--gray-50);transition:var(--transition); }
    .outcome-scenario-card:hover { transform:translateY(-2px);box-shadow:0 6px 16px rgba(0,0,0,0.08); }
    .osc-icon { width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0; }
    .osc-body { flex:1; }
    .osc-label { font-size:13px;color:var(--gray-500);font-weight:500; }
    .osc-pct   { font-size:26px;font-weight:800;color:var(--gray-900);line-height:1.1; }
    .osc-delta { font-size:12px;font-weight:600;margin-top:2px;display:flex;align-items:center;gap:4px; }
    .osc-note  { font-size:12px;color:var(--gray-500);margin-top:8px;line-height:1.4; }
    .safe-budget-block { display:flex;align-items:center;gap:20px;padding:20px;background:var(--gray-50);border-radius:var(--border-radius);margin-bottom:12px; }
    .safe-budget-number { font-size:56px;font-weight:900;line-height:1; }
    .safe-budget-number.safe   { color:var(--success-color); }
    .safe-budget-number.danger { color:var(--danger-color); }
    .safe-budget-label { font-size:15px;color:var(--gray-700);font-weight:500;max-width:320px; }
    .safe-budget-note { font-size:13px;color:var(--gray-500);display:flex;align-items:flex-start;gap:8px;line-height:1.5; }
    .future-actions-row { display:flex;gap:12px;flex-wrap:wrap;margin-bottom:24px; }
    .future-actions-row .btn { flex:1;min-width:140px; }
    .card-subtitle { font-size:13px;color:var(--gray-500); }
    /* ── Streak boxes ─────────────────────────────────────── */
    .streak-box { flex:1;min-width:140px;border:2px solid;border-radius:12px;padding:16px;text-align:center; }
    .streak-num  { font-size:44px;font-weight:900;line-height:1; }
    .streak-label{ font-size:13px;font-weight:700;color:var(--gray-700);margin-top:4px; }
    .streak-sub  { font-size:11px;color:var(--gray-400);margin-top:2px; }
    .cl-list { padding:4px 0 8px; }
    .cl-row  { display:flex;align-items:center;justify-content:space-between;padding:12px 4px;border-bottom:1px solid var(--gray-100);transition:var(--transition); }
    .cl-row:last-child { border-bottom:none; }
    .cl-row-selected { background:rgba(59,130,246,0.04);border-radius:8px;padding-left:8px;padding-right:8px; }
    .cl-info { flex:1;min-width:0; }
    .cl-name { font-size:14px;font-weight:600;color:var(--gray-800);margin-bottom:4px; }
    .cl-meta { display:flex;flex-wrap:wrap;gap:10px;font-size:12px;color:var(--gray-500); }
    .cl-meta span { display:flex;align-items:center;gap:4px; }
    /* timetable room row */
    .tt-room-row { display:flex;align-items:center;gap:4px;font-size:11px;color:var(--gray-500);margin-bottom:2px; }
    /* today class card room line */
    .tc-room { font-size:11px;color:var(--gray-500);display:flex;align-items:center;gap:4px;margin-bottom:6px; }
    /* CHANGE: Removed injected today-classes-grid / today-class-card rules.
       They were globally overriding the Student Dashboard "Today's Classes" vCard
       layout and causing it to look good sometimes and bad after other pages load. */
    /* warning save btn */
    .btn-warning { background:linear-gradient(135deg,var(--warning-color),#d97706);color:white;box-shadow:0 4px 6px -1px rgba(245,158,11,0.3); }
    .btn-warning:hover { transform:translateY(-2px);box-shadow:0 8px 12px -2px rgba(245,158,11,0.4); }
    .tt-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(130px,1fr)); gap:10px; }
    .tt-day-col { border:1px solid var(--gray-200); border-radius:10px; overflow:hidden; }
    .tt-day-header { text-align:center; font-weight:700; font-size:13px; padding:8px 4px; letter-spacing:0.04em; }
    .tt-day-body { padding:8px; display:flex; flex-direction:column; gap:8px; }
    .tt-class-card { background:white; border:1px solid var(--gray-100); border-radius:8px; padding:9px 10px; display:flex; flex-direction:column; gap:4px; transition:box-shadow 0.2s; }
    .tt-class-card:hover { box-shadow:0 2px 8px rgba(0,0,0,0.08); }
    .tt-class-time { font-size:11px; color:var(--gray-500); display:flex; align-items:center; gap:4px; }
    .tt-class-name { font-size:13px; font-weight:700; color:var(--gray-800); line-height:1.3; }
    .tt-class-course{ font-size:11px; color:var(--gray-500); margin-bottom:3px; line-height:1.3; }
    .tt-class-sem  { font-size:11px; color:var(--gray-400); }
    .tt-mark-btn   { margin-top:4px; background:transparent; border:1.5px solid; border-radius:6px; font-size:11px; font-weight:600; padding:4px 8px; cursor:pointer; transition:var(--transition); }
    .tt-mark-btn:hover { opacity:0.75; }
    /* ── Student Timetable Page ───────────────────────────── */
    .tt2-wrapper { min-width:560px; }
    .tt2-header-row { display:grid; grid-template-columns:repeat(5,1fr); gap:6px; margin-bottom:6px; }
    .tt2-day-header { border-radius:10px; padding:10px 8px 8px; text-align:center; display:flex; flex-direction:column; align-items:center; gap:3px; }
    .tt2-today-header { box-shadow:0 2px 10px rgba(99,102,241,0.2); }
    .tt2-day-name { font-size:15px; font-weight:800; letter-spacing:0.04em; }
    .tt2-today-pill { font-size:10px; font-weight:700; background:rgba(99,102,241,0.85); color:white; padding:2px 8px; border-radius:10px; }
    .tt2-day-count { font-size:11px; font-weight:500; opacity:0.7; }
    .tt2-body { display:flex; flex-direction:column; gap:6px; }
    .tt2-row { display:grid; grid-template-columns:repeat(5,1fr); gap:6px; }
    .tt2-cell { background:white; border:1px solid var(--gray-100); border-radius:10px; padding:10px 12px; display:flex; flex-direction:column; gap:3px; transition:box-shadow 0.2s; min-height:100px; }
    .tt2-cell:hover { box-shadow:0 3px 12px rgba(0,0,0,0.09); }
    .tt2-today-col { background:rgba(99,102,241,0.03); }
    .tt2-empty { justify-content:center; align-items:center; background:var(--gray-50); border:1px dashed var(--gray-200); }
    .tt2-free { font-size:18px; color:var(--gray-300); }
    .tt2-time { font-size:11px; color:var(--gray-400); display:flex; align-items:center; gap:4px; margin-bottom:2px; }
    .tt2-course { font-size:13px; font-weight:700; color:var(--gray-800); line-height:1.3; }
    .tt2-section { font-size:11px; color:var(--gray-500); margin-bottom:2px; }
    .tt2-room { font-size:11px; color:var(--gray-500); display:flex; align-items:center; gap:4px; }
    .tt2-faculty { font-size:11px; color:var(--gray-400); display:flex; align-items:center; gap:4px; margin-top:2px; }
    /* ── Subject cards ────────────────────────────────────── */
    .subjects-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:16px; padding-top:4px; }
    .subject-card { border:1px solid var(--gray-200); border-radius:var(--border-radius); padding:16px; background:var(--gray-50); transition:var(--transition); }
    .subject-card:hover { transform:translateY(-2px); box-shadow:0 6px 16px rgba(0,0,0,0.08); background:white; }
    .subject-card-top { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:4px; gap:8px; }
    .subject-card-name { font-size:14px; font-weight:700; color:var(--gray-800); line-height:1.3; }
    .subject-card-pct { font-size:18px; font-weight:800; flex-shrink:0; }
    .subject-card-section { font-size:12px; color:var(--gray-500); margin-bottom:8px; }
    .subject-card-meta { display:flex; flex-wrap:wrap; gap:8px; font-size:12px; color:var(--gray-500); margin-bottom:8px; }
    .subject-card-meta span { display:flex; align-items:center; gap:4px; }
    .subject-card-days { display:flex; flex-wrap:wrap; gap:4px; margin-bottom:10px; }
    .subject-card-bar { height:6px; background:var(--gray-100); border-radius:4px; overflow:hidden; }
    /* ── Row-based Student Timetable ─────────────────────── */
    .ttr-wrapper { padding:0 20px 20px; }
    .ttr-day-row { display:flex; gap:0; margin-bottom:12px; border-radius:12px; overflow:hidden; border:1px solid var(--gray-200); background:white; transition:box-shadow 0.2s; }
    .ttr-day-row:hover { box-shadow:0 4px 16px rgba(0,0,0,0.07); }
    .ttr-today-row { box-shadow:0 2px 12px rgba(99,102,241,0.15); border-color:rgba(99,102,241,0.3); }
    .ttr-day-label { min-width:140px; max-width:140px; padding:16px 14px; display:flex; flex-direction:column; justify-content:center; gap:4px; flex-shrink:0; border-right:1px solid var(--gray-100); }
    .ttr-day-name { font-size:16px; font-weight:800; letter-spacing:0.03em; }
    .ttr-today-badge { font-size:9px; font-weight:700; background:rgba(99,102,241,0.85); color:white; padding:2px 8px; border-radius:10px; display:inline-block; width:fit-content; text-transform:uppercase; letter-spacing:0.06em; }
    .ttr-day-count { font-size:11px; font-weight:500; opacity:0.65; margin-top:2px; }
    .ttr-classes-row { display:flex; flex-wrap:wrap; gap:10px; padding:12px 14px; flex:1; align-items:stretch; }
    .ttr-class-card { background:var(--gray-50); border:1px solid var(--gray-100); border-radius:10px; padding:12px 14px; min-width:170px; max-width:240px; display:flex; flex-direction:column; gap:4px; transition:transform 0.15s, box-shadow 0.2s; flex:1; }
    .ttr-class-card:hover { transform:translateY(-2px); box-shadow:0 4px 12px rgba(0,0,0,0.08); background:white; }
    .ttr-time { font-size:11px; color:var(--gray-400); display:flex; align-items:center; gap:4px; margin-bottom:2px; }
    .ttr-course { font-size:13px; font-weight:700; color:var(--gray-800); line-height:1.3; }
    .ttr-section { font-size:11px; color:var(--gray-500); margin-bottom:2px; }
    .ttr-room { font-size:11px; color:var(--gray-500); display:flex; align-items:center; gap:4px; }
    .ttr-faculty { font-size:11px; color:var(--gray-400); display:flex; align-items:center; gap:4px; margin-top:2px; }
    .ttr-no-class { display:flex; align-items:center; gap:8px; padding:8px 12px; color:var(--gray-400); font-size:13px; font-style:italic; }
    @media (max-width:700px) {
        .ttr-day-row { flex-direction:column; }
        .ttr-day-label { min-width:unset; max-width:unset; border-right:none; border-bottom:1px solid var(--gray-100); padding:10px 14px; flex-direction:row; align-items:center; gap:10px; }
        .ttr-classes-row { flex-direction:column; }
        .ttr-class-card { min-width:unset; max-width:unset; }
    }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// ─── Theme Toggle ─────────────────────────────────────────────────────────────
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    const btnIcon = document.querySelector('#themeToggleBtn i');
    if (btnIcon) {
        btnIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ─── Admin Newly Added Pages ──────────────────────────────────────────────────
function loadAttendanceMonitorPage(classId = null) {
    let headerExtra = '';
    const cls = classId ? mockData.classes.find(c => c.id === classId) : null;
    
    if (classId) {
        headerExtra = `
            <div style="margin-bottom:16px; display:flex; align-items:center; gap:12px;">
                <button class="btn btn-icon btn-sm" onclick="navigateToPage('class_dashboard', '${classId}')" style="background:var(--gray-100); color:var(--gray-700);"><i class="fas fa-arrow-left"></i></button>
                <span style="font-size:14px; color:var(--gray-500); font-weight:500;">Back to Class Dashboard</span>
            </div>`;
    }

    // Filter data for this class if classId is provided
    const att = classId ? mockData.attendanceRecords.filter(r => r.class_id === classId) : mockData.attendanceRecords;
    const pCnt = att.filter(r => r.status === 'present').length;
    const tCnt = att.length;
    const pct = tCnt > 0 ? Math.round((pCnt / tCnt) * 100) : 0;
    
    const risks = classId ? mockData.riskAssessments.filter(r => r.class_id === classId) : mockData.riskAssessments;

    pageContent.innerHTML = `
        ${headerExtra}
        <div class="stats-grid">
            <div class="stat-card primary"><div class="stat-header"><div class="stat-icon primary"><i class="fas fa-users"></i></div></div><div class="stat-value">${classId ? 'Class Avg' : 'Global Avg'}</div><div class="stat-label">${pct}% Attendance</div></div>
            <div class="stat-card warning"><div class="stat-header"><div class="stat-icon warning"><i class="fas fa-exclamation-triangle"></i></div></div><div class="stat-value">${risks.filter(r => r.risk_level === 'High').length}</div><div class="stat-label">High Risk Students</div></div>
        </div>
        <div class="card">
            <div class="card-header"><h3 class="card-title">Class Risk Assessments</h3></div>
            <div class="table-container">
                <table class="table">
                    <thead><tr><th>Student</th><th>Attendance %</th><th>Risk Level</th><th>Action</th></tr></thead>
                    <tbody>
                        ${risks.map(r => `
                            <tr>
                                <td>${r.student_name}</td>
                                <td>${r.attendance_percentage}%</td>
                                <td><span class="status-badge ${r.risk_level.toLowerCase()}">${r.risk_level}</span></td>
                                <td><button class="btn btn-outline btn-sm">Notify</button></td>
                            </tr>`).join('')}
                        ${risks.length === 0 ? '<tr><td colspan="4" style="text-align:center;color:var(--gray-400);">No risk assessments for this class</td></tr>' : ''}
                    </tbody>
                </table>
            </div>
        </div>`;
}
function loadTimetableAdminPage(classId = null) {
    let classes = mockData.classes;
    let headerExtra = '';
    
    if (classId) {
        classes = classes.filter(c => c.id === classId);
        headerExtra = `
            <div style="margin-bottom:16px; display:flex; align-items:center; gap:12px;">
                <button class="btn btn-icon btn-sm" onclick="navigateToPage('class_dashboard', '${classId}')" style="background:var(--gray-100); color:var(--gray-700);"><i class="fas fa-arrow-left"></i></button>
                <span style="font-size:14px; color:var(--gray-500); font-weight:500;">Back to Class Dashboard</span>
            </div>`;
    }

    pageContent.innerHTML = `
        ${headerExtra}
        <div class="card">
            <div class="card-header" style="display:flex; justify-content:space-between; align-items:center;">
                <h3 class="card-title">Timetable Management ${classId ? '(Class Schedule)' : ''}</h3>
                <button class="btn btn-primary" onclick="openClassModal(null, '${classId || ''}')">
                    <i class="fas fa-plus"></i> Add New Class Slot
                </button>
            </div>
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Course / Subject</th>
                            <th>Faculty / Teacher</th>
                            <th>Section / Batch</th>
                            <th>Schedule Slot</th>
                            <th style="text-align:right;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${classes.map(cls => `
                            <tr>
                                <td>
                                    <div style="font-weight:600; color:var(--gray-900);">${cls.course_name}</div>
                                    <div style="font-size:12px; color:var(--gray-500);">Room: ${cls.room_no}</div>
                                </td>
                                <td>${cls.faculty_name}</td>
                                <td>${cls.section}</td>
                                <td>
                                    <span style="font-size:13px; color:var(--primary-color); font-weight:500;">
                                        <i class="far fa-clock"></i> ${cls.schedule_time}
                                    </span>
                                </td>
                                <td style="text-align:right;">
                                    <div style="display:flex; gap:8px; justify-content:flex-end;">
                                        <button class="btn btn-icon btn-sm" style="background:var(--gray-100); color:var(--primary-color);" onclick="openClassModal('${cls.id}', '${classId || ''}')" title="Edit Schedule">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="btn btn-icon btn-sm" style="background:rgba(239, 68, 68, 0.1); color:var(--danger-color);" onclick="deleteClass('${cls.id}')" title="Delete Slot">
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>`).join('')}
                    </tbody>
                </table>
            </div>
        </div>`;
    renderClassModal();
}
function loadReportsAnalyticsPage() {
    pageContent.innerHTML = `<div class="card"><div class="card-header"><h3 class="card-title">Reports and Analytics</h3></div><div style="padding:80px 20px;text-align:center;color:var(--gray-500);"><i class="fas fa-chart-line" style="font-size:48px;color:var(--gray-300);margin-bottom:16px;"></i><br>Advanced reports and analytics dashboard coming soon...</div></div>`;
}
function loadEventActivityPage() {
    pageContent.innerHTML = `<div class="card"><div class="card-header"><h3 class="card-title">Event and Activity Management</h3></div><div style="padding:80px 20px;text-align:center;color:var(--gray-500);"><i class="fas fa-calendar-star" style="font-size:48px;color:var(--gray-300);margin-bottom:16px;"></i><br>Event and activity management coming soon...</div></div>`;
}
function loadProfileControlPage() {
    pageContent.innerHTML = `<div class="card"><div class="card-header"><h3 class="card-title">Profile System Control</h3></div><div style="padding:80px 20px;text-align:center;color:var(--gray-500);"><i class="fas fa-user-cog" style="font-size:48px;color:var(--gray-300);margin-bottom:16px;"></i><br>System-wide profile controls coming soon...</div></div>`;
}

// ─── User Management CRUD Helpers ─────────────────────────────────────────────
let _editingUserId = null;

function renderUserModal() {
    if (document.getElementById('userModal')) return;
    const modal = document.createElement('div');
    modal.id = 'userModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeUserModal()"></div>
        <div class="modal-box">
            <div class="modal-header">
                <div style="flex:1;"><h3 id="userModalTitle" style="font-size:18px;font-weight:700;">Add New User</h3><p style="font-size:13px;color:var(--gray-500);">Register a student, faculty, or staff member</p></div>
                <button class="close-btn" onclick="closeUserModal()"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body" style="padding-top:10px;">
                <div class="form-group"><label>Full Name</label><input type="text" id="userModName" class="input" placeholder="Enter full name"></div>
                <div class="form-group"><label>Email Address</label><input type="email" id="userModEmail" class="input" placeholder="user@college.edu"></div>
                <div id="userModPasswordGroup" class="form-group"><label>Password</label><input type="password" id="userModPassword" class="input" placeholder="Min. 6 characters"></div>
                <div class="form-group">
                    <label>Assign Role</label>
                    <select id="userModRole" class="input">
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                        <option value="staff">Staff</option>
                        <option value="admin">Administrator</option>
                    </select>
                </div>
                <div id="userModExtraGroup" class="form-group">
                    <label id="userModExtraLabel">Department / Section</label>
                    <input type="text" id="userModExtra" class="input" placeholder="e.g. Computer Science - B.Tech">
                </div>
            </div>
            <div class="modal-footer" style="display:flex; justify-content:flex-end; gap:12px; margin-top:10px;">
                <button class="btn btn-outline" onclick="closeUserModal()">Cancel</button>
                <button class="btn btn-primary" onclick="saveUser()"><i class="fas fa-save"></i> Save User</button>
            </div>
        </div>`;
    document.body.appendChild(modal);
}

function openUserModal(userId = null) {
    renderUserModal();
    _editingUserId = userId;
    const modal = document.getElementById('userModal');
    const title = document.getElementById('userModalTitle');
    const nameInp = document.getElementById('userModName');
    const emailInp = document.getElementById('userModEmail');
    const passInp = document.getElementById('userModPassword');
    const roleInp = document.getElementById('userModRole');
    const extraInp = document.getElementById('userModExtra');
    const passGroup = document.getElementById('userModPasswordGroup');

    if (userId) {
        const user = mockData.users.find(u => u.id === userId);
        title.textContent = 'Edit User Details';
        nameInp.value = user.name;
        emailInp.value = user.email;
        roleInp.value = user.role;
        passGroup.style.display = 'none'; // Don't allow password change in simple edit for now
        // Find existing profile/extra data if any
        extraInp.value = ''; // Reset
    } else {
        title.textContent = 'Add New User';
        nameInp.value = '';
        emailInp.value = '';
        passInp.value = '';
        roleInp.value = 'student';
        passGroup.style.display = 'block';
        extraInp.value = '';
    }
    
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeUserModal() {
    const modal = document.getElementById('userModal');
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 250);
}

function saveUser() {
    const name = document.getElementById('userModName').value.trim();
    const email = document.getElementById('userModEmail').value.trim().toLowerCase();
    const role = document.getElementById('userModRole').value;
    const extra = document.getElementById('userModExtra').value.trim();
    
    if (!name || !email) { showToast('warning', 'Missing Details', 'Name and Email are required.'); return; }
    
    const db = getAccountsDB();

    if (_editingUserId) {
        // Update existing
        const userIndex = mockData.users.findIndex(u => u.id === _editingUserId);
        if (userIndex !== -1) {
            mockData.users[userIndex].name = name;
            mockData.users[userIndex].email = email;
            mockData.users[userIndex].role = role;
            
            // Sync with localStorage DB
            const dbMatch = db.find(u => u.id === _editingUserId);
            if (dbMatch) {
                dbMatch.name = name;
                dbMatch.email = email;
                dbMatch.role = role;
                saveAccountsDB(db);
            }
            showToast('success', 'User Updated', `${name}'s profile has been updated.`);
        }
    } else {
        // Add new
        const password = document.getElementById('userModPassword').value;
        if (password.length < 6) { showToast('warning', 'Weak Password', 'Password must be at least 6 characters.'); return; }
        
        if (db.some(u => u.email === email)) {
            showToast('error', 'Duplicate Email', 'This email is already registered.');
            return;
        }

        const newUser = {
            id: 'u_' + Date.now(),
            name, email, password, role,
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff&size=32`
        };

        mockData.users.push(newUser);
        db.push(newUser);
        saveAccountsDB(db);
        showToast('success', 'User Registered', `Account created for ${name} as ${role}.`);
    }

    closeUserModal();
    loadUsersPage();
}

function deleteUser(userId) {
    const user = mockData.users.find(u => u.id === userId);
    if (!user) return;
    
    if (confirm(`Are you sure you want to delete ${user.name}? This action cannot be undone.`)) {
        mockData.users = mockData.users.filter(u => u.id !== userId);
        const db = getAccountsDB().filter(u => u.id !== userId);
        saveAccountsDB(db);
        
        showToast('info', 'User Deleted', 'The user account has been removed.');
        loadUsersPage();
    }
}

// ─── Timetable Management CRUD Helpers ──────────────────────────────────────────
let _editingClassId = null;
let _activeTimetableClassId = null;

function renderClassModal() {
    if (document.getElementById('classModal')) return;
    const modal = document.createElement('div');
    modal.id = 'classModal';
    modal.className = 'modal-overlay';
    
    // Get list of Faculty for the dropdown
    const facultyList = getAccountsDB().filter(u => u.role === 'faculty');
    // Add default mock faculty if not in accountsDB
    const mockFaculty = mockData.users.filter(u => u.role === 'faculty');
    const combinedFaculty = [...new Map([...mockFaculty, ...facultyList].map(item => [item.id, item])).values()];

    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeClassModal()"></div>
        <div class="modal-box" style="max-width:550px;">
            <div class="modal-header">
                <div style="flex:1;"><h3 id="classModalTitle" style="font-size:18px;font-weight:700;">Add Class Schedule</h3><p style="font-size:13px;color:var(--gray-500);">Schedule a subject with a teacher and room</p></div>
                <button class="close-btn" onclick="closeClassModal()"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body" style="padding-top:10px;">
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                    <div class="form-group"><label>Course / Subject Name</label><input type="text" id="clsModName" class="input" placeholder="e.g. Data Structures"></div>
                    <div class="form-group">
                        <label>Assigned Faculty / Teacher</label>
                        <select id="clsModFaculty" class="input">
                            ${combinedFaculty.map(f => `<option value="${f.id}" data-name="${f.name}">${f.name}</option>`).join('')}
                        </select>
                    </div>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                    <div class="form-group"><label>Section / Batch</label><input type="text" id="clsModSection" class="input" placeholder="e.g. B.Tech CSE - A"></div>
                    <div class="form-group"><label>Room No.</label><input type="text" id="clsModRoom" class="input" placeholder="e.g. A-302"></div>
                </div>
                <div class="form-group">
                    <label>Schedule Timing (Slots)</label>
                    <input type="text" id="clsModSchedule" class="input" placeholder="e.g. Mon, Wed 10:00-11:30">
                    <small style="color:var(--gray-500); font-size:11px;">Day(s) and Time range</small>
                </div>
            </div>
            <div class="modal-footer" style="display:flex; justify-content:flex-end; gap:12px; margin-top:20px;">
                <button class="btn btn-outline" onclick="closeClassModal()">Cancel</button>
                <button class="btn btn-primary" onclick="saveClass()"><i class="fas fa-save"></i> Save Schedule</button>
            </div>
        </div>`;
    document.body.appendChild(modal);
}

function openClassModal(classId = null, activeClassId = null) {
    renderClassModal();
    _editingClassId = classId;
    _activeTimetableClassId = activeClassId || _activeTimetableClassId || '';
    const modal = document.getElementById('classModal');
    const title = document.getElementById('classModalTitle');
    
    // Clear inputs first
    document.getElementById('clsModName').value = '';
    document.getElementById('clsModSection').value = '';
    document.getElementById('clsModRoom').value = '';
    document.getElementById('clsModSchedule').value = '';
    
    if (classId) {
        const cls = mockData.classes.find(c => c.id === classId);
        if (cls) {
            title.textContent = 'Edit Class Schedule';
            document.getElementById('clsModName').value = cls.course_name;
            document.getElementById('clsModFaculty').value = cls.faculty_id;
            document.getElementById('clsModSection').value = cls.section;
            document.getElementById('clsModRoom').value = cls.room_no;
            document.getElementById('clsModSchedule').value = cls.schedule_time;
        }
    } else {
        title.textContent = 'Add Class Schedule';
    }
    
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeClassModal() {
    const modal = document.getElementById('classModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 250);
    }
}

function saveClass() {
    const name = document.getElementById('clsModName').value.trim();
    const facEl = document.getElementById('clsModFaculty');
    const facultyId = facEl.value;
    const facultyName = facEl.options[facEl.selectedIndex].getAttribute('data-name');
    const section = document.getElementById('clsModSection').value.trim();
    const room = document.getElementById('clsModRoom').value.trim();
    const schedule = document.getElementById('clsModSchedule').value.trim();

    if (!name || !section || !room || !schedule) {
        showToast('warning', 'Missing Details', 'Please fill in all the required fields.');
        return;
    }

    if (_editingClassId) {
        const idx = mockData.classes.findIndex(c => c.id === _editingClassId);
        if (idx !== -1) {
            const prev = { ...mockData.classes[idx] };
            mockData.classes[idx] = {
                ...mockData.classes[idx],
                course_name: name,
                faculty_id: facultyId,
                faculty_name: facultyName,
                section: section,
                room_no: room,
                schedule_time: schedule
            };

            const changedTiming = prev.schedule_time !== schedule || prev.room_no !== room;
            if (changedTiming) {
                const studentIds = (getClassStudentsMap()[_editingClassId] || []);
                studentIds.forEach(sId => {
                    pushSystemNotification(
                        sId,
                        'Timetable Updated',
                        `${section}: ${name} moved to ${schedule} in Room ${room}.`,
                        'warning'
                    );
                });
                if (facultyId) {
                    pushSystemNotification(
                        facultyId,
                        'Class Timetable Updated',
                        `${section}: ${name} updated to ${schedule} in Room ${room}.`,
                        'warning'
                    );
                }
            }
            showToast('success', 'Schedule Updated', `Successfully updated ${name} for ${section}`);
        }
    } else {
        const newClass = {
            id: 'cls_' + Date.now(),
            course_id: Date.now().toString(), // Simple mapping
            course_name: name,
            faculty_id: facultyId,
            faculty_name: facultyName,
            section: section,
            room_no: room,
            schedule_time: schedule,
            semester: 'Current Semester'
        };
        mockData.classes.push(newClass);
        showToast('success', 'Class Added', `New slot created for ${name}`);
    }

    // Persist to localStorage
    saveClassesDB(mockData.classes);
    closeClassModal();
    loadTimetableAdminPage(_activeTimetableClassId || null);
}

function deleteClass(classId) {
    const cls = mockData.classes.find(c => c.id === classId);
    if (!cls) return;
    
    if (confirm(`Are you sure you want to delete the schedule for ${cls.course_name} (${cls.section})?`)) {
        mockData.classes = mockData.classes.filter(c => c.id !== classId);
        saveClassesDB(mockData.classes);
        showToast('info', 'Schedule Removed', 'The class slot has been deleted.');
        loadTimetableAdminPage();
    }
}

// ─── Keyboard Navigation for Attendance Marking ───────────────────────────────
document.addEventListener('keydown', function(event) {
    const card = document.getElementById('markAttendanceCard');
    if (!card || card.style.display === 'none') return;
    
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    if (['INPUT', 'TEXTAREA'].includes(event.target.tagName)) return;

    event.preventDefault();

    const allRows = Array.from(document.querySelectorAll('.attendance-table-row'));
    if (allRows.length === 0) return;

    let currentIndex = allRows.findIndex(r => r.classList.contains('active-student-highlight'));
    
    if (event.key === 'ArrowDown') {
        if (currentIndex !== -1) allRows[currentIndex].classList.remove('active-student-highlight');
        let next = currentIndex === -1 ? 0 : currentIndex + 1;
        while(next < allRows.length && allRows[next].querySelector('.event-auto-badge')) next++;
        if (next < allRows.length) currentIndex = next;
        else if (currentIndex === -1) currentIndex = 0; // fallback
        
        allRows[currentIndex].classList.add('active-student-highlight');
        allRows[currentIndex].scrollIntoView({behavior: "smooth", block: "center"});
    } else if (event.key === 'ArrowUp') {
        if (currentIndex !== -1) allRows[currentIndex].classList.remove('active-student-highlight');
        let prev = currentIndex === -1 ? allRows.length - 1 : currentIndex - 1;
        while(prev >= 0 && allRows[prev].querySelector('.event-auto-badge')) prev--;
        if (prev >= 0) currentIndex = prev;
        else if (currentIndex === -1) currentIndex = 0;
        
        allRows[currentIndex].classList.add('active-student-highlight');
        allRows[currentIndex].scrollIntoView({behavior: "smooth", block: "center"});
    } else if (event.key === 'ArrowRight') {
        if (currentIndex !== -1 && !allRows[currentIndex].querySelector('.event-auto-badge')) {
            const radio = allRows[currentIndex].querySelector('.att-radio-absent');
            if (radio) {
                radio.checked = true;
                markStudentStatus(allRows[currentIndex].id.replace('sai-',''), 'absent', {currentTarget: radio});
            }
        }
    } else if (event.key === 'ArrowLeft') {
        if (currentIndex !== -1 && !allRows[currentIndex].querySelector('.event-auto-badge')) {
            const radio = allRows[currentIndex].querySelector('.att-radio-present');
            if (radio) {
                radio.checked = true;
                markStudentStatus(allRows[currentIndex].id.replace('sai-',''), 'present', {currentTarget: radio});
            }
        }
    }
});

function handleForgotPassword() {
    const email = currentUser.email || 'your registered email';
    showToast('info', 'Recovery Started', `A password reset link has been sent to ${email}. Please check your inbox.`);
}
