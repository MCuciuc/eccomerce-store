"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
const NavbarActions = () => {
 const[isMounted, setIsMounted] = useState(false);


 useEffect(() => {
    setIsMounted(true);

 }, []);
 const cart = useCart();
 const router = useRouter();
 if(!isMounted) {
    return null;
 }

    return (
        <div className="flex items-center gap-x-4">
            <Button 
                onClick={() => router.push("/cart")} 
                className="relative flex items-center gap-x-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                <ShoppingBag size={18} />
                <span className="text-sm font-semibold">
                    Cart ({cart.items.length})
                </span>
                {cart.items.length > 0 && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                        {cart.items.length}
                    </div>
                )}
            </Button>
        </div>
    )
}

export default NavbarActions