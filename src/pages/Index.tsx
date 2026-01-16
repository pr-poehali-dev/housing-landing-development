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
            <a href="#search" className="text-gray-700 hover:text-black">Раздел 1</a>
            <a href="#owners" className="text-gray-700 hover:text-black">Раздел 2</a>
            <a href="#invest" className="text-gray-700 hover:text-black">Раздел 3</a>
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
              Главный заголовок с УТП
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Краткое описание преимуществ и основной ценности сервиса
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <Input 
                placeholder="Поле для поиска" 
                className="flex-1 border-gray-400"
              />
              <Button className="bg-black text-white hover:bg-gray-800">
                Кнопка действия
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="search" className="py-16 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Блок для первой целевой аудитории</h2>
            <p className="text-gray-600">Описание решения для этой аудитории</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Преимущество 1', desc: 'Короткое описание первого преимущества' },
              { title: 'Преимущество 2', desc: 'Короткое описание второго преимущества' },
              { title: 'Преимущество 3', desc: 'Короткое описание третьего преимущества' }
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
              <h3 className="text-xl font-semibold mb-3 text-black">Лид-магнит с бесплатным предложением</h3>
              <p className="text-gray-600 mb-6">Описание того, что получит пользователь</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  placeholder="Email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-gray-400"
                />
                <Button className="bg-black text-white hover:bg-gray-800">Получить</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="owners" className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Блок для второй целевой аудитории</h2>
            <p className="text-gray-600">Описание решения для этой аудитории</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Решение проблемы 1', desc: 'Как мы решаем эту боль клиента' },
              { title: 'Решение проблемы 2', desc: 'Как мы решаем эту боль клиента' },
              { title: 'Решение проблемы 3', desc: 'Как мы решаем эту боль клиента' }
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
            <h2 className="text-3xl font-bold mb-2 text-black">Блок для третьей целевой аудитории</h2>
            <p className="text-gray-600">Описание решения для этой аудитории</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { value: 'Цифра 1', label: 'Метрика' },
              { value: 'Цифра 2', label: 'Метрика' },
              { value: 'Цифра 3', label: 'Метрика' },
              { value: 'Цифра 4', label: 'Метрика' }
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
              <h3 className="text-xl font-semibold mb-3 text-black">Форма захвата лида</h3>
              <p className="text-gray-600 mb-6">Описание выгоды от заполнения формы</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  placeholder="Контакт" 
                  type="tel"
                  className="flex-1 border-gray-400"
                />
                <Button className="bg-black text-white hover:bg-gray-800">Отправить</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Блок с гарантиями</h2>
            <p className="text-gray-600">Почему нам можно доверять</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Гарантия 1', desc: 'Описание первой гарантии' },
              { title: 'Гарантия 2', desc: 'Описание второй гарантии' },
              { title: 'Гарантия 3', desc: 'Описание третьей гарантии' }
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

      <section className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Блок оформления сделки и юридической поддержки</h2>
            <p className="text-gray-600">Описание процесса и юридического сопровождения</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Этап 1', desc: 'Описание первого этапа процесса' },
              { title: 'Этап 2', desc: 'Описание второго этапа процесса' },
              { title: 'Этап 3', desc: 'Описание третьего этапа процесса' },
              { title: 'Этап 4', desc: 'Описание четвёртого этапа процесса' }
            ].map((item, i) => (
              <Card key={i} className="border-2 border-gray-300 bg-white">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 border-2 border-black rounded flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Блок отзывов клиентов</h2>
            <p className="text-gray-600">Реальные истории успеха</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Клиент 1', role: 'Роль', text: 'Текст отзыва о работе с компанией и полученном результате' },
              { name: 'Клиент 2', role: 'Роль', text: 'Текст отзыва о работе с компанией и полученном результате' },
              { name: 'Клиент 3', role: 'Роль', text: 'Текст отзыва о работе с компанией и полученном результате' }
            ].map((review, i) => (
              <Card key={i} className="border-2 border-gray-300">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 border-2 border-black rounded-full"></div>
                    <div>
                      <p className="font-semibold text-black">{review.name}</p>
                      <p className="text-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-2 text-black">Блок FAQ</h2>
              <p className="text-gray-600">Ответы на частые вопросы</p>
            </div>

            <div className="space-y-4">
              {[
                { q: 'Вопрос 1', a: 'Развёрнутый ответ на первый частый вопрос пользователей' },
                { q: 'Вопрос 2', a: 'Развёрнутый ответ на второй частый вопрос пользователей' },
                { q: 'Вопрос 3', a: 'Развёрнутый ответ на третий частый вопрос пользователей' },
                { q: 'Вопрос 4', a: 'Развёрнутый ответ на четвёртый частый вопрос пользователей' }
              ].map((item, i) => (
                <Card key={i} className="border-2 border-gray-300 bg-white">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-black mb-2">{item.q}</h3>
                    <p className="text-sm text-gray-600">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-2 text-black">Блок контактов и обратной связи</h2>
              <p className="text-gray-600">Способы связи с компанией</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: 'Способ связи 1', desc: 'Время работы' },
                { title: 'Способ связи 2', desc: 'Время работы' },
                { title: 'Способ связи 3', desc: 'Время работы' }
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
                <h3 className="text-lg font-bold mb-6 text-center text-black">Форма обратной связи</h3>
                <div className="space-y-4">
                  <Input placeholder="Имя" className="border-gray-400" />
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
              <div className="text-xl font-bold mb-4">Логотип</div>
              <p className="text-sm text-gray-400">Краткое описание компании</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Колонка 1</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#">Ссылка</a></li>
                <li><a href="#">Ссылка</a></li>
                <li><a href="#">Ссылка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Колонка 2</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#">Ссылка</a></li>
                <li><a href="#">Ссылка</a></li>
                <li><a href="#">Ссылка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Колонка 3</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#">Ссылка</a></li>
                <li><a href="#">Ссылка</a></li>
                <li><a href="#">Ссылка</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2024 Копирайт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;