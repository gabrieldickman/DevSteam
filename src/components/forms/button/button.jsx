import style from './button.module.css'

export default function Button(props) {
    return(
        <button className={style.button}>{props.children}</button>
    )
}