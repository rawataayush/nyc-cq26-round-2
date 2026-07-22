const CollegeCard = ({ college, selected, onSelect}) => {
  return (
    <article className='relative flex flex-col gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow transition hover:border-blue-300 md:flex-row'>
      
      {/* Checkbox */}
      <div className='absolute right-5 top-5'>
        <input 
          type="checkbox"
          checked={selected}
          onChange={() => onSelect(college.id)}
          className='h-5 w-5 cursor-pointer accent-blue-700'
          />
      </div>


      {/* Image */}
      <div className='h-40 overflow-hidden rounded-xl md:h-36 md:w-56'>
        <img 
          src={college.image} 
          alt={college.name} 
          className="h-full w-full object-cover"
          />
      </div>

      {/* Content */}
      <div className='flex flex-1 flex-col justify-between'>
        <div>
        <div className='flex items-center gap-2'>
          <h2 className='text-2xl font-bold'>{college.name}</h2>
          <i className="ri-verified-badge-fill text-blue-700"></i>
        </div>

        <p className='mt-2 text-slate-500'>{college.location}</p>

        <div className='mt-4 flex flex-wrap gap-2'>{college.branches.map((branch) => (
          <span 
          key={branch}
          className='rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700'>{branch}</span>))}
          </div>
      </div>

      <div className='mt-6 flex flex-col gap-4 border-t pt-5 md:flex-row md:items-end md:justify-between'>
        <div className='flex gap-8'>
          <div>
            <p className='text-xs uppercase tracking-wide text-slate-400'>CCS Score</p>
            <h3 className='text-2xl font-bold text-blue-700'>
            {college.score}
          </h3>
          </div>

            <div>
              <p className='text-xs uppercase tracking-wide text-slate-400'>Avg Package</p>
            </div>

            <h3 className='text-2xl font-bold text-blue-700'>
              {college.package}
            </h3>
        </div>
      </div>

      <button className='flex items-center gap-1 font-medium text-blue-700 transition hover:underline'>View Details <i className='ri-arrow-right-line'></i></button>
      </div>
    </article>
  )
}

export default CollegeCard
