"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function ForgotPageComponent() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-6 text-blue-400">
            Forgot Password
          </h1>
          <p className="mb-4 text-blue-200">
            Enter your email address and we&apos;ll send you a link to reset your
            password.
          </p>
          <form className="space-y-4">
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
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </motion.div>
      </div>
    </>
  );
}
