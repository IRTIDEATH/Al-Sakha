const StepConsultation = () => {
  const steps = [
    "Discuss your project requirements",
    "Define timeline and milestones",
    "Agree on scope and deliverables",
  ];

  return (
    <section className="px-6 py-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <span className="w-12 font-medium font-roboto text-[32px] text-zeta leading-none">
              03
            </span>
            <h2 className="font-medium text-[24px] text-foreground">
              Consultation
            </h2>
          </div>
          <p className="text-[16px] text-zeta md:ml-16">
            a free consultation session is available for you.
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <h3 className="mb-2 font-medium text-[14px] text-foreground">
            What we&apos;ll cover
          </h3>
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="mt-1 inline-block rotate-90 whitespace-nowrap font-geist text-[10px] text-zeta">
                {"->"}
              </span>
              <span className="text-[14px] text-zeta">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepConsultation;
