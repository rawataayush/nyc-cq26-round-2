import WeightSidebar from '../components/compare/WeightSidebar';
import SearchFilter from '../components/compare/SearchFilter'
import CollegeCard from '../components/compare/CollegeCard'
import FloatingCompareBar from '../components/compare/FloatingCompareBar'
import { colleges } from '../data/colleges.js';

const Compare = () => {
    return (
    <>
        <main className='mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 md:flex-row md:px-8'>
        <WeightSidebar />

        <section className='flex w-full flex-col gap-6 pb-28'>
            <SearchFilter />

            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-semibold'>Showing Top Ranked</h2>

                <span className='rounded bg-slate-100 px-3 py-1 text-sm'>
                    CCS Verified Data
                </span>
            </div>
            {colleges.map((college) => (
                <CollegeCard
                    key={college.id}
                    college={college}
                />
            ))}
        </section>
        </main>
        <FloatingCompareBar />
    </>
    )
}

export default Compare;