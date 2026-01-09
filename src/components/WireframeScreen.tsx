import { Coffee, Heart, ShoppingCart, Search, ArrowLeft, Minus, Plus, CheckCircle2, MapPin, Clock } from 'lucide-react';

export function WireframeScreen() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            MooDcoffe - Wireframes
          </h1>
          <p className="text-gray-600">Estrutura visual do aplicativo</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Wireframe 1: Login Screen */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              1. Tela de Login
            </h3>
            <div className="border-4 border-gray-300 rounded-3xl p-6 aspect-[9/16] bg-[#F0BA99]/10 flex items-center justify-center">
              <div className="w-full max-w-xs space-y-4">
                {/* Logo */}
                <div className="flex flex-col items-center mb-8">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mb-3 flex items-center justify-center">
                    <Coffee className="w-8 h-8 text-gray-500" />
                  </div>
                  <div className="h-8 w-32 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 w-40 bg-gray-200 rounded"></div>
                </div>

                {/* Email Input */}
                <div>
                  <div className="h-4 w-16 bg-gray-300 rounded mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded-xl border-2 border-gray-300"></div>
                </div>

                {/* Password Input */}
                <div>
                  <div className="h-4 w-16 bg-gray-300 rounded mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded-xl border-2 border-gray-300"></div>
                </div>

                {/* Login Button */}
                <div className="h-12 bg-[#E48449] rounded-xl mt-4"></div>

                {/* Sign up text */}
                <div className="flex justify-center gap-1 mt-4">
                  <div className="h-3 w-24 bg-gray-200 rounded"></div>
                  <div className="h-3 w-16 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Wireframe 2: Catalog Screen */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              2. Tela de Catálogo
            </h3>
            <div className="border-4 border-gray-300 rounded-3xl p-4 aspect-[9/16] bg-[#F0BA99]/10 overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="h-6 w-32 bg-gray-300 rounded mb-1"></div>
                  <div className="h-3 w-40 bg-gray-200 rounded"></div>
                </div>
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 text-gray-400" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#E48449] rounded-full"></div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="h-10 bg-gray-200 rounded-xl mb-4 flex items-center px-3">
                <Search className="w-4 h-4 text-gray-400" />
              </div>

              {/* Categories */}
              <div className="flex gap-2 mb-4 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-8 rounded-full ${
                      i === 1 ? 'w-16 bg-[#E48449]' : 'w-20 bg-gray-200'
                    }`}
                  ></div>
                ))}
              </div>

              {/* Coffee Grid */}
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-200 rounded-2xl p-3">
                    <div className="h-20 bg-gray-300 rounded-xl mb-2 relative">
                      <Heart className="absolute top-1 right-1 w-4 h-4 text-gray-400" />
                    </div>
                    <div className="h-3 w-8 bg-gray-300 rounded mb-1"></div>
                    <div className="h-4 w-full bg-gray-400 rounded mb-1"></div>
                    <div className="h-3 w-full bg-gray-300 rounded mb-2"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 w-12 bg-[#E48449] rounded"></div>
                      <div className="w-6 h-6 bg-[#E48449] rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wireframe 3: Coffee Detail Screen */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              3. Tela de Detalhes do Café
            </h3>
            <div className="border-4 border-gray-300 rounded-3xl overflow-hidden aspect-[9/16] bg-[#F0BA99]/10">
              {/* Header Image */}
              <div className="h-48 bg-gradient-to-b from-gray-400 to-gray-300 relative">
                <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <ArrowLeft className="w-4 h-4 text-gray-600" />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-gray-600" />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 bg-white rounded-full border-4 border-gray-200"></div>
              </div>

              <div className="p-4 pt-16">
                {/* Rating and Title */}
                <div className="text-center mb-4">
                  <div className="h-4 w-24 bg-gray-300 rounded mx-auto mb-2"></div>
                  <div className="h-6 w-32 bg-gray-400 rounded mx-auto mb-1"></div>
                  <div className="h-3 w-20 bg-gray-200 rounded mx-auto"></div>
                </div>

                {/* Description */}
                <div className="bg-gray-200 rounded-2xl p-3 mb-3">
                  <div className="h-4 w-24 bg-gray-400 rounded mb-2"></div>
                  <div className="space-y-1">
                    <div className="h-3 w-full bg-gray-300 rounded"></div>
                    <div className="h-3 w-full bg-gray-300 rounded"></div>
                    <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-3">
                  <div className="h-4 w-16 bg-gray-300 rounded mb-2"></div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`flex-1 h-10 rounded-xl ${
                          i === 2 ? 'bg-[#E48449]' : 'bg-gray-200'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-3">
                  <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
                  <div className="bg-gray-200 rounded-2xl p-3 flex items-center justify-center gap-4">
                    <div className="w-8 h-8 bg-[#E48449] rounded-full flex items-center justify-center">
                      <Minus className="w-4 h-4 text-white" />
                    </div>
                    <div className="h-6 w-6 bg-gray-400 rounded"></div>
                    <div className="w-8 h-8 bg-[#E48449] rounded-full flex items-center justify-center">
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Buy Button */}
                <div className="bg-gray-200 rounded-2xl p-3">
                  <div className="flex justify-between mb-2">
                    <div className="h-4 w-20 bg-gray-300 rounded"></div>
                    <div className="h-6 w-24 bg-[#E48449] rounded"></div>
                  </div>
                  <div className="h-10 bg-[#E48449] rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Wireframe 4: Payment Confirmation Screen */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              4. Tela de Confirmação
            </h3>
            <div className="border-4 border-gray-300 rounded-3xl p-6 aspect-[9/16] bg-[#F0BA99]/10 flex items-center justify-center">
              <div className="w-full space-y-4">
                {/* Success Icon */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full mb-3 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 w-48 bg-gray-200 rounded"></div>
                </div>

                {/* Order Details Card */}
                <div className="bg-gray-200 rounded-2xl p-4">
                  <div className="flex gap-3 mb-4 pb-4 border-b-2 border-gray-300">
                    <div className="w-16 h-16 bg-gray-300 rounded-xl"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-24 bg-gray-400 rounded"></div>
                      <div className="h-3 w-32 bg-gray-300 rounded"></div>
                      <div className="h-4 w-20 bg-[#E48449] rounded"></div>
                    </div>
                  </div>

                  {/* Order Info */}
                  <div className="space-y-3">
                    {[
                      { icon: Coffee },
                      { icon: Clock },
                      { icon: MapPin },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#E48449] rounded-full flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="h-3 w-24 bg-gray-300 rounded"></div>
                          <div className="h-3 w-32 bg-gray-400 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Status */}
                <div className="bg-gray-200 rounded-2xl p-4">
                  <div className="h-4 w-32 bg-gray-400 rounded mb-3"></div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div
                          className={`w-5 h-5 rounded-full ${
                            i <= 2 ? 'bg-[#E48449]' : 'bg-gray-300'
                          } flex items-center justify-center`}
                        >
                          {i <= 2 && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        <div className={`h-3 w-32 rounded ${i <= 2 ? 'bg-gray-400' : 'bg-gray-300'}`}></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-2">
                  <div className="h-10 bg-[#E48449] rounded-xl"></div>
                  <div className="h-10 bg-gray-200 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Fluxo de Navegação
          </h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex flex-col items-center">
              <div className="w-32 h-20 bg-gray-200 rounded-xl flex items-center justify-center border-4 border-[#E48449]">
                <span className="text-sm">Login</span>
              </div>
            </div>
            <div className="text-3xl text-[#E48449]">→</div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-20 bg-gray-200 rounded-xl flex items-center justify-center border-4 border-[#E48449]">
                <span className="text-sm">Catálogo</span>
              </div>
            </div>
            <div className="text-3xl text-[#E48449]">→</div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-20 bg-gray-200 rounded-xl flex items-center justify-center border-4 border-[#E48449]">
                <span className="text-sm">Detalhes</span>
              </div>
            </div>
            <div className="text-3xl text-[#E48449]">→</div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-20 bg-gray-200 rounded-xl flex items-center justify-center border-4 border-[#E48449]">
                <span className="text-sm">Confirmação</span>
              </div>
            </div>
          </div>
        </div>

        {/* Design System */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Sistema de Design
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Colors */}
            <div>
              <h4 className="mb-3">Cores</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#F0BA99] rounded-lg border-2 border-gray-300"></div>
                  <div>
                    <div className="text-sm">Background</div>
                    <div className="text-xs text-gray-500">#F0BA99</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#F6D5C1] rounded-lg border-2 border-gray-300"></div>
                  <div>
                    <div className="text-sm">Secundária</div>
                    <div className="text-xs text-gray-500">#F6D5C1</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#E48449] rounded-lg"></div>
                  <div>
                    <div className="text-sm">Principal</div>
                    <div className="text-xs text-gray-500">#E48449</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div>
              <h4 className="mb-3">Tipografia</h4>
              <div className="space-y-2">
                <div>
                  <div className="text-sm text-gray-500">Títulos</div>
                  <div className="text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Playfair Display
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Corpo/Botões</div>
                  <div className="text-base" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Lato
                  </div>
                </div>
              </div>
            </div>

            {/* Components */}
            <div>
              <h4 className="mb-3">Componentes</h4>
              <div className="space-y-2">
                <button className="w-full py-2 bg-[#E48449] text-white rounded-xl text-sm">
                  Botão Principal
                </button>
                <button className="w-full py-2 bg-[#F6D5C1] text-[#3D2817] rounded-xl text-sm">
                  Botão Secundário
                </button>
                <input
                  type="text"
                  placeholder="Input field"
                  className="w-full px-3 py-2 bg-white rounded-xl border-2 border-gray-300 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
