import { useState, useEffect } from 'react'
import useCurrencyinfo from './hooks/useCurrencyinfo';
import InputField from './components/InputField';
import { parse } from 'postcss';



function App() {
  const [inputval,setinputval]=useState(1);
  const [outputval,setoutputval]=useState(0)
  let [from,setfrom]=useState('usd');
  const [to,setto]=useState('inr');

  let data=useCurrencyinfo(from);
  // console.log()

  // console.log(inputval*parseInt(data[to]));
  // console.log(outputval);
  function inputvaluechange(value){
    // console.log(parseFloat(value))
    let valueact=parseFloat(value)
    if(!isNaN(valueact)){
      setinputval(valueact)
      console.log(inputval)
      setoutputval(valueact*parseFloat(data[to]))
      // console.log(outputval)
    }
    else{
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
}, [ data, to]);


  return (
    <>
    <div className=" mt-5 flex flex-col justify-between items-center">
      <div className='text-6xl self-center'>Currency <br /> Convertor</div>
      <InputField
      label='From'
  options={Object.keys(data)}
  selectcurrency={from}
  amount={inputval}
  onamountchange={(amount) => inputvaluechange(amount)}
  oncurrencychange={(currency) => Cchange(currency)}
   // Call Cchange here
/>


<InputField
label='To'
  options={Object.keys(data)}
  selectcurrency={to}
  amount={outputval}
  onamountchange={(amount) => setoutputval(amount)}
  oncurrencychange={(currency) => setto(currency)}
  disabledinput={true}
/>

    </div>
    
    </>
  )
}

export default App
