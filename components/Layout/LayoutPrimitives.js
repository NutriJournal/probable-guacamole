export const CenteredContainer = ({ children, extraClasses }) => {
  return (
    <div className={`flex ${extraClasses}`}>
      <div className="flex-1"></div>
      <div className="flex flex-col">
        <div className="flex-1"></div>
        {children}
        <div className="flex-1"></div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export const Spacer = () => {
  return <div className="flex-1"></div>;
};

export const VerticalRow = ({ children, extraClasses }) => {
  return (
    <div className={`flex flex-col ${extraClasses}`}>
      <div className="flex-1"></div>
      {children}
      <div className="flex-1"></div>
    </div>
  );
};
