import Image from "next/image";
import Ticker from "./Ticker";

// Main About Section Component
export default function AboutSection() {
    return (
    <div id="about" className="min-h-[110vh] bg-black text-white">
      {/* Main Content */}
      <main className="container mx-auto px-8 py-8 relative">
        <div className="grid grid-cols-2 gap-8 items-center relative">
          {/* Left Column */}
          <div className="space-y-24 relative">
            {/* Main headings */}
            <div className="pb-12 relative h-[50vh]">
              <Image
                src="/images/title.png"
                alt="title"
                layout="fill"
                className="object-contain"
              />
            </div>

            {/* Arrow Image pointing to the hand */}
            <div className="absolute top-[30%] left-[89%] w-[15vw] h-[15vh]">
              <Image
                src="/images/arrow1.png"
                alt="arrow"
                layout="fill"
                className="object-contain"
              />
            </div>

            {/* Smaller texts */}
            <div className="grid grid-cols-2 gap-32 items-center">
              {/* First Text Block with Image */}
              <div className="space-y-4 h-full w-[130%]">
                <div className="flex items-start">
                  <Image
                    src="/images/bullet.png"  // Replace with actual image path
                    alt="Tech Innovation"
                    width={40}  // Adjust width
                    height={40} // Adjust height
                    className="object-contain"
                  />
                </div>
                <p className="font-light text-md tracking-tighter">
                  Out with the old wires, in with the new vibes.
                  At Wired In, we specialize in cutting the cords
                  to outdated tech and sparking fresh,
                  forward-thinking design and development.
                </p>
              </div>

              {/* Second Text Block with Image */}
              <div className="space-y-4 h-full w-[130%]">
                <div className="flex items-start">
                  <Image
                    src="/images/bullet.png"  // Replace with actual image path
                    alt="Future Tech"
                    width={40}  // Adjust width
                    height={40} // Adjust height
                    className="object-contain"
                  />
                </div>
                <p className="font-light text-md tracking-tighter">
                  We turn your digital dreams into reality,
                  powering up your business with seamless
                  solutions that are built for tomorrow.
                  <br/>Ready to upgrade to the future?
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Hand Image */}
          <div className="absolute top-[15%] left-[60%] w-[40vw] h-[80vh] overflow-hidden">
            <Image
              src="/images/hand copy.png"
              alt="hand"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </main>
      <Ticker/>
    </div>
  );
}

  