const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-x-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
                            <span className="text-white font-bold text-xs">S</span>
                        </div>
                        <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            Store
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                        Discover amazing products with unbeatable quality and exceptional service.
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-500">
                            &copy; 2025 Store. All rights reserved. Built with Next.js and Tailwind CSS.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;