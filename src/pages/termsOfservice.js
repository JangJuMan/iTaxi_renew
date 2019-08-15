import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { vh, vw } from 'react-native-expo-viewport-units';


export default class service extends Component {
    state = {
        checked: false,
        s_checked: false,
    }


    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <View style = {styles.head}>
                    <Text style = {styles.headtext}>약관 동의</Text>
                </View>
            ),
            
        };
    };
    
    render() {
        return(
            <View style  = {styles.container}>
                
                <View>
                    <Text style = {styles.text}>이용약관</Text>
                        <View style = {styles.block}>
                            <View style = {styles.box}>
                                <ScrollView>
                                    <Text>hi</Text>
                                </ScrollView>
                            </View>
                        </View>
                </View>
                
                <CheckBox
                    size = {vw(6)}
                    title = '약관을 모두 읽었으며 동의합니다.'
                    checked = {this.state.checked}
                    checkedColor = 'gray'
                    onPress = {() => this.setState({checked: !this.state.checked})}
                />
                <View style = {{margin: vw(1)}}></View>

                <View>
                    <Text style = {styles.text}>개인정보 보호를 위한 동의 사항</Text>
                        <View style = {styles.block}>
                            <View style = {styles.box}>
                                <ScrollView>
                                    <Text>{this.userinfo}</Text>
                                </ScrollView>
                            </View>
                        </View>
                </View>
                <CheckBox
                    size = {vw(6)}
                    title = '약관을 모두 읽었으며 동의합니다.'
                    checked = {this.state.s_checked}
                    checkedColor = 'gray'
                    onPress = {() => this.setState({s_checked: !this.state.s_checked})}
                />
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {()=> this.props.navigation.navigate('Home')}>
                    <Text style = {styles.buttontext}>확인</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
    userinfo="iTaxi개인정보보호정책\n\t1. 한동 대학교 CRA iTaxi팀은 귀하의 개인정보보호를 매우 중요시하며, [정보통신망이용촉진등에관한법률]상의 개인정보보호 규정 및 정보통신부가 제정한 [개인정보 보호지침]을 준수하고 있습니다.한동대학교 CRA iTaxi팀은 개인정보보호방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.\n\t2. 한동대학교 CRA iTaxi팀은 개인정보보호방침의 지속적인 개선을 위하여 개인정보보호 방침을 개정하는데 필요한 절차를 정하고 있습니다. 그리고 개인정보보호방침을 개정하는 경우 버전번호 등을 부여하여 개정된 사항을 귀하께서 쉽게 알아볼 수 있도록 하고 있습니다.\n\t3. 개인정보 수집에 대한 동의\n한동대학교 CRA iTaxi팀은 귀하께서 한동대학교 CRA의 개인정보보호방침 또는 이용약관의 내용에 대해 \'약관을 모두 읽었으며 동의합니다.\’ 체크 버튼을 클릭할 수 있는 절차를 마련하여, 체크 버튼을 클릭하면 개인정보 수집에 대해 동의한 것으로 봅니다.\ni7의 개인정보 보호정책은 다음과 같은 내용을 담고 있습니다.\n\t가. 개인정보의 수집목적 및 이용목적\n\t나. 세션에 의한 개인정보 수집 \n\t다. 목적 외 사용 및 제3자에 대한 제공\n\t라. 개인정보의 열람정정\n\t마. 개인정보 수집, 이용, 제공에 대한 동의철회\n\t바. 개인정보의 보유기간 및 이용기간\n\t사. 개인정보보호를 위한 기술적 대책\n\t아. 개인정보의 위탁처리\n\t자. 의견수렴 및 불만처리\n\t차. 개인정보 관리책임자 \n\n가. 개인정보의 수집목적 및 이용목적\n\t1. 한동대학교 CRA iTaxi팀은 다음과 같은 목적을 위하여 개인정보를 수집하고 있습니다.\n\t\t- 서비스제공을 위한 계약의 성립(본인식별 및 본인의사 확인 등)\n\t\t- 편리한 서비스 제공을 위한 기본 정보 수집\n\t2. 단, 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활등)는 수집하지 않습니다.\n\t3. 한동대학교 CRA iTaxi팀은 한동대학교 인트라넷 특성인 정보폐쇄성을 살리기 위하여 귀하에게서 이름과 학번을 수집하고 있습니다. 올바르지 못한 정보를 입력하실 경우 사이트 가입은 거부됩니다. 또한, 편리한 서비스 제공을 위해 귀하의 휴대전화번호 11자리를 수집하고 있습니다.\n\n나. 세션에 의한 개인정보 수집\n한동대학교 CRA iTaxi팀은 귀하에 대한 정보를 저장하고 수시로 찾아내는 '세션'를 사용 합니다. 세션은 웹사이트가 귀하의 컴퓨터 브라우저(넷스케이프, 인터넷 익스 플로러 등)로 전송하는 소량의 정보입니다. 귀하께서 웹사이트에 접속을 하시면 한동대학교 CRA 의 컴퓨터는 귀하의 브라우저에 있는 세션의 내용을 읽고, 귀하의 추가정보를 귀하의 컴퓨터에서 찾아 접속에 따른 성명 등의 추가 입력 없이 서비스를 제공할 수 있습니다. 세션은 귀하의 컴퓨터는 식별하지만 귀하를 개인적으로 식별하지는 않습니다. 또한 귀하는 세션에 대한 선택권이 있습니다. 웹브라우저의 옵션을 조정함으로써 모든 세션를 다 받아들이거나, 세션이 설치될 때 통지를 보내도록 하거나, 아니면 모든 세션를 거부할 수 있는 선택권을 가질 수 있습니다.다. 목적 외 사용 및 제3자에 대한 제공 \n\t1. 한동대학교 CRA iTaxi팀은 귀하의 개인정보를 개인정보의 수집목적 및 이용목적에서 고지한 범위내에서 사용하며, 동 범위를 초과하여 이용하거나 타인 또는 타기업기관에 제공하지 않습니다.\n\t2. 그러나 보다 나은 서비스 제공을 위하여 귀하의 개인정보를 제휴기관에게 제공하거나 또는 제휴기관과 공유할 수 있습니다. 개인정보를 제공하거나 공유할 경우에는 사전에 귀하께 제휴기관에 누구인지, 제공 또는 공유되는 개인정보항목이 무엇인지, 왜 그러한 개인정보가 제공되거나 공유되어야 하는지, 그리고 언제까지 어떻게 보호관리 되는지에 대해 개별적으로 전자우편 및 서면을 통해 고지하여 동의를 구하는 절차를 거치게 되며, 귀하께서 동의하지 않는 경우에는 제휴기관에게 제공하거나 제휴기관에게 공유하지 않습니다.\n\n라. 개인정보의 열람정정\n\t1. 귀하는 언제든지 등록되어 있는 귀하의 개인정보를 열람하거나 정정하실 수 있습니다. 개인정보를 열람하실 경우 메인화면에서 개인관리 메뉴를 이용하시길 바랍니다. 개인정보를 정정하실 경우 메인화면에서 MyPage -> 개인정보수정 버튼을 클릭하시기 바랍니다.\n\t2. 단 귀하는 이름과 학번을 정정하실 수 없습니다.\n\n마. 개인정보 수집, 이용, 제공에 대한 동의철회\n\t1. 회원가입 등을 통해 개인정보의 수집, 이용, 제공에 대해 귀하께서 동의하신 내용을 귀하는 언제든지 철회하실 수 있습니다. 동의철회는 개인정보관리책임자에게 E-mail, 전화, 집적방문 등으로 연락하시면 즉시 개인정보의 삭제 등 필요한 조치를 하겠습니다.\n\t2. 한동대학교 CRA iTaxi팀은 개인정보의 수집에 대한 동의철회(회원탈퇴)를 개인정보 수집시와 동등한 방법 및 절차로 행사할 수 있도록 필요한 조치를 하겠습니다.\n\n첫째,이용자들이 사전에 공개에 동의한 경우\n\n둘째, 서비스 제공에 따른 요금정산을 위하여 필요한 경우\n\n셋째, 홈페이지에 게시한 이용 약관이나 기타 회원 서비스 등 이용약관 또는 정책을 위반한 경우\n\n넷째, iTaxi 서비스를 이용하여 타인에게 정신적, 물질적 피해를 줌으로써 그에 대한 법적인 조치를 취하기 위하여 개인정보를 공개해야 한다고 판단되는 충분한 근거가 있는 경우\n\n다섯째, 기타 법에 의해 요구된다고 선의로 판단되는 경우\n\n(ex. 관련법에 의거 적법한 절차에 의한 정부/수사기관의 요청이 있는 경우 등)\n\n여섯째, 통계작성, 학술연구나 시장조사를 위하여 특정개인을 식별할 수 없는 형태로 광고주, 협력업체나 연구단체 등에 제공하는 경우\n\n일곱째, 이용자의 서비스 이용에 따른 불만사항 및 문의사항(민원사항)의 처리를 위하여 파.항의 고객센터를 운영하는 전문업체에 해당 민원사항의 처리에 필요한 개인정보를 제공하는 경우\n\n바. 개인정보의 보유기간 및 이용기간\n\t1. 귀하 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은 목적이 달성되면 파기됩니다.\n\t\t- 회원가입정보의 경우, 회원가입을 탈퇴하거나 회원에서 제명된 즉시\n\t2. 위 보유기간에도 불구하고 계속 보유하여야 할 필요가 있을 경우에는 귀하의 동의를 받겠습니다.\n\n사. 개인정보보호를 위한 기술적 대책\n한동대학교 CRA iTaxi팀은 귀하의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고 있습니다.\n\t1. 귀하의개인정보는 특별히 인가된 책임 관리자 이외에 접근 또는 보관, 관리 할 수 없습니다.\n\t2. 귀하의 개인정보 보호를 위하여 책임자에게 지속적인 개인정보 보호교육을 실시합니다.\n\t3. 귀하의 비밀번호는 안전하게 암호화되어 저장되기 때문에 관리자도 볼 수 없습니다.\n\n아. 개인정보의 위탁처리\n한동대학교 CRA iTaxi팀은 서비스 향상을 위해서 귀하의 개인정보를 외부에 위탁하여 처리할 수 있습니다.\n\t1. 개인정보의 처리를 위탁하는 경우에는 미리 그 사실을 귀하에게 고지하겠습니다.\n\t2. 개인정보의 처리를 위탁하는 경우에는 위탁계약 등을 통하여 서비스제공자의 개인정보보호 관련 지시엄수, 개인정보에 관한 비밀유지, 제3자 제공의 금지 및 사고시의 책임부담 등을 명확히 규정하고 당해 계약내용을 서면 또는 전자적으로 보관하겠습니다.\n\n자. 의견수렴 및 불만처리\n한동대학교 CRA iTaxi팀은 개인정보보호와 관련하여 귀하가 의견과 불만을 제기할 수 있는 창구를 개설하고 있습니다. 개인정보와 관련한 불만이 있으신 분은 한동대학교 CRA iTaxi 의 개인정보 관리책임자에게 의견을 주시면 접수 즉시 조치하여 처리결과를 통보해 드립니다.\n\n차. 개인정보 관리책임자\n한동대학교 CRA iTaxi팀은 개인정보에 대한 의견수렴 및 불만처리를 담당하는 관리책임자를 지정하고 있습니다. 한동대학교 CRA iTaxi팀의 개인정보 관리책임자는 다음과 같습니다.\n\n개인 정보 관리 책임자\n이 　　름　: 최 효 은\n소속 / 직위　:　한동대학교 CRA / iTaxi 팀장\nE - M A I L　: cra.handong.service@gmail.com"
}

const styles = StyleSheet.create({
    container: {
        height: vh(70),
    },
    head: {
        height: vh(10),
        //marginTop: vh(3),
        backgroundColor: '#3FA9F5',
        justifyContent: 'center',
    },
        headtext: {
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: 10,
            fontSize: vw(6),
        },
    block: {
        justifyContent: 'center',
        alignItems: 'center'

    },
    box: {
        height: vh(23),
        width: vw(85),
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#999999'
    },
    text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: vw(5),
        padding: vw(3),
    },
    button: {
        backgroundColor: '#3FA9F5',
        borderRadius: 4,
        alignContent: 'stretch',
        margin: vw(3)
    },
        buttontext: {
            textAlign: 'center',
            color: 'white',
            padding: vw(5),
        }
})
