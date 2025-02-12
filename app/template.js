"use client";
import { useLenisScroll } from "@/lib/uselenisScroll";
import React from "react";

export default function template({ children }) {
  useLenisScroll();

  return <div>{children}</div>;
}
