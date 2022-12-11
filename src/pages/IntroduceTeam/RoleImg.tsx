interface props {
  userImgItem: ImgAnimateType
}

const RoleImg = ({ userImgItem }: props) => {
  const { imgUrl, delaySec, direction, style } = userImgItem;
  return (
    <>
      <img
        className={`role duration ${direction === "left" ?
          "animate__slideInLeft role-left" :
          "animate__slideInRight role-right"
          }`}
        style={{ ...{ animationDelay: 0.7 * delaySec + "s" }, ...style }}
        src={process.env.PUBLIC_URL + imgUrl}
      />
    </>
  );
};

export default RoleImg;
