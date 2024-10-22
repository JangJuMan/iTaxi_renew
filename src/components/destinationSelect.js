import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


class Top extends Component {
    constructor(props) {
        super(props);

        this.state = { expand: true };
        this.rotateAnimation = new Animated.Value(1);
    }
    

    locations = [
        ['한동대학교', '포항역', '시외버스터미널'],
        ['하나로마트', '커피유야', '그할마'],
        ['고속버스터미널', '영일대', 'E1'],
        ['육거리', '세차장'],
    ]

    componentDidMount() {
        this.expand_collapse_Function();
    }

    animating() {
        Animated.timing(this.rotateAnimation, {
            toValue: !this.state.expand,
            duration: 300,
            easing: Easing.linear,
        }).start();
    }

    expand_collapse_Function() {
        this.setState({ expand: !this.state.expand });
        this.animating();
    }

    renderLocations() {
        let list = [];
        let index = 0;
        
        this.locations.map((rows, index) => {
            if (!this.state.expand && index >= 2) return null;

            let temp_row = [];
            let temp_index = 0;
            rows.map(location => {
                temp_row.push(
                    <TouchableOpacity 
                        key={temp_index++}
                        onPress={() => {
                            this.props.onSelect(location)
                            this.setState({location})
                        }}>
                        <Text style={stylesTop.text}>{location}</Text>
                    </TouchableOpacity>
                )
            });
            list.push(
                <View key={index++} style={stylesTop.location_row}>
                    {temp_row}
                </View>
            )
        });

        return list;
    }

    render() {
        const rotateAnimate = this.rotateAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ['45deg', '-135deg'],
        });

        return (
            <View style={this.props.style}>
                <View style={stylesTop.searchBar}>
                    <TextInput
                        style={stylesTop.textinput}
                        placeholder="직접입력"
                        borderBottomColor='#888C90'
                        onChangeText={(text) => this.setState({ text })}
                        onSubmitEditing={({nativeEvent}) => this.props.onSelect(nativeEvent.text)}
                    />
                    <Icon
                        name="gps-not-fixed"
                        size={20}
                        style={stylesTop.gpsIcon}
                        color={'dodgerblue'}
                    />
                </View>

                <View style={stylesTop.location_table}>
                    {this.renderLocations()}

                    <TouchableOpacity 
                        activeOpacity = {0.7}
                        onPress={() => {this.expand_collapse_Function()}}
                    >
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Animated.View style={[stylesTop.arrow_down, {transform: [{ rotate: rotateAnimate }]}]} />
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}

const stylesTop = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
        searchBar: {
            flexDirection: 'row',
            alignItems: 'center',
        },
            textinput: {
                padding: 10,
                marginLeft: 10,
                marginRight: 10,
                flex: 2,
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                // fontFamily: "titleFont",
                fontWeight:"200"
            },
            gpsIcon: {
                marginTop: 10,
                flex: 1,
            },

        location_table: {
            flexDirection: 'column',
        },
            location_row: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 10,
                paddingRight: 10,
            },
                text: {
                    fontSize: 14,
                    color: '#888C90',
                    margin: 10,
                    // fontFamily: "titleFont",
                    fontWeight:"200"
                },

        arrow_down: {
            margin: 10,
            width: 10,
            height: 10,
            borderRightWidth: 2,
            borderBottomWidth: 2,
            borderColor: '#4D8ECF',
        },
});

class Bottom extends Component {
    render() {
        return (
            <View style={[stylesBottom.container, this.props.style]}>
                <Text style={stylesBottom.log_title}>최근 검색 기록</Text>

                <View style={stylesBottom.log_row}>
                    <Text style={stylesBottom.log_text}>한동대학교</Text>
                    <View style={stylesBottom.line} />
                    <Text style={stylesBottom.log_text}>포항역</Text>
                </View>

                <View style={stylesBottom.log_row}>
                    <Text style={stylesBottom.log_text}>커피유야</Text>
                    <View style={stylesBottom.line} />
                    <Text style={stylesBottom.log_text}>육거리</Text>
                </View>
            </View>
        );
    }
}

const stylesBottom = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
        log_title: {
            fontSize: 14,
            color: 'gray',
            marginLeft: 7,
            padding: 5,
        },
        log_row: {
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 20,
            paddingRight: 10,
        },
            log_text: {
                flex: 4,
                color: '#888C90',
                padding: 10,
                alignSelf: 'flex-start',
                // fontFamily: "titleFont",
                fontWeight:"200"
            },
            line: {
                flex: 3,
                borderTopWidth: 1,
                borderTopColor: 'gray',
            }
});

/**
 * @props onSelectLocation  Callback function after press location
 * @props onSelectLog   Callback function after press riding log
 * @props onSubmit  Callback function after press OK button
 */
export default class SelectModal extends Component {
    constructor(props) {
        super(props);

        let { onSubmit, onSelectLocation, onSelectLog } = this.props;
        this.onSubmit = onSubmit;
        this.onSelectLocation = onSelectLocation;
        this.onSelectLog = onSelectLog;
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <Top
                    onSelect={this.onSelectLocation}
                    style={{ marginBottom: 10, }}/>
                <View style={styles.line} />
                <Bottom
                    onSelect={this.onSelectLog}
                    style={{ marginBottom: 10, }} />
                {/* <TouchableOpacity style={styles.submit_btn}>
                    <Button
                        title="확인"
                        onPress={()=> {
                            this.props.onSubmit()
                        }} />
                </TouchableOpacity> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'column',
    },
        line: {
            borderWidth: 1,
            borderColor: '#C3C7CB',
            marginLeft: 10,
            marginRight: 10,
        },
});