import MainContent from "@/components/ui/MainContent";

export default function Home() {
  return (
    <div className="flex bg-primary text-secondary flex-col min-h-screen  mx-auto">
      {/* Main Content */}
      <main className="flex-grow content">
        <MainContent />
      </main>
    </div>
  );
}
