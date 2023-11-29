import React, { useState } from "react";
import Button from "./Button";

interface ContactFormValues {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log(formValues);
  //   // Aqui você pode adicionar a lógica para enviar os dados para um servidor
  // };

  return (
    <form
      // onSubmit={handleSubmit}
      action="https://formspree.io/f/mgejjpwl"
      method="POST"
      className="grid gap-2 bg-slate-100 p-4 rounded-lg w-full max-w-xl items-center"
    >
      <div className="flex flex-col gap-1">
        <label className="font-bold flex flex-col" htmlFor="name">
          Name:
          <p className="text-xs font-light text-red-600">* Required</p>
        </label>
        <input
          className="border-2 border-slate-300 rounded-md"
          type="text"
          id="name"
          name="name"
          required
          value={formValues.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold flex flex-col" htmlFor="email">
          E-mail:
          <p className="text-xs font-light text-red-600">* Required</p>
        </label>
        <input
          className="border-2 border-slate-300 rounded-md"
          type="email"
          id="email"
          name="email"
          required
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold flex flex-col" htmlFor="company">
          Company:
        </label>
        <input
          className="border-2 border-slate-300 rounded-md"
          type="text"
          id="company"
          name="company"
          value={formValues.company}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold flex flex-col" htmlFor="message">
          Message:
          <p className="text-xs font-light text-red-600">* Required</p>
        </label>
        <textarea
          className="border-2 border-slate-300 rounded-md"
          id="message"
          name="message"
          required
          value={formValues.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
