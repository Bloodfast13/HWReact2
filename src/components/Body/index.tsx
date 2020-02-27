import React from 'react'
import style from './style.module.css'
import gLogo from './google_PNG19625.png'
import Input from './Input'

const Body: React.FC = () => {
    return <div className={style.Wrapper}>
        <img src={gLogo} width='15%'></img>
        <div>
            <Input/>
        </div>
        <div>
            <button>
                <a className={style.A} href='#'>Поиск в Google</a>
            </button>
            <button>
                <a className={style.A} href='#'>Мне повезёт!</a>
            </button>
        </div>
    </div>
}

export default Body