import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ThemeProvider, Text} from 'react-native-elements';
import {Colors, Spacing, Typography} from '../../styles/index';
import CustomChip from '../compeletedcomponents/CustomChip';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {
  removeAllTraansactionFilters,
  removeFromTransactionFilters,
} from '../../redux/actions/transactionFilter.action';

interface Props {
  filters?: any;
  closePress?: any;
}

const theme = {
  Text: {
    style: {
      fontFamily: Typography.FONT_LIGHT,
      color: Colors.WRONG_INPUT_TEXT_COLOR,
      fontSize: Typography.FONT_SIZE_14,
    },
  },
};

const ChipContainer: React.FC<Props> = ({filters, closePress}) => {
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <View style={[Styles.viewContainer]}>
        <FlatList
          horizontal={true}
          data={filters}
          renderItem={({item}) => {
            return (
              <View style={{marginLeft: 5}}>
                <CustomChip
                  text={item.filter}
                  icon="close"
                  iconOnPress={() => {
                    dispatch(removeFromTransactionFilters({filter: item.filter, id: item.id}));
                  }}
                />
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
        <Icon
          name="close-circle"
          size={Spacing.ICON_SIZE}
          color={Colors.ICON_CLOSE_BACKGROUND_COLOR}
          onPress={() => dispatch(removeAllTraansactionFilters([]))}
        />
      </View>
    </ThemeProvider>
  );
};

export default ChipContainer;

const Styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    height: Spacing.SEARCHBAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
