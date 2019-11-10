import classnames from 'classnames';
import * as React from 'react';
import loadSprite from './loadSprite';
import { IconPropsType } from './PropsType';
import { Omit } from '../_util/types';
// declare module 'react' {
//     interface HTMLProps<T>{
//        size?:string;
//        type?:string;
//     } 
//     interface MouseEventHandler<T> {
        
//     }   
// }
interface SyntheticEvent<T = Element> {
    bubbles: boolean;
    /**
     * A reference to the element on which the event listener is registered.
     */
    currentTarget: EventTarget & T;
    cancelable: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    nativeEvent: Event;
    preventDefault(): void;
    isDefaultPrevented(): boolean;
    stopPropagation(): void;
    isPropagationStopped(): boolean;
    persist(): void;
    // If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12239
    /**
     * A reference to the element from which the event was originally dispatched.
     * This might be a child element to the element on which the event listener is registered.
     *
     * @see currentTarget
     */
    target: EventTarget;
    timeStamp: number;
    type: string;
}
interface MouseEvent<T = Element> extends SyntheticEvent<T> {
    altKey: boolean;
    button: number;
    buttons: number;
    clientX: number;
    clientY: number;
    ctrlKey: boolean;
    /**
     * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
     */
    getModifierState(key: string): boolean;
    metaKey: boolean;
    // nativeEvent: NativeMouseEvent;
    pageX: number;
    pageY: number;
    relatedTarget: EventTarget;
    screenX: number;
    screenY: number;
    shiftKey: boolean;
}

export type SvgProps = Omit<
//   React.HTMLProps<SVGSVGElement>,
   any,
  'size' | 'type'
>;
export interface IconProps extends IconPropsType, SvgProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  onClick?: MouseEvent<SVGSVGElement>;
}
export default class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    size: 'md',
  };
  componentDidMount() {
    loadSprite();
  }
  render() {
    const { type, className, size, ...restProps } = this.props;
    const cls = classnames(
      className,
      'am-icon',
      `am-icon-${type}`,
      `am-icon-${size}`,
    );
    return (
      <svg className={cls} {...restProps}>
        <use xlinkHref={`#${type}`} />
      </svg>
    );
  }
}