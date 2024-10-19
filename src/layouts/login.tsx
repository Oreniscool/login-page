import { Link } from "@nextui-org/link";

import { Navbar } from "@/components/navbar";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <main className="container w-screen flex-grow">
        {children}
      </main>
    </div>
  );
}
