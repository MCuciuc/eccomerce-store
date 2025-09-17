"use client"

import Button from "@/components/ui/button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import Filter from "./filter";

interface MobileFilterProps {
    sizes: Size[];
    colors: Color[]
}

const MobileFilters: React.FC<MobileFilterProps> = ({
    sizes,
    colors
}) => {
    const[open, setOpen] = useState(false)

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)

    return (
    <>
    <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
    </Button>
    <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
        <div className="fixed inset-0 bg-black/25" aria-hidden="true" />
        <div className="fixed inset-0 flex">
            <Dialog.Panel className="ml-auto h-full w-full max-w-xs bg-white px-4 py-6 shadow-xl">
                <div className="flex items-center justify-between">
                    <Dialog.Title className="text-lg font-semibold">Filters</Dialog.Title>
                    <button onClick={onClose} aria-label="Close filters" className="p-2 rounded hover:bg-gray-100">
                        <X size={20} />
                    </button>
                </div>
                <div className="mt-6">
                    <Filter
                        valueKey="sizeId"
                        name="Sizes"
                        data={sizes}
                    />
                    <Filter
                        valueKey="colorId"
                        name="Colors"
                        data={colors}
                    />
                </div>
            </Dialog.Panel>
        </div>
    </Dialog>
    </>
    )
}

export default MobileFilters;