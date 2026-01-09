import { ArrowLeft, Heart, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { CoffeeItem } from './CatalogScreen';

interface CoffeeDetailScreenProps {
  coffee: CoffeeItem;
  onBack: () => void;
  onBuy: (coffee: CoffeeItem, quantity: number, size: string) => void;
}

export function CoffeeDetailScreen({ coffee, onBack, onBuy }: CoffeeDetailScreenProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [isFavorite, setIsFavorite] = useState(false);

  const sizes = [
    { label: 'P', price: 0 },
    { label: 'M', price: 2 },
    { label: 'G', price: 4 },
  ];

  const currentPrice = coffee.price + (sizes.find(s => s.label === selectedSize)?.price || 0);
  const totalPrice = currentPrice * quantity;

  const handleBuy = () => {
    onBuy(coffee, quantity, selectedSize);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Image */}
      <div className="relative h-80 bg-gradient-to-b from-[#3D2817] to-[#E48449]">
        <img
          src={coffee.image}
          alt={coffee.name}
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F0BA99]" />
        
        {/* Header Actions */}
        <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <ArrowLeft className="w-5 h-5 text-[#3D2817]" />
          </button>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <Heart
              className={`w-5 h-5 ${isFavorite ? 'fill-[#E48449] text-[#E48449]' : 'text-[#E48449]'}`}
            />
          </button>
        </div>

        {/* Coffee Cup Centered */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-40 h-40 bg-white rounded-full p-4 shadow-2xl">
            <img
              src={coffee.image}
              alt={coffee.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-24 px-6 pb-6">
        {/* Rating and Name */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-yellow-500 text-xl">★</span>
            <span className="text-lg">{coffee.rating}</span>
            <span className="text-sm text-[#8B6F47]">(245 avaliações)</span>
          </div>
          <h2 className="text-3xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            {coffee.name}
          </h2>
          <p className="text-sm text-[#8B6F47] mb-1">{coffee.category}</p>
        </div>

        {/* Description */}
        <div className="bg-[#F6D5C1] rounded-2xl p-5 mb-6">
          <h3 className="text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Descrição
          </h3>
          <p className="text-sm text-[#3D2817] leading-relaxed">
            {coffee.description}
          </p>
        </div>

        {/* Size Selection */}
        <div className="mb-6">
          <h3 className="text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Tamanho
          </h3>
          <div className="flex gap-3">
            {sizes.map((size) => (
              <button
                key={size.label}
                onClick={() => setSelectedSize(size.label)}
                className={`flex-1 py-3 rounded-2xl transition-colors ${
                  selectedSize === size.label
                    ? 'bg-[#E48449] text-white shadow-lg'
                    : 'bg-[#F6D5C1] text-[#3D2817] hover:bg-[#E48449] hover:text-white'
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-6">
          <h3 className="text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Quantidade
          </h3>
          <div className="flex items-center justify-center gap-6 bg-[#F6D5C1] rounded-2xl p-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 bg-[#E48449] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Minus className="w-5 h-5" />
            </button>
            <span className="text-2xl w-12 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 bg-[#E48449] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Price and Buy Button */}
        <div className="bg-[#F6D5C1] rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-[#8B6F47]">Preço Total</p>
              <p className="text-3xl text-[#E48449]" style={{ fontFamily: 'Playfair Display, serif' }}>
                R$ {totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
          <button
            onClick={handleBuy}
            className="w-full py-4 bg-[#E48449] text-white rounded-2xl hover:bg-[#d67439] transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  );
}
