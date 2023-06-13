import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Veladores en oferta! Aproveche las 12 cuotas sin interés!"}/>
    </>
  )
}

export default App