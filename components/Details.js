import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

const Details = ({route, navigation}) => {
  const {item} = route.params;

  const renderIngredientsItem = ({item}) => {
    return (
      <View
        style={[
          styles.ingredientItemWrapper,
          {
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.ingredientImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.headerLeft}>
                <Feather
                  name="chevron-left"
                  size={16}
                  color={colors.textDark}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.headerRight}>
              <MaterialCommunityIcons
                name="star"
                size={16}
                color={colors.white}
              />
            </View>
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        {/* Price */}
        <View style={styles.priceWrapper}>
          <Text style={styles.priceText}>$ {item.price}</Text>
        </View>

        {/* Pizza Info */}
        <View style={styles.infoWrapper}>
          <View style={styles.infoLeftWrapper}>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Size</Text>
              <Text style={styles.infoItemText}>
                {item.sizeName} {item.sizeNumber}"
              </Text>
              <Text style={styles.infoItemTitle}>Crust</Text>
              <Text style={styles.infoItemText}>{item.crust}</Text>
              <Text style={styles.infoItemTitle}>Delivery in</Text>
              <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
            </View>
          </View>
          <View style={styles.infoRightWrapper}>
            <Image source={item.image} style={styles.itemImage} />
          </View>
        </View>

        {/* Ingredients */}
        <View style={styles.ingredientsWrapper}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
          <View style={styles.ingredientsListWrapper}>
            <FlatList
              data={item.ingredients}
              renderItem={renderIngredientsItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Place an order */}
        <TouchableOpacity onPress={() => alert('Your order has been placed')}>
          <View style={styles.orderWrapper}>
            <Text style={styles.orderText}>Place an order</Text>
            <Feather name="chevron-right" size={18} color={colors.black} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    color: colors.textDark,
    width: '50%',
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: colors.price,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
  },
  infoWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.textLight,
  },
  infoItemText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: colors.textDark,
  },
  infoRightWrapper: {},
  itemImage: {
    resizeMode: 'contain',
    marginLeft: 50,
  },
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
  ingredientItemWrapper: {
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  ingredientImage: {
    resizeMode: 'contain',
  },
  orderWrapper: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: colors.textDark,
    marginRight: 10,
  },
});

export default Details;
