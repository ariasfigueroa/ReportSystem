import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {NavigationBarProps} from '../views/components/NavigationBar';
import {SubtitleProps} from '../views/components/Subtitle';
import Dashboard from '../views/Dashboard';
import axios from 'axios';
import {Alert} from 'react-native';

const api = axios.create({
  baseURL: 'https://mocki.io/v1/cd349cfa-ff13-4cc0-9d20-ea4337751db2',
});

const DashboardController = () => {
  const [elements, setElements] = useState([]);
  const [resetData] = useState(0);
  const [loading, setLoading] = useState(true);

  const callAPI = () => {
    api.get('').then(response => {
      setElements(response.data.elements);
      setLoading(false);
    });
  };

  useEffect(() => {
    callAPI();
  }, [resetData]);

  const changeState = (payload: {id: string; state: string}) => {
    let obj = elements.find(f => f.id == payload.id);
    if (obj) {
      obj.state = payload.state;
    }
    if (payload.state === 'RESOLVE') {
      Alert.alert('Ticket solved', `${payload.id}`, [
        {
          text: 'OK',
          onPress: () => {
            const newData = elements.filter((element: any) => {
              return element.state != 'RESOLVE';
            });
            setElements([...newData]);
          },
        },
      ]);
    } else {
      setElements([...elements]);
    }
  };

  const fetchNavigationBar = (): NavigationBarProps => {
    return temp_navigation_bar_data;
  };

  const fetchSubtitleSpam = (): SubtitleProps => {
    return temp_subtitle_spam_data;
  };

  return (
    <Dashboard
      navigationBarData={fetchNavigationBar()}
      subtitleSpamData={fetchSubtitleSpam()}
      ticketsData={elements}
      loading={loading}
      onChangeStatus={changeState}
    />
  );
};

const temp_subtitle_spam_data: SubtitleProps = {
  subtitle: 'Tickets',
};

const temp_navigation_bar_data: NavigationBarProps = {
  title: 'Spam repoting system',
  name: 'Aldo Arias',
  image: require('../../assets/avatar.jpg'),
};

export default DashboardController;
