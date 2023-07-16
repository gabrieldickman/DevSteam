import Image from 'next/image'
import style from './gameCard.module.css'
import Button from '@/components/forms/button/button'

export default function GameCard(){
    return(
        <div className={style.gamecard}>
            <Image src='/products/counter-strike.jpg' width={300} height={145} alt='Counter Strike' />
            <div className={style.info}>
                <h3 className={style.title}>Counter Strike: Global Offensive</h3>
                <p className={style.category}>Ação, Estratégia, Multijogador</p>
                <div className={style.pricing}>
                    <h2 className={style.price}>R$99,90</h2>
                    <Button>Adicionar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}
