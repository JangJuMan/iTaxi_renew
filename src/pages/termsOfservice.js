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
                                    <Text>{this.userpromise}</Text>
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
                                    <Text>bye</Text>
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
    userpromise = "iTaxi 이용약관\n\t이용약관은 다음과 같은 내용을 담고 있습니다.\n\t\t제 1 장 총 칙\n\t\t제 2 장 권리 및 의무\n\t\t제 3 장 서비스 이용\n\t\t제 4 장 계약 해지\n제 1 장 총 칙\n\t제 1 조 (목적)\n\t본 약관은 한동대학교 CRA iTaxi팀이 제공하는 택시 및 자차 카풀 서비스(이하\"서비스\"라 합니다)의 이용 조건 및 절차 기타 필요한 제반 사항을 규정하여 상호 신뢰 증진을 목적으로 합니다.\n\n제 2 조 (용어의 정의)\n\t1. \"회원\"은 서비스를 제공받기 위하여 한동대학교 CRA iTaxi팀과 이용계약을 체결하고 이용자ID를 부여받은 자를 말합니다.\n\t2. \"이용계약\"은 서비스를 제공받기 위하여 한동대학교 CRA iTaxi와 체결하는 계약을 말합니다.\n\t3. \"이용자 ID\"는 회원의 식별과 회원의 서비스 이용을 위하여 회원의 한동대학교 학번을 말합니다.\n\t4. \"비밀번호\"는 회원이 사용하는 이용자 ID와 일치된 회원임을 확인하고 회원의 권리와 이익보호를 위하여 회원이 선정한 특정 문자의 조합을 말합니다.\n\t5. \"해지\"는 한동대학교 CRA iTaxi팀또는 회원이 이용계약을 해약하는 것을 말합니다.\n\n제 3 조 (이용약관의 공시 및 준용)\n\t1. 본 약관의 내용은 서비스 메뉴 및 한동대학교 CRA iTaxi팀에 게시하거나 기타의 방법으로 회원들에게 공시함으로서 그 효력을 발생합니다.\n\t2. 한동대학교 CRA는 불가피한 사정에 따라 본 약관을 변경할 수 있으며, 변경된 약관은 제 2조 1항의 방법을 통해 효력을 발생합니다.\n\n제 4 조 (약관외 준칙)\n한동대학교 CRA iTaxi팀은 필요한 경우 서비스 내의 개별항목에 대하여 개별약관 또는 운영원칙(이하 \'서비스별 안내\'라 합니다)를 정할 수 있으며, 이 약관과 서비스별 안내의 내용이 상충되는 경우에는 서비스별 안내의 내용을 우선하여 적용합니다.\n\n제 2장 권리 및 의무 \n제 5 조 (이용계약의 성립) \n1. 본 이용계약은 이용고객의 본 이용약관 내용에 대한 동의와 이용신청에 대하여 한동대학교 CRA iTaxi팀의 이용승낙으로 성립합니다.\n2. 본 이용약관에 대한 동의는 아래 \"약관을 모두 읽었으며 동의합니다.\" 란에 체크를 하셨을 때 이 약관에 동의하는 것으로 간주됩니다.\n\n제 6 조 (서비스 이용 신청)\n회원에 가입하여 서비스를 이용하고자하는 희망자는 한동대학교 CRA iTaxi팀에서 요청하는 실명 개인 신상정보를 제공해야 합니다.\n\n제 7 조 (이용 신청의 승낙과 제한)\n1. 한동대학교 CRA iTaxi팀은 제 4조 규정에 의한 이용 신청 고객에 대하여 업무 수행상 또는 기술상의 지장이 없는 경우 원칙적으로 접수 순서에 따라 서비스 이용을 승낙합니다.\n2. 한동대학교 CRA iTaxi팀은 다음 각 호의 1 에 해당하는 이용 신청에 대하여는 이를 승낙하지 아니 합니다.\n\t1) 실명이 아니거나 타인의 명의를 이용하여 신청한 경우 \n\t2) 이용계약 신청서의 내용을 허위로 기재한 경우 \n\t3) 사회의 질서나 미풍양속을 저해할 목적으로 신청한 경우\n\t4) 부정한 용도로 본 서비스를 이용하고자 하는 경우 \n3. 한동대학교 CRA iTaxi팀은 서비스 이용신청이 다음 각호의 1에 해당하는 경우에는 그 신청에 대하여 승낙 제한사유가 해소될 때까지는 승낙을 유보할 수 있습니다.\n\t1) 한동대학교 CRA iTaxi팀이 설비의 여유가 없는 경우\n\t2) 한동대학교 CRA iTaxi팀의 기술상 지장이 있는 경우 \n\t3) 기타 한동대학교 CRA iTaxi팀의 운영의 어려움이있는 경우\n4. 서버의 시스템 맹점을 이용하여 가입을 하였더라도 정확한 정보가 아닌 것은 한동대학교 CRA iTaxi팀측에서 정확한 정보를 요구 수정할 수 있으며, 이에 불응할 시 회원에게 강제 해지와 같은 조치를 취할 수 있습니다.\n\n제 8 조 (회원 번호 부여 및 변경 등)\n1. 한동대학교 CRA iTaxi팀은 회원에 대하여 약관에 정하는 바에 따라 이용자 ID를 부여합니다.\n2. 이용자 ID는 다음 각호의 1에 해당하는 경우에는 회원의 요청이나 관리자에 의하여 변경될 수 있습니다.\n\t1) 이용자 ID가 회원의 전화번호가 등록되어 사생활 침해의 우려가 있는 경우\n\t2) 타인에게 혐오감을 주거나 미풍양속에 어긋나는 경우 \n\t3) 기타 회원이 합리적인 사유를 제시하는 경우 \n3. 기타 회원이 이용신청 시 기재한 사항을 변경할 경우에는 관련 메뉴를 이용하여 회원이 수정을 할 수 있습니다.\n\n제 9 조 (한동대학교 CRA iTaxi팀의 권리 및 의무)\n1. 한동대학교 CRA iTaxi팀은 특별한 사정이 없는 한 회원이 신청한 서비스 제공 개시일부터 서비스를 이용할 수 있도록 합니다.\n2. 한동대학교 CRA iTaxi팀은 본 이용약관에서 정한 바에 따라 지속적으로 안정적 서비스를 제공할 의무가 있습니다.\n3. 한동대학교 CRA iTaxi팀은 서비스 제공과 관련하여 취득한 회원의 신상정보를 본인의 승낙 없이 제3자에게 누설 또는 배포할 수 없으며 상업적 목적으로 사용할 수 없습니다. 다만, 다음의 각 호에 해당하는 경우에는 그러하지 아니합니다.\n\t1) 정보통신서비스의 제공에 따른 요금 정산을 위하여 필요한 경우\n\t2) 배송업무상 배송업체에 알려주는 경우\n\t3) 다른 법률에 특별한 규정이 있는 경우 \n\t4) 정보통신윤리위원회의 요청이 있는 경우 \n\t5) 관계 법령에 의하여 수사상 목적으로 정해진 절차와 방법에 따라 관계기관의 요구가 있는 경우\n\n제 10 조 (회원의 권리 및 의무)\n1. 회원은 한동대학교 CRA iTaxi팀에서 제공하는 모든 서비스와 정보를 제공받을 권리가 있습니다.\n2. 회원은 본 이용약관이나 별도로 정해진 제반 규정, 관계법령의규정 사항을 준수하여야 합니다.\n3. 회원은 한동대학교 CRA iTaxi팀이 규정한 회원의 요건들을 충족해야만 회원의 자격을 유지할 수 있습니다.\n4. 회원은 이 약관 및 관계법령에서 규정 한 사항을 준수해야 하며 부당행위 발견 시 한동대학교 CRA iTaxi팀이 정한 소정의 배상을 해야 합니다.\n5. 회원은 이용 신청 시 기재한 사항이 변경되었을 경우에는 온라인 수정을 해야 합니다.\n\n제 3장 서비스 이용\n\n제 11 조 (서비스 이용 시간)\n1. 서비스 이용은 한동대학교 CRA iTaxi팀의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영을 원칙으로 하며 새로운 서비스로의 교체 기타 \'한동대학교 CRA iTaxi팀\'가 적절하다고 판단하는 사유에 기하여 현재 제공되는 서비스를 완전히 중단할 수 있습니다.\n2. 컴퓨터 등 정보통신설비의 보수점검 · 교체 및 고장, 통신의 두절 등의 부득이한 사유가 발생한 경우에는 한동대학교 CRA iTaxi팀이 정한 날이나 시간에 일시적으로 서비스가 중단 될 수 있습니다.\n3. 한동대학교 CRA iTaxi팀은 서비스를 특정범위로 분할하여 각 범위별로 이용가능시간을 별도로 지정할 수 있습니다. 다만 이 경우 그 내용을 사전에 공지합니다.\n\n제 12 조 (회원 번호 관리)\n1. 회원이 등록한 이용자 ID 및 비밀번호에 의하여 발생되는 사용상의 과실 또는 제3자에 의한 부정사용 등에 대한 모든 책임은 해당 회원에게 있습니다. 다만, 한동대학교 CRA의 고의 또는 중과실이 있는 경우에는 그러하지 아니합니다.\n2. 한동대학교 CRA는 이용자 ID에 의하여 제반 이용자 관리업무를 수행하므로 이용고객이 이용자 ID를 변경하고자 하는 경우 한동대학교 CRA가 인정할 만한 사유가 없는 한, 이용자 ID의 변경을 제한할 수 있습니다.\n\n제 13 조 (게시물의 관리)\n한동대학교 CRA iTaxi팀은 다음 각 호의 1에 해당하는 게시물이나 자료는 임의로 삭제하거나 이동 또는 등록 거부를 할수 있고 경우에 따라서는 경고를 주거나 회원의 활동을 제한할 수 있습니다.\n1) 게시물에 비속어나 비속어를 변형한 단어를 포함하고 있어 글을 읽는 이가 언짢은 기분을 느낀다고 판단될 경우\n2) 게시물에 직접적인 비속어가 사용되지 않았더라도 다른 학우나 교수, 교직원들을 악의적으로 비방하려는 의도가 보인다고 판단될 경우\n3) 게시물에 직접적인 비속어가 사용되지 않았고 다른 학우나 교수, 교직원들을 악의적으로 비방하려는 의도가 없다고 하더라도 한동대학교 사회에 건설적이지 않은 이슈를 몰고 와 학교 내 분열을 일으키는 글이라고 판단될 경우\n4) 타인의 동의 없이 그의 개인신상정보 등을 유출하여 문제의 소지를 유발할 가능성이 있는 게시물\n5) 허위사실을 담고 있는 게시물\n6) 선정적인 내용이 있는 게시물\n7) 유사 혹은 동일한 주제로 짧은 시간 동안 동일 게시판, 혹은 여러 게시판에 도배성으로 게시된 게시물\n\n제 14 조 (정보의 제공)\n한동대학교 CRA는 회원이 서비스 이용 중 필요가 있다고 인정되는 다양한 정보에 대해서는 전자우편이나 서신우편 등의 방법으로 이용자에게 제공할 수 있습니다.\n\n<부 칙>\n제 1조 (면책조항)\n1. 한동대학교 CRA iTaxi팀은 천재지변, 전쟁 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.\n2. 한동대학교 CRA iTaxi팀은 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.\n3. 한동대학교 CRA iTaxi팀은 회원이 서비스를 통하여 얻은 자료로 인한 손해 및 서비스 이용 중 발생한 사고에 관하여 책임을 지지 않습니다. 단, 기술적 문제로 인해 발생한 사고는 제외로 한다.\n4. 한동대학교 CRA iTaxi팀은 회원이 서비스에 게재한 각종 정보나 자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 책임을 지지 않습니다.\n\n제 2조 (약관 외 사항)\n1. 본 약관에 명시되지 않은 사항에 대해서는 관계 법령 또는 전자상거래 관례 및 학교 교칙에 따릅니다.\n2. 본 약관은 2018년 09월 14일부터 적용됩니다.\n\n이용약관 문의\n이름　:　최 효 은\n소속 / 직위　:　한동대학교 CRA / iTaxi 팀장\nE - M A I L　:　cra.handong.service@gmail.com"

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