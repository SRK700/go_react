import React from 'react';
import StudentsList from './components/StudentList/index';
import SubjectsList from './components/subjectsList/index';
import ItemList from './components/itemList/index';
import AddItems from './components/AddItem/index';
import Item from './components/item';
import ItemFormFind from './components/ItemFormFind';
import Student from './components/Student';
import StudentFormFind from './components/StudentFormFind';
import Subject from './components/subjects';
import SubjectFormFind from './components/SubjectFormFind';

function App() {
  return (
    <div className="app">
      <h1>My App</h1>

      <div className="card">
        <h2>Items</h2>
        <ItemList />
        <Item />
        <ItemFormFind />
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
    </div>
  );
}

export default App;
