import Image from "next/image";

export const metadata = {
  title: "Why Wired-In Labs? | Wired-In Blog",
  description:
    "Discover the story behind Wired-In Labs—how a spark of inspiration led to a creative development agency blending aesthetics with code.",
  keywords: [
    "Wired-In Labs",
    "creative coding",
    "web development",
    "digital agency",
    "web design",
    "branding",
  ],
  authors: [{ name: "Wired-In Labs" }],
  openGraph: {
    title: "Why Wired-In Labs?",
    description:
      "Explore how Wired-In Labs was born out of passion for innovation, design, and creative coding.",
    url: "https://yourdomain.com/blog/why-wired-in-labs",
    siteName: "Wired-In Labs",
    images: [
      {
        url: "https://yourdomain.com/images/blog1-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Wired-In Labs Blog Cover Image",
      },
    ],
    type: "article",
    publishedTime: "2025-01-23T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Wired-In Labs?",
    description:
      "Discover how Wired-In Labs blends creativity and code to redefine web experiences.",
    images: ["https://yourdomain.com/images/blog1-cover.jpg"],
  },
};

export const dynamic = "force-static";

export default function Blog1() {
  return (
    <div className="bg-black text-white pt-36">
      <div className="relative w-full h-[15vh] md:h-[25vh] lg:h-[35vh]">
        <Image
          src="/images/blog1.png"
          alt="Abstract art symbolizing creativity and technology at Wired-In Labs"
          fill
          loading="lazy"
          className="object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="max-w-5xl mx-auto px-4 pt-12">
        <main>
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">Our Story</div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">Why Wired-In Labs?</h1>

          <div className="flex items-center mb-8 text-sm text-gray-400">
            <div>January 23, 2025</div>
          </div>

          <div className="text-lg leading-relaxed pb-12">
            <h2 className="text-3xl font-bold mt-12 mb-6">From Inspiration to Innovation</h2>
            <p className="mb-6">
              It started like many great tech stories do—late-night coding sessions, endless cups of coffee,
              and the unmistakable glow of screens illuminating an idea taking shape...
            </p>

            <p className="mb-6">In those early days, the obsession wasn't just about writing efficient code. It was about pushing the boundaries of digital experiences, creating websites and applications that felt alive. The thrill of building something from scratch, seeing it evolve, and watching users interact with it was addictive. As time passed, the industry shifted, and a gap became evident: while businesses were embracing the web, their digital presence often felt uninspired, formulaic, and disconnected from their brand identity.</p>
              
              <h2 className="text-3xl font-bold mt-12 mb-6">Bridging the Gap with Creativity</h2>
              <p className="mb-6">Recognizing this gap, Wired-In Labs was born—a creative development agency dedicated to blending aesthetics with functionality. The team saw an opportunity to redefine web experiences through the art of creative coding. It wasn't just about making websites; it was about crafting immersive digital experiences that engaged users, elevated brands, and made businesses stand out in the digital landscape.</p>
              
              <div className="bg-[#e5ed0536] border-l-4 border-white p-6 my-8">
                <p className="text-white">"We believe that technology should be beautiful, engaging, and meaningful. Every line of code is an opportunity to create something extraordinary."</p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6">What We Do</h2>
              <p className="mb-6">At Wired-In Labs, we specialize in:</p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-3"><strong>Web Design & Development:</strong> Building sleek, responsive, and visually striking websites that capture brand identity.</li>
                <li className="mb-3"><strong>Creative Coding:</strong> Using interactive elements, animations, and generative art to craft unforgettable user experiences.</li>
                <li className="mb-3"><strong>Marketing-Driven Digital Solutions:</strong> Helping brands enhance their online presence through design-focused development.</li>
              </ul>
              
              <p className="mb-6">We believe that businesses deserve more than just another template. They deserve a digital identity that tells their story, captivates their audience, and drives engagement. Whether through bold visuals, seamless interactions, or innovative coding techniques, Wired-In Labs is committed to pushing creative boundaries and redefining what's possible in web design.</p>
              

            <h2 className="text-3xl font-bold mt-12 mb-6">Get Wired In</h2>
            <p className="mb-6">
              If you're looking for a team that brings artistry and technical brilliance to your digital
              presence, Wired-In Labs is here to help. Let's build something extraordinary together.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}