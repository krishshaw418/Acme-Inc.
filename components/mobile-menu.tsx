"use client"

import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <div className="lg:hidden">
        <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu?.classList.toggle('hidden');
            }}
        >
            <Menu className="size-6" />
        </Button>
    </div>
  )
}