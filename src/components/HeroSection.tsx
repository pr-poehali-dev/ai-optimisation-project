import { useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/23aa774e-dae7-407b-b8e4-7ebfb31b464c/bucket/5771bdad-339a-41e7-8efa-f35eabcc5e78.jpg',
  'https://cdn.poehali.dev/projects/23aa774e-dae7-407b-b8e4-7ebfb31b464c/bucket/8898f47b-7c5b-48d3-b88c-a406fef974cc.jpg',
];

const TIKTOK_URL = 'https://www.tiktok.com/@glavstroy';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText('Lega500');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            {/* Avatar */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white/30 shadow-2xl ring-4 ring-white/10 md:h-36 md:w-36">
                <img
                  src="https://cdn.poehali.dev/projects/23aa774e-dae7-407b-b8e4-7ebfb31b464c/bucket/9c757a49-3f06-4aa8-a80e-7dc99887f3fe.jpg"
                  alt="Амбассадор"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Name & role */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-200 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Mellstroy</span>
                  <svg className="h-9 w-9 flex-shrink-0 self-center md:h-11 md:w-11" viewBox="0 0 24 24" aria-label="Верифицирован">
                    <circle cx="12" cy="12" r="10" fill="#1D9BF0"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <p className="text-lg font-light text-white/60 md:text-xl">
                  Амбассадор · Контент-мейкер
                </p>
              </div>
            </div>

            {/* Bio */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <p className="max-w-sm text-base font-light leading-relaxed text-white/70 md:text-lg">
                Делюсь тем, что люблю. Здесь — всё самое важное: ссылки, коллаборации и контент специально для вас.
              </p>
            </div>

            {/* TikTok CTA — main link */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex flex-wrap gap-4">
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-white px-8 py-4 text-black shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.35)] hover:scale-105 active:scale-100"
                >
                  <svg className="h-6 w-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.52V6.75a4.85 4.85 0 0 1-1.02-.06z" />
                  </svg>
                  <span className="text-base font-semibold tracking-wide">Мой TikTok</span>
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://one-vv5985.life/?open=register&p=v96k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-black shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.35)] hover:scale-105 active:scale-100"
                >
                  <img
                    src="https://cdn.poehali.dev/projects/23aa774e-dae7-407b-b8e4-7ebfb31b464c/bucket/e77da452-5ebc-498d-84ad-3c57c605ad8b.jpg"
                    alt="1win"
                    className="h-7 w-7 rounded-md flex-shrink-0 object-cover"
                  />
                  <span className="text-base font-semibold tracking-wide">Моё Казино</span>
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* QR Code */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-600 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <a
                href="https://one-vv5985.life/?open=register&p=v96k"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <img
                  src="https://cdn.poehali.dev/projects/23aa774e-dae7-407b-b8e4-7ebfb31b464c/bucket/1601c23b-aa39-4185-8d27-6ca754a40f0b.png"
                  alt="QR-код 1win"
                  className="h-16 w-16 rounded-lg flex-shrink-0"
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-white">Сканируй QR-код</span>
                  <span className="text-xs text-white/50">Быстрая регистрация в 1win</span>
                </div>
              </a>
            </div>

            {/* Social icons row */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-700 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex items-center gap-5">
                <span className="text-xs uppercase tracking-widest text-white/30">Также здесь</span>
                <div className="h-px w-8 bg-white/20" />
                {/* Telegram */}
                <a
                  href="https://t.me/tellstroytm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition-all duration-200 hover:text-white hover:scale-110"
                  aria-label="Telegram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
                {/* VK */}
                <a
                  href="https://vk.com/mellstroy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition-all duration-200 hover:text-white hover:scale-110"
                  aria-label="VKontakte"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.043-2.763-5.32-2.763-5.788 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.625 2.18-3.625.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Promo code */}
      <div className="absolute bottom-16 right-8 z-20 text-right">
        <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Мой секретный промокод при пополнении</p>
        <button
          onClick={handleCopy}
          className={cn(
            'flex items-center gap-2 ml-auto rounded-xl border px-4 py-2 transition-all duration-300',
            copied
              ? 'border-green-400/50 bg-green-400/10 text-green-400'
              : 'border-white/20 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/30'
          )}
        >
          <span className="text-sm font-semibold tracking-wider">Lega500</span>
          {copied ? (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-6 bg-white/30 hover:bg-white/50'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}