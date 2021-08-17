import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {SearchBar, Image, Text} from 'react-native-elements';
import {Colors, Spacing, Typography} from '../../styles/index';
import TransactionCard from '../../components/compeletedcomponents/transactionCard';
import {transactions} from '../../data/transaction_mock_data';
import Button from '../compeletedcomponents/customButton';
import FilterChip from '../basecomponents/filterChipContainer';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers/index';
import {filterEnum} from '../../utils/enum';
interface Props {
  filterOnPress?: any;
}

const theme = {};

const TransactionContainer: React.FC<Props> = ({filterOnPress}) => {
  const {transactionFilters} = useSelector(
    (state: RootState) => state.transactionFilters,
  );

  const [search, setSearch] = useState<string>('');
  const [transactionList, setTransactionList] = useState<any[]>([]);

  const filterTransaction = (cryptoTitle: string) => {
    var result = transactions;
    if (cryptoTitle.length > 0) {
      result = transactions.filter(
        (item) => item.cryptoTitle === cryptoTitle.toUpperCase(),
      );
      setSearch(cryptoTitle);
    } else {
      setSearch('');
    }
    setTransactionList(result);
  };

  const filterSearch = () => {
    var result = transactions;
    if (transactionFilters.length > 0) {
      var transactionId: String = transactionFilters.find(
        (filter) => filter.id === filterEnum.TRANSACTION.toString(),
      )?.filter;
      if (transactionId !== undefined) {
        result = result.filter((item) => item.transactionId === transactionId);
      }
      var coinValue: String = transactionFilters.find(
        (filter) => filter.id === filterEnum.COIN.toString(),
      )?.filter;
      if (coinValue !== undefined) {
        result = result.filter(
          (item) => item.cryptoTitle === coinValue.toUpperCase(),
        );
      }
      var startDate: String = transactionFilters.find(
        (filter) => filter.id === filterEnum.START_DATE.toString(),
      )?.filter;
      if (startDate !== undefined) {
        result = result.filter((item) => item.dateOfTransaction === startDate);
      }
      var endDate: String = transactionFilters.find(
        (filter) => filter.id === filterEnum.END_DATE.toString(),
      )?.filter;
      if (endDate !== undefined) {
        result = result.filter((item) => item.dateOfTransaction === endDate);
      }
      var type: String = transactionFilters.find(
        (filter) => filter.id === filterEnum.TYPE.toString(),
      )?.filter;
      if (type !== undefined) {
        result = result.filter((item) => item.typeOfTransaction === type);
      }
      var status: String = transactionFilters.find(
        (filter) => filter.id === filterEnum.STATUS.toString(),
      )?.filter;
      if (status !== undefined) {
        result = result.filter(
          (item) => item.statusOfTransaction === status.toUpperCase(),
        );
      }
    }
    setTransactionList(result);
  };

  useEffect(() => {
    setTransactionList(transactions);
    filterSearch();
  }, [transactionFilters]);

  return (
    <View style={Styles.viewContainer}>
      <View style={Styles.searchBarViewContainer}>
        <SearchBar
          platform="default"
          containerStyle={Styles.containerStyle}
          inputContainerStyle={Styles.inputContainerStyle}
          inputStyle={Styles.inputStyle}
          placeholderTextColor={Colors.SEARCHBAR_PLACEHOLDER_COLOR}
          showLoading={true}
          searchIcon={{size: Spacing.SEARCH_ICON_SIZE}}
          onChangeText={(text) => filterTransaction(text)}
          onClear={() => setSearch('')}
          placeholder="Type Here..."
          value={search}
        />
        <View style={Styles.filterView}>
          <Button
            title="Filter"
            icon="filter"
            buttonBackgroundColor={Colors.ICON_BUTTON_TEXT_COLOR}
            buttonBorderColor={Colors.ICON_BUTTON_TEXT_COLOR}
            shadowColor={Colors.FILTER_SHADOW_COLOR}
            iconColor={Colors.FILTER_ICON_COLOR}
            textColor={Colors.STANDARD_FILL_TEXT_BUTTON_COLOR}
            fontFamily={Typography.FONT_LIGHT.fontFamily}
            fontSize={Typography.FONT_SIZE_12}
            borderRadius={Spacing.BORDER_RADIUS_8}
            buttonHeight={Spacing.SEARCHBAR_HEIGHT}
            onPress={filterOnPress}
          />
        </View>
      </View>
      {transactionFilters.length > 0 ? (
        <View style={Styles.filterViewContainer}>
          <FilterChip filters={transactionFilters} />
        </View>
      ) : null}
      {transactionList.length > 0 ? (
        <View style={Styles.flatListContainer}>
          <FlatList
            style={{width: '100%'}}
            data={transactionList}
            renderItem={({item}) => {
              return (
                <View style={Styles.flatListView}>
                  <TransactionCard
                    cryptoTitle={item.cryptoTitle}
                    dateOfTransaction={item.dateOfTransaction}
                    statusOfTransaction={item.statusOfTransaction}
                    typeOfTransaction={item.typeOfTransaction}
                    _id={item.id}
                  />
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
          />
         </View>
      ) : (
        <View style={Styles.imageViewContainer}>
          <Image
            source={require('../../assets/images/MaskGroup31.png')}
            style={Styles.imageView}
          />
          <View style={Styles.lowLevelTextContainer}>
            <Text style={Styles.lowLevelText}>No items were found based</Text>
            <Text style={Styles.lowLevelText}>on your filters</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default TransactionContainer;

const Styles = StyleSheet.create({
  viewContainer: {
    paddingTop: Spacing.SEARCHBAR_TOP_PADDING,
    alignItems: 'center',
    width: '80%',
    height: '100%',
    padding: Spacing.SEARCHBAR_RIGHT_PADDING,
    backgroundColor: Colors.CARD_CONTAINER_COLOR,
    borderRadius: Spacing.BORDER_RADIUS_8,
  },
  searchBarViewContainer: {
    flexDirection: 'row',
    width: '100%',
    height: Spacing.SEARCHBAR_HEIGHT,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: Spacing.MARGIN_1,
  },
  containerStyle: {
    backgroundColor: 'transparent',
    height: '100%',
    borderWidth: 0,
    padding: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  inputContainerStyle: {
    backgroundColor: Colors.SEARCHBAR_BG_COLOR,
    width: Spacing.SEARCHBAR_WIDTH,
    borderRadius: Spacing.BORDER_RADIUS_8,
    height: '100%',
  },
  inputStyle: {
    fontFamily: Typography.FONT_MEDIUM.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.FONT_LIGHT_COLOR,
  },
  flatListView: {
    alignItems: 'center',
    marginBottom: Spacing.MARGIN_3,
  },
  filterView: {
    // flex: 1,
    padding: 1,
    marginLeft: Spacing.MARGIN_1,
  },
  filterViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.MARGIN_1,
    // height:'100%'
  },
  imageView: {
    width: Spacing.SEARCH_IMAGE_SIZE,
    height: Spacing.SEARCH_IMAGE_SIZE,
  },
  lowLevelText: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    color: Colors.SERACH_TITLE_NOT_FOUND_COLOR,
  },
  imageViewContainer: {
    // height:'60%',
    marginTop: Spacing.MARGIN_1 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: Spacing.MARGIN_5,
    // flex: 1,
  },
  lowLevelTextContainer: {
    marginTop: Spacing.MARGIN_1 * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContainer: {
    marginBottom: Spacing.MARGIN_5,
    width: '100%',
    height: '70%',
  },
});
