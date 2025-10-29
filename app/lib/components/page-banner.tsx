export const PageBanner = ({ title, pText, children }: PageBannerProps) => (
    <section className="relative flex flex-col items-center justify-center text-center p-6 sm:p-12 lg:p-17 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-5xl md:flex md:space-x-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0 lg:min-w-73 md:self-center">{title}</h1>
          {pText ? <p className="text-lg md:text-xl leading-relaxed self-center">{pText}</p> : children}
        </div>
      </section>
)

type PageBannerProps = {
    title: string;
    pText: string;
    children?: React.ReactNode;
};
