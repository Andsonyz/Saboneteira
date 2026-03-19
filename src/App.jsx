import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [clicouSim, setClicouSim] = useState(false)
  const [posicaoNao, setPosicaoNao] = useState({ top: 'auto', left: 'auto' })
  const [isMobile, setIsMobile] = useState(false)

  // Detecta se é dispositivo móvel para ajustar a área de fuga
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const fogeBotao = () => {
    // Define limites para o botão não sair totalmente da tela
    const x = Math.random() * (isMobile ? 70 : 80) + 10 
    const y = Math.random() * (isMobile ? 70 : 80) + 10
    setPosicaoNao({ 
      top: `${y}%`, 
      left: `${x}%`, 
      position: 'absolute',
      transition: 'all 0.2s ease' 
    })
  }

  return (
    <div className="app-wrapper">
      {/* Container de Partículas (só aparece no Sim) */}
      {clicouSim && (
        <div className="efeitos-container">
          {[...Array(40)].map((_, i) => (
            <span 
              key={i} 
              className="particula" 
              style={{
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random() * 4}s`,
                fontSize: `${Math.random() * (35 - 15) + 15}px`
              }}
            >
              {['🌹', '🌸', '🦋', '✨', '🌷', '💖'][Math.floor(Math.random() * 6)]}
            </span>
          ))}
        </div>
      )}

      <header className="header-full">
        <h1>✨ Pergunta para Lauane ✨</h1>
      </header>

      <main className="main-flex">
        {!clicouSim ? (
          <div className="card-pergunta bounce-card">
            <h2>Lauane é Linda, Perfeita, Maravilhosa?</h2>
            
            <div className="botoes-container">
              <button 
                className="btn-sim" 
                onClick={() => setClicouSim(true)}
              >
                Sim
              </button>

              <button 
                className="btn-nao" 
                style={posicaoNao}
                onMouseEnter={!isMobile ? fogeBotao : null}
                onClick={fogeBotao}
              >
                Não
              </button>
            </div>
          </div>
        ) : (
          <div className="card-resposta bounce-card">
            <h2>✨ Verdade Absoluta! ✨</h2>
            <div className="texto-elogios">
              <p>
                Sim, além de linda, perfeita, maravilhosa, encantadora, incrível, doce, inteligente, carinhosa, especial, radiante, única, inspiradora, delicada, forte, admirável, gentil, elegante, charmosa, cativante, brilhante, deslumbrante, fascinante, graciosa, simpática, alegre, confiante, determinada, apaixonante, esplêndida, sensacional, extraordinária, adorável, magnífica, sublime, poderosa, resiliente, meiga, divina, estilosa, atraente, iluminada, vibrante, autêntica, ousada, serena, tranquila, afetuosa, compreensiva, dedicada, responsável, criativa, talentosa, habilidosa, versátil, espontânea, sincera, fiel, leal, honesta, respeitosa, educada, sofisticada, refinada, encantadora, exuberante, harmoniosa, positiva, otimista, sonhadora, persistente, corajosa, destemida, valente, guerreira, batalhadora, determinada, focada, centrada, equilibrada, sensível, empática, solidária, altruísta, generosa, acolhedora, calorosa, amigável, sociável, divertida, engraçada, espirituosa, sagaz, perspicaz, observadora, atenta, cuidadosa, caprichosa, organizada, disciplinada, pontual, dedicada, esforçada, aplicada, estudiosa, curiosa, inovadora, visionária, inspiradora, elegante, sofisticada, refinada, charmosa, glamourosa, atraente, sedutora, hipnotizante, envolvente, marcante, inesquecível, impactante, brilhante, reluzente, radiante, solar, luminosa, resplandecente, encantadora, fascinante, magnífica, exuberante, formosa, bela, estonteante, graciosa, harmoniosa, perfeita, divina, angelical, celestial, pura, leve, suave, delicada, doce, terna, afável, gentil, bondosa, amorosa, apaixonante, calorosa, acolhedora, querida, especial, única, rara, preciosa, valiosa, importante, significativa, admirável, respeitável, incrível, extraordinária, excepcional, fenomenal, fantástica, espetacular, surpreendente, maravilhosa, incrível, incomparável, inigualável, insuperável, brilhante, notável, distinta, destacada, exemplar, inspiradora, memorável, inesquecível!
              </p>
            </div>
            <button className="btn-voltar" onClick={() => setClicouSim(false)}>
              Voltar 💖
            </button>
          </div>
        )}
      </main>

      <footer className="footer-full">
        <p>© 2026 | Feito com carinho para Lauane</p>
      </footer>
    </div>
  )
}

export default App