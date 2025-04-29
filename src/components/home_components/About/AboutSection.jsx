import Image from "next/image";
import Ticker from "./Ticker";

// Main About Section Component
export default function AboutSection() {
  return (
    <div
      id="about"
      className="min-h-[175vh] md:min-h-[60vh] bg-black text-white relative overflow-hidden"
    >
      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-12 py-12 md:py-8 lg:py-12 xl:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          {/* Left Column */}
          <div className="relative w-[90vw] md:w-[60vw] lg:w-[45vw] h-[80vh] md:h-[45vh] lg:h-[75vh]">
            {/* Main headings */}
            <div className="relative h-[30vh] md:h-[25vh] lg:h-[50vh] w-full md:w-[50vw] lg:w-[40vw] max-w-full">
              <Image
                src="https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/title.png"
                alt="title"
                fill
                className="object-contain"
                priority
                draggable="false"
              />
            </div>

            {/* Arrow Image pointing to the hand */}
            <div className="hidden md:block absolute top-[35%] lg:top-[45%] xl:top-[50%] left-[75%] md:left-[75%] lg:left-[65%] xl:left-[80%] w-[8vw] md:w-[10vw] h-[8vh] md:h-[8vh] lg:h-[6vh] xl:h-[12vh]">
              <Image
                src="https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/arrow1.png"
                alt="arrow"
                fill
                className="object-contain"
                priority
                draggable="false"
              />
            </div>

            {/* Smaller texts */}
            <div className="grid grid-cols-1 md:grid-cols-2 pt-[90vh] md:pt-0 gap-8 md:gap-4 lg:gap-4 items-center w-full">
              {/* First Text Block with Image */}
              <div className="space-y-4 w-full md:w-[100%] lg:w-[90%]">
                <div className="flex items-start">
                  <Image
                    src="https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/bullet.png"
                    alt="Tech Innovation"
                    width={40}
                    height={40}
                    className="object-contain"
                    priority
                    draggable="false"
                  />
                </div>
                <p className="font-light text-sm md:text-md lg:text-md xl:text-lg tracking-tighter">
                  Out with the old wires, in with the new vibes. At Wired In, we
                  specialize in cutting the cords to outdated tech and sparking
                  fresh, forward-thinking design and development.
                </p>
              </div>

              {/* Second Text Block with Image */}
              <div className="space-y-4 w-full md:w-[100%] lg:w-[90%]">
                <div className="flex items-start">
                  <Image
                    src="https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/bullet.png"
                    alt="Future Tech"
                    width={40}
                    height={40}
                    className="object-contain"
                    priority
                    draggable="false"
                  />
                </div>
                <p className="font-light text-sm md:text-md lg:text-md xl:text-lg tracking-tighter">
                  We turn your digital dreams into reality, powering up your
                  business with seamless solutions that are built for tomorrow.
                  <br />
                  Ready to upgrade to the future?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column - Hand and Asterisk Images (independent and layered) */}
        <div className="absolute top-[40%] md:top[10%] lg:top-[10%] left-[20%] md:left-[60%] lg:left-[65%] w-[60vw] md:w-[40vw] lg:w-[50vw] h-[50vh] md:h-[50vh] lg:h-[35vh]">
          {/* Hand Image */}
          <div className="absolute top-[-10%] md:top-[-20%] lg:top-[20%] left-[-15%] md:left-[-5%] lg:left-[-25%] w-[70vw] md:w-[40vw] lg:w-[50vw] h-[60vh] md:h-[35vh] lg:h-[80vh]">
            <Image
              src="/images/hand.png"
              alt="hand"
              fill
              className="object-contain"
              priority
              draggable="false"
            />
          </div>

          {/* Asterisk Image */}
          <div className="absolute top-[-20%] md:top-[-20%] lg:top-[20%] left-[-5%] md:left-[10%] lg:left-[-20%] w-[30vw] md:w-[15vw] lg:w-[30vw] h-[30vh] md:h-[10vh] lg:h-[13vw] animate-subtleBounce">
            <Image
              src="/images/asterisk.png"
              alt="asterisk"
              fill
              className="object-contain"
              priority
              draggable="false"
            />
          </div>
        </div>
      </main>
      <Ticker />
    </div>
  );
}