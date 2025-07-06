export default function Header() {
  return (
    <header className="px-6 py-8 text-center">
      <div className="mx-auto max-w-4xl">
        <h1 className="bg-gradient-to-r from-white to-purple-200 bg-clip-text pb-6 font-bold text-5xl text-white md:text-7xl">
          Meditation Program
        </h1>
        <p className="pb-8 text-gray-300 text-xl leading-relaxed md:text-2xl">
          A simple meditation program to help you start your meditation journey.
        </p>
      </div>
      <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
    </header>
  );
}
