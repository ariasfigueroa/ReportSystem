import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textTitle: {
    fontSize: 16,
    color: '#b8bece',
    fontWeight: '500',
    marginLeft: 60,
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3c4560',
    marginLeft: 60,
  },
  wrapper: {
    width: '100%',
    marginTop: 10,
    paddingLeft: 20,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginLeft: 0,
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  subtitleText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#b8bece',
    marginTop: 20,
    marginLeft: 20,
    textTransform: 'uppercase',
  },
  cardContainer: {
    backgroundColor: 'white',
    width: 315,
    height: 280,
    borderRadius: 14,
    marginTop: 20,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: {width: 5, height: 15},
    shadowRadius: 8,
  },
  notificationIconeStyle: {
    position: 'absolute',
    top: 5,
    right: 20,
  },
});

export const cardStyles = StyleSheet.create({
  textTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    width: 170,
  },
  container: {
    backgroundColor: 'white',
    width: 315,
    height: 280,
    borderRadius: 14,
    marginTop: 20,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: {width: 5, height: 15},
    shadowRadius: 8,
  },
  cover: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  buttomContainer: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  logo: {
    width: 44,
    height: 44,
  },
  textCaption: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3c4560',
  },
  textSubtitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#b8bece',
    marginTop: 4,
  },
  wrapper: {
    flexDirection: 'column',
    marginLeft: 10,
  },
});

export const horizontalCardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 60,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: {width: 5, height: 10},
    shadowRadius: 8,
    borderRadius: 10,
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  image: {
    width: 36,
    height: 36,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export const ticketsStyles = StyleSheet.create({
  container: {
    width: 335,
    height: 340,
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: {width: 10, height: 20},
    shadowRadius: 8,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  cover: {
    height: 220,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingTop: 20,
    paddingLeft: 20,
  },
  content: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f3f5',
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingHorizontal: '20%',
  },
  caption: {
    fontSize: 15,
    fontWeight: '400',
    color: '#3c4560',
    maxWidth: 280,
    marginBottom: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: '300',
    color: '#b8bece',
    marginTop: 4,
  },
  touchableOpacityStyle: {
    paddingHorizontal: 40,
  },
});
