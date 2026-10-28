import { footerText, profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-line/10 py-8 text-center text-sm text-muted">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}. {footerText}
      </p>
    </footer>
  );
}
