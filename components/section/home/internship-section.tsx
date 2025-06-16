"use client";

import CardInternship from '@/components/card-internship';

const InternshipSection = () => {
  return (
    <>
      <section>
        <h1 className="text-2xl mb-6 font-medium">internship activities</h1>
        <p className="w-full mb-8 text-zeta font-medium text-[16px] text-start">
          as part of my vocational high school curriculum in 12th grade, i
          successfully completed two professional internships, each spanning
          three months, at two different companies.
        </p>
        <CardInternship />
      </section>
    </>
  );
}

export default InternshipSection