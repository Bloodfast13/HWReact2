import React from 'react'

// interface OwnProps {
//     href: string
//     name: string
// }

// const Button: React.FC <OwnProps> = (props) => {
//     return <a className='Button' href={props.href}>{props.name}</a>
// }

// export default Button

const e = React.createElement

export default class Button extends React.Component {
    render () {
        return (
            e(React.Fragment, null,
                e("button", null,
                e("a", { className: this.props.className, href: this.props.href }, this.props.name)
                )
            )
        )
    }
}