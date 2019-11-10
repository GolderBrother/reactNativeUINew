import React from 'react';
import { Button, View } from 'react-native';
import PropTypes from 'prop-types';
import TouchFeedback from 'rmc-feedback';
import classnames from 'classnames';
// import view from './view';
import Icon from '../ZKIcon';
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
  return typeof str === 'string';
}

// Insert one space between two chinese characters automatically.
function insertSpace(child) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(
      child,
      {},
      child.props.children.split('').join(' '),
    );
  }
  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split('').join(' ');
    }
    return <span>{child}</span>;
  }
  return child;
}
export default class ZKButton extends React {
    static propTypes = {
        prefixCls: PropTypes.string,
        // type: 'primary' | 'warning' | 'ghost',
        type: PropTypes.string,
        // size: 'large' | 'small',
        size: PropTypes.string,
        inline: PropTypes.bool,
        disabled: PropTypes.bool,
        loading: PropTypes.bool,
    }
    static defaultProps = {
        prefixCls: 'am-button',
        type: 'primary',
        size: 'large',
        inline: false,
        disabled: false,
        loading: false,
    }
    render(){
        const {
            children,
            className,
            prefixCls,
            type,
            size,
            inline,
            disabled,
            icon,
            loading,
            activeStyle,
            activeClassName,
            onClick,
            ...restProps
          } = this.props;
      
          const iconType = loading ? 'loading' : icon;
          const wrapCls = classnames(prefixCls, className, {
            [`${prefixCls}-primary`]: type === 'primary',
            [`${prefixCls}-ghost`]: type === 'ghost',
            [`${prefixCls}-warning`]: type === 'warning',
            [`${prefixCls}-small`]: size === 'small',
            [`${prefixCls}-inline`]: inline,
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-loading`]: loading,
            [`${prefixCls}-icon`]: !!iconType,
          });
      
          const kids = React.Children.map(children, insertSpace);
      
          let iconEl;
          if (typeof iconType === 'string') {
            iconEl = (
              <Icon
                aria-hidden="true"
                type={iconType}
                size={size === 'small' ? 'xxs' : 'md'}
                className={`${prefixCls}-icon`}
              />
            );
          } else if (iconType) {
            const rawCls = iconType.props && iconType.props.className;
            const cls = classnames(
              'am-icon',
              `${prefixCls}-icon`,
              size === 'small' ? 'am-icon-xxs' : 'am-icon-md',
            );
            iconEl = React.cloneElement(iconType, {
              className: rawCls ? `${rawCls} ${cls}` : cls,
            });
          }
        return (
            <View>
                <TouchFeedback
                    // tslint:disable-next-line:jsx-no-multiline-js
                    activeClassName={
                    activeClassName || (activeStyle ? `${prefixCls}-active` : undefined)}
                    disabled={disabled}
                    activeStyle={activeStyle}
                >
                    <a
                        role="button"
                        className={wrapCls}
                        {...restProps}
                        onClick={disabled ? undefined : onClick}
                        aria-disabled={disabled}
                        >
                        {iconEl}
                        {kids}
                    </a>
                    {/* <Button className={wrapCls} {...restProps} title="Button" onPress={disabled ? undefined : onClick}>
                        {iconEl}
                        {kids}
                    </Button> */}
                </TouchFeedback>
            </View>
        )
    }
}
