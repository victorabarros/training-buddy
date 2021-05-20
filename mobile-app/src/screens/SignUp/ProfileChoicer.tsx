import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import BottomTab from '../../components/BottomTab'
import styles from './styles'

enum Profile {
  teacher = 'teacher',
  student = 'student',
}

const ProfileChoicer = () => {
  const navigation = useNavigation()
  const [profile, setProfile] = useState<Profile>()

  return (
    <View style={[styles.root, { padding: 30, paddingTop: 40 }]}>
      <StatusBar />
      <Text style={styles.text}>
        Bem vindo ao Training Buddy!
        {'\n\n'}
        Aqui você encontra colegas para treinar com você, profissionais qualificados e pode alugar
        equipamentos para melhorar as suas atividades, tudo isso em um só lugar.
        {'\n\n'}
        Você poderá escolher dois tipos de perfil: Professor ou aluno.
        {'\n\n'}
        Como professor você irá nos informar quais são as modalidades, dias e lugares que você pode
        oferecer seu serviço. Como aluno você poderá encontrar professores, montar grupos de treino
        ou encontrar um que se encaixe melhor no seu perfil, além de poder alugar equipamentos para
        a sua atividade.
        {'\n\n'}
        Então vamos lá, qual perfil você quer ser cadastrar?
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {/* IN FIRST MOMENT ONLY SIGNUP FOR STUDENTS, USE justifyContent: 'space-between' */}
        {/* <TouchableOpacity onPress={() => setProfile(Profile.teacher)}>
          <View
            style={[styles.imageContainer, profile === Profile.teacher ? { opacity: 0.5 } : {}]}
          >
            <Image style={styles.image} source={require('../../../assets/teacher.png')} />
          </View>
          <Text style={[styles.text, { textAlign: 'center' }]}>PROFESSOR</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => setProfile(Profile.student)}>
          <View
            style={[styles.imageContainer, profile === Profile.student ? { opacity: 0.5 } : {}]}
          >
            <Image style={styles.image} source={require('../../../assets/student.png')} />
          </View>
          <Text style={[styles.text, { textAlign: 'center' }]}>ALUNO</Text>
        </TouchableOpacity>
      </View>

      <BottomTab
        stage={1}
        nextArrowOnPressed={() => {
          // validate if profile was chosed
          navigation.navigate('LogInScreen')
        }}
      />
    </View>
  )
}

export default ProfileChoicer
