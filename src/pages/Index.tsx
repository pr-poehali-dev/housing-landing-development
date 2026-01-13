import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');

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

      <section className="py-20 md:py-32 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary">
              Удобное жильё для семей и инвесторов
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Прозрачная аренда, проверенные арендаторы и высокодоходные инвестиции в недвижимость
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input 
                placeholder="Введите город или район" 
                className="flex-1"
              />
              <Button size="lg" className="sm:w-auto">
                <Icon name="Search" size={20} className="mr-2" />
                Найти жильё
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="search" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Поиск жилья для арендаторов</h2>
            <p className="text-muted-foreground">Подходящие варианты для семей и студентов</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'Users', title: 'Для семей с детьми', desc: 'Просторные квартиры в жилых районах' },
              { icon: 'GraduationCap', title: 'Для студентов', desc: 'Доступное жильё рядом с вузами' },
              { icon: 'Shield', title: 'Проверенные варианты', desc: 'Все объекты проходят верификацию' }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-lg transition-all hover:scale-105 animate-scale-in" style={{animationDelay: `${i * 100}ms`}}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <Icon name="Gift" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-semibold mb-3">Бесплатный гид по аренде жилья</h3>
              <p className="text-muted-foreground mb-6">Получите подробное руководство для семей с детьми и студентов</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Ваш email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={() => handleLeadMagnet('rental-guide')}>Получить гид</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="owners" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Аренда жилья с проверенными арендаторами</h2>
              <p className="text-muted-foreground mb-6">
                Защитите свою недвижимость и получайте стабильный доход. Мы тщательно проверяем каждого арендатора.
              </p>
              <ul className="space-y-4">
                {[
                  'Проверка кредитной истории',
                  'Верификация личности и документов',
                  'Рекомендации с предыдущих мест аренды',
                  'Гарантия своевременной оплаты'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card>
              <CardContent className="p-8">
                <Icon name="Building2" className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-semibold mb-4">Начните сдавать жильё</h3>
                <p className="text-muted-foreground mb-6">Зарегистрируйте свою недвижимость и найдите надёжных арендаторов</p>
                <Button className="w-full" size="lg">Добавить объект</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="invest" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Инвестиции в недвижимость</h2>
            <p className="text-muted-foreground">Выбор объектов с высокой доходностью</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { value: '12-15%', label: 'Средняя доходность в год' },
              { value: '500+', label: 'Объектов в портфеле' },
              { value: '98%', label: 'Заполняемость объектов' }
            ].map((stat, i) => (
              <Card key={i} className="text-center animate-scale-in" style={{animationDelay: `${i * 100}ms`}}>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-secondary text-white">
            <CardContent className="p-8 text-center">
              <Icon name="TrendingUp" className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-semibold mb-3">Бесплатная консультация по инвестициям</h3>
              <p className="opacity-90 mb-6">Узнайте, как начать инвестировать в недвижимость с минимальными рисками</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Ваш email" 
                  type="email"
                  className="flex-1 bg-white"
                />
                <Button variant="outline" className="bg-white text-secondary hover:bg-white/90">Получить консультацию</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Оформление аренды и юридическое сопровождение</h2>
            <p className="text-center text-muted-foreground mb-12">
              Полное юридическое сопровождение сделки от подписания до завершения аренды
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: 'FileText', title: 'Подготовка договоров', desc: 'Юридически грамотные документы' },
                { icon: 'Scale', title: 'Правовая защита', desc: 'Защита ваших интересов на всех этапах' },
                { icon: 'UserCheck', title: 'Регистрация сделки', desc: 'Официальное оформление всех документов' },
                { icon: 'Lock', title: 'Конфиденциальность', desc: 'Полная защита персональных данных' }
              ].map((item, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-primary/20 bg-primary/5">
              <CardContent className="p-8 text-center">
                <Icon name="Scale" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-semibold mb-3">Бесплатная юридическая консультация</h3>
                <p className="text-muted-foreground mb-6">Получите ответы на вопросы по аренде от профессиональных юристов</p>
                <Button size="lg">Записаться на консультацию</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Гарантия безопасности сделки</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'ShieldCheck', title: 'Страхование рисков', desc: 'Полное страхование от финансовых потерь' },
              { icon: 'Wallet', title: 'Безопасные расчёты', desc: 'Все платежи через защищённую систему' },
              { icon: 'Award', title: 'Гарантия возврата', desc: 'Компенсация в случае форс-мажора' }
            ].map((item, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-all">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Отзывы наших клиентов</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Елена М.', role: 'Арендатор', text: 'Нашли идеальную квартиру для нашей семьи за неделю. Процесс оформления был простым и понятным.' },
              { name: 'Дмитрий К.', role: 'Владелец недвижимости', text: 'Сдаю 3 квартиры через платформу. Арендаторы проверенные, оплата всегда вовремя.' },
              { name: 'Анна С.', role: 'Инвестор', text: 'Вложила средства в недвижимость полгода назад. Доходность превысила все ожидания!' }
            ].map((review, i) => (
              <Card key={i} className="animate-fade-in" style={{animationDelay: `${i * 150}ms`}}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Icon key={j} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{review.text}"</p>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Часто задаваемые вопросы</h2>
          
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Как проверяются арендаторы?</AccordionTrigger>
              <AccordionContent>
                Мы проводим комплексную проверку: верификация документов, проверка кредитной истории, запрос рекомендаций с предыдущих мест аренды и подтверждение платёжеспособности.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Какова комиссия сервиса?</AccordionTrigger>
              <AccordionContent>
                Для арендаторов размещение объявлений бесплатно. Владельцы платят комиссию 10% от месячной арендной платы только при успешном заключении сделки.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Как быстро можно найти жильё?</AccordionTrigger>
              <AccordionContent>
                В среднем наши клиенты находят подходящее жильё за 7-10 дней. Всё зависит от ваших требований и города поиска.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Какая минимальная сумма инвестиций?</AccordionTrigger>
              <AccordionContent>
                Минимальная сумма для участия в инвестиционной программе составляет 500 000 рублей. Мы предлагаем различные варианты объектов под разные бюджеты.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Предоставляете ли вы юридическую поддержку?</AccordionTrigger>
              <AccordionContent>
                Да, мы предоставляем полное юридическое сопровождение: подготовка договоров, регистрация сделки, консультации на всех этапах аренды.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Контакты и поддержка</h2>
            <p className="text-lg opacity-90 mb-12">Мы всегда на связи и готовы помочь вам</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: 'Phone', title: '+7 (495) 123-45-67', desc: 'Звонки с 9:00 до 21:00' },
                { icon: 'Mail', title: 'info@dompro.ru', desc: 'Ответим в течение часа' },
                { icon: 'MessageCircle', title: 'Онлайн-чат', desc: 'Круглосуточная поддержка' }
              ].map((contact, i) => (
                <Card key={i} className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                  <CardContent className="pt-6 text-center">
                    <Icon name={contact.icon as any} className="mx-auto mb-3" size={32} />
                    <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                    <p className="text-sm opacity-80">{contact.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90">
              Написать нам
            </Button>
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
              <p className="text-sm opacity-80">Платформа для аренды и инвестиций в недвижимость</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#search" className="hover:opacity-100">Поиск жилья</a></li>
                <li><a href="#owners" className="hover:opacity-100">Для владельцев</a></li>
                <li><a href="#invest" className="hover:opacity-100">Инвестиции</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">О нас</a></li>
                <li><a href="#" className="hover:opacity-100">Блог</a></li>
                <li><a href="#" className="hover:opacity-100">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">Помощь</a></li>
                <li><a href="#" className="hover:opacity-100">Условия использования</a></li>
                <li><a href="#" className="hover:opacity-100">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-60">
            <p>© 2024 ДомПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
