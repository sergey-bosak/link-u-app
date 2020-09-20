import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native-ui-lib';
import BaseScreen from "../../components/BaseScreen";
import Title from "../../components/Title";
import {Button, TouchableOpacity} from "react-native";

const Dashboard = () => {
  const [data, setData] = useState({});

  async function getMoviesFromApi() {
    try {
      let response = await fetch('https://reactnative.dev/movies.json');
      let responseJson = await response.json();
      setData(responseJson);
      console.log(responseJson)
      return responseJson.movies;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <BaseScreen>
      <View center>
        <Title label="Your Links" width={'70%'} />
      </View>
     <View marginT-30 row spread>
       <TouchableOpacity style={{ borderBottomWidth: 2, width: '28%', height: '30%', justifyContent: 'center', alignItems: "center" }} onPress={getMoviesFromApi}>
         <Text text65>Video</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{ borderBottomWidth: 2, width: '28%', height: '30%', justifyContent: 'center', alignItems: "center" }} onPress={getMoviesFromApi}>
         <Text text65>Documents</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{ borderBottomWidth: 2, width: '28%', height: '30%', justifyContent: 'center', alignItems: "center" }} onPress={getMoviesFromApi}>
         <Text text65>Images</Text>
       </TouchableOpacity>
     </View>
    </BaseScreen>
  );
}

export default Dashboard;
