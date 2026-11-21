function StudentRow({ id, name, grade, onDelete }) {
  return (
    <li className="flex items-center gap-3 border-b border-stone-200 px-5 py-3">
      <span className="flex-1">{name}</span>
      <b className="text-lg">{grade}</b>
      <button
        type="button"
        onClick={() => onDelete(id)}
        className="rounded-lg border border-stone-200 px-3 py-1 text-sm text-stone-600 hover:bg-stone-100"
      >
        Delete
      </button>
    </li>
  )
}

export default StudentRow