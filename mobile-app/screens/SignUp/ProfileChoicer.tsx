import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import { useHistory } from 'react-router'

enum Profile {
  teacher = 'teacher',
  student = 'student',
}

const ProfileChoicer = () => {
  const history = useHistory()

  const [profile, setProfile] = useState<Profile>()
  return (
    <View style={styles.container}>
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

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => setProfile(Profile.teacher)}>
          <View
            style={[styles.imageContainer, profile === Profile.teacher ? { opacity: 0.5 } : {}]}
          >
            <Image style={styles.image} source={require('../../assets/teacher.png')} />
          </View>
          <Text style={[styles.text, { textAlign: 'center' }]}>PROFESSOR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setProfile(Profile.student)}>
          <View
            style={[styles.imageContainer, profile === Profile.student ? { opacity: 0.5 } : {}]}
          >
            <Image style={styles.image} source={require('../../assets/student.png')} />
          </View>
          <Text style={[styles.text, { textAlign: 'center' }]}>ALUNO</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={[styles.bottomButton, { color: 'white' }]}>{'<'}</Text>
        <Text style={styles.text}>1/3 PASSOS</Text>
        <Text
          style={styles.bottomButton}
          onPress={() => {
            console.log('click')
            history.push('/signup/login')
          }}
        >
          {'>'}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'justify',
    fontFamily: 'monospace',
  },
  imageContainer: {
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    borderRadius: 15,
    elevation: 5,
  },
  image: {
    width: 95,
    height: 120,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomButton: {
    fontSize: 18,
    width: 25,
    borderRadius: 12.5,
    textAlign: 'center',
  },
})

export default ProfileChoicer
