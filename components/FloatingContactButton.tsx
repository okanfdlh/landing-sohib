"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContactButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl transition transform hover:scale-110">
        {/* Bubble Icon (pesan kecil dengan bounce) */}
        <div className="absolute -top-2 -right-2 bg-yellow-400 p-1 rounded-full shadow animate-bounce">
          <MessageCircle className="w-4 h-4 text-white" />
        </div>

        {/* Phone Icon (pulse animasi) */}
        <Phone className="w-7 h-7 text-blue-600 animate-pulse" />
      </button>
    </div>
  );
}
