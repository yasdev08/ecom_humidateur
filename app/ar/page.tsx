"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function ArabicLandingPage() {
  const [loading, setLoading] = useState(false);
  

  return (
    <main dir="rtl" className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <header className="flex justify-between items-center px-4 sm:px-8 py-4 border-b sticky top-0 bg-white/70 backdrop-blur z-50">
        <h1 className="text-xl sm:text-2xl font-bold">مرطب الهواء ChaneeHann</h1>
        <Link
          href="/"
          className="text-sm font-medium border px-3 py-1.5 rounded-xl hover:bg-gray-100 transition"
        >
          🇫🇷 Français
        </Link>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between px-5 sm:px-10 md:px-16 py-10 md:py-20 gap-10">
        <div className="flex-1 text-center md:text-right">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug"
          >
            تصميم مضاد للجاذبية لترطيب مثالي 🌫️
          </motion.h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            جهاز <strong>ChaneeHann</strong> هو <strong>مرطب ذكي للهواء</strong> و{" "}
            <strong>موزع للزيوت العطرية</strong> في آنٍ واحد، بتقنية الرذاذ فوق الصوتي،
            وتصميم مبتكر مضاد للجاذبية، وإضاءة محيطية مريحة بـ7 ألوان.
          </p>

          <motion.a
            href="#order"
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block px-6 sm:px-8 py-3 sm:py-4 bg-black text-white text-lg rounded-2xl shadow-md hover:bg-gray-800 transition-all"
          >
            اطلب الآن
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/pic.jpg"
            alt="مرطب الهواء ChaneeHann"
            width={500}
            height={500}
            className="rounded-2xl shadow-xl w-full max-w-[350px] sm:max-w-[450px] h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-5 sm:px-10 md:px-16 py-14 bg-gray-50 text-right">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          المميزات الرئيسية
        </h3>

        <div className="grid sm:grid-cols-2 gap-8 text-gray-700 text-base sm:text-lg leading-relaxed">
          <p>🌀 <strong>تصميم مضاد للجاذبية</strong> يمنع تناثر القطرات ويحافظ على الجفاف.</p>
          <p>🌸 <strong>موزع زيوت عطرية</strong> يمنحك أجواء مريحة وعطرة.</p>
          <p>💡 <strong>إضاءة LED بـ7 ألوان</strong> تخلق جواً دافئاً ومناسباً للأطفال.</p>
          <p>🔊 <strong>بلوتوث مدمج</strong> لتشغيل موسيقاك المفضلة أثناء الترطيب.</p>
          <p>⚙️ <strong>إيقاف تلقائي</strong> عند نفاد الماء لحماية الجهاز.</p>
          <p>😴 <strong>هادئ جداً (&lt;25 ديسيبل)</strong> لتجربة نوم مريحة بلا ضوضاء.</p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg", "pic6.jpg"].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={`/${img}`}
                alt={`صورة المنتج ${i + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-5 sm:px-10 md:px-16 py-16 bg-white text-right">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10">الأسئلة الشائعة</h3>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "كم تدوم فترة الترطيب؟",
              a: "خزان الماء بسعة 500 مل يكفي حتى 10 ساعات من الترطيب المستمر حسب الوضع المستخدم.",
            },
            {
              q: "هل يمكنني استخدام الزيوت العطرية؟",
              a: "نعم، الجهاز متوافق مع معظم الزيوت الطبيعية لجو مريح وعطر فريد.",
            },
            {
              q: "هل يتوقف تلقائيًا عند نفاد الماء؟",
              a: "بالتأكيد، الجهاز مزود بخاصية الإيقاف التلقائي لحمايتك وضمان الأمان.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border rounded-2xl p-5 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-semibold text-lg mb-2">{item.q}</h4>
              <p className="text-gray-600">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="px-5 sm:px-10 md:px-16 py-16 text-center bg-gray-50">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">اطلب جهازك الآن</h3>
        <p className="text-gray-600 mb-8 text-base sm:text-lg">
          املأ معلوماتك وسنتواصل معك لتأكيد الطلب.
        </p>

        <form
          action="https://formsubmit.co/goshopdz10@gmail.com"
          method="POST"
          onSubmit={() => setLoading(true)}
          className="max-w-md mx-auto grid gap-4 text-right"
        >
          <input
            type="text"
            name="الاسم الكامل"
            placeholder="الاسم الكامل"
            required
            className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            name="الولاية"
            placeholder="الولاية"
            required
            className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            name="البلدية"
            placeholder="البلدية"
            required
            className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="tel"
            name="رقم الهاتف"
            placeholder="رقم الهاتف"
            required
            className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
          <input type="hidden" name="_captcha" value="false" />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-black text-white py-3 rounded-2xl hover:bg-gray-800 transition-all shadow-md"
          >
            {loading ? "جارٍ الإرسال..." : "إرسال الطلب"}
          </button>
        </form>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/213794120959"
        target="_blank"
        className="fixed bottom-5 left-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all md:left-10 z-50"
      >
         <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M12 2C6.486 2 2 6.477 2 12c0 2.121.663 4.093 1.8 5.715L2 22l4.4-1.611A9.956 9.956 0 0012 22c5.514 0 10-4.477 10-10S17.514 2 12 2zM7.223 17.41l-.275.162-2.603.953.894-2.478.18-.293A8.027 8.027 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8a7.93 7.93 0 01-4.777-1.59zm8.615-3.29c-.117-.058-.695-.344-.803-.383-.108-.04-.187-.058-.266.057-.078.116-.305.383-.374.46-.068.078-.137.088-.254.03-.117-.058-.495-.182-.944-.58a7.454 7.454 0 01-1.379-1.711c-.147-.254.147-.235.421-.785.045-.09.022-.166-.012-.224-.034-.057-.266-.64-.364-.876-.096-.23-.194-.2-.266-.204-.068-.003-.147-.003-.226-.003-.078 0-.206.03-.314.146-.108.116-.412.403-.412.985 0 .581.422 1.143.48 1.22.058.078.825 1.26 2.003 1.767.28.121.498.193.668.248.28.089.534.076.735.046.224-.034.695-.284.792-.558.097-.273.097-.508.068-.557-.03-.048-.107-.078-.224-.137z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm border-t mt-10">
        © {new Date().getFullYear()} ChaneeHann — جميع الحقوق محفوظة.
      </footer>
    </main>
  );
}
