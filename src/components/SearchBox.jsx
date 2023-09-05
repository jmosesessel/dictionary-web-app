import React from 'react'
import SearchIcon from '../assets/search-icon.svg'

function SearchBox({isDarkMode}) {
  return (
    <>
        <section className={`${ isDarkMode ? 'bg-d-lighter-black' : 'bg-d-light-grey'}  w-full mb-6 flex justify-between gap-2 px-6 pt-[0.88rem] pb-[0.95rem] rounded-2xl`}>
            <input className={`${ isDarkMode ? ' bg-d-lighter-black text-d-white' : 'bg-d-light-grey'}  w-[90%] font-[700] text-base border-none focus:outline-none focus:border-none focus-visible:ring-0`} type="text" />
            <img src={SearchIcon} alt="search icon" />
        </section>
    </>
  )
}

export default SearchBox