import  { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Globe, Shield, Zap, MessageCircle } from 'lucide-react';

function Nury() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const whatsappMessage = encodeURIComponent("¡Hola! Quiero brindar seguridad a mis trabajadores con Dotaciones Nova. ¿Pueden ayudarme con una cotización?");
  const whatsappLink = `https://wa.link/oc8n4h?text=${whatsappMessage}`;
  const emailLink = `mailto:ventas2@dotanova.com?subject=Consulta%20Dotaciones%20Nova&body=${whatsappMessage}`;

  const WorkerIcon = () => (
    <div className="relative flex justify-center">
      <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} relative z-10`}>
        <img 
          src="https://i.imgur.com/WqE94Ay.png" 
          alt="Dotaciones Nova Logo" 
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-r from-yellow-300/15 to-yellow-400/15 rounded-full animate-pulse delay-300"></div>
    </div>
  );

  const GearIcon = () => (
    <div className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 text-yellow-500 animate-spin-slow">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.98C19.47,12.66 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.02L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.65 15.48,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.52,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.02C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.66 4.57,12.98L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.52,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.48,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.98Z" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-110 via-gray-220 to-gray-300 flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg">
        {/* Animación de entrada */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Tarjeta principal con efecto 3D */}
          <div 
            className={`relative w-full h-80 sm:w-[560px] sm:h-110 transition-transform duration-700 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Cara frontal */}
            <div className="absolute inset-0 w-full h-full backface-hidden">
              <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <GearIcon />
                
                {/* Efecto de brillo sutil */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
                
                {/* Contenido frontal */}
                <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col justify-center items-center text-center">
                  <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <WorkerIcon />
                    
                    <div className="mt-6">
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Nury Beltrán</h1>
                      <p className="text-yellow-600 text-xl font-medium mb-6">Comercial</p>
                      
                      <div className="space-y-3 text-gray-700 mb-6">
                        <div className="flex items-center justify-center gap-3">
                          <Phone className="w-5 h-5 text-yellow-600" />
                          <span className="text-base font-medium">311 518 6837</span>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                          <Mail className="w-5 h-5 text-yellow-600" />
                          <span className="text-base font-medium">ventas2@dotanova.com</span>
                        </div>
                      </div>
                      
                      {/* Botones de acción circulares */}
                      <div className="flex justify-center gap-6">
                        <a 
                          href={whatsappLink}
                          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                          onClick={(e) => e.stopPropagation()}
                          title="Contactar por WhatsApp"
                        >
                          <MessageCircle className="w-8 h-8" />
                        </a>
                        <a 
                          href={emailLink}
                          className="w-16 h-16 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                          onClick={(e) => e.stopPropagation()}
                          title="Enviar Email"
                        >
                          <Mail className="w-8 h-8" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
               
                </div>
                
                {/* Partículas animadas */}
                <div className="absolute top-4 left-4 w-1 h-1 bg-yellow-500 rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-12 w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-16 left-6 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
              </div>
            </div>
            
            {/* Cara trasera */}
            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden">
                
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
                
                {/* Contenido trasero */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-center">
                  {/* Header */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">DOTACIONES NOVA</h2>
                    <p className="text-yellow-400 text-sm font-semibold bg-white/10 rounded-lg py-2 px-3">BRINDAMOS SEGURIDAD A SUS TRABAJADORES</p>
                  </div>
                  
                  {/* Información de la empresa */}
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-xl p-4 space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm text-left">Carrera 55A No.76-46<br />Bogotá • Colombia</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <span className="text-white text-sm">(601) 808 8957</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <span className="text-white text-sm">www.dotanova.com</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Iconos de servicios */}
                  <div>
                    <div className="flex justify-center gap-10 mb-4">
                      <div className="text-center">
                        <Shield className="w-8 h-8 text-yellow-400 animate-bounce mx-auto mb-1" />
                        <p className="text-xs text-gray-300">Protección</p>
                      </div>
                     
                      <div className="text-center">
                        <Zap className="w-8 h-8 text-yellow-400 animate-bounce delay-400 mx-auto mb-1" />
                        <p className="text-xs text-gray-300">Calidad</p>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-400 bg-white/5 rounded-lg py-2 px-3">Toca para volver al frente</p>
                  </div>
                </div>
                
                {/* Patrón de fondo */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent transform skew-x-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sombra dinámica */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-3 bg-gray-400/20 rounded-full blur-xl"></div>
      </div>
      
      {/* Instrucciones */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center px-4">
        <p className="text-gray-600 text-sm font-medium">Tarjeta Digital Interactiva</p>
        <p className="text-gray-500 text-xs mt-1">Dotaciones Nova - Seguridad Laboral</p>
      </div>

      <style >{`
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Nury;