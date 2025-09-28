import Link from "next/link";
import Container from "./ui/container";
import NavbarActions from "./navbar-actions";

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
                    <Link href="/" className="flex items-center gap-x-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">S</span>
                        </div>
                        <span className="font-bold text-2xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                            Store
                        </span>
                    </Link>
                    <NavbarActions />
                </div>
            </Container>
        </div>
    )
}

export default Navbar;