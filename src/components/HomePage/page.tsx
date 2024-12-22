"use client"

import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Smartphone, Rocket } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
export default function DigiDineLanding() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading delay for demonstration (replace with real loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false); // Page loading is done
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Clean up timeout on component unmount
  }, []);



  if (isLoading) {
    return (
      <div className="card">
  <div className="loader">
    <p>loading</p>
    <div className="words">
      <span className="word">buttons</span>
      <span className="word">forms</span>
      <span className="word">switches</span>
      <span className="word">cards</span>
      <span className="word">buttons</span>
    </div>
  </div>
</div>


   
  
 

  
  )

  

}
return (
  <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
  <main className="flex-1">
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to DigiDine
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Revolutionize your restaurant&apos;s menu with our QR
              code-based digital solution. Enhance customer experience and
              streamline your operations.
            </p>
          </div>
          <div className="space-x-4">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Why Choose DigiDine?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <UtensilsCrossed className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Easy Menu Updates</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Update your menu in real-time without reprinting costs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Smartphone className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Mobile-Friendly</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Optimized for all devices, ensuring a smooth customer
              experience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Rocket className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Boost Efficiency</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Streamline ordering process and reduce wait times.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          How DigiDine Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Create Your Menu</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Easily input your menu items through our user-friendly
              dashboard.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Generate QR Codes</h3>
            <p className="text-gray-500 dark:text-gray-400">
              We create unique QR codes for your tables or menu sections.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">
              Customers Scan & Order
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Diners access your digital menu instantly on their
              smartphones.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      id="cta"
      className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Digitize Your Menu?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join the digital revolution in dining. Enhance your
              customers&apos; experience and streamline your operations with
              DigiDine.
            </p>
          </div>
          <div className="space-x-4">
            <Button variant="secondary">Get Started Now</Button>
            <Button variant="outline">Request a Demo</Button>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

)
}

