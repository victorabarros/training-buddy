import TFooter from '../components/TFooter'
import THead from '../components/THead'
import TLayerOptions from '../components/TLayerOptions'

const IndexPage = () => (
  <>
    <THead />
    <TLayerOptions
      title={'Aulas mais procuradas'}
      options={['Canoagem', 'Surf', 'Tenis', 'Funcional']}
    />
    <TLayerOptions title={'Recentes'} options={['Pranchas', 'Natação', 'Bicicletas', 'Corrida']} />
    <TLayerOptions
      title={'Aluguel de equipamentos e roupas'}
      options={['Pranchas', 'Raquete', 'Roupa', 'Remo']}
    />
    <TFooter />
  </>
)

export default IndexPage
