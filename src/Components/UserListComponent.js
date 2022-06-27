
import React from 'react'
import { ScrollView, StyleSheet,Pressable} from 'react-native';
import UserComponent from './UserComponent';

const UserListComponent = (props) => { 
  const [text, setText] = React.useState('');
  const {setUserSelected,listrevenus,userselected} = props;

  //console.log(listrevenus)

  const list = require ('../../assets/data.json');
    
  return (
          
        <ScrollView horizontal={true} style={{display:'flex', flexDirection:'row'}}>

        {list.map((item, index) => {
            return (
                <Pressable key={index} onPress={() => {
                  console.log("USER SELECTED:",item.user,"INDEX:",index,"LISTREVENUS:",listrevenus[index])
                  setUserSelected(index)
                }}><UserComponent userselected={userselected} revenu={listrevenus[index]} item={item} index={index}/></Pressable>
        )
    })}
    </ScrollView>
  );
};

export default UserListComponent

const styles = StyleSheet.create({})