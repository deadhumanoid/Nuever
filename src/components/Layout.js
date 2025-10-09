import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-neuver-bg-dark">
      <Navbar />
      <main className="flex-grow">{children}</main>
      {/* You'll add a Footer component here later */}
    </div>
  );
}
