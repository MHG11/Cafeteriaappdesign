import { Coffee, Heart, ShoppingCart, Search } from 'lucide-react';

export interface CoffeeItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

interface CatalogScreenProps {
  onSelectCoffee: (coffee: CoffeeItem) => void;
  coffeeItems: CoffeeItem[];
}

export function CatalogScreen({ onSelectCoffee, coffeeItems }: CatalogScreenProps) {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
              MooDcoffe
            </h1>
            <p className="text-sm text-[#8B6F47]">Encontre seu café perfeito</p>
          </div>
          <div className="relative">
            <ShoppingCart className="w-6 h-6 text-[#3D2817]" />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#E48449] text-white text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8B6F47]" />
          <input
            type="text"
            placeholder="Buscar café..."
            className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border-2 border-transparent focus:border-[#E48449] outline-none transition-colors"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 mb-6">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {['Todos', 'Espresso', 'Cappuccino', 'Latte', 'Mocha'].map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full whitespace-nowrap transition-colors ${
                category === 'Todos'
                  ? 'bg-[#E48449] text-white'
                  : 'bg-white text-[#3D2817] hover:bg-[#F6D5C1]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Coffee Grid */}
      <div className="px-6">
        <div className="grid grid-cols-2 gap-4">
          {coffeeItems.map((coffee) => (
            <div
              key={coffee.id}
              onClick={() => onSelectCoffee(coffee)}
              className="bg-[#F6D5C1] rounded-3xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="relative h-32 bg-white overflow-hidden">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <Heart className="w-4 h-4 text-[#E48449]" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm text-[#3D2817]">{coffee.rating}</span>
                </div>
                <h3 className="text-base mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {coffee.name}
                </h3>
                <p className="text-xs text-[#8B6F47] mb-3 line-clamp-2">
                  {coffee.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg text-[#E48449]">
                    R$ {coffee.price.toFixed(2)}
                  </span>
                  <button className="w-8 h-8 bg-[#E48449] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                    <Coffee className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
