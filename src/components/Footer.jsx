import React from 'react'

function Footer({isDarkMode}) {
  return (
    <>
        <section className='border-t-[1px] border-t-d-grey my-8 flex flex-col lg:flex-row gap-2 pt-6 text-sm'>
            <h2 className="underline text-d-deep-grey">Source</h2>
            <a href="#" className={`${isDarkMode ? 'text-d-white' : ''}`}>https://en.wiktionary.org/wiki/keyboard</a>
        </section>
    </>
  )
}

export default Footer