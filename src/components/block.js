import React from "react";
import indexStyles from "../styles/index.module.scss"
import classNames from "classnames"
import {connect} from "react-redux";

class Block extends React.Component {

  onClick = () => {
    const { index, searchBlock, isMine } = this.props
    if(!isMine) {
      searchBlock(index)
    }
  }

  onRightClick = (e) => {
    e.preventDefault()
    const { index, setMine } = this.props
    setMine(index)
  }

  render() {
    const { style, type, isOpen, len, isMine } = this.props
    return (
      <div
        onClick={ () => this.onClick() }
        onContextMenu={ e => this.onRightClick(e) }
        style={ style }
        className={ classNames(indexStyles.block, { mine: isOpen && type === 10, open: isOpen }) }
      >
        {
          isOpen ? (type === 10 ? 'X' : len) : isMine ? '%' : ''
        }
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    searchBlock: (index) => dispatch({ type: `SEARCH_BLOCK`, index }),
    setMine: (index) => dispatch({ type: `SET_MINE`, index }),
  }
}

const ConnectedBlock = connect(
  mapStateToProps,
  mapDispatchToProps
)(Block)

export default ConnectedBlock
