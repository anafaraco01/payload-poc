import style from '../styles/header.module.scss'
import React from 'react'
import Image from 'next/image'
import Navigation from './Navigation'

export default function Header({headingFirstLine, headingSecondLine, headingSize, svg, background}) {
    return (
    
    <div className={style.container}>
        {background.mimeType.startsWith('video') ? (
            <video className={style.background} autoPlay loop muted playsInline>
                <source src={background.url} type={background.mimeType} />
            </video>     
        ) : (
            <Image className={style.background} src={background.url} width={background.width} height={background.height} alt={background.alt} />
        )}
        <div className={style.content}>
            <h1 className={style.heading} style={{ fontSize: headingSize }}>{headingFirstLine}</h1>
            {headingSecondLine && (
                    <h1 className={style.heading} style={{ fontSize: headingSize }}>{headingSecondLine}</h1>
                )}
            <Image className={style.svg} src={svg.url} width={svg.width} height={svg.height} alt={svg.alt} />
        </div>
    </div>
  )
}
