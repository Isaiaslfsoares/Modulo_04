import Formulario from "./components/PostUser"
import GetUser from "./components/GetUser"
import UpdateUser from "./components/PutUser"
import DeleteUser from "./components/DeleteUser"

function App() {
  
  return (
    <>
     <Formulario/>
     <br /><hr /><br />
     <GetUser/>
     <br /><hr /><br />
     <UpdateUser/>
     <br /><hr /><br />
     <DeleteUser/>
    </>
  )
}

export default App
