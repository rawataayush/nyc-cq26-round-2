const Footer = () => {
    return (
        <footer className='mt-24 border-t border-slate-200 bg-slate-100'>
            <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 py-8 md:flex-row md:px-8 lg:px-12'>
                <div className='flex flex-col items-center gap-4 md:items-start'>
                    <div className='flex items-center gap-2 text-2xl font-bold text-slate-500'>
                        <i className="ri-graduation-cap-fill text-3xl"></i>
                        <span>CCS</span>
                    </div>

                    
                </div>
                <p className='max-w-md text-center text-sm text-slate-500 md:text-left'>
                        © 2026 CCS - Free, transparent college comparison tool for students.
                    </p>
            </div>
        </footer>
    )
}

export default Footer;