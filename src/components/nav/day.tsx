import { useState, useEffect } from "react";

const menu: Record<string, string[]> = {
  "Понедельник": ["Лагман", "Самса", "Компот"],
  "Вторник": ["Борщ", "Рис с Курицей", "Чай"],
  "Среда": ["Гречка с Мясом", "Куриный бульон", "Сок"],
  "Четверг": ["Макароны с Курицей", "Котлета Говядина", "Компот"],
  "Пятница": ["Рис с тушенкой", "Бешбармак", "Чай"],
  "Выходной": ["Кафе закрыто, ждём вас в будни!"]
};

function getToday(): string {
  const weekday = new Date().getDay(); // 0 = воскресенье
  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  if (weekday >= 1 && weekday <= 5) {
    return days[weekday];
  }
  return "Выходной";
}

export default function Today() {
  const [day, setDay] = useState<string>(getToday());

  useEffect(() => {
    setDay(getToday());
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Меню на {day}</h1>
      <ul className="space-y-3">
        {menu[day].map((item, index) => (
          <li key={index} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
            {item}
          </li>
          
        ))}
      </ul>
    </div>
  );
}
