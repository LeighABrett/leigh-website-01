"use client";

import { motion } from "framer-motion";

export function ContactFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-6 pb-16 pt-20 md:px-10 lg:px-16"
    >
      <a
        href="mailto:leigh.brett@gmail.com"
        className="text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-muted md:text-2xl"
      >
        Contact me
      </a>
    </motion.footer>
  );
}
