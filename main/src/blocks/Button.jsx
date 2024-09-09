import React from 'react'
import commonStyle from '../styles/common.module.scss'
import style from '../styles/button.module.scss'
import { PButton } from '@porsche-design-system/components-react/ssr'

export default function Button({buttonLabel, buttonLink, icon, alignment, theme}) {
    const handleClick = () => {
        window.location.href = `/${buttonLink}`;
    };

    const getMarginStyle = () => {
        switch (alignment) {
          case 'left':
            return { marginRight: '240px' };
          case 'right':
            return { marginLeft: '240px' };
        }
      };
  return (
    <div className={`${style.container} ${theme === 'light' ? style.whiteBackground : ''}`}>
            <div className={commonStyle.subContainer} style={getMarginStyle()}>
            <PButton theme={theme} variant="secondary" icon={icon} onClick={handleClick}>{buttonLabel}</PButton>
        </div>
    </div>
  )
}
