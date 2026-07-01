export function BackgroundMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute -top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-brand-red/8 blur-[120px]" />
      <div className="absolute top-1/3 -left-1/4 h-[600px] w-[600px] rounded-full bg-brand-red/5 blur-[100px]" />
      <div className="absolute -bottom-1/4 right-1/3 h-[700px] w-[700px] rounded-full bg-white/3 blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #ef4444 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
