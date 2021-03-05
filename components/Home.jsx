import { Navbar } from "./Navbar";

export default function Home({ children }) {
  return (
    <>
      <Navbar />
      <div className="px-6 py-6 min-h-screen bg-light-green-primary pt-10">
        {children}
      </div>
    </>
  );
}
