<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roma en 3 Días - Preview Diseño Moderno</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        .float { animation: float 3s ease-in-out infinite; }
        
        @keyframes ping {
            75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping { animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
        
        .glassmorphism {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }
        
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .scroll-text {
            animation: scroll 20s linear infinite;
        }
    </style>
</head>
<body class="bg-gray-50">
    
    <!-- Banner informativo -->
    <div class="bg-blue-600 text-white py-2 overflow-hidden">
        <div class="scroll-text whitespace-nowrap inline-block">
            <span class="mx-8">✨ Nuevo diseño moderno con Glassmorphism y animaciones</span>
            <span class="mx-8">🎨 Gradientes elegantes</span>
            <span class="mx-8">⚡ Hover effects interactivos</span>
            <span class="mx-8">📱 Totalmente responsive</span>
            <span class="mx-8">✨ Nuevo diseño moderno con Glassmorphism y animaciones</span>
            <span class="mx-8">🎨 Gradientes elegantes</span>
            <span class="mx-8">⚡ Hover effects interactivos</span>
            <span class="mx-8">📱 Totalmente responsive</span>
        </div>
    </div>
    
    <!-- HERO SECTION MODERNO -->
    <div class="relative h-[600px] overflow-hidden">
        <img 
            src="https://images.pexels.com/photos/6199223/pexels-photo-6199223.jpeg"
            alt="Coliseo Romano"
            class="w-full h-full object-cover"
        />
        <!-- Overlay gradiente -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        
        <!-- Botón volver flotante -->
        <button class="absolute top-8 left-8 inline-flex items-center text-white hover:text-red-400 bg-black/40 hover:bg-black/60 backdrop-blur-md px-5 py-3 rounded-full transition-all duration-300 font-medium border border-white/30 hover:border-red-400/50 shadow-2xl hover:scale-105">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Volver a guías
        </button>

        <!-- Contenido sobre la imagen -->
        <div class="absolute bottom-0 left-0 right-0 p-8 max-w-6xl mx-auto text-white">
            <div class="max-w-4xl">
                <span class="inline-block bg-gradient-to-r from-red-500 to-amber-500 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-2xl">
                    ✨ Guía Completa 2025
                </span>
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
                    Roma en 3 Días: Ciudad Eterna, Historia y Arte Milenario
                </h1>
                <div class="flex flex-wrap gap-4 items-center">
                    <span class="flex items-center bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        18 min lectura
                    </span>
                    <span class="flex items-center bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        Roma, Italia
                    </span>
                    <button class="flex items-center bg-white/20 backdrop-blur-md hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 shadow-lg">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                        </svg>
                        Compartir
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-16">
        
        <!-- 1. INTRODUCCIÓN con Glassmorphism -->
        <div class="glassmorphism border border-white/40 rounded-3xl p-10 shadow-2xl mb-16 hover:shadow-3xl transition-all duration-500">
            <h2 class="text-4xl font-bold mb-6" style="background: linear-gradient(135deg, #dc2626, #f59e0b, #dc2626); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                ¿Por qué visitar Roma?
            </h2>
            <p class="text-gray-700 mb-4 leading-relaxed text-lg">
                Roma es una ciudad única donde cada esquina cuenta una historia de más de 2.500 años. Es el museo al aire libre más grande del mundo, 
                donde la antigua Roma imperial convive con el arte renacentista, el barroco y la vida moderna italiana.
            </p>
            <p class="text-gray-700 leading-relaxed text-lg">
                Esta guía está diseñada para aprovechar al máximo <strong class="text-red-600">3 días en Roma</strong>, con un itinerario optimizado que te lleva por los 
                imprescindibles sin agobios. Todo con información práctica actualizada para 2025.
            </p>
        </div>

        <!-- CARD DÍA 1 SUPER MODERNO -->
        <div class="bg-white/70 backdrop-blur-2xl border border-white/30 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 mb-16">
            
            <!-- Header del día con badge animado MEJORADO -->
            <div class="flex items-center gap-8 mb-12">
                <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-red-400 to-amber-400 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                    <div class="relative inline-flex items-center justify-center">
                        <span class="absolute inline-flex h-full w-full animate-ping bg-red-400 opacity-20 rounded-full"></span>
                        <span class="relative inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-red-500 via-red-600 to-amber-500 text-white text-4xl font-bold shadow-2xl transform hover:scale-110 transition-transform duration-300">
                            1
                        </span>
                    </div>
                </div>
                <div>
                    <h2 class="text-5xl font-bold mb-2" style="background: linear-gradient(135deg, #dc2626, #f59e0b, #dc2626); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                        DÍA 1
                    </h2>
                    <p class="text-gray-600 text-xl font-medium">Centro Histórico y Plazas Icónicas</p>
                </div>
            </div>

            <!-- Timeline vertical ULTRA MODERNA -->
            <div class="space-y-12">
                
                <!-- Punto 1: Plaza España -->
                <div class="relative pl-16 border-l-4 border-gradient-to-b from-red-300 to-red-100">
                    <!-- Círculo con glow effect -->
                    <div class="absolute -left-4 top-0">
                        <div class="absolute inset-0 bg-red-400 rounded-full blur-md opacity-60"></div>
                        <div class="relative w-8 h-8 bg-gradient-to-br from-red-500 to-amber-500 rounded-full border-4 border-white shadow-xl"></div>
                    </div>
                    
                    <div class="inline-block mb-4">
                        <span class="text-sm font-bold text-red-700 bg-gradient-to-r from-red-100 to-amber-100 px-4 py-2 rounded-full shadow-md border border-red-200">
                            ⏰ 9:00 AM
                        </span>
                    </div>
                    
                    <h3 class="text-3xl font-bold text-gray-900 mb-4 hover:text-red-600 transition-colors">
                        Plaza de España y Fontana di Trevi
                    </h3>
                    
                    <div class="mb-6 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                        <img
                            src="https://images.pexels.com/photos/5067076/pexels-photo-5067076.jpeg"
                            alt="Plaza de España"
                            class="w-full h-80 object-cover"
                        />
                    </div>
                    
                    <p class="text-gray-700 mb-6 leading-relaxed text-lg">
                        Comenzamos en la Plaza de España con sus icónicas escalinatas de 135 peldaños (1723-1725), un lugar perfecto para 
                        iniciar el día. Desde aquí caminamos por Via Condotti hasta llegar a la impresionante Fontana di Trevi.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div class="bg-gradient-to-br from-red-50 via-white to-red-50/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-red-100 hover:border-red-300 hover:shadow-xl transition-all duration-300">
                            <h4 class="font-bold text-xl text-gray-900 mb-4 flex items-center">
                                <span class="text-3xl mr-3">🏛️</span>
                                Plaza de España
                            </h4>
                            <ul class="text-gray-700 space-y-3 list-none">
                                <li class="flex items-start">
                                    <span class="w-3 h-3 bg-gradient-to-br from-red-400 to-red-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                                    <span>Escalinata de 135 escalones</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="w-3 h-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                                    <span>Fuente de Bernini</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                                    <span>Via Condotti: Shopping de lujo</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="bg-gradient-to-br from-blue-50 via-white to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                            <h4 class="font-bold text-xl text-gray-900 mb-4 flex items-center">
                                <span class="text-3xl mr-3">⛲</span>
                                Fontana di Trevi
                            </h4>
                            <p class="text-gray-700 mb-3 leading-relaxed">
                                La fuente barroca más famosa del mundo (1762). Con 26 metros de altura y 49 de ancho.
                            </p>
                            <div class="bg-blue-100 rounded-lg p-3 border border-blue-200">
                                <p class="text-blue-800 text-sm font-medium">
                                    💫 ¡No olvides tirar una moneda de espaldas para volver a Roma!
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Botón CTA MEGA MEJORADO -->
                    <div class="flex flex-wrap gap-4">
                        <a href="#" class="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-red-600 to-amber-500 px-8 py-4 text-white shadow-2xl transition-all hover:scale-105 hover:shadow-3xl">
                            <span class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            <span class="relative flex items-center font-bold text-base">
                                <span class="text-2xl mr-3">🚎</span>
                                Reservar Tour Centro Histórico
                                <svg class="ml-3 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                </svg>
                            </span>
                        </a>
                        
                        <a href="#" class="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-white shadow-2xl transition-all hover:scale-105 hover:shadow-3xl">
                            <span class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            <span class="relative flex items-center font-bold text-base">
                                <span class="text-2xl mr-3">🚶</span>
                                Tour a Pie
                                <svg class="ml-3 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>

                <!-- Punto 2: Panteón -->
                <div class="relative pl-16 border-l-4 border-gradient-to-b from-blue-300 to-blue-100">
                    <div class="absolute -left-4 top-0">
                        <div class="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-60"></div>
                        <div class="relative w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full border-4 border-white shadow-xl"></div>
                    </div>
                    
                    <div class="inline-block mb-4">
                        <span class="text-sm font-bold text-blue-700 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full shadow-md border border-blue-200">
                            ⏰ 11:30 AM
                        </span>
                    </div>
                    
                    <h3 class="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                        Panteón de Agripa y Piazza Navona
                    </h3>
                    
                    <div class="mb-6 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                        <img
                            src="https://images.pexels.com/photos/2676602/pexels-photo-2676602.jpeg"
                            alt="Panteón"
                            class="w-full h-80 object-cover"
                        />
                    </div>
                    
                    <p class="text-gray-700 mb-6 leading-relaxed text-lg">
                        El edificio romano mejor conservado del mundo (126 d.C.). Su cúpula de 43 metros fue la más grande durante 1.300 años.
                    </p>
                    
                    <div class="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 mb-6 border-2 border-yellow-200 shadow-lg">
                        <h4 class="font-bold text-lg text-gray-900 mb-3 flex items-center">
                            <span class="text-2xl mr-2">🍦</span>
                            Parada obligatoria: Giolitti
                        </h4>
                        <p class="text-gray-700">
                            La Heladería Giolitti (desde 1900) está muy cerca. ¡Los mejores helados de Roma!
                            Prueba pistacho, stracciatella o limón.
                        </p>
                    </div>
                    
                    <a href="#" class="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 px-8 py-4 text-white shadow-2xl transition-all hover:scale-105 hover:shadow-3xl">
                        <span class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        <span class="relative flex items-center font-bold text-base">
                            <span class="text-2xl mr-3">🏛️</span>
                            Visita Guiada Panteón
                            <svg class="ml-3 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </span>
                    </a>
                </div>

                <!-- Punto 3: Museos Capitolinos -->
                <div class="relative pl-16 border-l-4 border-gradient-to-b from-purple-300 to-purple-100">
                    <div class="absolute -left-4 top-0">
                        <div class="absolute inset-0 bg-purple-400 rounded-full blur-md opacity-60"></div>
                        <div class="relative w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-xl"></div>
                    </div>
                    
                    <div class="inline-block mb-4">
                        <span class="text-sm font-bold text-purple-700 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full shadow-md border border-purple-200">
                            ⏰ 3:00 PM
                        </span>
                    </div>
                    
                    <h3 class="text-3xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors">
                        Museos Capitolinos y Atardecer Romano
                    </h3>
                    
                    <p class="text-gray-700 mb-6 leading-relaxed text-lg">
                        Los museos públicos más antiguos del mundo (1471). Albergan la famosa Loba Capitolina, símbolo de Roma.
                        Termina el día en la Terrazza delle Quadrighe con vistas 360° de la ciudad.
                    </p>
                    
                    <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 shadow-lg">
                        <h5 class="font-bold text-lg text-green-800 mb-2 flex items-center">
                            <span class="text-2xl mr-2">📸</span>
                            Vistas Secretas del Foro
                        </h5>
                        <p class="text-green-700 text-sm">
                            Mirador GRATUITO con fotos espectaculares. Busca Via del Campidoglio.
                        </p>
                    </div>
                </div>
            </div>

            <!-- MAPA SECCIÓN -->
            <div class="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-4 border-blue-200 rounded-3xl p-8 mt-12 shadow-2xl">
                <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span class="text-4xl mr-4">🗺️</span>
                    Mapa Interactivo del Día 1
                </h3>
                <p class="text-gray-600 mb-6 text-lg">
                    Visualiza la ruta completa del Centro Histórico con todos los puntos de interés marcados.
                </p>
                <div class="bg-white rounded-2xl p-12 shadow-xl text-center border-2 border-dashed border-blue-300">
                    <div class="text-6xl mb-4">📍</div>
                    <p class="text-gray-500 font-medium text-lg">Aquí iría el mapa interactivo</p>
                    <p class="text-gray-400 text-sm mt-2">(Google Maps embebido con los puntos del día)</p>
                </div>
                <div class="mt-6 bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center">
                    <p class="text-gray-600 font-medium">
                        💡 Distancia total: <span class="text-blue-600 font-bold">~4 km</span> | 
                        Tiempo: <span class="text-purple-600 font-bold">8-9 horas</span> con visitas
                    </p>
                </div>
            </div>
        </div>

        <!-- RESTAURANTES SECCIÓN -->
        <div class="bg-white rounded-3xl p-10 shadow-2xl mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-8 flex items-center">
                <span class="text-5xl mr-4">🍝</span>
                Dónde Comer en Roma
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Restaurante 1 -->
                <div class="group bg-gradient-to-br from-red-50 via-white to-red-50/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-red-100 hover:border-red-300 cursor-pointer">
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <h4 class="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                                Ivo a Trastevere
                            </h4>
                            <p class="text-sm text-gray-600 font-medium">Via di San Francesco a Ripa • €€</p>
                        </div>
                        <span class="text-5xl opacity-0 group-hover:opacity-100 transition-all duration-300 float transform group-hover:rotate-12">
                            🍕
                        </span>
                    </div>
                    <p class="text-gray-700 leading-relaxed">
                        Pizza y pasta genial de precio. Muy popular entre locales y auténtica comida romana.
                    </p>
                </div>

                <!-- Restaurante 2 -->
                <div class="group bg-gradient-to-br from-amber-50 via-white to-amber-50/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-amber-100 hover:border-amber-300 cursor-pointer">
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <h4 class="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                                Rifugio Romano
                            </h4>
                            <p class="text-sm text-gray-600 font-medium">Via Volturno, 39/41 • €€</p>
                        </div>
                        <span class="text-5xl opacity-0 group-hover:opacity-100 transition-all duration-300 float transform group-hover:rotate-12">
                            🍝
                        </span>
                    </div>
                    <p class="text-gray-700 leading-relaxed">
                        Carbonara y amatriciana auténticas. Trattoria tradicional con recetas de la nonna.
                    </p>
                </div>
            </div>
        </div>

        <!-- PRESUPUESTO SECCIÓN -->
        <div class="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-3xl p-12 shadow-2xl mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">
                💰 Presupuesto por Estilo de Viaje
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Mochilero -->
                <div class="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center border-4 border-green-100 hover:border-green-300">
                    <div class="text-7xl mb-6 transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-500">
                        🎒
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Mochilero</h3>
                    <div class="text-5xl font-bold mb-4" style="background: linear-gradient(135deg, #10b981, #059669); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                        60-80€
                    </div>
                    <p class="text-gray-600 font-medium">por día</p>
                    <div class="mt-6 pt-6 border-t border-gray-200">
                        <ul class="text-sm text-gray-600 space-y-2">
                            <li>Hostel: 25-35€</li>
                            <li>Comida: 20-25€</li>
                            <li>Transporte: 5-10€</li>
                        </ul>
                    </div>
                </div>

                <!-- Estándar -->
                <div class="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center border-4 border-blue-100 hover:border-blue-300">
                    <div class="text-7xl mb-6 transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-500">
                        🏨
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Estándar</h3>
                    <div class="text-5xl font-bold mb-4" style="background: linear-gradient(135deg, #3b82f6, #2563eb); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                        120-160€
                    </div>
                    <p class="text-gray-600 font-medium">por día</p>
                    <div class="mt-6 pt-6 border-t border-gray-200">
                        <ul class="text-sm text-gray-600 space-y-2">
                            <li>Hotel 3★: 70-90€</li>
                            <li>Comida: 30-45€</li>
                            <li>Transporte: 10€</li>
                        </ul>
                    </div>
                </div>

                <!-- Lujo -->
                <div class="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center border-4 border-purple-100 hover:border-purple-300">
                    <div class="text-7xl mb-6 transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-500">
                        👑
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Lujo</h3>
                    <div class="text-5xl font-bold mb-4" style="background: linear-gradient(135deg, #a855f7, #9333ea); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                        250-400€
                    </div>
                    <p class="text-gray-600 font-medium">por día</p>
                    <div class="mt-6 pt-6 border-t border-gray-200">
                        <ul class="text-sm text-gray-600 space-y-2">
                            <li>Hotel 5★: 150-250€</li>
                            <li>Comida: 70-100€</li>
                            <li>Transporte: 20€</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- Footer ULTRA MODERNO -->
    <div class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-red-500 via-amber-500 to-red-500 opacity-90"></div>
        <div class="absolute inset-0" style="background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%);"></div>
        <div class="relative text-white py-16">
            <div class="max-w-6xl mx-auto px-4 text-center">
                <div class="text-6xl mb-6">✨</div>
                <h3 class="text-3xl font-bold mb-4">Diseño Moderno Completo</h3>
                <p class="text-xl opacity-95 mb-6">Glassmorphism • Gradientes • Timeline • Animaciones • Hover Effects</p>
                <div class="flex flex-wrap justify-center gap-3 text-sm">
                    <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">🔮 Efectos cristal</span>
                    <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">🎨 Degradados modernos</span>
                    <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">⚡ Interactividad</span>
                    <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">📱 Responsive</span>
                </div>
            </div>
        </div>
    </div>

</body>
</html>
