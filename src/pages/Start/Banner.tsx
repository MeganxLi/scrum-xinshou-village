
const Banner = ({ classNames }: { classNames: string }) => {
  return (
    <div className={`banner animate__bounceOut ${classNames}`}>
      *{("SCRUM*").repeat(27)}
    </div>
  );
};

export default Banner;
