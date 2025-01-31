'use client';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { z, ZodError } from 'zod';
import emailjs from 'emailjs-com';

//--==== ZOD VALIDATION ====--//
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

type FormData = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

type ErrorMessages = Partial<Record<keyof FormData, string>>;

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<ErrorMessages>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  //--==== HANDLE FORM FIELDS ====--//
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //--==== VALIDATE THE FORM USING ZOD ====--//
  const validateForm = (): boolean => {
    try {
      contactSchema.parse(formData);
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages: ErrorMessages = {};
        error.errors.forEach((err) => {
          errorMessages[err.path[0] as keyof FormData] = err.message;
        });
        setErrors(errorMessages);
      }
      return false;
    }
  };

  //--==== HANDLE FORM SUBMISSION ====--//
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    emailjs
      .sendForm(
        'service_3tb3e4s',
        'template_xx3jiv5',
        e.currentTarget,
        'Wra1JMkhTzpERW-Ab'
      )
      .then(
        () => {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setErrors({});
          setShowPopup(true);
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send message. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-5">

        {/*--==== TITLE ====--*/}
        <h2 className="text-3xl font-bold text-center mb-4" data-aos="fade-right">Get In Touch With Us</h2>

        {/*--==== PARA ====--*/}
        <p className="text-center mb-6 text-gray-400" data-aos="fade-right">
          For More Information About Our Product & Services. Please Feel Free To Drop Us <br />
          An Email. Our Staff Always There To Help You Out. Do Not Hesitate!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/*--==== ADDRESS, PHONE AND WORKING TIME ====--*/}
          <div className="bg-white sm:pl-[100px] pt-[30px]" data-aos="zoom-in">
            <h3 className="text-[25px] font-semibold mb-2 flex items-start"><span className="material-icons mr-2"><i className="bx bx-current-location sm:pr-[20px]"></i></span>Address</h3>
            <p className="sm:pl-[55px] text-[14px]">
              236 5th SE Avenue, New <br />
              York NY10000, United <br />
              States
            </p>

            <h3 className="text-[25px] font-semibold mt-4 flex items-start"><span className="material-icons mr-2"><i className="bx bxs-phone sm:pr-[20px]"></i></span>Phone</h3>
            <p className="sm:pl-[55px] text-[14px]">Mobile: +(84) 546-6789</p>
            <p className="sm:pl-[55px] text-[14px]">Hotline: +(84) 456-6789</p>

            <h3 className="text-[25px] font-semibold mt-4 flex items-start"><span className="material-icons mr-2"><i className="bx bxs-time-five sm:pr-[20px]"></i></span>Working Time</h3>
            <p className="sm:pl-[55px] text-[14px]">Monday-Friday: 9:00 - 22:00</p>
            <p className="sm:pl-[55px] text-[14px]">Saturday-Sunday: 9:00 - 21:00</p>
          </div>

          {/*--==== FORM ====--*/}
          <form onSubmit={handleSubmit} className="flex flex-col gap-[10px] bg-white p-[10px] sm:p-6" data-aos="zoom-in">

            {/*--==== NAME ====--*/}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-[10px]">Your name</label>
              <input
                className={`w-full h-[60px] border ${errors.name ? 'border-red-500' : 'border-gray-400'} rounded-lg focus:outline-none px-3`}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/*--==== EMAIL ====--*/}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-[10px]">Email address</label>
              <input
                className={`w-full h-[60px] border ${errors.email ? 'border-red-500' : 'border-gray-400'} rounded-lg focus:outline-none px-3`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/*--==== SUBJECT ====--*/}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-[10px]">Subject</label>
              <input
                className="w-full h-[60px] border border-gray-400 rounded-lg focus:outline-none px-3"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            {/*--==== MESSAGE ====--*/}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-[10px]">Message</label>
              <textarea
                className={`w-full h-[100px] border ${errors.message ? 'border-red-500' : 'border-gray-400'} rounded-lg focus:outline-none px-3`}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/*--==== SUBMIT BUTTON ====--*/}
            <button type="submit" className="w-[140px] bg-[#029FAE] text-white font-bold py-2 rounded" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>

      {/*--==== POPUP AFTER SENDING MESSAGE ====--*/}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-[20px]">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold">Message sent successfully!</p>
            <button className="mt-3 bg-[#007580] text-white px-4 py-2 rounded" onClick={() => setShowPopup(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
