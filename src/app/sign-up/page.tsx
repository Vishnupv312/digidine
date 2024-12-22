"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SignUp() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-6 text-blue-400">
              Sign Up for DigiDine
            </h1>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1 text-blue-300"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  className="bg-zinc-800 text-blue-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 text-blue-300"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="bg-zinc-800 text-blue-200"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1 text-blue-300"
                >
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Choose a password"
                  required
                  className="bg-zinc-800 text-blue-200"
                />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-blue-300">Already have an account?</p>
              <Link href="/sign-in" className="text-blue-400 hover:underline">
                Sign in here
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="aspect-square relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/signup.jpg"
              alt="Sign Up"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
