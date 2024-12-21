'use client';

interface GradientTextProps {
  children: React.ReactNode;
}

const GradientText = ({ children }: GradientTextProps) => {
  return (
    <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
      {children}
    </span>
  );
};

export default GradientText;