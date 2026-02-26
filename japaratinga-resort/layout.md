# Layout - Japaratinga Lounge Resort

**Aesthetic Identity:** Sun-Drenched Tropical Luxury — Mínimo, imersivo e radiante. Uma fusão entre a claridade absoluta do litoral nordestino, a imensidão verde-esmeralda da Costa dos Corais e a sofisticação silenciosa de um resort de classe mundial. Foco em fotografias vastas, tipografia elegante e muito "respiro" visual (white space).

---

## 1. CORE DESIGN SYSTEM

### Palette
- **Primary:** `#064F3E` — Esmeralda Cativante (Deep Emerald) — Elementos de destaque, botões primários, backgrounds sutis.
- **Accent:** `#D4AF37` — Sol Refletido (Warm Gold) — Detalhes finos de luxo, underlines decorativos, hover states, rating stars.
- **Background:** `#F9FAEB` — Areia Fina (Warm Off-white) — Fundo principal da página, remetendo à areia iluminada pelo sol. Foge do branco opressor.
- **Text/Dark:** `#1B2421` — Sombras na Mata (Darkest Green almost Black) — Tipografia geral, substituindo o preto puro para manter a paleta orgânica.
- **Surface:** `#FFFFFF` — Luz Pura — Cards, modais, elementos sobrepostos ao background principal para dar relevo e limpeza.

### Typography
- **Headings:** "Cormorant Garamond" 400/300 Italic — Elegância editorial e proporções clássicas, usado para títulos. Letras capitais devem ter tracking (letter-spacing: 0.05em).
- **Body:** "Jost" 300/400 — Sans-serif geométrica limpa (line-height: 1.6). Oferece contraste perfeito e alta legibilidade.
- **Drama/Emphasis:** "Cormorant Garamond" 300 Italic — Usado para citações, subtítulos sutis e detalhes elegantes.
- **Micro-copy/Data:** "Jost" 500 (Uppercase, letter-spacing: 0.1em) — Para labels, categorias, e botões.

### Visual Texture
- **Global:** Ausência de borders rígidas; separações feitas por grids e contrastes sutis de background (Branco vs Off-white).
- **Border-radius system:** `2px` ou `0px` — Extrema elegância, linhas retas, zero arredondamentos exagerados. "Sharp and tailored".
- **Shadow system:** Sombras difusas, longas e muito fracas. Ex: `box-shadow: 0 20px 40px rgba(6, 79, 62, 0.04)`.
- **Spacing base:** Sistema generoso de `8px`. Padding de seções gigantes (ex: `180px` desktop, `80px` mobile). Nada denso.

---

## 2. COMPONENT ARCHITECTURE & BEHAVIOR

### A. NAVBAR (The Invisible Horizon)
**Visuals:** Inicia completamente transparente sobre o Hero (glassless). Logotipo minimalista em branco, links brancos.  Ao scroll, transição para background `#FFFFFF` sólido com leve sombra e elementos mudam para a cor `#1B2421`.
**Layout:** Container Wide. Logo à esquerda, links centralizados, CTA (botão outline) à direita.
**Morphing Logic:** Ao passar de 100px de scroll, GSAP suaviza a mudança de cores num fade elegante (duration 0.4s).
**Responsividade:** Mobile com Hamburger Menu super fino. Overlay full-screen branco `#F9FAEB` quando aberto, links em "Cormorant Garamond" gigantes.

### B. HERO SECTION (The Esmerald Gateway)
**Visuals:** Arquétipo *Video Immersive / Fullbleed*. Vídeo em loop (ou imagem esplêndida) de altíssima qualidade mostrando águas verdes cristalinas e a grandiosidade do resort vista de cima. Overlay gradient: `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(6, 79, 62, 0.2) 100%)`.
**Layout:** *Contained Center*. O texto quebra a imagem. O texto fica rigorosamente no centro. Altura: `100vh` (ou `100svh`).
**Typography:** Headline dominante: Cormorant Garamond 400, brancas, 80px desktop / 42px mobile. Subheadline: Jost 300, 20px, max-width 600px.
**Animation:** GSAP SplitText progressivo. As palavras do Headline emergem como *Fade Up* suave (`opacity 0->1, y 30->0, duration 1.2s, power2.out`). O Subheadline aparece com 0.4s de delay.
**Interaction:** Custom Cursor "Discover" - hover pulse leve.
**Responsividade:** Mobile: 100svh. Headline ocupa muito espaço, quebrando em 3-4 linhas, CTA de tamanho completo.

### C. SEÇÃO: O NOVO CONCEITO (The Premium Freedom Paradigm)
**Visuals:** Fundo branco puro (`#FFFFFF`). Arquétipo *Split Assimetrico com Overlap*. A imagem é sangrada (*Bleed Both* no eixo da imagem).
**Layout:** 60/40 Split. Esquerda: Texto elegante, centralizado verticalmente com bastante breathing room. Direita: Foto vertical *Full Height* (crop retrato) de um ambiente luxuoso/bebidas premium do resort, sobreposta ligeiramente à área do texto (-40px margin left simulada via grid).
**Typography:** Título gigante em Cormorant, com a primeira linha Menor em Jost Uppercase sutil detalhando a categoria.
**Animation:** Image Parallax Effect - a foto desliza verticalmente a uma velocidade de 0.8x em relação ao scroll. O bloco de texto fade-up on scroll.
**Responsividade:** Mobile: Stack vertical. A foto vem primeiro em landscape, depois o bloco de texto com padding generoso.

### D. SEÇÃO: ESTRUTURA & EXPANSÃO (The Monumental Sanctuary)
**Visuals:** Arquétipo *Gallery Wall* limpa com *White Space Hero*. O fundo é `#F9FAEB` (Areia).
**Layout:** Uma introdução textual centralizada curta no topo com largura máxima (max-width: 700px). Abaixo, uma galeria asimétrica (*Masonry suave*) de 3-4 fotos: uma grande principal, duas satélites recuadas/sobrepostas.
**Typography:** "Majestoso por Natureza" em Cormorant. Texto corrido em colunas no estilo *Editorial Layout*.
**Animation:** GSAP ScrollTrigger para staggared reveal nas imagens da galeria. Hover nas imagens aplica um *Scale In* de 1.03x extremamente longo (duration 0.8s, ease power1.out).
**Interaction:** As imagens possuem efeito *Mouse Tilt* microscópico para transmitir refinamento tridimensional ao mover o mouse.
**Responsividade:** Mobile: Galeria vira um slider lateral (Scroll Horizontal / scroll snap) com imagens sangrando margem direita e cortando. Texto vira coluna única.

### E. SEÇÃO: GASTRONOMIA (The Culinary Theatre)
**Visuals:** Fundo Escuro *Dark Mode* (`#064F3E` profundo). Imagens com iluminação dramática mostrando gastronomia requintada. Arquétipo *Horizontal Cinematic Scroll*.
**Layout:** A seção é fixa (`Sticky Element`) ocupando a tela. Ao dar scroll, uma fileira de *Cards/Panels* horizontais com fotos de pratos/restaurantes rola na horizontal, enquanto o lado esquerdo com o Titulo "Sabores do Brasil" e a copy permanecem fixos.
**Typography:** O texto é branco com toques dourados (`#D4AF37`) nos detalhes.
**Animation:** Animação de Scroll Horizontal controlada pelo ScrollTrigger nativo do GSAP vinculada à timeline do documento.
**Responsividade:** O Sticky Element se desativa no mobile. Vira fluxo normal de empilhamento: Título descritivo seguido pelas fotos em blocos empilhados.

### F. SEÇÃO: PROMOÇÕES IRRESISTÍVEIS (The Timeless Invitation)
**Visuals:** Fundo branco com um card majestoso centralizado flutuante (*Surface `#FFFFFF`, shadow long*), sutilmente posicionado contra um background de foto de praia desfocada ao fundo do container.
**Layout:** Container Narrow. Foco absoluto no CTA. Todo o texto da promoção embalado como um convite elegante no centro da tela.
**Typography:** Contraste extremo. "O Seu Momento..." grande. CTA preenchido com #064F3E elegante.
**Animation:** O fundo desfocado e o CTA ganham foco quando a seção entra na tela. *Scale Out* suave para imitar um cartão sendo colocado na mesa.
**Interaction:** O CTA possui *Magnetic Sweep Hover* (hover que segue a direção do cursor do mouse) com fill na cor Dourada.
**Responsividade:** O card preenche toda a tela no mobile. Fundo fotográfico some para garantir velocidade e foco no clique.

### G. DEPOIMENTOS (Voices of Paradise)
**Visuals:** Fundo `#F9FAEB`. Estética super minimalista. Sem caixas fechadas. Apenas uma aspa tipográfica colossal (Hero Type) em Dourado `#D4AF37` por trás das letras.
**Layout:** *Single Focus*. Um único depoimento colossal na tela, alinhado ao centro. Abaixo, os controles de navegação minimalistas (números sutis ou setas).
**Typography:** "Cormorant Italic" majestoso, tamanho 40px desktop.
**Animation:** Transição entre os depoimentos por *CSS Fade and Slight Y-Translate* (fade out down, fade in up) desencadeado por click nativo via JS puro ou simples opacity toggle.
**Responsividade:** Mesma essência, fontes escaladas para o viewport (24px mobile).

### H. FAQ (The Concierge Desk)
**Visuals:** Grid tipográfico preciso. Organização impecável. Background Branco.
**Layout:** *Split Vertical 30/70*. Esquerda: Título "Dúvidas Frequentes" posicionado fixo na coluna. Direita: Accordion esticado (`Full Width` em sua coluna) com borders muito finas na cor `#E0E0E0` entre os itens.
**Typography:** Pergunta em Jost 400 (cor escura). Respostas em Jost 300 (cor um tom mais leve de cinza/verde escuro).
**Animation:** O abrir e fechar do accordion deve ser suave, manipulando max-height via CSS transitions, duration 0.4s cubic-bezier. Ao abrir, o ícone de `+` gira para `×`.
**Responsividade:** Vertical Stack puro. O Título perde o sticky no mobile e fica em cima das perguntas.

### I. FOOTER
**Visuals:** Sólido, `#1B2421` (Verde quasi-preto), texto ofuscado Dourado apagado cruzando com links brancos puros no hover.
**Layout:** Grid 4 colunas. Coluna esquerda marca Japaratinga em grande logo tipográfico. As demais dividem links e contatos essenciais. Linha fina e Copyright no fundo.
**Animation:** Links possuem *Hover Underline* revelado da esquerda pra direita.

---

## 3. TECHNICAL REQUIREMENTS
- **Bibliotecas CDN:**
  - GSAP (`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`)
  - GSAP ScrollTrigger (`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js`)
  - Lenis (`https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js`)
- **Micro-interações globais:**
  - *Magnetic Hover* nos CTAs primários.
  - Form field focus states com transition verde esmeralda translúcida.
- **Diretiva de qualidade:**
  - Performance cirúrgica. Sem CLS.
  - O Smooth Scroll via Lenis é crucial para a sofisticação da rolagem (ler sobre setup basico na doc).
  - Usar apenas as fontes e cores da paleta, sem flexibilizar o design system.
  - Imagens servidas via Netlify CDN no formato: `/.netlify/images?url=/images/foto.jpg&w=1200&q=80`.

---
## DETALHES DE CRAFT (O Encanto)
- **Fluididade Sensorial:** A página inteira deve parecer estar submersa em uma brisa leve. O uso de GSAP fade-up em textos com *staggering* cria uma sensação cinematográfica onde as palavras chegam lentamente, como ondas quebrando gentil e precisamente.
- **Easter Egg Visual:** Um leve grão (noise) imperceptível (opacidade de 1-2%) aplicado como background em um pseudo-elemento `body::before` com position fixed, para remover a textura digital de "tela", tornando-se mais parecido com uma página de prestigiada revista física.
