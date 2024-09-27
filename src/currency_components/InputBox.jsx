import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency="usd",
    currencyOption=[],
    amountDisable=false,
    currencyDisable=false,

    className=""
}) {
    const amountInputId=useId();
     
    return (
        <div className={` bg-slate-100 rounded flex border border-solid
        border-slate-300 opacity-85 ${className} `}>
           <div className='w-1/2' >
               <label htmlFor={amountInputId} className=' text-black/40 
                    mb-2 inline-block'>
                          {label}
                </label>
               <input
                   id={amountInputId}
                   type="number"
                   min={0}
                   placeholder='Amount'
                   className=' py-1 bg-transparent w-full'  
                   disabled={amountDisable}
                   value={amount}
                   onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}  //checking for existence before firing
               />
           </div>   
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} 
                    disabled={currencyDisable}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" >
                    
                    {currencyOption.map((currency)=>{
                        return <option key={currency} value={currency}>
                            {currency}
                        </option>
                    })}
                
                </select>

            </div>
        </div>
    )
}

export default InputBox
