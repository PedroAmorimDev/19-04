import './Card.css'

const Card = ({foto, nome, valor, ingredientes, bgColor, fontColor, fontFamiy})=>{
    return(
    <div className='caixa' style={{backgroundColor: bgColor, color:fontColor, fontFamily:fontFamiy}}>
        <div style={{backgroundColor: bgColor}}>
            <p className='titulo'>{nome}</p>
            <p>{ingredientes}</p>
            <h4>{valor}</h4>
        
        </div>
        <div><img src={foto} alt="" /></div>
    </div>
     )
}

export default Card