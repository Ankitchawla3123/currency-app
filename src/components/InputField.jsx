import React from 'react'

function InputField({
    label = "From",
    options = ['sad', 'asda'],
    amount=0,
    onamountchange,
    oncurrencychange,
    selectcurrency,
    disabledinput=false
}) {
    const handleKeyDown = (e) => {
        if (e.key === '-') {
            e.preventDefault(); // Prevent input of '-'
        }
    };
    return (
        <div className=' w-5/6 pt-2 pl-4 h-28 border-solid border-2 border-black flex  pr-5 gap-2'>
            <div className=' flex-1 pr-3 '>
                <label className='text-xl text-black/50'>
                    {label}
                </label>
                <input min="0" type="number" className='border w-full border-black rounded h-9 mt-2'
                value={amount}
                onChange={(e)=>onamountchange && onamountchange(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={disabledinput}

                />

            </div>
            <div className=''>
                <label className='text-xl  text-black/50'>
                    C-type
                </label>
    
                <select className='border border-black rounded h-9 block mt-2' value={selectcurrency} 
                onChange={(e)=>oncurrencychange && oncurrencychange(e.target.value)}
                >
                    {options.map((val, index) => (
                        <option key={index} value={val}>{val}</option>
                    ))}
                </select>
            </div>

        </div>
    )
}

export default InputField