import React from 'react'
import Image from 'next/image'
import style from '../styles/twoColumnsBlock.module.scss'
import commonStyle from '../styles/common.module.scss'
import { PButton } from '@porsche-design-system/components-react/ssr'


export default function TwoColumnsBlock({ lightHeading, boldHeading, paragraph1, paragraph2, image, direction, buttonLabel, buttonLink, icon, theme }) {
  const handleClick = () => {
    window.location.href = `/${buttonLink}`;
  };

  const getMarginStyle = () => {
    switch (direction) {
      case 'default':
        return { marginRight: '40px' };
      case 'reverse':
        return { marginLeft: '40px' };
    }
  };
  return (
    <div className={`${commonStyle.container} ${theme === 'light' ? commonStyle.whiteBackground : ''}`}>
      <div className={`${style.subContainer} ${direction === 'reverse' ? style.reverse : ''}`}>
        <div className={style.columnOne} style={getMarginStyle()}>
          <div className={commonStyle.headings}>
            {lightHeading && (
              <h1 className={commonStyle.lightHeading}>{lightHeading}</h1>
            )}
            <h2>{boldHeading}</h2>
          </div>
          <p className={commonStyle.text}>{paragraph1}</p>
          <p className={commonStyle.text}>{paragraph2}</p>
          {buttonLabel && (
            <PButton className={style.button} theme="dark" variant="secondary" icon={icon} onClick={handleClick}>{buttonLabel}</PButton>
          )}
        </div>
        <div className={style.columnTwo}>
          <Image src={image.url} width={image.width} height={image.height} alt={image.alt} />
        </div>
      </div>
    </div>
  )
}
