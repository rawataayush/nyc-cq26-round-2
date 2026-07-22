import WeightSidebar from '../components/compare/WeightSidebar';
import SearchFilter from '../components/compare/SearchFilter'
import CollegeCard from '../components/compare/CollegeCard'
import FloatingCompareBar from '../components/compare/FloatingCompareBar'
import { colleges } from '../data/colleges.js';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Compare = () => {
    const [selectedColleges, setSelectedColleges] = useState([]);
    const [searchParams] = useSearchParams();
    const searchFromUrl = searchParams.get('search') ?? '';
    const [searchQuery, setSearchQuery] = useState(searchFromUrl);

    useEffect(() => {
        setSearchQuery(searchFromUrl);
    }, [searchFromUrl]);

    const normalizedSearchQuery = searchQuery.trim().toLowerCase();
    const filteredColleges = useMemo(() => {
        if (!normalizedSearchQuery) {
            return colleges;
        }

        return colleges.filter((college) => {
            const searchFields = [
                college.name,
                college.shortName,
                college.location,
                college.type,
                college.admissions.exam,
                ...college.branches,
            ];

            return searchFields.some((field) =>
                field.toLowerCase().includes(normalizedSearchQuery)
            );
        });
    }, [normalizedSearchQuery]);

    const handleSelectCollege = (id) => {
        setSelectedColleges((prev) => prev.includes(id) ? prev.filter((collegeId) => collegeId !== id) : [...prev, id])
    }


    return (
    <>
        <main className='mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 md:flex-row md:px-8'>
        <WeightSidebar />

        <section className='flex w-full flex-col gap-6 pb-28'>
            <SearchFilter search={searchQuery} onSearchChange={setSearchQuery} />

            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-semibold'>
                    {normalizedSearchQuery
                        ? `Showing ${filteredColleges.length} match${filteredColleges.length === 1 ? '' : 'es'}`
                        : 'Showing Top Ranked'}
                </h2>

                <span className='rounded bg-slate-100 px-3 py-1 text-sm'>
                    CCS Verified Data
                </span>
            </div>
            {filteredColleges.map((college) => (
                <CollegeCard
                    key={college.id}
                    college={college}
                    selected={selectedColleges.includes(college.id)}
                    onSelect={handleSelectCollege}
                />
            ))}
            {filteredColleges.length === 0 && (
                <p className='rounded-xl border border-slate-200 bg-white px-4 py-6 text-center text-slate-500 shadow'>
                    No colleges found for "{searchQuery}".
                </p>
            )}
        </section>
        </main>
        <FloatingCompareBar selectedCount={selectedColleges.length}/>
    </>
    )
}

export default Compare;