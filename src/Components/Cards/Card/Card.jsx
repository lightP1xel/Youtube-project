import React from 'react'
import style from './Card.module.css'
import {FcBusinessman} from 'react-icons/fc'


const Card = ({ item }) => {  
  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <div className={style.frontCard}>
          <img src={item.snippet.thumbnails.high.url} alt='video logo' className={style.cardLogo}/>
          <div><FcBusinessman/>{item.snippet.channelTitle}</div>
          <div>{item.snippet.publishedAt}</div>
          <div>{item.snippet.title}</div>
        </div>
        <div className={style.backCard}>
          <div>{item.snippet.description}</div>
          <a href={`https://www.youtube.com/video/${item.id.videoId}`} className={style.cardLink}>Watch this video</a>
        </div>
      </div>
    </div>
  )
}

export default Card