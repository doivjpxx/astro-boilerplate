export enum GsapPlugin {
  "SplitText",
  "DrawSVG",
  "ScrambleText",
}

export interface MainProps {
  title?: string | undefined;
  description?: string | undefined;
  includeFontAwesome?: boolean | undefined;
  includeGsap?: {
    enabled?: boolean;
    plugins?: GsapPlugin[];
  };
}
