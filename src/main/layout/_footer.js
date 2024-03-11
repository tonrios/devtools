export default function Footer() {
  const x = new Date().getFullYear();
  const foorterTextDate = String.fromCharCode(169) + x;

  return (
    <footer className="footer  text-right p-8 pb-4">
      {foorterTextDate}, feito com{" "}
      <i style={{ fontSize: 16, lineHeight: 0 }} className="material-icons animate-pulse   text-red-600">
        favorite
      </i>{" "}
      <span> por </span>
      Rivanilton Rios
    </footer>
  );
}
