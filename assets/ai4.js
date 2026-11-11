/* Actividad integradora 4 — Come to my house (M06 S2) */
(function () {
  function r(n, en, es, from, dest, hints) {
    return { n: n, key: "b" + n, q: en, es: es, fig: "map", mark: "none", from: from, dest: dest, hints: hints };
  }
  var STARTERS = "Inicios útiles: <i>First, walk … along … / Then turn … onto … / After that, pass the … / Next, cross … / Finally, … / The … is next to / opposite the …</i> Tú decides si cada vuelta es <i>left</i> o <i>right</i>: imagina que caminas por la calle.";

  window.ACTIVITY = {
    id: "ai4",
    title: "Actividad integradora 4 · Come to my house",
    map: {
      sequencers: ["first", "then", "after that", "next", "finally", "second", "later"],
      streets: [["queens avenue", "queens ave"], ["oxford street", "oxford st"], ["high street", "high st"], ["kings way"], ["princes road", "princes rd"], ["baker street", "baker st"], ["trinity college road"], ["clive street", "clive st"], ["park road"], ["percy street"], ["london road"]],
      places: ["bus station", "bookshop", "hotel", "newsagent", "baker", "grocer", "butcher", "police station", "theatre", "theater", "petrol station", "car park", "library", "school", "church", "museum", "chemist", "market", "pub", "cinema", "post office", "bank", "restaurant", "football pitch", "shopping centre", "shopping center", "camping site", "golf course", "bridge", "river", "house", "traffic light", "roundabout"]
    },
    figures: {
      map: { src: "img/map.png", cls: "map", alt: "Mapa de un vecindario. Calles horizontales de arriba a abajo: King's Way, Oxford Street, Prince's Road y Percy Street. Calles verticales: Queen's Avenue al centro; High St, Baker St, Clive St y Trinity College Road a la derecha. Lugares: camping site, restaurant, car park, bank, post office, cinema, football pitch, my house, shopping centre, pub, market, chemist's, library, newsagent's, baker's, hotel, grocer's, bookshop, butcher's, museum, church, school, bus station, theatre, police station, park, petrol station y golf course." }
    },
    steps: [
      {
        short: "Objetivo", title: "¿Qué vas a lograr?",
        lead: "Actividad integradora 4. Come to my house · Módulo 6, semana 2",
        blocks: [
          { type: "html", html: "<h3>Objetivo</h3><p>Al terminar podrás <b>explicar en inglés cómo llegar de un lugar a otro</b> en un vecindario: usarás verbos de dirección, nombres de calles y lugares, y conectores de secuencia, por escrito y en voz alta.</p><h3>Lo que vas a entregar</h3><ul class='clean'><li><b>Sección B:</b> 5 explicaciones en inglés de rutas en el mapa.</li><li><b>Sección C:</b> el enlace a un audio (mínimo 30 segundos) donde lees tus respuestas.</li><li><b>Sección D:</b> una reflexión en español de 100 a 150 palabras.</li></ul>" },
          { type: "html", html: "<h3>¿Cómo funciona este sitio?</h3><ul class='clean'><li>Avanza con el botón <b>Siguiente</b>: primero aprendes y practicas, después contestas tu actividad.</li><li>Tus respuestas <b>se guardan en este dispositivo</b>.</li><li>Para los ejercicios de voz usa <b>Google Chrome</b> o <b>Edge</b> y permite el micrófono.</li><li>En el último paso están todas tus respuestas para copiarlas al archivo oficial que descargas de la plataforma.</li></ul><div class='note accent'>Si todavía no haces la <a href='actividad-3.html'>Actividad 3</a>, empieza por ella.</div>" }
        ]
      },
      {
        short: "Lugares", title: "Places in the neighborhood",
        lead: "El mapa usa inglés británico. Estas son las palabras que necesitas.",
        blocks: [
          { type: "figure", title: "A. Look at this map of a neighborhood", fig: "map", intro: "Obsérvalo con calma: ubica las calles y los lugares. Lo vas a usar en toda la actividad." },
          { type: "cards", title: "Places · Lugares", items: [["🚌", "bus station", "estación de autobuses"], ["🏠", "my house", "mi casa"], ["🏦", "bank", "banco"], ["🏛️", "museum", "museo"], ["🍽️", "restaurant", "restaurante"], ["🍺", "pub", "taberna"], ["📮", "post office", "oficina de correos"], ["🎬", "cinema", "cine"], ["🛒", "market", "mercado"], ["📖", "library", "biblioteca"], ["📚", "bookshop", "librería"], ["🏫", "school", "escuela"], ["⛪", "church", "iglesia"], ["🏨", "hotel", "hotel"], ["🎭", "theatre", "teatro"], ["👮", "police station", "estación de policía"], ["🌳", "park", "parque"], ["🛍️", "shopping centre", "centro comercial"]] },
          { type: "cards", title: "British words · Palabras británicas del mapa", items: [["💊", "chemist's", "farmacia"], ["📰", "newsagent's", "puesto de periódicos"], ["🥖", "baker's", "panadería (bakery)"], ["🥫", "grocer's", "tienda de abarrotes"], ["🥩", "butcher's", "carnicería"], ["⛽", "petrol station", "gasolinera"], ["🅿️", "car park", "estacionamiento"], ["⚽", "football pitch", "cancha de futbol"], ["🌉", "bridge", "puente"], ["🚦", "traffic lights", "semáforo"], ["🔄", "roundabout", "glorieta"], ["🏞️", "river", "río"]] },
          { type: "html", html: "<div class='note warn'><b>¡Cuidado con este falso amigo!</b> <span class='en'>library</span> = biblioteca · <span class='en'>bookshop</span> = librería.</div>" },
          { type: "match", key: "p-match", title: "Práctica 1 · Une la palabra con su significado", pairs: [["library", "biblioteca"], ["bookshop", "librería"], ["chemist's", "farmacia"], ["car park", "estacionamiento"], ["petrol station", "gasolinera"], ["pub", "taberna"], ["bridge", "puente"], ["baker's", "panadería"]] },
          { type: "gap", key: "p-where", fig: "map", title: "Práctica 2 · ¿Dónde está? Mira el mapa", tip: "next to = junto a · opposite = enfrente de (cruzando la calle) · between = entre.", items: [
            { t: "The hotel is ___ the newsagent's and the bookshop.", o: ["between", "opposite", "next to"] },
            { t: "The pub is ___ the bank.", o: ["opposite", "between", "behind"] },
            { t: "The market is ___ the pub.", o: ["next to", "opposite", "between"] },
            { t: "The post office is ___ the bank and the cinema.", o: ["between", "opposite", "on"] },
            { t: "The bus station is ___ the corner of Queen's Avenue and Prince's Road.", o: ["on", "between", "opposite"] }
          ] }
        ]
      },
      {
        short: "Direcciones", title: "Giving directions",
        lead: "Para explicar un camino se usan verbos en imperativo (la orden directa), sin sujeto.",
        blocks: [
          { type: "html", html: "<div class='tbl-wrap'><table><tr><th>Frase</th><th>Significado</th><th>Ejemplo</th></tr><tr><td class='en'><b>Walk / Go along…</b></td><td>Camina por…</td><td class='en'>Walk along Queen's Avenue.</td></tr><tr><td class='en'><b>Walk north / south / east / west</b></td><td>Camina hacia el norte / sur / este / oeste</td><td class='en'>Walk north along Queen's Avenue.</td></tr><tr><td class='en'><b>Go straight / Keep walking</b></td><td>Sigue derecho</td><td class='en'>Go straight and keep walking.</td></tr><tr><td class='en'><b>Turn left / right onto…</b></td><td>Da vuelta a la izquierda / derecha en…</td><td class='en'>Turn right onto Oxford Street.</td></tr><tr><td class='en'><b>Pass…</b></td><td>Pasa (por enfrente de)…</td><td class='en'>Pass the hotel.</td></tr><tr><td class='en'><b>Cross…</b></td><td>Cruza…</td><td class='en'>Cross the bridge.</td></tr><tr><td class='en'><b>It is on your left / right</b></td><td>Está a tu izquierda / derecha</td><td class='en'>The bank is on your right.</td></tr><tr><td class='en'><b>next to / opposite / between</b></td><td>junto a / enfrente de / entre</td><td class='en'>The bakery is next to the newsagent's.</td></tr></table></div>" },
          { type: "html", html: "<h3>El orden de los pasos</h3><p>Usa conectores de secuencia para que tu explicación sea clara:</p><p class='note en'><b>First,</b> … &nbsp;→&nbsp; <b>Then</b> … &nbsp;→&nbsp; <b>After that,</b> … &nbsp;→&nbsp; <b>Next,</b> … &nbsp;→&nbsp; <b>Finally,</b> …</p><h3>¿Izquierda o derecha?</h3><p>En el mapa, <b>north</b> es arriba, <b>south</b> abajo, <b>east</b> a la derecha y <b>west</b> a la izquierda. Pero <span class='en'>left</span> y <span class='en'>right</span> dependen de hacia dónde caminas:</p><ul class='clean'><li>Si caminas hacia el <b>norte</b> (arriba): <span class='en'>right</span> = este, <span class='en'>left</span> = oeste.</li><li>Si caminas hacia el <b>sur</b> (abajo): se invierte, <span class='en'>right</span> = oeste, <span class='en'>left</span> = este.</li><li>Si caminas hacia el <b>este</b> (derecha): <span class='en'>right</span> = sur, <span class='en'>left</span> = norte.</li><li>Si caminas hacia el <b>oeste</b> (izquierda): <span class='en'>right</span> = norte, <span class='en'>left</span> = sur.</li></ul><div class='note accent'><b>Truco:</b> gira tu celular o tu hoja para que la calle por la que caminas apunte hacia arriba; así tu izquierda y tu derecha coinciden con las del mapa.</div>" },
          { type: "cards", title: "Escucha las frases", items: [["🚶", "Walk north along Queen's Avenue.", "Camina al norte por Queen's Avenue."], ["➡️", "Turn right onto Oxford Street.", "Da vuelta a la derecha en Oxford Street."], ["⬅️", "Turn left onto High Street.", "Da vuelta a la izquierda en High Street."], ["⬆️", "Go straight and keep walking.", "Sigue derecho."], ["🏨", "Pass the hotel.", "Pasa el hotel."], ["🌉", "Cross the bridge.", "Cruza el puente."]] },
          { type: "gap", key: "p-phr", title: "Práctica 1 · Completa las instrucciones", items: [
            { t: "___ right onto Oxford Street.", o: ["Turn", "Pass", "Along"] },
            { t: "Walk north ___ Queen's Avenue.", o: ["along", "between", "next"] },
            { t: "___ the hotel and the bookshop.", o: ["Pass", "Turn", "Onto"] },
            { t: "___ the bridge and keep walking.", o: ["Cross", "Next", "Left"] },
            { t: "The bakery is ___ to the newsagent's.", o: ["next", "opposite", "between"] },
            { t: "First, walk north. ___, turn right.", o: ["Then", "First", "Along"] }
          ] },
          { type: "mcq", key: "p-lr", title: "Práctica 2 · ¿Left o right?", fig: "map", intro: "Imagina que caminas por la calle y elige.", items: [
            { q: "Caminas hacia el <b>norte</b> por Queen's Avenue y quieres entrar a Oxford Street hacia la panadería (<span class='en'>baker's</span>).", o: ["Turn right onto Oxford Street.", "Turn left onto Oxford Street."], tip: "Vas hacia arriba; la panadería queda a la derecha del mapa." },
            { q: "Caminas hacia el <b>sur</b> por Queen's Avenue (de arriba hacia abajo) y quieres entrar a Oxford Street hacia el banco.", o: ["Turn right onto Oxford Street.", "Turn left onto Oxford Street."], tip: "Vas hacia abajo: todo se invierte. Gira el mapa para comprobarlo.", why: "Al caminar al sur, el oeste queda a tu derecha." },
            { q: "Caminas hacia el <b>este</b> por Prince's Road (de izquierda a derecha) y quieres subir por Queen's Avenue.", o: ["Turn left onto Queen's Avenue.", "Turn right onto Queen's Avenue."], tip: "Al caminar al este, el norte queda a tu izquierda." }
          ] }
        ]
      },
      {
        short: "Sigue la ruta", title: "Follow the route",
        lead: "Antes de escribir tus rutas, practica leyendo y siguiendo instrucciones en el mapa.",
        blocks: [
          { type: "html", html: "<h3>El ejemplo de tu actividad</h3><p class='en'><b>How can I get to the bakery from the bus station?</b></p><p class='note en'><b>First,</b> walk north along Queen's Avenue. <b>After that,</b> pass three buildings: the orange bookshop, the blue hotel, and the yellow newsagents. <b>Then</b> turn right onto Oxford Street and keep walking. The bakery is next to the newsagents.</p><p>Fíjate en sus cuatro partes: <b>1)</b> por dónde empiezas a caminar, <b>2)</b> qué edificios pasas, <b>3)</b> dónde das vuelta, <b>4)</b> dónde está el destino.</p>" },
          { type: "order", key: "p-order", col: true, fig: "map", title: "Práctica 1 · Ordena las instrucciones", intro: "Sigue la ruta en el mapa y toca las oraciones en orden.", items: [
            { q: "<span class='en'>How can I get to the bakery from the bus station?</span>", parts: ["First, walk north along Queen's Avenue.", "After that, pass the bookshop, the hotel and the newsagent's.", "Then turn right onto Oxford Street and keep walking.", "The bakery is next to the newsagent's."] },
            { q: "<span class='en'>How can I get to the library from the cinema?</span>", parts: ["First, walk east along Oxford Street.", "Then turn right onto Queen's Avenue.", "After that, pass the chemist's.", "The library is on your right, next to the chemist's."] }
          ] },
          { type: "mcq", key: "p-arrive", fig: "map", title: "Práctica 2 · ¿A dónde llegas?", intro: "Lee las instrucciones, síguelas con el dedo en el mapa y elige el lugar.", items: [
            { q: "<span class='en'>You are at the bus station. Walk north along Queen's Avenue. Turn left onto Oxford Street. It is the first building on your left.</span>", o: ["The chemist's", "The cinema", "The newsagent's"], tip: "Al dar vuelta a la izquierda caminas hacia el oeste; tu izquierda es el lado de abajo de la calle." },
            { q: "<span class='en'>You are at the cinema. Walk east along Oxford Street. Cross Queen's Avenue. It is the first building on your right.</span>", o: ["The newsagent's", "The football pitch", "The post office"], tip: "Caminas hacia la derecha del mapa; tu derecha es el lado de abajo." },
            { q: "<span class='en'>You are at the police station. Walk west along Prince's Road. Pass Clive Street. It is on your left, on the corner of Queen's Avenue.</span>", o: ["The bus station", "The bookshop", "The school"], tip: "Caminas hacia la izquierda del mapa; tu izquierda es el lado de abajo de Prince's Road." }
          ] }
        ]
      },
      {
        short: "Listen & speak", title: "Listen and speak",
        lead: "Practica la pronunciación de las frases que usarás en tus rutas.",
        blocks: [
          { type: "voice", key: "p-voice", title: "Escucha y repite", intro: "Toca 🔊 para escuchar. Luego toca 🎤, di la oración y espera el resultado.", items: [
            "Walk north along Queen's Avenue.",
            "Turn right onto Oxford Street.",
            "Pass the hotel and the bookshop.",
            "Cross the bridge and keep walking.",
            "The bank is opposite the pub.",
            "First, go straight. Then turn left."
          ] },
          { type: "html", html: "<h3>Tips de pronunciación</h3><ul class='clean'><li><b class='en'>walk</b> = «uók» (la <i>l</i> no suena) · <b class='en'>straight</b> = «stréit».</li><li><b class='en'>turn</b> = «tern» · <b class='en'>right</b> = «ráit» · <b class='en'>left</b> = «left».</li><li><b class='en'>avenue</b> = «á-ve-niu» · <b class='en'>street</b> = «strit» (sin «e» al inicio).</li><li><b class='en'>museum</b> = «miu-zí-em» · <b class='en'>chemist's</b> = «ké-mists» · <b class='en'>opposite</b> = «ó-po-zit».</li><li><b class='en'>bridge</b> = «brich» · <b class='en'>church</b> = «cherch» · <b class='en'>north</b> = «norz».</li></ul>" }
        ]
      },
      {
        short: "Sección A y B", title: "Tu actividad: explica el camino",
        lead: "Sección A: observa el mapa. Sección B: responde las preguntas con la información del mapa.",
        blocks: [
          { type: "guided", check: "route", rows: 5, placeholder: "First, walk…",
            example: "<b>Example:</b> <span class='en'>How can I get to the bakery from the bus station?<br>First, walk north along Queen's Avenue. After that, pass three buildings: the orange bookshop, the blue hotel, and the yellow newsagents. Then turn right onto Oxford Street and keep walking. The bakery is next to the newsagents.</span><br><span class='small'>Traza primero la ruta con el dedo. Escribe los pasos en orden y toca <b>Revisar mi respuesta</b>. Si te atoras, pide una pista. Puede haber más de un camino correcto.</span>",
            items: [
              r(1, "What's the way to go from the bus station to your house?", "¿Cuál es el camino para ir de la estación de autobuses a tu casa?", ["bus station"], ["house"], [
                "Ubica la salida y la meta: la <i>bus station</i> está en la esquina de Queen's Avenue y Prince's Road; <i>My house</i> está arriba a la derecha, sobre High St, junto al <i>shopping centre</i>.",
                "Una ruta posible usa estas calles en orden: <i>Queen's Avenue → Oxford Street → High Street</i>. Edificios en el camino: <i>bookshop, hotel, newsagent's, baker's, football pitch</i>.",
                STARTERS]),
              r(2, "Explain how to go from your house to the bank.", "Explica cómo ir de tu casa al banco.", ["house"], ["bank"], [
                "<i>My house</i> está sobre High St; el <i>bank</i> está al final de Oxford Street, del lado izquierdo del mapa, enfrente del <i>pub</i>.",
                "Una ruta posible: <i>High Street → Oxford Street</i> (cruzas <i>Queen's Avenue</i>). Edificios en el camino: <i>football pitch, newsagent's, chemist's, cinema, market, post office</i>.",
                STARTERS]),
              r(3, "Explain the way from the bank to the museum.", "Explica el camino del banco al museo.", ["bank"], ["museum"], [
                "El <i>museum</i> está sobre Prince's Road, junto a la <i>church</i>. No hay una calle directa hacia abajo desde el banco: busca la avenida que conecta Oxford Street con Prince's Road.",
                "Una ruta posible: <i>Oxford Street → Queen's Avenue → Prince's Road</i>. Edificios en el camino: <i>post office, cinema, chemist's, library, school, church</i>.",
                STARTERS]),
              r(4, "What's the way from the museum to the restaurant?", "¿Cuál es el camino del museo al restaurante?", ["museum"], ["restaurant"], [
                "El <i>restaurant</i> está arriba a la izquierda, sobre King's Way, junto al <i>car park</i>. Sobre King's Way hay un puente (<i>bridge</i>) que cruza el río.",
                "Una ruta posible: <i>Prince's Road → Queen's Avenue → King's Way</i>. En el camino: <i>church, school, library, chemist's, football pitch, bridge, car park</i>.",
                STARTERS]),
              r(5, "Explain how to go from the restaurant to the pub.", "Explica cómo ir del restaurante a la taberna.", ["restaurant"], ["pub"], [
                "El <i>pub</i> está sobre Oxford Street, junto al <i>market</i> y enfrente del <i>bank</i>.",
                "Una ruta posible: <i>King's Way → Queen's Avenue → Oxford Street</i>. En el camino: <i>car park, bridge, football pitch, cinema, chemist's, post office, market</i>.",
                STARTERS])
            ] }
        ]
      },
      {
        short: "Sección C · Audio", title: "Graba tu audio",
        lead: "Sección C: grábate leyendo en voz alta tus respuestas de la sección B. La grabación debe durar al menos 30 segundos.",
        blocks: [
          { type: "readaloud", title: "1. Ensaya cada respuesta", intro: "<p>Escucha tu respuesta con 🔊 y luego léela con 🎤. Las palabras en verde se entendieron; las subrayadas en rojo necesitan más práctica. Los nombres de calles a veces no se reconocen bien: no te preocupes si esos fallan.</p>",
            keys: [["b1", "1. Bus station → my house"], ["b2", "2. My house → bank"], ["b3", "3. Bank → museum"], ["b4", "4. Museum → restaurant"], ["b5", "5. Restaurant → pub"]] },
          { type: "recorder", key: "c", file: "M06_S2_AI4_audio", title: "2. Graba y comparte tu audio",
            intro: "<p>Graba tus cinco respuestas de corrido. Lee despacio, haz una pausa breve entre cada ruta. Puedes repetir la grabación las veces que quieras.</p>",
            keys: [["b1"], ["b2"], ["b3"], ["b4"], ["b5"]],
            after: "<h3>3. Sube tu audio a la nube</h3><ol class='clean'><li>Descarga tu audio con el botón de arriba (o usa uno que grabaste con tu celular).</li><li>Entra a <b>Google Drive</b> (drive.google.com) → <b>Nuevo</b> → <b>Subir archivo</b> y elige tu audio.</li><li>Da clic derecho en el archivo → <b>Compartir</b> → en «Acceso general» elige <b>Cualquier persona con el enlace</b> (Lector).</li><li>Toca <b>Copiar enlace</b> y pégalo aquí:</li></ol>" }
        ]
      },
      {
        short: "Sección D", title: "Reflexión",
        lead: "Sección D: esta respuesta se escribe en español.",
        blocks: [
          { type: "free", key: "d", lang: "es", min: 100, max: 150, rows: 9, title: "D. ¿Cómo puede el uso del inglés contribuir a que más personas conozcan tu comunidad de manera respetuosa e inclusiva?",
            intro: "<p>Escribe tu respuesta en español en un párrafo de entre 6 y 8 líneas (aproximadamente 100 a 150 palabras).</p><div class='note'><b>Ideas para empezar</b> (elige las que sean verdad para ti):<ul class='clean'><li>¿Qué lugares de tu comunidad te gustaría que conocieran los visitantes?</li><li>¿Cómo ayudaría poder dar indicaciones o explicar tus tradiciones en inglés?</li><li>¿Qué significa recibir a alguien con respeto? ¿Y que nadie quede excluido por su idioma?</li><li>¿Cómo puedes compartir tu comunidad sin perder su identidad?</li></ul></div>",
            placeholder: "El uso del inglés puede contribuir porque…", okMsg: "¡Muy bien! Tu reflexión tiene la extensión que se pide. Léela una vez más para revisar ortografía.",
            rules: [{ msg: "Escribe con tus propias palabras y en español; menciona el inglés y tu comunidad.", test: function (f) { return /ingl[eé]s/.test(f) && /comunidad/.test(f); } }] }
        ]
      },
      {
        short: "Entrega", title: "Revisa y entrega",
        lead: "Aquí están todas tus respuestas. Cópialas al archivo oficial de la actividad que descargaste de la plataforma: ese es el que envías.",
        blocks: [
          { type: "summary", file: "M06_S2_AI4_respuestas", title: "Mis respuestas · Actividad integradora 4",
            sections: [
              { title: "B. Directions on the map", items: [["b1", "1. What's the way to go from the bus station to your house?"], ["b2", "2. Explain how to go from your house to the bank."], ["b3", "3. Explain the way from the bank to the museum."], ["b4", "4. What's the way from the museum to the restaurant?"], ["b5", "5. Explain how to go from the restaurant to the pub."]] },
              { title: "C. Audio", items: [["c", "Enlace a mi grabación"]] },
              { title: "D. Reflexión", items: [["d", "¿Cómo puede el inglés contribuir a que más personas conozcan tu comunidad?", "es"]] }
            ],
            outro: "<h3>Lista final antes de enviar</h3><ul class='clean'><li>Mis 5 rutas usan conectores (<span class='en'>First, Then, After that, Finally</span>), nombres de calles y <span class='en'>turn left / right</span>.</li><li>Seguí cada ruta en el mapa y sí llega al destino.</li><li>Mi audio dura al menos 30 segundos y el enlace abre sin pedir permiso.</li><li>Mi reflexión está en español y tiene de 100 a 150 palabras.</li><li>Pegué todo en el formato de Word y puse mis datos.</li></ul>" }
        ]
      }
    ]
  };
})();
