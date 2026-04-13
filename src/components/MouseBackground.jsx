const MouseBackground = ({ theme }) => {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full pointer-events-none overflow-hidden bg-background transition-colors duration-1000">
      
      {/* Base Gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,189,176,0.3)_0%,rgba(0,0,0,0)_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_60%)] w-full h-full"></div>
        
      {/* Grain / Noise Texture Layer for tactile feel */}
      <div className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25] mix-blend-overlay soft-noise pointer-events-none"
           style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }}
      ></div>
    </div>
  );
};

export default MouseBackground;
