import React, { useState, useEffect } from 'react'
import Pagination from '../Pagination/Pagination'
import Card from './Card/Card'
import style from './Cards.module.css'

const Cards = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(4)
  const API_KEY =
    `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBRtrBqp_aLncx35n3_wGvzEXNKSIGc_s8&type=video&part=snippet&maxResults=15&q=js`

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(API_KEY)
      const jsonData = await fetchData.json()
      setData(jsonData.items)
    }
    getData()
  }, [API_KEY])
  
  const paginate = (currentPage) => {
    setCurrentPage(currentPage)
  }

const indexOfLastElem = currentPage*itemsPerPage
const indexOfFirstElem = currentPage*itemsPerPage - itemsPerPage

const slicedData = data.slice(indexOfFirstElem, indexOfLastElem )

  return (
    <div>
      <div className={style.wrapper}>
        {slicedData?.map(item => <Card item={item} />)}
      </div>
      <Pagination itemsPerPage={itemsPerPage} currentPage={currentPage} data={data} paginate={paginate}/>
    </div>
  )
}

export default Cards