import React from 'react'
import Image from 'next/image'
import style from '../styles/imageBlock.module.scss'
import commonStyle from '../styles/common.module.scss'

export default function ImageBlock({ image, imageAlignment, theme }) {
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
    const getBackgroundStyle = () => {
        switch (theme) {
            case 'light':
                return { backgroundColor: 'white' };
            case 'dark':
                return { backgroundColor: 'black' };
            case 'oneThird':
                return {
                    background: 'linear-gradient(to bottom, black 0%, black 33%, white 33%, white 100%)',
                };
            case 'half':
                return {
                    background: 'linear-gradient(to bottom, black 0%, black 50%, white 50%, white 100%)',
                };
            case 'twoThirds':
                return {
                    background: 'linear-gradient(to bottom, black 0%, black 67%, white 67%, white 100%)',
                };
            default:
                return {};
        }
    };
    return (
        <div className={`${commonStyle.container} ${style.container}`} style={getBackgroundStyle()}>
            <div className={commonStyle.subContainer}>
                <Image style={getMarginStyle()} src={image.url} width={image.width} height={image.height} alt={image.alt} />
            </div>
        </div>
    )
}
