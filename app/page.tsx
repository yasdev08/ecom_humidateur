"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function FrenchLandingPage() {
  const [loading, setLoading] = useState(false);

  return (
    <main dir="ltr" className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <header className="flex justify-between items-center px-4 sm:px-8 py-4 border-b sticky top-0 bg-white/70 backdrop-blur z-50">
        <h1 className="text-xl sm:text-2xl font-bold">Humidificateur ChaneeHann</h1>
        <Link
          href="/ar"
          className="text-sm font-medium border px-3 py-1.5 rounded-xl hover:bg-gray-100 transition"
        >
          🇸🇦 عربي
        </Link>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-5 sm:px-10 md:px-16 py-10 md:py-20 gap-10">
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug"
          >
            Un design anti-gravité pour une humidité parfaite 🌫️
          </motion.h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Le <strong>ChaneeHann</strong> est un <strong>humidificateur intelligent</strong> et un{" "}
            <strong>diffuseur d’huiles essentielles</strong> combiné, avec une technologie de
            pulvérisation à ultrasons, un design anti-gravité et une lumière d’ambiance relaxante à
            7 couleurs.
          </p>

          <motion.a
            href="#order"
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block px-6 sm:px-8 py-3 sm:py-4 bg-black text-white text-lg rounded-2xl shadow-md hover:bg-gray-800 transition-all"
          >
            Commander maintenant
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
            alt="Humidificateur ChaneeHann"
            width={500}
            height={500}
            className="rounded-2xl shadow-xl w-full max-w-[350px] sm:max-w-[450px] h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-5 sm:px-10 md:px-16 py-14 bg-gray-50">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Caractéristiques principales
        </h3>

        <div className="grid sm:grid-cols-2 gap-8 text-gray-700 text-base sm:text-lg leading-relaxed">
          <p>🌫️ <strong>Design anti-gravité</strong> : Empêche les gouttes et garde l’environnement sec.</p>
          <p>🌸 <strong>Diffuseur d’huiles essentielles</strong> : Pour une atmosphère relaxante.</p>
          <p>💡 <strong>Lumière LED à 7 couleurs</strong> : Crée une ambiance douce, parfaite la nuit.</p>
          <p>🔊 <strong>Bluetooth intégré</strong> : Écoutez votre musique tout en humidifiant l’air.</p>
          <p>⚙️ <strong>Arrêt automatique</strong> : S’éteint en cas de manque d’eau pour plus de sécurité.</p>
          <p>🤫 <strong>Silencieux (&lt;25 dB)</strong> : Profitez d’un sommeil paisible sans bruit.</p>
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
                alt={`Humidificateur ${i + 1}`}
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
      <section className="px-5 sm:px-10 md:px-16 py-16 bg-white">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10">Questions fréquentes</h3>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "Combien de temps dure l’humidification ?",
              a: "Le réservoir de 500ml assure jusqu’à 10 heures d’humidification continue selon le mode choisi.",
            },
            {
              q: "Puis-je utiliser des huiles essentielles ?",
              a: "Oui ! Il est compatible avec la plupart des huiles essentielles naturelles pour une meilleure expérience aromatique.",
            },
            {
              q: "Est-ce qu’il s’éteint automatiquement ?",
              a: "Oui, l’appareil s’arrête automatiquement lorsque le niveau d’eau est trop bas, pour votre sécurité.",
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
      {/* How It Works Section */}
<section className="px-6 md:px-16 py-16 bg-white text-center">
  <h3 className="text-3xl font-semibold mb-8">Comment ça marche ?</h3>
  <div className="grid md:grid-cols-3 gap-8">
    <div className="p-6 rounded-2xl shadow bg-gray-50">
      <Image src="/step1.jpg" alt="Remplissez le réservoir" width={300} height={300} className="mx-auto rounded-xl mb-4" />
      <h4 className="text-xl font-semibold mb-2">1. Remplissez le réservoir</h4>
      <p className="text-gray-600">Ajoutez de l’eau et quelques gouttes d’huile essentielle selon vos envies.</p>
    </div>
    <div className="p-6 rounded-2xl shadow bg-gray-50">
      <Image src="/step2.jpg" alt="Allumez l'appareil" width={300} height={300} className="mx-auto rounded-xl mb-4" />
      <h4 className="text-xl font-semibold mb-2">2. Allumez l’appareil</h4>
      <p className="text-gray-600">Choisissez votre mode préféré : brume, lumière LED ou musique Bluetooth.</p>
    </div>
    <div className="p-6 rounded-2xl shadow bg-gray-50">
      <Image src="/step3.jpg" alt="Profitez" width={300} height={300} className="mx-auto rounded-xl mb-4" />
      <h4 className="text-xl font-semibold mb-2">3. Profitez 🌿</h4>
      <p className="text-gray-600">Détendez-vous dans une atmosphère douce, apaisante et parfaitement humidifiée.</p>
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section className="px-6 md:px-16 py-16 bg-gray-50 text-center">
  <h3 className="text-3xl font-semibold mb-10">Ce que disent nos clients 💬</h3>
  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-2xl shadow">
      <p className="text-gray-700 italic mb-4">“Excellent produit ! L’air est beaucoup plus agréable et la lumière est magnifique.”</p>
      <h4 className="font-semibold text-blue-600">— Sarah M.</h4>
    </div>
    <div className="bg-white p-6 rounded-2xl shadow">
      <p className="text-gray-700 italic mb-4">“J’adore le design anti-gravité, c’est hypnotisant 😍. Très silencieux aussi.”</p>
      <h4 className="font-semibold text-blue-600">— Karim L.</h4>
    </div>
    <div className="bg-white p-6 rounded-2xl shadow">
      <p className="text-gray-700 italic mb-4">“Livraison rapide et service client au top. Je recommande sans hésiter !”</p>
      <h4 className="font-semibold text-blue-600">— Amel T.</h4>
    </div>
  </div>
</section>


      {/* Order Form */}
      <section id="order" className="px-5 sm:px-10 md:px-16 py-16 text-center bg-gray-50">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">Passez votre commande</h3>
        <p className="text-gray-600 mb-8 text-base sm:text-lg">
          Remplissez vos coordonnées ci-dessous et nous vous contacterons pour confirmer votre commande.
        </p>
<form
  onSubmit={async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
const elements = form.elements as any;
const data = {
  name: elements["Nom complet"].value,
  wilaya: elements["Wilaya"].value,
  baladiya: elements["Baladiya"].value,
  phone: elements["Numéro de téléphone"].value,
};


    await fetch("https://script.google.com/macros/s/AKfycbyu879WEtdQJYEw2TSZk6NPymG90Mba5zt4_ZqmwvR-ZoLaJ3Ci0b1Ayvfpi1UFfMWtuA/exec", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
  mode: "no-cors",
});


    window.location.href = "/thank-you";
  }}
  className="max-w-lg mx-auto grid gap-4 text-left"
>
  <input
      type="text"
      name="Nom complet"
      placeholder="Nom complet"
      required
      className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
    />
    <input
      type="text"
      name="Wilaya"
      placeholder="Wilaya"
      required
      className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
    />
    <input
      type="text"
      name="Baladiya"
      placeholder="Baladiya"
      required
      className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
    />
    <input
      type="tel"
      name="Numéro de téléphone"
      placeholder="Numéro de téléphone"
      required
      className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
    />

    <button
      type="submit"
      disabled={loading}
      className="w-full mt-2 bg-black text-white py-3 rounded-2xl hover:bg-gray-800 transition-all shadow-md"
    >
      {loading ? "Envoi..." : "Envoyer la commande"}
    </button>
</form>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/213794120959?text=Bonjour!%20Je%20veux%20commander%20l'humidificateur%20ChaneeHann."
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all md:right-10 z-50"
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
        © {new Date().getFullYear()} ChaneeHann — Tous droits réservés.
      </footer>
    </main>
  );
}
