import Button from '../ui/Button';

const FloatingCompareBar = () => {
  return (
    <div className='fixed bottom-4 left-1/2 z-50 max-w-3xl -translate-x-1/2 w-[45%]'>
      <div className='flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xl'>
        <div className='flex items-center gap-3'>
          <div className='flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700'>
            2
          </div>
          <span className='font-medium text-slate-800'>
            College Selected
          </span>
        </div>

        <Button>Compare Now</Button>
      </div>
    </div>
  )
}

export default FloatingCompareBar
