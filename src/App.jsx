import imagem from './assets/imagem.jpg'

const App=()=>{

  // Declaração de variaveis
  let nome ="fiap";
  let sobrenome = nome.toUpperCase();

  // Função
  function soma(valor1, valor2){
    return(valor1 + valor2);
  };

  function potencia(base, expoente){
    return base ** expoente;
  };

  // Arrow Function
  const multiplicar=(valor3, valor4)=>{
    return valor3 * valor4;
  };

  return(
    <>
    <h1>Seaja Bem-Vindo {sobrenome}</h1>
    <p>A soma dos valores é {soma(4,6)}</p>
    <p>A multiplicação dos valores é {multiplicar(5,8)}</p>
    <p>A potencia dos valores é {potencia(5,8)}</p>
    <img src={imagem} alt="estufa" width={400} />
    </>
  );
};
export default App