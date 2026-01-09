import { Coffee } from 'lucide-react';
import { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-[#E48449] rounded-full flex items-center justify-center shadow-lg">
              <Coffee className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            MooDcoffe
          </h1>
          <p className="text-[#8B6F47]">Bem-vindo de volta</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-2 text-[#3D2817]">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-3 bg-white rounded-2xl border-2 border-transparent focus:border-[#E48449] outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-2 text-[#3D2817]">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-white rounded-2xl border-2 border-transparent focus:border-[#E48449] outline-none transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#E48449] text-white rounded-2xl hover:bg-[#d67439] transition-colors shadow-lg mt-6"
          >
            Entrar
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-[#8B6F47]">
            Não tem uma conta?{' '}
            <button className="text-[#E48449] hover:underline">
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
