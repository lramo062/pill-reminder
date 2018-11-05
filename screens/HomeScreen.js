import React from 'react';
import {
		Image,
		Platform,
		ScrollView,
		StyleSheet,
		Text,
		TouchableOpacity,
		View,
		Button,
		Alert,
		ImageBackground,
		SectionList,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import AddTodoButton from '../components/AddButton';

export default class HomeScreen extends React.Component {
		static navigationOptions = {
				header: null,
		};

		medication_list = [
				{title: 'Morgning', data: ['pill_1']},
				{title: 'Mid-Morgning', data: ['pill_1', 'pill_2', 'pill_3']},
				{title: 'Afternoon', data: ['pill_2', 'pill_3', 'pill_4', 'pill_4']},
				{title: 'Mid-Afternoon', data: ['pill_1', 'pill_2', 'pill_3']},
				{title: 'Night', data: ['pill_2', 'pill_3', 'pill_4', 'pill_4']},				
		];

		
		
		render() {
				return (
						<View style={styles.container}>

						<SectionList
						sections={this.medication_list}
						renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
						renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
						keyExtractor={(item, index) => index}
						/>												
						</View>						
				);
		}

		_maybeRenderDevelopmentModeWarning() {
				if (__DEV__) {
						const learnMoreButton = (
								<Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
								Learn more
								</Text>
						);

						return (
								<Text style={styles.developmentModeText}>
								Development mode is enabled, your app will be slower but you can use useful development
								tools. {learnMoreButton}
								</Text>
						);
				} else {
						return (
								<Text style={styles.developmentModeText}>
								You are not in development mode, your app will run at full speed.
																																			</Text>
						);
				}
		}

		_handleLearnMorePress = () => {
				WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
		};

		_handleHelpPress = () => {
				WebBrowser.openBrowserAsync(
						'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
				);
		};
}

const styles = StyleSheet.create({
		container: {
				flex: 1,
				backgroundColor: '#fff',
		},
		backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
		developmentModeText: {
				marginBottom: 20,
				color: 'rgba(0,0,0,0.4)',
				fontSize: 14,
				lineHeight: 19,
				textAlign: 'center',
		},
		contentContainer: {
				marginTop: 50,
				alignItems: 'center',
				justifyContent: 'center',
		},
		welcomeContainer: {
				alignItems: 'center',
				marginTop: 10,
				marginBottom: 20,
		},
		welcomeImage: {
				width: 100,
				height: 80,
				resizeMode: 'contain',
				marginTop: 3,
				marginLeft: -10,
		},
		getStartedContainer: {
				alignItems: 'center',
				marginHorizontal: 50,
		},
		homeScreenFilename: {
				marginVertical: 7,
		},
		codeHighlightText: {
				color: 'rgba(96,100,109, 0.8)',
		},
		codeHighlightContainer: {
				backgroundColor: 'rgba(0,0,0,0.05)',
				borderRadius: 3,
				paddingHorizontal: 4,
		},
		getStartedText: {
				fontSize: 17,
				color: 'rgba(96,100,109, 1)',
				lineHeight: 24,
				textAlign: 'center',
		},
		tabBarInfoContainer: {
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				...Platform.select({
						ios: {
								shadowColor: 'black',
								shadowOffset: { height: -3 },
								shadowOpacity: 0.1,
								shadowRadius: 3,
						},
						android: {
								elevation: 20,
						},
				}),
				alignItems: 'center',
				backgroundColor: '#fbfbfb',
				paddingVertical: 20,
		},
		tabBarInfoText: {
				fontSize: 17,
				color: 'rgba(96,100,109, 1)',
				textAlign: 'center',
		},
		navigationFilename: {
				marginTop: 5,
		},
		helpContainer: {
				marginTop: 15,
				alignItems: 'center',
		},
		helpLink: {
				paddingVertical: 15,
		},
		helpLinkText: {
				fontSize: 14,
				color: '#2e78b7',
		},
		sectionHeader: {
				paddingTop: 2,
				paddingLeft: 10,
				paddingRight: 10,
				paddingBottom: 2,
				fontSize: 14,
				fontWeight: 'bold',
				backgroundColor: 'rgba(247,247,247,1.0)',
		},
		item: {
				padding: 10,
				fontSize: 18,
				height: 44,
		},
});
