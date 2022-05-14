import React, { useEffect, useState, memo} from "react"

const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading
}

function Twitter(props) {
 const {loading} = props
 const [tweet, setTweet] = useState('title')


   //uso do useEffect é similar ao componentDidMount()
   useEffect(() => {
    const {posts, loading} = props
    console.log('componentDidMount', posts)
    console.log('componentDidMount:loading', loading)
   }, [])

   //ComponentDidUpdate()
   useEffect(() =>{
     console.log('componentDidUpdate', loading)
   }, [loading])

   //componentWillUnmout
   useEffect(() => {
     return() => {
       console.log('componentWillUnmout: Removido com sucesso!')
     }
   }, [])

  //  componentDidUpdate = (prevProps) => {
  //    const { loading } = props
  //     if(props.loading !== prevProps.loading) {
  //       console.log('componentDidUpdate:loading', loading)
  //     }
  //  }

  //  componentWillUnmount =   () => {
  //    console.log('componentWillUnmount: fui removido ;) ')
  //  }

  //  shouldComponentUpdate = (nextProps, nextState) => {
  //    return state.tweet !== nextState.tweet || nextProps.loading !== this.props.loading
  //  }

   const handleTweet = () => {
     setTweet('Tweet atualizado com sucesso')
   }

  console.log('Tweet Atualizado', tweet)

  return (
     <div>
       <button onClick={handleTweet}>
         re-tweet
       </button>
       <p style={{color: "lightblue"}}> Esta é a Aula reactjs </p>
     </div>
   )
}

export default memo(Twitter, areEqual)