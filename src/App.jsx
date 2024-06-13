import { useState, useEffect } from 'react'
import useCurrencyinfo from './hooks/useCurrencyinfo';
import InputField from './components/InputField';
import { parse } from 'postcss';



function App() {
  const [inputval, setinputval] = useState(1);
  const [outputval, setoutputval] = useState(0)
  let [from, setfrom] = useState('usd');
  const [to, setto] = useState('inr');

  let data = useCurrencyinfo(from);
  // console.log()

  // console.log(inputval*parseInt(data[to]));
  // console.log(outputval);
  function inputvaluechange(value) {
    // console.log(parseFloat(value))
    let valueact = parseFloat(value)
    if (!isNaN(valueact)) {
      setinputval(valueact)
      console.log(inputval)
      setoutputval(valueact * parseFloat(data[to]))
      // console.log(outputval)
    }
    else {
      setinputval('')
      setoutputval(0)
    }
  }
  function Cchange(currency) {
    setfrom(currency);

  }


  useEffect(() => {
    if (!isNaN(inputval) && data[to]) { // Check if data[to] exists and inputval is a valid number
      setoutputval(inputval * parseFloat(data[to]));
    } else {
      setoutputval(0);
    }
  }, [data, to]);

  function swap(){
    setfrom(to)
    setto(from)
    // setinputval(outputval);
  }


  return (
    <>
      <div className=" mt-5 flex flex-col items-center h-screen gap-28 sm:gap-20">

        <div className='text-7xl self-center sm:hidden'>Currency <br /> Converter</div>
        <div className='hidden sm:block sm:text-7xl'>Cuurrency  <br /> Converter</div>
        <div className=' items-center h-auto w-88 flex flex-col gap-2 relative sm:w-2/5 sm:items-center'>
          <InputField
            label='From'
            options={Object.keys(data)}
            selectcurrency={from}
            amount={inputval}
            onamountchange={(amount) => inputvaluechange(amount)}
            oncurrencychange={(currency) => Cchange(currency)}
          />

          {/* Swap button */}
          <button
            className='absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 border-solid border-2 border-black z-10  buttonclass text-2xl sm:text-2xl font-semibold'
            onClick={swap}
          >
            Swap
          </button>

          <InputField 
            label='To'
            options={Object.keys(data)}
            selectcurrency={to}
            amount={outputval}
            onamountchange={(amount) => setoutputval(amount)}
            oncurrencychange={(currency) => setto(currency)}
            disabledinput={true}
            cname={'bg-gray-200 font-semibold	'}
          />
        </div>



      </div>

    </>
  )
}

export default App
