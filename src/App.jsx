import { useState } from 'react'
import Header from './components/Header.jsx'
import StudentList from './components/StudentList.jsx'
import AddStudentForm from './components/AddStudentForm.jsx'

const startingStudents = [
  { id: 1, name: 'Ana Cruz', grade: 92 },
  { id: 2, name: 'Ben Lim', grade: 85 },
  { id: 3, name: 'Cy Tan', grade: 71 },
]

function App() {
  const [students, setStudents] = useState(startingStudents)

  function handleDelete(id) {
    setStudents((current) => current.filter((s) => s.id !== id))
  }

  function handleAdd(student) {
    setStudents((current) => [
      ...current,
      {
        ...student,
        id: Date.now(),
      },
    ])
  }

  const count = students.length
  const average =
    count === 0
      ? 0
      : Math.round(
          students.reduce((sum, s) => sum + s.grade, 0) / count
        )

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <main className="mx-auto max-w-xl px-6 py-10">
        <Header count={count} average={average} />
        <AddStudentForm onAdd={handleAdd} />
        <StudentList students={students} onDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App