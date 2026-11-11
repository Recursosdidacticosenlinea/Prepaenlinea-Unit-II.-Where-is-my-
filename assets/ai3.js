/* Actividad integradora 3 — Be my guest (M06 S2) */
(function () {
  function has(f, list) { return list.filter(function (w) { return f.indexOf(" " + w) >= 0; }).length; }
  var FURNITURE = ["sofa", "couch", "armchair", "coffee table", "table", "lamp", "bookcase", "cushion", "pillow", "curtain", "picture", "painting", "vase", "clock", "stool", "window", "book", "rug", "dresser", "cabinet"];
  var ADJ = ["big", "small", "large", "comfortable", "blue", "red", "pink", "yellow", "orange", "white", "green", "gray", "grey", "brown", "wooden", "modern", "colorful", "round", "rectangular", "long", "tall", "soft", "nice", "beautiful", "bright", "cozy", "new", "old", "clean", "pretty", "little"];

  function q(n, letter, en, es, fig, plural, obj, room, refs, hints) {
    return { n: n, key: "b" + n, q: en, es: es, fig: fig, mark: letter, plural: plural, obj: obj, room: room, refs: refs, hints: hints };
  }
  function hints(room, near, frame) {
    return ["Mira la imagen: ¿qué cuarto es? En inglés es <i>the " + room + "</i>. Escribe <i>in the " + room + "</i>.",
      "Objetos que se ven cerca y puedes usar como referencia: " + near + ".",
      "Arma tu oración así: <i>" + frame + "</i>"];
  }

  window.ACTIVITY = {
    id: "ai3",
    title: "Actividad integradora 3 · Be my guest",
    figures: {
      kitchen: { src: "img/kitchen.jpg", alt: "Dibujo de una cocina con estufa, microondas, fregadero, refrigerador, repisa y una mesa con comida.", marks: [{ l: "a", x: 44, y: 24 }, { l: "b", x: 91, y: 21 }, { l: "c", x: 87, y: 14 }] },
      bathroom: { src: "img/bathroom.jpg", cls: "tall", alt: "Dibujo de un baño con gabinete, inodoro, toallas, lavabo, espejo, tapete y tina.", marks: [{ l: "d", x: 20, y: 28 }, { l: "e", x: 89, y: 31 }, { l: "f", x: 71, y: 23 }] },
      bedroom: { src: "img/bedroom.jpg", alt: "Dibujo de una recámara con ventana, cama, buró con lámpara y reloj, cuadro, cajonera y tapete.", marks: [{ l: "g", x: 81, y: 62 }, { l: "h", x: 44.5, y: 24 }] },
      living: { src: "img/living-room.jpg", alt: "Dibujo de una sala con sofá, sillón, mesa de centro, librero rojo, lámpara de pie, cuadros y ventana.", overlays: [{ src: "img/switch.jpg", alt: "Interruptor de luz", x: 90, y: 50, w: 9 }], marks: [{ l: "i", x: 38, y: 51 }, { l: "j", x: 94.5, y: 45 }] }
    },
    steps: [
      {
        short: "Objetivo", title: "¿Qué vas a lograr?",
        lead: "Actividad integradora 3. Be my guest · Módulo 6, semana 2",
        blocks: [
          { type: "html", html: "<h3>Objetivo</h3><p>Al terminar podrás <b>describir en inglés dónde están los objetos de una casa</b> usando <span class='en'>There is / There are</span> y las preposiciones de lugar, por escrito y en voz alta.</p><h3>Lo que vas a entregar</h3><ul class='clean'><li><b>Sección B:</b> 10 respuestas en inglés sobre la ubicación de objetos (letras a–j).</li><li><b>Sección C:</b> una descripción en inglés de la sala de estar.</li><li><b>Sección D:</b> el enlace a un audio (mínimo 30 segundos) donde lees tus 10 respuestas.</li><li><b>Sección E:</b> una reflexión en español de 100 a 150 palabras.</li></ul>" },
          { type: "html", html: "<h3>¿Cómo funciona este sitio?</h3><ul class='clean'><li>Avanza paso a paso con el botón <b>Siguiente</b>. Primero aprendes y practicas; después contestas tu actividad.</li><li>Lo que escribes <b>se guarda en este dispositivo</b>; puedes cerrar y continuar después en el mismo navegador.</li><li>Para los ejercicios de voz usa <b>Google Chrome</b> o <b>Edge</b> y permite el uso del micrófono.</li><li>En el último paso encontrarás todas tus respuestas juntas para copiarlas al archivo oficial que descargas de la plataforma.</li></ul><div class='note accent'>El sitio revisa la <b>forma</b> de tus oraciones y te da pistas, pero las respuestas las escribes tú. Observa bien cada imagen.</div>" }
        ]
      },
      {
        short: "Vocabulario", title: "Rooms and things in the house",
        lead: "Primero las palabras: los cuartos de la casa y los objetos que aparecen en las imágenes.",
        blocks: [
          { type: "cards", title: "Rooms · Cuartos", items: [["🍳", "kitchen", "cocina"], ["🛁", "bathroom", "baño"], ["🛏️", "bedroom", "recámara"], ["🛋️", "living room", "sala de estar"]] },
          { type: "cards", title: "In the kitchen", items: [["📟", "microwave", "horno de microondas"], ["🚰", "sink", "fregadero"], ["🧊", "fridge", "refrigerador"], ["🔥", "stove", "estufa"], ["🟫", "counter", "barra de cocina"], ["📚", "shelf", "repisa"], ["🌾", "flour", "harina"], ["🍎", "fruit", "fruta"], ["🍓", "jam", "mermelada"], ["🫗", "jug", "jarra"], ["🥚", "eggs", "huevos"], ["🕒", "clock", "reloj"]] },
          { type: "cards", title: "In the bathroom", items: [["🚽", "toilet", "inodoro"], ["🚰", "sink", "lavabo"], ["🪞", "mirror", "espejo"], ["🗄️", "cabinet", "gabinete"], ["🧺", "towels", "toallas"], ["🪥", "toothbrushes", "cepillos de dientes"], ["🥤", "cup", "vaso"], ["🛁", "bathtub", "tina"], ["🖼️", "picture", "cuadro"], ["🟥", "rug", "tapete"]] },
          { type: "cards", title: "In the bedroom", items: [["🛏️", "bed", "cama"], ["🗄️", "dresser", "cajonera"], ["💡", "lamp", "lámpara"], ["🟨", "nightstand", "buró"], ["⏰", "alarm clock", "despertador"], ["🧸", "teddy bear", "oso de peluche"], ["🩴", "slippers", "pantuflas"], ["🪟", "window", "ventana"], ["🖼️", "picture", "cuadro"]] },
          { type: "cards", title: "In the living room", items: [["🛋️", "sofa", "sofá"], ["💺", "armchair", "sillón"], ["☕", "coffee table", "mesa de centro"], ["📚", "bookcase", "librero"], ["🏮", "floor lamp", "lámpara de pie"], ["🟧", "cushions", "cojines"], ["🏺", "vase", "florero"], ["🪟", "curtains", "cortinas"], ["🔘", "light switch", "interruptor de luz"], ["🧱", "wall", "pared"]] },
          { type: "match", key: "p-match1", title: "Práctica 1 · Une la palabra con su significado", pairs: [["dresser", "cajonera"], ["mirror", "espejo"], ["flour", "harina"], ["bookcase", "librero"], ["towels", "toallas"], ["light switch", "interruptor de luz"], ["shelf", "repisa"], ["toothbrushes", "cepillos de dientes"]] },
          { type: "mcq", key: "p-rooms", title: "Práctica 2 · ¿En qué cuarto está?", items: [
            { q: "<span class='en'>The microwave is in the…</span>", o: ["kitchen", "bathroom", "bedroom"] },
            { q: "<span class='en'>The toothbrushes are in the…</span>", o: ["bathroom", "kitchen", "living room"] },
            { q: "<span class='en'>The dresser is in the…</span>", o: ["bedroom", "bathroom", "kitchen"] },
            { q: "<span class='en'>The sofa is in the…</span>", o: ["living room", "bedroom", "bathroom"] }
          ] }
        ]
      },
      {
        short: "There is / are", title: "There is / There are",
        lead: "Con estas dos expresiones dices que algo existe o está en un lugar: «hay».",
        blocks: [
          { type: "html", html: "<div class='tbl-wrap'><table><tr><th>Forma</th><th>Cuándo se usa</th><th>Ejemplo</th></tr><tr><td><b class='en'>There is a / an…</b></td><td>Un solo objeto (singular)</td><td class='en'>There is a clock in the kitchen.</td></tr><tr><td><b class='en'>There are…</b></td><td>Dos o más objetos (plural)</td><td class='en'>There are two chairs in the kitchen.</td></tr><tr><td><b class='en'>There is…</b> (sin a/an)</td><td>Cosas que no se cuentan: <span class='en'>fruit, flour, water, bread</span></td><td class='en'>There is bread on the table.</td></tr></table></div><div class='note'><b>Fíjate:</b> usa <span class='en'>a</span> antes de consonante (<span class='en'>a lamp</span>) y <span class='en'>an</span> antes de sonido de vocal (<span class='en'>an alarm clock</span>). En plural no se usa <span class='en'>a/an</span>: <span class='en'>There are slippers</span>.</div><p>Para contestar <span class='en'>Where is…? / Where are…?</span> en tu actividad usarás este modelo:</p><p class='note accent en'><b>There is</b> a hamburger <b>in the kitchen</b>, <b>between</b> the salt and the glass.</p><p class='small muted'>There is/are + objeto + in the (cuarto) + preposición + objeto de referencia.</p>" },
          { type: "gap", key: "p-isare", title: "Práctica 1 · ¿is o are?", tip: "Recuerda: singular → is, plural → are.", items: [
            { t: "There ___ a clock in the kitchen.", o: ["is", "are"] },
            { t: "There ___ two chairs in the kitchen.", o: ["are", "is"] },
            { t: "There ___ a bed in the bedroom.", o: ["is", "are"] },
            { t: "There ___ slippers on the rug.", o: ["are", "is"] },
            { t: "There ___ an alarm clock on the nightstand.", o: ["is", "are"] },
            { t: "There ___ eggs on the counter.", o: ["are", "is"] },
            { t: "There ___ bread on the table.", o: ["is", "are"] }
          ] },
          { type: "gap", key: "p-aan", title: "Práctica 2 · a, an o nada", items: [
            { t: "There is ___ sofa in the living room.", o: ["a", "an", "—"] },
            { t: "There is ___ armchair in the living room.", o: ["an", "a", "—"] },
            { t: "There are ___ cushions on the sofa.", o: ["—", "a", "an"] },
            { t: "There is ___ picture above the bed.", o: ["a", "an", "—"] }
          ] }
        ]
      },
      {
        short: "Preposiciones", title: "Prepositions of place",
        lead: "Las preposiciones de lugar dicen dónde está un objeto con respecto a otro.",
        blocks: [
          { type: "preps", title: "Where is the ball?", items: [
            { en: "in", es: "en / dentro de", ex: "The ball is in the box.", art: [["📦", 50, 55, "font-size:2.6rem"], ["⚽", 50, 48, "font-size:1rem"]] },
            { en: "on", es: "sobre / encima de", ex: "The ball is on the box.", art: [["📦", 50, 66], ["⚽", 50, 28, "font-size:1.3rem"]] },
            { en: "under", es: "debajo de", ex: "The ball is under the box.", art: [["📦", 50, 34], ["⚽", 50, 76, "font-size:1.3rem"]] },
            { en: "above", es: "arriba de (sin tocar)", ex: "The ball is above the box.", art: [["📦", 50, 74], ["⚽", 50, 14, "font-size:1.3rem"]] },
            { en: "next to", es: "junto a / al lado de", ex: "The ball is next to the box.", art: [["📦", 38, 55], ["⚽", 66, 60, "font-size:1.3rem"]] },
            { en: "between", es: "entre", ex: "The ball is between the boxes.", art: [["📦", 22, 55], ["⚽", 50, 60, "font-size:1.3rem"], ["📦", 78, 55]] },
            { en: "behind", es: "detrás de", ex: "The ball is behind the box.", art: [["⚽", 60, 36, "font-size:1.3rem"], ["📦", 48, 58]] },
            { en: "in front of", es: "enfrente de / delante de", ex: "The ball is in front of the box.", art: [["📦", 50, 46], ["⚽", 58, 70, "font-size:1.3rem"]] }
          ] },
          { type: "mcq", key: "p-prep-k", title: "Práctica 1 · Look at the kitchen", fig: "kitchen", only: "none", intro: "Observa la cocina y elige la oración correcta.", items: [
            { q: "<span class='en'>Where is the clock?</span>", o: ["There is a clock in the kitchen, above the window.", "There is a clock in the kitchen, under the table.", "There is a clock in the kitchen, next to the door."], tip: "El reloj está en la pared, arriba de la ventana." },
            { q: "<span class='en'>Where is the pot?</span> (la olla azul)", o: ["There is a pot in the kitchen, on the stove.", "There is a pot in the kitchen, in the sink.", "There is a pot in the kitchen, under the chair."] },
            { q: "<span class='en'>Where is the hamburger?</span>", o: ["There is a hamburger in the kitchen, between the salt and the glass.", "There is a hamburger in the kitchen, behind the fridge.", "There are a hamburger in the kitchen, on the stove."], why: "Este es el ejemplo de tu actividad." }
          ] },
          { type: "mcq", key: "p-prep-b", title: "Práctica 2 · Look at the bedroom", fig: "bedroom", only: "none", intro: "Ahora la recámara.", items: [
            { q: "<span class='en'>Where are the slippers?</span>", o: ["There are slippers in the bedroom, on the rug.", "There is slippers in the bedroom, on the rug.", "There are slippers in the bedroom, under the bed."], tip: "Slippers es plural: There are. Están sobre el tapete azul." },
            { q: "<span class='en'>Where is the picture?</span>", o: ["There is a picture in the bedroom, above the bed.", "There is a picture in the bedroom, under the window.", "There is a picture in the bedroom, in front of the bed."] },
            { q: "<span class='en'>Where is the teddy bear?</span>", o: ["There is a teddy bear in the bedroom, on the dresser.", "There is a teddy bear in the bedroom, under the bed.", "There is a teddy bear in the bedroom, in front of the window."] }
          ] },
          { type: "mcq", key: "p-prep-t", title: "Práctica 3 · Look at the bathroom", fig: "bathroom", only: "none", intro: "Y el baño.", items: [
            { q: "<span class='en'>Where is the boat?</span>", o: ["There is a boat in the bathroom, in the bathtub.", "There is a boat in the bathroom, on the toilet.", "There is a boat in the bathroom, above the sink."] },
            { q: "<span class='en'>Where is the rug?</span>", o: ["There is a rug in the bathroom, between the toilet and the bathtub.", "There is a rug in the bathroom, above the toilet.", "There is a rug in the bathroom, in the cabinet."] },
            { q: "<span class='en'>Where is the toilet paper?</span>", o: ["There is toilet paper in the bathroom, next to the toilet.", "There is toilet paper in the bathroom, in the bathtub.", "There are toilet paper in the bathroom, next to the toilet."], tip: "Toilet paper no se cuenta: There is." }
          ] }
        ]
      },
      {
        short: "Listen & speak", title: "Listen, build and speak",
        lead: "Arma oraciones completas y practica tu pronunciación antes de escribir tus respuestas.",
        blocks: [
          { type: "order", key: "p-order", title: "Práctica 1 · Ordena la oración", intro: "Toca las piezas en el orden correcto.", items: [
            { q: "Where is the hamburger?", parts: ["There is", "a hamburger", "in the kitchen,", "between", "the salt", "and the glass."] },
            { q: "Where are the slippers?", parts: ["There are", "slippers", "in the bedroom,", "on", "the rug."] },
            { q: "Where is the clock?", parts: ["There is", "a clock", "in the kitchen,", "above", "the window."] }
          ] },
          { type: "voice", key: "p-voice", title: "Práctica 2 · Escucha y repite", intro: "Toca 🔊 para escuchar. Luego toca 🎤, di la oración y espera: el sitio te dirá cuánto se entendió.", items: [
            "There is a clock in the kitchen, above the window.",
            "There are slippers in the bedroom, on the rug.",
            "There is a boat in the bathroom, in the bathtub.",
            "There is a rug in the bathroom, between the toilet and the bathtub.",
            "There is a hamburger in the kitchen, between the salt and the glass."
          ] },
          { type: "html", html: "<h3>Tips de pronunciación</h3><ul class='clean'><li><b class='en'>There</b>: la <span class='en'>th</span> suena con la lengua entre los dientes, parecido a una «d» suave.</li><li><b class='en'>kitchen</b> = «kí-chen» · <b class='en'>bathroom</b> = «báz-rum» · <b class='en'>bedroom</b> = «béd-rum».</li><li><b class='en'>microwave</b> = «mái-crou-ueiv» · <b class='en'>flour</b> = «fláuer» · <b class='en'>towels</b> = «táuels».</li><li><b class='en'>between</b> = «bi-tuín» · <b class='en'>above</b> = «a-báv» · <b class='en'>behind</b> = «bi-jáind».</li></ul>" }
        ]
      },
      {
        short: "Sección A y B", title: "Tu actividad: ¿dónde está cada objeto?",
        lead: "Sección A: observa las imágenes de la casa. Sección B: responde las preguntas 1 a 10 sobre la ubicación de cada objeto.",
        blocks: [
          { type: "figure", title: "A. Look at the pictures of the house", intro: "Cada letra (a–j) señala el objeto de una pregunta.", figs: ["kitchen", "bathroom", "bedroom", "living"] },
          { type: "guided", check: "place", placeholder: "There is… / There are…",
            example: "<b>Example:</b> <span class='en'>Where is the hamburger?<br>There is a hamburger in the kitchen, between the salt and the glass.</span><br><span class='small'>Escribe cada respuesta con ese modelo y toca <b>Revisar mi respuesta</b>. Si te atoras, pide una pista.</span>",
            items: [
              q(1, "a", "Where is the microwave? (a)", "¿Dónde está el horno de microondas?", "kitchen", false, ["microwave"], "kitchen", ["counter", "sink", "egg", "window", "coffee", "bottle", "wine", "stove", "cabinet", "drawer"], hints("kitchen", "<i>counter</i> (barra), <i>sink</i> (fregadero), <i>eggs</i> (huevos), <i>window</i> (ventana), <i>coffee pot</i> (cafetera)", "There is a microwave in the ___, [preposición] the ___.")),
              q(2, "b", "Where is the fruit? (b)", "¿Dónde está la fruta?", "kitchen", false, ["fruit"], "kitchen", ["fridge", "refrigerator", "shelf", "plate", "bowl", "door", "flour", "jam", "jug", "pitcher", "tray"], hints("kitchen", "<i>fridge / refrigerator</i> (refrigerador), <i>shelf</i> (repisa), <i>plate</i> (plato), <i>door</i> (puerta)", "<b>Fruit</b> no se cuenta: There is fruit in the ___, [preposición] the ___.")),
              q(3, "c", "Where is the flour? (c)", "¿Dónde está la harina?", "kitchen", false, ["flour"], "kitchen", ["shelf", "jam", "jug", "pitcher", "teapot", "fridge", "refrigerator", "fruit"], hints("kitchen", "<i>shelf</i> (repisa), <i>jam</i> (mermelada), <i>jug</i> (jarra), <i>teapot</i> (tetera), <i>fridge</i> (refrigerador)", "<b>Flour</b> no se cuenta: There is flour in the ___, [preposición] the ___ (and the ___).")),
              q(4, "d", "Where are the extra towels? (d)", "¿Dónde están las toallas adicionales?", "bathroom", true, ["towel"], "bathroom", ["cabinet", "cupboard", "closet", "toilet", "picture", "sink", "wall", "rack"], hints("bathroom", "<i>cabinet</i> (gabinete), <i>toilet</i> (inodoro), <i>picture</i> (cuadro), <i>sink</i> (lavabo)", "Es plural: There are extra towels in the ___, [preposición] the ___.")),
              q(5, "e", "Where are the toothbrushes? (e)", "¿Dónde están los cepillos de dientes?", "bathroom", true, ["toothbrush"], "bathroom", ["cup", "glass", "sink", "mirror", "faucet", "tap", "holder"], hints("bathroom", "<i>cup</i> (vaso), <i>sink</i> (lavabo), <i>mirror</i> (espejo), <i>faucet</i> (llave del agua)", "Es plural: There are toothbrushes in the ___, [preposición] the ___.")),
              q(6, "f", "Where is the mirror? (f)", "¿Dónde está el espejo?", "bathroom", false, ["mirror"], "bathroom", ["sink", "picture", "wall", "toothbrush", "cabinet", "faucet", "cup"], hints("bathroom", "<i>sink</i> (lavabo), <i>picture</i> (cuadro), <i>wall</i> (pared), <i>cabinet</i> (gabinete)", "There is a mirror in the ___, [preposición] the ___.")),
              q(7, "g", "Where is the dresser? (g)", "¿Dónde está la cajonera?", "bedroom", false, ["dresser"], "bedroom", ["bed", "teddy", "bear", "picture", "wall", "corner", "rug", "toy"], hints("bedroom", "<i>bed</i> (cama), <i>teddy bear</i> (oso de peluche), <i>picture</i> (cuadro), <i>rug</i> (tapete)", "There is a dresser in the ___, [preposición] the ___.")),
              q(8, "h", "Where is the lamp? (h)", "¿Dónde está la lámpara?", "bedroom", false, ["lamp"], "bedroom", ["nightstand", "night stand", "bedside", "table", "clock", "bed", "window", "picture"], hints("bedroom", "<i>nightstand</i> (buró), <i>alarm clock</i> (despertador), <i>bed</i> (cama), <i>window</i> (ventana)", "There is a lamp in the ___, [preposición] the ___.")),
              q(9, "i", "Where is the bookcase? (i)", "¿Dónde está el librero?", "living", false, ["bookcase"], "living room", ["armchair", "chair", "sofa", "couch", "picture", "painting", "wall", "window", "curtain", "vase", "clock"], hints("living room", "<i>armchair</i> (sillón), <i>sofa</i> (sofá), <i>pictures</i> (cuadros), <i>curtains</i> (cortinas). El librero es el mueble rojo que tiene libros encima", "There is a bookcase in the ___, [preposición] the ___.")),
              q(10, "j", "Where is the light switch? (j)", "¿Dónde está el interruptor de luz?", "living", false, ["switch"], "living room", ["wall", "window", "lamp", "curtain", "sofa", "couch"], hints("living room", "<i>wall</i> (pared), <i>window</i> (ventana), <i>floor lamp</i> (lámpara de pie), <i>curtains</i> (cortinas)", "There is a light switch in the ___, [preposición] the ___."))
            ] }
        ]
      },
      {
        short: "Sección C", title: "Describe the living room",
        lead: "Sección C: describe la sala de estar. Escribe sobre los muebles que hay y sus características.",
        blocks: [
          { type: "cards", title: "Adjectives · Características", items: [["🔵", "blue", "azul"], ["🔴", "red", "rojo"], ["🟠", "orange", "naranja"], ["⬜", "white", "blanco"], ["🐘", "big", "grande"], ["🐭", "small", "pequeño"], ["☁️", "comfortable", "cómodo"], ["🪵", "wooden", "de madera"], ["✨", "modern", "moderno"], ["🌈", "colorful", "colorido"], ["📏", "long", "largo"], ["🦒", "tall", "alto"]] },
          { type: "html", html: "<h3>¿Cómo se describe un mueble?</h3><p>En inglés el adjetivo va <b>antes</b> del sustantivo:</p><ul class='clean'><li class='en'>There is a <b>big blue</b> sofa. <span class='muted'>(no «a sofa blue»)</span></li><li class='en'>The sofa is <b>comfortable</b>.</li><li class='en'>There are <b>two colorful</b> pictures on the wall.</li></ul><div class='note'><b>Plan para tu párrafo:</b><br>1. Empieza con una oración general: <span class='en'>This is the living room. It is…</span><br>2. Menciona 4 o 5 muebles con <span class='en'>There is / There are</span> y un adjetivo.<br>3. Di dónde están (<span class='en'>next to, in front of, on, behind…</span>).<br>4. Cierra con tu opinión: <span class='en'>I like this living room because…</span></div>" },
          { type: "gap", key: "p-adj", title: "Práctica · Elige el orden correcto", items: [
            { t: "There is a ___ in the bedroom.", o: ["green bed", "bed green"] },
            { t: "There are ___ in the kitchen.", o: ["two wooden chairs", "two chairs wooden", "wooden two chairs"] },
            { t: "The bathroom rug ___ pink.", o: ["is", "are"] }
          ] },
          { type: "free", key: "c", title: "C. Describe the living room", fig: "living", min: 40, rows: 7, lang: "en", placeholder: "This is the living room. There is…",
            rules: [
              { msg: "Menciona el cuarto: <i>living room</i>.", test: function (f) { return f.indexOf(" living room") >= 0; } },
              { msg: "Usa <i>There is</i> y también <i>There are</i>.", test: function (f) { return f.indexOf(" there is ") >= 0 && f.indexOf(" there are ") >= 0; } },
              { msg: "Nombra al menos cuatro muebles u objetos de la sala.", test: function (f) { return has(f, FURNITURE) >= 4; } },
              { msg: "Incluye al menos tres características (adjetivos: color, tamaño, material…).", test: function (f) { return has(f, ADJ) >= 3; } },
              { msg: "Di dónde está algún mueble con una preposición (<i>next to, in front of, on, behind, between…</i>).", test: function (f) { return /\b(next to|in front of|behind|between|above|under|on the|near)\b/.test(f); } }
            ] }
        ]
      },
      {
        short: "Sección D · Audio", title: "Graba tu audio",
        lead: "Sección D: grábate leyendo en voz alta tus respuestas 1 a 10 de la sección B. La grabación debe durar al menos 30 segundos.",
        blocks: [
          { type: "readaloud", title: "1. Ensaya cada respuesta", intro: "<p>Escucha tu respuesta con 🔊 y luego léela con 🎤. Las palabras en verde se entendieron; las subrayadas en rojo necesitan más práctica.</p>",
            keys: [["b1", "1. Microwave"], ["b2", "2. Fruit"], ["b3", "3. Flour"], ["b4", "4. Extra towels"], ["b5", "5. Toothbrushes"], ["b6", "6. Mirror"], ["b7", "7. Dresser"], ["b8", "8. Lamp"], ["b9", "9. Bookcase"], ["b10", "10. Light switch"]] },
          { type: "recorder", key: "d", file: "M06_S2_AI3_audio", title: "2. Graba y comparte tu audio",
            intro: "<p>Cuando te sientas con confianza, graba <b>todas</b> tus respuestas de corrido. Lee despacio y con claridad. Puedes repetir la grabación las veces que quieras.</p>",
            keys: [["b1"], ["b2"], ["b3"], ["b4"], ["b5"], ["b6"], ["b7"], ["b8"], ["b9"], ["b10"]],
            after: "<h3>3. Sube tu audio a la nube</h3><ol class='clean'><li>Descarga tu audio con el botón de arriba (o usa uno que grabaste con tu celular).</li><li>Entra a <b>Google Drive</b> (drive.google.com) → <b>Nuevo</b> → <b>Subir archivo</b> y elige tu audio.</li><li>Da clic derecho en el archivo → <b>Compartir</b> → en «Acceso general» elige <b>Cualquier persona con el enlace</b> (Lector).</li><li>Toca <b>Copiar enlace</b> y pégalo aquí:</li></ol>" }
        ]
      },
      {
        short: "Sección E", title: "Reflexión",
        lead: "Sección E: esta respuesta se escribe en español.",
        blocks: [
          { type: "free", key: "e", lang: "es", min: 100, max: 150, rows: 9, title: "E. ¿Por qué es valioso que puedas hablar en inglés sobre tu hogar y los objetos de tu vida cotidiana?",
            intro: "<p>Escribe tu respuesta en español en un párrafo de entre 6 y 8 líneas (aproximadamente 100 a 150 palabras).</p><div class='note'><b>Ideas para empezar</b> (elige las que sean verdad para ti):<ul class='clean'><li>¿En qué situaciones reales lo usarías? (recibir visitas, viajar, rentar un cuarto, un trabajo, una videollamada…)</li><li>¿Qué palabras nuevas aprendiste que ves todos los días en tu casa?</li><li>¿Cómo te ayuda practicar con cosas que ya conoces?</li><li>¿Cómo te sentiste al escribir y grabarte en inglés?</li></ul></div>",
            placeholder: "Para mí es valioso porque…", okMsg: "¡Muy bien! Tu reflexión tiene la extensión que se pide. Léela una vez más para revisar ortografía.",
            rules: [{ msg: "Escribe con tus propias palabras y en español; menciona el inglés y tu hogar o vida diaria.", test: function (f) { return /ingl[eé]s/.test(f) && /(hogar|casa|cotidian|diari)/.test(f); } }] }
        ]
      },
      {
        short: "Entrega", title: "Revisa y entrega",
        lead: "Aquí están todas tus respuestas. Cópialas al archivo oficial de la actividad que descargaste de la plataforma: ese es el que envías.",
        blocks: [
          { type: "summary", file: "M06_S2_AI3_respuestas", title: "Mis respuestas · Actividad integradora 3",
            sections: [
              { title: "B. Location of each object", items: [["b1", "1. Where is the microwave? (a)"], ["b2", "2. Where is the fruit? (b)"], ["b3", "3. Where is the flour? (c)"], ["b4", "4. Where are the extra towels? (d)"], ["b5", "5. Where are the toothbrushes? (e)"], ["b6", "6. Where is the mirror? (f)"], ["b7", "7. Where is the dresser? (g)"], ["b8", "8. Where is the lamp? (h)"], ["b9", "9. Where is the bookcase? (i)"], ["b10", "10. Where is the light switch? (j)"]] },
              { title: "C. Describe the living room", items: [["c", "Descripción de la sala de estar"]] },
              { title: "D. Audio", items: [["d", "Enlace a mi grabación"]] },
              { title: "E. Reflexión", items: [["e", "¿Por qué es valioso hablar en inglés sobre tu hogar?", "es"]] }
            ],
            outro: "<h3>Lista final antes de enviar</h3><ul class='clean'><li>Mis 10 respuestas empiezan con <span class='en'>There is / There are</span> y dicen el cuarto y la ubicación.</li><li>Mi audio dura al menos 30 segundos y el enlace abre sin pedir permiso.</li><li>Mi reflexión está en español y tiene de 100 a 150 palabras.</li><li>Pegué todo en el formato de Word y puse mis datos.</li></ul><p><a class='btn primary' href='actividad-4.html'>Continuar con la Actividad 4 →</a></p>" }
        ]
      }
    ]
  };
})();
