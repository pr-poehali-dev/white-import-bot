import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-heading font-bold text-xl text-secondary">ИИ‑Импорт</div>
        
        <nav className="hidden md:flex gap-6">
          {['hero', 'problem', 'solution', 'benefits', 'how', 'testimonials', 'pricing', 'faq'].map((id) => (
            <button
              key={id}
              onClick={() => handleScrollToSection(id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {id === 'hero' && 'Главная'}
              {id === 'problem' && 'Проблема'}
              {id === 'solution' && 'Решение'}
              {id === 'benefits' && 'Преимущества'}
              {id === 'how' && 'Как работает'}
              {id === 'testimonials' && 'Отзывы'}
              {id === 'pricing' && 'Тарифы'}
              {id === 'faq' && 'FAQ'}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {['hero', 'problem', 'solution', 'benefits', 'how', 'testimonials', 'pricing', 'faq'].map((id) => (
              <button
                key={id}
                onClick={() => handleScrollToSection(id)}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {id === 'hero' && 'Главная'}
                {id === 'problem' && 'Проблема'}
                {id === 'solution' && 'Решение'}
                {id === 'benefits' && 'Преимущества'}
                {id === 'how' && 'Как работает'}
                {id === 'testimonials' && 'Отзывы'}
                {id === 'pricing' && 'Тарифы'}
                {id === 'faq' && 'FAQ'}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
