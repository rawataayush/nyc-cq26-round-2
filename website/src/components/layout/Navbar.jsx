import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const navLinks = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: "Compare",
            path: 'compare',
        },
        {
            name: "Methodology",
            path: '/methodology',
        },
        {
            name: 'About',
            path: '/about',
        }
    ]
    return (
        <header className='sticky top-0 z-50 border-b border-slate-200 bg-white backdrop:blur-md'>
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-12">
                <Link 
                    to="/"
                    className='flex items-center gap-2'
                >
                    <i className="ri-graduation-cap-fill text-3xl text-blue-700"></i>

                    <span className='text-2xl font-black tracking-tight text-slate-900'>
                        CollegeIndex
                    </span>
                </Link>

                <nav className='hidden items-center gap-8 md:flex'>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name} 
                            to={link.path}
                            className={({isActive}) => `pb-1 text-sm font-medium transition-colors ${isActive ? 'border-b-2 border-blue-700 text-blue-700' : 'text-slate-600 hover:text-blue-700'}`}
                            >
                                {link.name}
                            </NavLink>
                    ))}
                </nav>

                <button className='text-3xl text-slate-700 md:hidden'>
                    <i className="ri-menu-line"></i>
                </button>
            </div>  
        </header>
    )
}

export default Navbar