

const HelloWorld = () => {
  
    const nome="teste";
  function enviar(){
    alert(`Olá dev, ${nome}`)
  };
  
    return (
    <>
    <button onClick={enviar}>Botão Interno</button>
    </>
  );
};

export default HelloWorld
