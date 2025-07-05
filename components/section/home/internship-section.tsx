import CardInternship from "@/components/card-internship";

const InternshipSection = () => {
  return (
    <>
      <section>
        <h1 className="text-2xl mb-6 font-medium">internship activities</h1>
        <p className="w-full mb-8 text-zeta font-medium text-[16px] text-start">
          successfully completed two professional internships, where i gained
          hands-on experience and enhanced my skills in a real-world work
          environment.
        </p>
        <CardInternship />
      </section>
    </>
  );
};

export default InternshipSection;
