import type { IconType } from "react-icons";

type Props = {
  year: string;
  icon: IconType;
  children: React.ReactNode;
};

export default function TimelineItem({ year, icon: Icon, children }: Props) {
  return (
    <li className="flex items-end gap-3">
      <Icon className="text-xl text-accent mt-1.5 shrink-0" />
      <div className="leading-snug">
        <span className="font-bold text-sm">{year}</span>{" "}
        <span className="text-sm">{children}</span>
      </div>
    </li>
  );
}
