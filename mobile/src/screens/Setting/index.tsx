import React from 'react'
import { View, Text, TouchableOpacity, ViewProps } from 'react-native'
import ProfileButton from '../../components/ProfileButton'
import styles from './styles'

interface OptionsContainerProps extends ViewProps {
  title: string
  options: string[]
}

const OptionsContainer = ({ title, options }: OptionsContainerProps) => (
  <View style={{ width: 230, marginVertical: 20 }}>
    <Text style={styles.title}>{title}</Text>

    {options.map(option => (
      <TouchableOpacity
        key={`button-${option}`}
        onPress={() => alert('not implemented yeat')}
        style={{ height: 30 }}
      >
        <Text>
          <Text style={{ fontWeight: 'bold' }}> - </Text>
          {option}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
)

const SettingView = () => (
  <View style={styles.root}>
    <ProfileButton size={50} backgroundColor={'#105492'} color={'white'} />

    <View style={{ alignItems: 'center' }}>
      <OptionsContainer
        title={'Editar Perfil'}
        options={['Alterar tipo de perfil', 'Alterar preferências']}
      />
      <OptionsContainer
        title={'Privacidade e segurança'}
        options={['Trocar senha', 'Termos e condições']}
      />
      <OptionsContainer title={'Ajuda'} options={['Chat', 'Telefone para contato']} />
    </View>

    <View />
  </View>
)

export default SettingView
