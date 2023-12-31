import Image from 'next/image'

import style from './saleCard.module.css'
import Button from '@/components/forms/button/button'

export default function SaleCard(){
    return (
        <div className={style.salecard}>
            <Image src='/products/league-of-legends.jpg' width={250} height={300} alt='League Of Legends'/>
            <div className={style.info}>
                <h3 className={style.title}>Oferta Exclusiva</h3>
                <div className={style.pricecard}>
                    <div className={style.percent}>-20%</div>
                    <div className={style.price}>
                        <p className={style.fullprice}>R$99,90</p>
                        <h4 className={style.discountprice}>R$89,90</h4>
                    </div>
                </div>
                <Button fullWidth>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}