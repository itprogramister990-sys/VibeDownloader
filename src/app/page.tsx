import { DownloadCloud, Zap, Ban, MonitorPlay, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-12 lg:p-24 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-600/20 blur-[100px] -z-10 animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-600/20 blur-[100px] -z-10 animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="max-w-4xl w-full flex flex-col items-center space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-glow bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-500 animate-float">
            VibeDownloader
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Premium media downloader for TikTok, YouTube, and Instagram. <br className="hidden md:block"/>
            <span className="text-white font-medium">No watermarks. No ads. Just pure Full HD.</span>
          </p>
        </div>

        {/* Input Section */}
        <div className="w-full max-w-2xl relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex flex-col sm:flex-row items-center bg-slate-900 ring-1 ring-white/10 rounded-2xl p-2 box-glow-hover transition-shadow">
            <input 
              type="text" 
              placeholder="Paste video URL here..." 
              className="w-full bg-transparent text-white placeholder-slate-400 px-6 py-4 outline-none text-lg rounded-xl"
            />
            <button className="w-full sm:w-auto mt-2 sm:mt-0 bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg">
              <DownloadCloud className="w-6 h-6" />
              <span>Скачать в Full HD</span>
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full pt-12">
          
          <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center space-y-3 transform transition hover:-translate-y-2 hover:border-violet-500/50 group">
            <div className="p-3 bg-violet-500/20 rounded-xl group-hover:bg-violet-500/30 transition-colors">
              <Zap className="w-8 h-8 text-violet-400" />
            </div>
            <h3 className="text-xl font-bold text-white">High Speed</h3>
            <p className="text-slate-400 text-sm">Lightning fast downloads from premium edge servers.</p>
          </div>

          <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center space-y-3 transform transition hover:-translate-y-2 hover:border-pink-500/50 group">
            <div className="p-3 bg-pink-500/20 rounded-xl group-hover:bg-pink-500/30 transition-colors">
              <Ban className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white">No Ads</h3>
            <p className="text-slate-400 text-sm">Clean interface with absolutely zero interruptions.</p>
          </div>

          <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center space-y-3 transform transition hover:-translate-y-2 hover:border-violet-500/50 group">
            <div className="p-3 bg-violet-500/20 rounded-xl group-hover:bg-violet-500/30 transition-colors">
              <MonitorPlay className="w-8 h-8 text-violet-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Ultra HD</h3>
            <p className="text-slate-400 text-sm">Original 1080p and 4K quality without compression.</p>
          </div>

          <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center space-y-3 transform transition hover:-translate-y-2 hover:border-pink-500/50 group">
            <div className="p-3 bg-pink-500/20 rounded-xl group-hover:bg-pink-500/30 transition-colors">
              <Smartphone className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Multiplatform</h3>
            <p className="text-slate-400 text-sm">Works flawlessly on Desktop, iOS, and Android.</p>
          </div>

        </div>
      </div>
    </main>
  );
}
