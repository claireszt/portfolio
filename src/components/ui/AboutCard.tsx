type Props = {
  children: React.ReactNode;
};

export default function AboutCard({ children }: Props) {
  return (
    <div className="bg-surface flex flex-col justify-between p-6 rounded-2xl shadow-soft border border-gray-200">
      {children}
    </div>
  );
}
