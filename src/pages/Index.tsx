import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const NAV = [
  { id: 'home', label: 'Главная' },
  { id: 'services', label: 'Услуги' },
  { id: 'gallery', label: 'Наши работы' },
  { id: 'about', label: 'О нас' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  { icon: 'Monitor', title: 'Ремонт компьютеров', desc: 'Чистка от пыли, замена комплектующих, установка ПО, ускорение работы.', price: 'от 800 ₽' },
  { icon: 'Laptop', title: 'Ремонт ноутбуков', desc: 'Замена матрицы, клавиатуры, чистка, ремонт материнской платы.', price: 'от 1 200 ₽' },
  { icon: 'Tv', title: 'Ремонт телевизоров', desc: 'Замена матрицы и подсветки, ремонт блока питания, настройка.', price: 'от 1 500 ₽' },
  { icon: 'HardDrive', title: 'Восстановление данных', desc: 'Спасаем файлы с повреждённых дисков, флешек и карт памяти.', price: 'от 2 000 ₽' },
  { icon: 'ShieldCheck', title: 'Удаление вирусов', desc: 'Полная чистка системы от вирусов и рекламных программ.', price: 'от 600 ₽' },
  { icon: 'Cpu', title: 'Апгрейд техники', desc: 'Подберём и установим SSD, память и видеокарту под ваши задачи.', price: 'от 1 000 ₽' },
];

const GALLERY = [
  { title: 'Ноутбук после залития', before: 'https://cdn.poehali.dev/projects/dba610b5-f7e9-4b4f-a62c-f5263fc65973/files/a633a6c3-c2ba-47b7-ba3c-eb8bc57934e3.jpg', tag: 'Ноутбук' },
  { title: 'Замена матрицы телевизора', before: 'https://cdn.poehali.dev/projects/dba610b5-f7e9-4b4f-a62c-f5263fc65973/files/eff06135-fb6e-4546-b043-800b45fafc75.jpg', tag: 'Телевизор' },
  { title: 'Профилактика системного блока', before: 'https://cdn.poehali.dev/projects/dba610b5-f7e9-4b4f-a62c-f5263fc65973/files/60ae5f6c-bf21-4baa-80cf-d2f1920cce57.jpg', tag: 'Компьютер' },
];

const REVIEWS = [
  { name: 'Алексей М.', text: 'Принёс ноутбук после залития кофе — думал, всё пропало. Через день вернули как новый! Спасибо мастерам.', rating: 5 },
  { name: 'Ирина С.', text: 'Телевизор перестал показывать, другие сервисы отказались. Здесь заменили подсветку быстро и недорого.', rating: 5 },
  { name: 'Дмитрий К.', text: 'Собрал и почистил мой старый ПК, поставил SSD. Работает в разы быстрее. Рекомендую!', rating: 5 },
  { name: 'Ольга В.', text: 'Удалили вирусы и настроили компьютер за час. Вежливые ребята, всё объяснили простыми словами.', rating: 5 },
];

const STATS = [
  { value: '12 000+', label: 'выполненных ремонтов' },
  { value: '14 лет', label: 'на рынке' },
  { value: '24 ч', label: 'средний срок ремонта' },
  { value: '12 мес', label: 'гарантия на работы' },
];

const BeforeAfter = ({ image, title, tag }: { image: string; title: string; tag: string }) => {
  const [pos, setPos] = useState(50);
  return (
    <div className="group animate-fade-in">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border select-none">
        <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover grayscale" draggable={false} />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" style={{ width: `${10000 / pos}%`, maxWidth: 'none' }} draggable={false} />
          <span className="absolute bottom-3 left-3 bg-foreground text-background text-xs font-medium px-2 py-1 rounded">После</span>
        </div>
        <span className="absolute bottom-3 right-3 bg-background/80 text-foreground text-xs font-medium px-2 py-1 rounded backdrop-blur">До</span>
        <div className="absolute top-0 bottom-0 w-0.5 bg-background pointer-events-none" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center shadow">
            <Icon name="MoveHorizontal" size={16} className="text-foreground" />
          </div>
        </div>
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="font-display text-lg uppercase tracking-wide">{title}</h3>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">{tag}</span>
      </div>
    </div>
  );
};

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-foreground">
              <Icon name="Wrench" size={18} className="text-background" />
            </div>
            <span className="font-display text-xl font-bold uppercase tracking-wider">ТехноРемонт</span>
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('contacts')} className="hidden md:inline-flex">Вызвать мастера</Button>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background animate-fade-in">
            <nav className="container flex flex-col py-3">
              {NAV.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="py-2.5 text-left text-sm font-medium text-muted-foreground hover:text-foreground">
                  {n.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-secondary">
        <div className="container grid gap-10 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center animate-fade-in">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-widest">
              <Icon name="MapPin" size={13} /> Работаем по всему городу
            </span>
            <h1 className="font-display text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Ремонт техники,<br />которой доверяют
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Компьютеры, ноутбуки и телевизоры. Диагностика бесплатно, гарантия до 12 месяцев, мастер выезжает в день обращения.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => scrollTo('contacts')}>
                <Icon name="Phone" size={18} className="mr-2" /> Оставить заявку
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('gallery')}>
                Смотреть работы
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid w-full grid-cols-2 gap-4">
              {[
                { icon: 'Clock', t: 'Срочный ремонт', d: 'В день обращения' },
                { icon: 'BadgeCheck', t: 'Гарантия', d: 'До 12 месяцев' },
                { icon: 'Wallet', t: 'Честные цены', d: 'Без скрытых доплат' },
                { icon: 'Users', t: 'Опыт', d: '14 лет на рынке' },
              ].map((c, i) => (
                <div key={i} className="rounded-md border border-border bg-background p-5 animate-scale-in" style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}>
                  <Icon name={c.icon} size={26} className="mb-3" />
                  <div className="font-display text-base font-semibold uppercase tracking-wide">{c.t}</div>
                  <div className="text-sm text-muted-foreground">{c.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-foreground text-background">
        <div className="container grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-background/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-20 md:py-28">
        <div className="mb-12 text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Что мы делаем</span>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">Наши услуги</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="group rounded-md border border-border p-6 transition-all hover:border-foreground hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-secondary transition-colors group-hover:bg-foreground">
                <Icon name={s.icon} size={24} className="transition-colors group-hover:text-background" />
              </div>
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 font-display text-lg font-bold">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-secondary py-20 md:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Реальные результаты</span>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">До и после</h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">Двигайте ползунок, чтобы увидеть, как преображается техника после нашего ремонта.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {GALLERY.map((g) => (
              <BeforeAfter key={g.title} image={g.before} title={g.title} tag={g.tag} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">О компании</span>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">Почему выбирают нас</h2>
          <p className="mt-5 text-muted-foreground">
            «ТехноРемонт» — это команда сертифицированных инженеров с 14-летним опытом. Мы ремонтируем технику любой сложности и берёмся за случаи, от которых отказываются другие.
          </p>
          <p className="mt-3 text-muted-foreground">
            Используем оригинальные комплектующие, фиксируем каждый этап работы на фото и даём официальную гарантию.
          </p>
        </div>
        <div className="space-y-4">
          {[
            { icon: 'Search', t: 'Бесплатная диагностика', d: 'Точно определим причину поломки и назовём цену до начала работ.' },
            { icon: 'FileCheck', t: 'Прозрачная отчётность', d: 'Фотоотчёт до и после ремонта по каждому заказу.' },
            { icon: 'Truck', t: 'Выезд мастера', d: 'Приедем к вам домой или в офис в удобное время.' },
          ].map((f) => (
            <div key={f.t} className="flex gap-4 rounded-md border border-border p-5">
              <Icon name={f.icon} size={24} className="mt-0.5 shrink-0" />
              <div>
                <div className="font-display text-lg font-semibold uppercase tracking-wide">{f.t}</div>
                <div className="text-sm text-muted-foreground">{f.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-secondary py-20 md:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Нам доверяют</span>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">Отзывы клиентов</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-md border border-border bg-background p-6">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-muted-foreground">«{r.text}»</p>
                <div className="mt-4 font-display font-semibold uppercase tracking-wide">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="container py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Свяжитесь с нами</span>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">Оставьте заявку</h2>
            <p className="mt-4 text-muted-foreground">Перезвоним в течение 15 минут, бесплатно проконсультируем и подберём удобное время для ремонта.</p>
            <div className="mt-8 space-y-4">
              {[
                { icon: 'Phone', t: '+7 (900) 000-00-00', d: 'Ежедневно с 9:00 до 21:00' },
                { icon: 'Mail', t: 'info@technoremont.ru', d: 'Ответим в течение часа' },
                { icon: 'MapPin', t: 'г. Москва, ул. Примерная, 1', d: 'Приём техники в сервисе' },
              ].map((c) => (
                <div key={c.t} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded bg-secondary">
                    <Icon name={c.icon} size={20} />
                  </div>
                  <div>
                    <div className="font-display font-semibold">{c.t}</div>
                    <div className="text-sm text-muted-foreground">{c.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="rounded-md border border-border p-6 md:p-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Ваше имя</label>
                <input type="text" placeholder="Иван" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Телефон</label>
                <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Что случилось?</label>
                <textarea rows={4} placeholder="Опишите проблему с техникой" className="w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground" />
              </div>
              <Button type="submit" size="lg" className="w-full">Отправить заявку</Button>
              <p className="text-center text-xs text-muted-foreground">Нажимая кнопку, вы соглашаетесь с обработкой данных</p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-foreground text-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-background">
              <Icon name="Wrench" size={18} className="text-foreground" />
            </div>
            <span className="font-display text-xl font-bold uppercase tracking-wider">ТехноРемонт</span>
          </div>
          <p className="text-sm text-background/60">© 2026 ТехноРемонт. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
