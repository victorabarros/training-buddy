import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 13, textAlign: "justify" }}>
        Bem vindo ao Training Buddy!
        {"\n\n"}
        Aqui você encontra colegas para treinar com você, profissionais qualificados e pode alugar equipamentos para melhorar as suas atividades, tudo isso em um só lugar.
        {"\n\n"}
        Você poderá escolher dois tipos de perfil: Professor ou aluno.
        {"\n\n"}
        Como professor você irá nos informar quais são as modalidades, dias e lugares que você pode oferecer seu serviço. Como aluno você poderá encontrar professores, montar grupos de treino ou encontrar um que se encaixe melhor no seu perfil, além de poder alugar equipamentos para a sua atividade.
        {"\n\n"}
        Então vamos lá, qual perfil você quer ser cadastrar?
      </Text>

      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("./assets/teacher.png")} />
          </View>
          <Text style={{textAlign: "center", fontSize: 13}}>PROFESSOR</Text>
        </View>
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("./assets/student.png")} />
          </View>
          <Text style={{textAlign: "center", fontSize: 13}}>ALUNO</Text>
        </View>
      </View>

      <View style={{flexDirection: "row", justifyContent: "space-around"}}>
        <Text style={{fontSize: 18}}>{"<"}</Text>
        <Text style={{fontSize: 13}}>1/3 PASSOS</Text>
        <Text style={{fontSize: 18}}>{">"}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 50,
    justifyContent: "space-between",
  },
  imageContainer: {
    backgroundColor: "white",
    padding: 5,
    margin: 10,
    borderRadius: 15,
    elevation: 5,
  },
  image: {
    width: 95,
    height: 120,
  },
})

export default App
