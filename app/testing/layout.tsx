import Sidebar from "@/components/sidebar";

import { Navbar } from "@/components/navbar"; 

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col md:flex-row md:h-[calc(100vh-73px)]">
        <Sidebar />
        <article className="overflow-y-auto w-full h-[calc(100vh-142px)] md:w-[calc(100vw-240px)] md:h-full">
          {children}
        </article>
      </main>
    </>
  );
}
