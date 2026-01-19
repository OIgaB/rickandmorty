import { FC } from "react";
import { BioInfoFieldPropsType } from "./types";

export const BioInfoField:FC<BioInfoFieldPropsType> = ({ label, value }) => (
  <div>
    <dt className="text-xs font-bold uppercase tracking-wider text-zinc-400">{label}</dt>
    <dd className="text-lg font-medium text-zinc-800">{value}</dd>
  </div>
);
