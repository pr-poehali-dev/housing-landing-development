import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');
  const [propertyPrice, setPropertyPrice] = useState([5000000]);
  const [monthlyRent, setMonthlyRent] = useState([50000]);

  const calculateYield = () => {
    const yearlyRent = monthlyRent[0] * 12;
    const yield_ = (yearlyRent / propertyPrice[0]) * 100;
    return yield_.toFixed(2);
  };

  const handleLeadMagnet = (type: string) => {
    console.log(`Lead magnet ${type} requested for email: ${email}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-secondary">ДомПро</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#search" className="hover:text-primary transition-colors">Поиск жилья</a>
            <a href="#owners" className="hover:text-primary transition-colors">Владельцам</a>
            <a href="#invest" className="hover:text-primary transition-colors">Инвесторам</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:block">Связаться</Button>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-br from-muted via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Icon name="ShieldCheck" className="text-primary" size={20} />
              <span className="text-sm font-medium text-primary">Безопасная аренда и выгодные инвестиции</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary">
              Удобное жильё для семей и инвесторов
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12">
              Найдите безопасное жильё в удобных районах или инвестируйте в недвижимость с гарантированной доходностью
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: 'Users', text: 'Для семей с детьми', color: 'bg-blue-50 text-blue-600' },
                { icon: 'GraduationCap', text: 'Для студентов', color: 'bg-green-50 text-green-600' },
                { icon: 'TrendingUp', text: 'Для инвесторов', color: 'bg-purple-50 text-purple-600' }
              ].map((item, i) => (
                <div key={i} className={`${item.color} p-4 rounded-lg flex items-center justify-center gap-2`}>
                  <Icon name={item.icon as any} size={20} />
                  <span className="font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <Card className="text-left">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Тип жилья" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Квартира</SelectItem>
                      <SelectItem value="house">Дом</SelectItem>
                      <SelectItem value="studio">Студия</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Район" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="center">Центральный</SelectItem>
                      <SelectItem value="north">Северный</SelectItem>
                      <SelectItem value="south">Южный</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Комнат" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 комната</SelectItem>
                      <SelectItem value="2">2 комнаты</SelectItem>
                      <SelectItem value="3">3+ комнаты</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button size="lg" className="w-full">
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Button variant="outline" size="sm" className="text-xs">
                    <Icon name="School" size={14} className="mr-1" />
                    Рядом со школой
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Icon name="Trees" size={14} className="mr-1" />
                    Возле парка
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Icon name="ShoppingCart" size={14} className="mr-1" />
                    Магазины рядом
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Icon name="ShieldCheck" size={14} className="mr-1" />
                    Безопасный район
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="search" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Поиск жилья для арендаторов</h2>
            <p className="text-muted-foreground text-lg">Доступное жильё в безопасных и удобных районах</p>
          </div>

          <Tabs defaultValue="families" className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="families">
                <Icon name="Users" size={18} className="mr-2" />
                Для семей
              </TabsTrigger>
              <TabsTrigger value="students">
                <Icon name="GraduationCap" size={18} className="mr-2" />
                Для студентов
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="families" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MapPin" className="text-primary" />
                      Районы для семей
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: 'Зелёная Роща', schools: 5, parks: 3, safety: 95 },
                        { name: 'Солнечный', schools: 7, parks: 4, safety: 92 },
                        { name: 'Тихий Берег', schools: 4, parks: 5, safety: 98 }
                      ].map((district, i) => (
                        <div key={i} className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold">{district.name}</h4>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                              {district.safety}% безопасность
                            </span>
                          </div>
                          <div className="flex gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Icon name="School" size={14} />
                              {district.schools} школ
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Trees" size={14} />
                              {district.parks} парков
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Star" className="text-primary" />
                      Преимущества для семей
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        'Близость к детским садам и школам',
                        'Безопасные дворы и детские площадки',
                        'Развитая инфраструктура (магазины, клиники)',
                        'Тихие районы с низким трафиком',
                        'Парковые зоны для прогулок',
                        'Проверенные собственники'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="CheckCircle2" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="students" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Building" className="text-primary" />
                      Жильё рядом с вузами
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: 'Студия у МГУ', price: '25 000 ₽/мес', distance: '5 мин пешком', metro: 'Университет' },
                        { name: '1-комн. возле МГТУ', price: '30 000 ₽/мес', distance: '10 мин пешком', metro: 'Бауманская' },
                        { name: 'Комната у ВШЭ', price: '18 000 ₽/мес', distance: '3 мин пешком', metro: 'Китай-город' }
                      ].map((apt, i) => (
                        <div key={i} className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-sm">{apt.name}</h4>
                            <span className="text-primary font-bold text-sm">{apt.price}</span>
                          </div>
                          <div className="flex gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Icon name="MapPin" size={12} />
                              {apt.distance}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Train" size={12} />
                              {apt.metro}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Wallet" className="text-primary" />
                      Доступные цены
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        'Комнаты от 15 000 ₽/месяц',
                        'Студии от 22 000 ₽/месяц',
                        'Квартиры на несколько студентов',
                        'Без комиссии агентствам',
                        'Гибкие условия аренды',
                        'Включённые коммунальные услуги'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="CheckCircle2" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Icon name="Gift" className="text-primary mb-4" size={56} />
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Бесплатный гид по аренде жилья</h3>
                  <p className="text-muted-foreground mb-2">
                    Скачайте подробное руководство, которое поможет найти безопасное и удобное жильё:
                  </p>
                  <ul className="space-y-2 mt-4">
                    {[
                      'Карты безопасных районов',
                      'Чек-лист проверки квартиры',
                      'Советы по договору аренды',
                      'Контакты проверенных владельцев'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <Input 
                          placeholder="Ваше имя" 
                          className="w-full"
                        />
                        <Input 
                          placeholder="Email для получения гида" 
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full"
                        />
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Я ищу жильё для..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="family">Семьи с детьми</SelectItem>
                            <SelectItem value="student">Учёбы</SelectItem>
                            <SelectItem value="work">Работы</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button onClick={() => handleLeadMagnet('rental-guide')} className="w-full" size="lg">
                          Получить бесплатный гид
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          Мы не передаём ваши данные третьим лицам
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="owners" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Аренда жилья с проверенными арендаторами</h2>
            <p className="text-muted-foreground text-lg">Защитите свою недвижимость и получайте стабильный доход</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { 
                icon: 'UserCheck', 
                title: 'Проверка арендаторов', 
                desc: 'Полная верификация личности, кредитной истории и платёжеспособности',
                features: ['Паспортные данные', 'Кредитная история', 'Справка о доходах', 'Рекомендации']
              },
              { 
                icon: 'ShieldCheck', 
                title: 'Гарантия платежей', 
                desc: 'Страхование от неуплаты и защита от недобросовестных арендаторов',
                features: ['Страховой депозит', 'Юридическая защита', 'Быстрое решение споров', 'Компенсация ущерба']
              },
              { 
                icon: 'FileText', 
                title: 'Юридическое сопровождение', 
                desc: 'Подготовка договоров и регистрация сделки по всем правилам',
                features: ['Типовой договор', 'Регистрация в Росреестре', 'Акты приёма-передачи', 'Консультации юриста']
              }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary flex-shrink-0" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="ClipboardList" className="text-primary" />
                  Как мы проверяем арендаторов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Верификация личности', desc: 'Проверка паспорта и документов через госуслуги' },
                    { step: '2', title: 'Кредитная история', desc: 'Анализ платёжной дисциплины в БКИ' },
                    { step: '3', title: 'Финансовая проверка', desc: 'Подтверждение дохода и стабильности' },
                    { step: '4', title: 'Рекомендации', desc: 'Отзывы предыдущих арендодателей' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary text-white">
              <CardContent className="p-8">
                <Icon name="Building2" className="mb-4" size={56} />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Начните сдавать жильё безопасно</h3>
                <p className="opacity-90 mb-6">
                  Зарегистрируйте свою недвижимость и получите доступ к базе проверенных арендаторов
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Размещение объявления — бесплатно',
                    'Комиссия только при успешной сделке',
                    'Полная юридическая поддержка',
                    'Страхование от рисков'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={18} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="w-full bg-white text-secondary hover:bg-white/90">
                  Добавить объект
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="invest" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Инвестиции в недвижимость</h2>
            <p className="text-muted-foreground text-lg">Выбор объектов с высокой доходностью и прозрачной аналитикой</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { value: '12-15%', label: 'Средняя доходность', icon: 'TrendingUp' },
              { value: '500+', label: 'Объектов в портфеле', icon: 'Building' },
              { value: '98%', label: 'Заполняемость', icon: 'Users' },
              { value: '24/7', label: 'Поддержка инвесторов', icon: 'Headphones' }
            ].map((stat, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <Icon name={stat.icon as any} className="text-primary mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calculator" className="text-primary" />
                  Калькулятор доходности
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Стоимость недвижимости: {propertyPrice[0].toLocaleString('ru-RU')} ₽
                  </label>
                  <Slider 
                    value={propertyPrice} 
                    onValueChange={setPropertyPrice}
                    min={1000000}
                    max={20000000}
                    step={500000}
                    className="mb-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Месячная аренда: {monthlyRent[0].toLocaleString('ru-RU')} ₽
                  </label>
                  <Slider 
                    value={monthlyRent} 
                    onValueChange={setMonthlyRent}
                    min={10000}
                    max={200000}
                    step={5000}
                    className="mb-2"
                  />
                </div>
                <div className="p-6 bg-primary/10 rounded-lg text-center">
                  <div className="text-sm text-muted-foreground mb-2">Годовая доходность</div>
                  <div className="text-4xl font-bold text-primary">{calculateYield()}%</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    {(monthlyRent[0] * 12).toLocaleString('ru-RU')} ₽ в год
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" />
                  Доходные районы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Центральный', yield: '14.5%', growth: '+12%', risk: 'Низкий' },
                    { name: 'Деловой квартал', yield: '15.2%', growth: '+18%', risk: 'Средний' },
                    { name: 'Новостройки у метро', yield: '13.8%', growth: '+25%', risk: 'Низкий' }
                  ].map((district, i) => (
                    <div key={i} className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold">{district.name}</h4>
                        <span className="text-primary font-bold">{district.yield}</span>
                      </div>
                      <div className="flex gap-4 text-xs">
                        <span className="flex items-center gap-1 text-green-600">
                          <Icon name="TrendingUp" size={12} />
                          Рост {district.growth}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Shield" size={12} />
                          {district.risk} риск
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Смотреть все районы
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-secondary to-secondary/90 text-white">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Icon name="TrendingUp" className="mb-4" size={56} />
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Бесплатная консультация по инвестициям</h3>
                  <p className="opacity-90 mb-6">
                    Получите персональную консультацию от эксперта по инвестициям в недвижимость:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Подбор объектов под ваш бюджет',
                      'Расчёт доходности и рисков',
                      'Анализ районов и перспектив роста',
                      'Юридическое сопровождение сделки'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Card className="bg-white">
                    <CardContent className="p-6 text-secondary">
                      <div className="space-y-4">
                        <Input placeholder="Ваше имя" />
                        <Input placeholder="Телефон" type="tel" />
                        <Input placeholder="Email" type="email" />
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Бюджет инвестиций" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">До 3 млн ₽</SelectItem>
                            <SelectItem value="2">3-5 млн ₽</SelectItem>
                            <SelectItem value="3">5-10 млн ₽</SelectItem>
                            <SelectItem value="4">Более 10 млн ₽</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button className="w-full" size="lg">
                          Получить консультацию
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          Перезвоним в течение 30 минут
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Оформление аренды и юридическое сопровождение</h2>
              <p className="text-muted-foreground text-lg">Полная юридическая защита на всех этапах сделки</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { 
                  icon: 'FileText', 
                  title: 'Подготовка договоров', 
                  desc: 'Юридически грамотные документы с учётом всех рисков',
                  list: ['Типовой договор аренды', 'Акт приёма-передачи', 'Соглашение о депозите', 'Приложения к договору']
                },
                { 
                  icon: 'Scale', 
                  title: 'Правовая защита', 
                  desc: 'Защита ваших интересов на всех этапах аренды',
                  list: ['Консультации юриста', 'Сопровождение споров', 'Защита в суде', 'Досудебное урегулирование']
                },
                { 
                  icon: 'UserCheck', 
                  title: 'Регистрация сделки', 
                  desc: 'Официальное оформление всех документов',
                  list: ['Регистрация в Росреестре', 'Подача в налоговую', 'Электронная подпись', 'Хранение документов']
                },
                { 
                  icon: 'Lock', 
                  title: 'Конфиденциальность', 
                  desc: 'Полная защита персональных данных',
                  list: ['Шифрование данных', 'Безопасное хранение', 'Соблюдение GDPR', 'NDA при необходимости']
                }
              ].map((item, i) => (
                <Card key={i} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-16">
                      {item.list.map((listItem, j) => (
                        <li key={j} className="text-sm flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={14} />
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8 text-center">
                <Icon name="Scale" className="text-primary mx-auto mb-4" size={56} />
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Бесплатная юридическая консультация</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Получите ответы на вопросы по аренде от профессиональных юристов. Консультация займёт 30 минут и поможет избежать типичных ошибок.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                  <Input placeholder="Ваш телефон" type="tel" />
                  <Button size="lg">Записаться на консультацию</Button>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    30 минут
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Phone" size={14} />
                    По телефону или Zoom
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="CheckCircle2" size={14} />
                    Бесплатно
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Гарантия безопасности сделки</h2>
            <p className="text-muted-foreground text-lg">Защита от всех видов рисков на каждом этапе</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              { 
                icon: 'ShieldCheck', 
                title: 'Страхование рисков', 
                desc: 'Полное страхование от финансовых потерь и форс-мажоров',
                features: ['Страховка до 500 000 ₽', 'Покрытие ущерба имуществу', 'Защита от неплательщиков', 'Компенсация простоя']
              },
              { 
                icon: 'Wallet', 
                title: 'Безопасные расчёты', 
                desc: 'Все платежи через защищённую эскроу-систему',
                features: ['Эскроу-счета', 'Безналичные переводы', 'Электронные чеки', 'Прозрачная история']
              },
              { 
                icon: 'Award', 
                title: 'Гарантия возврата', 
                desc: 'Компенсация в случае срыва сделки не по вашей вине',
                features: ['100% возврат депозита', 'Компенсация расходов', 'Страхование сделки', 'Арбитраж споров']
              }
            ].map((item, i) => (
              <Card key={i} className="text-center hover:shadow-xl transition-all">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{item.desc}</p>
                  <ul className="space-y-2 text-left">
                    {item.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary flex-shrink-0" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-2">Как работает защита сделки?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Мы используем систему эскроу-счетов: деньги арендатора блокируются на специальном счёте и переводятся владельцу только после подписания всех документов и передачи ключей. Если сделка срывается — деньги возвращаются автоматически.
                  </p>
                  <Button variant="outline" size="sm">
                    Подробнее о защите
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-muted-foreground text-lg">Реальные истории успешных сделок</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: 'Елена Михайлова', 
                role: 'Арендатор', 
                avatar: 'E',
                text: 'Нашли идеальную квартиру для нашей семьи за неделю. Район безопасный, рядом школа и парк. Процесс оформления был простым благодаря юридической поддержке.',
                rating: 5,
                verified: true
              },
              { 
                name: 'Дмитрий Кузнецов', 
                role: 'Владелец недвижимости', 
                avatar: 'Д',
                text: 'Сдаю 3 квартиры через платформу уже год. Арендаторы все проверенные, оплата всегда вовремя. Очень доволен системой страхования — спокоен за свою недвижимость.',
                rating: 5,
                verified: true
              },
              { 
                name: 'Анна Соколова', 
                role: 'Инвестор', 
                avatar: 'А',
                text: 'Вложила 5 млн в недвижимость полгода назад по рекомендации консультанта. Доходность 14% в год — именно как рассчитывали! Планирую расширять портфель.',
                rating: 5,
                verified: true
              }
            ].map((review, i) => (
              <Card key={i} className="animate-fade-in hover:shadow-lg transition-all" style={{animationDelay: `${i * 150}ms`}}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{review.name}</p>
                        {review.verified && (
                          <Icon name="BadgeCheck" className="text-primary" size={16} />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, j) => (
                      <Icon key={j} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Icon name="MessageSquare" size={18} className="mr-2" />
              Читать все отзывы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground text-lg">Ответы на популярные вопросы об аренде и инвестициях</p>
          </div>
          
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                <span className="flex items-center gap-2">
                  <Icon name="UserCheck" size={18} className="text-primary" />
                  Как проверяются арендаторы?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы проводим четырёхэтапную проверку: (1) верификация документов через госуслуги, (2) проверка кредитной истории в БКИ, (3) подтверждение финансовой стабильности и дохода, (4) запрос рекомендаций с предыдущих мест аренды. Только после прохождения всех этапов арендатор получает статус "Проверенный".
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                <span className="flex items-center gap-2">
                  <Icon name="Wallet" size={18} className="text-primary" />
                  Какова комиссия сервиса?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Для арендаторов размещение заявок и поиск жилья полностью бесплатны. Владельцы недвижимости платят комиссию 10% от месячной арендной платы только при успешном заключении сделки. Никаких скрытых платежей — прозрачное ценообразование.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                <span className="flex items-center gap-2">
                  <Icon name="Clock" size={18} className="text-primary" />
                  Как быстро можно найти жильё?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                В среднем наши клиенты находят подходящее жильё за 7-10 дней. Скорость зависит от ваших требований, бюджета и города поиска. Для популярных районов Москвы и Санкт-Петербурга обычно хватает 3-5 дней.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                <span className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={18} className="text-primary" />
                  Какая минимальная сумма инвестиций?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Минимальная сумма для участия в инвестиционной программе составляет 500 000 рублей. Мы предлагаем различные варианты объектов под разные бюджеты: студии от 2 млн, однокомнатные от 3.5 млн, двухкомнатные от 5 млн. Средняя доходность — 12-15% годовых.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                <span className="flex items-center gap-2">
                  <Icon name="Scale" size={18} className="text-primary" />
                  Предоставляете ли вы юридическую поддержку?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы предоставляем полное юридическое сопровождение: подготовка типовых договоров аренды, регистрация сделки в Росреестре, составление актов приёма-передачи, консультации юриста на всех этапах аренды. Первая консультация — бесплатно.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                <span className="flex items-center gap-2">
                  <Icon name="Shield" size={18} className="text-primary" />
                  Что делать, если арендатор не платит?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                У нас действует система страхования от неуплаты. При задержке платежа более 3 дней мы связываемся с арендатором. Если оплата не поступает в течение 7 дней, страховая компания компенсирует владельцу стоимость аренды, а мы занимаемся досудебным урегулированием с арендатором.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Контакты и поддержка</h2>
            <p className="text-lg opacity-90 mb-12">Мы всегда на связи и готовы помочь вам на каждом этапе</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: 'Phone', title: '+7 (495) 123-45-67', desc: 'Звонки с 9:00 до 21:00 МСК', link: 'tel:+74951234567' },
                { icon: 'Mail', title: 'info@dompro.ru', desc: 'Ответим в течение часа', link: 'mailto:info@dompro.ru' },
                { icon: 'MessageCircle', title: 'Онлайн-чат', desc: 'Круглосуточная поддержка', link: '#' }
              ].map((contact, i) => (
                <Card key={i} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                  <CardContent className="pt-6 text-center">
                    <a href={contact.link} className="block">
                      <Icon name={contact.icon as any} className="mx-auto mb-3" size={32} />
                      <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                      <p className="text-sm opacity-80">{contact.desc}</p>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white/10 border-white/20 text-left">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Напишите нам</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                  <Input placeholder="Телефон" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                  <Input placeholder="Email" type="email" className="md:col-span-2 bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                  <Input placeholder="Тема обращения" className="md:col-span-2 bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                </div>
                <Button size="lg" className="w-full mt-4 bg-white text-secondary hover:bg-white/90">
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} />
                <span className="text-xl font-bold">ДомПро</span>
              </div>
              <p className="text-sm opacity-80 mb-4">Платформа для безопасной аренды и выгодных инвестиций в недвижимость</p>
              <div className="flex gap-3">
                {['Facebook', 'Twitter', 'Instagram'].map((social, i) => (
                  <a key={i} href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <span className="text-xs">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#search" className="hover:opacity-100 transition-opacity">Поиск жилья</a></li>
                <li><a href="#owners" className="hover:opacity-100 transition-opacity">Для владельцев</a></li>
                <li><a href="#invest" className="hover:opacity-100 transition-opacity">Инвестиции</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Юридические услуги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">О нас</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Блог</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Карьера</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Партнёрам</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Помощь</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Условия использования</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-60">
            <p>© 2024 ДомПро. Все права защищены. ИНН 1234567890 | ОГРН 0987654321</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
