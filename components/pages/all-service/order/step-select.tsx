import Link from "next/link";

const StepSelect = () => {
  return (
    <section className="bg-foreground p-5">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <span className="font-medium font-roboto text-[32px] text-zeta leading-none">
            01
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="font-medium text-[24px] text-background">
              Select a Service
            </h2>
            <p className="max-w-lg text-[16px] text-suram">
              Browse my available services and choose the one that fits your
              needs. Each service is crafted with attention to detail and modern
              web standards.
            </p>
          </div>
        </div>

        <Link
          href="/all-services"
          className="ml-auto text-background decoration-2 hover:underline"
        >
          <span className="font-geist text-background">{"<-"} Back</span>
        </Link>
      </div>
    </section>
  );
};

export default StepSelect;
