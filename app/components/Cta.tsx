import { AuthModal } from "./AuthModal";

export function CTA() {
  return (
    <section className="my-20 relative isolate overflow-hidden px-6 py-20 text-center sm:rounded-3xl sm:border sm:shadow-sm">
      <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
        Start using CalMarshal now!
      </h2>
      <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-sm mx-auto">
        CalMarshal makes it easy for your clients to schedulae a meeting with
        your!
      </p>
      <div className="mt-6">
        <AuthModal />
      </div>

      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
          fillOpacity="0.7"
        ></circle>
        <defs>
          <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
            <stop stopColor="#3b82f6" />
            <stop offset={1} stopColor="#1d4ed8" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
}
