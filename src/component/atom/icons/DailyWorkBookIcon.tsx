import React from 'react';

interface Props {
  icon: JSX.Element;
}

const DailyWorkBookIcon: React.FC<Props> = ({icon}) => {
  return (
    <div>
        {icon}
    </div>
  );
};

export { DailyWorkBookIcon };