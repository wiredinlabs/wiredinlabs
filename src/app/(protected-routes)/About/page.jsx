// Temporary Page for Developing About Section
// Just add the reference of About Component in this so that /About can be used to see the About Section
// Later on add the About Component in the main page

import AboutSection from "@/components/home_components/About/AboutSection";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-12">
            <h1 className="text-6xl font-bold leading-tight">
              "Unplug the Old,
              <br />
              Wire in the New."
            </h1>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                {/* <Star className="text-yellow-400 w-6 h-6" /> */}
                <p className="text-sm">
                  Out with the old wires, in with the new vibes. 
                  At Wired In, we specialize in cutting the cords 
                  to outdated tech and sparking fresh, 
                  forward-thinking design and development.
                </p>
              </div>
              
              <div className="space-y-4">
                {/* <Star className="text-yellow-400 w-6 h-6" /> */}
                <p className="text-sm">
                  We turn your digital dreams into reality, 
                  powering up your business with seamless 
                  solutions that are built for tomorrow. 
                  Ready to upgrade to the future?
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hand Image */}
          <div className="relative">
            <div className="absolute top-0 right-1/4">
              <div className="text-yellow-400 text-6xl">*</div>
              <div className="w-16 h-32 border-2 border-yellow-400 rounded-full transform -rotate-45"></div>
            </div>
            <img 
              src="/api/placeholder/500/600" 
              alt="Reaching hand" 
              className="w-full object-cover grayscale contrast-125"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
