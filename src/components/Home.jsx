import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, Phone, Mail } from 'lucide-react';

function Home() {
  const team = [
    {
      name: 'Juan Camilo Gómez',
      role: 'Comercial',
      phone: '316 7454136',
      email: 'jgomez@dotanova.com',
      route: '/juan-camilo'
    },
    {
      name: 'Valentina Rojas B.',
      role: 'Comercial',
      phone: '315 1742516',
      email: 'ventas3@dotanova.com',
      route: '/valentina'
    },
    {
      name: 'Nury Beltrán',
      role: 'Comercial',
      phone: '311 518 6837',
      email: 'ventas2@dotanova.com',
      route: '/nury'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Header */}
      <div className="pt-12 pb-8 text-center">
        <div className="flex justify-center mb-6">
          <img 
            src="https://i.imgur.com/WqE94Ay.png" 
            alt="Dotaciones Nova Logo" 
            className="w-24 h-24 object-contain drop-shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          DOTACIONES NOVA
        </h1>
        <p className="text-xl text-yellow-600 font-semibold mb-2">
          Brindamos Seguridad a sus Trabajadores
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Conozca a nuestro equipo comercial y contacte directamente con el especialista que mejor pueda ayudarle
        </p>
      </div>

      {/* Team Cards */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Users className="w-8 h-8 text-yellow-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Nuestro Equipo Comercial
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <Link
              key={index}
              to={member.route}
              className="group block"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-yellow-600 font-semibold mb-4">
                    {member.role}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span className="text-xs">{member.email}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-yellow-600 font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Ver Tarjeta Digital</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Company Info */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">Dirección</h4>
              <p>Carrera 55A No.76-46<br />Bogotá, Colombia</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">Teléfono</h4>
              <p>(601) 808 8957</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">Sitio Web</h4>
              <p>www.dotanova.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;