import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  RefObject,
  useRef,
} from "react";
import {
  ImperativeRef,
  useCallOnVisible,
} from "../../functions/customHooks/useOnScreen";

interface WithOnVisibleProps {
  imperativeRef: RefObject<ImperativeRef>;
}

function withOnVisible<T extends WithOnVisibleProps = WithOnVisibleProps>(
  WrappedComponent: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>
) {
  return function ComponentWithTheme({
    imperativeRef,
    ...restProps
  }: WithOnVisibleProps) {
    const sectionRef = useRef<HTMLDivElement | null>(null); // Adjust the type here
    useCallOnVisible(sectionRef, imperativeRef);

    return <WrappedComponent ref={sectionRef} {...(restProps as T)} />;
  };
}

export default withOnVisible;
