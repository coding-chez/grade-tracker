function Header({ count, average }) {
  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold text-[#8B1C2C]">BSIT 2-A Grades</h1>
      <p className="text-stone-500">React JS Industry Elective</p>
      <p className="mt-2 text-sm text-stone-500">
        {count} students · Average: {average}
      </p>
    </header>
  )
}

export default Header