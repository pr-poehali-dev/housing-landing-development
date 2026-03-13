import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-300 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="text-xl font-bold text-black">ДомПро</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#search" className="text-gray-700 hover:text-black">Поиск жилья</a>
            <a href="#owners" className="text-gray-700 hover:text-black">Владельцам</a>
            <a href="#invest" className="text-gray-700 hover:text-black">Инвесторам</a>
            <a href="#contacts" className="text-gray-700 hover:text-black">Контакты</a>
          </nav>
          <Button variant="outline" className="hidden md:block border-black text-black hover:bg-black hover:text-white">
            Связаться
          </Button>
        </div>
      </header>

      <section className="py-16 md:py-24 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Удобное жильё для семей и инвесторов
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Прозрачная аренда, проверенные арендаторы и высокодоходные инвестиции в недвижимость
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <Input 
                placeholder="Введите город или район" 
                className="flex-1 border-gray-400"
              />
              <Button className="bg-black text-white hover:bg-gray-800">
                Найти жильё
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="search" className="py-16 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Поиск жилья для арендаторов</h2>
            <p className="text-gray-600">Подходящие варианты для семей и студентов</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Для семей с детьми', desc: 'Просторные квартиры в жилых районах' },
              { title: 'Для студентов', desc: 'Доступное жильё рядом с вузами' },
              { title: 'Проверенные варианты', desc: 'Все объекты проходят верификацию' }
            ].map((item, i) => (
              <Card key={i} className="border-2 border-gray-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 border-2 border-black rounded mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-gray-400">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 border-2 border-black rounded mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-3 text-black">Бесплатный гид по аренде жилья</h3>
              <p className="text-gray-600 mb-6">Получите подробное руководство для семей с детьми и студентов</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  placeholder="Ваш email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-gray-400"
                />
                <Button className="bg-black text-white hover:bg-gray-800">Получить гид</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="owners" className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Владельцам недвижимости</h2>
            <p className="text-gray-600">Сдавайте жильё с гарантией безопасности</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Проверка арендаторов', desc: 'Полная верификация каждого арендатора' },
              { title: 'Гарантия платежей', desc: 'Страхование от неуплаты аренды' },
              { title: 'Юридическая поддержка', desc: 'Помощь в оформлении договоров' }
            ].map((item, i) => (
              <Card key={i} className="border-2 border-gray-300 bg-white">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 border-2 border-black rounded mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="invest" className="py-16 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Инвестиции в недвижимость</h2>
            <p className="text-gray-600">Высокая доходность и прозрачная аналитика</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { value: '12-15%', label: 'Средняя доходность' },
              { value: '500+', label: 'Объектов в портфеле' },
              { value: '98%', label: 'Заполняемость' },
              { value: '24/7', label: 'Поддержка инвесторов' }
            ].map((stat, i) => (
              <Card key={i} className="border-2 border-gray-300 text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-gray-400">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 border-2 border-black rounded mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-3 text-black">Консультация по инвестициям</h3>
              <p className="text-gray-600 mb-6">Получите персональный расчёт доходности от эксперта</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  placeholder="Ваш телефон" 
                  type="tel"
                  className="flex-1 border-gray-400"
                />
                <Button className="bg-black text-white hover:bg-gray-800">Получить консультацию</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Гарантия безопасности</h2>
            <p className="text-gray-600">Защита от всех видов рисков</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Страхование рисков', desc: 'Полное страхование от финансовых потерь' },
              { title: 'Безопасные расчёты', desc: 'Все платежи через защищённую систему' },
              { title: 'Гарантия возврата', desc: 'Компенсация в случае срыва сделки' }
            ].map((item, i) => (
              <Card key={i} className="border-2 border-gray-300 text-center bg-white">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 border-2 border-black rounded mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-2 text-black">Контакты</h2>
              <p className="text-gray-600">Свяжитесь с нами удобным способом</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: '+7 (495) 123-45-67', desc: 'Звонки с 9:00 до 21:00' },
                { title: 'info@dompro.ru', desc: 'Ответим в течение часа' },
                { title: 'Онлайн-чат', desc: 'Круглосуточная поддержка' }
              ].map((contact, i) => (
                <Card key={i} className="border-2 border-gray-300 text-center">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 border-2 border-black rounded mx-auto mb-3"></div>
                    <h3 className="font-semibold mb-1 text-black">{contact.title}</h3>
                    <p className="text-sm text-gray-600">{contact.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-gray-400">
              <CardContent className="p-8">
                <h3 className="text-lg font-bold mb-6 text-center text-black">Напишите нам</h3>
                <div className="space-y-4">
                  <Input placeholder="Ваше имя" className="border-gray-400" />
                  <Input placeholder="Email" type="email" className="border-gray-400" />
                  <Input placeholder="Сообщение" className="border-gray-400" />
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Отправить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4">ДомПро</div>
              <p className="text-sm text-gray-400">Платформа для безопасной аренды и инвестиций</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#search">Поиск жилья</a></li>
                <li><a href="#owners">Для владельцев</a></li>
                <li><a href="#invest">Инвестиции</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#">О нас</a></li>
                <li><a href="#">Блог</a></li>
                <li><a href="#">Партнёрам</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#">Помощь</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Условия использования</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2024 ДомПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
