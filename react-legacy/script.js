console.log("probando hacer react")

// al unir los dos scripts react nos da dos librerias
// React 
// ReactDOM

const myPageNode = document.querySelector("#mi-pagina-de-react")

// aqui el DOM virtual generado
const root = ReactDOM.createRoot(myPageNode)




// const dataToRender = React.createElement("div", {
//   children: [
//     React.createElement("h1", {
//       children: `Hola mundo de React. Mi nombre es: ${myName}`
//     }),
//     React.createElement("p", {
//       children: `esta es mi primera pagina fea de react`
//     }), 
//     React.createElement("p", {
//       children: `estoy aprendiend. esta sintaxis está muy fea :(`
//     }), 
//   ]
// })


// JSX => combina JS con XML (predecesor de HTML)
// const dataToRender = (
//   <div id="main-container">
//     <h1>Hola mundo de React. Mi nombre es: {myName} </h1>
//     <p className="patata">esta es mi primera pagina fea de react</p>
//     <p>estoy aprendiend. esta sintaxis está muy fea</p>
//     <p>La fecha de hoy {new Date().toDateString()} </p>
//   </div>
// )

// babel es una libreria que traduce sintaxis de JSX a como requiere la data react

// React utiliza componentes (funciones en PascalCasing)
function DataToRender( ) {

  let myName = "jorge"

  return (
    <div id="main-container">
     <h1>Hola mundo de React. Mi nombre es: {myName} </h1>
     <p className="patata">esta es mi primera pagina fea de react</p>
     <p>estoy aprendiend. esta sintaxis está muy fea</p>
     <p>La fecha de hoy {new Date().toDateString()} </p>
     <AnotherComponent />
   </div>
  )
}

function AnotherComponent() {
  return (
    <h3>Subtitulo adicional</h3>
  )
}

// root.render( DataToRender() )
root.render( 
  <div>
    <DataToRender />
    <AnotherComponent />
  </div>
) // hace exactamente lo mismo que arriba

// en REACT no podemos renderizar dos o más componentes in envolvernos en una etiqueta