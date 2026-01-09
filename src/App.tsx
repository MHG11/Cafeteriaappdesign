import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { CatalogScreen, CoffeeItem } from './components/CatalogScreen';
import { CoffeeDetailScreen } from './components/CoffeeDetailScreen';
import { PaymentConfirmationScreen } from './components/PaymentConfirmationScreen';
import { WireframeScreen } from './components/WireframeScreen';

type Screen = 'wireframe' | 'login' | 'catalog' | 'detail' | 'confirmation';

interface OrderDetails {
  coffee: CoffeeItem;
  quantity: number;
  size: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('wireframe');
  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeItem | null>(null);
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  // Mock coffee data
  const coffeeItems: CoffeeItem[] = [
    {
      id: 1,
      name: 'Cappuccino',
      description: 'Café espresso com leite vaporizado e espuma cremosa',
      price: 12.90,
      image: 'https://images.unsplash.com/photo-1638202448050-bddae16dd9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwY29mZmVlJTIwY3VwfGVufDF8fHx8MTc2Nzg1NjQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      category: 'Cappuccino',
    },
    {
      id: 2,
      name: 'Espresso',
      description: 'Café puro e encorpado, extraído sob alta pressão',
      price: 8.90,
      image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZXxlbnwxfHx8fDE3Njc4Nzc1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      category: 'Espresso',
    },
    {
      id: 3,
      name: 'Latte',
      description: 'Espresso suave com bastante leite cremoso',
      price: 13.90,
      image: 'https://images.unsplash.com/photo-1582152747136-af63c112fce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGNvZmZlZXxlbnwxfHx8fDE3Njc5NTU5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      category: 'Latte',
    },
    {
      id: 4,
      name: 'Mocha',
      description: 'Café com chocolate, leite vaporizado e chantilly',
      price: 15.90,
      image: 'https://images.unsplash.com/photo-1618576230663-9714aecfb99a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NoYSUyMGNvZmZlZXxlbnwxfHx8fDE3Njc4ODU0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      category: 'Mocha',
    },
    {
      id: 5,
      name: 'Americano',
      description: 'Espresso diluído em água quente',
      price: 9.90,
      image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZXxlbnwxfHx8fDE3Njc4Nzc1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      category: 'Espresso',
    },
    {
      id: 6,
      name: 'Macchiato',
      description: 'Espresso com uma pequena porção de leite',
      price: 11.90,
      image: 'https://images.unsplash.com/photo-1638202448050-bddae16dd9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwY29mZmVlJTIwY3VwfGVufDF8fHx8MTc2Nzg1NjQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      category: 'Espresso',
    },
  ];

  const handleLogin = () => {
    setCurrentScreen('catalog');
  };

  const handleSelectCoffee = (coffee: CoffeeItem) => {
    setSelectedCoffee(coffee);
    setCurrentScreen('detail');
  };

  const handleBackToCatalog = () => {
    setCurrentScreen('catalog');
    setSelectedCoffee(null);
  };

  const handleBuy = (coffee: CoffeeItem, quantity: number, size: string) => {
    setOrderDetails({ coffee, quantity, size });
    setCurrentScreen('confirmation');
  };

  const handleBackToCatalogFromConfirmation = () => {
    setCurrentScreen('catalog');
    setOrderDetails(null);
    setSelectedCoffee(null);
  };

  return (
    <div className="min-h-screen">
      {currentScreen === 'wireframe' && (
        <div>
          <WireframeScreen />
          <div className="fixed bottom-6 right-6">
            <button
              onClick={() => setCurrentScreen('login')}
              className="px-6 py-3 bg-[#E48449] text-white rounded-2xl shadow-lg hover:bg-[#d67439] transition-colors"
            >
              Ver App Funcionando →
            </button>
          </div>
        </div>
      )}

      {currentScreen === 'login' && <LoginScreen onLogin={handleLogin} />}
      
      {currentScreen === 'catalog' && (
        <CatalogScreen
          onSelectCoffee={handleSelectCoffee}
          coffeeItems={coffeeItems}
        />
      )}
      
      {currentScreen === 'detail' && selectedCoffee && (
        <CoffeeDetailScreen
          coffee={selectedCoffee}
          onBack={handleBackToCatalog}
          onBuy={handleBuy}
        />
      )}
      
      {currentScreen === 'confirmation' && orderDetails && (
        <PaymentConfirmationScreen
          coffee={orderDetails.coffee}
          quantity={orderDetails.quantity}
          size={orderDetails.size}
          onBackToCatalog={handleBackToCatalogFromConfirmation}
        />
      )}
    </div>
  );
}