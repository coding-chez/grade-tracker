import { useState } from 'react'

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState('')
  const [grade, setGrade] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const trimmedName = name.trim()
    const numericGrade = Number(grade)

    if (!trimmedName || grade === '') return
    if (numericGrade < 0 || numericGrade > 100) return

    onAdd({
      name: trimmedName,
      grade: numericGrade,
    })

    setName('')
    setGrade('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 rounded-xl bg-white p-5 shadow">
      <h2 className="mb-4 text-lg font-semibold">Add Student</h2>

      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student name"
          className="rounded-lg border border-stone-200 px-3 py-2 outline-none focus:border-[#8B1C2C]"
        />

        <input
          type="number"
          min="0"
          max="100"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="Grade"
          className="rounded-lg border border-stone-200 px-3 py-2 outline-none focus:border-[#8B1C2C]"
        />
      </div>

      <button
        type="submit"
        className="mt-3 rounded-lg bg-[#8B1C2C] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
      >
        Add Student
      </button>
    </form>
  )
}

export default AddStudentForm