import Dialog from "../../components/Dialog";

const SprintDialog = () => {
  const dialogText: DialogComponentType = {
    text:
      <>
        <p>Dev 小貓、小熊</p>
        <p>等等等等等，你都還不知道什麼是 Sprint 吧！</p>
        <p>讓我先為你介紹一下～ 仔細聽好唷，等等會考考你！</p>
      </>
  };
  return (
    <div className="sprint-dialog">
      <img
        className="role animate__slideInLeft duration"
        src={process.env.PUBLIC_URL + "/images/img_dev02.png"}
      />
      <img
        className="role animate__slideInRight duration"
        src={process.env.PUBLIC_URL + "/images/img_dev01_right.png"}
      />
      <Dialog DialogItem={dialogText} />
    </div>
  );
};

export default SprintDialog;
