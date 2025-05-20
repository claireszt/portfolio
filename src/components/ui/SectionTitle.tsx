type Props = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="text-3xl font-serif font-bold text-center">{children}</h2>
  );
}
