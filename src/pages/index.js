import React from "react"
import indexStyles from "../styles/index.module.scss"
import Block from "../components/block";
import {connect} from "react-redux";


class Home extends React.Component {


  render() {
    const { blocks, mines, selectedMines, restart } = this.props
    const countOfMines = mines.length - selectedMines.length
    return (
      <div className={ indexStyles.page }>
        <div>
          {
            `전체 갯수: ${mines.length}`
          }
        </div>
        <div>
          {
            `남은 갯수: ${countOfMines > 0 ? countOfMines : 0}`
          }
        </div>
        <div className={ indexStyles.blockContainer }>
          {
            blocks.map(block =>
              <Block key={ block.index } { ...block }/>
            )
          }
        </div>
        <br/>
        <button onClick={ () => restart() }>다시하기</button>
      </div>
    )
  }
}

const mapStateToProps = ({ blocks, mines, selectedMines }) => {
  return { blocks, mines, selectedMines }
}

const mapDispatchToProps = dispatch => {
  return {
    restart: () => dispatch({ type: `RESTART` })
  }
}

const ConnectedHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default ConnectedHome
