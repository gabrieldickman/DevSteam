import Head from 'next/head'
import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import style from '@/styles/index.module.css'
import GameCard from '@/components/cards/gameCard/gameCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navbar />
        <Container>
          <div className={style.section}>
            <Subtitle>Promoções</Subtitle>
            <div className={style.salecontainer}>
              <SaleCard />
              <SaleCard />
              <SaleCard />
            </div>
          </div>
          <div className={style.section}>
            <Subtitle>Outros jogos</Subtitle>
            <div>
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
            </div>
          </div>      
        </Container>
      </nav>
    </>
  )
}
