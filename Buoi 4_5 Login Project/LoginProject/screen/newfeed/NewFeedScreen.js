import { Text, View, StyleSheet, ScrollView, Platform, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faPenClip, faEllipsis } from '@fortawesome/free-solid-svg-icons'

const dataAvatar = [
    {
        name: 'Sahara',
        image: require('../../asset/images/image1.jpeg'),
    },
    {
        name: 'Sophia',
        image: require('../../asset/images/image2.jpeg'),
    },
    {
        name: 'Hana',
        image: require('../../asset/images/image3.jpeg'),
    },
    {
        name: 'Naul',
        image: require('../../asset/images/image4.jpeg'),
    },
    {
        name: 'Kimihana',
        image: require('../../asset/images/image5.jpeg'),
    },
    {
        name: 'Yoko',
        image: require('../../asset/images/image6.jpeg'),
    },
    {
        name: 'Su',
        image: require('../../asset/images/image7.jpeg'),
    },
    {
        name: 'Finnia',
        image: require('../../asset/images/image8.jpeg'),
    },
    {
        name: 'Subana',
        image: require('../../asset/images/image9.jpeg'),
    },
    {
        name: 'Corohe',
        image: require('../../asset/images/image10.jpeg'),
    }
]

var dataFeeds = [
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Sahara",
        image: require('../../asset/images/image1.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "1 minutes",
        countHeart: 2,
        comment: 1
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Sophia",
        image: require('../../asset/images/image2.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "3 minutes",
        countHeart: 4,
        comment: 2
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Hana",
        image: require('../../asset/images/image3.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "5 minutes",
        countHeart: 6,
        comment: 5
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Naul",
        image: require('../../asset/images/image4.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "10 minutes",
        countHeart: 2,
        comment: 1
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Kimihana",
        image: require('../../asset/images/image5.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "1 minutes",
        countHeart: 2,
        comment: 1
    }
]

export default class DataBiding extends Component {
  state = {
      isRender: false
  }

  renderHeader = () => {
      return (
          <View style={styles.container_header}>
            <View style={styles.header}>
                <FontAwesomeIcon 
                    icon={faCamera}
                />
                <Text style={styles.header__text}>Feed</Text>
                <FontAwesomeIcon
                    icon={faPenClip}
                />
            </View>
          </View>
      )
  }  

  renderAvatars = () => {
    return  <View style={styles.avatar}><ScrollView horizontal >
              {
              dataAvatar.map((data,index) => (
                  <View style={styles.avatar__container}>
                      <Image style={styles.avatar__container__img} source={data.image} />
                      <Text>{data.name}</Text>
                  </View>
              ))
              }
          </ScrollView></View>
  }

  renderFeed = (dataFeed,index) => {
      return <View style={styles.feeds}>
          {this.renderHeaderFeed(dataFeed)}
          {this.renderFeedContent(dataFeed.content)}
          {this.renderFeedFooter(dataFeed,index)}
      </View>
  }

  renderHeaderFeed = (dataFeed) => {
      return <View style={styles.feed__header}>
          <Image style={styles.feed__img} source={dataFeed.image}/>
          <View style={{ flex:1, marginLeft:10}}>
            <Text>{dataFeed.title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={{flex:1,color:'#CCC'}}>{dataFeed.name}</Text>
                <Text style={{flex:1,color:'#CCC'}}>{dataFeed.time}</Text>
            </View>
          </View>
          <FontAwesomeIcon icon={faEllipsis} />
      </View>
  }

  renderFeedContent = (content) => {
      return <View style={styles.feed__content}>
            <Text>{content}</Text>
        </View>
  }

  renderFeedFooter = (item,index) => {
      return <View style={{flexDirection: 'row', alignItems: 'center',padding:10}}>
          <TouchableOpacity
            onPress={()=> this.onPressHeart(item,index)}
          >
            <Image style={{width:24, height: 24}} source={require("../../asset/heart.png")} />
          </TouchableOpacity>
          <Text style={{marginLeft:4}}>{item.countHeart}</Text>
          <TouchableOpacity>
            <Image style={{width:24, height: 24, marginLeft:10}} source={require("../../asset/comment.png")} />
          </TouchableOpacity>
          <Text style={{marginLeft:4}}>{item.comment}</Text>
      </View>
  }

  onPressHeart = (item,index) => {
    item.countHeart = item.countHeart + 1
    dataFeeds[index] = item;
    this.setState({
        isRender: true
    })
    console.log(dataFeeds[index].countHeart)
  }

  render() {
    return (
        <View style={styles.root}>
            {this.renderHeader()}
            {this.renderAvatars()}
            <ScrollView>
            {dataFeeds.map((data,index)=>(
                this.renderFeed(data,index)
            ))}
            </ScrollView>
            
        </View>
      
    )
  }
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor: '#E9EBEE'
    },

    container_header:{
        backgroundColor: '#FFF',
        height: Platform.OS === 'ios' ? 100 : 56,
        paddingTop: Platform.OS === 'ios' ? 64 : 0,
        paddingLeft: 20,
        paddingRight: 20
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header__text:{
        fontSize:16 ,
        fontWeight: '500'
    },

    avatar: {
        height:90,
        backgroundColor: '#FFF',
        marginTop:1,
    },
    avatar__container: {
        alignItems: 'center',
        margin: 10,
    },
    avatar__container__img: {
        height:56,
        width:56,
        borderRadius:28,
        flexWrap: 'nowrap'
    },

    feeds: {
        marginTop:1,
        backgroundColor: '#FFF'
    },
    feed__header: {
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    feed__img: {
        height:56,
        width:56,
        borderRadius:28
    },
    feed__content: {
        paddingBottom:4,
        paddingLeft: 10,
        paddingRight: 10
    }
})