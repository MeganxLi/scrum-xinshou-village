import { useEffect } from "react";

export const useHeadShake = (paused: boolean, setPaused: React.Dispatch<React.SetStateAction<boolean>>) => {
   useEffect(() => {
      if (!paused) return;

      const interval = setInterval(() => {
         setPaused(false);
      }, 500);
      return () => {
         clearInterval(interval);
         setPaused(false);
      };
   }, [paused]);
};
