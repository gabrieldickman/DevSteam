import style from './subtitle.module.css'

export default function Subtitle(props) {
    return (
        <h2 className={style.subtitle}>{props.children}</h2>
    )
}