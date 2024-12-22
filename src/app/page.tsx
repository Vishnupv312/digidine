"use client";

import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Smartphone, Rocket } from "lucide-react";
import Layout from "@/components/Layout";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function DigiDineLanding() {
  return (
    <Layout>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-400">
                <TypeAnimation
                  sequence={[
                    "Welcome to DigiDine",
                    1000,
                    "Digitize Your Menu",
                    1000,
                    "Enhance Customer Experience",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <p className="max-w-[600px] text-blue-300 md:text-xl">
                Revolutionize your restaurant&apos;s menu with our QR code-based
                digital solution. Enhance customer experience and streamline
                your operations.
              </p>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </motion.div>
            <motion.div
              className="lg:pl-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-video relative">
                <Image
                  src="/images/hero-image.jpg"
                  alt="DigiDine in action"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-zinc-800"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-400">
            Why Choose DigiDine?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-zinc-700 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <UtensilsCrossed className="h-12 w-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2 text-blue-300">
                Easy Menu Updates
              </h3>
              <p className="text-blue-200">
                Update your menu in real-time without reprinting costs.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-zinc-700 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Smartphone className="h-12 w-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2 text-blue-300">
                Mobile-Friendly
              </h3>
              <p className="text-blue-200">
                Optimized for all devices, ensuring a smooth customer
                experience.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-zinc-700 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="h-12 w-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2 text-blue-300">
                Boost Efficiency
              </h3>
              <p className="text-blue-200">
                Streamline ordering process and reduce wait times.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-400">
            How DigiDine Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-500 text-zinc-900 flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-300">
                    Create Your Menu
                  </h3>
                  <p className="text-blue-200">
                    Easily input your menu items through our user-friendly
                    dashboard.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-500 text-zinc-900 flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-300">
                    Generate QR Codes
                  </h3>
                  <p className="text-blue-200">
                    We create unique QR codes for your tables or menu sections.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-500 text-zinc-900 flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-300">
                    Customers Scan & Order
                  </h3>
                  <p className="text-blue-200">
                    Diners access your digital menu instantly on their
                    smartphones.
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="aspect-square relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/qr-code.jpg"
                alt="QR Code Example"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-zinc-900">
                Ready to Digitize Your Menu?
              </h2>
              <p className="mx-auto max-w-[600px] text-zinc-800 md:text-xl">
                Join the digital revolution in dining. Enhance your
                customer&apos;s experience and streamline your operations with
                DigiDine.
              </p>
            </div>
            <div className="space-x-4">
              <Button variant="secondary">Get Started Now</Button>
              <Button
                variant="outline"
                className="bg-transparent text-zinc-900 hover:bg-zinc-900 hover:text-blue-400"
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
