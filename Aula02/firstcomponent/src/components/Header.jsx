import '../App.css';

function Header() {
    return (
        <header>
                <div>
                    <img src="./public/logoof.png" alt="" />
                </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Sobre mim</a></li>
                    <li><a href="/">Inscreva-se</a></li>
                    <li><a href="/">Contato</a></li>
                    <li><a href="/">Contribua</a></li>                    
                </ul>
            </nav>
        </header>    
    )
}

export default Header