import devTheme from "../../core/theme";

export default function Footer() {
  const x = new Date().getFullYear();
  const foorterTextDate = String.fromCharCode(169) + x;

  return (
    <footer className="footer text-center  sm:text-right p-9 pb-4">
      {foorterTextDate}, made with <i className="material-icons animate-pulse text-red-600">favorite</i>
      <span> by </span>
      <a target="_blank" rel="noreferrer" style={{ color: devTheme.palette.primary.main }} href="https://github.com/tonrios">
        Rivanilton Rios
      </a>
    </footer>
  );
}
