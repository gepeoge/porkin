import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create ({container: {flex: 1, backgroundColor: '#fff', paddingTop: 10, marginTop: 0, width: '100%'},scrollContainer: {width: '100%'},

itemsContainer: {borderTopLeftRadius: 10, borderTopRightRadius: 10, alignItems: 'stretch', backgroundColor: '#fff'},

inputContainer: {flex: 1, marginTop: 0, width: '100%', padding: 10, alignItems: 'stretch', backgroundColor: '#fff'},

buttonsContainer: {flexDirection: 'stretch', borderBottomWidth: 1, borderBottomColor: '#CCC', paddingBottom: 10, marginTop: 10},

input: {marginTop: 10, height: 60, backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 24, fontSize: 16, alignItems: 'stretch'},

button: {marginTop: 10, marginBottom: 10, marginLeft: 5, marginRight: 5, height: 60, backgroundColor: 'blue', borderRadius: 5, paddingHorizontal: 24, fontSize: 16, alignItems: 'center', justifyContent: 'center', elevation: 20, shadowOpacity: 20, shadowColor: '#ccc'},

buttonText: {color: '#fff', fontWeight: 'bold'},

buttonTextBig: {color: '#fff', fontWeight: 'bold', fontSize: 24},

textItem: {marginLeft: '5%', fontSize: 20, width: '80%', info: {
    marginLeft: '5%', fontSize: 15, width: '80%', color: 'grey'
    }
},

deleteButton: {marginLeft: 0, height: 40,alignSelf: 'center', width: '90%',backgroundColor: 'red', borderRadius: 5, padding: 10, fontSize: 12, elevation: 10, shadowOpacity: 10, shadowColor: '#ccc', alignItems: 'center'},

});