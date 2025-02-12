
import { Search, BookmarkCheck, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Smart Scholarship Search",
      description: "AI-powered, personalized recommendations",
    },
    {
      icon: <BookmarkCheck className="w-6 h-6" />,
      title: "Verified Scholarships",
      description: "Curated, up-to-date, and authentic listings",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Save & Track Applications",
      description: "Bookmark scholarships and track your progress",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Easy to Use",
      description: "Simple, student-friendly interface",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Sign Up & Complete Your Profile",
      description: "Create your account and tell us about your academic background",
    },
    {
      number: "02",
      title: "Search & Discover Scholarships",
      description: "Browse through AI-recommended scholarships matching your profile",
    },
    {
      number: "03",
      title: "Bookmark & Apply",
      description: "Save interesting scholarships and start your applications",
    },
    {
      number: "04",
      title: "Track Your Applications",
      description: "Monitor your application status and never miss deadlines",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div className="max-w-lg">
                <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                  AI-Powered Scholarship Search
                </span>
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-7">
                  Find the Right Scholarships for You, Instantly!
                </h1>
                <p className="text-lg text-gray-500 mb-10">
                  AI-powered search to match you with the best local, state, and government
                  scholarships based on your background.
                </p>
                <div className="flex flex-wrap">
                  <a
                    href="#"
                    className="inline-block px-6 py-3 mr-4 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-lg transition duration-200"
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="inline-block px-6 py-3 text-sm font-semibold text-primary hover:text-primary-hover border border-primary hover:border-primary-hover rounded-lg transition duration-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative mx-auto md:mr-0 max-w-max">
                <img
                  className="absolute -left-14 -top-12 w-28 md:w-auto animate-float"
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8c_Geometry%201.svg"
                  alt=""
                />
                <img
                  className="absolute -right-10 -bottom-8 w-28 md:w-auto animate-float animation-delay-1000"
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8c_Geometry%201.svg"
                  alt=""
                />
                <img
                  className="relative rounded-7xl"
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              Features
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-gray-500">
              Our platform provides all the tools you need to find and secure scholarships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition duration-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 bg-primary/10 text-primary rounded-xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              Process
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-500">
              Find and apply for scholarships in four simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative p-8 bg-white rounded-2xl border border-gray-100"
              >
                <span className="absolute -top-4 left-8 inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              FAQs
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-500 mb-12">
              Find answers to common questions about our platform
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {/* FAQ items will be added here */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h5>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    Scholarships
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-gray-900 mb-4">Support</h5>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">
                Subscribe to our newsletter
              </h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-6 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-lg transition duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-center text-gray-500">
              © 2024 Smart Scholarship Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
