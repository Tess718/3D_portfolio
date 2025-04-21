const TitleHeader = ({ title, sub, centered }) => {
    return (
      <div className={`flex flex-col gap-5 ${centered ? 'items-center' : 'items-start'} `}>
        <div className="hero-badge">
          <p>{sub}</p>
        </div>
        <div>
          <h1 className="font-semibold md:text-5xl text-3xl text-center">
            {title}
          </h1>
        </div>
      </div>
    );
  };
  
  export default TitleHeader;
  