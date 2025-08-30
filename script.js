// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// FAQ toggle functionality
function toggleFAQ(index) {
    const content = document.getElementById(`faq-content-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
}

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
        document.getElementById('contact-form').classList.add('hidden');
        document.getElementById('form-success').classList.remove('hidden');
        
        // Reset form after 3 seconds
        setTimeout(() => {
            document.getElementById('contact-form').classList.remove('hidden');
            document.getElementById('form-success').classList.add('hidden');
            document.getElementById('contact-form').reset();
        }, 3000);
    }, 500);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.remove('hidden');
    } else {
        backToTopBtn.classList.add('hidden');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Article modal functionality
function openArticle(type) {
    const modal = document.getElementById('article-modal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');
    
    const articles = {
        equipaje: {
            title: '8 objetos imprescindibles para viajar',
            content: `
                <div class="prose max-w-none">
                    <img src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800" 
                         alt="Equipaje de viaje" class="w-full h-64 object-cover rounded-lg mb-6">
                    
                    <p class="text-lg text-gray-700 mb-6">
                        <strong>Después de años viajando, he aprendido que llevar lo correcto marca la diferencia entre un viaje cómodo y uno lleno de problemas.</strong> 
                        Aquí tienes los 8 objetos que nunca faltan en mi equipaje y que me han salvado el viaje más de una vez.
                    </p>

                    <div class="space-y-8">
                        <div class="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 class="text-xl font-bold mb-3">🎒 Mochila Cabina 40x20x25</h3>
                            <p class="text-gray-700 mb-4">
                                Perfecta para aerolíneas como Ryanair. Evita cargos extra y colas de facturación. 
                                Sus compartimentos están pensados para aprovechar cada centímetro.
                            </p>
                            <div class="flex items-center justify-between">
                                <span class="text-emerald-600 font-bold">Desde 35€</span>
                                <a href="https://www.amazon.es/Hayayu-40x20x25-Mochilas-Senderismo-Impermeable/dp/B0CBVFL64Z?tag=viajamejor-21" 
                                   target="_blank" rel="noopener noreferrer"
                                   class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                                    Ver en Amazon
                                </a>
                            </div>
                        </div>

                        <div class="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 class="text-xl font-bold mb-3">🔌 Adaptador Universal</h3>
                            <p class="text-gray-700 mb-4">
                                Compatible con más de 150 países. Ligero, compacto y con puertos USB para cargar varios dispositivos.
                            </p>
                            <div class="flex items-center justify-between">
                                <span class="text-emerald-600 font-bold">Desde 15€</span>
                                <a href="https://www.amazon.es/TESSAN-Adaptador-Universal-Internacional-Americano/dp/B0B2DRC76L?tag=viajamejor-21" 
                                   target="_blank" rel="noopener noreferrer"
                                   class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                                    Ver en Amazon
                                </a>
                            </div>
                        </div>

                        <div class="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 class="text-xl font-bold mb-3">🔋 Power Bank 10000mAh</h3>
                            <p class="text-gray-700 mb-4">
                                Pequeña y ligera pero potente. Te permite recargar el móvil varias veces. Carga rápida y cabe en cualquier bolsillo.
                            </p>
                            <div class="flex items-center justify-between">
                                <span class="text-emerald-600 font-bold">Desde 20€</span>
                                <a href="https://www.amazon.es/INIU-10000mAh-Cargador-Portatil-Tel%C3%A9fono/dp/B08VD632WJ?tag=viajamejor-21" 
                                   target="_blank" rel="noopener noreferrer"
                                   class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                                    Ver en Amazon
                                </a>
                            </div>
                        </div>

                        <div class="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 class="text-xl font-bold mb-3">💤 Almohada Viscoelástica</h3>
                            <p class="text-gray-700 mb-4">
                                Se adapta perfectamente y viene con antifaz y tapones. Crea tu pequeño oasis incluso en el asiento más incómodo.
                            </p>
                            <div class="flex items-center justify-between">
                                <span class="text-emerald-600 font-bold">Desde 25€</span>
                                <a href="https://www.amazon.es/SOMLAW-Almohada-Viscoel%C3%A1stica-Memoria-Viajando/dp/B0B96TP1WX?tag=viajamejor-21" 
                                   target="_blank" rel="noopener noreferrer"
                                   class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                                    Ver en Amazon
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="bg-sky-50 rounded-lg p-6 mt-8">
                        <h3 class="font-bold text-gray-900 mb-3">💡 Mi consejo final</h3>
                        <p class="text-gray-700">
                            No necesitas llevar todo desde el primer viaje. Empieza con lo básico (mochila, adaptador, power bank) 
                            y ve añadiendo según tu experiencia. Cada objeto de esta lista me ha demostrado su valor en situaciones reales.
                        </p>
                    </div>
                </div>
            `
        },
        vuelos: {
            title: 'Cómo encontrar vuelos baratos: 10 trucos infalibles',
            content: `
                <div class="prose max-w-none">
                    <img src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800" 
                         alt="Búsqueda de vuelos baratos" class="w-full h-64 object-cover rounded-lg mb-6">
                    
                    <p class="text-lg text-gray-700 mb-6">
                        <strong>Después de muchos viajes, he probado de todo para conseguir vuelos baratos.</strong> 
                        Aquí te dejo mis 10 trucos favoritos que realmente funcionan. Con estos consejos he conseguido 
                        vuelos a Tailandia por 350€, a Japón por 420€ y a Nueva York por 280€.
                    </p>

                    <div class="space-y-6">
                        <div class="bg-sky-50 border border-sky-200 rounded-lg p-6">
                            <h3 class="text-lg font-bold mb-3">1. 🔍 Usa Kiwi.com para buscar</h3>
                            <p class="text-gray-700 mb-3">
                                Mi herramienta favorita. Te permite encontrar rutas poco habituales y combinaciones que otros buscadores no muestran.
                            </p>
                            <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer" 
                               class="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium">
                                Buscar en Kiwi.com →
                            </a>
                        </div>

                        <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                            <h3 class="text-lg font-bold mb-3">2. 📅 Sé flexible con fechas</h3>
                            <p class="text-gray-700">
                                Si puedes moverte ±3 días, activa "fechas flexibles". He ahorrado hasta 300€ cambiando del viernes al martes.
                            </p>
                        </div>

                        <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
                            <h3 class="text-lg font-bold mb-3">3. 🕵️ Modo incógnito + VPN</h3>
                            <p class="text-gray-700 mb-3">
                                Las webs rastrean tus búsquedas y pueden subir precios. Busca en incógnito y usa VPN para cambiar tu ubicación.
                            </p>
                            <a href="https://nordvpn.com/es/?ref=viajamejor" target="_blank" rel="noopener noreferrer" 
                               class="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                                Conseguir NordVPN →
                            </a>
                        </div>

                        <div class="bg-orange-50 border border-orange-200 rounded-lg p-6">
                            <h3 class="text-lg font-bold mb-3">4. ⏰ Timing perfecto</h3>
                            <p class="text-gray-700">
                                6-8 semanas antes para vuelos europeos, 8-12 semanas para intercontinentales. No reserves con 6 meses de antelación.
                            </p>
                        </div>

                        <div class="bg-red-50 border border-red-200 rounded-lg p-6">
                            <h3 class="text-lg font-bold mb-3">5. 🚫 Evita fechas de alta demanda</h3>
                            <p class="text-gray-700">
                                Navidad, Semana Santa, puentes largos... En esas fechas los precios se disparan. Ve una semana antes o después.
                            </p>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-lg p-6 mt-8">
                        <h3 class="font-bold text-gray-900 mb-3">🎯 Mi consejo final</h3>
                        <p class="text-gray-700">
                            No hay fórmula mágica, pero combinando varios trucos seguro que consigues vuelos mucho más baratos. 
                            Yo uso 4-5 de estos consejos en cada búsqueda y rara vez pago el precio "normal".
                        </p>
                    </div>
                </div>
            `
        },
        tarjetas: {
            title: 'Mejores tarjetas para viajar sin comisiones',
            content: `
                <div class="prose max-w-none">
                    <img src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800" 
                         alt="Tarjetas de viaje" class="w-full h-64 object-cover rounded-lg mb-6">
                    
                    <p class="text-lg text-gray-700 mb-6">
                        <strong>Una de las formas más tontas de perder dinero viajando es con comisiones bancarias.</strong> 
                        Desde hace años viajo con tarjetas que no me cobran por pagar ni por sacar dinero. 
                        Aquí te cuento cuáles uso y por qué.
                    </p>

                    <div class="space-y-6">
                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h3 class="text-xl font-bold mb-3 flex items-center">
                                <span class="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                                💜 Revolut - Mi favorita
                            </h3>
                            <p class="text-gray-700 mb-4">
                                La tarjeta que más uso. Retiros gratis hasta 200€/mes, pagos sin comisiones en cualquier divisa, 
                                cambio al tipo real. App súper intuitiva.
                            </p>
                            <div class="bg-white rounded-lg p-4 mb-4">
                                <h4 class="font-semibold mb-2">✅ Versión gratuita incluye:</h4>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li>• Tarjeta física gratuita</li>
                                    <li>• Retiros gratis hasta 200€/mes</li>
                                    <li>• Pagos sin comisiones en cualquier divisa</li>
                                    <li>• Cambio de divisa al tipo real</li>
                                </ul>
                            </div>
                            <a href="https://revolut.com/referral/?referral-code=antoni22jf!AUG1-25-AR-CL1H-CRY&geo-redirect" 
                               target="_blank" rel="noopener noreferrer"
                               class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block">
                                Conseguir Revolut gratis
                            </a>
                        </div>

                        <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                            <h3 class="text-xl font-bold mb-3 flex items-center">
                                <span class="bg-gray-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                                🖤 N26 - Banco alemán digital
                            </h3>
                            <p class="text-gray-700 mb-4">
                                IBAN alemán real, retiros gratis en eurozona, app muy intuitiva. Perfecto como segunda opción.
                            </p>
                            <div class="bg-white rounded-lg p-4 mb-4">
                                <h4 class="font-semibold mb-2">✅ Versión gratuita incluye:</h4>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li>• Cuenta con IBAN alemán</li>
                                    <li>• Tarjeta Mastercard gratuita</li>
                                    <li>• 3 retiradas gratis/mes en eurozona</li>
                                    <li>• Pagos sin comisiones en euros</li>
                                </ul>
                            </div>
                            <a href="https://n26.com/es-es" target="_blank" rel="noopener noreferrer"
                               class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block">
                                Conseguir N26
                            </a>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mt-8">
                        <h3 class="font-bold text-gray-900 mb-3">💡 Mi estrategia personal</h3>
                        <p class="text-gray-700">
                            Yo no viajo solo con una tarjeta, siempre llevo al menos dos. Mi combinación favorita es Revolut + N26. 
                            Revolut para el día a día y N26 por si Revolut me da algún problema. Desde que las uso, he ahorrado 
                            cientos de euros en comisiones.
                        </p>
                    </div>
                </div>
            `
        },
        alojamiento: {
            title: 'Booking vs Airbnb vs Hostelworld',
            content: `
                <div class="prose max-w-none">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800" 
                         alt="Diferentes tipos de alojamiento" class="w-full h-64 object-cover rounded-lg mb-6">
                    
                    <p class="text-lg text-gray-700 mb-6">
                        <strong>Cada plataforma tiene su momento perfecto.</strong> Después de muchos viajes, tengo clara 
                        mi estrategia para elegir entre Booking, Airbnb y Hostelworld según el tipo de viaje y presupuesto.
                    </p>

                    <div class="space-y-6">
                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h3 class="text-xl font-bold mb-3">🏨 Booking - Para comodidad y flexibilidad</h3>
                            <p class="text-gray-700 mb-4">
                                Mi primera opción para viajes de trabajo, escapadas de fin de semana o cuando necesito cancelación gratuita.
                            </p>
                            <div class="bg-white rounded-lg p-4 mb-4">
                                <h4 class="font-semibold mb-2">✅ Cuándo uso Booking:</h4>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li>• Viajes de negocios o cuando necesito algo seguro</li>
                                    <li>• Estancias cortas (1-3 noches)</li>
                                    <li>• Cuando quiero cancelación gratuita</li>
                                    <li>• Destinos donde no conozco la zona</li>
                                </ul>
                            </div>
                            <a href="https://www.booking.com/" target="_blank" rel="noopener noreferrer"
                               class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block">
                                Ir a Booking
                            </a>
                        </div>

                        <div class="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h3 class="text-xl font-bold mb-3">🏡 Airbnb - Para estancias largas</h3>
                            <p class="text-gray-700 mb-4">
                                Ideal cuando viajo en pareja o con amigos y quiero algo más "hogareño". Especialmente para estancias de una semana o más.
                            </p>
                            <div class="bg-white rounded-lg p-4 mb-4">
                                <h4 class="font-semibold mb-2">✅ Cuándo uso Airbnb:</h4>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li>• Estancias largas (una semana o más)</li>
                                    <li>• Viajes en grupo o en familia</li>
                                    <li>• Cuando quiero cocinar y ahorrar en comidas</li>
                                    <li>• Lugares únicos (casas rurales, apartamentos con vistas)</li>
                                </ul>
                            </div>
                            <a href="https://www.airbnb.es/" target="_blank" rel="noopener noreferrer"
                               class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block">
                                Ir a Airbnb
                            </a>
                        </div>

                        <div class="bg-orange-50 border border-orange-200 rounded-lg p-6">
                            <h3 class="text-xl font-bold mb-3">🛏️ Hostelworld - Para mochileros</h3>
                            <p class="text-gray-700 mb-4">
                                Cuando viajo solo o busco ahorrar al máximo. No solo por los precios, sino porque es la mejor forma de conocer otros viajeros.
                            </p>
                            <div class="bg-white rounded-lg p-4 mb-4">
                                <h4 class="font-semibold mb-2">✅ Cuándo uso Hostelworld:</h4>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li>• Viajes en solitario donde quiero conocer gente</li>
                                    <li>• Presupuesto muy ajustado</li>
                                    <li>• Destinos mochileros (Sudeste Asiático, Sudamérica)</li>
                                    <li>• Cuando busco ambiente joven y social</li>
                                </ul>
                            </div>
                            <a href="https://www.hostelworld.com/" target="_blank" rel="noopener noreferrer"
                               class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block">
                                Ir a Hostelworld
                            </a>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mt-8">
                        <h3 class="font-bold text-gray-900 mb-3">🎯 Mi estrategia personal</h3>
                        <p class="text-gray-700">
                            En la práctica, suelo combinar las tres plataformas en un mismo viaje. Por ejemplo, en Tailandia usé 
                            Hostelworld para Bangkok (conocer gente), Airbnb para Chiang Mai (apartamento con cocina) y Booking 
                            para las últimas noches cerca del aeropuerto.
                        </p>
                    </div>
                </div>
            `
        },
        destinos: {
            title: 'Destinos baratos para 2025: mis 15 favoritos',
            content: `
                <div class="prose max-w-none">
                    <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                         alt="Destinos baratos para viajar" class="w-full h-64 object-cover rounded-lg mb-6">
                    
                    <p class="text-lg text-gray-700 mb-6">
                        <strong>Si quieres viajar en 2025 sin gastar una fortuna, esta lista te va a encantar.</strong> 
                        Aquí te comparto mis 15 destinos favoritos donde el dinero realmente rinde. He estado en todos 
                        y puedo contarte exactamente cuánto gasté.
                    </p>

                    <div class="space-y-6">
                        <div class="bg-sky-50 border border-sky-200 rounded-lg p-6">
                            <h3 class="text-lg font-bold mb-3">🇦🇱 1. Albania - Europa a precio asiático</h3>
                            <div class="flex items-center space-x-4 mb-3">
                                <span class="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">20-25€/día</span>
                                <span class="text-gray-600 text-sm">Mayo-Septiembre</span>
                            </div>
                            <p class="text-gray-700">
                                Paisajes increíbles, gente súper amable, comida deliciosa y precios que no me creía. 
                                Una cena completa por 8€, alojamiento por 15€ la noche.
                            </p>
                        </div>

                        <div class="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h3 class="text-lg font-bold mb-3">🇹🇭 2. Tailandia - Clásico que nunca falla</h3>
                            <div class="flex items-center space-x-4 mb-3">
                                <span class="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">15-25€/día</span>
                                <span class="text-gray-600 text-sm">Noviembre-Marzo</span>
                            </div>
                            <p class="text-gray-700">
                                Comida de calle increíble por 2€, masajes por 8€, playas paradisíacas. 
                                Es barato, fácil de viajar y súper seguro.
                            </p>
                        </div>

                        <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
                            <h3 class="text-lg font-bold mb-3">🇬🇪 3. Georgia - Seguro, barato y sin turistas</h3>
                            <div class="flex items-center space-x-4 mb-3">
                                <span class="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">20-25€/día</span>
                                <span class="text-gray-600 text-sm">Mayo-Octubre</span>
                            </div>
                            <p class="text-gray-700">
                                Paisajes de montaña increíbles, vino delicioso, comida abundante. Una cena con vino por 12€. 
                                Puedes estar 365 días sin visa.
                            </p>
                        </div>

                        <div class="bg-orange-50 border border-orange-200 rounded-lg p-6">
                            <h3 class="text-lg font-bold mb-3">🇵🇹 4. Portugal - Perfecto desde España</h3>
                            <div class="flex items-center space-x-4 mb-3">
                                <span class="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">30-35€/día</span>
                                <span class="text-gray-600 text-sm">Todo el año</span>
                            </div>
                            <p class="text-gray-700">
                                Súper cerca, más barato que España, comida increíble. Los pastéis de nata por 1€ son adictivos. 
                                Perfecto para escapadas de fin de semana.
                            </p>
                        </div>

                        <div class="bg-red-50 border border-red-200 rounded-lg p-6">
                            <h3 class="text-lg font-bold mb-3">🇻🇳 5. Vietnam - Aventura asiática</h3>
                            <div class="flex items-center space-x-4 mb-3">
                                <span class="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">18-25€/día</span>
                                <span class="text-gray-600 text-sm">Noviembre-Abril</span>
                            </div>
                            <p class="text-gray-700">
                                Comida de calle increíble (pho por 2€), paisajes de Halong Bay espectaculares. 
                                Pura aventura a precio de risa.
                            </p>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-lg p-6 mt-8">
                        <h3 class="font-bold text-gray-900 mb-3">🌍 Más destinos baratos</h3>
                        <p class="text-gray-700 mb-3">
                            <strong>Europa:</strong> Polonia, Rumanía, República Checa, Hungría<br/>
                            <strong>Asia:</strong> Indonesia, Filipinas, Laos, Camboya<br/>
                            <strong>América:</strong> Bolivia, Colombia, Guatemala, México
                        </p>
                        <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer" 
                           class="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium">
                            Buscar vuelos a estos destinos →
                        </a>
                    </div>
                </div>
            `
        },
        seguros: {
            title: 'Por qué uso IATI Seguros',
            content: `
                <div class="prose max-w-none">
                    <img src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800" 
                         alt="Seguro de viaje" class="w-full h-64 object-cover rounded-lg mb-6">
                    
                    <p class="text-lg text-gray-700 mb-6">
                        <strong>Si me hubieras preguntado hace años, te habría dicho que el seguro de viaje no es necesario.</strong> 
                        Pero después de varios sustos y situaciones reales donde lo necesité, nunca salgo de casa sin él.
                    </p>

                    <div class="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                        <h3 class="text-xl font-bold mb-3">🚨 Mi experiencia real en Tailandia</h3>
                        <p class="text-gray-700 mb-3">
                            <strong>Bangkok, 2019. Segundo día de viaje.</strong> Apendicitis. Operación de urgencia, 
                            tres días hospitalizado. <strong>Coste total: 3.247€. Lo que yo pagué: 0€.</strong>
                        </p>
                        <p class="text-gray-700">
                            IATI se encargó de todo. Pero lo mejor no fue solo el dinero, fue tener a alguien que hablaba 
                            español al teléfono a las 3 AM explicándome todo el proceso.
                        </p>
                    </div>

                    <div class="space-y-6">
                        <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                            <h3 class="text-lg font-bold mb-3">🛡️ ¿Por qué uso IATI?</h3>
                            <div class="space-y-3">
                                <div class="flex items-start">
                                    <span class="text-emerald-500 mr-3">✅</span>
                                    <div>
                                        <strong>Cobertura mundial real</strong>
                                        <p class="text-sm text-gray-600">Funciona en todos los países, incluidos EEUU y Japón donde la sanidad es carísima</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <span class="text-emerald-500 mr-3">✅</span>
                                    <div>
                                        <strong>Atención 24/7 en español</strong>
                                        <p class="text-sm text-gray-600">Cuando estás enfermo a las 3 AM, poder hablar en tu idioma es un alivio enorme</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <span class="text-emerald-500 mr-3">✅</span>
                                    <div>
                                        <strong>Sin adelantar dinero</strong>
                                        <p class="text-sm text-gray-600">IATI pagó directamente al hospital. No tuve que adelantar 3.000€</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h3 class="text-lg font-bold mb-3">📋 Tipos de seguros IATI</h3>
                            <div class="space-y-3">
                                <div class="bg-white rounded-lg p-4">
                                    <h4 class="font-semibold">IATI Estándar</h4>
                                    <p class="text-sm text-gray-600">Para viajes normales. 22-35€/semana</p>
                                </div>
                                <div class="bg-white rounded-lg p-4">
                                    <h4 class="font-semibold">IATI Estrella</h4>
                                    <p class="text-sm text-gray-600">Para destinos caros como EEUU. 30-50€/semana</p>
                                </div>
                                <div class="bg-white rounded-lg p-4">
                                    <h4 class="font-semibold">IATI Mochilero</h4>
                                    <p class="text-sm text-gray-600">Para viajes largos y aventura. 20-35€/semana</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-lg p-6 mt-8">
                        <h3 class="font-bold text-gray-900 mb-3">🎁 Consigue tu seguro con descuento</h3>
                        <p class="text-gray-700 mb-4">
                            Si contratas desde mi enlace, tienes un 5% de descuento automático en cualquier seguro IATI. 
                            Es mi forma de agradecerte que confíes en mi recomendación.
                        </p>
                        <a href="https://www.iatiseguros.com?r=37344279073491" target="_blank" rel="noopener noreferrer"
                           class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block">
                            Contratar IATI con 5% descuento
                        </a>
                    </div>
                </div>
            `
        }
    };
    
    const article = articles[type];
    if (article) {
        title.textContent = article.title;
        content.innerHTML = article.content;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    document.getElementById('article-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('article-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Analytics tracking (placeholder)
function trackEvent(eventName, properties) {
    console.log('Event tracked:', eventName, properties);
}

// Track affiliate clicks
document.querySelectorAll('a[href*="amazon"], a[href*="revolut"], a[href*="booking"], a[href*="kiwi"], a[href*="iati"]').forEach(link => {
    link.addEventListener('click', function() {
        const platform = this.href.includes('amazon') ? 'Amazon' :
                        this.href.includes('revolut') ? 'Revolut' :
                        this.href.includes('booking') ? 'Booking' :
                        this.href.includes('kiwi') ? 'Kiwi' :
                        this.href.includes('iati') ? 'IATI' : 'Unknown';
        
        trackEvent('affiliate_click', {
            platform: platform,
            url: this.href
        });
    });
});

// Newsletter popup (simple version)
let hasShownPopup = false;

function showNewsletterPopup() {
    if (hasShownPopup || localStorage.getItem('newsletter-subscribed')) return;
    
    const popup = document.createElement('div');
    popup.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    popup.innerHTML = `
        <div class="bg-white rounded-2xl max-w-md w-full shadow-2xl">
            <div class="bg-gradient-to-r from-sky-500 to-emerald-500 text-white p-6 rounded-t-2xl relative">
                <button onclick="this.closest('.fixed').remove()" class="absolute top-4 right-4 text-white hover:text-gray-200">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div class="text-center">
                    <div class="text-4xl mb-3">🎁</div>
                    <h3 class="text-xl font-bold mb-2">¡Consigue tu Guía Gratuita!</h3>
                    <p class="text-sky-100 text-sm">"Cómo Planificar un Viaje Perfecto en 7 Pasos"</p>
                </div>
            </div>
            <div class="p-6">
                <div class="mb-4">
                    <h4 class="font-bold mb-3">🎯 Únete a +15,000 viajeros inteligentes</h4>
                    <div class="space-y-2 text-sm text-gray-600">
                        <div class="flex items-center">
                            <span class="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                            <span>Guía PDF valorada en 29€</span>
                        </div>
                        <div class="flex items-center">
                            <span class="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                            <span>Ofertas exclusivas semanales</span>
                        </div>
                        <div class="flex items-center">
                            <span class="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                            <span>Consejos que no publico en el blog</span>
                        </div>
                    </div>
                </div>
                <form class="space-y-4" onsubmit="handleNewsletterSubmit(event)">
                    <input type="email" placeholder="tu@email.com" required
                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none">
                    <button type="submit" 
                            class="w-full bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-bold py-3 rounded-lg transition-all">
                        🚀 CONSEGUIR GUÍA GRATIS
                    </button>
                </form>
                <p class="text-xs text-gray-500 text-center mt-3">
                    ✅ Sin spam • ✅ Cancela cuando quieras
                </p>
            </div>
        </div>
    `;
    
    document.body.appendChild(popup);
    hasShownPopup = true;
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    localStorage.setItem('newsletter-subscribed', 'true');
    e.target.closest('.fixed').remove();
    
    // Show success message
    const successDiv = document.createElement('div');
    successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50';
    successDiv.innerHTML = '✅ ¡Suscrito! Revisa tu email para la guía gratuita.';
    document.body.appendChild(successDiv);
    
    setTimeout(() => successDiv.remove(), 5000);
}

// Show newsletter popup after 30 seconds
setTimeout(showNewsletterPopup, 30000);

// Show popup on scroll (50% of page)
let hasTriggeredScroll = false;
window.addEventListener('scroll', function() {
    if (hasTriggeredScroll) return;
    
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrolled >= 50) {
        showNewsletterPopup();
        hasTriggeredScroll = true;
    }
});

console.log('🚀 Viaja Mejor - Blog cargado correctamente');