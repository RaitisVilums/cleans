const Footer = () => {
  return (
    <footer className="w-full bg-secondary-blue flex justify-center items-center min-h-[100px]">
      <div className="container flex justify-center">
        <h2 className="text-white">
          Created and Designed by &#169;{" "}
          <span className="text-yellow-400">CleanSolutions </span>
          {new Date().getFullYear()}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
