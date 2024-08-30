export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="text-center">
      {" "}
      Created By <i className="fa-solid fa-heart"></i>
      <a href="https://github.com/CVJaswanthiReddy"></a>Jaswanthi Reddy
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a href="https://github.com/CVJaswanthiReddy/React_inception">
        <strong>
          Food<span>Villa</span>
        </strong>
      </a>
    </div>
  );
};
