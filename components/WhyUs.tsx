import { FaShieldAlt, FaStar, FaShippingFast, FaWhatsapp } from 'react-icons/fa';


export default function WhyUs() {
  const features = [
    {
      icon: <FaShieldAlt className="text-orange w-8 h-8" />,
      title: 'Peças de Qualidade Premium',
      description: 'Garantimos a qualidade de todos os nossos componentes para um reparo duradouro.'
    },
    {
      icon: <FaStar className="text-orange w-8 h-8" />,
      title: 'Reparo Rápido e Eficiente',
      description: 'Nossos técnicos experientes garantem um diagnóstico preciso e um conserto ágil.'
    },
    {
      icon: <FaShippingFast className="text-orange w-8 h-8" />,
      title: 'Serviço de Leva e Traz',
      description: 'Conveniência total! Buscamos e entregamos seu aparelho com segurança em Rio Claro e região.'
    },
    {
      icon: <FaWhatsapp className="text-orange w-8 h-8" />,
      title: 'Orçamento Imediato',
      description: 'Fale conosco pelo WhatsApp e tenha um orçamento na hora, sem compromisso.'
    },
  ];


  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a Sunfertech?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}