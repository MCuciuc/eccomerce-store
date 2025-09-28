"use client"

import Image from "next/image"

import { Product } from "@/types";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";


interface ProductCard {
    data: Product;
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    const router = useRouter();
    const previewModal = usePreviewModal()
    const cart = useCart();
    
    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    }


    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        event.preventDefault()
        previewModal.onOpen(data)
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        event.preventDefault()
        cart.addItem(data)
    }
    return (
        <div onClick={handleClick} className="group cursor-pointer bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
           <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            <Image
                src={data?.images?.[0]?.url}
                fill
                alt={data.name}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="flex gap-x-3 justify-center">
                    <IconButton
                        onClick={onPreview}
                        className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                        icon={<Expand size={18} className="text-gray-700" />}
                    />
                    <IconButton
                        onClick={onAddToCart}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                        icon={<ShoppingCart size={18} className="text-white" />}
                    />
                </div>
            </div>
           </div>
           <div className="p-5 space-y-3">
            <div>
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {data.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                    {data.category.name}  
                </p>
            </div>
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
                <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                    Featured
                </div>
            </div>
           </div>
        </div>
    )
}

export default ProductCard;