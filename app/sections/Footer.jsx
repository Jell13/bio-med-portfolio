

const Footer = () => {
  return (
    <footer className="relative py-8 px-6 lg:px-20 bg-[#1A3A56] border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col font-dmsans md:flex-row justify-between items-center gap-4 text-sm text-white/60 font-light">
        <p>© 2025 Julia Sutedjo. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#E8A87C] rounded-full animate-pulse" />
          <p>Bio Engineer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;