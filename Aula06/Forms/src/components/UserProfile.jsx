
const UserProfile = ({user, setUser}) => {


    return (
        <div>
            <h1>{ user.name }</h1>
            <h1>{ user.age } anos</h1>
            <button onClick={() => setUser ({...user, age: user.age + 1})}>Aumentar a idade</button>
        </div>
    )
}

export default UserProfile