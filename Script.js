// ─── Mock Data ────────────────────────────────────────────────────────────────
const mockData = {
    users: [
        { id: '1', name: 'Admin User',        email: 'admin@college.edu',   role: 'admin',   avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face' },
        { id: '2', name: 'Dr. Sarah Johnson', email: 'faculty@college.edu', role: 'faculty', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face' },
        { id: '3', name: 'Alice Williams',    email: 'student@college.edu', role: 'student', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face' }
    ],
    departments: [
        { id: '1', name: 'Computer Science' },
        { id: '2', name: 'Mathematics' },
        { id: '3', name: 'Physics' }
    ],
    courses: [
        { id: '1', name: 'Data Structures',              department_id: '1', department_name: 'Computer Science' },
        { id: '2', name: 'Algorithms',                   department_id: '1', department_name: 'Computer Science' },
        { id: '3', name: 'Calculus I',                   department_id: '2', department_name: 'Mathematics' },
        { id: '4', name: 'Web Development-II',           department_id: '1', department_name: 'Computer Science' },
        { id: '5', name: 'Computational Mathematics-II', department_id: '2', department_name: 'Mathematics' },
        { id: '6', name: 'Data Structures Algorithms',   department_id: '1', department_name: 'Computer Science' },
        { id: '7', name: 'Minor Project',                department_id: '1', department_name: 'Computer Science' },
        { id: '8', name: 'Physics',                      department_id: '3', department_name: 'Physics' }
    ],
    classes: [
        { id: '1', course_id: '1', course_name: 'Data Structures',              faculty_id: '2', faculty_name: 'Dr. Sarah Johnson', semester: 'Fall 2024', schedule_time: 'Mon, Wed, Fri 9:00-10:30',  room_no: 'A-101', section: 'B.Tech CSE Core' },
        { id: '2', course_id: '2', course_name: 'Algorithms',                   faculty_id: '2', faculty_name: 'Dr. Sarah Johnson', semester: 'Fall 2024', schedule_time: 'Tue, Thu 14:00-15:30',      room_no: 'B-204', section: 'B.Tech Data Science' },
        { id: '3', course_id: '4', course_name: 'Web Development-II',           faculty_id: '2', faculty_name: 'Dr. Sarah Johnson', semester: 'Fall 2024', schedule_time: 'Mon, Wed 11:00-12:30',     room_no: 'C-302', section: 'B.Tech CSE (AI/ML)' },
        { id: '4', course_id: '5', course_name: 'Computational Mathematics-II', faculty_id: '2', faculty_name: 'Dr. Sarah Johnson', semester: 'Fall 2024', schedule_time: 'Tue, Thu 9:00-10:30',      room_no: 'A-203', section: 'B.Tech Data Science' },
        { id: '5', course_id: '6', course_name: 'Data Structures Algorithms',   faculty_id: '2', faculty_name: 'Dr. Sarah Johnson', semester: 'Fall 2024', schedule_time: 'Wed, Fri 14:00-15:30',    room_no: 'B-105', section: 'B.Tech CSE Core' },
        { id: '6', course_id: '7', course_name: 'Minor Project',                faculty_id: '2', faculty_name: 'Dr. Sarah Johnson', semester: 'Fall 2024', schedule_time: 'Fri 10:00-13:30',          room_no: 'Lab-3', section: 'B.Tech CSE (AI/ML)' },
        { id: '7', course_id: '8', course_name: 'Physics',                      faculty_id: '2', faculty_name: 'Dr. Sarah Johnson', semester: 'Fall 2024', schedule_time: 'Mon, Thu 15:00-16:30',    room_no: 'D-401', section: 'B.Tech IT' }
    ],
    attendanceRecords: [
        // Web Development-II (class_id 3) — 18 records
        { id:'r01',  class_id:'3', class_name:'Web Development-II',           student_id:'3', student_name:'Alice Williams', date:'2024-02-01', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-01T11:05:00Z' },
        { id:'r02',  class_id:'3', class_name:'Web Development-II',           student_id:'3', student_name:'Alice Williams', date:'2024-02-03', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-03T11:05:00Z' },
        { id:'r03',  class_id:'3', class_name:'Web Development-II',           student_id:'3', student_name:'Alice Williams', date:'2024-02-06', status:'absent',  marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-06T11:05:00Z' },
        { id:'r04',  class_id:'3', class_name:'Web Development-II',           student_id:'3', student_name:'Alice Williams', date:'2024-02-08', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-08T11:05:00Z' },
        { id:'r05',  class_id:'3', class_name:'Web Development-II',           student_id:'3', student_name:'Alice Williams', date:'2024-02-10', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-10T11:05:00Z' },
        { id:'r06',  class_id:'3', class_name:'Web Development-II',           student_id:'3', student_name:'Alice Williams', date:'2024-02-13', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-13T11:05:00Z' },
        { id:'r07',  class_id:'3', class_name:'Web Development-II',           student_id:'3', student_name:'Alice Williams', date:'2024-02-15', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-15T11:05:00Z' },
        { id:'r08',  class_id:'3', class_name:'Web Development-II',           student_id:'3', student_name:'Alice Williams', date:'2024-02-17', status:'absent',  marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-17T11:05:00Z' },
        { id:'r09',  class_id:'3', class_name:'Web Development-II',           student_id:'3', student_name:'Alice Williams', date:'2024-02-20', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-20T11:05:00Z' },
        { id:'r10',  class_id:'3', class_name:'Web Development-II',           student_id:'3', student_name:'Alice Williams', date:'2024-02-22', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-22T11:05:00Z' },
        { id:'r11',  class_id:'3', class_name:'Web Development-II',           student_id:'3', student_name:'Alice Williams', date:'2024-02-24', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-24T11:05:00Z' },
        // Computational Mathematics-II (class_id 4) — 14 records
        { id:'r12',  class_id:'4', class_name:'Computational Mathematics-II', student_id:'3', student_name:'Alice Williams', date:'2024-02-01', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-01T09:12:00Z' },
        { id:'r13',  class_id:'4', class_name:'Computational Mathematics-II', student_id:'3', student_name:'Alice Williams', date:'2024-02-06', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-06T09:12:00Z' },
        { id:'r14',  class_id:'4', class_name:'Computational Mathematics-II', student_id:'3', student_name:'Alice Williams', date:'2024-02-08', status:'absent',  marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-08T09:12:00Z' },
        { id:'r15',  class_id:'4', class_name:'Computational Mathematics-II', student_id:'3', student_name:'Alice Williams', date:'2024-02-13', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-13T09:12:00Z' },
        { id:'r16',  class_id:'4', class_name:'Computational Mathematics-II', student_id:'3', student_name:'Alice Williams', date:'2024-02-15', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-15T09:12:00Z' },
        { id:'r17',  class_id:'4', class_name:'Computational Mathematics-II', student_id:'3', student_name:'Alice Williams', date:'2024-02-20', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-20T09:12:00Z' },
        { id:'r18',  class_id:'4', class_name:'Computational Mathematics-II', student_id:'3', student_name:'Alice Williams', date:'2024-02-22', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-22T09:12:00Z' },
        { id:'r19',  class_id:'4', class_name:'Computational Mathematics-II', student_id:'3', student_name:'Alice Williams', date:'2024-02-23', status:'absent',  marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-23T09:12:00Z' },
        // Data Structures Algorithms (class_id 5) — 12 records
        { id:'r20',  class_id:'5', class_name:'Data Structures Algorithms',   student_id:'3', student_name:'Alice Williams', date:'2024-02-02', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-02T14:05:00Z' },
        { id:'r21',  class_id:'5', class_name:'Data Structures Algorithms',   student_id:'3', student_name:'Alice Williams', date:'2024-02-05', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-05T14:05:00Z' },
        { id:'r22',  class_id:'5', class_name:'Data Structures Algorithms',   student_id:'3', student_name:'Alice Williams', date:'2024-02-07', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-07T14:05:00Z' },
        { id:'r23',  class_id:'5', class_name:'Data Structures Algorithms',   student_id:'3', student_name:'Alice Williams', date:'2024-02-09', status:'absent',  marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-09T14:05:00Z' },
        { id:'r24',  class_id:'5', class_name:'Data Structures Algorithms',   student_id:'3', student_name:'Alice Williams', date:'2024-02-14', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-14T14:05:00Z' },
        { id:'r25',  class_id:'5', class_name:'Data Structures Algorithms',   student_id:'3', student_name:'Alice Williams', date:'2024-02-16', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-16T14:05:00Z' },
        { id:'r26',  class_id:'5', class_name:'Data Structures Algorithms',   student_id:'3', student_name:'Alice Williams', date:'2024-02-21', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-21T14:05:00Z' },
        { id:'r27',  class_id:'5', class_name:'Data Structures Algorithms',   student_id:'3', student_name:'Alice Williams', date:'2024-02-22', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-22T14:05:00Z' },
        // Minor Project (class_id 6) — 8 records
        { id:'r28',  class_id:'6', class_name:'Minor Project',                student_id:'3', student_name:'Alice Williams', date:'2024-02-02', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-02T10:00:00Z' },
        { id:'r29',  class_id:'6', class_name:'Minor Project',                student_id:'3', student_name:'Alice Williams', date:'2024-02-09', status:'absent',  remarks:'Sick leave', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-09T10:00:00Z' },
        { id:'r30',  class_id:'6', class_name:'Minor Project',                student_id:'3', student_name:'Alice Williams', date:'2024-02-16', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-16T10:00:00Z' },
        { id:'r31',  class_id:'6', class_name:'Minor Project',                student_id:'3', student_name:'Alice Williams', date:'2024-02-21', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-21T10:00:00Z' },
        // Physics (class_id 7) — 10 records
        { id:'r32',  class_id:'7', class_name:'Physics',                      student_id:'3', student_name:'Alice Williams', date:'2024-02-01', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-01T15:05:00Z' },
        { id:'r33',  class_id:'7', class_name:'Physics',                      student_id:'3', student_name:'Alice Williams', date:'2024-02-05', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-05T15:05:00Z' },
        { id:'r34',  class_id:'7', class_name:'Physics',                      student_id:'3', student_name:'Alice Williams', date:'2024-02-08', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-08T15:05:00Z' },
        { id:'r35',  class_id:'7', class_name:'Physics',                      student_id:'3', student_name:'Alice Williams', date:'2024-02-12', status:'absent',  marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-12T15:05:00Z' },
        { id:'r36',  class_id:'7', class_name:'Physics',                      student_id:'3', student_name:'Alice Williams', date:'2024-02-15', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-15T15:05:00Z' },
        { id:'r37',  class_id:'7', class_name:'Physics',                      student_id:'3', student_name:'Alice Williams', date:'2024-02-19', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-19T15:05:00Z' },
        { id:'r38',  class_id:'7', class_name:'Physics',                      student_id:'3', student_name:'Alice Williams', date:'2024-02-20', status:'present', marked_by:'2', marked_by_name:'Dr. Sarah Johnson', timestamp:'2024-02-20T15:05:00Z' },
    ],
    riskAssessments: [
        { id: '1', student_id: '3', student_name: 'Alice Williams', class_id: '1', class_name: 'Data Structures', attendance_percentage: 85.5, risk_level: 'Low', predicted_drop_if_miss_next: false, updated_at: '2024-02-24T10:00:00Z' }
    ],
    leaveRequests: [
        { id: '1', student_id: '3', student_name: 'Alice Williams', class_id: '1', class_name: 'Data Structures', start_date: '2024-02-26', end_date: '2024-02-27', reason: 'Medical appointment', status: 'pending', created_at: '2024-02-24T08:00:00Z' }
    ],
    // College events — fixed to current month for demo
    collegeEvents: (() => {
        const now = new Date();
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, '0');
        return [
            { id: 'ev1', name: 'Tech Fest 2024',     date: `${y}-${m}-05`, description: 'Annual technology festival with project exhibitions, coding contests, and workshops.', icon: '💻', color: '#6366f1' },
            { id: 'ev2', name: 'Sports Day',          date: `${y}-${m}-10`, description: 'Inter-department sports competition — cricket, football, athletics and more.',         icon: '🏆', color: '#f59e0b' },
            { id: 'ev3', name: 'Cultural Night',      date: `${y}-${m}-15`, description: 'Annual cultural evening featuring performances, music, and art.',                     icon: '🎭', color: '#ec4899' },
            { id: 'ev4', name: 'Hackathon',           date: `${y}-${m}-20`, description: '24-hour hackathon open to all CS and IT students. Build something amazing!',          icon: '⚡', color: '#10b981' },
            { id: 'ev5', name: 'Science Exhibition',  date: `${y}-${m}-25`, description: 'Showcase your research projects and scientific innovations.',                         icon: '🔬', color: '#3b82f6' },
        ];
    })(),
    // Student event participation requests (pre-seeded with pending entries)
    eventParticipations: (() => {
        const d = (day) => { const n=new Date(); return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`; };
        return [
            { id:'ep001', event_id:'ev1', event_name:'Tech Fest 2024',   date:d(5),  student_id:'4',  student_name:'Bob Martinez',  roll_no:'CS2021002', reason:'Participating in the coding contest and project expo.',   status:'pending',  submitted_at:new Date().toISOString() },
            { id:'ep002', event_id:'ev2', event_name:'Sports Day',        date:d(10), student_id:'5',  student_name:'Carol Davis',   roll_no:'CS2021003', reason:'Representing department in 100m sprint and relay.',       status:'pending',  submitted_at:new Date().toISOString() },
            { id:'ep003', event_id:'ev3', event_name:'Cultural Night',    date:d(15), student_id:'7',  student_name:'Emma Thompson', roll_no:'CS2021005', reason:'Performing a classical dance in the cultural program.',   status:'pending',  submitted_at:new Date().toISOString() },
            { id:'ep004', event_id:'ev4', event_name:'Hackathon',         date:d(20), student_id:'10', student_name:'Henry Nguyen', roll_no:'CS2021008', reason:'Team lead for an AI-based project submission.',           status:'pending',  submitted_at:new Date().toISOString() },
            { id:'ep005', event_id:'ev1', event_name:'Tech Fest 2024',   date:d(5),  student_id:'6',  student_name:'David Kim',     roll_no:'CS2021004', reason:'Volunteering as event coordinator for the tech expo.',   status:'approved', submitted_at:new Date().toISOString() },
            { id:'ep006', event_id:'ev2', event_name:'Sports Day',        date:d(10), student_id:'9',  student_name:'Grace Lee',    roll_no:'CS2021007', reason:'Playing in the badminton mixed doubles tournament.',     status:'rejected', submitted_at:new Date().toISOString() },
        ];
    })()
};

// ─── Extended student list for attendance marking ────────────────────────────
const allStudents = [
    { id: '3',  name: 'Alice Williams',  rollNo: 'CS2021001', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face' },
    { id: '4',  name: 'Bob Martinez',    rollNo: 'CS2021002', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face' },
    { id: '5',  name: 'Carol Davis',     rollNo: 'CS2021003', avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=32&h=32&fit=crop&crop=face' },
    { id: '6',  name: 'David Kim',       rollNo: 'CS2021004', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face' },
    { id: '7',  name: 'Emma Thompson',   rollNo: 'CS2021005', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face' },
    { id: '8',  name: 'Frank Patel',     rollNo: 'CS2021006', avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=32&h=32&fit=crop&crop=face' },
    { id: '9',  name: 'Grace Lee',       rollNo: 'CS2021007', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=32&h=32&fit=crop&crop=face' },
    { id: '10', name: 'Henry Nguyen',    rollNo: 'CS2021008', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face' },
    { id: '11', name: 'Isla Robinson',   rollNo: 'CS2021009', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=face' },
    { id: '12', name: 'James Wilson',    rollNo: 'CS2021010', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=32&h=32&fit=crop&crop=face' },
];

// ─── Global State ─────────────────────────────────────────────────────────────
let currentUser  = null;
let currentPage  = 'dashboard';
let _activeEventId = null;

const loginScreen       = document.getElementById('loginScreen');
const dashboardScreen   = document.getElementById('dashboardScreen');
const loginForm         = document.getElementById('loginForm');
const pageContent       = document.getElementById('pageContent');
const pageTitle         = document.getElementById('pageTitle');
const sidebarUserName   = document.getElementById('sidebarUserName');
const sidebarUserRole   = document.getElementById('sidebarUserRole');
const notificationsPanel = document.getElementById('notificationsPanel');
const loadingOverlay    = document.getElementById('loadingOverlay');

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => { initializeApp(); });

function initializeApp() {
    loginForm.addEventListener('submit', handleLogin);
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
        if (inp.type === 'password') { inp.type = 'text';     icon.classList.replace('fa-eye', 'fa-eye-slash'); }
        else                         { inp.type = 'password'; icon.classList.replace('fa-eye-slash', 'fa-eye'); }
    });
    const saved = localStorage.getItem('currentUser');
    if (saved) { currentUser = JSON.parse(saved); showDashboard(); }
}

// ─── Auth ─────────────────────────────────────────────────────────────────────
function handleLogin(e) {
    e.preventDefault();
    const user = mockData.users.find(u => u.email === document.getElementById('email').value);
    if (user) { currentUser = user; localStorage.setItem('currentUser', JSON.stringify(user)); showToast('success', 'Login Successful', `Welcome back, ${user.name}!`); showDashboard(); }
    else        showToast('error', 'Login Failed', 'Invalid email or password');
}
function loginAs(role) {
    const user = mockData.users.find(u => u.role === role);
    if (user) { currentUser = user; localStorage.setItem('currentUser', JSON.stringify(user)); showToast('success', 'Login Successful', `Welcome back, ${user.name}!`); showDashboard(); }
}
function logout() { currentUser = null; localStorage.removeItem('currentUser'); showToast('info', 'Logged Out', 'You have been successfully logged out'); showLogin(); }

// ─── Navigation ───────────────────────────────────────────────────────────────
function showLogin() { loginScreen.classList.add('active'); dashboardScreen.classList.remove('active'); document.body.style.background = 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)'; }
function showDashboard() {
    loginScreen.classList.remove('active'); dashboardScreen.classList.add('active');
    document.body.style.background = 'var(--gray-50)';
    sidebarUserName.textContent = currentUser.name;
    sidebarUserRole.textContent = currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1);
    updateNavigation();
    navigateToPage('dashboard');
}
function updateNavigation() {
    const navItems = {
        attendance:      ['faculty', 'admin'],
        calendar:        ['student'],
        future:          ['student'],
        leave:           [],
        analytics:       ['admin'],
        users:           ['admin'],
        classes:         ['admin'],
        eventverify:     ['admin'],
        updateattendance:['faculty']
    };
    Object.keys(navItems).forEach(id => {
        const el = document.getElementById(id + 'NavItem');
        if (el) el.style.display = navItems[id].includes(currentUser.role) ? 'block' : 'none';
    });
}
function navigateToPage(page) {
    currentPage = page;
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const a = document.querySelector(`[data-page="${page}"]`);
    if (a) a.classList.add('active');
    const titles = { dashboard: 'Dashboard', attendance: 'Mark Attendance', calendar: 'Attendance Calendar', future: 'Analytics', leave: 'Leave Request', analytics: 'Analytics', users: 'User Management', classes: 'Class Management', eventverify: 'Event Verifications', updateattendance: 'Update Attendance' };
    pageTitle.textContent = titles[page] || 'Dashboard';
    loadPageContent(page);
}
function loadPageContent(page) {
    showLoading();
    setTimeout(() => {
        switch (page) {
            case 'dashboard':   loadDashboard();          break;
            case 'attendance':  loadAttendancePage();     break;
            case 'calendar':    loadCalendarPage();       break;
            case 'future':      loadFutureOutcomesPage(); break;
            case 'leave':       loadLeavePage();          break;
            case 'analytics':   loadAnalyticsPage();      break;
            case 'users':       loadUsersPage();          break;
            case 'classes':     loadClassesPage();        break;
            case 'eventverify': loadEventVerifyPage();       break;
            case 'updateattendance': loadUpdateAttendancePage(); break;
            default:            loadDashboard();
        }
        hideLoading();
    }, 400);
}

// ─── Dashboard ────────────────────────────────────────────────────────────────
function loadDashboard() {
    if      (currentUser.role === 'student') pageContent.innerHTML = getStudentDashboard();
    else if (currentUser.role === 'faculty') pageContent.innerHTML = getFacultyDashboard();
    else if (currentUser.role === 'admin')   pageContent.innerHTML = getAdminDashboard();
}

function getStudentDashboard() {
    const att  = mockData.attendanceRecords.filter(r => r.student_id === currentUser.id);
    const pCnt = att.filter(r => r.status === 'present').length;
    const tCnt = att.length;
    const pct  = tCnt > 0 ? Math.round((pCnt / tCnt) * 100) : 0;
    const risk = mockData.riskAssessments.find(r => r.student_id === currentUser.id);
    return `
        <div class="stats-grid">
            <div class="stat-card primary"><div class="stat-header"><div class="stat-icon primary"><i class="fas fa-chart-pie"></i></div><div class="stat-change positive"><i class="fas fa-arrow-up"></i> 5%</div></div><div class="stat-value">${pct}%</div><div class="stat-label">Overall Attendance</div></div>
            <div class="stat-card ${risk ? risk.risk_level.toLowerCase() : 'success'}"><div class="stat-header"><div class="stat-icon ${risk ? risk.risk_level.toLowerCase() : 'success'}"><i class="fas fa-exclamation-triangle"></i></div></div><div class="stat-value">${risk ? risk.risk_level : 'Low'}</div><div class="stat-label">Risk Level</div></div>
            <div class="stat-card success"><div class="stat-header"><div class="stat-icon success"><i class="fas fa-calendar-check"></i></div></div><div class="stat-value">${pCnt}</div><div class="stat-label">Classes Attended</div></div>
            <div class="stat-card danger"><div class="stat-header"><div class="stat-icon danger"><i class="fas fa-user-times"></i></div></div><div class="stat-value">${tCnt - pCnt}</div><div class="stat-label">Classes Missed</div></div>
        </div>
        <div class="future-teaser-card" onclick="navigateToPage('future')">
            <div class="future-teaser-left"><div class="future-teaser-icon"><i class="fas fa-chart-bar"></i></div><div><div class="future-teaser-title">Analytics</div><div class="future-teaser-sub">Streaks, subject breakdown &amp; future projections</div></div></div>
            <div class="future-teaser-arrow"><i class="fas fa-arrow-right"></i></div>
        </div>
        <div class="card">
            <div class="card-header"><h3 class="card-title">Today's Attendance</h3></div>
            <div class="table-container"><table class="table"><thead><tr><th>Class</th><th>Status</th><th>Remarks</th></tr></thead><tbody>
                ${(() => { const today = att.filter(r => r.date === new Date().toISOString().split('T')[0]); return today.length ? today.map(r => `<tr><td>${r.class_name}</td><td><span class="status-badge ${r.status}">${r.status}</span></td><td>${r.remarks||'-'}</td></tr>`).join('') : '<tr><td colspan="3" style="text-align:center;color:var(--gray-500)">No classes today</td></tr>'; })()}
            </tbody></table></div>
        </div>`;
}

function getFacultyDashboard() {
    const fc = mockData.classes.filter(c => c.faculty_id === currentUser.id);

    const dayOrder  = { 'Mon':1,'Tue':2,'Wed':3,'Thu':4,'Fri':5,'Sat':6,'Sun':7 };
    const dayColors = {
        'Mon': { bg:'#eff6ff', border:'#3b82f6', text:'#1d4ed8' },
        'Tue': { bg:'#f0fdf4', border:'#22c55e', text:'#15803d' },
        'Wed': { bg:'#fefce8', border:'#f59e0b', text:'#b45309' },
        'Thu': { bg:'#fdf4ff', border:'#a855f7', text:'#7e22ce' },
        'Fri': { bg:'#fff1f2', border:'#f43f5e', text:'#be123c' },
        'Sat': { bg:'#f0f9ff', border:'#06b6d4', text:'#0e7490' },
    };

    // Build day → classes map
    const daysMap = {};
    fc.forEach(cls => {
        const parts = cls.schedule_time.split(' ');
        const time  = parts.slice(-1)[0];
        const days  = parts.slice(0,-1).join(' ').replace(/,/g,'').split(' ').filter(Boolean);
        days.forEach(day => {
            if (!daysMap[day]) daysMap[day] = [];
            daysMap[day].push({ ...cls, timeSlot: time });
        });
    });

    const sortedDays = Object.keys(daysMap).sort((a,b) => (dayOrder[a]||9)-(dayOrder[b]||9));

    const timetableHtml = sortedDays.map(day => {
        const col     = dayColors[day] || { bg:'#f9fafb', border:'#6b7280', text:'#374151' };
        const classes = daysMap[day].sort((a,b) => a.timeSlot.localeCompare(b.timeSlot));
        return `
            <div class="tt-day-col">
                <div class="tt-day-header" style="background:${col.bg};border-bottom:2px solid ${col.border};color:${col.text};">${day}</div>
                <div class="tt-day-body">
                    ${classes.map(cls => `
                        <div class="tt-class-card" style="border-left:3px solid ${col.border};">
                            <div class="tt-class-time"><i class="fas fa-clock" style="color:${col.border};font-size:10px;"></i> ${cls.timeSlot}</div>
                            <div class="tt-class-name">${cls.section}</div>
                            <div class="tt-class-course">${cls.course_name}</div>
                            <div class="tt-room-row">
                                <i class="fas fa-door-open" style="color:${col.border};font-size:10px;"></i>
                                <span>${cls.room_no}</span>
                            </div>
                            <button class="tt-mark-btn" onclick="markAttendance('${cls.id}')" style="border-color:${col.border};color:${col.text};">
                                Mark
                            </button>
                        </div>`).join('')}
                </div>
            </div>`;
    }).join('');

    // All assigned classes list
    const classListHtml = fc.map(cls => {
        const time = cls.schedule_time.split(' ').slice(-1)[0];
        const days = cls.schedule_time.split(' ').slice(0,-1).join(' ').replace(/,/g,'').trim();
        return `
            <div class="cl-row">
                <div class="cl-info">
                    <div class="cl-name">${cls.section}</div>
                    <div style="font-size:12px;color:var(--gray-500);margin-bottom:4px;">${cls.course_name}</div>
                    <div class="cl-meta">
                        <span><i class="fas fa-calendar-week"></i> ${days}</span>
                        <span><i class="fas fa-clock"></i> ${time}</span>
                        <span><i class="fas fa-door-open"></i> ${cls.room_no}</span>
                        <span><i class="fas fa-layer-group"></i> ${cls.semester}</span>
                    </div>
                </div>
                <button class="btn btn-primary btn-sm" onclick="markAttendance('${cls.id}')">
                    <i class="fas fa-user-check"></i> Mark
                </button>
            </div>`;
    }).join('');

    return `
        <div class="card" style="margin-bottom:24px;">
            <div class="card-header" style="padding-bottom:0;">
                <div>
                    <h3 class="card-title">Weekly Timetable</h3>
                    <p style="font-size:13px;color:var(--gray-500);margin-top:2px;">${fc.length} classes · ${currentUser.name}</p>
                </div>
            </div>
            <div class="tt-grid" style="padding:16px 20px 20px;">${timetableHtml}</div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title"><i class="fas fa-list" style="color:var(--primary-color);margin-right:8px;"></i>All Assigned Classes</h3>
                <span style="font-size:13px;color:var(--gray-500);">${fc.length} total</span>
            </div>
            <div class="cl-list">${classListHtml}</div>
        </div>`;
}

function getAdminDashboard() {
    const pendingVerifs = mockData.eventParticipations.filter(p => p.status === 'pending').length;
    return `
        <div class="stats-grid">
            <div class="stat-card primary"><div class="stat-header"><div class="stat-icon primary"><i class="fas fa-users"></i></div><div class="stat-change positive"><i class="fas fa-arrow-up"></i> 12%</div></div><div class="stat-value">${mockData.users.length}</div><div class="stat-label">Total Users</div></div>
            <div class="stat-card success"><div class="stat-header"><div class="stat-icon success"><i class="fas fa-user-graduate"></i></div></div><div class="stat-value">${mockData.users.filter(u=>u.role==='student').length}</div><div class="stat-label">Total Students</div></div>
            <div class="stat-card warning"><div class="stat-header"><div class="stat-icon warning"><i class="fas fa-chalkboard-teacher"></i></div></div><div class="stat-value">${mockData.users.filter(u=>u.role==='faculty').length}</div><div class="stat-label">Total Faculty</div></div>
            <div class="stat-card info"><div class="stat-header"><div class="stat-icon info"><i class="fas fa-chart-line"></i></div><div class="stat-change positive"><i class="fas fa-arrow-up"></i> 3%</div></div><div class="stat-value">75.5%</div><div class="stat-label">Average Attendance</div></div>
        </div>
        ${pendingVerifs > 0 ? `<div class="event-alert-banner" onclick="navigateToPage('eventverify')"><div style="display:flex;align-items:center;gap:12px;"><i class="fas fa-calendar-star" style="font-size:22px;"></i><div><div style="font-weight:700;font-size:15px;">${pendingVerifs} Event Participation Request${pendingVerifs>1?'s':''} Pending</div><div style="font-size:13px;opacity:.85;">Click to review and verify student event attendance</div></div></div><i class="fas fa-arrow-right"></i></div>` : ''}
        <div class="card"><div class="card-header"><h3 class="card-title"><i class="fas fa-star" style="color:#6366f1;margin-right:8px;"></i>Recent Event Verifications</h3><button class="btn btn-primary" onclick="navigateToPage('eventverify')"><i class="fas fa-eye"></i> View All</button></div>
            <div class="table-container"><table class="table"><thead><tr><th>Student</th><th>Event</th><th>Date</th><th>Reason</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>${mockData.eventParticipations.slice(0,5).map(p => `<tr><td><div style="font-weight:600;">${p.student_name}</div><div style="font-size:12px;color:var(--gray-500);">${p.roll_no}</div></td><td>${p.event_name}</td><td>${new Date(p.date).toLocaleDateString()}</td><td style="max-width:160px;font-size:13px;color:var(--gray-600);">${p.reason}</td><td><span class="status-badge ${p.status==='approved'?'present':p.status==='rejected'?'absent':'late'}">${p.status}</span></td><td>${p.status==='pending'?`<button class="btn btn-success btn-sm" onclick="verifyParticipation('${p.id}','approved')"><i class="fas fa-check"></i></button> <button class="btn btn-danger btn-sm" onclick="verifyParticipation('${p.id}','rejected')"><i class="fas fa-times"></i></button>`:'-'}</td></tr>`).join('')}</tbody></table></div>
        </div>
        <div class="card"><div class="card-header"><h3 class="card-title">Risk Assessment Summary</h3></div>
            <div class="table-container"><table class="table"><thead><tr><th>Student</th><th>Class</th><th>Attendance %</th><th>Risk Level</th><th>Predicted Drop</th></tr></thead>
            <tbody>${mockData.riskAssessments.map(a => `<tr><td>${a.student_name}</td><td>${a.class_name}</td><td>${a.attendance_percentage}%</td><td><span class="status-badge ${a.risk_level.toLowerCase()}">${a.risk_level}</span></td><td>${a.predicted_drop_if_miss_next?'Yes':'No'}</td></tr>`).join('')}</tbody></table></div>
        </div>`;
}

// ─── Attendance Page ──────────────────────────────────────────────────────────
function loadAttendancePage(preSelectClassId) {
    const fc      = mockData.classes.filter(c => c.faculty_id === currentUser.id);
    const today   = new Date();
    const dayName = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][today.getDay()];

    const scheduled = fc.filter(cls => {
        const days = cls.schedule_time.split(' ').slice(0,-1).join(' ').replace(/,/g,'').split(' ').filter(Boolean);
        return days.includes(dayName);
    });

    // Weekend / no-class fallback: pick first 3 classes so the page is never empty
    const todayClasses = scheduled.length > 0 ? scheduled : fc.slice(0, 3);

    pageContent.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title"><i class="fas fa-calendar-day" style="color:var(--primary-color);margin-right:8px;"></i>Today's Classes</h3>
                <span style="font-size:13px;color:var(--gray-500);">${today.toLocaleDateString('default',{weekday:'long',month:'long',day:'numeric'})}</span>
            </div>
            <div class="cl-list">
                ${todayClasses.map(cls => {
                    const time       = cls.schedule_time.split(' ').slice(-1)[0];
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
                        <button class="btn ${isSelected?'btn-success':'btn-primary'} btn-sm" id="clbtn-${cls.id}" onclick="selectClassForAttendance('${cls.id}')">
                            ${isSelected ? '<i class="fas fa-check"></i> Selected' : '<i class="fas fa-user-check"></i> Mark'}
                        </button>
                    </div>`;
                }).join('')}
            </div>
        </div>

        <!-- MARK ATTENDANCE FORM — shown after selecting a class -->
        <div class="card" id="markAttendanceCard" style="${preSelectClassId?'':'display:none;'}">
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
    setTimeout(() => { const c = document.getElementById('markAttendanceCard'); if(c) c.scrollIntoView({behavior:'smooth',block:'start'}); }, 50);
}

let _selectedClassId = null;

function loadStudentsForClass() {
    const classId = _selectedClassId;
    if (!classId) return;
    const todayStr = new Date().toISOString().split('T')[0];

    const eventStudentIds = mockData.eventParticipations
        .filter(p => p.status === 'approved' && p.date === todayStr)
        .map(p => p.student_id);
    const preMarkedEventIds = ['4', '7'];

    const cls = mockData.classes.find(c => c.id === classId);
    const titleEl = document.getElementById('markAttendanceTitle');
    if (titleEl && cls) titleEl.textContent = `Mark Attendance — ${cls.section}`;

    document.getElementById('attendanceForm').innerHTML = `
        <div class="mb-2"><p class="text-gray" style="font-size:13px;">Students marked <strong>In an Event</strong> have been pre-verified by admin.</p></div>
        <div class="students-list">
            ${allStudents.map(s => {
                const inEvent = eventStudentIds.includes(s.id) || preMarkedEventIds.includes(s.id);
                return `<div class="student-attendance-item" id="sai-${s.id}">
                    <div class="student-info">
                        <img src="${s.avatar}" alt="${s.name}" class="student-avatar">
                        <div><div style="font-weight:600;">${s.name}</div><div style="font-size:12px;color:var(--gray-500);">${s.rollNo}</div></div>
                    </div>
                    <div class="attendance-buttons">
                        ${inEvent
                            ? `<span class="event-auto-badge"><i class="fas fa-calendar-star"></i> In an Event</span>`
                            : `<button class="btn btn-success btn-sm att-btn" onclick="markStudentStatus('${s.id}','present',event)"><i class="fas fa-check"></i> Present</button>
                               <button class="btn btn-danger  btn-sm att-btn" onclick="markStudentStatus('${s.id}','absent',event)"><i class="fas fa-times"></i> Absent</button>
                               <button class="btn btn-primary btn-sm att-btn" onclick="markStudentStatus('${s.id}','event',event)"><i class="fas fa-file-medical"></i> Event</button>`}
                    </div>
                </div>`;
            }).join('')}
        </div>
        <div class="mt-3"><button class="btn btn-primary" onclick="saveAttendance()"><i class="fas fa-save"></i> Save Attendance</button></div>`;
}

// ─── Update Previous Attendance (standalone page) ────────────────────────────
function loadUpdateAttendancePage() {
    const fc    = mockData.classes.filter(c => c.faculty_id === currentUser.id);
    const today = new Date();
    const pastDates = [];
    for (let i = 1; i <= 7; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        pastDates.push({ str: d.toISOString().split('T')[0], label: d.toLocaleDateString('default',{weekday:'short',month:'short',day:'numeric'}) });
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
                    <select id="updateClass" class="input" onchange="loadUpdateAttendance()">
                        <option value="">Select class</option>
                        ${fc.map(cls => `<option value="${cls.id}">${cls.section} · ${cls.room_no}</option>`).join('')}
                    </select>
                </div>
                <div style="flex:1;min-width:200px;">
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

function loadUpdateAttendance() {
    const classId   = document.getElementById('updateClass') ? document.getElementById('updateClass').value : '';
    const dateStr   = document.getElementById('updateDate')  ? document.getElementById('updateDate').value  : '';
    const container = document.getElementById('updateAttendanceForm');
    if (!container) return;
    if (!classId || !dateStr) {
        container.innerHTML = `<div style="text-align:center;padding:32px 0;color:var(--gray-400);"><i class="fas fa-hand-pointer" style="font-size:28px;margin-bottom:10px;display:block;"></i><p style="font-size:14px;">Select a class and date above to load attendance records.</p></div>`;
        return;
    }
    const cls = mockData.classes.find(c => c.id === classId);
    const mockPrev = { '3':'present','4':'event','5':'absent','6':'present','7':'event','8':'present','9':'absent','10':'present','11':'present','12':'absent' };

    container.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:10px 14px;background:rgba(245,158,11,0.07);border:1px solid rgba(245,158,11,0.22);border-radius:8px;">
            <i class="fas fa-exclamation-triangle" style="color:var(--warning-color);"></i>
            <span style="font-size:13px;color:var(--gray-700);">Editing <strong>${cls ? cls.section : ''}</strong> · ${cls ? cls.course_name : ''} · Room ${cls ? cls.room_no : ''} · <strong>${new Date(dateStr+'T12:00:00').toLocaleDateString('default',{weekday:'long',month:'short',day:'numeric'})}</strong></span>
        </div>
        <div class="students-list">
            ${allStudents.map(s => {
                const cur     = mockPrev[s.id] || 'absent';
                const inEvent = cur === 'event';
                return `<div class="student-attendance-item" id="upd-${s.id}">
                    <div class="student-info">
                        <img src="${s.avatar}" alt="${s.name}" class="student-avatar">
                        <div><div style="font-weight:600;">${s.name}</div><div style="font-size:12px;color:var(--gray-500);">${s.rollNo}</div></div>
                    </div>
                    <div class="attendance-buttons" style="align-items:center;gap:6px;">
                        <span class="status-badge ${cur==='present'?'present':cur==='absent'?'absent':'event'}" id="badge-${s.id}" style="margin-right:4px;">${cur.charAt(0).toUpperCase()+cur.slice(1)}</span>
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
        badge.className = `status-badge ${status==='present'?'present':status==='absent'?'absent':'event'}`;
        badge.textContent = status.charAt(0).toUpperCase() + status.slice(1);
    }
    const row = document.getElementById('upd-' + studentId);
    if (row) row.querySelectorAll('.upd-btn').forEach(b => b.classList.remove('active-att'));
    try { if (evt && evt.currentTarget) evt.currentTarget.classList.add('active-att'); } catch(e) {}
}

function saveUpdateAttendance() {
    showToast('success', 'Attendance Updated', 'Previous attendance has been successfully updated.');
}

// ─── Calendar Page ────────────────────────────────────────────────────────────
function loadCalendarPage() {
    if (currentUser.role === 'student') {
        const att  = mockData.attendanceRecords.filter(r => r.student_id === currentUser.id);
        const attMap  = {};
        att.forEach(r => { attMap[r.date] = r.status; });

        const now   = new Date();
        const year  = now.getFullYear();
        const month = now.getMonth();
        const first = new Date(year, month, 1).getDay();
        const days  = new Date(year, month + 1, 0).getDate();

        const evMap = {};
        mockData.collegeEvents.forEach(ev => { evMap[ev.date] = ev; });

        const myP = {};
        mockData.eventParticipations.filter(p => p.student_id === currentUser.id).forEach(p => { myP[p.event_id] = p; });

        let gridHtml = '';
        for (let i = 0; i < first; i++) gridHtml += '<div></div>';
        for (let d = 1; d <= days; d++) {
            const ds    = new Date(year, month, d).toISOString().split('T')[0];
            const stat  = attMap[ds];
            const ev    = evMap[ds];
            const cMap  = { present:'var(--success-color)', absent:'var(--danger-color)', late:'var(--warning-color)', event:'var(--primary-color)' };
            const lMap  = { present:'P', absent:'A', late:'L', event:'E' };
            const aBadge = stat ? `<div style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:${cMap[stat]};color:white;font-weight:700;font-size:10px;">${lMap[stat]}</div>` : '';

            let evBanner = '';
            if (ev) {
                const participation = myP[ev.id];
                const sLabel = participation ? (participation.status==='approved' ? '✓ Verified' : participation.status==='rejected' ? '✗ Rejected' : '⏳ Pending') : 'Tap to apply';
                const sColor = participation ? (participation.status==='approved' ? 'var(--success-color)' : participation.status==='rejected' ? 'var(--danger-color)' : 'var(--warning-color)') : 'var(--gray-400)';
                evBanner = `<div class="cal-event-banner" style="border-left:3px solid ${ev.color};" onclick="openEventModal('${ev.id}')">
                    <div style="font-size:11px;font-weight:700;color:${ev.color};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${ev.icon} ${ev.name}</div>
                    <div style="font-size:10px;color:${sColor};font-weight:600;">${sLabel}</div>
                </div>`;
            }

            gridHtml += `<div style="border:1px solid var(--gray-100);min-height:88px;padding:5px;border-radius:8px;display:flex;flex-direction:column;gap:3px;${ev?'background:rgba(99,102,241,0.03);':''}">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:12px;font-weight:600;color:var(--gray-700);">${d}</span>
                    <div style="display:flex;gap:3px;align-items:center;">${ev?`<span style="font-size:13px;">${ev.icon}</span>`:''}${aBadge}</div>
                </div>
                ${evBanner}
                <div style="font-size:10px;color:var(--gray-400);">${stat ? stat.charAt(0).toUpperCase()+stat.slice(1) : ''}</div>
            </div>`;
        }

        // Upcoming events list
        const evListHtml = mockData.collegeEvents.map(ev => {
            const participation = myP[ev.id];
            const badge = participation
                ? `<span style="font-size:11px;font-weight:600;padding:3px 10px;border-radius:12px;background:${participation.status==='approved'?'rgba(34,197,94,0.12)':participation.status==='rejected'?'rgba(239,68,68,0.12)':'rgba(245,158,11,0.12)'};color:${participation.status==='approved'?'var(--success-color)':participation.status==='rejected'?'var(--danger-color)':'var(--warning-color)'};">${participation.status==='approved'?'✓ Verified':participation.status==='rejected'?'✗ Rejected':'⏳ Pending'}</span>`
                : `<button class="btn btn-primary btn-sm" onclick="openEventModal('${ev.id}')"><i class="fas fa-paper-plane"></i> Apply</button>`;
            return `<div style="display:flex;align-items:center;gap:12px;padding:10px;border:1px solid var(--gray-100);border-radius:8px;margin-bottom:8px;">
                <div style="width:36px;height:36px;border-radius:8px;background:${ev.color}20;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">${ev.icon}</div>
                <div style="flex:1;min-width:0;"><div style="font-weight:600;font-size:14px;">${ev.name}</div><div style="font-size:12px;color:var(--gray-500);">${new Date(ev.date).toLocaleDateString('default',{weekday:'short',month:'short',day:'numeric'})}</div></div>
                ${badge}
            </div>`;
        }).join('');

        const classIds = Array.from(new Set(att.map(r => r.class_id)));
        const classSummary = classIds.map(cid => {
            const cls = mockData.classes.find(c => c.id === cid) || { course_name: 'Class' };
            const recs = att.filter(r => r.class_id === cid);
            return `<div style="padding:8px;border:1px solid var(--gray-100);border-radius:8px;margin-bottom:8px;">
                <div style="font-weight:600">${cls.course_name}</div>
                <div style="font-size:13px;color:var(--gray-600)">${recs.filter(r=>r.status==='present').length} attended · ${recs.filter(r=>r.status==='absent').length} missed</div>
            </div>`;
        }).join('');

        pageContent.innerHTML = `
            <div class="card">
                <div class="card-header"><h3 class="card-title">Attendance Calendar — ${now.toLocaleString('default',{month:'long'})} ${year}</h3></div>
                <div style="padding:16px;">
                    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:5px;margin-bottom:8px;">
                        ${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=>`<div style="font-weight:700;text-align:center;font-size:11px;color:var(--gray-400);">${d}</div>`).join('')}
                    </div>
                    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:5px;">${gridHtml}</div>
                    <div style="margin-top:12px;display:flex;gap:12px;flex-wrap:wrap;">
                        ${[['var(--success-color)','Present'],['var(--danger-color)','Absent'],['var(--warning-color)','Late'],['var(--primary-color)','Event']].map(([c,l])=>`<div style="display:flex;gap:5px;align-items:center;"><div style="width:12px;height:12px;border-radius:50%;background:${c};"></div><span style="font-size:12px;color:var(--gray-500);">${l}</span></div>`).join('')}
                        <div style="display:flex;gap:5px;align-items:center;"><span style="font-size:13px;">🎉</span><span style="font-size:12px;color:var(--gray-500);">College Event</span></div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header"><h3 class="card-title"><i class="fas fa-star" style="color:#6366f1;margin-right:8px;"></i>College Events This Month</h3></div>
                <div style="padding:0 24px 16px;">${evListHtml || '<p class="text-gray">No events this month.</p>'}</div>
            </div>
            <div class="card">
                <div class="card-header"><h3 class="card-title">Per-class Summary</h3></div>
                <div style="padding:0 24px 16px;">${classSummary || '<p class="text-gray">No data.</p>'}</div>
            </div>
            <div style="margin-bottom:24px;">
                <button onclick="navigateToPage('future')" class="btn btn-primary" style="width:100%;"><i class="fas fa-chart-line"></i> Future Outcomes</button>
            </div>`;

        renderEventModal();
        return;
    }

    pageContent.innerHTML = `<div class="card"><div class="card-header"><h3 class="card-title">Attendance Calendar</h3></div><div id="calendar"><p class="text-center text-gray">Calendar view</p></div></div>`;
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
    renderEventModal();
    const ev = mockData.collegeEvents.find(e => e.id === eventId);
    if (!ev) return;
    _activeEventId = eventId;

    document.getElementById('modalEventIcon').textContent = ev.icon;
    document.getElementById('modalEventName').textContent = ev.name;
    document.getElementById('modalEventDate').textContent = new Date(ev.date).toLocaleDateString('default',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
    document.getElementById('modalEventDesc').textContent = ev.description;

    const me = allStudents.find(s => s.id === currentUser.id);
    if (me) { document.getElementById('modalStudentName').value = me.name; document.getElementById('modalRollNo').value = me.rollNo; }

    const existing = mockData.eventParticipations.find(p => p.event_id === eventId && p.student_id === currentUser.id);
    const statusMsg = document.getElementById('modalStatusMsg');
    const submitBtn = document.getElementById('modalSubmitBtn');
    ['modalStudentName','modalRollNo','modalReason'].forEach(id => { const el = document.getElementById(id); if(el) el.disabled = !!existing; });
    if (submitBtn) submitBtn.disabled = !!existing;

    if (existing) {
        const color = existing.status==='approved'?'var(--success-color)':existing.status==='rejected'?'var(--danger-color)':'var(--warning-color)';
        const icon  = existing.status==='approved'?'fa-check-circle':existing.status==='rejected'?'fa-times-circle':'fa-clock';
        const label = existing.status==='approved'?'Your participation has been verified by admin!':existing.status==='rejected'?'Your request was not approved.':'Your request is pending admin verification.';
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
    const name   = document.getElementById('modalStudentName').value.trim();
    const rollNo = document.getElementById('modalRollNo').value.trim();
    const reason = document.getElementById('modalReason').value.trim();
    if (!name || !rollNo || !reason) { showToast('warning','Missing Info','Please fill all fields.'); return; }

    const ev = mockData.collegeEvents.find(e => e.id === _activeEventId);
    mockData.eventParticipations.push({ id: 'ep'+Date.now(), event_id: _activeEventId, event_name: ev.name, date: ev.date, student_id: currentUser.id, student_name: name, roll_no: rollNo, reason, status: 'pending', submitted_at: new Date().toISOString() });

    showToast('success','Request Submitted','Your participation request is pending admin verification.');
    closeEventModal();
    loadCalendarPage();
}

// ─── Admin: Event Verification Page ──────────────────────────────────────────
function loadEventVerifyPage() {
    const pending = mockData.eventParticipations.filter(p => p.status === 'pending');
    const done    = mockData.eventParticipations.filter(p => p.status !== 'pending');

    function tableRows(list) {
        if (!list.length) return '<tr><td colspan="6" style="text-align:center;color:var(--gray-400);padding:20px;">No records</td></tr>';
        return list.map(p => `<tr>
            <td><div style="font-weight:600;">${p.student_name}</div><div style="font-size:12px;color:var(--gray-500);">${p.roll_no}</div></td>
            <td>${p.event_name}</td>
            <td>${new Date(p.date).toLocaleDateString()}</td>
            <td style="max-width:180px;font-size:13px;color:var(--gray-600);">${p.reason}</td>
            <td><span class="status-badge ${p.status==='approved'?'present':p.status==='rejected'?'absent':'late'}">${p.status}</span></td>
            <td>${p.status==='pending'
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
    if (p) { p.status = newStatus; showToast(newStatus==='approved'?'success':'warning', newStatus==='approved'?'Approved':'Rejected', `${p.student_name}'s participation ${newStatus}.`); if (currentPage === 'eventverify') loadEventVerifyPage(); else loadDashboard(); }
}

// ─── Analytics + Future Outcomes (student) ───────────────────────────────────
function loadFutureOutcomesPage() {
    const att    = mockData.attendanceRecords.filter(r => r.student_id === currentUser.id);
    const pCnt   = att.filter(r => r.status === 'present').length;
    const aCnt   = att.filter(r => r.status === 'absent').length;
    const eCnt   = att.filter(r => r.status === 'event').length;
    const tCnt   = att.length;
    const pct    = tCnt > 0 ? (pCnt / tCnt) * 100 : 0;

    // ── Streak calculation ──────────────────────────────────────────────────
    const sorted = [...att].sort((a,b) => new Date(b.date) - new Date(a.date));
    let currentStreak = 0, longestStreak = 0, tempStreak = 0;
    // current streak: consecutive present from most recent
    for (const r of sorted) {
        if (r.status === 'present' || r.status === 'event') currentStreak++;
        else break;
    }
    // longest streak: scan all sorted ascending
    const asc = [...att].sort((a,b) => new Date(a.date) - new Date(b.date));
    for (const r of asc) {
        if (r.status === 'present' || r.status === 'event') { tempStreak++; longestStreak = Math.max(longestStreak, tempStreak); }
        else tempStreak = 0;
    }

    // ── Subject-wise ────────────────────────────────────────────────────────
    const cids = Array.from(new Set(att.map(r => r.class_id)));
    const subjectRows = cids.map(cid => {
        const cls  = mockData.classes.find(c => c.id === cid) || { course_name: 'Class', section: '' };
        const recs = att.filter(r => r.class_id === cid);
        const sp   = recs.filter(r => r.status === 'present').length;
        const sa   = recs.filter(r => r.status === 'absent').length;
        const st   = recs.length;
        const spct = st > 0 ? ((sp / st) * 100) : 0;
        const bc   = spct >= 75 ? 'var(--success-color)' : spct >= 50 ? 'var(--warning-color)' : 'var(--danger-color)';
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
                    <div style="background:${bc};height:100%;width:${Math.min(spct,100)}%;border-radius:4px;transition:width .5s;"></div>
                </div>
                <div style="display:flex;gap:12px;font-size:12px;">
                    <span style="color:var(--success-color);"><i class="fas fa-check"></i> ${sp} present</span>
                    <span style="color:var(--danger-color);"><i class="fas fa-times"></i> ${sa} absent</span>
                    <span style="color:var(--gray-400);">${st} total</span>
                </div>
            </div>`;
    }).join('');

    // ── Future projections ──────────────────────────────────────────────────
    const miss = n => { const t = tCnt+n; return t>0?(pCnt/t)*100:0; };
    const gain = n => (tCnt+n)>0?((pCnt+n)/(tCnt+n))*100:0;
    const need = target => { if(pct>=target) return 0; return Math.max(0,Math.ceil((target*tCnt-100*pCnt)/(100-target))); };
    const safeMiss = Math.max(0, Math.floor(pCnt/0.75 - tCnt));

    function pBar(p) { const c=p>=75?'var(--success-color)':p>=50?'var(--warning-color)':'var(--danger-color)'; return `<div style="height:8px;background:var(--gray-100);border-radius:4px;overflow:hidden;margin-top:6px;"><div style="height:100%;width:${Math.min(p,100)}%;background:${c};border-radius:4px;transition:width .6s;"></div></div>`; }
    function sCard(icon, ic, label, p, note) {
        const d=(p-pct).toFixed(1); const dc=d>=0?'var(--success-color)':'var(--danger-color)'; const di=d>=0?'fa-arrow-up':'fa-arrow-down';
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
                <div class="future-banner-status ${pct>=75?'safe':'risk'}">${pct>=75?'<i class="fas fa-check-circle"></i> On Track':'<i class="fas fa-exclamation-circle"></i> At Risk'}</div>
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
                <div style="font-size:12px;color:var(--gray-500);margin-bottom:6px;">Last ${Math.min(sorted.length,20)} classes</div>
                <div style="display:flex;gap:4px;flex-wrap:wrap;">
                    ${sorted.slice(0,20).map(r => {
                        const c = r.status==='present'?'var(--success-color)':r.status==='absent'?'var(--danger-color)':r.status==='event'?'#6366f1':'var(--warning-color)';
                        return `<div title="${r.date} · ${r.class_name} · ${r.status}" style="width:18px;height:18px;border-radius:4px;background:${c};cursor:default;"></div>`;
                    }).join('')}
                </div>
                <div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap;">
                    ${[['var(--success-color)','Present'],['var(--danger-color)','Absent'],['#6366f1','Event']].map(([c,l])=>`<div style="display:flex;gap:5px;align-items:center;"><div style="width:10px;height:10px;border-radius:2px;background:${c};"></div><span style="font-size:11px;color:var(--gray-500);">${l}</span></div>`).join('')}
                </div>
            </div>
        </div>

        <!-- SUBJECT-WISE -->
        <div class="card" style="margin-bottom:24px;">
            <div class="card-header"><h3 class="card-title"><i class="fas fa-book-open" style="color:var(--primary-color);margin-right:8px;"></i>Subject-wise Breakdown</h3></div>
            <div style="padding:0 4px 8px;">${subjectRows || '<p class="text-gray">No data.</p>'}</div>
        </div>

        <!-- GOAL PROGRESS -->
        <div class="card" style="margin-bottom:24px;">
            <div class="card-header"><h3 class="card-title"><i class="fas fa-bullseye" style="color:var(--primary-color);margin-right:8px;"></i>Goal Progress</h3></div>
            <div class="card-body" style="padding-top:0;"><div class="goal-grid">
                <div class="goal-item ${pct>=75?'achieved':'pending'}">
                    <div class="goal-header"><div class="goal-label">75% Threshold</div><div class="goal-badge ${pct>=75?'achieved':'pending'}">${pct>=75?'<i class="fas fa-check"></i> Achieved':`${need(75)} classes away`}</div></div>
                    <div class="goal-bar-wrap"><div class="goal-bar-track"><div class="goal-bar-fill" style="width:${Math.min(pct,100)}%;background:${pct>=75?'var(--success-color)':'var(--primary-color)'};"></div><div class="goal-bar-target" style="left:75%;"></div></div><div class="goal-bar-labels"><span>0%</span><span style="position:absolute;left:75%;transform:translateX(-50%);">75%</span><span>100%</span></div></div>
                    <div class="goal-desc">${pct>=75?'Great work! You\'ve cleared the mandatory threshold.':`Attend <strong>${need(75)}</strong> more class${need(75)===1?'':'es'} to reach 75%.`}</div>
                </div>
                <div class="goal-item ${pct>=85?'achieved':'pending'}">
                    <div class="goal-header"><div class="goal-label">85% Excellence</div><div class="goal-badge ${pct>=85?'achieved':'pending'}">${pct>=85?'<i class="fas fa-check"></i> Achieved':`${need(85)} classes away`}</div></div>
                    <div class="goal-bar-wrap"><div class="goal-bar-track"><div class="goal-bar-fill" style="width:${Math.min(pct,100)}%;background:${pct>=85?'var(--success-color)':'var(--warning-color)'};"></div><div class="goal-bar-target" style="left:85%;"></div></div><div class="goal-bar-labels"><span>0%</span><span style="position:absolute;left:85%;transform:translateX(-50%);">85%</span><span>100%</span></div></div>
                    <div class="goal-desc">${pct>=85?'Excellent! Top-tier attendance bracket.':`Attend <strong>${need(85)}</strong> more class${need(85)===1?'':'es'} to reach 85%.`}</div>
                </div>
            </div></div>
        </div>

        <!-- FUTURE PROJECTIONS -->
        <div class="card" style="margin-bottom:24px;">
            <div class="card-header"><h3 class="card-title"><i class="fas fa-user-times" style="color:var(--danger-color);margin-right:8px;"></i>If You Miss Classes</h3><span class="card-subtitle">Projected drop</span></div>
            <div class="scenario-grid">${sCard('fa-minus-circle','#ef4444','Miss 1',miss(1),'Impact of one absence.')}${sCard('fa-calendar-times','#f59e0b','Miss 3',miss(3),'Three absences in a row.')}${sCard('fa-ban','#dc2626','Miss 5',miss(5),'Serious risk territory.')}</div>
        </div>
        <div class="card" style="margin-bottom:24px;">
            <div class="card-header"><h3 class="card-title"><i class="fas fa-user-check" style="color:var(--success-color);margin-right:8px;"></i>If You Keep Attending</h3><span class="card-subtitle">Projected gain</span></div>
            <div class="scenario-grid">${sCard('fa-calendar-check','#22c55e','Next 5',gain(5),'Stay consistent.')}${sCard('fa-star','#3b82f6','Next 10',gain(10),'Strong two-week run.')}</div>
        </div>

        <div class="future-actions-row">
            <button class="btn btn-primary" onclick="navigateToPage('calendar')"><i class="fas fa-calendar-alt"></i> Open Calendar</button>
        </div>`;
}

// ─── Analytics (admin only — student uses loadFutureOutcomesPage) ─────────────
function loadAnalyticsPage() {
    const att = mockData.attendanceRecords.filter(r => r.student_id === currentUser.id);
    const t=att.length, p=att.filter(r=>r.status==='present').length, l=att.filter(r=>r.status==='late').length, a=att.filter(r=>r.status==='absent').length;
    const oPct = t>0?((p/t)*100).toFixed(1):0;
    const cids = Array.from(new Set(att.map(r=>r.class_id)));
    const subHtml = cids.map(cid=>{ const cls=mockData.classes.find(c=>c.id===cid)||{course_name:'Class'}; const r=att.filter(x=>x.class_id===cid); const sp=r.filter(x=>x.status==='present').length,sl=r.filter(x=>x.status==='late').length,sa=r.filter(x=>x.status==='absent').length; const pct=r.length>0?((sp/r.length)*100).toFixed(1):0; const bc=pct>=75?'var(--success-color)':pct>=50?'var(--warning-color)':'var(--danger-color)'; return `<div style="padding:12px;border:1px solid var(--gray-100);border-radius:8px;margin-bottom:12px;"><div style="display:flex;justify-content:space-between;margin-bottom:8px;"><div style="font-weight:600">${cls.course_name}</div><div style="font-weight:600;color:var(--primary-color)">${pct}%</div></div><div style="display:flex;gap:8px;font-size:12px;margin-bottom:8px;"><div style="color:var(--success-color)"><i class="fas fa-check"></i> ${sp}</div><div style="color:var(--warning-color)"><i class="fas fa-clock"></i> ${sl}</div><div style="color:var(--danger-color)"><i class="fas fa-times"></i> ${sa}</div></div><div style="background:var(--gray-100);height:6px;border-radius:3px;overflow:hidden;"><div style="background:${bc};height:100%;width:${pct}%;"></div></div></div>`; }).join('');
    pageContent.innerHTML = `<div class="card"><div class="card-header"><h3 class="card-title">Attendance Analytics</h3></div><div class="card-body"><h4 style="margin-bottom:16px">Overall</h4><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:24px;"><div class="stat-card primary"><div class="stat-header"><div class="stat-icon primary"><i class="fas fa-percentage"></i></div></div><div class="stat-value">${oPct}%</div><div class="stat-label">Overall %</div></div><div class="stat-card success"><div class="stat-header"><div class="stat-icon success"><i class="fas fa-check"></i></div></div><div class="stat-value">${p}</div><div class="stat-label">Present</div></div><div class="stat-card warning"><div class="stat-header"><div class="stat-icon warning"><i class="fas fa-clock"></i></div></div><div class="stat-value">${l}</div><div class="stat-label">Late</div></div><div class="stat-card danger"><div class="stat-header"><div class="stat-icon danger"><i class="fas fa-times"></i></div></div><div class="stat-value">${a}</div><div class="stat-label">Absent</div></div></div><h4 style="margin-bottom:16px">Subject-wise</h4>${subHtml||'<p class="text-gray">No data.</p>'}</div></div>`;
}

function loadLeavePage() {
    pageContent.innerHTML = `<div class="card"><div class="card-header"><h3 class="card-title">Leave Request</h3></div><form id="leaveForm" onsubmit="submitLeaveRequest(event)"><div class="form-group"><label>Class</label><select id="leaveClass" class="input" required><option value="">Select a class</option>${mockData.classes.map(cls=>`<option value="${cls.id}">${cls.course_name}</option>`).join('')}</select></div><div class="form-group"><label>Start Date</label><input type="date" id="startDate" class="input" required></div><div class="form-group"><label>End Date</label><input type="date" id="endDate" class="input" required></div><div class="form-group"><label>Reason</label><textarea id="reason" class="input" rows="4" placeholder="Enter reason" required></textarea></div><button type="submit" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Submit Request</button></form></div><div class="card"><div class="card-header"><h3 class="card-title">My Leave Requests</h3></div><div class="table-container"><table class="table"><thead><tr><th>Start</th><th>End</th><th>Reason</th><th>Status</th></tr></thead><tbody>${mockData.leaveRequests.filter(r=>r.student_id===currentUser.id).map(req=>`<tr><td>${new Date(req.start_date).toLocaleDateString()}</td><td>${new Date(req.end_date).toLocaleDateString()}</td><td>${req.reason}</td><td><span class="status-badge ${req.status}">${req.status}</span></td></tr>`).join('')}</tbody></table></div></div>`;
}
function loadUsersPage() {
    pageContent.innerHTML = `<div class="card"><div class="card-header"><h3 class="card-title">User Management</h3><button class="btn btn-primary"><i class="fas fa-plus"></i> Add User</button></div><div class="table-container"><table class="table"><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Actions</th></tr></thead><tbody>${mockData.users.map(u=>`<tr><td><div class="user-info"><img src="${u.avatar}" alt="${u.name}" class="user-avatar"><span>${u.name}</span></div></td><td>${u.email}</td><td><span class="status-badge ${u.role}">${u.role}</span></td><td><button class="btn btn-primary btn-sm"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button></td></tr>`).join('')}</tbody></table></div></div>`;
}
function loadClassesPage() {
    pageContent.innerHTML = `<div class="card"><div class="card-header"><h3 class="card-title">Class Management</h3><button class="btn btn-primary"><i class="fas fa-plus"></i> Add Class</button></div><div class="table-container"><table class="table"><thead><tr><th>Course</th><th>Faculty</th><th>Semester</th><th>Schedule</th><th>Actions</th></tr></thead><tbody>${mockData.classes.map(cls=>`<tr><td>${cls.course_name}</td><td>${cls.faculty_name}</td><td>${cls.semester}</td><td>${cls.schedule_time}</td><td><button class="btn btn-primary btn-sm"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button></td></tr>`).join('')}</tbody></table></div></div>`;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function markAttendance(classId) { _selectedClassId = classId; navigateToPage('attendance'); setTimeout(() => { loadAttendancePage(classId); }, 450); }
function markStudentStatus(studentId, status, event) {
    const row = document.getElementById('sai-' + studentId);
    if (row) row.querySelectorAll('.att-btn').forEach(b => b.classList.remove('active-att'));
    try { if (event && event.currentTarget) event.currentTarget.classList.add('active-att'); } catch(e) {}
    showToast('success', 'Status Updated', `Marked as ${status}`);
}
function saveAttendance()     { showToast('success','Attendance Saved','Attendance has been saved'); navigateToPage('dashboard'); }
function submitLeaveRequest(e){ e.preventDefault(); showToast('success','Leave Submitted','Your leave request has been submitted'); navigateToPage('dashboard'); }
function approveLeave(id)     { showToast('success','Leave Approved','Leave request approved'); loadDashboard(); }
function rejectLeave(id)      { showToast('warning','Leave Rejected','Leave request rejected'); loadDashboard(); }
function toggleSidebar()      { document.getElementById('sidebar').classList.toggle('active'); }
function toggleNotifications(){ notificationsPanel.classList.toggle('active'); }
function toggleTheme()        { document.body.classList.toggle('dark-theme'); showToast('info','Theme Changed','Theme updated'); }
function showLoading()        { loadingOverlay.classList.remove('hidden'); }
function hideLoading()        { loadingOverlay.classList.add('hidden'); }
function showToast(type, title, message) {
    const c = document.getElementById('toastContainer');
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    const icons = { success:'fa-check-circle', error:'fa-times-circle', warning:'fa-exclamation-triangle', info:'fa-info-circle' };
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
    #eventModal { display:none;position:fixed;inset:0;z-index:5000;align-items:center;justify-content:center; }
    #eventModal.active { display:flex; }
    .modal-backdrop { position:absolute;inset:0;background:rgba(0,0,0,0.45);backdrop-filter:blur(3px); }
    .modal-box { position:relative;background:white;border-radius:20px;padding:28px;width:92%;max-width:480px;max-height:90vh;overflow-y:auto;box-shadow:0 20px 40px rgba(0,0,0,0.2);animation:modalIn .25s ease; }
    @keyframes modalIn { from{transform:scale(0.92);opacity:0} to{transform:scale(1);opacity:1} }
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
    .today-classes-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;padding:4px 0 8px; }
    .today-class-card { border:1.5px solid var(--gray-200);border-radius:10px;padding:14px;cursor:pointer;transition:var(--transition);background:var(--gray-50); }
    .today-class-card:hover { border-color:var(--primary-color);background:rgba(59,130,246,0.04);box-shadow:0 2px 10px rgba(59,130,246,0.1); }
    .today-class-card.selected { border-color:var(--primary-color);background:rgba(59,130,246,0.06);box-shadow:0 2px 10px rgba(59,130,246,0.15); }
    .tc-time { font-size:11px;color:var(--gray-500);display:flex;align-items:center;gap:5px;margin-bottom:6px; }
    .tc-name { font-size:14px;font-weight:700;color:var(--gray-800);line-height:1.3;margin-bottom:3px; }
    .tc-sem  { font-size:11px;color:var(--gray-400);margin-bottom:8px; }
    .tc-action { font-size:12px;font-weight:600;color:var(--primary-color);display:flex;align-items:center;gap:5px; }
    .today-class-card.selected .tc-action { color:var(--success-color); }
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
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);