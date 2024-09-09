import React from 'react'
import Image from 'next/image'
import style from '../styles/imageBlock.module.scss'
import commonStyle from '../styles/common.module.scss'

export default function ImageBlock({ image, imageAlignment }) {
    const getMarginStyle = () => {
        switch (imageAlignment) {
            case 'left':
                return { marginRight: '130px' , width: '90%'};
            case 'right':
                return { marginLeft: '130px', width: '90%' };
            case 'fullWidth':
            default:
                return {};
        }
    };
    return (
        <div className={`${commonStyle.container} ${style.background}`}>
            <div className={commonStyle.subContainer}>
                <Image style={getMarginStyle()} src={image.url} width={image.width} height={image.height} alt={image.alt} />
            </div>
        </div>
    )
}
