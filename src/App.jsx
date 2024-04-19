import './App.css'
import Card from './Card/Card'
import Pastel from './assets/pastel.jpg'
import XBurguer from './assets/xburguer.jpg'
import Forma from './assets/forma.jpg'
import Hamburguer from './assets/hamburguer.jpg'
import Sanduiche from './assets/sanduiche.jpg'
import Batata from './assets/batata.jpg'
import Risole from './assets/risole.jpg'

const App = () => {
  return (<>
    <div className='CaixaBox'>
      <Card
        foto={Pastel}
        nome='Pastel'
        valor='30 $'
        ingredientes='frango, queijo e coentro'
        bgColor='blue'
        fontFamiy='Arial'
      />
      <Card
        bgColor='orange'
        foto={Risole}
        nome='Risole'
        ingredientes='carne, ovo, salada e bacon'
        valor='90$'
      />
      <Card
        bgColor='orange'
        foto={XBurguer}
        nome='X-Burguer'
        ingredientes='carne, ovo, salada e bacon'
        valor='90$'
        fontColor='#fff'
      />
      <Card
        bgColor='purple'
        fontColor='#fff'
        foto={XBurguer}
        nome='X-Burguer'
        ingredientes='carne, ovo, salada e bacon'
        valor='30$'
      />
      <Card
        bgColor='purple'
        foto={Hamburguer}
        nome='Hamburguer'
        ingredientes='carne, ovo, salada e bacon'
        valor='50$'
      />
      <Card
        bgColor='green'
        foto={Sanduiche}
        nome='Sanduiche presuntos'
        ingredientes='carne, ovo, salada e bacon'
        valor='10$'
      />
      <Card
        bgColor='brown'
        foto={Forma}
        nome='Pastel de forma'
        ingredientes='carne, ovo, salada e bacon'
        valor='70$'
      />
      <Card
        bgColor='red'
        foto={Batata}
        nome='Batata'
        ingredientes='carne, ovo, salada e bacon'
        valor='60$'
      />
    </div>
  </>)
}

export default App