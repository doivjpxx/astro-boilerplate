const Yep = () => {
  return (
    <a
      className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    >
      <svg
        aria-hidden="true"
        className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
      >
        <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"></path>
      </svg>
      <span className="ml-3">Yep (fromReact)!</span>
    </a>
  );
};

export default Yep;
