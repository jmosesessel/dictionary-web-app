import React from 'react'

function WordNotFound( ErrorData) {
  return (
    <>
        <section className='flex flex-col gap-11 mt-[8.25rem] justify-center items-center p-1 text-lg'>
                <h3 className='text-[4rem]'>😕</h3>
                <h2 className={`${ErrorData.ErrorData[0].isDarkMode ? ' text-d-white': ''} font-semibold`}>{ ErrorData.ErrorData[0].errorTitle }</h2>  
                <p className=' text-center text-d-deep-grey'>{`${ErrorData.ErrorData[0].errorMsg} ${ErrorData.ErrorData[0].isErrorResolution}`  }</p>
            
        </section>   
    </>
  )
}

export default WordNotFound