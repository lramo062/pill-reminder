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
		Modal,
		TouchableHighlight,
		TextInput,
		Picker,
		ListView,
		FlatList,
		List,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import ActionButton from 'react-native-action-button';
import { Icon  } from 'react-native-elements'
import SvgUri from 'react-native-svg-uri';


export default class HomeScreen extends React.Component {

		state = { modalVisible: false,
				      deleteModalVisible: false,
							item_list: [{time: "Morning", name: "Test", marked: false}],
							time: null,
							name: null,
							time_list: ['Morning', 'Mid-Morning', 'Afternoon', 'Mid-Afternoon', 'Night'],
						}
		
		static navigationOptions = {
			header: null,
		};

		show_modal = () => {
			this.setState({modalVisible: true});
		}

		hide_modal = () => {
			this.setState({modalVisible: false, name: null, time: null});
		}

		show_delete_modal = () => {
			this.setState({deleteModalVisible: true});
		}

		hide_delete_modal = () => {
			this.setState({deleteModalVisible: false});
		}

		add_medication = () => {				
			medication_list = this.state.item_list;
			medication_list.push({time: this.state.time, name: this.state.name, marked: false});							
			this.setState({ modalVisible: false,
											item_list: medication_list,
											name: null,
											time: null});
			this.render();
		}

		delete_medication = () => {
			medication_list = this.state.item_list
						.filter(item => item.name !== this.state.marked_item && item.time !== this.state.marked_time)		
			this.setState({ modalVisible: false,
										  item_list: medication_list,
											name: null,
											time: null,
											marked_time: null,
											marked_index: null,
							        deleteModalVisible: false});
				this.render();
		}
		
		mark_item = () => {
			console.log(styles.markedItem)
			if (!styles.markedItem) {
				styles.markedItem = {
					color: 'rgba(0,0,0,0.5)',
					padding: 10,
					fontSize: 18,
					height: 44,
				}
			}
			else {
				styles.markedItem = null;
			}
			this.render();
		}
		
		render() {
				return (
						<View style={styles.container}>

						
							<FlatList
								data={this.state.time_list}
						    renderItem={({item}) =>
									< >											
										<Text style={styles.boldItem}>{item}</Text>
										<FlatList
											data={this.state.item_list}
											renderItem={({item}) =>
											  <Text style={styles.item}>{item.name}</Text>						
											}
											keyExtractor={(item, index) => item.name}			
										/>
									</>
								}						
								keyExtractor={(item,index) => item}					
							/>

						
							<Modal	animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {
								Alert.alert('Modal has been closed.');
							}}>

								<View style={styles.contentContainer}>
									<View style={styles.tabBarInfoText}>
										<Text> {"enter name:"} </Text>
										<TextInput onChangeText={(text) => this.setState({name: text})}
											style={{height: 50, width: 300, borderColor: 'gray', borderWidth: 1}}
											value={this.state.name}
										/>


										<Text> {"select time of day:"} </Text>
										<Picker selectedValue={this.state.time} style={{ height: 100, width: 200, marginLeft: 40, }}
											onValueChange={(itemValue, itemIndex) => this.setState({time: itemValue})}>
											<Picker.Item label="-- set me --" value="-- set me --" />
											<Picker.Item label="Morning" value="Morning" />
											<Picker.Item label="Mid-Morning" value="Mid-Morning" />
											<Picker.Item label="Afternoon" value="Afternoon" />
											<Picker.Item label="Mid-Afternoon" value="Mid-Afternoon" />
											<Picker.Item label="Night" value="Night" />
										</Picker>


										<View style={styles.rowContainer}>						
											<TouchableHighlight style={{						
												height: 40,
												width:100,
												borderRadius:10,
												backgroundColor: "#111100",
												marginLeft :0,
												marginRight:40,
												marginTop :140
											}}
											underlayColor="white"
											onPress={this.hide_modal}>
											<Button
												onPress={this.hide_modal}
													title="close"
													color="white"
													accessibilityLabel="Learn more about this purple button"
											/>
											</TouchableHighlight>

											<TouchableHighlight
												underlayColor="white"
												style={{
												height: 40,
												width:100,
												borderRadius:10,
												backgroundColor: "#03A9F4",
												marginLeft :40,
												marginRight:0,
												marginTop :140
											}}
											onPress={this.add_medication}>
											<Button
												onPress={this.add_medication}
												title="add"
												color="white"
												accessibilityLabel="Learn more about this purple button"
											/>
											</TouchableHighlight>	
										</View>										
									</View>
								</View>																		
							</Modal>


							<Modal animationType="slide" transparent={true} visible={this.state.deleteModalVisible}
								onRequestClose={() => {	
									Alert.alert('Modal has been closed.');
								}}>
								<View style={styles.tabBarInfoContainer}>
									<View style={styles.rowContainer}>
								
										<TouchableHighlight onPress={this.hide_delete_modal}
											style ={{						
											height: 40,
											width:100,
											borderRadius:10,
											backgroundColor: "#111100",
											marginLeft :0,
											marginRight:40,
											marginTop :10
										}}>
											<Button color="white" onPress={this.hide_delete_modal} title="cancel"
												accessibilityLabel="Learn more about this button"
											/>
								
										</TouchableHighlight> 
										
										<TouchableHighlight onPress={this.delete_medication}
											style ={{
												height: 40,
												width:100,
												borderRadius:10,
												backgroundColor: "red",
												marginLeft :40,
												marginRight:0,
												marginTop :10
											}}>
											<Button color="white" onPress={this.delete_medication} title="delete"
												accessibilityLabel="Learn more about this button"
											/> 
										</TouchableHighlight>
								
									</View>
								</View>
							</Modal>

						
				
								
							
					
																			
						{/*	<SectionList style={{marginTop: 20}} sections={this.state.medication_list}
								renderItem={({item, index, section, separators}) => 
									<View style={styles.rowContainer}>			
										<TouchableHighlight underlayColor="white"																					
											onPress={ () => {
												this.state.marked_index = index;
												this.state.marked_time = section.time;
												this.show_delete_modal();														   
											}
										}>
											<Text style={[styles.item, styles.markedItem]}>{item}</Text>
										</TouchableHighlight>


										<TouchableHighlight underlayColor="white"																					
											onPress={ () => {
												this.state.marked_index = index;
												this.state.marked_time = section.time;
												this.mark_item();
											}
										}>	
												<SvgUri width="20" height="20" source={require("../assets/images/outline-check_circle-24px.svg")}/>
										</TouchableHighlight>

									</View>
								}
								renderSectionHeader={({section}) => <Text style={styles.boldItem}>{section.time}</Text>}
								keyExtractor={(item, index) => index}/>	*/}
								
							<ActionButton style={{marginTop: 500}} buttonColor="#03A9F4" action						
								onPress={this.show_modal}
							/>
						</View>	
				)}
}
const styles = StyleSheet.create({
		container: {
				flex: 1,
				backgroundColor: '#fff',
		},
		rowContainer: {
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'space-between'
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
		// markedItem: {
		// 		color: 'rgba(0,0,0,0.5)',
		// 		padding: 10,
		// 		fontSize: 18,
		// 		height: 44,
		// },
		boldItem: {
				fontWeight: 'bold',
				padding: 10,
				fontSize: 22,
				height: 44,
		},
});
