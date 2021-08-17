import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ThemeProvider, Text} from 'react-native-elements';
import {Colors, Spacing, Typography} from '../../styles/index';
import CustomChip from '../compeletedcomponents/CustomChip';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers/index';
import {
  removeFromSentPhrases,
  addToShownPhrases,
} from '../../redux/actions/phrases.action';

interface Props {}

const theme = {
  Text: {
    style: {
      fontFamily: Typography.FONT_LIGHT,
      color: Colors.WRONG_INPUT_TEXT_COLOR,
      fontSize: Typography.FONT_SIZE_14,
    },
  },
};

const ChipContainer: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const {sentPhrases,fixedPhrases} = useSelector(
    (state: RootState) => state.phrases,
  );
  const [orderValidation, setorderValidation] = useState(true);
  const [wellDone, setWellDone] = useState(false);

  const comparePhrases = () =>
    {
      try {
        var phrasesAreSame = true;
        for (var phrase in sentPhrases) {
          if (sentPhrases[phrase].id !== fixedPhrases[phrase].id) {
            phrasesAreSame = false;
            break;
          }
        }
        if (
          phrasesAreSame &&
          fixedPhrases.length > 1 &&
          sentPhrases.length == fixedPhrases.length
        ) {
          setWellDone(true);
        } else {
          setWellDone(false);
        }
        return phrasesAreSame
      } catch (err) {
        console.log('err= ', err);
        return false;
      }
    };

  useEffect(() => {
    new Promise(() => {
      setorderValidation(comparePhrases());
    });
  });

  return (
    <ThemeProvider theme={theme}>
      <View
        style={[
          Styles.viewContainer,
          {
            borderColor: !orderValidation ? Colors.WRONG_INPUT_TEXT_COLOR : '',
            borderWidth: !orderValidation ? 1 : 0,
          },
        ]}>
        <FlatList
          horizontal={false}
          numColumns={4}
          data={sentPhrases}
          renderItem={({item}) => {
            return (
              <View style={{margin: 5}}>
                <CustomChip
                  text={item.title}
                  onPress={() => {
                    dispatch(
                      addToShownPhrases({title: item.title, id: item.id}),
                    );
                    dispatch(
                      removeFromSentPhrases({title: item.title, id: item.id}),
                    );
                  }}
                />
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
        <View style={{margin: 10}}>
          {orderValidation ? (
            wellDone ? (
              <Text
                style={{
                  fontSize: Typography.FONT_SIZE_14,
                  color: Colors.WELLDONE_TEXT_COLOR,
                  fontFamily: Typography.FONT_LIGHT.fontFamily,
                }}>
                well done!
              </Text>
            ) : null
          ) : (
            <Text
              style={{
                fontSize: Typography.FONT_SIZE_14,
                color: Colors.WRONG_INPUT_TEXT_COLOR,
                fontFamily: Typography.FONT_LIGHT.fontFamily,
              }}>
              invalid order. Try again!
            </Text>
          )}
        </View>
      </View>
    </ThemeProvider>
  );
};

export default ChipContainer;

const Styles = StyleSheet.create({
  viewContainer: {
    width: Spacing.WIDTH_SCALE_300,
    height: Spacing.HEIGHT_PHRASES_CONTAINER,
    backgroundColor: Colors.CHIP_CONTAINER_BG_COLOR,
    borderRadius: Spacing.BORDER_RADIUS_8,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
