class App extends React.Component {
    constructor() {
        super()
        this.state = {
            texto: null,
            meme: null
        }
    }
    
    textoDigitado(e) {
        this.setState({
            ...this.state,
            texto: e.target.value
        })
    }

    async pegarFoto() {
        this.setState({
            ...this.state,
            foto: 'https://cataas.com/cat/says/' + this.state.texto + '?t=medium'
        })
    }

    render() {
        return (
            <div>
                <h1>Gerador de memes de gatos</h1>
                <hr />

                <div>
                    <input value={this.state.texto} type="text" placeholder='Digite algo...' onChange={(e) => this.textoDigitado(e)} />
                    <button onClick={() => this.pegarFoto()}>Criar meme</button>
                </div>

                <img src={this.state.foto} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#app")
)