import { QueryObserverResult } from "@tanstack/react-query";

export interface ErrorBlockPropsType {
  errorText: string
  error: Error
  refetch: () => Promise<QueryObserverResult<unknown, Error>>;
}
