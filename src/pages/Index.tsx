import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');
  const [searchType, setSearchType] = useState('rent');

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-300 py-4 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="text-xl font-bold text-black">ДомПро</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#search" className="text-gray-700 hover:text-black">Поиск жилья</a>
            <a href="#services" className="text-gray-700 hover:text-black">Услуги</a>
            <a href="#invest" className="text-gray-700 hover:text-black">Инвесторам</a>
            <a href="#reviews" className="text-gray-700 hover:text-black">Отзывы</a>
            <a href="#faq" className="text-gray-700 hover:text-black">Вопросы</a>
          </nav>
          <Button className="bg-black text-white hover:bg-gray-800">
            Связаться
          </Button>
        </div>
      </header>

      <section className="py-20 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Жильё для семей, владельцев и инвесторов
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Найдите квартиру, сдайте жильё или инвестируйте в недвижимость
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <Input 
                placeholder="Поиск жилья по району или адресу"
                className="flex-1 border-gray-400"
              />
              <Button className="bg-black text-white hover:bg-gray-800">
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="search" className="py-16 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2 text-black">Поиск жилья</h2>
            <p className="text-gray-600">Безопасные районы, удобные фильтры и проверенные объекты</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 border-2 border-black rounded mb-4"></div>
                <h3 className="text-lg font-semibold mb-2 text-black">Для семей</h3>
                <p className="text-gray-600 text-sm">Близость к школам, паркам и безопасным районам</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-black bg-black text-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 border-2 border-white rounded mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">Для студентов</h3>
                <p className="text-gray-300 text-sm">Доступное жильё рядом с вузами</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 border-2 border-black rounded mb-4"></div>
                <h3 className="text-lg font-semibold mb-2 text-black">Для инвесторов</h3>
                <p className="text-gray-600 text-sm">Объекты с высокой доходностью</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2 text-black">Безопасная аренда</h2>
            <p className="text-gray-600">Проверяем арендаторов и защищаем владельцев</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 border-2 border-black rounded mb-4"></div>
                <h3 className="text-lg font-semibold mb-2 text-black">Проверка арендаторов</h3>
                <p className="text-gray-600 text-sm">История, документы и финансовая стабильность</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-black bg-black text-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 border-2 border-white rounded mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">Гарантия платежей</h3>
                <p className="text-gray-300 text-sm">Страхование и защита от неуплаты</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 border-2 border-black rounded mb-4"></div>
                <h3 className="text-lg font-semibold mb-2 text-black">Юридическая поддержка</h3>
                <p className="text-gray-600 text-sm">Договоры, регистрация и консультации</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="invest" className="py-16 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2 text-black">Недвижимость как бизнес</h2>
            <p className="text-gray-600">Арендуйте, сдавайте или инвестируйте с выгодой</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 border-2 border-black rounded mb-4"></div>
                <h3 className="text-lg font-semibold mb-2 text-black">Для арендаторов</h3>
                <p className="text-gray-600 text-sm mb-4">Прозрачные цены, удобные условия оплаты и долгосрочная аренда</p>
                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white text-sm">
                  Подобрать жильё
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-black bg-black text-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 border-2 border-white rounded mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">Для владельцев</h3>
                <p className="text-gray-300 text-sm mb-4">Стабильный доход, проверенные арендаторы и управление объектом</p>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-black text-sm">
                  Сдать квартиру
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 border-2 border-black rounded mb-4"></div>
                <h3 className="text-lg font-semibold mb-2 text-black">Для инвесторов</h3>
                <p className="text-gray-600 text-sm mb-4">Калькулятор доходности, аналитика районов и поддержка сделки</p>
                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white text-sm">
                  Рассчитать доход
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2 text-black">Юридическое сопровождение</h2>
            <p className="text-gray-600">Безопасность сделки на каждом этапе</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 border-2 border-black rounded mx-auto mb-4"></div>
                <h3 className="text-base font-semibold mb-2 text-black">Проверка документов</h3>
                <p className="text-gray-600 text-xs">Экспертиза объекта</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-black bg-black text-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 border-2 border-white rounded mx-auto mb-4"></div>
                <h3 className="text-base font-semibold mb-2">Подготовка договоров</h3>
                <p className="text-gray-300 text-xs">С учётом интересов</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 border-2 border-black rounded mx-auto mb-4"></div>
                <h3 className="text-base font-semibold mb-2 text-black">Регистрация</h3>
                <p className="text-gray-600 text-xs">В Росреестре</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 border-2 border-black rounded mx-auto mb-4"></div>
                <h3 className="text-base font-semibold mb-2 text-black">Поддержка</h3>
                <p className="text-gray-600 text-xs">После сделки</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2 text-black">Отзывы</h2>
            <p className="text-gray-600">Что говорят наши клиенты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Екатерина М.', role: 'Семья', text: 'Нашли квартиру рядом со школой за неделю. Удобные фильтры помогли' },
              { name: 'Дмитрий К.', role: 'Владелец', text: 'Проверяют арендаторов и страхуют платежи. Спокоен за свою квартиру' },
              { name: 'Андрей С.', role: 'Инвестор', text: 'Калькулятор помог выбрать объекты с доходностью 9%' }
            ].map((review, i) => (
              <Card key={i} className="border-2 border-gray-300">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 text-sm">"{review.text}"</p>
                  <div className="border-t border-gray-300 pt-4">
                    <p className="font-semibold text-black text-sm">{review.name}</p>
                    <p className="text-gray-600 text-xs">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2 text-black">Вопросы</h2>
            <p className="text-gray-600">Ответы на частые вопросы</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: 'Как проверяются арендаторы?', a: 'История, документы и финансовая стабильность' },
              { q: 'Что входит в юридическое сопровождение?', a: 'Проверка, договоры, регистрация и поддержка' },
              { q: 'Какие гарантии безопасности?', a: 'Страхование, проверка и юридическая защита' }
            ].map((item, i) => (
              <Card key={i} className="border-2 border-gray-300">
                <CardContent className="p-6">
                  <h3 className="text-base font-semibold mb-2 text-black">{item.q}</h3>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">Начните прямо сейчас</h2>
            <p className="text-gray-600 mb-8">Найдите, сдайте или инвестируйте</p>
            <Button className="bg-black text-white hover:bg-gray-800 px-8">
              Связаться
            </Button>
          </div>
        </div>
      </section>

      <footer id="contacts" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-black mb-4">ДомПро</div>
              <p className="text-gray-600 text-sm">Платформа для поиска жилья, проверенных арендаторов и выгодных инвестиций в недвижимость</p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Для арендаторов</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Поиск жилья</a></li>
                <li><a href="#" className="hover:text-black">Гид по аренде</a></li>
                <li><a href="#" className="hover:text-black">Безопасные районы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Для владельцев</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Сдать квартиру</a></li>
                <li><a href="#" className="hover:text-black">Проверка арендаторов</a></li>
                <li><a href="#" className="hover:text-black">Гарантия платежей</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Для инвесторов</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Калькулятор дохода</a></li>
                <li><a href="#" className="hover:text-black">Доходные районы</a></li>
                <li><a href="#" className="hover:text-black">Консультация</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2024 ДомПро. Все права защищены</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-black text-sm">Политика конфиденциальности</a>
              <a href="#" className="text-gray-600 hover:text-black text-sm">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;