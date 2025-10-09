export default function ThankYou() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-center p-6">
      <h1 className="text-4xl font-semibold text-blue-600 mb-4">✅ Order Received!</h1>
      <p className="text-gray-600 max-w-md mb-8">
        Thank you for your order. Our team will contact you soon to confirm your delivery and shipping details.
      </p>

      <a
        href="/"
        className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition font-medium"
      >
        Back to Home
      </a>
    </main>
  );
}
