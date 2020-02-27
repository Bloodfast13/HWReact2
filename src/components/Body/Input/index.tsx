import React from 'react'
import style from './styel.module.css'
import Voice from './google-voice-search-icon-21.jpg'
import Keyboard from './icons8-клавиатура-16.png'
import Search from './Zoom.png'

const Patterns = /^[A-Za-zА-Яа-яЁё\s]+$/
const Input: React.FC = () => {
    const [symbols, setSymbols] = React.useState('')
    return <div className={style.Wrapper}>
        <button className={style.Img}>
            <a href='#'>
                <img src={Search} height='20px'></img>
            </a>
        </button>
        <input className={style.Inp} type='text' pattern='^[A-Za-zА-Яа-яЁё\s]+$' placeholder='latin letters onlys'
        value={symbols}
        onChange={
            e=> {
                if (Patterns.exec(' '+e.target.value)){ 
                    setSymbols(e.target.value)
                }
            }
        }></input>
        <button className={style.Img}>
            <a href='#'>
                <img src={Keyboard}></img>
            </a>
        </button>
        <button className={style.Img}>
            <a href='#'>
                <img src={Voice} height='20px'></img>
            </a>
        </button>
    </div>
}


// interface State {
//     validInp: string
// }

// class Input extends React.Component<State>  {
//     state={
//         validInp: ''
//     }
//     render() {
//         return (
//         <div className={style.Wrapper}>
//             <button className={style.Img}>
//                 <a href='#'>
//                     <img src={Search} height='20px'></img>
//                 </a>
//             </button>
//             <input className={style.Inp} type='text' pattern='^[A-Za-zА-Яа-яЁё\s]+$' placeholder='latin letters onlys'
//             value={this.state.validInp}
//             onChange={
//                 e=> {
//                     if (Patterns.exec(' '+e.target.value)){ 
//                         this.setState.({validInp: e.target.value})
//                     }
//                 }
//             }></input>
//             <button className={style.Img}>
//                 <a href='#'>
//                     <img src={Keyboard}></img>
//                 </a>
//             </button>
//             <button className={style.Img}>
//                 <a href='#'>
//                     <img src={Voice} height='20px'></img>
//                 </a>
//             </button>
//         </div>)
//     }
// }

export default Input