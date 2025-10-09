export default function OrderForm() {
  return (
    <form
      action="https://formsubmit.co/goshopdz10@gmail.com"
      method="POST"
      className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto space-y-4"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="/thank-you" />

      <input name="name" placeholder="الاسم الكامل" required className="input" />
      <input name="wilaya" placeholder="الولاية" required className="input" />
      <input name="baladiya" placeholder="البلدية" required className="input" />
      <input name="phone" placeholder="الرقم الكامل" required className="input" />

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium">
        تأكيد الطلب
      </button>
    </form>
  );
}
