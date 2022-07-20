import type { ReactNode } from "react";
import { TooltipBox, TooltipCard, TooltipText } from "./styles";

type TooltipProps = {
  children: ReactNode;
  label: string;
}

export function Tooltip({ label, children }: TooltipProps) {
  return (
    <TooltipCard>
      <TooltipText>
        {children}
      </TooltipText>

      <TooltipBox>
        <p>{label}</p>
      </TooltipBox>
    </TooltipCard>
  );
}