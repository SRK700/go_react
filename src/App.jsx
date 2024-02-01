import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ItemsList from './components/itemList';
import ItemFormFind from './components/ItemFormFind';
import SignIn from './components/SignIn';
import AddItems from './components/AddItem';
import StudentsList from './components/subjectsList';
import Student from './components/Student'
import './App.css';
import StudentFormFind from './components/StudentFormFind';
import SubjectsList from './components/subjectsList';
import Subject from './components/subjects';
import SubjectFormFind from './components/SubjectFormFind';
import Register from './components/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    /* Add the Router component to the App */
    <Router>
      <div>
        <h3>My Project</h3>
        <nav>
          <Link to="/">หน้าหลัก</Link>
          <hr />
          {!isLoggedIn && (
            <Link to="/signin">เข้าสู่ระบบ</Link>
          )}
          <br />
          {!isLoggedIn && (
            <Link to="/register">สมัคสามชิก</Link>
          )}
        </nav>

        {/* Add the Routes component to the App */}
        {/* <> xxx </>คือตำแหน่งที่ข้อมูลจาก Component คือค่ามา */}
        <Routes>
          <Route path="/signin" element={<SignIn onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <>
              <div className="card">
                {isLoggedIn ? (
                  <>
                    <p>ยินดีต้อนรับ</p>
                    <p><ItemsList /></p>
                    <hr />
                    <p><ItemFormFind /></p>

                  </>

                ) : (
                  <p>กรุณา Login </p>
                )}
              </div>
              <div className="card">
                <h2>Items</h2>
                <AddItems />
              </div>

              <div className="card">
                <h2>Students</h2>
                <StudentsList />
                <Student />
                <StudentFormFind />
              </div>

              <div className="card">
                <h2>Subjects</h2>
                <SubjectsList />
                <Subject />
                <SubjectFormFind />
              </div>
            </>

          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;