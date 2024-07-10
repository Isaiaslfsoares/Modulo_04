const books = ['O hobbit', 'Harry Potter', 'Nárnia']

function HelloWorld(){

    const chosenBook = Math.random() > 0.5 ? books[0] : books [1]
    return (
        <div>
            <h1>Hello World, sou o Isaias</h1>
            <p>{chosenBook}</p>
        </div>
    )
}
export default HelloWorld