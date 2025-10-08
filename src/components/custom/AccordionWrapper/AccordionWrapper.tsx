'use client';

import {
  Accordion,
  type AccordionItemProps,
  AccordionItem as Item,
} from '@szhsin/react-accordion';

export type AccordionItemData = {
  title: string;
  description: string;
};

export type AccordionWrapperProps = {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
};

const AccordionItem = ({ header, ...rest }: AccordionItemProps) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && 'rotate-180'
          }`}
          src="chevron-down.svg"
          alt="Chevron"
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left hover:bg-slate-100 ${
          isEnter && 'bg-slate-200'
        }`,
    }}
    contentProps={{
      className: 'transition-height duration-200 ease-out',
    }}
    panelProps={{ className: 'p-4' }}
  />
);

function AccordionWrapper({
  items = [],
  allowMultiple = false,
  className = '',
}: AccordionWrapperProps) {
  return (
    <div className={`accordion-wrapper ${className} mx-2 my-4 border-t`}>
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion
        allowMultiple={allowMultiple}
        transition
        transitionTimeout={200}
      >
        {items.map((item, index) => (
          <AccordionItem
            key={`accordion-item-${index}-${item.title}`}
            header={item.title}
          >
            {item.description}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default AccordionWrapper;
