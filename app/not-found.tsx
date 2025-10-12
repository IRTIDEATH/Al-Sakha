import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center space-y-8 text-center">
      <div className="relative">
        <Image
          src="/jetaa2.png"
          alt="zeta mangap"
          className="object-contain"
          width={260}
          height={260}
        />
      </div>
      <h1 className="font-medium text-3xl sm:text-4xl">404 - Page Not Found</h1>
      <p className="font-medium text-lg text-zeta">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="font-medium text-zeta decoration-2 hover:underline"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
