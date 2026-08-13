

const Botao = () => {
  
    const handleClick=()=>{
        alert("Você clicou no meu Botão, que feio")
    }
    return (
    <>
      <button onClick={handleClick}>Botão componete</button>
    </>
  )
}

export default Botao
