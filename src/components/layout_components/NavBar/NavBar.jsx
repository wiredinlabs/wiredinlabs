// Main NavBar Component
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="bg-gray-500 text-black h-[17vh] w-full flex justify-between items-center px-20 py-1">
      {/* Logo */}
      <div>
        <Image
          src="/images/wired_in_labs_logo.png"
          alt="wired_in_labs_logo"
          width={89}
          height={89}
        />
      </div>
      {/* Navigation Routes */}
      <div className="flex justify-between items-center bg-red-100 gap-16 text-xl font-medium text-white">
        <p>About</p>
        <p>Services</p>
        <p>Works</p>
        <p>Blog</p>
      </div>

      {/* Contact Button */}
      <div className="flex justify-center items-center text-black bg-[#E4ED05] rounded-3xl px-4 py-2 text-xl font-medium">Contact</div>
    </div>
  );
}
