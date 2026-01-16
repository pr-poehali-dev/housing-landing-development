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
            <h2 className="text-3xl font-bold mb-2 text-black">Блок с тремя преимуществами и лид-магнитом</h2>
            <p className="text-gray-600">Основные преимущества продукта и форма захвата email</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-gray-400 md:col-span-2">
              <CardContent className="p-8">
                <div className="max-w-2xl mx-auto text-center">
                  <div className="w-12 h-12 border-2 border-black rounded mx-auto mb-4"></div>
                  <h3 className="text-2xl font-semibold mb-3 text-black">Лид-магнит с бесплатным предложением</h3>
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
                </div>
              </CardContent>
            </Card>

            {[
              { title: 'Преимущество 1', desc: 'Короткое описание первого преимущества' },
              { title: 'Преимущество 2', desc: 'Короткое описание второго преимущества' },
              { title: 'Преимущество 3', desc: 'Короткое описание третьего преимущества' }
            ].map((item, i) => (
              <Card key={i} className="border-2 border-gray-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border-2 border-black rounded flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-2 border-black bg-black text-white md:col-span-2">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Дополнительная выгода</h3>
                <p className="text-gray-300 text-sm">Акцент на особом предложении для усиления конверсии</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="owners" className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Блок с решением проблем клиентов</h2>
            <p className="text-gray-600">Три карточки с описанием того, как продукт решает боли аудитории</p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            <Card className="border-2 border-black bg-black text-white md:col-span-7">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 border-2 border-white rounded flex-shrink-0"></div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold mb-3">Экономия времени на 80%</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">Автоматизируем рутинные процессы и сокращаем время на поиск объектов с нескольких дней до нескольких часов</p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">Узнать подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="md:col-span-5 space-y-6">
              {[
                { title: 'Прозрачность сделок', desc: 'Все этапы под контролем. Видите историю объекта и документы в одном месте' },
                { title: 'Юридическая защита', desc: 'Проверка объектов и сопровождение сделки профессиональными юристами' }
              ].map((item, i) => (
                <Card key={i} className="border-2 border-gray-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 border-2 border-black rounded flex-shrink-0"></div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Оформление аренды и юридическое сопровождение</h2>
            <p className="text-gray-600">Полный цикл поддержки сделки от проверки до подписания</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-black bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center text-2xl font-bold mb-6">1</div>
                <h3 className="text-2xl font-semibold mb-4 text-black">Оформление аренды</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    'Подготовка и проверка договора аренды',
                    'Согласование условий с собственником',
                    'Регистрация договора в Росреестре',
                    'Оформление акта приема-передачи',
                    'Консультация по налоговым вопросам'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 border-2 border-black rounded flex-shrink-0 mt-0.5"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded border border-gray-300">
                  <strong>Срок:</strong> 3-5 рабочих дней<br/>
                  <strong>Стоимость:</strong> от 15 000 ₽
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-black bg-black text-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">2</div>
                <h3 className="text-2xl font-semibold mb-4">Юридическое сопровождение</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    'Полная проверка юридической чистоты объекта',
                    'Анализ правоустанавливающих документов',
                    'Проверка собственника и наличия обременений',
                    'Сопровождение на всех этапах сделки',
                    'Защита интересов при возникновении споров',
                    'Постсопровождение в течение 3 месяцев'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 border-2 border-white rounded flex-shrink-0 mt-0.5"></div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-300 bg-white/10 p-4 rounded border border-white/20">
                  <strong>Срок:</strong> от момента заявки до завершения сделки<br/>
                  <strong>Стоимость:</strong> от 25 000 ₽
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-gray-300 bg-white mt-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-black">Комплексный пакет «Под ключ»</h3>
                  <p className="text-gray-600 text-sm">Оформление аренды + юридическое сопровождение + страхование сделки. Экономия до 30% при покупке пакета</p>
                </div>
                <div className="flex-shrink-0 text-center">
                  <div className="text-3xl font-bold text-black mb-2">от 35 000 ₽</div>
                  <Button className="bg-black text-white hover:bg-gray-800">Заказать пакет</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="invest" className="py-16 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Инвестиции и доходность</h2>
            <p className="text-gray-600">Прозрачная статистика платформы и калькулятор дохода</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="border-2 border-black bg-black text-white">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold mb-2">15-25%</div>
                  <p className="text-gray-300 text-sm">Средняя доходность в год</p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '2.5 млрд ₽', label: 'Объем инвестиций' },
                  { value: '1200+', label: 'Завершенных сделок' },
                  { value: 'от 500k ₽', label: 'Минимальный порог' },
                  { value: '98%', label: 'Уровень одобрения' }
                ].map((stat, i) => (
                  <Card key={i} className="border-2 border-gray-300 text-center">
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold text-black mb-2">{stat.value}</div>
                      <p className="text-xs text-gray-600">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-2 border-gray-400">
              <CardContent className="p-8">
                <div className="w-12 h-12 border-2 border-black rounded mb-4"></div>
                <h3 className="text-2xl font-semibold mb-3 text-black">Рассчитайте свой доход</h3>
                <p className="text-gray-600 mb-6 text-sm">Оставьте контакт — пришлем персональный расчет доходности с учетом ваших целей</p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Сумма инвестиций</label>
                    <Input 
                      placeholder="Например, 1 000 000 ₽" 
                      className="border-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Ваш телефон</label>
                    <Input 
                      placeholder="+7 (999) 123-45-67" 
                      type="tel"
                      className="border-gray-400"
                    />
                  </div>
                  <Button className="bg-black text-white hover:bg-gray-800 w-full">Получить расчет</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Блок с гарантиями и доверием</h2>
            <p className="text-gray-600">Три гарантии, которые снимают возражения клиентов</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-black bg-black text-white">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 border-2 border-white rounded mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Гарантия 1</h3>
                <p className="text-gray-300 text-sm">Описание первой гарантии</p>
              </CardContent>
            </Card>

            {[
              { title: 'Гарантия 2', desc: 'Описание второй гарантии' },
              { title: 'Гарантия 3', desc: 'Описание третьей гарантии' }
            ].map((item, i) => (
              <Card key={i} className="border-2 border-gray-300 bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border-2 border-black rounded flex-shrink-0"></div>
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

      <section className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Блок с этапами работы</h2>
            <p className="text-gray-600">Четыре последовательных шага процесса взаимодействия</p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: 'Этап 1', desc: 'Описание первого этапа процесса' },
                { title: 'Этап 2', desc: 'Описание второго этапа процесса' },
                { title: 'Этап 3', desc: 'Описание третьего этапа процесса' },
                { title: 'Этап 4', desc: 'Описание четвёртого этапа процесса' }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -top-6 left-0 w-16 h-16 border-4 border-black bg-white rounded-full flex items-center justify-center text-2xl font-bold z-10">
                    {i + 1}
                  </div>
                  <Card className="border-2 border-gray-300 bg-white pt-12 h-full">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <div className="hidden md:block absolute top-2 left-8 right-8 h-0.5 bg-gray-300 -z-0"></div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Блок социальных доказательств</h2>
            <p className="text-gray-600">Три отзыва клиентов с именами и ролями</p>
          </div>

          <div className="grid md:grid-cols-6 gap-6">
            <Card className="border-2 border-black bg-black text-white md:col-span-2 md:row-span-2">
              <CardContent className="pt-6 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 border-2 border-white rounded-full mb-4"></div>
                  <p className="text-sm mb-4 leading-relaxed">"Текст отзыва о работе с компанией и полученном результате. Развёрнутое мнение клиента"</p>
                </div>
                <div>
                  <p className="font-semibold">Клиент 1</p>
                  <p className="text-sm text-gray-300">Роль</p>
                </div>
              </CardContent>
            </Card>

            {[
              { name: 'Клиент 2', role: 'Роль', text: 'Текст отзыва о работе с компанией и полученном результате' },
              { name: 'Клиент 3', role: 'Роль', text: 'Текст отзыва о работе с компанией и полученном результате' }
            ].map((review, i) => (
              <Card key={i} className="border-2 border-gray-300 md:col-span-4">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border-2 border-black rounded-full flex-shrink-0"></div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold text-black">{review.name}</p>
                          <p className="text-sm text-gray-600">{review.role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">"{review.text}"</p>
                    </div>
                  </div>
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
              <h2 className="text-3xl font-bold mb-2 text-black">Блок частых вопросов</h2>
              <p className="text-gray-600">Четыре вопроса-ответа для снятия возражений</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: 'Вопрос 1', a: 'Развёрнутый ответ на первый частый вопрос пользователей' },
                { q: 'Вопрос 2', a: 'Развёрнутый ответ на второй частый вопрос пользователей' },
                { q: 'Вопрос 3', a: 'Развёрнутый ответ на третий частый вопрос пользователей' },
                { q: 'Вопрос 4', a: 'Развёрнутый ответ на четвёртый частый вопрос пользователей' }
              ].map((item, i) => (
                <Card key={i} className={`border-2 bg-white ${
                  i === 0 ? 'border-black md:col-span-2' : 'border-gray-300'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 flex-shrink-0 rounded flex items-center justify-center font-bold ${
                        i === 0 ? 'bg-black text-white' : 'border-2 border-black text-black'
                      }`}>
                        {i + 1}
                      </div>
                      <div className="flex-grow">
                        <h3 className={`font-semibold mb-2 ${
                          i === 0 ? 'text-xl text-black' : 'text-lg text-black'
                        }`}>{item.q}</h3>
                        <p className="text-sm text-gray-600">{item.a}</p>
                      </div>
                    </div>
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
              <h2 className="text-3xl font-bold mb-2 text-black">Блок контактов и форма связи</h2>
              <p className="text-gray-600">Три способа связи и форма обратной связи</p>
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