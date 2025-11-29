import { cn } from "@/lib/utils";

const Heading = ({ text, className }) => {
  return (
    <h1 className={cn("h1 mb-8", className)}>
      <span className="text-primary">{text}</span>
    </h1>
  );
};

export default Heading;