import IntroduceBacklog from "../pages/IntroduceBacklog";
import IntroduceSprint from "../pages/IntroduceSprint";
import IntroduceTeam from "../pages/IntroduceTeam";
import Start from "../pages/Start";
import Story from "../pages/Story";
import TaskFlow from "../pages/TaskFlow";
import TaskPriority from "../pages/TaskPriority";
import TaskShort from "../pages/TaskShort";
import End from "../pages/End";

const PagesStepList = [
  <Start key="Start" />,
  <Story key="Story" />,
  <IntroduceBacklog key="IntroduceBacklog" />,
  <TaskPriority key="TaskPriority" />,
  <IntroduceTeam key="IntroduceTeam" />,
  <TaskShort key="TaskShort" />,
  <IntroduceSprint key="IntroduceSprint" />,
  <TaskFlow key="TaskFlow" />,
  <End key="End" />,
];

export default PagesStepList;
