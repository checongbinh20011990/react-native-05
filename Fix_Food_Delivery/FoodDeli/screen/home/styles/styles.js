import { StyleSheet } from 'react-native'
import { COLORS, SIZES, STYLES } from '../../../common/Theme'

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.lightGray2
    },  
    icon: {
        width: 24,
        height: 24,
    },
    appbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: SIZES.padding * 2
    },
    app_title:{
        backgroundColor: COLORS.lightGray2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        borderRadius: SIZES.radius,
        height: 50
    },

    category: {
        padding: SIZES.padding * 2
    },
    category__text: {
        fontFamily: 'Roboto-Black',
        fontSize: 30,
        lineHeight: 36
    },

    category_list:{
        padding: SIZES.padding,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
        margin: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
        backgroundColor: COLORS.white,
        ...STYLES.shadow
    },
    category_list__selected:{
        backgroundColor: COLORS.primary,
    },
    category_list__circle: {
        width: 50,
        height: 50,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SIZES.padding
    },
    category_list__circle__icon: {
        width: 24,
        height: 24
    },
    category_list__text:{
        fontFamily: 'Roboto-Regular',
        lineHeight: 22,
        fontSize: 12
    },
    category_list__text__selected:{
        color: COLORS.white
    },

    menu: {
        padding: SIZES.padding * 2
    },

    menu__img:{
        width: '100%',
        height: 200,
        borderRadius: SIZES.radius
    },
    menu__duration: {
        position: 'absolute',
        bottom: 0,
        padding: SIZES.padding * 2,
        width: SIZES.width * 0.3,
        backgroundColor: COLORS.white,
        borderTopRightRadius: SIZES.radius,
        borderBottomLeftRadius: SIZES.padding,
        
    },
    menu__duration__text: {
        marginBottom: SIZES.padding,
        marginLeft: SIZES.padding
    },
    
    menu__title: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20
    },
    menu_type: {
        flexDirection: 'row'
    },
    menu_type__icon:{
        width:16,
        height: 16
    },
    marginRight8: {
        marginRight: 8
    }
})