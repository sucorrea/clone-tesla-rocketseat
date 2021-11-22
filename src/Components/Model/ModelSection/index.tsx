import React, { ReactNode, useEffect, useRef } from "react";
import useModel from "../ModelsWrapper/useModel";

import { Container } from "./styles";

interface ModelSectionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: ReactNode;
  children?: ReactNode;
}

function ModelSection({
  children,
  modelName,
  overlayNode,
  ...props
}: ModelSectionProps) {
  const { registerModel } = useModel(modelName);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({ modelName, overlayNode, sectionRef });
    }
  }, [modelName, overlayNode, sectionRef, registerModel]);

  return <Container {...props}>{children}</Container>;
}

export default ModelSection;
