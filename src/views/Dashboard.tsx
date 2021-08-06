import React from 'react';
import {View, ScrollView, SafeAreaView, ActivityIndicator} from 'react-native';
import {styles} from './StylesDashboardModule';
import NavigationBar, {NavigationBarProps} from './components/NavigationBar';
import Subtitle, {SubtitleProps} from './components/Subtitle';
import Tickets from './components/Ticket';

interface DashboardProps {
  onChangeStatus: (payload: any) => void;
  navigationBarData: NavigationBarProps;
  subtitleSpamData: SubtitleProps;
  ticketsData: any[];
  loading: boolean;
}

const Dashboard = (props: DashboardProps) => {
  const {
    navigationBarData,
    subtitleSpamData,
    ticketsData,
    loading,
    onChangeStatus,
  } = props;

  const renderTicketData = () => {
    return (
      <ScrollView style={{paddingTop: 20}}>
        {ticketsData.map((element: any, index: any) => {
          return (
            <Tickets
              key={index}
              id={element.id}
              status={element.state}
              reportType={element.payload.reportType}
              referenceType={element.reference.referenceType}
              createdOn={element.created}
              message={element.payload.message}
              onBlockPress={() => {
                onChangeStatus({id: element.id, state: 'BLOCK'});
              }}
              onResolvePress={() => {
                onChangeStatus({id: element.id, state: 'RESOLVE'});
              }}
            />
          );
        })}
      </ScrollView>
    );
  };

  const Container = () => {
    if (loading) {
      return <ActivityIndicator />;
    }
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <NavigationBar
            title={navigationBarData.title}
            name={navigationBarData.name}
            image={navigationBarData.image}
          />
          <Subtitle subtitle={subtitleSpamData.subtitle} />
          {renderTicketData()}
        </SafeAreaView>
      </View>
    );
  };

  return <Container />;
};

export default Dashboard;
