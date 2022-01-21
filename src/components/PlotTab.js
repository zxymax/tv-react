import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from "@chakra-ui/react"
import styled from '@emotion/styled'
import { SET_PLOT_TAB } from '../store/actionTypes'


 const arr = Object.keys(Array.from({length:720})).map(function(item){
     return +item;
 });


const ListBox = styled.div`
  padding: 5px;
`

const ButtonBox = styled.span`
  display: inline-block;
  margin: 0 20px 12px 0;
  font-size: 18px;
  text-align: center;
`

class PlotTab extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { setPlotTab, plotTabActive  } = this.props
    return (
      <>
        <ListBox>
          {
            arr.map((item, index) => {
              const BASE = 10
              if(index % BASE === 0) {
                const firstSub = arr[item]
                const firstBase = arr[index+1] 
                const secondBase = arr[index] + BASE
                const secondSub = secondBase - 1

                if(firstSub === plotTabActive[0] && secondSub === plotTabActive[1]) {
                  console.log('active')
                  return (
                    <ButtonBox key={index}>
                      <Button colorScheme='teal' variant='solid' onClick={() => setPlotTab([firstSub, secondSub])}  w={'100px'} p={4} fontSize={'sm'}  borderRightRadius="5">{ firstBase } - { secondBase }</Button>
                    </ButtonBox>
                  )

                } else {

                  return (
                    <ButtonBox key={index}>
                      <Button  onClick={() => setPlotTab([firstSub, secondSub])}  w={'100px'} p={4} fontSize={'sm'}  borderRightRadius="5">{ firstBase } - { secondBase }</Button>
                    </ButtonBox>
                  )


                }
              }
          })

        }
              
        </ListBox>
      </>
    )
  }
}


const mapStateToProps = (state) => {

  const  { plotList, plotTabActive } = state.plotParams
  return {
    plotList,
    plotTabActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPlotTab(id) {
      const action = {
        type: SET_PLOT_TAB,
        id
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlotTab)



