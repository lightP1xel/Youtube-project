import React from 'react'
import style from './Pagination.module.css'

const Pagination = ({ itemsPerPage, currentPage, data, paginate}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className={style.wrapper}>
      <div>
        {pageNumbers.map((item) => 
          <button className={currentPage === item ? `${style.active}` : `${style.pageItem}`} onClick={() => paginate(item)} key={item}>{item}</button>
        )}
      </div>
    </div>
  )
}

export default Pagination