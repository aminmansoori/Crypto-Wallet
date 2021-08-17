import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {ThemeProvider, Text} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import Button from './customButton';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomInput from '../compeletedcomponents/customInput';
import {Coins, Types, Status} from '../../data/transaction_mock_data';
import ShowDate from '../compeletedcomponents/showDateComponent';
import CustomDropDown from '../compeletedcomponents/customDropDown';
import {useDispatch} from 'react-redux';
import {
  addToTransactionFilters,
  removeAllTraansactionFilters,
} from '../../redux/actions/transactionFilter.action';

interface Props {
  onPress?: any;
}

const TransactionFilterModal: React.FC<Props> = ({onPress}) => {
  const dispatch = useDispatch();
  const [transactioId, setTransactionId] = useState('');
  const [cointValue, setCoinValue] = useState<String>('');
  const [startDate, setStartDate] = useState<String>('');
  const [endDate, setEndDate] = useState('');
  const [type, setType] = useState<String>('');
  const [status, setStatus] = useState<String>('');
  const makeFilterChips = () => {
    
    if (transactioId.length > 0) {
      dispatch(addToTransactionFilters({id: '1', filter: transactioId}));
    }
    if (cointValue.length > 0) {
      dispatch(addToTransactionFilters({id: '2', filter: cointValue}));
    }
    if (startDate.length > 0) {
      console.log(startDate);
      
      dispatch(addToTransactionFilters({id: '3', filter: startDate}));
    }
    if (endDate.toString().length > 0) {
      dispatch(addToTransactionFilters({id: '4', filter: endDate}));
    }
    if (type.length > 0) {
      dispatch(addToTransactionFilters({id: '5', filter: type}));
    }
    if (status.length > 0) {
      dispatch(addToTransactionFilters({id: '6', filter: status}));
    }
  };
  return (
    <SafeAreaView>
      <ScrollView style={Styles.modalView}>
        <ThemeProvider>
          <View style={{flex: 1}}>
            <View style={Styles.headerContainer}>
              <View style={Styles.componentContainer}>
                <Text style={Styles.headerTitle}>Filters</Text>
                <Icon
                  name="close"
                  color={Colors.WRONG_INPUT_BORDER_COLOR}
                  size={Spacing.ICON_SIZE}
                  onPress={onPress}
                />
              </View>
            </View>
            <View style={Styles.itemsPositoion}>
              <View style={[Styles.firstRowStyle, {height: '20%',marginTop:Spacing.MARGIN_1*2}]}>
                <View
                  style={[
                    Styles.titleContainer,
                    {paddingLeft: Spacing.FILTER_MODAL_PADDING / 2},
                  ]}>
                  <Text style={Styles.titleStyles}>TX ID</Text>
                </View>
                <CustomInput
                  backGroundColor={Colors.FILTER_ICON_COLOR}
                  height={Spacing.FILTER_COMPONENT_HEIGHT}
                  value={transactioId}
                  setValue={setTransactionId}
                  width={Spacing.WIDTH_SCALE_280}
                />
              </View>
              <View
                style={[
                  Styles.firstRowStyle,
                  {paddingLeft: Spacing.FILTER_MODAL_PADDING / 2},
                ]}>
                <View style={[Styles.titleContainer]}>
                  <Text style={Styles.titleStyles}>Coin</Text>
                </View>
                <CustomDropDown
                  items={Coins}
                  defaultValue={cointValue}
                  onChangeItem={(item: any) => setCoinValue(item.value)}
                  width={Spacing.WIDTH_SCALE_280}
                  height={Spacing.FILTER_COMPONENT_HEIGHT}
                />
              </View>
              <View style={[Styles.thirdRowStyle]}>
                <View
                  style={[
                    Styles.titleContainer,
                    {paddingLeft: Spacing.FILTER_MODAL_PADDING / 2},
                  ]}>
                  <Text style={Styles.titleStyles}>Date</Text>
                </View>
                <View style={Styles.dateSepratorContainer}>
                  <ShowDate
                    onDate={(date: any) => {
                      setStartDate(date);
                    }}
                  />
                  <ShowDate
                    onDate={(date: any) => {
                      setEndDate(date);
                    }}
                  />
                </View>
              </View>

              <View style={Styles.lastrowContainerStyle}>
                <View style={[Styles.firstRowStyle]}>
                  <View style={Styles.titleContainer}>
                    <Text style={Styles.titleStyles}>Type</Text>
                  </View>
                  <CustomDropDown
                    items={Types}
                    defaultValue={type}
                    onChangeItem={(item: any) => setType(item.value)}
                    width={Spacing.WIDTH_SCALE_135}
                    height={Spacing.FILTER_COMPONENT_HEIGHT}
                  />
                </View>
                <View style={[Styles.firstRowStyle]}>
                  <View style={[Styles.titleContainer]}>
                    <Text style={Styles.titleStyles}>Status</Text>
                  </View>
                  <View style={{alignItems: 'flex-start'}}>
                    <CustomDropDown
                      items={Status}
                      defaultValue={status}
                      onChangeItem={(item: any) => setStatus(item.value)}
                      width={Spacing.WIDTH_SCALE_135}
                      height={Spacing.FILTER_COMPONENT_HEIGHT}
                    />
                  </View>
                </View>
              </View>
              <View style={[Styles.lowLevelPosition]}>
                <Button
                  buttonBackgroundColor={
                    Colors.STANDARD_SHADOW_TEXT_BUTTON_COLOR
                  }
                  textColor={Colors.STANDARD_FILL_TEXT_BUTTON_COLOR}
                  title="Continue"
                  onPress={() => {
                    dispatch(removeAllTraansactionFilters([]));
                    makeFilterChips(), onPress();
                  }}
                  buttonWidth={Spacing.WIDTH_SCALE_280}
                  buttonHeight={Spacing.HEIGHT_BUTTON}
                  borderRadius={Spacing.BORDER_RADIUS_8}
                  fontSize={Typography.FONT_SIZE_14}
                  fontFamily={Typography.FONT_MEDIUM.fontFamily}
                />
              </View>
            </View>
          </View>
        </ThemeProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionFilterModal;

const Styles = StyleSheet.create({
  headerContainer: {
    height: '10%',
    justifyContent: 'center',
    paddingLeft: Spacing.HEADER_MAIN_PADDING / 2,
    paddingRight: Spacing.HEADER_MAIN_PADDING / 2,
    backgroundColor: Colors.CARD_CONTAINER_COLOR,
    borderRadius: Spacing.BORDER_RADIUS_8 * 2,
  },
  modalView: {
    flex: 1,
    backgroundColor: Colors.WALLET_BG_COLOR,
    borderRadius: Spacing.BORDER_RADIUS_8 * 2,
  },
  componentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemsPositoion: {
    height: '85%',
    justifyContent: 'center',
  },
  lowLevelPosition: {
    marginTop: Spacing.MARGIN_3 * 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: Typography.FONT_SEMIBOLD.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.ICON_CLOSE_OUTLINE_COLOR,
  },
  firstRowStyle: {
    flexDirection: 'column',
  },
  titleContainer: {
    alignItems: 'flex-start',
  },
  titleStyles: {
    color: Colors.FILTER_ITEM_TITLE_COLOR,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_MEDIUM.fontFamily,
    marginBottom: Spacing.MARGIN_1,
  },
  thirdRowStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  dateSepratorContainer: {
    flexDirection: 'row',
    paddingLeft: Spacing.DATE_PICKER_PADDING,
    paddingRight: Spacing.DATE_PICKER_PADDING,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lastrowContainerStyle: {
    paddingLeft: Spacing.DATE_PICKER_PADDING,
    paddingRight: Spacing.DATE_PICKER_PADDING,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
