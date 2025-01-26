import AnimatedCursor from 'react-animated-cursor'
import Layout from './components/layouts/Layout'

const App = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="white"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={1.5}
        outerStyle={{
          border: '3px solid black'
        }}
        innerStyle={{
          backgroundColor: 'white'
        }}
      />
    <Layout>
      <AnimatedCursor/>
    </Layout>
    </>
  )
}

export default App