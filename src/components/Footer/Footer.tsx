import ContactSection from "../ContactSection/ContactSection";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-green via-white to-white py-16">
      <div className="container mx-auto px-4">
      <ContactSection />
        <div className="mt-10 pt-6 text-center text-xs text-black/60">
          <p>&copy; 2024 Mitta - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
