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

      <section className="py-16 md:py-24 border-b border-gray-300 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black leading-tight">
              Удобное жильё для семей, владельцев и инвесторов
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Найдите безопасную квартиру рядом со школой для семьи, сдайте жильё проверенным арендаторам или инвестируйте в доходную недвижимость — всё на одной платформе
            </p>
            
            <div className="flex gap-2 mb-6 justify-center flex-wrap">
              <Button 
                variant={searchType === 'rent' ? 'default' : 'outline'}
                onClick={() => setSearchType('rent')}
                className={searchType === 'rent' ? 'bg-black text-white' : 'border-black text-black hover:bg-gray-100'}
              >
                Снять жильё
              </Button>
              <Button 
                variant={searchType === 'lease' ? 'default' : 'outline'}
                onClick={() => setSearchType('lease')}
                className={searchType === 'lease' ? 'bg-black text-white' : 'border-black text-black hover:bg-gray-100'}
              >
                Сдать квартиру
              </Button>
              <Button 
                variant={searchType === 'invest' ? 'default' : 'outline'}
                onClick={() => setSearchType('invest')}
                className={searchType === 'invest' ? 'bg-black text-white' : 'border-black text-black hover:bg-gray-100'}
              >
                Инвестировать
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <Input 
                placeholder={
                  searchType === 'rent' ? 'Район, близость к школе, безопасность...' :
                  searchType === 'lease' ? 'Адрес вашей квартиры' :
                  'Район с высокой доходностью'
                }
                className="flex-1 border-gray-400 py-6"
              />
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6">
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="search" className="py-16 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Поиск жилья для каждого</h2>
            <p className="text-gray-600 text-lg">Фильтры и карты для семей, студентов и инвесторов</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-gray-300 hover:border-black transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon name="Home" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black text-center">Для семей с детьми</h3>
                <p className="text-gray-600 text-sm text-center mb-6">Безопасные районы, близость к школам, паркам и инфраструктуре. Карты с детскими учреждениями</p>
                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                  Посмотреть районы
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-black bg-black text-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon name="GraduationCap" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Для студентов</h3>
                <p className="text-gray-300 text-sm text-center mb-6">Доступное жильё рядом с вузами, общежитиями и транспортом. Отзывы студентов-арендаторов</p>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-black">
                  Найти рядом с вузом
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 hover:border-black transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon name="TrendingUp" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black text-center">Для инвесторов</h3>
                <p className="text-gray-600 text-sm text-center mb-6">Объекты с высокой доходностью, калькулятор прибыли, аналитика роста районов</p>
                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                  Калькулятор дохода
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-black bg-gradient-to-br from-gray-900 to-black text-white">
            <CardContent className="p-10 md:p-12">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-20 h-20 border-2 border-white rounded mx-auto mb-6"></div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Бесплатный гид по аренде жилья</h3>
                <p className="text-gray-300 mb-8 text-lg">Скачайте руководство для семей с детьми и студентов: как найти безопасное жильё, проверить документы и избежать мошенников</p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input 
                    placeholder="Ваш email" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 border-white bg-white/10 text-white placeholder:text-gray-400 py-6"
                  />
                  <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6">
                    Скачать гид
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Аренда с проверенными арендаторами</h2>
            <p className="text-gray-600 text-lg">Сдавайте квартиру без рисков — проверяем платёжеспособность и историю каждого арендатора</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-black bg-black text-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 border-2 border-white rounded mb-6"></div>
                <h3 className="text-2xl font-semibold mb-4">Проверка арендаторов</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-white rounded flex-shrink-0 mt-1"></div>
                    <p className="text-gray-300 text-sm">История арендных отношений и отзывы предыдущих владельцев</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-white rounded flex-shrink-0 mt-1"></div>
                    <p className="text-gray-300 text-sm">Анализ финансовой стабильности и подтверждение дохода</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-white rounded flex-shrink-0 mt-1"></div>
                    <p className="text-gray-300 text-sm">Проверка документов и личности через госсервисы</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 border-2 border-black rounded mb-6"></div>
                <h3 className="text-2xl font-semibold mb-4 text-black">Гарантия платежей</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black rounded flex-shrink-0 mt-1"></div>
                    <p className="text-gray-600 text-sm">Страхование от неуплаты аренды до 6 месяцев</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black rounded flex-shrink-0 mt-1"></div>
                    <p className="text-gray-600 text-sm">Юридическое сопровождение при возникновении споров</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black rounded flex-shrink-0 mt-1"></div>
                    <p className="text-gray-600 text-sm">Автоматический сбор арендной платы и напоминания</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'FileCheck', title: 'Юридическое сопровождение', desc: 'Подготовка договоров, регистрация в Росреестре, консультации на всех этапах' },
              { icon: 'Shield', title: 'Безопасность сделки', desc: 'Проверка объекта, страхование рисков, защита от мошенничества' },
              { icon: 'Headphones', title: 'Постоянная поддержка', desc: 'Помощь после сделки, решение споров, консультации по налогам' }
            ].map((item, i) => (
              <Card key={i} className="border-2 border-gray-300 hover:border-black transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 border-2 border-black rounded mx-auto mb-4 flex items-center justify-center">
                    <Icon name={item.icon} size={24} />
                  </div>
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
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Инвестиции в недвижимость</h2>
            <p className="text-gray-600 text-lg">Выбирайте объекты с высокой доходностью и растущей стоимостью</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-gray-300 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center">
                    <Icon name="Calculator" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-black">Калькулятор доходности</h3>
                </div>
                <p className="text-gray-600 mb-6">Рассчитайте потенциальную прибыль от аренды с учётом всех расходов: налоги, коммунальные платежи, ремонт и обслуживание</p>
                <div className="bg-gray-50 border-2 border-gray-300 rounded p-6 mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-600 text-sm">Годовой доход:</span>
                    <span className="text-2xl font-bold text-black">8.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Окупаемость:</span>
                    <span className="text-xl font-semibold text-black">11 лет</span>
                  </div>
                </div>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Рассчитать мой объект
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-black bg-black text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold">Доходные районы</h3>
                </div>
                <p className="text-gray-300 mb-6">Аналитика по районам с высоким спросом на аренду, растущими ценами и развитой инфраструктурой</p>
                <div className="space-y-4 mb-6">
                  {[
                    { district: 'Центральный', growth: '+12%', yield: '9.2%' },
                    { district: 'Приморский', growth: '+8%', yield: '7.8%' },
                    { district: 'Академический', growth: '+15%', yield: '8.5%' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 border border-white/20 rounded p-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{item.district}</span>
                        <div className="flex gap-4 text-sm">
                          <span className="text-green-400">Рост {item.growth}</span>
                          <span className="text-gray-300">Доход {item.yield}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-black">
                  Смотреть все районы
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-gray-300 bg-gradient-to-br from-gray-900 to-black text-white">
            <CardContent className="p-10 md:p-12">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-20 h-20 border-2 border-white rounded mx-auto mb-6"></div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Бесплатная консультация по инвестициям</h3>
                <p className="text-gray-300 mb-8 text-lg">Поможем выбрать объект с максимальной доходностью, рассчитаем прибыль и расскажем о налогах и юридических нюансах</p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input 
                    placeholder="Ваш телефон" 
                    type="tel"
                    className="flex-1 border-white bg-white/10 text-white placeholder:text-gray-400 py-6"
                  />
                  <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6">
                    Получить консультацию
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Оформление аренды и юридическая поддержка</h2>
            <p className="text-gray-600 text-lg">Безопасные сделки для арендаторов, владельцев и инвесторов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: 'FileSearch', title: 'Проверка документов', desc: 'Полная экспертиза объекта и правоустанавливающих документов' },
              { icon: 'FileEdit', title: 'Подготовка договоров', desc: 'Составление договоров аренды с учётом всех ваших интересов' },
              { icon: 'Building', title: 'Регистрация в Росреестре', desc: 'Сопровождение процесса регистрации и контроль этапов' },
              { icon: 'MessageSquare', title: 'Постсопровождение', desc: 'Юридическая поддержка после сделки и помощь в спорах' }
            ].map((item, i) => (
              <Card key={i} className="border-2 border-gray-300 hover:border-black transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 border-2 border-black rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name={item.icon} size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-black bg-black text-white">
            <CardContent className="p-10 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 border-2 border-white rounded mb-6"></div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Гарантия безопасности сделки</h3>
                  <p className="text-gray-300 text-lg mb-6">Страхование рисков, проверка платёжеспособности, защита от мошенничества и полное юридическое сопровождение</p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Проверка истории объекта и собственников',
                      'Страхование сделок на сумму до 10 млн ₽',
                      'Защита от скрытых обременений',
                      'Юридическая поддержка в спорах'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 border-2 border-white rounded flex-shrink-0 mt-0.5"></div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 border-2 border-white/20 rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-6 text-center">Бесплатная юридическая консультация</h4>
                  <p className="text-gray-300 text-sm text-center mb-6">Получите профессиональную консультацию по всем вопросам аренды и инвестиций</p>
                  <div className="space-y-3">
                    <Input 
                      placeholder="Ваше имя" 
                      className="border-white bg-white/10 text-white placeholder:text-gray-400"
                    />
                    <Input 
                      placeholder="Телефон" 
                      type="tel"
                      className="border-white bg-white/10 text-white placeholder:text-gray-400"
                    />
                    <Button className="w-full bg-white text-black hover:bg-gray-200">
                      Получить консультацию
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-16 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Отзывы клиентов</h2>
            <p className="text-gray-600 text-lg">Истории семей, владельцев и инвесторов, которые нашли своё жильё через ДомПро</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                name: 'Екатерина М.', 
                role: 'Мама двоих детей', 
                text: 'Искали квартиру рядом со школой больше месяца. Через ДомПро нашли идеальный вариант за неделю — фильтры по безопасности и карты с детскими учреждениями очень помогли',
                rating: 5
              },
              { 
                name: 'Дмитрий К.', 
                role: 'Владелец квартиры', 
                text: 'Сдавал квартиру самостоятельно и дважды попадал на неплательщиков. Теперь через ДомПро — проверяют арендаторов, страхуют платежи. Спокоен за свою недвижимость',
                rating: 5
              },
              { 
                name: 'Андрей С.', 
                role: 'Инвестор', 
                text: 'Купил три квартиры для сдачи. Калькулятор доходности и аналитика по районам помогли выбрать объекты с доходностью 9%. Окупятся за 10 лет вместо 15',
                rating: 5
              }
            ].map((review, i) => (
              <Card key={i} className="border-2 border-gray-300 hover:border-black transition-all">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-black" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                  <div className="border-t border-gray-300 pt-4">
                    <p className="font-semibold text-black">{review.name}</p>
                    <p className="text-gray-600 text-sm">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 border-b border-gray-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Частые вопросы</h2>
            <p className="text-gray-600 text-lg">Ответы на популярные вопросы об аренде, юридических аспектах и инвестициях</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { 
                q: 'Как проверяются арендаторы?', 
                a: 'Мы анализируем историю арендных отношений, проверяем финансовую стабильность через банковские справки, подтверждаем личность через госсервисы и собираем отзывы от предыдущих арендодателей'
              },
              { 
                q: 'Что входит в юридическое сопровождение?', 
                a: 'Полная проверка документов на объект, составление договора аренды, регистрация в Росреестре, консультации по налогам и постоянная поддержка после завершения сделки'
              },
              { 
                q: 'Как рассчитывается доходность для инвесторов?', 
                a: 'Наш калькулятор учитывает рыночную стоимость аренды, налоги, коммунальные платежи, расходы на ремонт и управление объектом. Показываем чистую годовую доходность и срок окупаемости'
              },
              { 
                q: 'Какие гарантии безопасности сделки?', 
                a: 'Страхование от неуплаты аренды до 6 месяцев, проверка юридической чистоты объекта, защита от мошенничества и полное юридическое сопровождение на всех этапах'
              },
              { 
                q: 'Как быстро можно найти жильё?', 
                a: 'В среднем семьи находят подходящую квартиру за 5-7 дней благодаря удобным фильтрам по безопасности, районам и инфраструктуре. Инвесторы — за 10-14 дней с учётом анализа доходности'
              }
            ].map((item, i) => (
              <Card key={i} className="border-2 border-gray-300 hover:border-black transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-black flex items-start gap-3">
                    <Icon name="HelpCircle" size={24} className="flex-shrink-0 mt-0.5" />
                    {item.q}
                  </h3>
                  <p className="text-gray-600 text-sm ml-9">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Готовы начать?</h2>
            <p className="text-gray-600 text-lg mb-8">Найдите жильё для семьи, сдайте квартиру надёжным арендаторам или инвестируйте в доходную недвижимость</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
                Найти жильё
              </Button>
              <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg">
                Сдать квартиру
              </Button>
              <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg">
                Калькулятор дохода
              </Button>
            </div>
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
