export function Vignette() {
    return (
        <div
            className="
        fixed inset-0 pointer-events-none -z-40
        bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.45))]
        dark:bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.65))]
      "
        />
    );
}
