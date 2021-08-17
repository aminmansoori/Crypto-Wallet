import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, ThemeProvider, Image, Overlay} from 'react-native-elements';
import {Colors, Spacing, Typography} from '../../styles/index';
import MainHeader from '../../components/basecomponents/mainHeader';
import TransactionContainer from '../../components/basecomponents/transactionContainer';
import FilterModal from '../../components/compeletedcomponents/transactionFilterModal';
import {getTransactionDetailes} from '../../redux/actions/transactionFilter.action';
import {useDispatch} from 'react-redux';
import {transactions} from '../../data/transaction_mock_data';
interface Props {
  navigation?: any;
}

const theme = {};

const Wallet: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const [showTransaction, setShowTransaction] = useState<boolean>(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  useEffect(() => {
    dispatch(getTransactionDetailes(transactions));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {/* <View style={{flex: 1, alignItems: 'stretch'}}> */}
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={Styles.viewContainer}>
          <MainHeader
            sendOnPress={() => {
              setShowTransaction(true);
              // navigation.navigate('SendCrypto');
            }}
            receiveOnPress={() => {
              setShowTransaction(false);
              // navigation.navigate('ReceiveCrypto');
            }}
            BTCtoDollar="59979.5"
            growthRate=" 7.04"
            rightTextTitle="BTC"
            Balance="0.6"
            BalancetoDollar="59,911.00"
            height={showTransaction ? '25%' : '25%'}
          />
          <View style={Styles.transactionTitleStyle}>
            <Text style={Styles.termFontLogo}>Transactions</Text>
          </View>
          <View style={Styles.transactionPosition}>
            {showTransaction ? (
              <TransactionContainer
                filterOnPress={() => {
                  setShowFilterModal(true);
                }}
              />
            ) : (
              <View style={Styles.noTransactionViewContainer}>
                <Image
                  source={require('../../assets/images/Group-360.png')}
                  style={Styles.imageView}
                />
                <View style={Styles.bottomTextStyle}>
                  <Text style={Styles.lowLevelText}>
                    Lorem ipsum is placeholder
                  </Text>
                  <Text style={Styles.lowLevelText}>
                    text commonly uFilterModalsed in the
                  </Text>
                  <Text style={Styles.lowLevelText}>
                    graphic for previewing
                  </Text>
                  <Text style={Styles.lowLevelText}>layouts.</Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      <Overlay
        overlayStyle={Styles.overlayStyle}
        fullScreen={true}
        isVisible={showFilterModal}
        onBackdropPress={() => setShowFilterModal(!showFilterModal)}>
        <FilterModal
          onPress={() => {
            setShowFilterModal(!showFilterModal);
          }}
        />
      </Overlay>
      {/* </View> */}
    </ThemeProvider>
  );
};

export default Wallet;

const Styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: Colors.WALLET_BG_COLOR,
  },
  transactionPosition: {
    // flex: 7,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: Spacing.MARGIN_1,
  },
  imageView: {
    width: Spacing.IMAGE_SIZE,
    height: Spacing.IMAGE_SIZE,
  },
  termFontLogo: {
    fontFamily: Typography.FONT_SEMIBOLD.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.WALLET_TITLE_FONT_COLOR,
    marginBottom: Spacing.MARGIN_1,
  },
  lowLevelText: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    color: Colors.FONT_LIGHT_COLOR,
  },
  transactionTitleStyle: {
    marginTop: Spacing.MARGIN_2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomTextStyle: {
    width: '100%',
    height: '35%',
    alignItems: 'center',
    // backgroundColor:'green',
    justifyContent: 'flex-start',
  },
  overlayStyle: {
    height: '65%',
    width: '80%',
    padding: 0,
    borderRadius: Spacing.BORDER_RADIUS_8 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.CHIP_CONTAINER_BG_COLOR,
  },
  noTransactionViewContainer: {
    justifyContent: 'space-around',
    // backgroundColor:'red',
    width: '100%',
    height: '70%',
    alignItems: 'center',
    // paddingBottom: Spacing.MARGIN_5,
  },
});
