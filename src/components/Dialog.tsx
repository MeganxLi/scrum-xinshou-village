import { DownOne, Undo } from "@icon-park/react";

interface props {
  DialogItem: DialogComponentType
}

const Dialog = ({ DialogItem }: props) => {
  const { text, button, icon } = DialogItem;

  return (
    <div className="dialog-box">
      <div className="dialog-content" >
        <div className="animate__slideInUp duration">
          {text}
        </div>
        {button &&
          <button
            onClick={button.onClick}
            className={`${button.text === "Go" ?
              "next-step chickara animate__fadeIn" :
              "click-continue animate__fadeIn"}
             `}
          >
            {button.text}
          </button>
        }
        {icon?.text === "DownOne" &&
          <DownOne
            theme="filled"
            size="30"
            className="icon-down animate__fadeIn"
            onClick={icon.onClick}
          />
        }
        {icon?.text === "Undo" &&
          <Undo
            strokeWidth={4}
            size={32}
            className="icon-undo"
            onClick={icon.onClick}
          />
        }

      </div>
    </div>
  );
};

export default Dialog;
