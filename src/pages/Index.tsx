import { useState } from 'react';
import Header from '@/components/landing/Header';
import MainSections from '@/components/landing/MainSections';
import Footer from '@/components/landing/Footer';
import FormModal from '@/components/landing/FormModal';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} />
      <MainSections onOpenForm={handleOpenForm} />
      <Footer />
      <FormModal isOpen={isFormOpen} onClose={handleCloseForm} />
    </div>
  );
};

export default Index;
