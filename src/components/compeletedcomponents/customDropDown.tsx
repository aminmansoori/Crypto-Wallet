import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Typography, Spacing} from '../../styles/index';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props {
  items?: any;
  defaultValue?: any;
  onChangeItem?: any;
  width?: any;
  height?: any;
  shadowColor?: any;
  controller?: any;
  onChangeList?: any;
}

const CustomDropDown: React.FC<Props> = ({
  items,
  defaultValue,
  onChangeItem,
  width,
  height,
  shadowColor, //some problems with shadow color, component does not work with shadow color
  onChangeList,
}) => {
  return (
    <DropDownPicker
      items={items}
      defaultValue={defaultValue}
      containerStyle={{
        height: height,
        width: width,
        borderRadius: Spacing.BORDER_RADIUS_8,
      }}
      arrowColor={Colors.ICON_DROP_DOWN_COLOR}
      arrowSize={Spacing.DROP_DOWN_ICON_SIZE}
      style={{backgroundColor: Colors.FILTER_ICON_COLOR}}
      itemStyle={Styles.itemStyle}
      labelStyle={Styles.lableStyle}
      onChangeItem={onChangeItem}
      onChangeList={onChangeList}
      customArrowUp={()=> <Icon name="ios-caret-up-outline" size={Spacing.ICON_SIZE/2} color={Colors.ICON_DROP_DOWN_COLOR}/>}
      customArrowDown={()=> <Icon name="caret-down-outline" size={Spacing.ICON_SIZE/2} color={Colors.ICON_DROP_DOWN_COLOR}/>}
    />
  );
};

export default CustomDropDown;

const Styles = StyleSheet.create({
  itemStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  lableStyle: {
    color: Colors.FONT_TITLE_COLOR,
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_MEDIUM.fontFamily,
  },
});
