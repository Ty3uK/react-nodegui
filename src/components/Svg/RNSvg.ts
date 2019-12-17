import { QSvgWidget, NodeWidget } from "@nodegui/nodegui";
import { RNWidget } from "../config";
import { ViewProps, setViewProps } from "../View/RNView";
import { throwUnsupported } from "../../utils/helpers";

export interface SvgProps extends ViewProps {
  src?: string;
  content?: Buffer;
}

const setSvgProps = (
  widget: RNSvg,
  newProps: SvgProps,
  oldProps: SvgProps,
) => {
  const setter: SvgProps = {
    set src(file: string) {
      widget.load(file);
    },
    set content(content: Buffer) {
      widget.load(content);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNSvg extends QSvgWidget implements RNWidget {
  setProps(newProps: SvgProps, oldProps: SvgProps): void {
    setSvgProps(this, newProps, oldProps);
  }
  appendInitialChild(child: NodeWidget): void {
    throwUnsupported(this);
  }
  appendChild(child: NodeWidget): void {
    throwUnsupported(this);
  }
  insertBefore(child: NodeWidget, beforeChild: NodeWidget): void {
    throwUnsupported(this);
  }
  removeChild(child: NodeWidget): void {
    throwUnsupported(this);
  }
  static tagName = "svg";
}