import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="container mx-auto px-4 pt-4">
        <header className="flex justify-between items-center bg-white rounded-2xl px-6 py-3">
          <div className="flex items-center gap-6">
            <div className="w-40">
              <Link href="/">
                <Image
                  src="/deq-logo.png"
                  alt="DEQ North Carolina Logo"
                  width={160}
                  height={60}
                  priority
                  className="h-auto"
                />
              </Link>
            </div>
            <div className="text-xl text-gray-800 font-medium border-l border-gray-300 pl-6">
              North Carolina Department<br />of Environmental Quality
            </div>
          </div>
          <nav>
            <ul className="flex space-x-8 items-center">
              <li><Link href="/" className="text-green-800 hover:text-green-600 font-medium">Home</Link></li>
              <li><Link href="https://www.deq.nc.gov/energy-climate/state-energy-office/weatherization-assistance-program" target="_blank" rel="noopener noreferrer" className="text-green-800 hover:text-green-600 font-medium">About</Link></li>
              <li><Link href="/resources" className="text-green-800 hover:text-green-600 font-medium">Resources</Link></li>
              <li><Link href="/contact" className="text-green-800 hover:text-green-600 font-medium">Contact</Link></li>
              <div className="flex space-x-4 items-center">
                <li><Link href="/check-eligibility" className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors font-medium">Apply</Link></li>
                <li><Link href="/login" className="bg-white text-green-800 px-4 py-2 rounded hover:bg-gray-100 font-medium transition-colors border border-blue-800">Login</Link></li>
              </div>
            </ul>
          </nav>
        </header>
      </div>

      {/* Title Section */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-blue-400 rounded-2xl shadow-lg relative overflow-hidden h-48">
          {/* Weather Animation Container */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Moving Clouds */}
            <div className="clouds">
              <div className="cloud-1">☁️</div>
              <div className="cloud-2">☁️</div>
              <div className="cloud-3">☁️</div>
              <div className="cloud-4">☁️</div>
              <div className="cloud-5">☁️</div>
              <div className="cloud-6">☁️</div>
              <div className="cloud-7">☁️</div>
              <div className="cloud-8">☁️</div>
              <div className="cloud-9">☁️</div>
              <div className="cloud-10">☁️</div>
              <div className="cloud-11">☁️</div>
              <div className="cloud-12">☁️</div>
            </div>
            {/* Rain */}
            <div className="rain">
              {[...Array(40)].map((_, i) => (
                <div key={`rain-${i}`} className="rain-drop" style={{ 
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}></div>
              ))}
            </div>
            {/* Snow */}
            <div className="snow">
              {[...Array(30)].map((_, i) => (
                <div key={`snow-${i}`} className="snow-flake" style={{ 
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}>❄️</div>
              ))}
            </div>
            {/* Sun */}
            <div className="sun">☀️</div>
          </div>
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-blue-400/30"></div>

          <div className="relative flex flex-col items-center justify-center h-full">
            <h1 className="text-6xl text-white font-medium text-center tracking-wide drop-shadow-lg" style={{ textShadow: '1px 1px 0 #1e3a8a, -1px -1px 0 #1e3a8a, 1px -1px 0 #1e3a8a, -1px 1px 0 #1e3a8a' }}>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">W</span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">e</span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">a</span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">t</span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">h</span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">e</span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">r</span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">i</span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">z</span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">e</span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300 ml-3">N</span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">C</span>
            </h1>
            <div className="text-white text-2xl mt-2 opacity-90">
              <span className="text-3xl">⚡</span> Powered by <span className="font-bold text-3xl" style={{ color: '#344575' }}>everblue</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <section className="bg-green-800 text-white rounded-2xl overflow-hidden flex">
          <div className="w-[65%] px-8 py-20 flex items-center justify-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6 text-center">Save on Energy Bills with NC Weatherization Assistance</h1>
              <p className="text-xl mb-10 leading-relaxed text-center font-normal">Qualify for no cost home improvements that increase energy efficiency, reduce utility bills, and improve the comfort of your home.</p>
              <div className="flex space-x-6 justify-center">
                <Link href="/check-eligibility" className="bg-white text-green-800 px-8 py-3 rounded hover:bg-gray-100 font-medium transition-colors border border-blue-800">
                  Check Eligibility
                </Link>
                <Link href="https://www.deq.nc.gov/energy-climate/state-energy-office/weatherization-assistance-program#AdditionalInformationandResources-3451" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-3 rounded hover:bg-green-700 font-medium transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[35%] relative">
            <Image
              src="/hero-image.png"
              alt="Weatherization worker installing insulation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>
      </div>

      {/* Program Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-white to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center text-green-800 font-medium mb-6">Program Benefits</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">Experience comprehensive home improvements that enhance comfort, reduce costs, and promote energy efficiency.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300 text-center">💡</div>
              <div className="relative">
                <h3 className="text-2xl text-green-800 font-medium mb-4 text-center">Energy Savings</h3>
                <div className="absolute -top-4 left-1/2 w-24 h-1 bg-green-800 rounded-full transform -translate-x-1/2 group-hover:scale-x-150 transition-transform duration-300"></div>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">Reduce your energy bills through professional home weatherization services, including insulation improvements and air sealing.</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center justify-center text-gray-600">
                  <span className="text-green-800 mr-2">✓</span>
                  Lower utility costs
                </li>
                <li className="flex items-center justify-center text-gray-600">
                  <span className="text-green-800 mr-2">✓</span>
                  Improved efficiency
                </li>
                <li className="flex items-center justify-center text-gray-600">
                  <span className="text-green-800 mr-2">✓</span>
                  Year-round savings
                </li>
              </ul>
            </div>

            <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300 text-center">✨</div>
              <div className="relative">
                <h3 className="text-2xl text-green-800 font-medium mb-4 text-center">Low Income Assistance</h3>
                <div className="absolute -top-4 left-1/2 w-24 h-1 bg-green-800 rounded-full transform -translate-x-1/2 group-hover:scale-x-150 transition-transform duration-300"></div>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">Qualified residents receive comprehensive weatherization services at absolutely no cost, making comfort affordable for everyone.</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center justify-center text-gray-600">
                  <span className="text-green-800 mr-2">✓</span>
                  No-cost services
                </li>
                <li className="flex items-center justify-center text-gray-600">
                  <span className="text-green-800 mr-2">✓</span>
                  Income-based qualification
                </li>
                <li className="flex items-center justify-center text-gray-600">
                  <span className="text-green-800 mr-2">✓</span>
                  Complete home assessment
                </li>
              </ul>
            </div>

            <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300 text-center">🏠</div>
              <div className="relative">
                <h3 className="text-2xl text-green-800 font-medium mb-4 text-center">Professional Service</h3>
                <div className="absolute -top-4 left-1/2 w-24 h-1 bg-green-800 rounded-full transform -translate-x-1/2 group-hover:scale-x-150 transition-transform duration-300"></div>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">Expert state-approved contractors perform thorough energy audits and implement necessary improvements to your home.</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center justify-center text-gray-600">
                  <span className="text-green-800 mr-2">✓</span>
                  Certified contractors
                </li>
                <li className="flex items-center justify-center text-gray-600">
                  <span className="text-green-800 mr-2">✓</span>
                  Quality inspections
                </li>
                <li className="flex items-center justify-center text-gray-600">
                  <span className="text-green-800 mr-2">✓</span>
                  Guaranteed work
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-green-800 font-medium mb-8">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To keep North Carolina citizens <span className="text-green-800 font-medium">warm in the winter</span>, 
              <span className="text-green-800 font-medium"> cool in the summer</span>, and 
              <span className="text-green-800 font-medium"> safe all year long</span> while educating the public about energy efficiency and household safety.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center text-green-800 font-medium mb-16">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl text-green-800 font-bold mb-4">$22.6M+</div>
              <p className="text-gray-600">Federal grants received in 2021 for weatherization projects</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl text-green-800 font-bold mb-4">1,100+</div>
              <p className="text-gray-600">Homes weatherized throughout North Carolina in 2021</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl text-green-800 font-bold mb-4">900+</div>
              <p className="text-gray-600">HVAC units repaired or replaced</p>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Groups Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center text-green-800 font-medium mb-12">Who We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">👵</div>
              <div className="text-gray-700 font-medium">Elderly</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">♿</div>
              <div className="text-gray-700 font-medium">Disabled</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <div className="text-gray-700 font-medium">Families with Children</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <div className="text-gray-700 font-medium">High Energy Users</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">💰</div>
              <div className="text-gray-700 font-medium">Energy Burdened</div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Creation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-4xl text-green-800 font-medium mb-8">Creating Local Jobs</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Our program creates valuable job opportunities in communities where weatherization services are offered. We work with skilled professionals including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center gap-3 text-gray-700">
                  <span className="text-2xl">🔧</span>
                  <span>Plumbers</span>
                </div>
                <div className="flex flex-col items-center gap-3 text-gray-700">
                  <span className="text-2xl">⚡</span>
                  <span>Electricians</span>
                </div>
                <div className="flex flex-col items-center gap-3 text-gray-700">
                  <span className="text-2xl">❄️</span>
                  <span>HVAC Techs</span>
                </div>
                <div className="flex flex-col items-center gap-3 text-gray-700">
                  <span className="text-2xl">🏗️</span>
                  <span>Contractors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="container mx-auto px-4 py-12">
        <footer className="bg-white rounded-2xl px-6 py-8">
          <div className="flex flex-col items-center gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-lg font-medium text-green-800 mb-4">Contact Us</h3>
              <address className="not-italic text-gray-600 leading-relaxed font-normal">
                217 West Jones Street<br />
                Raleigh, NC 27603
              </address>
              <div className="mt-4">
                <a href="mailto:support@weatherizenc.com" className="text-green-800 hover:text-green-600 transition-colors">
                  support@weatherizenc.com
                </a>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-green-800 mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <Link href="https://www.facebook.com/ncdeq" target="_blank" rel="noopener noreferrer" className="text-green-800 hover:text-green-600 transition-colors">
                  <FaFacebook size={24} />
                </Link>
                <Link href="https://x.com/NCDEQ" target="_blank" rel="noopener noreferrer" className="text-green-800 hover:text-green-600 transition-colors">
                  <FaTwitter size={24} />
                </Link>
                <Link href="https://www.instagram.com/NCDEQ" target="_blank" rel="noopener noreferrer" className="text-green-800 hover:text-green-600 transition-colors">
                  <FaInstagram size={24} />
                </Link>
                <Link href="https://www.linkedin.com/company/ncdeq" target="_blank" rel="noopener noreferrer" className="text-green-800 hover:text-green-600 transition-colors">
                  <FaLinkedin size={24} />
                </Link>
                <Link href="https://www.youtube.com/channel/UCe2yGa2pZfn6dPqMqBKL6Mg" target="_blank" rel="noopener noreferrer" className="text-green-800 hover:text-green-600 transition-colors">
                  <FaYoutube size={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 pt-8 border-t font-normal">
            <p>© {new Date().getFullYear()} Weatherize NC. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
