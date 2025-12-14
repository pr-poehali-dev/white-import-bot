import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormModal = ({ isOpen, onClose }: FormModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
      onClose();
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <Card className="w-full max-w-md animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading font-bold text-2xl text-secondary">Получить аудит товара</h3>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
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
  );
};

export default FormModal;
