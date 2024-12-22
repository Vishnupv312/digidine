export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-blue-300">
      <main className="flex-1 relative">{children}</main>
    </div>
  );
}
