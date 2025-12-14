import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Заявка отправлена!',
        description: 'Мы свяжемся с вами в ближайшее время',
      });

      setFormData({ name: '', email: '', product: '' });
      setIsFormOpen(false);
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку. Попробуйте ещё раз.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-heading font-bold text-xl text-secondary">ИИ‑Импорт</div>
          
          <nav className="hidden md:flex gap-6">
            {['hero', 'problem', 'solution', 'benefits', 'how', 'testimonials', 'pricing', 'faq'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
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
                  onClick={() => scrollToSection(id)}
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

      <main className="pt-20">
        <section id="hero" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-secondary leading-tight mb-6">
                  ИИ‑бот, который переводит селлеров в белый импорт без боли
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Подбор ТН ВЭД, маркировка, сертификация, логистика и бухучет для WB/Ozon/ЯМ за 15 минут
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-base font-semibold" onClick={handleOpenForm}>
                    Получить бесплатный аудит товара
                  </Button>
                  <Button size="lg" variant="outline" className="text-base font-semibold" onClick={handleOpenForm}>
                    Проверить риск блокировки сейчас
                  </Button>
                </div>
              </div>

              <div className="animate-scale-in">
                <Card className="shadow-2xl">
                  <CardContent className="p-6">
                    <div className="bg-muted rounded-lg p-6 mb-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name="Package" size={24} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">Карточка товара</div>
                          <div className="text-sm text-muted-foreground">WB, Ozon, ЯМ</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { icon: 'FileCheck', text: 'ТН ВЭД подобран', color: 'text-green-600' },
                        { icon: 'Shield', text: 'Сертификация проверена', color: 'text-green-600' },
                        { icon: 'Tag', text: 'Маркировка не требуется', color: 'text-blue-600' },
                        { icon: 'Truck', text: 'Логистика оптимизирована', color: 'text-green-600' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Icon name={item.icon} size={20} className={item.color} />
                          <span className="text-sm">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-secondary mb-6">
              Почему селлеры боятся проверок и блокировок
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              Вы продаёте на маркетплейсах, но постоянно рискуете получить блокировку из-за неправильных документов
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: 'HelpCircle',
                  title: 'Непонятно с документами',
                  text: 'Сложно выбрать правильный ТН ВЭД, непонятно какие нужны сертификаты и маркировка',
                },
                {
                  icon: 'AlertTriangle',
                  title: 'Страх штрафов',
                  text: 'Маркетплейсы запрашивают документы, угрожают блокировкой и штрафами',
                },
                {
                  icon: 'DollarSign',
                  title: 'Дорого и долго',
                  text: 'Агентства и брокеры берут больше, чем вы зарабатываете. Форумы — хаос и противоречия',
                },
              ].map((item, i) => (
                <Card key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={item.icon} size={24} className="text-destructive" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="AlertCircle" size={24} className="text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Что будет, если ничего не делать</h3>
                    <p className="text-muted-foreground">
                      Блокировка аккаунта, потеря товаров на складе, штрафы от маркетплейсов и налоговой. Каждый день промедления — потерянная прибыль и растущие риски.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="solution" className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-secondary mb-6">
              Один бот вместо десятков экспертов
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Вы вводите ссылку на товар или его описание. Наш ИИ‑бот анализирует карточку и за 15 минут выдаёт полный отчёт.
                </p>
                <ul className="space-y-4">
                  {[
                    '1–3 варианта ТН ВЭД с обоснованием',
                    'Проверка необходимости маркировки',
                    'Список обязательных документов и сертификатов',
                    'Рекомендации по логистике и налогам',
                    'Персональный чек‑лист перехода в белый импорт',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8">
                <div className="space-y-6">
                  {[
                    { icon: 'Link', label: 'Товар', desc: 'Ссылка на WB/Ozon' },
                    { icon: 'Zap', label: 'Анализ', desc: 'ИИ за 15 минут' },
                    { icon: 'ClipboardCheck', label: 'Чек‑лист', desc: 'Готовый план действий' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={step.icon} size={24} className="text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold">{step.label}</div>
                        <div className="text-sm text-muted-foreground">{step.desc}</div>
                      </div>
                      {i < 2 && (
                        <Icon name="ArrowDown" size={20} className="text-muted-foreground ml-auto" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-secondary mb-12">
              Почему это выгодно селлеру
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Shield',
                  title: 'Меньше риска блокировок и штрафов',
                  text: 'Все документы подобраны правильно — маркетплейсы не придерутся, налоговая не накажет',
                },
                {
                  icon: 'Clock',
                  title: 'Экономия времени и денег',
                  text: 'Вместо недель поиска информации и переплат брокерам — готовый чек‑лист за 15 минут',
                },
                {
                  icon: 'Target',
                  title: 'Сервис под маркетплейсы',
                  text: 'Не абстрактный ВЭД, а конкретные рекомендации для WB, Ozon и Яндекс.Маркет',
                },
              ].map((item, i) => (
                <Card key={i} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon name={item.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-secondary mb-6">
              Три шага к белому импорту
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12">
              Простой процесс для любого селлера
            </p>

            <div className="space-y-8">
              {[
                {
                  number: '1',
                  title: 'Опиши товар',
                  text: 'Отправь ссылку на карточку товара, фото или текстовое описание — как удобно',
                  icon: 'MessageSquare',
                },
                {
                  number: '2',
                  title: 'Получи чек‑лист',
                  text: 'ИИ проанализирует товар и выдаст полный чек‑лист: ТН ВЭД, маркировку, документы и бухучёт',
                  icon: 'FileText',
                },
                {
                  number: '3',
                  title: 'Следуй шагам',
                  text: 'Действуй по чек‑листу самостоятельно или подключи наших проверенных партнёров',
                  icon: 'CheckSquare',
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center font-heading font-bold text-2xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name={step.icon} size={24} className="text-primary" />
                      <h3 className="font-heading font-semibold text-xl">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-secondary mb-12">
              Что говорят селлеры
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Анна, новичок на WB',
                  text: 'Только начинала продавать, не понимала вообще ничего в документах. Бот помог разобраться с первым товаром за один вечер. Теперь не боюсь проверок!',
                  rating: 5,
                },
                {
                  name: 'Дмитрий, 2 года на Ozon',
                  text: 'Переводил весь ассортимент в белый импорт. Раньше тратил недели на поиск информации, теперь — по 15 минут на товар. Сэкономил кучу времени и нервов.',
                  rating: 5,
                },
                {
                  name: 'Елена, опытный селлер',
                  text: 'Работаю на трёх площадках. Запросы документов стали реже, а маржа выросла. Перестала бояться каждого письма от маркетплейса.',
                  rating: 5,
                },
              ].map((review, i) => (
                <Card key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{review.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} className="text-primary" />
                      </div>
                      <div className="font-semibold text-sm">{review.name}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-secondary mb-12">
              Начните с бесплатного аудита
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="animate-scale-in">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-heading font-bold text-2xl mb-2">Free</h3>
                    <div className="text-4xl font-bold text-primary mb-2">0 ₽</div>
                    <p className="text-muted-foreground">Попробуйте бесплатно</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Аудит 1 товара',
                      'Базовый чек‑лист',
                      'Подбор ТН ВЭД',
                      'Проверка маркировки',
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="lg" onClick={handleOpenForm}>
                    Проверить товар бесплатно
                  </Button>
                </CardContent>
              </Card>

              <Card className="animate-scale-in border-primary shadow-xl" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Популярный
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-2">Pro</h3>
                    <div className="text-4xl font-bold text-primary mb-2">4 990 ₽</div>
                    <p className="text-muted-foreground">в месяц</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Неограниченные проверки',
                      'Расширенные рекомендации',
                      'Доступ к партнёрам',
                      'Приоритетная поддержка',
                      'Шаблоны документов',
                      'Обновления законодательства',
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="lg" onClick={handleOpenForm}>
                    Начать сейчас
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-secondary mb-12">
              Частые вопросы
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Гарантируете ли вы отсутствие блокировок?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы предоставляем максимально точные рекомендации на основе актуального законодательства и требований маркетплейсов. Однако итоговая ответственность за документы лежит на продавце. Наш сервис минимизирует риски, но не может дать 100% гарантии из-за изменчивости правил площадок.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Насколько точен подбор ТН ВЭД?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Наш ИИ анализирует описание товара и характеристики, сопоставляя их с базой ТН ВЭД. Точность составляет 90-95%. Мы всегда даём 1-3 варианта с обоснованием, чтобы вы могли выбрать наиболее подходящий.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Подходит ли сервис новичкам?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да! Сервис создан специально для селлеров без знаний в ВЭД. Все рекомендации выдаются простым языком с пошаговыми инструкциями. Даже если вы впервые слышите про ТН ВЭД — вы разберётесь.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Чем это лучше агентств и брокеров?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Агентства берут от 10 000 ₽ за консультацию и ждут несколько дней. Мы даём результат за 15 минут и стоим в разы дешевле. При этом вы получаете не просто совет, а полный чек‑лист с возможностью подключить партнёров при необходимости.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Нужен ли мне бухгалтер или юрист при использовании сервиса?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для большинства товаров наши рекомендации достаточны для самостоятельной работы. Однако для сложных категорий (например, медизделия, косметика) мы рекомендуем консультацию с профильным специалистом. В Pro-тарифе есть доступ к нашим проверенным партнёрам.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary mb-6">
              Перейдите в белый импорт без лишних нервов
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Начните с бесплатного аудита одного товара прямо сейчас
            </p>
            <Button size="lg" className="text-lg px-8 py-6" onClick={handleOpenForm}>
              Начать аудит прямо сейчас
            </Button>
          </div>
        </section>
      </main>

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

      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setIsFormOpen(false)}>
          <Card className="w-full max-w-md animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-bold text-2xl text-secondary">Получить аудит товара</h3>
                <button onClick={() => setIsFormOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                  <Icon name="X" size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-2 block">Ваше имя</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="product" className="text-sm font-medium mb-2 block">Ссылка на товар или описание</Label>
                  <Textarea
                    id="product"
                    placeholder="Вставьте ссылку на WB/Ozon или опишите товар"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    required
                    className="w-full min-h-24"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Отправка...' : 'Получить бесплатный аудит'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;