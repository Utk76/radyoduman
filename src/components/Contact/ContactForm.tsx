import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    requestSong: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      requestSong: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            İSTEK GÖNDER
          </h1>
          <p className="text-gray-100 text-lg">
            Şarkı isteğinizi gönderin, sesinizi duyuralım
          </p>
        </div>

        {/* Sadece istek formu ortada */}
        <div className="bg-yellow-500/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 mx-auto">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">İstek Formu</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-100 mb-2">
                Ad Soyad *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-gray-500/30 rounded-lg text-yellow-100 placeholder-yellow-400/50 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                placeholder="Adınızı ve soyadınızı girin"
              />
            </div>

            <div>
              <label htmlFor="requestSong" className="block text-sm font-medium text-gray-100 mb-2">
                İstek Şarkı *
              </label>
              <input
                type="text"
                id="requestSong"
                name="requestSong"
                value={formData.requestSong}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-yellow-100 placeholder-yellow-400/50 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                placeholder="İstediğiniz şarkı ve sanatçı adını girin"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-100 mb-2">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-yellow-100 placeholder-yellow-400/50 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                placeholder="Ek mesajınızı buraya yazabilirsiniz..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-6 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Send className="h-5 w-5" />
              <span>Mesaj Gönder</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;