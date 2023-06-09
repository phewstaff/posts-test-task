import { useMemo } from "react";

export const getPageCount = (totalCount: number = 0, limit: number): number => {
  return Math.ceil(totalCount / limit);
};

export const MemoizedPageArray = (totalPages: number) => {
  const pageArray = useMemo(() => {
    let result: number[] = [];
    for (let index = 0; index < totalPages; index++) {
      result.push(index + 1);
    }

    return result;
  }, [totalPages]);

  return pageArray;
};
