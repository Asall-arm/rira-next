# 💵 Dollar to Toman Converter

یک پروژه ساده با Next.js 15 برای تبدیل مقدار دلار به تومان و برعکس، با گرفتن نرخ لحظه‌ای از API عمومی صرافی Ramzinex.

---

## 🚀 ویژگی‌ها

- گرفتن نرخ لحظه‌ای دلار به تومان از API عمومی
- تبدیل دلار به تومان و بالعکس
- نمایش نرخ با فرمت جداکننده هزارگان (comma-separated) و به صورت ممیزی (point-seprated) (, و .)
- طراحی ساده و شیک با CSS Module

---

## 📡 منبع API
اطلاعات نرخ لحظه‌ای از این API دریافت می‌شود:  
[Ramzinex Public API](https://publicapi.ramzinex.com/exchange/api/v1.0/exchange/orderbooks/11/market_buy_price)

> 💡 توجه:
 از آن‌جایی که قیمت تتر (USDT) همواره برابر با قیمت دلار (USD) در بازار ایران در نظر گرفته می‌شود،  
> برای دقت بیشتر و دسترسی پایدار به داده‌ها، نرخ تتر از API دریافت شده و به عنوان نرخ دلار استفاده شده است.

---

## 🛠️ تکنولوژی‌ها

- [Next.js 15](https://nextjs.org/) (App Router)
- React (useState, useEffect)
- CSS Modules برای استایل‌دهی
- Fetch API برای گرفتن داده‌ها

---

## 🛠️ پیش‌نیازها
برای اجرای این پروژه به موارد زیر نیاز دارید:
- نصب [Node.js](https://nodejs.org/) (ترجیحاً نسخه LTS)
- نصب [Git](https://git-scm.com/) برای کلون کردن پروژه (اختیاری)

---

## 🚀 روش اجرا

### 1. کلون کردن پروژه (یا دانلود)
اگر Git دارید، می‌توانید پروژه را کلون کنید:
```bash / terminal
git clone <repository-link>

cd <project-folder-name>

npm install

npm run dev

http://localhost:3000

.
├── app/
│   ├── api/
│   │   └── rate/route.js   → دریافت نرخ لحظه‌ای دلار از API
│   ├── page.js             → کامپوننت اصلی برنامه
│   └── styles.module.css   → استایل‌ها
├── package.json
├── README.md