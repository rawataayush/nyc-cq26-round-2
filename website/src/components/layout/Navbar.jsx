const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 border-b border-slate-200 bg-white backdrop:blur-md'>
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-12">
                <a 
                    href="#"
                    className='flex items-center gap-2'
                >
                    <i className="ri-graduation-cap-fill text-3xl text-blue-700"></i>

                    <span className='text-2xl font-black tracking-tight text-slate-900'>
                        CCS
                    </span>
                </a>

                <nav className='hidden items-center gap-8 md:flex'>
                    <a href="#" className='border-b-2 border-blue-700 pb-1 font-semibold text-blue-700'>Compare</a>
                    <a href="#" className='font-medium text-slate-600 transition hover:text-blue-700'>Methodology</a>
                    <a href="#" className='font-medium text-slate-600 transition hover:text-blue-700'>About</a>
                </nav>
            </div>  
        </div>
    )
}

export default Navbar