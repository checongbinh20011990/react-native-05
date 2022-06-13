import { Text, View, FlatList, SectionList, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import { RenderHeader } from './components/DemoText'
import DemoClassComponent from './components/DemoClassComponent'
/* 
    common:
*/

const dataFlatList = [
    {
        id:1,
        title: "Item 1.1"
    },
    {
        id:2,
        title: "Item 2.1"
    },
    {
        id:3,
        title: "Item 3.1"
    },
    {
        id:4,
        title: "Item 4.1"
    }
]

const dataSectionList = [
    {
        title: "Header 1",
        color: "red",
        data: [
            {
                id: 1,
                title: "Item 1.1"
            },
            {
                id: 2,
                title: "Item 1.2"
            },
            {
                id: 3,
                title: "Item 1.3"
            }
        ]
    },
    {
        title: "Header 2",
        color: "yellow",
        data: [
            {
                id: 1,
                title: "Item 2.1"
            },
            {
                id: 2,
                title: "Item 2.2"
            },
            {
                id: 3,
                title: "Item 2.3"
            }
        ]
    },
    {
        title: "Header 3",
        color: "blue",
        data: [
            {
                id: 1,
                title: "Item 3.1"
            },
            {
                id: 2,
                title: "Item 3.2"
            },
            {
                id: 3,
                title: "Item 3.3"
            }
        ]
    },
    {
        title: "Header 4",
        color: "green",
        data: [
            {
                id: 1,
                title: "Item 4.1"
            },
            {
                id: 2,
                title: "Item 4.2"
            },
            {
                id: 3,
                title: "Item 4.3"
            }
        ]
    }
]

export default class DemoProps extends Component {

  renderItem = ({item}) => {
    return(
        <Text>{item.title}</Text>
    )
  }

  renderHeaderSectionList = ({section}) => {
    return(
        <Text style={{
            padding: 20,
            backgroundColor: section.color,
            fontWeight: '500',
            margin: 10
        }}>{section.title}</Text>
    )
  }

  renderItemSectionList = ({item}) => {
    return(
        <Text style={{
            padding: 20,
            borderWidth: 1,
            margin: 10,
            borderRadius: 8
        }}>{item.title}</Text>
    )
  }

  render() {
    return (
      <SafeAreaView>
        {/* <RenderHeader data={data} title={"Hello react 1"} content="React Native buoi 6" />
        <RenderHeader data={data} title={"Hello react 2"} content="React Native buoi 7" /> */}
      
        {/* <FlatList 
          data={dataFlatList}
          renderItem={this.renderItem}
        /> */}

        <SectionList
            stickyHeaderIndices={false}
            sections={dataSectionList}
            renderSectionHeader={this.renderHeaderSectionList}
            renderItem={this.renderItemSectionList}
        />
      </SafeAreaView>
    )
  }
}