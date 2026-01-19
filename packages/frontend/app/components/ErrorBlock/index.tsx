import { FC } from "react";

import { ErrorBlockPropsType } from "./types";

export const ErrorBlock: FC<ErrorBlockPropsType> = ({
  errorText,
  error,
  refetch,
}) => (
  <div className="flex flex-col items-center justify-center p-10 gap-4 border-2 border-dashed border-red-200 rounded-xl bg-red-50">
    <p className="text-red-600 font-medium text-lg">{errorText}</p>
    <p className="text-red-400 text-sm">{error.message}</p>
    <button
      onClick={() => refetch()}
      className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
    >
      Try Again
    </button>
  </div>
);
