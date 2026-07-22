import Button from '../ui/Button';

const FloatingCompareBar = () => {
  return (
    <div className='fixed inset-x-0 bottom-4 px-4 z-50'>
      <div className='mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl sm:flex-row sm:items-center sm:justify-between'>

        {/* Left */}
        <div className='flex items-center gap-3'>
          <div className='flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700 text-lg'>
            2
          </div>
          <span className='font-medium text-slate-800'>
            College Selected
          </span>
        </div>

        <Button className='w-full sm:w-auto'>Compare Now</Button>
      </div>
    </div>
  )
}

export default FloatingCompareBar;