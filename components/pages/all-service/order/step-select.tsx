import Link from "next/link";

const StepSelect = () => {
  return (
    <section className="bg-foreground p-5">
      <div className="flex flex-col gap-8 md:gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <span className="w-12 font-medium font-roboto text-[32px] text-zeta leading-none">
              01
            </span>
            <h2 className="font-medium text-[24px] text-background">
              Select a Service
            </h2>
          </div>
          <p className="w-full text-[16px] text-suram md:ml-14 md:max-w-xl">
            Browse my available services and choose the one that fits your
            needs. Each service is crafted with attention to detail and modern
            web standards.
          </p>
        </div>

        <Link
          href="/all-services"
          aria-label="back to services"
          className="ml-auto whitespace-nowrap text-[14px] text-background underline"
        >
          <span aria-hidden="true">{"<-"}</span> back to services
        </Link>
      </div>
    </section>
  );
};

export default StepSelect;
