import { useState } from "react";

const fields = [
  {
    name: "name",
    label: "Name*",
    type: "text",
    placeholder: "Enter Your Full Name",
    autoComplete: "name",
  },
  {
    name: "company",
    label: "Company*",
    type: "text",
    placeholder: "Enter Your Company Name",
    autoComplete: "organization",
  },
  {
    name: "email",
    label: "Email*",
    type: "email",
    placeholder: "Enter Your Email",
    autoComplete: "email",
  },
  {
    name: "phone",
    label: "Telephone*",
    type: "tel",
    placeholder: "Enter Your Phone",
    autoComplete: "tel",
  },
  {
    name: "site",
    label: "Sites or work involved.*",
    type: "text",
    placeholder: "Enter Your Site",
    autoComplete: "off",
  },
];

const initialValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  site: "",
};

function ContactForm() {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: send `values` to your API / email service here
    console.log("Form submitted:", values);
    setValues(initialValues);
  };

  return (
    <section id="contact" className="w-full bg-white py-10 sm:py-12">
      {/* Same width formula as Header */}
      <div className="mx-auto w-[calc(100%-24px)] max-w-[1400px] sm:w-[calc(100%-40px)] lg:w-[calc(100%-64px)] xl:w-[calc(100%-80px)]">
        <div className="px-3 sm:px-4 lg:px-5">
          <div className="grid grid-cols-1 items-center gap-8 rounded-[14px] bg-[#dce5ec] p-4 sm:p-6 lg:grid-cols-2 lg:gap-10 lg:px-[30px] lg:py-[30px] xl:gap-[48px]">
            {/* Left: copy */}
            <div className="px-2 py-4 sm:px-4 lg:py-0 lg:pl-[18px] lg:pr-4">
              <h2 className="text-[30px] font-bold leading-[1.18] tracking-tight text-[#162c42] sm:text-[36px] lg:text-[50px]">
                Send Us The Sites
                <br className="hidden sm:block" /> You Intend To
                <br className="hidden sm:block" /> Work On
              </h2>

              <p className="mt-6 max-w-[400px] text-[15px] leading-[1.5] text-[#8a97a3] sm:text-[16px] lg:mt-8 lg:text-[16px]">
                We will identify which are straightforward under a standard
                authorisation, which require additional work, and which are
                unlikely to be viable, before any commitment is made.
              </p>
            </div>

            {/* Right: form card */}
            <div className="rounded-[20px] bg-white px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
              <form onSubmit={handleSubmit} className="space-y-[18px]">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="mb-[6px] block text-[13px] font-medium leading-tight text-[#111827]"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                      value={values[field.name]}
                      onChange={handleChange}
                      className="h-[50px] w-full rounded-full border border-[#e5e9ee] bg-white px-5 text-[12px] text-[#111827] outline-none transition-colors duration-200 placeholder:text-[#b38d8d] focus:border-[#ff9a3d] focus:ring-2 focus:ring-[#ff9a3d]/25"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="mt-1 inline-flex h-[50px] items-center justify-center rounded-full bg-gradient-to-r from-[#ff9a3d] to-[#ffb02e] px-[18px] text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9a3d] focus-visible:ring-offset-2"
                >
                  Discuss a Requirement
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;