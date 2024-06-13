import { useState } from 'react'
import useCurrencyinfo from './hooks/useCurrencyinfo';


function App() {
  const [inputval,setinputval]=useState(10);
  const [outputval,setoutputval]=useState(0)
  let [from,setfrom]=useState('usd');
  const [to,setto]=useState('inr');

  const data=useCurrencyinfo(from);
  console.log(data[to]);
  // console.log(inputval*parseInt(data[to]));
  // console.log(outputval);

  return (
    <>
      <div className="text-xl">Yo</div>
      <button >count </button>
    </>
  )
}

export default App
