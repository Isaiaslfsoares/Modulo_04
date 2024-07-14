import { useState } from "react"
import StdForm from "./components/Forms"
import Forms2 from "./components/Forms2"
import Forms3 from "./components/Forms3"
import UserCard from "./components/UserCard"


function App() {
  const [user, setUser] = useState({name: 'Gandalf', age: 1000})
  
  return (
    <>
      <StdForm/>
      <br /><hr /><br />
      <Forms2/>
      <br /><hr /><br />
      <Forms3/>
      <br /><hr /><br />
      <div>
        <UserCard user={user} setUser={setUser}></UserCard>
      </div>
    </>
  )
}

export default App
