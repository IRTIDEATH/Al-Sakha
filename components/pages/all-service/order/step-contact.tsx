import ContactCard from "./contact-card";

const StepContact = () => {
  const contacts = [
    {
      icon: "simple-icons:threads",
      title: "Threads",
      value: "@enderjhass",
      href: "https://www.threads.com/@enderjhass",
    },
    {
      icon: "lucide:mail",
      title: "Email",
      value: "alsakhafatthariq@gmail.com",
      href: "mailto:alsakhafatthariq@gmail.com",
    },
    {
      icon: "simple-icons:whatsapp",
      title: "WhatsApp",
      value:
        "To get the WhatsApp number, please send a message via Email first.",
      href: "#",
    },
  ];

  return (
    <section className="py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <span className="font-medium font-roboto text-[32px] text-zeta leading-none">
            02
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="font-medium text-[24px] text-foreground">
              Contact Me
            </h2>
            <p className="max-w-xl text-[16px] text-zeta">
              Reach out through your preferred channel. I&apos;m responsive and
              ready to discuss your project.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepContact;
