import React, { useState } from 'react'
import { InputBox } from './currency_components'
import useCurrencyInfo from './Currency_hooks/useCurrencyInfo'

function Currency_conv() {
    const [amount,setAmount]=useState(0);
    const [from,setFrom]= useState("usd")
    const [to,setTo]    = useState("inr")
    const [convertedAmount,setConvertedAmount]=useState(0);
    const currencyInfo =useCurrencyInfo(from);
    const options=Object.keys(currencyInfo)

// swap functionality
    function swap(){
        let temp=from;let tempAmount=convertedAmount;
        setFrom(to);
        setTo(temp);
        setConvertedAmount(amount)
        setAmount(tempAmount)

    }

    const convert=()=>(setConvertedAmount(amount*currencyInfo[to]));

    return (
        <>
        <div className=' flex justify-center items-center w-screen h-svh' 
        style={{backgroundImage:`url('https://images.pexels.com/photos/1006060/pexels-photo-1006060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}>
            
           <div className=' border border-gray-200 p-8 rounded-xl backdrop-blur-sm bg-white/3'>
             <form onSubmit={(e)=>{e.preventDefault();convert();}}>
                <div className=' mb-1'>
                    <InputBox
                    label="From"
                    amount={amount}
                    onAmountChange={(amount)=>{setAmount(amount)}}
                    selectCurrency={from}
                    onCurrencyChange={(currency)=>{setFrom(currency)}}
                    currencyOption={options}

                    />
                </div>
                <button type="button" onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-lime-200 hover:bg-emerald-300 px-2 py-0.5 z-10"
                >
                   swap
                </button>
                <div className='mt-2'>
                    <InputBox
                     label="To"
                     amount={convertedAmount}
                     selectCurrency={to}
                     onCurrencyChange={(currency)=>{setTo(currency)}}
                     currencyOption={options}  
                     amountDisable                  
                    />
                </div>

                <button type="submit" className="w-full  text-slate-500 px-4 py-3 rounded-lg mt-1 bg-lime-200 hover:bg-emerald-300">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                 </button>
            </form>
            </div>
        </div>
        </>
    )
}

export default Currency_conv
