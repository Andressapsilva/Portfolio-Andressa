const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
