import * as React from "react";

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className="p-4 border rounded shadow bg-white">
      {children}
    </div>
  );
});

Card.displayName = "Card";
