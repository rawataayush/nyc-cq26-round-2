const Navbar = () => {
    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-16 px-4 md:px-10">
            <div className="absolute top-0 right-0 h-150 w-150 translate-x-1/4 -translate-y-1/2 rounded-full bg-blue-100/40"></div>

            <div className="relative z-10 mx-auto max-w-4xl text-center">
                <span className="mb-6 inline-block rounded-full bg-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
                    For JEE / JoSAA Counselling 2026
                </span>

                <h1 className="mb-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">Pick the right college,
                    <br className="hidden md:block" />
                    <span>
                        {" "}your priorities, your score.
                    </span>
                </h1>

                <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-600">
                    CCS is not a ranking, It's a personalized comparison tool. Tell us what matters most across 11 parameters, and we compute a College
                    Composite Score from verified student surveys-live, transparent, and
                    free.
                </p>
            </div>
        </section>
    )
}

export default Navbar