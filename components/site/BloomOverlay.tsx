export function BloomOverlay() {
    return (
        <div className="fixed inset-0 -z-25 pointer-events-none mix-blend-screen opacity-80">
            {/* Engineering bloom */}
            <div
                className="
          absolute w-[60vw] h-[60vw]
          -top-40 left-1/2 -translate-x-1/2
          bg-brand-300/14
          blur-3xl
        "
            />
            {/* Cinematic amber bloom */}
            <div
                className="
          absolute w-[55vw] h-[55vw]
          bottom-[-30vh] right-1/4
          bg-dark-brand-500/16
          blur-3xl
        "
            />
        </div>
    );
}
