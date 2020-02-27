import React from 'react'
import Button from '../Button'
import logo from './menu.svg'
import style from './style.module.css'

const listShowed = [{
    href: '#',
    name: 'Аккаунт'
},
{
    href: '#',
    name: 'Поиск'
},
{
    href: '#',
    name: 'Мой бизнес'
},
{
    href: '#',
    name: 'Карты'
},
{
    href: '#',
    name: 'YouTube'
},
{
    href: '#',
    name: 'Play'
},
{
    href: '#',
    name: 'Новости'
},
{
    href:'#',
    name: 'Почта'
},
{
    href: '#',
    name: 'Контакты'
},
{
    href: '#',
    name: 'Диск'
},
{
    href: '#',
    name: 'Календарь'
},
{
    href: '#',
    name: 'Переводчик'
}];
// const Header: React.FC = () => {
//     const [isShowed, setIsShowed] = React.useState(false)
//     return 
//     <div className={style.MainWrapper}>
//         <div className={style.Wrapper}>
//             <Button href='https://www.google.com/intl/ru/gmail/about/#' name='Почта'/>
//         </div>
//         <div className={style.HrefWrapper}>
//             <Button href='https://www.google.com.ua/imghp?hl=ru&tab=wi&ogbl' name='Картинки'/>
//         </div>
//         <div className={style.HrefWrapper}>
//             <button className={style.BtnShow} onClick={() => setIsShowed(!isShowed)}>
//                 <a href='#'><img className={style.Img} src={logo}></img></a>
//             </button>
//         </div>
//         {isShowed && (
//             <div className={style.BtnWrapper}>
//                 {listShowed.map(item => (
//                     <Button href={item.href} name={item.name}/>)
//                 )}
//             </div>
//         )}
//         <div className={style.HrefWrapper}>
//             <Button href='https://accounts.google.com/' name='Войти'/>
//         </div>
//     </div>
// }

// export default Header

interface State {
    isShowed: boolean
}

export default class Header extends React.PureComponent<{}, State> {
    state = {
        isShowed: false
    }

    myRef: React.RefObject<HTMLDivElement> = React.createRef()

    clousePopup = (event: any) => {
        if(!this.myRef.current?.contains(event.target)) {
            this.setState({ isShowed: false })
        }
    }

    componentDidUpdate(prevProps: {}, prevState: State) {
        if (prevState.isShowed === this.state.isShowed) {
        return
        }
    
        if (this.state.isShowed) {
        document.addEventListener('click', this.clousePopup)
        } else {
        document.removeEventListener('click', this.clousePopup)
        }
    }

    togglePopup = () => {
        this.setState({ isShowed: !this.state.isShowed })
    }

    render() {
        const { isShowed } = this.state;
        return (
            <div className={style.MainWrapper}>
        <div className={style.Wrapper}>
            <Button href='https://www.google.com/intl/ru/gmail/about/#' name='Почта'/>
        </div>
        <div className={style.HrefWrapper}>
            <Button href='https://www.google.com.ua/imghp?hl=ru&tab=wi&ogbl' name='Картинки'/>
        </div>
        <div className={style.HrefWrapper}>
            <button className={style.BtnShow} onClick={this.togglePopup}>
                <a href='#'><img className={style.Img} src={logo}></img></a>
            </button>
        </div>
        {isShowed && (
            <div className={style.BtnWrapper} ref={this.myRef}>
                {listShowed.map(item => (
                    <Button href={item.href} name={item.name}/>)
                )}
            </div>
        )}
        <div className={style.HrefWrapper}>
            <Button href='https://accounts.google.com/' name='Войти'/>
        </div>
    </div>
        )
    }
}