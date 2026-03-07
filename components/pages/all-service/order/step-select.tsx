import Link from "next/link";

const StepSelect = () => {
  return (
    <section>
      <span className="w-12 font-medium font-satoshi text-[32px] leading-none">
        01
      </span>
      <h2 className="font-medium text-[24px]">select a service</h2>
      <p className="mt-4 text-[16px] text-zeta">
        browse my available services and choose the one that fits your needs.
        each service is delivered with high attention to detail and commitment
        to quality.
      </p>
      <Link
        href="/all-services"
        aria-label="back to services"
        className="mt-4 inline-block text-[14px] text-coffee underline"
      >
        <span aria-hidden="true">{"<-"}</span> back to services
      </Link>
    </section>
  );
};

export default StepSelect;
