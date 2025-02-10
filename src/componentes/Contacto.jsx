import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { contacto } from '../data/constantes';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   // Usar la variable de entorno en Vite
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // Usar la variable de entorno en Vite
        e.target,                                    // El formulario
        import.meta.env.VITE_EMAILJS_USER_ID       // Usar la variable de entorno en Vite
      )
      .then(
        (result) => {
          setStatus('Mensaje enviado exitosamente');
          setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
        },
        (error) => {
          setStatus('Hubo un error al enviar el mensaje');
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-4xl text-center"
      >
        Contacto
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {contacto.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {contacto.phoneNo}
        </motion.p>
        <a className="border-b">{contacto.email}</a>

        <form onSubmit={handleSubmit} className="mt-8 w-full lg:max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full p-2 mb-4 border border-neutral-800 rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu email"
            className="w-full p-2 mb-4 border border-neutral-800 rounded"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tu mensaje"
            rows="4"
            className="w-full p-2 mb-4 border border-neutral-800 rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition-all"
          >
            Enviar mensaje
          </button>
        </form>
        {status && <p className="mt-4">{status}</p>}
      </div>
    </div>
  );
};

export default Contacto;
