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
        "Полный цикл установки и обновления платформ 1С: Предприятие, Управление Торговлей, Бухгалтерия, Зарплата и Кадры. Миграция данных, настройка и тестирование системы.",
      icon: "Settings",
      color: "bg-gradient-to-r from-sky-400 to-cyan-400",
    },
    {
      title: "Сопровождение 1С",
      description:
        "Профессиональная техническая поддержка 24/7. Оперативное решение сбоев, консультации по работе с программой, регулярные обновления и оптимизация производительности.",
      icon: "Users",
      color: "bg-gradient-to-r from-orange-400 to-amber-400",
    },
    {
      title: "Продажа Лицензий",
      description:
        "Официальные лицензии 1С по выгодным ценам. Полный спектр продуктов: Предприятие, Управление Торговлей, Бухгалтерия, Зарплата и Кадры. Помощь в выборе оптимального решения.",
      icon: "ShoppingCart",
      color: "bg-gradient-to-r from-rose-400 to-pink-400",
    },
    {
      title: "Безопасность Сети",
      description:
        "Комплексная защита корпоративных сетей от киберугроз: межсетевые экраны, системы обнаружения вторжений, антивирусная защита, мониторинг сетевого трафика.",
      icon: "Shield",
      color: "bg-gradient-to-r from-emerald-400 to-teal-400",
    },
    {
      title: "Безопасность Серверов",
      description:
        "Настройка и защита серверной инфраструктуры. Обеспечение отказоустойчивости, резервное копирование, защита от несанкционированного доступа и регулярные обновления безопасности.",
      icon: "Server",
      color: "bg-gradient-to-r from-violet-400 to-purple-400",
    },
    {
      title: "Консультации и Обучение",
      description:
        "Полный спектр обучающих услуг: корпоративное обучение сотрудников, сертифицированные курсы 1С, семинары по безопасности и современным IT-технологиям. Консультации по цифровой трансформации бизнеса.",
      icon: "GraduationCap",
      color: "bg-gradient-to-r from-amber-400 to-orange-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-400 via-violet-500 to-orange-400 text-white py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
              IT-Услуги Про
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-95 leading-relaxed">
              Профессиональные IT-решения для вашего бизнеса. От установки 1С до
              комплексной защиты серверов — мы обеспечиваем стабильную работу
              ваших систем
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-sky-600 hover:bg-amber-50 text-lg px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Бесплатная Консультация
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-sky-600 text-lg px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Посмотреть Услуги
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-600 via-violet-600 to-orange-500 bg-clip-text text-transparent">
              Наши Услуги
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Полный спектр IT-услуг для развития вашего бизнеса. От
              автоматизации до защиты данных — мы сделаем вашу работу
              эффективнее
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
                    className="mt-4 bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white font-semibold rounded-full transition-all duration-300"
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
      <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-orange-400/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
            Готовы к цифровой трансформации?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Получите бесплатную консультацию по автоматизации вашего бизнеса. Мы
            проанализируем ваши потребности и предложим оптимальное решение
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-white text-lg px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Icon name="Phone" size={22} className="mr-3" />
              Заказать звонок
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-500 hover:to-cyan-500 text-white text-lg px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Icon name="Mail" size={22} className="mr-3" />
              Написать сообщение
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-2">150+</div>
              <p className="text-gray-300">Успешных проектов</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                24/7
              </div>
              <p className="text-gray-300">Техническая поддержка</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                98%
              </div>
              <p className="text-gray-300">Удовлетворенных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-orange-500 bg-clip-text text-transparent">
                IT-Услуги Про
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Профессиональные IT-решения для вашего бизнеса. Мы помогаем
                компаниям автоматизировать бизнес-процессы и обеспечиваем
                надежную защиту данных.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">
                Услуги
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>Установка 1С</li>
                <li>Сопровождение систем</li>
                <li>Лицензии ПО</li>
                <li>Безопасность</li>
                <li>Обучение</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">
                Контакты
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Icon name="Phone" size={18} className="text-sky-600" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Icon name="Mail" size={18} className="text-sky-600" />
                  <span>info@it-services-pro.ru</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Icon name="MapPin" size={18} className="text-sky-600" />
                  <span>Москва, ул. Технологическая, 1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-500">
              © 2024 IT-Услуги Про. Все права защищены. Лицензия на
              осуществление деятельности в области защиты информации № 123456
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
