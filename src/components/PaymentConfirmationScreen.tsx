import { CheckCircle2, Coffee, MapPin, Clock } from 'lucide-react';
import { CoffeeItem } from './CatalogScreen';

interface PaymentConfirmationScreenProps {
  coffee: CoffeeItem;
  quantity: number;
  size: string;
  onBackToCatalog: () => void;
}

export function PaymentConfirmationScreen({
  coffee,
  quantity,
  size,
  onBackToCatalog,
}: PaymentConfirmationScreenProps) {
  const orderNumber = Math.floor(Math.random() * 10000);
  const estimatedTime = '15-20';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-6 animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Pedido Confirmado!
          </h1>
          <p className="text-[#8B6F47]">Seu café está sendo preparado</p>
        </div>

        {/* Order Details Card */}
        <div className="bg-[#F6D5C1] rounded-3xl p-6 mb-6 shadow-lg">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-[#E48449]/20">
            <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden">
              <img
                src={coffee.image}
                alt={coffee.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                {coffee.name}
              </h3>
              <p className="text-sm text-[#8B6F47] mb-1">
                Tamanho: {size} • Qtd: {quantity}
              </p>
              <p className="text-lg text-[#E48449]">
                R$ {(coffee.price * quantity).toFixed(2)}
              </p>
            </div>
          </div>

          {/* Order Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E48449] rounded-full flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#8B6F47]">Número do Pedido</p>
                <p className="text-base">#{orderNumber}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E48449] rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#8B6F47]">Tempo Estimado</p>
                <p className="text-base">{estimatedTime} minutos</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E48449] rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#8B6F47]">Local de Retirada</p>
                <p className="text-base">MooDcoffe - Rua Principal, 123</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Status */}
        <div className="bg-[#F6D5C1] rounded-3xl p-6 mb-6">
          <h3 className="text-lg mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Status do Pedido
          </h3>
          <div className="space-y-3">
            {[
              { label: 'Pedido Recebido', done: true },
              { label: 'Em Preparação', done: true },
              { label: 'Pronto para Retirada', done: false },
              { label: 'Entregue', done: false },
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    step.done ? 'bg-[#E48449]' : 'bg-white'
                  }`}
                >
                  {step.done && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <span
                  className={`text-sm ${
                    step.done ? 'text-[#3D2817]' : 'text-[#8B6F47]'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={onBackToCatalog}
            className="w-full py-4 bg-[#E48449] text-white rounded-2xl hover:bg-[#d67439] transition-colors shadow-lg"
          >
            Voltar ao Catálogo
          </button>
          <button className="w-full py-4 bg-[#F6D5C1] text-[#3D2817] rounded-2xl hover:bg-white transition-colors">
            Acompanhar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
