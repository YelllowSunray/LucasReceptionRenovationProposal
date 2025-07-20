import { ArrowDown } from "lucide-react";
import ScrollButton from './components/ScrollButton';
import ScrollDownButton from './components/ScrollDownButton';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3">
          <p className="text-center text-yellow-800 font-medium">
            ⚠️ This experience is optimized for Laptop/iPad viewing only (not compatible with phones)
          </p>
        </div>
      </div>
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
              Welcome to the New BlockRise Reception
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
              The Reception That Reflects Our Custody Philosophy
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mb-12">
              In a world where &quot;Not your keys, not your coins&quot; creates hesitation, 
              trust isn&apos;t optional — it&apos;s foundational. Our newly proposed reception 
              experience is designed to bridge this trust gap. Through live transparency, 
              interactivity, and global visibility, we turn fear into confidence.
            </p>
            <ScrollButton targetId="kiosk">
              Explore the Experience
            </ScrollButton>
          </div>
        </div>
      </section>

      {/* Self Check-In Kiosk Section */}
      <section id="kiosk" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Touch-Screen 1: Self Check-In Kiosk
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  Interactive Demo - Click to Try!
                </div>
              </div>
              <div className="relative">
                <iframe
                  src="https://basicreception-blockrise.vercel.app/"
                  className="w-full aspect-[4/3] rounded-lg shadow-lg bg-white mb-8"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <ScrollDownButton scrollAmount={150} />
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why It Matters</h3>
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li>• First touchpoint = first impression</li>
                    <li>• Visitors check in securely</li>
                    <li>• KYC collection (ID + selfie)</li>
                    <li>• GDPR compliant</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust Value</h3>
                  <p className="text-lg text-gray-700">
                    KYC-compliant design shows we're serious about regulation and security 
                    from the moment someone walks in.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/photos/liveipadincheck.png"
                alt="Live iPad Check-in Interface"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live BTC World Map Section */}
      <section id="btc-map">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Touch-Screen 2: Live/Real-Time BTC World Map
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  Interactive Demo - Explore Global Transactions!
                </div>
                <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
                  Note: If orange transaction lines are not visible and only the globe is showing, please refresh the page.
                </div>
              </div>
              <div className="relative">
                <iframe
                  src="https://screenworldbtc.vercel.app/"
                  className="w-full aspect-[4/3] rounded-lg shadow-lg bg-white mb-2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <ScrollDownButton scrollAmount={150} />
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-blue-800">
                  <span className="font-semibold">Zoom Controls:</span> Use your mouse scroll wheel or trackpad to zoom in and out of the globe
                </p>
              </div>
              <div className="p-4 bg-gray-100 border-l-4 border-gray-700 rounded-lg mb-8">
                <p className="text-base text-gray-700">
                  <span className="font-semibold block mb-2">Important Note About Data:</span>
                  Due to pricing considerations, transaction IP addresses are not mapped to actual locations.
                  <span className="font-bold block mt-2">To be clear: While the transaction frequency is real-time and accurate, the geographic locations shown are simulated for demonstration purposes.</span>
                </p>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why It Matters</h3>
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li>• Real-time visualization of global BTC transactions</li>
                    <li>• Shows how Blockrise operates with live chains</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust Value</h3>
                  <p className="text-lg text-gray-700">
                    Makes blockchain activity feel real and present — not abstract.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/photos/liveworldbtc.png"
                alt="Live BTC World Map Interface"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live ETH Transactions Section */}
      <section id="eth-transactions" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Touch-Screen 3: Live-Real ETH Transactions
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  Interactive Demo - Watch Live Transactions!
                </div>
              </div>
              <div className="relative">
                <iframe
                  src="https://lucas-screen-live-eth.vercel.app/"
                  className="w-full aspect-[4/3] rounded-lg shadow-lg bg-white mb-8"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <ScrollDownButton scrollAmount={150} />
                </div>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why It Matters</h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li>• Shows Ethereum's transaction flow</li>
                  <li>• Highlights that Blockrise supports multi-chain custody</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust Value</h3>
                <p className="text-lg text-gray-700">
                  Demonstrates transparency and infrastructure capability for both BTC and ETH.
                </p>
              </div>
              <Image
                src="/photos/liveeth.png"
                alt="Live ETH Transactions Interface"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Heatmap Section */}
      <section id="compliance-heatmap">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Touch-Screen 4: Compliance Heatmap
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  Interactive Demo - Explore Compliance Coverage!
                </div>
                <div className="mt-2 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                  <h3 className="font-semibold mb-2">Demo vs. Full Implementation:</h3>
                  <p className="text-indigo-900 mb-2">
                    This demo shows 3 example scenarios for demonstration purposes.
                  </p>
                  <h4 className="font-bold text-indigo-900 mb-2">In the actual project implementation:</h4>
                  <ul className="list-disc ml-6 space-y-1 text-indigo-900">
                    <li>60+ real compliance scenarios</li>
                    <li>Full 3D visualization per business unit</li>
                    <li>Comprehensive regulatory coverage</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <iframe
                  src="https://frontend-compliance-heat-map-lucas.vercel.app/"
                  className="w-full aspect-[4/3] rounded-lg shadow-lg bg-white mb-8"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <ScrollDownButton scrollAmount={150} />
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why It Matters</h3>
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li>• Shows jurisdictional coverage</li>
                    <li>• Educates visitors on how Blockrise handles regulations worldwide</li>
                    <li>• Interactive / explorable</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust Value</h3>
                  <p className="text-lg text-gray-700">
                    We don't hide compliance — we embrace it and show it.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/photos/liveheatmap.png"
                alt="Live Compliance Heatmap Interface"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custody Security Visual Section */}
      <section id="custody-security" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Touch-Screen 5: Custody Security Visual
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  Interactive Demo - See Security in Action!
                </div>
              </div>
              <div className="relative">
                <iframe
                  src="https://lucas-screen-security.vercel.app/"
                  className="w-full aspect-[4/3] rounded-lg shadow-lg bg-white mb-8"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <ScrollDownButton scrollAmount={150} />
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why It Matters</h3>
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li>• Visual representation of key storage security</li>
                    <li>• Shows encryption, redundancy, hardware security modules</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust Value</h3>
                  <p className="text-lg text-gray-700">
                    Turns abstract custody promises into tangible, visual confidence.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/photos/livesecurity.png"
                alt="Live Custody Security Interface"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Assets Under Custody Section */}
      <section id="assets-custody">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Touch-Screen 6: Assets Under Custody
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  Interactive Demo - Track Live Assets!
                </div>
              </div>
              <div className="relative">
                <iframe
                  src="https://lucas-screen-assets.vercel.app/"
                  className="w-full aspect-[4/3] rounded-lg shadow-lg bg-white mb-8"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <ScrollDownButton scrollAmount={150} />
                </div>
              </div>
              <p className="text-sm text-gray-500 italic mb-8">
                Note: Currently displaying mock numbers for demonstration. In the final implementation, this would show live, actual numbers if you proceed with the project.
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why It Matters</h3>
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li>• Displays total assets secured in EUR equivalent</li>
                    <li>• Key metrics: total BTC, ETH, # clients, uptime, transaction speeds</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust Value</h3>
                  <p className="text-lg text-gray-700">
                    Big, clear numbers. Helps visitors see that Blockrise is legitimate, 
                    large-scale, and transparent.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/photos/liveassets.png"
                alt="Live Assets Under Custody Interface"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why It All Matters Section */}
      <section id="why-matters" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Not Just Decoration — A Trust Chamber
          </h2>
          <div className="max-w-3xl">
            <ul className="space-y-6 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="font-semibold">•</span>
                Reception = Trust Chamber
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold">•</span>
                All screens serve a trust-building purpose
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold">•</span>
                Transparency by design
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold">•</span>
                Combines visual proof with user interaction
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold">•</span>
                Educates, reassures, and converts doubts into confidence
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Optional Additions Section */}
      <section id="optional-additions">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
            Optional Additions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '"Your Coins Are Here" Visualization',
                description: 'Interactive visualization showing exact storage locations.',
              },
              {
                title: 'Blockrise Trivia & Crypto News Wall',
                description: 'Keep visitors informed and engaged while waiting.',
              },
              {
                title: 'Sustainability Metrics / ESG Board',
                description: 'Showcase our commitment to sustainable practices.',
              },
              {
                title: 'Custody Lifecycle Explainer',
                description: 'Interactive journey through our custody process.',
              },
            ].map((card, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
