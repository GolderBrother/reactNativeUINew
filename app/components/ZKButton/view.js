import React from 'react';
import { Button, Text, View } from 'react-native';
export default self => {
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
    } = self.props;
    return (
        <View>
            <TouchFeedback
            // tslint:disable-next-line:jsx-no-multiline-js
            activeClassName={
              activeClassName || (activeStyle ? `${prefixCls}-active` : undefined)}
            disabled={disabled}
            activeStyle={activeStyle}
          >
            {/* <a
              role="button"
              className={wrapCls}
              {...restProps}
              onClick={disabled ? undefined : onClick}
              aria-disabled={disabled}
            >
              {iconEl}
              {kids}
            </a> */}
            <Button {...restProps} title="Button" />
          </TouchFeedback>
        </View>
    )
}