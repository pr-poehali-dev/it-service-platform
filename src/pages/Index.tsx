import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "1С Установка и Обновления",
      description:
        "Профессиональная установка и обновление программ 1С для вашего бизнеса",
      icon: "Settings",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      title: "Сопровождение 1С",
      description:
        "Техническая поддержка и консультации по работе с системами 1С",
      icon: "Users",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
    },
    {
      title: "Продажа Лицензий",
      description:
        "Официальные лицензии на программное обеспечение по выгодным ценам",
      icon: "ShoppingCart",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      title: "Безопасность Сети",
      description:
        "Защита корпоративных сетей от угроз и настройка систем безопасности",
      icon: "Shield",
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      title: "Безопасность Серверов",
      description: "Настройка и защита серверной инфраструктуры предприятия",
      icon: "Server",
      color: "bg-gradient-to-r from-indigo-500 to-purple-500",
    },
    {
      title: "Консультации и Обучение",
      description: "Экспертные консультации и обучение по всем направлениям IT",
      icon: "GraduationCap",
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">IT-Услуги</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Профессиональные решения для вашего бизнеса: от установки 1С до
              защиты серверов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Заказать Консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Наши Услуги
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Наши Услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр IT-услуг для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg"
              >
                <CardHeader className="pb-3">
                  <div
                    className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button
                    className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-full transition-all duration-300"
                    size="sm"
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Свяжитесь с нами для получения персонального предложения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-lg px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Написать
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Icon name="Phone" size={20} />
              <span>+7 (XXX) XXX-XX-XX</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Icon name="Mail" size={20} />
              <span>info@it-services.ru</span>
            </div>
          </div>
          <p className="text-gray-500">
            © 2024 IT-Услуги. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
