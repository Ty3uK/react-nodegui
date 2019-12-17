import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";
import { RNSvg, SvgProps } from "./RNSvg";
import { AppContainer } from "../../reconciler";

class ViewConfig extends ComponentConfig {
  tagName = RNSvg.tagName;
  shouldSetTextContent() {
    return false;
  }
  createInstance(
    newProps: SvgProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber,
  ): RNSvg {
    const widget = new RNSvg();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNSvg,
    newProps: SvgProps,
    internalInstanceHandle: any,
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNSvg,
    updatePayload: any,
    oldProps: SvgProps,
    newProps: SvgProps,
    finishedWork: Fiber,
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const Svg = registerComponent<SvgProps>(new ViewConfig());
