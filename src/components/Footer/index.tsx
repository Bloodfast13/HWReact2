import React from 'react'
import style from './style.module.css'
import Button from '../Button'

const Footer: React.FC = () => {
    return <div className={style.MainWrapper}>
        <div className={style.BlockWrapper}>
            <div className={style.BtnWrapper}>
                <Button href='https://ads.google.com' name='Реклама'/>
            </div>
            <div className={style.BtnWrapper}>
                <Button href='https://www.google.com/services' name='Для бизнеса'/>
            </div>
            <div className={style.BtnWrapper}>
                <Button href='https://about.google/' name='Все о Google'/>
            </div>
        </div>
        <div className={style.BlockWrapper}>
            <div className={style.BtnWrapper}>
                <Button href='https://policies.google.com/privacy?fg=1' name='Конфиденциальность'/>
            </div>
            <div className={style.BtnWrapper}>
                <Button href='https://policies.google.com/terms?fg=1' name='Условия'/>
            </div>
            <div className={style.BtnWrapper}>
                <Button href='https://www.google.com/preferences?hl=ru' name='Настройки'/>
            </div>
        </div>
    </div>
}

export default Footer