import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full flex flex-col items-center justify-center text-center gap-6">
      <img
        src="/logo.png" // Add your image path
        width={1000} // Adjust width as needed
        height={1000} // Adjust height as needed
        alt="Homepage Banner"
        className="rounded-lg shadow-lg"
      />

    </div>
  );
};

export default Hero;

