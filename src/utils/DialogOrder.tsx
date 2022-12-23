import { useEffect, useState } from "react";

export const DialogOrder = (
  order: number,
  setOrder: React.Dispatch<React.SetStateAction<number>>,
  stopArray: number[]
) => {
  const [times, setTimes] = useState<number>(0);
  const [start, setStart] = useState<boolean>(true);

  useEffect(() => {
    setTimes(0);

    // stopArray 為 []，停止自動
    if (stopArray.length === 0) return setStart(false);

    if (stopArray.some((e: number) => e === order)) {
      setStart(false);
    } else {
      setStart(true);
    }
  }, [order]);

  useEffect(() => {
    console.log(times);

    if (!start) {
      return;
    }

    const interval = setInterval(() => {
      setTimes((prev) => prev + 1);
    }, 1000);

    if (times === 3) {
      setOrder((prev) => prev + 1);
    }

    return () => clearInterval(interval);
  }, [start, times]);
};
