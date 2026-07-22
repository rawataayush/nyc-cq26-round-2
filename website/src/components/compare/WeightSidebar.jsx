import { useState } from 'react';

const WeightSidebar = () => {
  const [weights, setWeights] = useState({
    placementsROI: 25,
    peerQuality: 10,
    fees: 10,
    campusHostelLife: 10,
    academics: 15,
    cultureEvents: 5,
    location: 5,
    facultyAluminiNetwork: 10,
    safety: 10,
  });

  const handleChange = (key, value) => {
    setWeights((prev) => ({
      ...prev, [key]: Number(value),
    }));
  };

  const resetWeights = () => {
    setWeights({
      placementsROI: 25,
      peerQuality: 10,
      fees: 10,
      campusHostelLife: 10,
      academics: 15,
      cultureEvents: 5,
      location: 5,
      facultyAluminiNetwork: 10,
      safety: 10,
    });    
  }
  
  const parameters = [
      { key: 'placementsROI', label: 'Placements & ROI'},
      { key: 'peerQuality', label: 'Peer Quality'},
      { key: 'fees', label: 'Fees'},
      { key: 'campusHostelLife', label: 'Campus and Hostel Life'},
      { key: 'academics', label: 'Academics'},
      { key: 'cultureEvents', label: 'Culture and Events'},
      { key: 'location', label: 'Location'},
      { key: 'facultyAluminiNetwork', label: 'Faculty Alumini Network'},
      { key: 'safety', label: 'Safety'},
    ];

  return (
    <aside className='h-fit w-full rounded-xl border border-slate-200 bg-white p-6 md:w-80 shadow'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold'>Your Weighting</h2>

        <p className='mt-2 text-sm text-slate-500'>
          Adjust parameters to rank colleges acording to your prioritites.
        </p>
      </div>
      
      <div className='space-y-6'>
        {parameters.map((parameter) => (
          <div key={parameter.key}> 
            <div className='mb-2 flex justify-between'>
              <label className='font-medium'>{parameter.label}</label>

              <span className='font-semibold text-blue-700'>
                {weights[parameter.key]}%
              </span>
            </div>

              <input 
                type="range"
                min='0'
                max='100'
                value={weights[parameter.key]}
                onChange={(e) => handleChange(parameter.key,  e.target.value)}
                className='w-full'
              />
          </div>
        ))}
        <div>
          <button 
            onClick={resetWeights}
            className='mt-8 w-full rounded-lg border border-slate-300 bg-slate-100 py-2 font-medium transition hover:bg-slate-200'>
            Reset Weights
          </button>
      </div>
      </div>
    </aside>
  )
}

export default WeightSidebar;