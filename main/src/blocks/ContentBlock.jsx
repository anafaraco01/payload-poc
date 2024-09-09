import React from 'react'
import style from '../styles/contentBlock.module.scss'
import commonStyle from '../styles/common.module.scss'

export default function ContentBlock({ lightHeading, boldHeading, paragraph1, paragraph2, paragraphAlignment, theme }) {
  const getMarginStyle = () => {
    switch (paragraphAlignment) {
      case 'left':
        return { marginRight: '240px' };
      case 'right':
        return { marginLeft: '240px' };
      case 'justified':
      default:
        return {};
    }
  };
  return (
    <div className={`${commonStyle.container} ${theme === 'light' ? commonStyle.whiteBackground : ''}`}>
      <div className={commonStyle.subContainer} style={getMarginStyle()}>
        <div className={commonStyle.headings}>
          <h1 className={commonStyle.lightHeading}>{lightHeading}</h1>
          <h2>{boldHeading}</h2>
        </div>
        <p className={commonStyle.text}>{paragraph1}</p>
        {paragraph2 && (
        <p className={commonStyle.text}>{paragraph2}</p>
      )}
      </div>
    </div>
  )
}
