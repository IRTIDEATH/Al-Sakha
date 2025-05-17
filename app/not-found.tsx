import Link from "next/link"
import Image from "next/image"

const NotFound = () => {
  return (
    <>
      <div className="mt-12 space-y-8 flex flex-col items-center justify-center text-center">
        <div className="relative">
          <Image
            src="/jetaa2.png"
            alt="zeta mangap"
            className="object-contain"
            width={260}
            height={260}
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium">
          404 - Page Not Found
        </h1>
        <p className="font-medium text-zeta text-lg">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="text-zeta font-medium hover:underline decoration-2"
        >
          Go back to home
        </Link>
      </div>
    </>
  );
}

export default NotFound