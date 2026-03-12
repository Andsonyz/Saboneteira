import { useState } from 'react'
import './App.css'

import imgProtex from './imagens/protex.jpeg'
import imgDove from './imagens/dove.jpeg'
import imgLux from './imagens/lux.jpeg'
import imgRexona from './imagens/rexona.jpeg'
import imgPalmolive from './imagens/palmolive.jpeg'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [animatingCard, setAnimatingCard] = useState(null)
  const [animatingCart, setAnimatingCart] = useState(false)

  const listaProdutos = [
    { id: 1, nome: "Protex", preco: 4.50, imagem: imgProtex, descricao: "Proteção antibacteriana", detalhes: "Elimina 99.9% das bactérias e cria uma barreira protetora." },
    { id: 2, nome: "Dove", preco: 5.20, imagem: imgDove, descricao: "Hidratação profunda", detalhes: "Composto por 1/4 de creme hidratante para uma pele macia." },
    { id: 3, nome: "Lux", preco: 3.80, imagem: imgLux, descricao: "Perfume irresistível", detalhes: "Fragrâncias florais inspiradas na perfumaria fina francesa." },
    { id: 4, nome: "Rexona", preco: 3.50, imagem: imgRexona, descricao: "Refrescância prolongada", detalhes: "Frescor que dura o dia todo com tecnologia de ponta." },
    { id: 5, nome: "Palmolive", preco: 3.90, imagem: imgPalmolive, descricao: "Nutrição natural", detalhes: "Fórmula com extratos de origem 100% natural para sua pele." }
  ]

  const valorTotalCarrinho = cartItems.reduce((total, item) => total + item.preco, 0)

  const adicionarAoCarrinho = (produto) => {
    setCartItems([...cartItems, produto])
    setAnimatingCard(produto.id)
    setAnimatingCart(true)
    setTimeout(() => { setAnimatingCard(null); setAnimatingCart(false); }, 400)
  }

  return (
    <div className="app-wrapper">
      <header className="header-full">
        <div className="conteudo-central">
          <h1>🧼 Saboneteria NãoFeda 🧼</h1>
          <p>As melhores marcas para o seu cuidado diário!</p>
          
          <div className="carrinho-container">
            <div className={`cart-status ${animatingCart ? 'pulse-cart' : ''}`}>
              <span>🛒 {cartItems.length} itens</span>
              <span className="separador">|</span>
              <span>R$ {valorTotalCarrinho.toFixed(2).replace('.', ',')}</span>
              {cartItems.length > 0 && (
                <button className="btn-limpar-inline" onClick={() => setCartItems([])}>
                  Limpar
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="conteudo-central">
        <div className="grid-vitrine">
          {listaProdutos.map((produto) => (
            <div key={produto.id} className={`card-item ${animatingCard === produto.id ? 'bounce-card' : ''}`}>
              {/* ÍCONE DE INFORMAÇÃO AJUSTADO */}
              <div className="info-wrapper">
                <span className="info-icon">i</span>
                <div className="tooltip-box">{produto.detalhes}</div>
              </div>

              <img src={produto.imagem} alt={produto.nome} className="img-prod" />
              <h2>{produto.nome}</h2>
              <p className="subtitulo">{produto.descricao}</p>
              <p className="valor">R$ {produto.preco.toFixed(2).replace('.', ',')}</p>
              <button className="btn-buy" onClick={() => adicionarAoCarrinho(produto)}>
                Adicionar ao carrinho
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer-full">
        <div className="conteudo-central">
          <p>© 2026 NãoFeda | Qualidade e Frescor para sua pele</p>
        </div>
      </footer>
    </div>
  )
}

export default App