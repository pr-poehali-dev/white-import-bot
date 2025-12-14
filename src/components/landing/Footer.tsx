import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-heading font-bold text-xl mb-4">ИИ‑Импорт</div>
            <p className="text-white/80 text-sm">
              Умный помощник для легализации импорта селлеров маркетплейсов
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>support@ai-import.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MessageCircle" size={16} />
                <span>Telegram: @ai_import_bot</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Документы</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Оферта
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          © 2024 ИИ‑Импорт. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
