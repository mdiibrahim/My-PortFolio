import Link from "next/link";
import Image from "next/image";
import notFoundImage from "@/assets/notFound.webp";

const NotFound = () => {
  return (
    <div className="container mx-auto text-center py-24">
      <Image
        src={notFoundImage}
        alt="404 Not Found"
        className="mx-auto mb-8 w-1/2 h-auto"
        width={500}
        height={500} // Adjust width and height as per your image size
      />
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <p className="text-2xl mb-8">
        Oops! 404: Page Not Found. Our developer fell asleep at the keyboard...
        We’ll wake them up soon!
      </p>
      <Link
        href="/#contact"
        className="inline-block px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        Wake the Developer!
      </Link>
    </div>
  );
};

export default NotFound;
