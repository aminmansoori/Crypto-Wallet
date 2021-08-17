import React, {useState} from 'react';
import {StyleSheet, View,TouchableOpacity} from 'react-native';
import {Colors, Typography, Spacing} from '../../styles/index';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Text} from 'react-native-elements';
interface Props {
  onDate?: any;
}

const ShowDateComponent: React.FC<Props> = ({onDate}) => {

  // const [date, setDate] = useState<any>('2021-01-01');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState<any>('');
  const showDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleConfirm = (date: Date) => {
    setDate(date.toISOString().substring(0,10));
    onDate(date.toISOString().substring(0,10))
    setDatePickerVisibility(!isDatePickerVisible);
  };
  return (
    <View>
    <TouchableOpacity
        onPress={showDatePicker}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          borderRadius: Spacing.BORDER_RADIUS_8,
          width: Spacing.WIDTH_SCALE_135,
          height: Spacing.HEIGHT_SHOW_DATE,
          backgroundColor: Colors.CALENDAR_BG_COLOR,
        }}>
        <Text style={Styles.dateStyle}>{date}</Text>
        <Icon
          name="md-calendar"
          size={Spacing.ICON_SIZE / 2}
          color={Colors.ICON_DROP_DOWN_COLOR}
        />
      </TouchableOpacity>
      <DateTimePickerModal
        maximumDate={new Date()}
        isDarkModeEnabled={true}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={showDatePicker}
      />
      </View>
    // <View style={Styles.viewContainer}>
    //   <DatePicker
    //     style={{
    //       height: Spacing.HEIGHT_SHOW_DATE,
    //       paddingLeft: Spacing.HEADER_MAIN_PADDING,
    //       paddingRight: Spacing.HEADER_MAIN_PADDING,
    //       borderRadius: Spacing.BORDER_RADIUS_8,
    //       backgroundColor: Colors.CALENDAR_BG_COLOR,
    //     }}
    //     androidMode="default"
    //     customStyles={{
    //       dateInput: {
    //         borderWidth: 0,
    //         alignItems: 'flex-start',
    //       },
    //       dateText: {
    //         color: Colors.FONT_TITLE_COLOR,
    //         fontSize: Typography.FONT_SIZE_12,
    //         fontFamily: Typography.FONT_MEDIUM.fontFamily,
    //       },
       
    //     }}
    //     iconComponent={
    //       <Icon
    //         name="md-calendar"
    //         size={Spacing.ICON_SIZE / 2}
    //         color={Colors.ICON_DROP_DOWN_COLOR}
    //       />
    //     }
    //     date={date}
    //     mode="date"
    //     placeholder="select date"
    //     format="YYYY-MM-DD"
    //     maxDate={new Date()}
    //     confirmBtnText="Confirm"
    //     cancelBtnText="Cancel"
    //     onDateChange={(date: any) => {
    //       setDate(date);
    //       onDate(date);
    //     }}
    //   />
    // </View>
  );
};

export default ShowDateComponent;

const Styles = StyleSheet.create({
  viewContainer: {
    borderRadius: Spacing.BORDER_RADIUS_8,
    alignItems: 'center',
    width:Spacing.WIDTH_SCALE_135
  },
  dateStyle: {
    color: Colors.FONT_TITLE_COLOR,
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_MEDIUM.fontFamily,
  },
  
});
